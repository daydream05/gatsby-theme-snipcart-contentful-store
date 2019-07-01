import React, { useState, useEffect } from 'react'
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
  const { options, optionName, onValueChange, defaultValue } = props

  const [selectedOption, setSelectedOption] = useState(defaultValue)

  useEffect(() => {
    onValueChange(selectedOption)
  }, [selectedOption])

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
          const isSelected = selectedOption === value.label

          const buttonStyle = isSelected ? {
            ...theme.buttons.variant.default,
            ...theme.buttons.variant.selected
          } : {
            ...theme.buttons.variant.default,
          }
          return (
            <div
              css={css({
                mr: 2,
              })}
              key={id}
            >
              <button
                css={css(buttonStyle)}
                onClick={() => {
                  setSelectedOption(value.label)
                }}
              >{`${value.label} [+$${value.additionalCost}]`}</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default VariantSelector