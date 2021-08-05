import React from "react"
import Swiper from "../atoms/swiper"
import Card from "../cards/card"
import { SwiperSlide } from "swiper/react"
import "swiper/swiper-bundle.css"
import { useIntl } from "gatsby-plugin-intl"
import useDataContext from "../../lib/useDataContext"
import CardBack from "../cards/cardBack"
import CardFrontCover from "../cards/cardFrontCover"
import CardFrontBody from "../cards/cardFrontBody"
import Title from "../atoms/title"
import Body from "../atoms/body"

const Facts = () => {
  const { state } = useDataContext()

  const {
    facts: { activeIndex },
  } = state
  const intl = useIntl()

  const cardColor = "purple"
  const stack = "facts"

  return (
    <div className="bg-purple">
      <div
        className="bg-yellow flex flex-col items-center justify-center py-16"
        style={{
          clipPath:
            "polygon(0% 0%, calc(50% - 30px) 0%, 50% 30px, calc(50% + 30px) 0%, 100% 0%, 100% 101%, 0% 101%)",
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
          <Swiper className="flex" activeIndex={activeIndex} stack={stack} cardColor={cardColor}>
            {[0, 1, 2, 3, 4, 5].map((e, index) => (
              <SwiperSlide>
                <Card
                  isFlippable={index > 0}
                  stack={stack}
                  cardColor={cardColor}
                >
                  {index === 0 ? (
                    <CardFrontCover
                      title={intl.formatMessage({ id: "facts.0.title" })}
                      body={intl.formatMessage({ id: "facts.0.body" })}
                      cardColor={cardColor}
                      stack={stack}
                    />
                  ) : (
                    <CardFrontBody
                      index={index}
                      title={intl.formatMessage({
                        id: `facts.${index}.title`,
                      })}
                      cardColor={cardColor}
                    />
                  )}
                  <CardBack
                    body={intl.formatMessage({
                      id: `facts.${index}.body`,
                    })}
                    cardColor={cardColor}
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
