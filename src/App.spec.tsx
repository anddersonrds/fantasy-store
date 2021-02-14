import React from "react"
import { createMemoryHistory } from 'history'
import { render } from "@testing-library/react"
import { Router } from "react-router-dom"

import { App } from "./App"

jest.mock("./pages/Home", () => ({ Home: () => <div>Home</div> }))
jest.mock("./pages/Cart", () => ({ Cart: () => <div>Cart</div> }))
jest.mock("./pages/Checkout", () => ({ Checkout: () => <div>Checkout</div> }))
jest.mock("./pages/OrderSummary", () => ({ OrderSummary: () => <div>OrderSummary</div> }))

describe("App", () => {
  it("renders successfully", () => {
    const history = createMemoryHistory()
    const { container } = render(
      <Router history={history}>
        <App />
      </Router>
    )
    expect(container.innerHTML).toMatch('Fantasy Store')
  })

  describe("routing", () => {
    it("renders home page on '/'", () => {
      const { container } = renderWithRouter(() => <App />, "/")
      expect(container.innerHTML).toMatch("Home")
    })

    it("renders checkout page on '/cart'", () => {
      const { container } = renderWithRouter(() => <App />, "/cart")
      expect(container.innerHTML).toMatch("Cart")
    })

    it("renders checkout page on '/checkout'", () => {
      const { container } = renderWithRouter(() => <App />, "/checkout")
      expect(container.innerHTML).toMatch("Checkout")
    })

    it("renders order summary page on '/order'", () => {
      const { container } = renderWithRouter(() => <App />, "/order")
      expect(container.innerHTML).toMatch("OrderSummary")
    })

    it("renders 'page not found' message on nonexistent route", () => {
      const { container } = renderWithRouter(() => <App />, "/this-route-does-not-exist")
      expect(container.innerHTML).toMatch("Page not found")
    })
  })
})
