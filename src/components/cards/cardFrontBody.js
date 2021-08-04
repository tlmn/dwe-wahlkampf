import React from "react"
import { reverseCardColor } from "../../lib/lib"
import Number from "../atoms/number"

const CardFrontBody = ({ title, card, cardColor, index, isFlipped }) => (
  <div className="flex flex-col items-center h-full">
    <Number className={`bg-${reverseCardColor(cardColor)} text-${cardColor}`}>
      {index}
    </Number>
    <span
      dangerouslySetInnerHTML={{
        __html: title,
      }}
      className={`flex-1 flex items-center text-3xl text-${reverseCardColor(
        cardColor
      )} font-bold leading-tight`}
    />
    <span
      className={`uppercase text-${reverseCardColor(
        cardColor
      )} font-bold hover:scale-108 animated`}
    >
      Mehr lesen
    </span>
  </div>
)

export default CardFrontBody
