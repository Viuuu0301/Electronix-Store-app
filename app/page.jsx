import Hero from '@/components/Hero'
import InSaleProducts from '@/components/InSaleProducts'
import LastestProducts from '@/components/LastestProducts'
import LeftSideBar from '@/components/LeftSideBar'
import RightSideBar from '@/components/RightSideBar'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <section className="w-full flex gap-8 flex-col mx-auto max-w-[1440px]">
        <Hero />
        <LastestProducts />
        <InSaleProducts />
      </section>
    </div>
  )
}
