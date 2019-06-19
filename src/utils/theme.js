import merge from 'lodash.merge'

import typography from './typography'
import tokens from './tokens'

console.log(typography)

const theme = merge({
  ...typography,
  ...tokens
})

console.log(theme)

export default theme