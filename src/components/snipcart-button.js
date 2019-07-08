import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import { css } from "theme-ui";

import theme from '../gatsby-plugin-theme-ui'

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  font-family: ${theme.fonts.heading};
  height: 64px;
  font-size: 18px;
  cursor: pointer;
  padding: 0 2rem;
  border: none;
  width: 100%;
`

// The purpose of this function is to make it easier to append the siteUrl
// w/o having to duplicate it every single time.
const SnipcartButton = ({ children, relativeUrl, className, ...rest }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `)
  
  return (
    <Button
      className={`snipcart-add-item ${className}`}
      data-item-url={`${data.site.siteMetadata.siteUrl}${relativeUrl || ''}`}
      {...rest}
      css={css({
        backgroundColor: `accent`,
      })}
    >{children}</Button>
  )
}

export default SnipcartButton

SnipcartButton.propTypes = {
  relativeUrl: PropTypes.string.isRequired,
}