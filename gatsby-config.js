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
        resolve: "gatsby-plugin-page-creator",
        options: {
          path: path.join(__dirname, "src/pages"),
        },
      },
      {
        resolve: `gatsby-source-contentful`,
        options: themeOptions.contentfulOptions,
      },
    ],
  }
}