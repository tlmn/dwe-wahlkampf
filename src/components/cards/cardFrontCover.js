import React from "react"
import Title from "../atoms/title"
import IconArrow from "../../assets/svg/arrow"
import { reverseCardColor } from "../../lib/lib"

const CardFrontCover = ({ body, title, cardColor }) => {
  return (
    <div className="flex flex-col items-center h-full">
      <Title className={`text-${cardColor} bg-${reverseCardColor(cardColor)}`}>
        {title}
      </Title>
      <span
        dangerouslySetInnerHTML={{
          __html: body,
        }}
        className={`flex-1 flex items-center text-5xl text-${reverseCardColor(
          cardColor
        )} font-bold leading-tight`}
      />
      <IconArrow
        fillColor={reverseCardColor(cardColor)}
        className="hover:scale-108"
      />
    </div>
  )
}

export default CardFrontCover
