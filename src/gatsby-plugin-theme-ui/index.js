import { base } from "@theme-ui/presets"

import merge from "lodash.merge"

import tokens from "../utils/tokens"
import typography from '../utils/typography'

const theme = merge({
  ...tokens,
  ...typography,
});

console.log(theme)

console.log(typography)

export default theme