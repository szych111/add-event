import React from 'react'
import { render, screen } from '@testing-library/react'
import Form from './Form'

describe('form element', () => {
  test('render first name input', () => {
    render(<Form />)
    const inputFirstName = screen.getByPlaceholderText('first name')
    expect(inputFirstName).toBeInTheDocument()
  })

  test('render last name input', () => {
    render(<Form />)
    const inputLastName = screen.getByPlaceholderText('last name')
    expect(inputLastName).toBeInTheDocument()
  })

})

