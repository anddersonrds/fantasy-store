import React from "react"

import { useCartContext } from '../../hooks/CartContext'
import { Product } from '../../types'

export interface ProductCardProps {
  datum: Product
  useCartHook?: () => Pick<ReturnType<typeof useCartContext>, "products" | "addToCart">
}

export const ProductCard = ({ datum, useCartHook = useCartContext }: ProductCardProps) => {
  const { addToCart, products } = useCartHook()

  const isInCart = !!products?.find((product) => datum.name === product.name)

  return (
    <div className="nes-container is-rounded item">
      <img
        style={{ imageRendering: "pixelated" }}
        src={datum.image}
        alt="fantasy"
        width="64px"
        height="64px"
      />

      <p>{datum.name}</p>
      <p>{datum.price} Zm</p>

      {isInCart ? (
        <button disabled className="nes-btn is-disabled">
          Added to cart
        </button>
      ) : (
        <button className="nes-btn is-primary" onClick={() => {addToCart(datum)}}>
          Add to cart
        </button>
      )}
    </div>
  )
}
