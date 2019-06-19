import merge from 'lodash.merge'

import typography from './typography'
import tokens from './tokens'

const theme = merge({
  ...typography,
  ...tokens
})

export default theme