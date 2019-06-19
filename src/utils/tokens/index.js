const colors = {
  initialColorMode: 'light',
  text: `#1C1C1C`,
  background: `#fff`,
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

const breakpoints = [`320px`, `550px`, `750px`, `1000px`, `1200px`, `1600px`]

breakpoints.xs = breakpoints[0]
breakpoints.sm = breakpoints[1]
breakpoints.md = breakpoints[2]
breakpoints.lg = breakpoints[3]
breakpoints.xl = breakpoints[4]
breakpoints.xxl = breakpoints[5]

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