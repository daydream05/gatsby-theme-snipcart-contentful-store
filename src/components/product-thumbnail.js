import React from 'react'
import Img from 'gatsby-image'
import { graphql, Link } from 'gatsby'
import { css, Styled } from 'theme-ui' 

const ProductThumbnail = (props) => {
  const { name, price, image, url, description } = props
  return (
    <div
      css={css({
        display: `flex`,
        flexDirection: `column`,
        backgroundColor: `white`,
        height: `100%`,
      })}
    >
      <Link
        to={url}
        css={css({
          textDecoration: 'none',
          color: 'inherit',
          cursor: 'pointer',
          height: `100%`,
          display: `flex`,
          flexDirection: `column`,
        })}
      >
        <div css={css({
          mb: [3],
        })}>
          <Img
            fluid={image.fluid}
            alt={image.title}
          />
        </div>
        <div
          css={css({
            py: [3],
            display: `flex`,
            flexDirection: `column`,
            flex: 1,
          })}
        >
          <Styled.h5
            css={css({
              fontSize: [2,2,3],
              lineHeight: 'body',
              mb: [0],
            })}
          >{name}</Styled.h5>
          {description &&
            <Styled.p
              css={css({
                color: 'grey.dark',
                mb: [1],
              })}
            >{description}</Styled.p>}
          <span
            css={css({
              color: 'accent',
              fontWeight: 'bold',
              display: `flex`,
              flex: 1,
              flexDirection: `column`,
              justifyContent: 'flex-end',
            })}
          >${price}</span>
        </div>
      </Link>
    </div>
  )
}

export default ProductThumbnail

export const query = graphql`
  fragment ProductThumbnail on ContentfulProduct {
    id
    name
    price
    mainPhoto {
      title
      fluid(maxWidth: 375 maxHeight: 375) {
        ...GatsbyContentfulFluid_withWebp
      }
      fixed(height: 300 width: 300) {
        ...GatsbyContentfulFixed_withWebp
      }
    }
    shortDescription {
      internal {
        content
      }
    }
    fields {
      path
    }
  }
`