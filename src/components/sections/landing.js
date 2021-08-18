import React, { useEffect, useRef, useState } from "react"
import Cross from "../../assets/svg/cross"
import LogoWordMark from "../../assets/svg/logoWordMark"
import { Textfit } from "react-textfit"
import LanguageSwitch from "../languageSwitch"
import { FormattedHTMLMessage, useIntl } from "gatsby-plugin-intl"

const Landing = () => {
  const intl = useIntl()
  const ref = useRef(null)
  const [height, setHeight] = useState(0)
  useEffect(() => setHeight(ref?.current?.clientHeight), [ref])
  return (
    <div className="bg-yellow text-purple font-bold">
      <div className="container flex py-4" style={{ minHeight: "90vh" }}>
        <div className="container flex justify-between flex-col">
          <div className="flex-1 flex items-start justify-center w-full">
            <LogoWordMark className="object-cover flex-1" />
            <div className="flex flex-1 justify-end">
              {/* <LanguageSwitch /> */}
            </div>
          </div>
          <span className="block text-6xl md:text-7xl leading-none my-2">
            <FormattedHTMLMessage id="campaign.slogan" />
          </span>
          <div className="w-full flex items-center my-2">
            <div style={{ height: `${height}px` }} className="mr-2 md:mr-4">
              <Cross className="object-cover w-full h-full" />
            </div>
            <span
              className="text-9xl block leading-none uppercase"
              ref={ref}
              dangerouslySetInnerHTML={{
                __html: intl.formatMessage({ id: "campaign.cta.yes" }),
              }}
            />
          </div>
          <div className="w-full">
            <Textfit mode="single" throttle={10}>
              {intl.formatMessage({ id: "campaign.cta.sub.long" })}
            </Textfit>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
