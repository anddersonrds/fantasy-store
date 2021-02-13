import React from 'react';
import { render } from '@testing-library/react'

import { CheckoutList } from '../CheckoutList'
import { Product } from '../../types'

describe("CheckoutList", () => {
  it("renders list of products", () => {
    const products: Product[] = [
      {
        name: 'Iron Sword',
        price: 250,
        image: 'iron-sword.png'
      },
      {
        name: 'Blood Sword',
        price: 450,
        image: 'blood-sword.png'
      }
    ]

    const { container } = render(<CheckoutList products={products} />)

    expect(container.innerHTML).toMatch('Iron Sword')
    expect(container.innerHTML).toMatch('Blood Sword')
  })
})
