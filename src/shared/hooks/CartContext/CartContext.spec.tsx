import React from "react"
import { CartProvider, CartContext } from "./CartContext"
import { render } from "@testing-library/react"

describe("CartProvider", () => {
  describe("when 'addToCart' is called", () => {
    it("adds product to products array", () => {
      const mockChildrenFunction = jest.fn(() => null)

      const cartHookReturnValue = {
        products: [],
        totalPrice: () => 0,
        addToCart: () => {},
        removeFromCart: () => {},
        clearCart: () => {}
      }

      render(
        <CartProvider useCartHook={() => cartHookReturnValue}>
          <CartContext.Consumer>
            {mockChildrenFunction}
          </CartContext.Consumer>
        </CartProvider>
      )

      expect(mockChildrenFunction).toHaveBeenCalledWith(cartHookReturnValue)
    })
  })
})
