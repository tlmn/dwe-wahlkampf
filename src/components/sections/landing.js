import * as React from "react"
import CrossYesIcon from "../../assets/svg/crossYes"
import LogoWordMark from "../../assets/svg/logoWordMark"
import { Textfit } from "react-textfit"
import LanguageSwitch from "../languageSwitch"
import { FormattedHTMLMessage, useIntl } from "gatsby-plugin-intl"

const Landing = () => {
  const intl = useIntl()
  return (
    <div className="bg-yellow text-purple font-bold">
      <div className="container flex py-4" style={{ minHeight: "90vh" }}>
        <div className="container flex justify-between flex-col">
          <div className="flex-1 flex items-start justify-center w-full">
            <LogoWordMark className="object-cover flex-1" />
            <div className="flex flex-1 justify-end">
              <LanguageSwitch />
            </div>
          </div>
          <span className="block text-6xl my-2">
            <FormattedHTMLMessage id="campaign.slogan" />
          </span>
          <div className="w-full md:w-1/5">
            <CrossYesIcon className="object-cover w-full h-full" />
          </div>
          <div className="w-full">
            <Textfit mode="single">
              {intl.formatMessage({ id: "campaign.cta.sub.long" })}
            </Textfit>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
