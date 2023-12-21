'use client'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

import { FreeMode, Pagination } from 'swiper/modules'

import { RxArrowTopRight } from 'react-icons/rx'
import { ServiceData } from '../constants'
import Link from 'next/link'

const ActiveSlider = () => {
  return (
    <div className="flex items-center justify-center flex-col lg:h-[600px] mt-8 h-[400px] text-center">
      <Swiper
        breakpoints={{
          340: {
            spaceBetween: 24,
            slidesPerView: 1,
          },
          700: {
            spaceBetween: 24,
            slidesPerView: 1,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w-[80%]"
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="flex flex-col gap-6 mb-20 group relative shadow-lg rounded-xl px-6 py-8 h-[300px] md:h-[400px]  lg:h-[500px] w-full overflow-hidden cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
              <div className="relative flex flex-col gap-3 h-full">
                <h1 className="text-2xl lg:text4xl text-center">
                  {item.title}{' '}
                </h1>
                <p className="lg:text-[18px] h-[80%]">{item.content} </p>
                <Link
                  className="px-4 py-2 bg-white text-black"
                  href="/product-details"
                >
                  See more details
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ActiveSlider
