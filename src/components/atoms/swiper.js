import React, { useState } from "react"
import SwiperCore, { Controller, Mousewheel } from "swiper"
import { Swiper as ReactSwiper } from "swiper/react"
import "swiper/swiper-bundle.css"
import PropTypes from "prop-types"
import useDataContext from "../../lib/useDataContext"
import { set } from "lodash"
import { useIntl } from "gatsby-plugin-intl"

SwiperCore.use([Controller, Mousewheel])

const Swiper = ({ children, stack = "arguments", cardColor = "yellow" }) => {
  const { setState } = useDataContext()
  const intl = useIntl()
  const [currentSwiper, setCurrentSwiper] = useState(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <ReactSwiper
      spaceBetween={50}
      slidesPerView={2}
      onRealIndexChange={event => setCurrentSlide(event.activeIndex)}
      onSwiper={swiper => {
        setState(prev => set(prev, `${stack}.swiper`, swiper))
        setCurrentSwiper(swiper)
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
      mousewheel={{
        forceToAxis: true,
      }}
      nested={true}
      allowTouchMove={false}
      touchStartForcePreventDefault={true}
    >
      {children}
    </ReactSwiper>
  )
}

Swiper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Swiper
