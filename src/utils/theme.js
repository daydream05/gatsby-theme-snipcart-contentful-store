import merge from 'lodash.merge'

import typography from './typography'
import tokens from './tokens'

export default merge({
  ...typography,
  ...tokens
})