import * as React from "react"
import { useIntl } from "gatsby-plugin-intl"
import Button from "../atoms/button"
import LogoWordMark from "../../assets/svg/logoWordMark"
import InstagramIcon from "../../assets/svg/social/instagram"
import TwitterIcon from "../../assets/svg/social/twitter"
import FacebookIcon from "../../assets/svg/social/facebook"

const Footer = () => {
  const intl = useIntl()
  return (
    <div className="bg-yellow pb-5">
      <div className="container flex flex-col items-end md:items-center gap-3">
        <ul className="flex flex-col items-end md:justify-center md:flex-row md:gap-3">
          <li>
            <Button internal={false} link="https://www.startnext.com/dwenteignen21">
              {intl.formatMessage({ id: "common.donate" })}
            </Button>
          </li>
          <li>
            <Button internal={false} link="https://www.dwenteignen.de/mitmachen/">
              {intl.formatMessage({ id: "common.takeAction" })}
            </Button>
          </li>
          <li>
            <Button internal={true} link="https://www.dwenteignen.de/kontakt/">
              {intl.formatMessage({ id: "common.contact" })}
            </Button>
          </li>
          <li>
            <Button internal={true} link="https://www.dwenteignen.de/impressum/">
              Impressum
            </Button>
          </li>
        </ul>
        <ul className="flex gap-3">
          <li>
            <a href="https://www.instagram.com/dw_enteignen">
              <InstagramIcon className="hover:scale-108 animated" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/dwenteignen">
              <TwitterIcon className="hover:scale-108 animated" />
            </a>
          </li>
          <li>
            <a href="https://de-de.facebook.com/DWenteignen/">
              <FacebookIcon className="hover:scale-108 animated" />
            </a>
          </li>
        </ul>
        <a
          href="https://www.dwenteignen.de"
          target="_blank"
          rel="noreferrer"
          className="hover:scale-108 animated flex justify-center mt-4"
        >
          <LogoWordMark className="object-cover flex-1" />
        </a>
      </div>
    </div>
  )
}

export default Footer
