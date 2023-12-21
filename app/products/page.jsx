import ProductCard from '@/components/ProductCard'
import React from 'react'

const Products = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center gap-8 flex-col">
      <h2 className="text-4xl text-center w-full my-4">Products</h2>
      <div className="grid grid-cols-5 gap-4 w-full">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  )
}

export default Products
