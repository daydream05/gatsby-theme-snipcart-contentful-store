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
        <div
          css={css({
            backgroundColor: 'grey.dark',
          })}
        />
        <section
          css={css({
            px: [3,3,3,3,4,0],
          })}
        >
          <span
            css={css({
              fontSize: [3],
              fontWeight: 'body',
            })}
          >${price}
          </span>
          <Styled.h1
            css={css({
              mb: [1],
            })}
          >{name}</Styled.h1>
          <div>
            <p>{shortDescription.internal.content}</p>
          </div>
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