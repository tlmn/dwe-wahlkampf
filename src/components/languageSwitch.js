import React, { useEffect } from "react"
import LanguageSwitchIcon from "../assets/svg/languageSwitch"
import { langs } from "../data/lang"
import CloseIcon from "../assets/svg/close"

import { useTrail, animated as a } from "react-spring"
import useDataContext from "../lib/useDataContext"
import { changeLocale, useIntl } from "gatsby-plugin-intl"

const config = { mass: 1, tension: 1000, friction: 200 }

const LanguageSwitch = ({ className }) => {
  const intl = useIntl()
  const { locale } = intl
  const { state, setState } = useDataContext()
  const { showModal } = state
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
    changeLocale(newLocale)
    setState(prev => ({
      ...prev,
      showModal: !prev.showModal,
    }))
  }

  return (
    <>
      <button
        className={`hover:scale-108 animated ${
          showModal ? `absolute z-50` : ``
        }`}
        onClick={() =>
          setState(prev => ({ ...prev, showModal: !prev.showModal }))
        }
      >
        {!showModal ? (
          <LanguageSwitchIcon className={className} />
        ) : (
          <CloseIcon className={className} />
        )}
      </button>
      <button
        className={`${
          showModal === true ? `block` : `hidden`
        } fixed z-20 w-screen h-screen bg-purple top-0 left-0 flex items-center justify-center`}
        onClick={() => setState(prev => ({ ...prev, showModal: false }))}
      >
        <div className="flex flex-col items-center">
          {showModal &&
            trail.map(({ x, height, ...rest }, index) => (
              <a.button
                className={`block uppercase text-4xl ${
                  locale === langs[index]?.code
                    ? `bg-yellow text-purple`
                    : `text-yellow`
                } rounded-3xl font-bold px-2 leading-none hover:scale-108`}
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
      </button>
    </>
  )
}

export default LanguageSwitch
