import React from 'react'
import { css } from 'theme-ui'

import theme from '../gatsby-plugin-theme-ui'

import ProductThumbnail from './product-thumbnail'

const ProductList = (props) => {
  const { mediaQueries } = theme
  const { products } = props
  return (
    <ul
      css={css({
        listStyle: "none",
        padding: 0,
        display: "flex",
        flexDirection: "column",
        [mediaQueries.lg]: {
          display: "grid",
          gridTemplateColumns: `repeat(4, 1fr)`,
          gridGap: theme.space[5]
        }
      })}
    >
      {products.map(({ node }) => {
        return (
          <li
            key={node.id}
            css={css({
              mb: [4, 4, 0]
            })}
          >
            <ProductThumbnail
              name={node.name}
              image={node.mainPhoto}
              url={node.fields.path}
              price={node.price}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default ProductList