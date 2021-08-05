import React, { useEffect, useState } from "react"
import SwiperCore, { Keyboard, Mousewheel, Controller } from "swiper"
import { Swiper as ReactSwiper } from "swiper/react"
import "swiper/swiper-bundle.css"
import PropTypes from "prop-types"
import useDataContext from "../../lib/useDataContext"
import { get, set } from "lodash"

SwiperCore.use([Keyboard, Mousewheel, Controller])

const Swiper = ({ children, stack = "arguments", cardColor = "yellow" }) => {
  const { state, setState } = useDataContext()
  const [currentSwiper, setCurrentSwiper] = useState(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  console.log(currentSwiper)
  useEffect(
    () => console.log(get(state, `${stack}.swiper.slides`).length),
    [state]
  )
  return (
    <>
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
      >
        {children}
      </ReactSwiper>
      <div className="flex justify-center gap-2">
        {currentSwiper?.slides?.length &&
          Array.from({ length: currentSwiper?.slides?.length }, () => 0).map(
            (v, index) => (
              <button
                style={{
                  width: "10px",
                  height: "10px",
                  opacity: currentSlide === index ? `1` : `0.5`,
                }}
                onClick={() => currentSwiper?.slideTo(index)}
                className={`bg-${cardColor} rounded-full`}
              />
            )
          )}
      </div>
    </>
  )
}

Swiper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Swiper
