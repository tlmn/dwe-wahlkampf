import React, { useEffect, useState } from "react"
import SwiperCore, { Keyboard, Mousewheel, Controller } from "swiper"
import { Swiper as ReactSwiper } from "swiper/react"
import "swiper/swiper-bundle.css"
import PropTypes from "prop-types"

SwiperCore.use([Keyboard, Mousewheel, Controller])

const Swiper = ({ children }) => {
  const [progress, setProgress] = useState(0)
  useEffect(() => console.log(progress), [progress])

  return (
    <ReactSwiper
      spaceBetween={50}
      slidesPerView={2}
      onRealIndexChange={event => setProgress(event.activeIndex)}
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
  )
}

Swiper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Swiper
