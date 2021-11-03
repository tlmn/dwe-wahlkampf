import React, { useEffect, useRef, useState } from "react"
import LogoWordMark from "../../assets/svg/logoWordMark"
import LanguageSwitch from "../languageSwitch"
import { FormattedHTMLMessage, useIntl } from "gatsby-plugin-intl"

const Landing = ({ showLanguageSwitch = true }) => {
  const intl = useIntl()
  const ref = useRef(null)
  const [height, setHeight] = useState(0)
  useEffect(() => setHeight(ref?.current?.clientHeight), [ref])

  return (
    <div className="bg-yellow text-purple font-bold">
      <div className="container flex py-4" style={{ minHeight: "90vh" }}>
        <div className="container flex justify-between flex-col">
          <div className="flex-1 flex items-start justify-center w-full">
            <a
              href="https://www.dwenteignen.de"
              className="hover:scale-108 animated flex justify-center mt-4"
              style={{ width: "200px", height: "70px" }}
            >
              <LogoWordMark className="object-cover flex-1" />
            </a>
            <div className="flex flex-1 justify-end">
              {showLanguageSwitch && <LanguageSwitch />}
            </div>
          </div>
          <span className="block text-5xl md:text-6xl leading-none my-2">
            <FormattedHTMLMessage id="campaign.slogan" />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Landing
