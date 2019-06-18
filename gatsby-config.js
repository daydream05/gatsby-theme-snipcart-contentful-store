const path = require("path")

module.exports = themeOptions => {
  return {
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
    ],
  }
}