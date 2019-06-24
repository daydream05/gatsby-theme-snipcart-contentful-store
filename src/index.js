import React from 'react'
import ThemeProvider from './components/theme-provider'

export const wrapPageElement = ({ element }) => {
  return (
    <ThemeProvider>{element}</ThemeProvider>
  )
}

