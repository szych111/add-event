import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import Input from './Input'

test('change values on user input', () => {
  const changeHandler = jest.fn()
  const {container} = render(<input type="text" onChange={changeHandler} />)
  const input = container.firstChild
  fireEvent.change(input, {target: {value: 'a'}})
  expect(changeHandler).toHaveBeenCalledTimes(1)
  expect(input.value).toBe('a')
})



