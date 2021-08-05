import React from "react"
import Title from "../atoms/title"
import IconArrow from "../../assets/svg/arrow"
import { reverseCardColor } from "../../lib/lib"
import useDataContext from "../../lib/useDataContext"

const CardFrontCover = ({ body, title, cardColor, stack }) => {
  const { state } = useDataContext()

  return (
    <button
      className="flex flex-col items-center h-full"
      onClick={() => state[stack].swiper.slideNext()}
    >
      <Title className={`text-${cardColor} bg-${reverseCardColor(cardColor)}`}>
        {title}
      </Title>
      <span
        dangerouslySetInnerHTML={{
          __html: body,
        }}
        className={`flex-1 flex items-center text-5xl text-${reverseCardColor(
          cardColor
        )} px-2 font-bold leading-tight`}
      />
      <IconArrow
        fillColor={reverseCardColor(cardColor)}
        className="hover:scale-108 animation-bounce"
      />
    </button>
  )
}

export default CardFrontCover
