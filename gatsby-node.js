exports.onCreateNode = (
  { node, actions },
  { storePath = `/store`}
) => {
  const { createNodeField } = actions

  if(node.internal.type === `ContentfulProduct`) {
    const url = `${storePath}/${node.slug}/`

    createNodeField({
      node,
      name: `path`,
      value: url,
    })
  }
}

exports.createPages = (
  { graphql, actions },
  { storePath = `/store`, }
) => {
  const { createPage } = actions
  const loadProducts = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulProduct {
          edges {
            node {
              slug
              fields {
                path
              }
            }
          }
        }
      }
    `).then(result => {
      const products = result.data.allContentfulProduct.edges

      products.map(({ node }) => {
        const url = node.fields.path

        createPage({
          path: url,
          component: require.resolve(`./src/templates/product-template.js`),
          context: {
            slug: node.slug,
          }
        })
      })

      resolve()
    })
  })

  // create root store landing page
  createPage({
    path: `${storePath}/`,
    component: require.resolve(`./src/templates/store-landing-template.js`)
  })

  return Promise.all([loadProducts])
}