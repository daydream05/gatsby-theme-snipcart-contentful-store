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

const fontSizes =
  [`0.72rem`, `0.83rem`, `1rem`, `1.333rem`, `2rem`, `2.66rem`, `4.667rem`]

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

const maxWidths = [`900px`, `1200px`, `1440px`]

const headerHeight = `88.3px`

const zIndices = {
  header: `100`,
}

const buttons = {
  default: {
    border: `1px solid black`,
    backgroundColor: `white`,
    borderRadius: 4,
    padding: 3,
    cursor: `pointer`,
    ":hover, :focus": {
      backgroundColor: `black`,
      color: `white`,
    }
  },
  variant: {
    default: {
      border: `1px solid black`,
      backgroundColor: `white`,
      borderRadius: 4,
      padding: 3,
      cursor: `pointer`,
    },
    selected: {
      backgroundColor: `black`,
      color: `white`,
    }
  }
}

export default {
  fonts,
  fontSizes,
  fontWeights,
  breakpoints,
  space,
  mediaQueries,
  lineHeights,
  colors,
  maxWidths,
  headerHeight,
  zIndices,
  buttons,
}