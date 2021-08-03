import * as React from "react"
import { useIntl } from "gatsby-plugin-intl"
import LogoWordMark from "../../assets/svg/logoWordMark"
import LanguageSwitch from "../languageSwitch"
import CrossJa from "../../assets/svg/crossYes"

const Header = () => {
  const intl = useIntl()
  return (
    <div
      className="bg-yellow fixed top-0 left-0 w-full flex z-50 shadow py-1"
      style={{ height: "45px" }}
    >
      <div className="container flex justify-between">
        <LogoWordMark />
        <div className="flex md:flex-row flex-col items-center gap-2">
          <CrossJa className="w-full object-cover" style={{ width: "40px" }} />
          <span className="text-purple font-bold">
            {intl.formatMessage({ id: "campaign.cta.sub.short" })}
          </span>
        </div>
        <LanguageSwitch className="w-full object-cover" />
      </div>
    </div>
  )
}

export default Header
