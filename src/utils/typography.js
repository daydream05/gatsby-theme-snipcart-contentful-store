import Typography from 'typography'
import { toTheme } from 'theme-ui-typography'

import tokens from './tokens'

const { fonts, fontSizes, lineHeights, colors, mediaQueries } = tokens

const typography = new Typography({
  baseFontSize: "18px",
  headerFontFamily: fonts.heading,
  bodyFontFamily: fonts.body,
  bodyColor: colors.black,
  headerColor: colors.black,
  overrideStyles: ({ rhythm }) => {
    return {
      a: {
        textDecoration: `none`,
        color: colors.black,
      },
      address: {
        marginBottom: 0,
      },
      h1: {
        fontSize: fontSizes[5],
        lineHeight: lineHeights.heading,
        color: "inherit",
      },
      h2: {
        fontSize: fontSizes[4],
        lineHeight: lineHeights.heading,
      },
      h3: {
        fontSize: fontSizes[4],
        lineHeight: lineHeights.heading,
      },
      h4: {
        fontSize: fontSizes[3],
        lineHeight: lineHeights.heading,
      },
      h5: {
        fontSize: fontSizes[0],
        color: "inherit",
      },
      p: {
        lineHeight: lineHeights.body,
      },
      [mediaQueries.xl]: {
        h1: {
          fontSize: fontSizes[6],
        },
        h2: {
          fontSize: fontSizes[5],
        },
        h3: {
          fontSize: fontSizes[4],
        },
        h4: {
          fontSize: fontSizes[3],
        },
        h5: {
          fontSize: fontSizes[0],
        },
      },
    }
  },
})

export default toTheme(typography)