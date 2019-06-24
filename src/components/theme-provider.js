import React from 'react'
import { ThemeProvider, Styled } from 'theme-ui'

import theme from '../utils/theme'

const ThemeProviderWithTheme = (props) => {

  return (
    <ThemeProvider theme={theme}>
      <Styled.root>
        {props.children}
      </Styled.root>
    </ThemeProvider>
  )
}

export default ThemeProviderWithTheme