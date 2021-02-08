import React from "react"

import { ProductCard } from '../../shared/components/ProductCard'
import { useProducts } from '../../shared/hooks/useProducts'

interface HomeProps {
  useProductsHook?: () => Pick<
    ReturnType<typeof useProducts>, 'categories' | 'isLoading' | 'error'
  >
}

export const Home = ({ useProductsHook = useProducts }: HomeProps) => {
  const { categories, isLoading, error } = useProductsHook()

  if (isLoading) return <>Loading...</>

  if (error) return <>Error</>

  return (
    <>
      {categories.map((category) => (
          <section key={category.name} className="nes-container with-title showcase">
            <h2 className="title">{category.name}</h2>
            <section className="items">
              {category.items.map((item) => {
                return <ProductCard key={item.name} datum={item} />
              })}
            </section>
          </section>
        )
      )}
    </>
  )
}
