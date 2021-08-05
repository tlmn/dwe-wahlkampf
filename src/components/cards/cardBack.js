import React, { useState, useRef, useLayoutEffect, useEffect } from "react"
import { animated, useSpring } from "react-spring"
import ArrowDown from "../../assets/svg/arrowDown"
import CloseIcon from "../../assets/svg/close"
import { reverseCardColor, getRGB } from "../../lib/lib"

const CardBack = ({ body, cardColor, isFlipped }) => {
  const [scrollPosition, setScrollPosition] = useState({
    height: 0,
    position: 0,
  })
  
  const [showArrow, setShowArrow] = useState(true)
  const { height, position } = scrollPosition
  const bodyRef = useRef(null)

  useEffect(
    () => (position < height - 50 ? setShowArrow(true) : setShowArrow(false)),
    [position, height]
  )

  const styles = useSpring({
    opacity: showArrow ? 1 : 0,
    config: { duration: 200, tension: 2000 },
  })

  useLayoutEffect(
    () =>
      setScrollPosition(prev => ({
        ...prev,
        height: bodyRef?.current?.scrollHeight - bodyRef?.current?.clientHeight,
      })),
    [bodyRef?.current?.scrollTop]
  )
  return (
    <>
      <div
        className="flex-1 overflow-y-scroll"
        onScroll={e =>
          setScrollPosition(prev => ({
            ...prev,
            position: e.target.scrollTop,
          }))
        }
        ref={bodyRef}
      >
        <span
          dangerouslySetInnerHTML={{ __html: body }}
          className={`block text-left px-4 text-${reverseCardColor(cardColor)}`}
        />

        <animated.div
          className="sticky justify-center flex py-1"
          style={{
            background: `linear-gradient(0deg, rgba(${getRGB(
              cardColor
            )}, 1) 50%, rgba(255, 255,255, 0) 100%)`,
            bottom: '-2px',
            ...styles,
          }}
        >
          <ArrowDown fillColor={reverseCardColor(cardColor)} width={40} />
        </animated.div>
      </div>
      <CloseIcon
        fillColor={cardColor === "yellow" ? `purple` : `yellow`}
        className="hover:scale-108 mt-3"
      />
    </>
  )
}

export default CardBack
