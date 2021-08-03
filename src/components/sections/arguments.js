import * as React from "react"
import IconArrow from "../../assets/svg/arrow"
import Swiper from "../atoms/swiper"
import Card from "../cards/card"
import { SwiperSlide } from "swiper/react"
import "swiper/swiper-bundle.css"
import Number from "../number"
import { useIntl } from "gatsby-plugin-intl"
import Title from "../atoms/title"
import useDataContext from "../../lib/useDataContext"

const Arguments = () => {
  const { state } = useDataContext()
  const {
    arguments: { activeIndex },
  } = state
  const intl = useIntl()

  return (
    <div className="bg-purple pb-8">
      <div className="container">
        <Swiper className="flex" activeIndex={activeIndex}>
          {[0, 1, 2, 3, 4, 5].map((e, index) => (
            <SwiperSlide>
              <Card isFlippable={index > 0} currentStack="arguments">
                <div className="flex flex-col items-center h-full">
                  {index > 0 ? (
                    <>
                      <Number className="bg-purple text-yellow">{index}</Number>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: intl.formatMessage({
                            id: `arguments.${index}.title`,
                          }),
                        }}
                        className="flex-1 flex items-center text-3xl px-4 text-purple font-bold"
                      />
                      <span className="uppercase text-purple font-bold hover:scale-110 animated">
                        Mehr lesen
                      </span>
                    </>
                  ) : (
                    <>
                      <Title className="text-yellow bg-purple">
                        {intl.formatMessage({ id: "arguments.0.title" })}
                      </Title>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: intl.formatMessage({
                            id: `arguments.0.body`,
                          }),
                        }}
                        className="flex-1 flex items-center text-5xl px-4 text-purple font-bold"
                      />
                      <IconArrow className="hover:scale-110" />
                    </>
                  )}
                </div>
                <span
                  dangerouslySetInnerHTML={{
                    __html: intl.formatMessage({
                      id: `arguments.${index}.body`,
                    }),
                  }}
                  className="text-purple text-xl px-4 py-3 flex-1 text-left overflow-y-scroll"
                />
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Arguments
