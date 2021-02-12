import React from "react"
import { fireEvent } from '@testing-library/react'

import { Cart } from './Cart'
import { CartItemProps } from '../../shared/components/CartItem'

jest.mock("../../shared/components/CartItem", () => ({
  CartItem: ({ product }: CartItemProps) => {
    const { name, price, image } = product

    return (
      <div>{name} {price} {image}</div>
    )
  }
}))

describe("Cart", () => {
  describe("without products", () => {
    const stubCartHook = () => ({
      products: [],
      removeFromCart: () => {},
      totalPrice: 0
    })

    it("renders empty cart message", () => {
      const { container } = renderWithRouter(() => (<Cart useCartHook={stubCartHook} />))

      expect(container.innerHTML).toMatch('Your cart is empty')
    })

    describe("on 'Back in the main page'", () => {
      it("redirects to '/'", () => {
        const { getByText, history } = renderWithRouter(() => (<Cart useCartHook={stubCartHook} />))

        fireEvent.click(getByText('Back to main page.'))

        expect(history.location.pathname).toBe('/')
      })
    })
  })

  describe("with products", () => {
    const products = [
      {
        name: 'bronze sword',
        price: 100,
        image: '/image/bronze-sword.png'
      },
      {
        name: 'blood sword',
        price: 350,
        image: '/image/blood-sword.png'
      }
    ]

    const stubCartHook = () => ({
      products,
      removeFromCart: () => {},
      totalPrice: () => 450
    })

    it("renders cart products list with total price", () => {
      const { container } = renderWithRouter(() => (<Cart useCartHook={stubCartHook} />))

      expect(container.innerHTML).toMatch('bronze sword 100 /image/bronze-sword.png')
      expect(container.innerHTML).toMatch('blood sword 350 /image/blood-sword.png')
      expect(container.innerHTML).toMatch('Total: 450 Zm')
    })

    describe("on 'go to checkout' click", () => {
      it("redirects to '/checkout'", () => {
        const { getByText, history } = renderWithRouter(() => (<Cart useCartHook={stubCartHook} />))

        fireEvent.click(getByText('Go to checkout'))

        expect(history.location.pathname).toBe('/checkout')
      })
    })
  })
})
