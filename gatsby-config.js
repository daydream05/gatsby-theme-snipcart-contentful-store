module.exports = themeOptions => {
  return {
    siteMetadata: {
      title: `Contentful and Snipcart Powered Shop`,
      // will override the default values,
      ...themeOptions.siteMetadata,
      theme: JSON.stringify(themeOptions.theme)
    },
    plugins: [
      {
        resolve: `gatsby-mdx`,
        options: {
          defaultLayouts: {
            default: require.resolve(`./src/components/layout.js`),
          }
        }
      },
      {
        resolve: `gatsby-source-contentful`,
        options: themeOptions.contentfulOptions,
      },
      `gatsby-plugin-emotion`,
    ],
  }
}