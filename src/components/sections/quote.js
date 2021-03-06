import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"
import { randomGenerator } from "../../lib/lib"
import { Swiper as ReactSwiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Autoplay, Controller } from "swiper/core"
import Arrow from "../../assets/svg/arrow"

SwiperCore.use([Autoplay, Controller])

const Quote = () => {
  const [currentSwiper, setCurrentSwiper] = useState(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  const intl = useIntl()
  const data = useStaticQuery(graphql`
    {
      allImageSharp(
        filter: { original: { src: { regex: "/web/" } } }
        sort: { order: ASC, fields: fluid___originalName }
      ) {
        nodes {
          fluid {
            originalImg
            srcSet
          }
        }
      }
    }
  `)

  const {
    allImageSharp: { nodes },
  } = data

  useEffect(() => {
    setCurrentSlide(randomGenerator(0, nodes.length - 1))
    currentSwiper?.slideTo(currentSlide)
    currentSwiper?.autoplay.start()
    currentSwiper?.update()
  }, [currentSwiper])

  useEffect(() => {
    currentSwiper?.update()
  }, [currentSlide])

  return (
    <div className="bg-yellow">
      <div
        className="bg-purple flex flex-col items-center justify-center pt-5 pb-3"
        style={{
          clipPath:
            "polygon(0% 0%, calc(50% - 30px) 0%, 50% 30px, calc(50% + 30px) 0%, 100% 0%, 100% 101%, 0% 101%)",
        }}
      >
        <div className="container py-6">
          <div className="flex mb-5 justify-center items-center">
            <button className="mx-4" onClick={() => currentSwiper?.slidePrev()}>
              <Arrow
                fillColor="yellow"
                style={{ transform: "rotate(180deg)" }}
              />
            </button>
            <button className="mx-4" onClick={() => currentSwiper?.slideNext()}>
              <Arrow fillColor="yellow" />
            </button>
          </div>

          <ReactSwiper
            spaceBetween={50}
            autoHeight={true}
            slidesPerView={1}
            mousewheel={{
              forceToAxis: true,
            }}
            allowTouchMove={false}
            touchStartForcePreventDefault={true}
            autoplay={{ delay: 10000 }}
            loop={true}
            onRealIndexChange={event => setCurrentSlide(event.activeIndex)}
            onSwiper={swiper => {
              setCurrentSwiper(swiper)
            }}
          >
            {nodes.map((node, index) => (
              <SwiperSlide>
                <div className="grid grid-cols-12 pb-3 md:pb-6">
                  <div className="col-span-10 col-start-2 md:col-span-5 md:col-start-1 py-4 md:py-0 relative">
                    <img srcSet={node.fluid.srcSet} className="z-20 relative" />
                    <div className="bg-yellow absolute w-full h-full top-0 left-0 z-10 ml-2 mt-2 md:ml-3 md:mt-3" />
                  </div>
                  <div className="col-span-10 col-start-2 md:col-span-6 md:col-start-7 py-4 md:py-0">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: intl.formatMessage({
                          id: `quotes.${index + 1}.body`,
                        }),
                      }}
                      className="block text-yellow leading-tight text-xl md:text-3xl font-semibold"
                    />
                    <span
                      dangerouslySetInnerHTML={{
                        __html: intl.formatMessage({
                          id: `quotes.${index + 1}.author`,
                        }),
                      }}
                      className="block text-yellow leading-tight uppercase mt-3"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </ReactSwiper>
          <div className="flex justify-center gap-2 mt-1">
            {nodes?.length &&
              Array.from({ length: nodes?.length }, () => 0).map((v, index) => (
                <button
                  aria-label={intl.formatMessage({ id: "common.slideTo" })}
                  style={{
                    width: "10px",
                    height: "10px",
                    opacity: currentSlide === index ? `1` : `0.5`,
                  }}
                  onClick={() => currentSwiper?.slideTo(index)}
                  className={`bg-yellow rounded-full`}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quote
