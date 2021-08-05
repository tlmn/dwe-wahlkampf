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

const Arguments = () => {
  const { state } = useDataContext()

  const {
    arguments: { activeIndex, length, cardColor, stack },
  } = state
  const intl = useIntl()

  return (
    <div className="bg-purple pb-8">
      <div className="container">
        <Swiper className="flex" activeIndex={activeIndex} stack={stack} cardColor={cardColor}>
          {Array.from({ length: length }, () => 0).map((e, index) => (
            <SwiperSlide>
              <Card isFlippable={index > 0} stack={stack}>
                {index === 0 ? (
                  <CardFrontCover
                    title={intl.formatMessage({ id: "arguments.0.title" })}
                    body={intl.formatMessage({ id: "arguments.0.body" })}
                    cardColor={cardColor}
                    stack={stack}
                  />
                ) : (
                  <CardFrontBody
                    index={index}
                    title={intl.formatMessage({
                      id: `arguments.${index}.title`,
                    })}
                    cardColor={cardColor}
                  />
                )}
                <CardBack
                  body={intl.formatMessage({
                    id: `arguments.${index}.body`,
                  })}
                  cardColor={cardColor}
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
