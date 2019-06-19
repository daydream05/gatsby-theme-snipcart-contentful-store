import React from 'react'
import { graphql } from 'gatsby'
import { css, Styled } from 'theme-ui'

import tokens from '../utils/tokens'

import Layout from '../components/layout'

const ProductTemplate = ({ data }) => {
  const { name, shortDescription, price } = data.contentfulProduct

  return (
    <Layout>
      <section
        css={css({
          [tokens.mediaQueries.lg]: {
            display: `grid`,
            gridTemplateColumns: `1fr 1fr`,
            gridGap: tokens.space[5],
            maxWidth: tokens.maxWidths[2],
            maxHeight: `100vh`,
            margin: `auto`,
            px: [5],
            pt: [6],
          }
        })}
      >
        <div>Photo here</div>
        <section>
          <Styled.h1
            css={css({
              mb: [4],
            })}
          >{name}</Styled.h1>
          <div>
            <p>{shortDescription.internal.content}</p>
          </div>
          <span
            css={css({
              fontSize: [4],
              fontWeight: 'body',
            })}
          >${price}
            <span
              css={css({
                opacity: 0.25,
                fontSize: [3],
              })}
            >.00</span>
          </span>
        </section>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulProduct(slug: { eq: $slug }) {
      name
      price
      fields {
        path
      }
      shortDescription {
        internal {
          content
        }
      }
    }
  }
`

export default ProductTemplate