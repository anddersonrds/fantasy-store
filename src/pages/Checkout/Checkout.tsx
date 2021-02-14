import React from "react"

import { useCartContext } from '../../shared/hooks/CartContext'
import { CheckoutList } from '../../shared/components/CheckoutList'
import { CheckoutForm } from '../../shared/components/CheckoutForm'
import { postCheckout } from '../../shared/utils/api'

interface CheckoutProps {
  useCartHook?: typeof useCartContext
}

export const Checkout = ({ useCartHook = useCartContext }: CheckoutProps) => {
  const { products, totalPrice, clearCart } = useCartHook()

  const submitCheckout = async () => {
    const { orderId } = await postCheckout({products})

    clearCart()
    window.location.assign(`/order/?orderId=${orderId}`)
  }

  return (
    <section className="nes-container with-title">
      <h1 className="title">Checkout</h1>

      <div className="nes-container is-rounded checkout-list-wrapper">
        <p>You are going to buy:</p>
        <CheckoutList products={products} />
        <p>Total: {totalPrice()} Zm</p>
      </div>

      <p>Enter your payment credentials:</p>
      <CheckoutForm submit={submitCheckout} />
    </section>
  )
}
