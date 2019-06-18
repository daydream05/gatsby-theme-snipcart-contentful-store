import React from "react"
import { graphql } from 'gatsby'

import tokens from '../../utils/tokens'

import Layout from '../components/layout'

const Shop = ({ data }) => {
  console.log(data)

  return (
    <Layout>
      <h1>I'm a shopping page</h1>
      <div>
        <ul>
          {data.allContentfulProduct.edges.map(({ node }) => {
            return (
              <li
                key={node.id}
              >
                {node.name}
              </li>
            )
          })}
        </ul>
      </div>
    </Layout>
  )
}

export const shopQuery = graphql`
  query {
    allContentfulProduct {
      edges {
        node {
          id
          name
          price
          shortDescription {
            internal {
              content
            }
          }
        }
      }
    }
  }
`

export default Shop