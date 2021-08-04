import React, { useEffect, useState } from "react"
import LanguageSwitchIcon from "../assets/svg/languageSwitch"
import { langs } from "../data/lang"
import CloseIcon from "../assets/svg/close"

import { useTrail, animated as a } from "react-spring"
import useDataContext from "../lib/useDataContext"
import { changeLocale, locale } from "gatsby-plugin-intl"

const config = { mass: 1, tension: 1000, friction: 200 }

const LanguageSwitch = ({ className }) => {
  const { state, setState } = useDataContext()
  const { currentLocale } = state
  const [showModal, setShowModal] = useState(false)
  const trail = useTrail(langs.length, {
    config,
    opacity: showModal ? 1 : 0,
    height: showModal ? 80 : 60,
    from: { opacity: 0, x: 20, height: 0 },
  })

  useEffect(
    () => (document.body.style.overflow = showModal ? "hidden" : "scroll"),
    [showModal]
  )
  const updateLocale = newLocale => {
    setState(prev => ({ ...prev, currentLocale: newLocale }))
    changeLocale(newLocale)
    setShowModal(prev => !prev)
  }

  return (
    <>
      <button
        className={`hover:scale-108 animated ${
          showModal ? `absolute z-50` : ``
        }`}
        onClick={() => setShowModal(!showModal)}
      >
        {!showModal ? (
          <LanguageSwitchIcon className={className} />
        ) : (
          <CloseIcon className={className} />
        )}
      </button>
      <div
        className={`${
          showModal === true ? `block` : `hidden`
        } fixed z-20 w-screen h-screen bg-purple top-0 left-0 flex items-center justify-center`}
        onClick={() => setShowModal(!showModal)}
      >
        <div className="flex flex-col items-center">
          {showModal &&
            trail.map(({ x, height, ...rest }, index) => (
              <a.button
                className={`block uppercase text-4xl ${
                  currentLocale === langs[index]?.code
                    ? `bg-yellow text-purple`
                    : `text-yellow`
                } font-bold px-2 leading-none hover:scale-108`}
                style={{
                  ...rest,
                  transform: x.to(x => `translate3d(0,${x}px,0)`),
                  height: height,
                }}
                onClick={() => updateLocale(langs[index]?.code)}
              >
                {langs[index]?.name}
              </a.button>
            ))}
        </div>
        {locale}
      </div>
    </>
  )
}

export default LanguageSwitch
