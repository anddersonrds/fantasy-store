import React from "react"
import { Product } from '../../types'

interface CheckoutListProps {
  products: Product[]
}

export const CheckoutList = ({ products }: CheckoutListProps) => (
  <ul className="nes-list is-circle">
    {products.map((product) => {
      return <li key={product.name}>{product.name}</li>
    })}
  </ul>
)
