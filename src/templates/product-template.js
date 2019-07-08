import React, { useState } from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import { css, Styled } from 'theme-ui'
import Img from 'gatsby-image'
import _ from 'lodash'

import tokens from '../utils/tokens'
import theme from '../utils/theme'

import Layout from '../components/layout'
import SnipcartButton from '../components/snipcart-button'
import QuantitySelector from '../components/quantity-selector'
import VariantSelector from '../components/variant-selector'
import ProductSEO from '../components/product-seo'

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
  display: block;
`

const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${theme.space[2]}px;
  ${theme.mediaQueries.xl} {
    grid-template-columns: 1fr 1fr;
    padding-right: ${theme.space[6]}px;
  }
`

const ProductTemplate = ({ data }) => {
  const { name, id, longDescription, price, fields, thumbnailPhoto, variants, shortDescription } = data.contentfulProduct

  const [quantity, setQuantity] = useState(1)

  const defaultFieldValues = {}

  const groupedVariantsByOptionName = _.groupBy(variants, 'optionName')

  Object.keys(groupedVariantsByOptionName).forEach((key, index) => {
    defaultFieldValues[index] = groupedVariantsByOptionName[key][0].label
  })

  const [fieldValues, setFieldValue] = useState(defaultFieldValues)

  let snipcartFields = {}
  // we 
  Object.keys(groupedVariantsByOptionName).forEach((variantOptionName, index) => {
    snipcartFields[`data-item-custom${index + 1}-name`] = variantOptionName
    snipcartFields[`data-item-custom${index + 1}-required`] = true
    snipcartFields[`data-item-custom${index + 1}-options`] = groupedVariantsByOptionName[variantOptionName].map((option) => {
      const additionalCost = option.additionalCost !== 0 || undefined ? `[+${option.additionalCost}]` : ``
      return `${option.label}${additionalCost}`
    }).join(`|`)
    snipcartFields[`data-item-custom${index + 1}-value`] = fieldValues[index]
  })

  return (
    <Layout>
      <ProductSEO
        name={name}
        price={price}
        description={shortDescription.internal.content}
      />
      <section
        css={css({
          [tokens.mediaQueries.lg]: {
            display: `grid`,
            gridTemplateColumns: `1fr 1fr`,
            gridGap: tokens.space[4],
            maxWidth: tokens.maxWidths[1],
            maxHeight: `100vh`,
            margin: `auto`,
            px: [5],
            pt: [5],
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
          {longDescription &&
            <div
              dangerouslySetInnerHTML={{ __html: longDescription.childMarkdownRemark.html }}
              css={css({
                lineHeight: 'body',
                mb: [3,3,3,5],
                color: `black`,
                opacity: 0.8,
              })}
            />}
          <div>
            
            {Object.keys(groupedVariantsByOptionName).map((variantOptionName, i) => {
              return (
                <div key={i}>
                  <VariantSelector
                    options={groupedVariantsByOptionName[variantOptionName]}
                    optionName={variantOptionName}
                    defaultValue={fieldValues[i]}
                    onValueChange={(label) => {
                      setFieldValue({
                        ...fieldValues,
                        [i]: label
                      })
                  }}
                  />
                </div>
              )
            })}
          </div>
          <QuantityGroup>
            <QuantityTitle>Quantity</QuantityTitle>
            <QuantitySelector onQuantityChange={setQuantity} />
          </QuantityGroup>
          <ButtonGroup>
            <SnipcartButton
              data-item-id={id}
              data-item-name={name}
              data-item-price={price}
              data-item-image={thumbnailPhoto.small.src}
              {...snipcartFields}
              className="test"
              relativeUrl={fields.path}
            >Buy now</SnipcartButton>
            <SnipcartButton
              data-item-id={id}
              data-item-name={name}
              data-item-price={price}
              data-item-quantity={quantity}
              data-item-image={thumbnailPhoto.small.src}
              {...snipcartFields}
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
        fluid(quality: 100, maxWidth: 600, maxHeight: 600) {
          ...GatsbyContentfulFluid_withWebp
        }
        fixed(width: 600, height: 600) {
          ...GatsbyContentfulFixed_withWebp
        }
        small: fixed(width: 100, height: 100) {
          ...GatsbyContentfulFixed_withWebp
        }
      }
      fields {
        path
      }
      variants {
        optionName
        label
        additionalCost
      }
      shortDescription {
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