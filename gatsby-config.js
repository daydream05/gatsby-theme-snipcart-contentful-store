module.exports = themeOptions => {
  return {
    siteMetadata: {
      title: `Contentful and Snipcart Powered Shop`,
      // will override the default values,
      ...themeOptions.siteMetadata,
    },
    plugins: [
      `gatsby-plugin-theme-ui`,
      {
        resolve: `gatsby-mdx`,
        options: {
          defaultLayouts: {
            default: require.resolve(`./src/components/layout.js`)
          }
        }
      },
      {
        resolve: `gatsby-source-contentful`,
        options: themeOptions.contentfulOptions
      },
      {
        resolve: "gatsby-plugin-snipcart",
        options: themeOptions.snipcartOptions
      },
      `gatsby-transformer-remark`,
      `gatsby-plugin-react-helmet`
    ]
  };
}