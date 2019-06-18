import React from "react"
import { graphql, Link } from 'gatsby'

import tokens from '../../utils/tokens'

import Layout from '../components/layout'

const StoreLanding = ({ data }) => {
  return (
    <Layout>
      <h1>I'm a shopping page</h1>
      <div>
        <ul>
          {data
            .allContentfulProduct
            .edges
            .map(({node}) => {
              return (
                <li key={node.id}>
                  <Link to={node.fields.path}>{node.name}</Link>
                </li>
              )
            })}
        </ul>
      </div>
    </Layout>
  )
}

export const storeLandingQuery = graphql`
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
          fields {
            path
          }
        }
      }
    }
  }
`

export default StoreLanding