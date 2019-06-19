import React from 'react'
import { ThemeProvider, Styled } from 'theme-ui'
import theme from './utils/theme'

export const wrapRootElement = ({ element }) =>
  <ThemeProvider theme={theme}>
    <Styled.root>
      {element}
    </Styled.root>
  </ThemeProvider>