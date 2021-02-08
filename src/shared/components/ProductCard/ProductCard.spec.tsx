import React from "react"
import { render, fireEvent } from "@testing-library/react"

import { ProductCard } from "./ProductCard"
import { Product } from '../../types'

const product: Product = {
  name: 'Excalibur',
  price: 999,
  image: '/excalibur.jpg'
}

describe("ProductCard", () => {
  it("renders correctly", () => {
    const { container, getByRole } = render(<ProductCard datum={product} />)

    expect(container.innerHTML).toMatch('Excalibur')
    expect(container.innerHTML).toMatch('999 Zm')
    expect(getByRole('img')).toHaveAttribute('src', '/excalibur.jpg')
  })

  describe('when product is the cart', () => {
    it("The 'Add to cart' button is disabled", () => {
      const mockUseCartHook = () => ({
        addToCart: () => {},
        products: [product]
      })

      const { getByRole } = render(
        <ProductCard
          datum={product}
          useCartHook={mockUseCartHook as any}
        />
      )

      expect(getByRole('button')).toBeDisabled()
    })
  })

  describe('when product is the cart', () => {
    describe("on 'Add to cart' click", () => {
      it("calls 'addToCart' function", () => {
        const addToCart = jest.fn()

        const mockUseCartHook = () => ({
          addToCart,
          products: []
        })

        const { getByText } = render(
          <ProductCard
            datum={product}
            useCartHook={mockUseCartHook}
          />
        )

        fireEvent.click(getByText('Add to cart'))
        expect(addToCart).toHaveBeenCalledWith(product)
      })
    })
  })
})
