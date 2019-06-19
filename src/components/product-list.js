import React from 'react'
import { css } from 'theme-ui'

import tokens from '../utils/tokens'

import ProductThumbnail from './product-thumbnail'

const ProductList = (props) => {
  const { mediaQueries } = tokens
  const { products } = props
  return (
    <ul css={css({
      listStyle: 'none',
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      [mediaQueries.lg]: {
        display: 'grid',
        gridTemplateColumns: `repeat(4, 1fr)`,
        gridGap: tokens.space[5],
      }
    })}>
      {products.map(({ node }) => {
          return (
            <li
              key={node.id}
              css={css({
                mb: [4,4,0],
              })}
            >
              <ProductThumbnail
                name={node.name}
                image={node.mainPhoto}
                url={node.fields.path}
                description={node.shortDescription.internal.content}
                price={node.price}
              />
            </li>
          )
        })}
    </ul>
  )
}

export default ProductList