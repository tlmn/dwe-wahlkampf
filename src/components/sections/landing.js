import React, { useEffect, useRef, useState } from "react"
import Cross from "../../assets/svg/cross"
import LogoWordMark from "../../assets/svg/logoWordMark"
import { Textfit } from "react-textfit"
import LanguageSwitch from "../languageSwitch"
import { FormattedHTMLMessage, useIntl } from "gatsby-plugin-intl"
import useDataContext from "../../lib/useDataContext"

const Landing = () => {
  const intl = useIntl()
  const ref = useRef(null)
  const [height, setHeight] = useState(0)
  const { locale } = intl
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
              <LanguageSwitch />
            </div>
          </div>
          <span className="block text-6xl md:text-7xl leading-none my-2">
            <FormattedHTMLMessage id="campaign.slogan" />
          </span>
          {locale !== "tr" && (
            <div className="w-full flex items-center justify-items-start my-2">
              <div
                style={{ height: `${height}px`, width: `${height}px` }}
                className="mr-2 md:mr-4"
              >
                <Cross className="object-cover w-full h-full" />
              </div>
              <span
                className="text-8xl md:text-9xl block leading-none uppercase"
                ref={ref}
                dangerouslySetInnerHTML={{
                  __html: intl.formatMessage({ id: "campaign.cta.yes" }),
                }}
              />
            </div>
          )}
          <div className="w-full">
            <Textfit mode="single" throttle={10}>
              {intl.formatMessage({ id: "campaign.cta.sub.long" })}
            </Textfit>
          </div>
          {locale === "tr" && (
            <div className="w-full flex items-center justify-items-start my-2">
              <div
                style={{ height: `${height}px`, width: `${height}px` }}
                className="mr-2 md:mr-4"
              >
                <Cross className="object-cover w-full h-full" />
              </div>
              <span
                className="text-8xl md:text-9xl block leading-none uppercase"
                ref={ref}
                dangerouslySetInnerHTML={{
                  __html: intl.formatMessage({ id: "campaign.cta.yes" }),
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Landing
