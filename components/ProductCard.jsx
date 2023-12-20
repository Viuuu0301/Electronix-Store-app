import Image from 'next/image'
import React from 'react'

const ProductCard = () => {
  return (
    <div className="bg-black/10 hover:bg-black/50 p-4 rounded-lg text-center group">
      <Image src="" alt="" width={150} height={150} />
      <h4 className="font-semibold text-xl my-3">Latop</h4>
      <p className="opacity-70 text-sm">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius in, saepe
        assumenda culpa odio esse maiores. Nulla ad aliquid earum facilis quia!
        Similique iste assumenda, voluptatem aliquid expedita voluptatum! Est.
      </p>
      <button className="mt-4 bg-black/50 group-hover:text-black group-hover:bg-[#fff] px-4 py-2 rounded-full">
        Add to cart
      </button>
    </div>
  )
}

export default ProductCard
