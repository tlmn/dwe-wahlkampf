import React, { useState, useRef, useLayoutEffect } from "react"
import Button from "../atoms/button"

const BackCard = ({ body, ...props }) => {
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
        {position > 50 && <Button className="sticky top-0 right-0 flex justify-end">nach oben</Button>}

        <div className="relative px-4 py-3 ">
          <span dangerouslySetInnerHTML={{ __html: body }} {...props} />
        </div>
        {position < height - 50 && (
          <div className="sticky bottom-0 right-0">
            <Button>nach unten</Button>
          </div>
        )}
      </div>
    </>
  )
}

export default BackCard
