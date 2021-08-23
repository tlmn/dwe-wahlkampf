import React, { useState } from "react"
import ReactCardFlip from "react-card-flip"
import { isMobile } from "react-device-detect"

const Card = ({ children, cardColor = "yellow", isFlippable = true }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleClick = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <>
      {isFlipped && isMobile && (
        <div
          className="absolute top-0 left-0 cursor-pointer shadow bg-yellow h-full w-full z-50 flex items-center flex-col rounded-3xl py-4 px-2"
          onClick={handleClick}
        >
          {children[1]}
        </div>
      )}
      {isFlippable ? (
        <ReactCardFlip
          isFlipped={!isMobile && isFlipped}
          flipDirection="horizontal"
          cardZIndex={50}
        >
          <div className="py-6">
            <div
              className={`bg-${cardColor} cursor-pointer rounded-3xl shadow py-4 px-4 w-full flex items-start justify-center relative z-40 card`}
              onClick={handleClick}
            >
              {children[0]}
            </div>
          </div>
          <div className="py-6">
            <div
              className={`bg-${cardColor} cursor-pointer rounded-3xl shadow py-4 px-2 w-full flex flex-col items-center justify-between relative z-40 card`}
              onClick={handleClick}
            >
              <div className="h-full flex flex-col items-center">
                {children[1]}
              </div>
            </div>
          </div>
        </ReactCardFlip>
      ) : (
        <div className="py-6">
          <div
            className={`bg-${cardColor} cursor-pointer rounded-3xl shadow py-4 px-2 w-full flex flex-col items-center justify-between relative z-40 card`}
            onClick={handleClick}
          >
            {children[0]}
          </div>
        </div>
      )}
    </>
  )
}

export default Card
