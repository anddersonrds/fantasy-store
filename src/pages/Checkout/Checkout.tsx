import React from "react"

import { useCart } from '../../shared/hooks/CartContext'
import { CheckoutList } from '../../shared/components/CheckoutList'
import { CheckoutForm } from '../../shared/components/CheckoutForm'

export const Checkout = () => {
  const { products, totalPrice } = useCart()

  return (
    <section className="nes-container with-title">
      <h1 className="title">Checkout</h1>
      <div className="nes-container is-rounded checkout-list-wrapper">
        <p>You are going to buy:</p>
        <CheckoutList products={products} />
        <p>Total: {totalPrice()} Zm</p>
      </div>
      <p>Enter your payment credentials:</p>
      <CheckoutForm />
    </section>
  )
}
