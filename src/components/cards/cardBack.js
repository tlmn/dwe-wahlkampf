import React, { useState, useRef, useLayoutEffect, useEffect } from "react"
import ArrowDown from "../../assets/svg/arrowDown"
import CloseIcon from "../../assets/svg/close"
import { reverseCardColor } from "../../lib/lib"

const CardBack = ({ body, cardColor, isFlipped, ...props }) => {
  const [scrollPosition, setScrollPosition] = useState({
    height: 0,
    position: 0,
  })
  const { height, position } = scrollPosition
  const bodyRef = useRef(null)

  useLayoutEffect(
    () =>
      setScrollPosition(prev => ({
        ...prev,
        height: bodyRef?.current?.scrollHeight - bodyRef?.current?.clientHeight,
      })),
    [bodyRef?.current?.scrollTop]
  )
  useEffect(() => (bodyRef.current.scrollTop = 0), [isFlipped])
  return (
    <>
      <div
        className="flex-1 overflow-y-scroll "
        onScroll={e =>
          setScrollPosition(prev => ({
            ...prev,
            position: e.target.scrollTop,
          }))
        }
        ref={bodyRef}
      >
        <div className="relative px-4 py-3 ">
          <span
            dangerouslySetInnerHTML={{ __html: body }}
            className={`text-left text-${reverseCardColor(cardColor)}`}
          />
        </div>
        {position < height - 50 && (
          <div className="sticky bottom-0 justify-center flex pb-2">
            <ArrowDown fillColor={reverseCardColor(cardColor)} width={40} />
          </div>
        )}
      </div>
      <CloseIcon
        fillColor={cardColor === "yellow" ? `purple` : `yellow`}
        className="hover:scale-110 mt-3"
      />
    </>
  )
}

export default CardBack
