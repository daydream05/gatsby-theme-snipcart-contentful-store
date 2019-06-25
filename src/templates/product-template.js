import React, { useState } from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import { css, Styled } from 'theme-ui'
import Img from 'gatsby-image'

import tokens from '../utils/tokens'
import theme from '../utils/theme'

import Layout from '../components/layout'
import SnipcartButton from '../components/snipcart-button'
import QuantitySelector from '../components/quantity-selector'

const QuantityGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${theme.space[4]}px;
`

const QuantityTitle = styled.span`
  font-size: ${theme.fontSizes[2]};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: ${theme.space[2]}px;
`

const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${theme.space[2]}px;
  ${theme.mediaQueries.lg} {
    grid-template-columns: 1fr 1fr;
    padding-right: ${theme.space[7]}px;
  }
`

const ProductTemplate = ({ data }) => {
  const { name, id, longDescription, price, fields, thumbnailPhoto } = data.contentfulProduct

  const [quantity, setQuantity] = useState(1)
  
  
  return (
    <Layout>
      <section
        css={css({
          [tokens.mediaQueries.lg]: {
            display: `grid`,
            gridTemplateColumns: `1fr 1fr`,
            gridGap: tokens.space[4],
            maxWidth: tokens.maxWidths[2],
            maxHeight: `100vh`,
            margin: `auto`,
            px: [5],
            pt: [6],
          },
          [tokens.mediaQueries.xl]: {
            gridGap: tokens.space[5],
          }
        })}
      >
        <Img
          alt={thumbnailPhoto.title}
          fluid={thumbnailPhoto.fluid}
        />
        <section
          css={css({
            px: [3,4,4,4,4,0],
            py: [4,4,4,4,0,0],
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
              mb: [1,1,1,3],
            })}
          >{name}</Styled.h1>
          <div
            dangerouslySetInnerHTML={{ __html: longDescription.childMarkdownRemark.html }}
            css={css({
              lineHeight: 'body',
              mb: [3,3,3,5],
            })}
          />
          <QuantityGroup>
            <QuantityTitle>Quantity</QuantityTitle>
            <QuantitySelector onQuantityChange={setQuantity} />
          </QuantityGroup>
          <ButtonGroup>
            <SnipcartButton
              data-item-id={id}
              data-item-name={name}
              data-item-price={price}
              relativeUrl={fields.path}
            >Buy now</SnipcartButton>
            <SnipcartButton
              data-item-id={id}
              data-item-name={name}
              data-item-price={price}
              data-item-quantity={quantity}
              css={css({
                backgroundColor: 'white',
                border: `1px solid black`,
              })}
              relativeUrl={fields.path}
            >Add to cart</SnipcartButton>
          </ButtonGroup>
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
      id
      thumbnailPhoto {
        title
        fluid(quality: 100, maxWidth: 720, maxHeight: 720) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      fields {
        path
      }
      shortDescription {
        childMarkdownRemark {
          html
        }
        internal {
          content
        }
      }
      longDescription {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

export default ProductTemplate