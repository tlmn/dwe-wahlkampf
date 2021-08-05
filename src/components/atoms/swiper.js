import React, { useEffect, useState } from "react"
import SwiperCore, { Keyboard, Mousewheel, Controller } from "swiper"
import { Swiper as ReactSwiper } from "swiper/react"
import "swiper/swiper-bundle.css"
import PropTypes from "prop-types"
import useDataContext from "../../lib/useDataContext"
import { get, set } from "lodash"

SwiperCore.use([Keyboard, Mousewheel, Controller])

const Swiper = ({ children, stack = "arguments" }) => {
  const { state, setState } = useDataContext()

  return (
    <>
      <ReactSwiper
        spaceBetween={50}
        slidesPerView={2}
        onSwiper={swiper => {
          setState(prev => set(prev, `${stack}.swiper`, swiper))
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          600: {
            slidesPerView: 1.2,
            spaceBetween: 20,
          },
          900: {
            slidesPerView: 2.2,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 3.2,
            spaceBetween: 40,
          },
        }}
      >
        {children}
      </ReactSwiper>
    </>
  )
}

Swiper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Swiper
