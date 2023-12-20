import React from 'react'
import ProductCard from './ProductCard'

const LastestProducts = () => {
  return (
    <div>
      <div className="flex justify-between items-center max-w-[1280px] mx-auto lg:px-14 lg:py-8">
        <h3 className="lg:text-4xl text-center font-semibold px-4 py-2 text-2xl my-8">
          Lastest Products
        </h3>
        <button className="text-lg text-gray-300 hover:text-gray-700">
          See all
        </button>
      </div>
      <section className="grid grid-cols-4  max-md:grid-cols-2 gap-4 w-full max-w-6xl justify-center mx-auto px-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </section>
    </div>
  )
}

export default LastestProducts
