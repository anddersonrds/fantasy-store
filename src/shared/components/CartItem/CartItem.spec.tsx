import React from 'react'
import { fireEvent } from "@testing-library/react"

import { CartItem } from './CartItem'
import { Product } from '../../types'

describe("CartItem", () => {
  const product: Product = {
    name: "Broad Sword",
    price: 200,
    image: "broad-sword.png"
  }

  it("renders correctly", () => {
    const { container, getByRole } = renderWithRouter(() => (
      <CartItem product={product} removeFromCart={() => {}} />
    ))

    expect(container.innerHTML).toMatch("Broad Sword")
    expect(container.innerHTML).toMatch("200 Zm")
    expect(getByRole('img')).toHaveAttribute('src', 'broad-sword.png')
  })

  describe("on 'Remove' click", () => {
    it("calls passed in function", () => {
      const removeFromCartMock = jest.fn()

      const { getByText } = renderWithRouter(() => (
        <CartItem product={product} removeFromCart={removeFromCartMock}/>
      ))

      fireEvent.click(getByText("Remove"))

      expect(removeFromCartMock).toBeCalledWith(product)
    })
  })
})
