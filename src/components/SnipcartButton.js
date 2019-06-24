import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  font-family: bebas-neue, sans-serif;
  background-color: ${props => props.theme.colors.accent};
  height: 64px;
  font-size: 18px;
  cursor: pointer;
  padding: 0 2rem;
  justify-self: flex-end;
  border: none;
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
      className={className}
      data-item-url={`${data.site.siteMetadata.siteUrl}/${relativeUrl || ''}`}
      {...rest}
    >{children}</Button>
  )
}

export default SnipcartButton

SnipcartButton.propTypes = {
  relativeUrl: PropTypes.string.isRequired,
}