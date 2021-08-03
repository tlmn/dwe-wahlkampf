import React, { useState } from "react"
import ReactCardFlip from "react-card-flip"
import CloseIcon from "../../assets/svg/close"
import useDataContext from "../../lib/useDataContext"
import { fill, set } from "lodash"

const Card = ({
  children,
  fillColor = "yellow",
  isFlippable = true,
  currentStack = "",
}) => {
  const { setState, state } = useDataContext()
  const [isFlipped, setIsFlipped] = useState(false)
  const handleClick = () => setIsFlipped(!isFlipped)
  const moveActiveIndex = () => {
    setState(prev => set(prev, `${currentStack}.activeIndex`, 2))
  }
  return (
    <>
      {isFlippable ? (
        <ReactCardFlip
          isFlipped={isFlipped}
          flipDirection="horizontal"
          cardZIndex={50}
        >
          <div className="py-6">
            <button
              className={`bg-${fillColor} rounded-3xl shadow py-4 px-4 w-full flex items-start justify-center relative z-40 card`}
              onClick={handleClick}
              role="button"
              disabled={!isFlippable}
            >
              {children[0]}
            </button>
          </div>
          <div className="py-6">
            <button
              className={`bg-${fillColor} rounded-3xl shadow py-4 px-2 w-full flex flex-col items-center justify-between relative z-40 card`}
              role="button"
              onClick={handleClick}
            >
              <div className="max-h-full flex flex-col items-center">
                {children[1]}
                <div className="mt-2">
                  <CloseIcon
                    fillColor={fillColor === "yellow" ? `purple` : `yellow`}
                    className="hover:scale-110"
                  />
                </div>
              </div>
            </button>
          </div>
        </ReactCardFlip>
      ) : (
        <div className="py-6">
          <button
            className={`bg-${fillColor} rounded-3xl shadow py-4 px-2 w-full flex items-start justify-center relative z-40 card`}
            onClick={moveActiveIndex}
            role="button"
          >
            {children[0]}
          </button>
        </div>
      )}
    </>
  )
}

export default Card
