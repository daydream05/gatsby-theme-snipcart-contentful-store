import React from "react"
import { graphql } from 'gatsby'
import { css, Styled } from 'theme-ui'

import theme from '../gatsby-plugin-theme-ui'

import Layout from '../components/layout'
import ProductList from '../components/product-list'

const StoreLanding = props => {
  const { data } = props
  const { mediaQueries } = theme

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
              maxWidth: [theme.maxWidths[1]],
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