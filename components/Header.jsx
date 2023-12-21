import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className="flex justify-between items-center header text-lg font-semibold px-4 py-2 text-white">
      <Link href="/" className="text-2xl">
        Electronix
      </Link>
      <nav className="flex justify-center items-center gap-4 max-sm:hidden">
        <Link href="/">Home</Link>
        <Link href="/products">All products</Link>
        <Link href="/special">Special</Link>
        <Link href="/shipping">Shipping</Link>
        <Link href="/contact">Contact us</Link>
      </nav>
      <nav className="flex justify-center items-center gap-4">
        <Link href="/login" className="">
          Login
        </Link>
        <Link
          href="/sign-up"
          className=" bg-black/50 hover:bg-white hover:text-black"
        >
          Sign Up
        </Link>
      </nav>
    </div>
  )
}

export default Header
