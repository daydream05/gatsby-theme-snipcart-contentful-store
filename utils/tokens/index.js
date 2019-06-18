const colors = {
  initialColorMode: 'light',
  accent: `#FFC001`,
  black: `#1C1C1C`,
  white: `#FFFFFF`,
  grey: {
    dark: `#D4D4D4`,
    light: `#F8F8F8`,
    reallyDark: `#979EA6`
  }
}

const fonts = {
  body: 'system-ui, sans-serif',
  heading: 'system-ui, sans-serif',
  monospace: 'Menlo, monospace'
}

const fontWeights = {
  body: 400,
  heading: 700,
  bold: 700,
}

const lineHeights = {
  body: 1.5,
  heading: 1.125,
}

const breakpoints = {
  xs: `320px`,
  sm: `550px`,
  md: `750px`,
  lg: `1000px`,
  xl: `1200px`,
  xxl: `1600px`
}

const space = [
  0, 4, 8, 16, 32, 64, 128, 256, 512
]

let mediaQueries = {}
for (let breakpoint in breakpoints) {
  mediaQueries[breakpoint] = `@media (min-width: ${breakpoints[breakpoint]})`
}

export default {
  fonts,
  fontWeights,
  breakpoints,
  space,
  mediaQueries,
  lineHeights,
  colors,
}