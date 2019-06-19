import React from "react"
import { graphql } from 'gatsby'
import { css, Styled } from 'theme-ui'

import tokens from '../utils/tokens'

import Layout from '../components/layout'
import ProductList from '../components/product-list'
import ProductThumbnail from '../components/product-thumbnail'

const StoreLanding = props => {
  const { data } = props
  const { mediaQueries } = tokens

  console.log(props)

  return (
    <Layout>
      <div
        css={css({
          backgroundColor: `white`,
          minHeight: `100vh`,
        })}
      >
        <div
          css={css({
            px: [3],
            pt: [5],
            [mediaQueries.lg]: {
              maxWidth: [tokens.maxWidths[1]],
              margin: `auto`,
            }
          })}
        >
          <Styled.h1
            css={css({
              color: 'black',
              mb: [5],
            })}
          >Products</Styled.h1>
          <ProductList products={data.allContentfulProduct.edges} />
        </div>
      </div>
    </Layout>
  )
}

export const storeLandingQuery = graphql`
  query {
    allContentfulProduct {
      edges {
        node {
          ...ProductThumbnail
        }
      }
    }
  }
`

export default StoreLanding