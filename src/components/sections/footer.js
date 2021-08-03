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
      <div className="container flex flex-col items-end md:items-center gap-2">
        <ul className="flex flex-col items-end md:justify-center md:flex-row md:gap-2">
          <li>
            <Button internal={false} link="">
              Spenden
            </Button>
          </li>
          <li>
            <Button internal={false} link="">
              Mitmachen
            </Button>
          </li>
          <li>
            <Button internal={true} link="">
              Kontakt
            </Button>
          </li>
          <li>
            <Button internal={true} link="">
              Impressum
            </Button>
          </li>
        </ul>
        <ul className="flex gap-2">
          <li>
            <a href="" className="hover:scale-110 animated">
              <InstagramIcon />
            </a>
          </li>
          <li>
            <a href="" className="hover:scale-110 animated">
              <TwitterIcon />
            </a>
          </li>
          <li>
            <a href="" className="hover:scale-110 animated">
              <FacebookIcon />
            </a>
          </li>
        </ul>
        <a
          href="https://www.dwenteignen.de"
          target="_blank"
          className="hover:scale-110 animated flex justify-center"
        >
          <LogoWordMark className="object-cover flex-1" />
        </a>
      </div>
    </div>
  )
}

export default Footer
