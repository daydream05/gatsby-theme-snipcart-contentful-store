import React, { useState } from 'react'
import styled from '@emotion/styled'
import { css } from 'theme-ui'

import theme from '../utils/theme'

const SelectionTitle = styled.span`
  display: block;
  font-size: ${theme.fontSizes[2]};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: ${theme.space[2]}px;
`

const VariantSelector = (props) => {
  const { options, optionName } = props

  const [selectedOption, setSelectedOption] = useState(null)

  return (
    <div>
      <SelectionTitle>{optionName}</SelectionTitle>
      <div
        css={css({
          display: `flex`,
          mb: 3,
        })}
      >
        {options.map((value, id) => {
          return (
            <div
              css={css({
                mr: 2,
              })}
            >
              <button
                css={css({
                  ...theme.buttons.default,
                })}
                onClick={() =>  setSelectedOption(value.label)}
              >{value.label}</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default VariantSelector