import * as React from "react"
import PropTypes from "prop-types"
import Card from "../cards/card"
import Title from "../atoms/title"
import Body from "../atoms/body"
import { useIntl } from "gatsby-plugin-intl"
import Swiper from "../atoms/swiper"
import Number from "../number"
import { SwiperSlide } from "swiper/react"
import "swiper/swiper-bundle.css"
import IconArrow from "../../assets/svg/arrow"
import CloseIcon from "../../assets/svg/close"

const Facts = () => {
  const intl = useIntl()
  return (
    <div className="bg-purple">
      <div
        className="bg-yellow flex flex-col items-center justify-center py-16"
        style={{
          clipPath:
            "polygon(0% 0%, calc(50% - 30px) 0%, 50% 30px, calc(50% + 30px) 0%, 100% 0%, 100% 100%, 0% 100%)",
        }}
      >
        <div className="w-full flex flex-col justify-center">
          <Title className="bg-purple text-yellow">
            {intl.formatMessage({ id: "facts.title" })}
          </Title>
          <Body className="text-purple font-medium">
            {intl.formatMessage({ id: "facts.body" })}
          </Body>
        </div>
        <div className="container">
          <Swiper className="flex">
            {[1, 2, 3, 4].map((e, index) => (
              <SwiperSlide>
                <Card
                  fillColor="purple"
                  currentStack="facts"
                  isFlippable={index > 0}
                >
                  {index > 0 ? (
                    <>
                      <div className="flex flex-col items-center h-full">
                        <Number className="bg-yellow text-purple">
                          {index}
                        </Number>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: intl.formatMessage({
                              id: `facts.${index}.title`,
                            }),
                          }}
                          className="flex-1 flex items-center text-3xl px-4 text-yellow font-bold"
                        />
                        <span className="uppercase text-yellow font-bold hover:scale-110 animated">
                          Mehr lesen
                        </span>
                      </div>
                    </>
                  ) : (
                    <div className="flex flex-col items-center h-full">
                      <Title className="text-purple bg-yellow">
                        {intl.formatMessage({
                          id: `facts.0.title`,
                        })}
                      </Title>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: intl.formatMessage({
                            id: `facts.0.body`,
                          }),
                        }}
                        className="flex-1 flex items-center text-5xl px-4 text-yellow font-bold"
                      />
                      <IconArrow
                        className="hover:scale-110"
                        fillColor="yellow"
                      />
                    </div>
                  )}
                    <span
                      dangerouslySetInnerHTML={{
                        __html: intl.formatMessage({
                          id: `facts.${index}.body`,
                        }),
                      }}
                      className="text-yellow text-xl px-4 py-3 flex-1 text-left overflow-y-scroll"
                    />
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Facts
