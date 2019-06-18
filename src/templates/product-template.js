import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'

const ProductTemplate = ({ data }) => {
  const { name } = data.contentfulProduct

  return (
    <Layout>
      <h1>{name}</h1>
      <Link to="/shop/">Go back to store page</Link>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulProduct(slug: { eq: $slug }) {
      name
      fields {
        path
      }
    }
  }
`

export default ProductTemplate