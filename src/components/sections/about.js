import * as React from "react"
import PropTypes from "prop-types"
import Card from "../cards/card"
import Title from "../atoms/title"
import Body from "../atoms/body"
import { useIntl } from "gatsby-plugin-intl"

const About = () => {
  const intl = useIntl()
  return (
    <div className="bg-yellow">
      <div
        className="bg-purple flex flex-col items-center justify-center pt-16"
        style={{
          clipPath:
            "polygon(0% 0%, calc(50% - 30px) 0%, 50% 30px, calc(50% + 30px) 0%, 100% 0%, 100% 101%, 0% 101%)",
        }}
      >
        <div className="flex flex-col justify-center w-full">
          <Title className="bg-yellow text-purple">
            {intl.formatMessage({ id: "about.title" })}
          </Title>
          <Body className="text-yellow">
            {intl.formatMessage({id: "about.body"})}
          </Body>
        </div>
      </div>
    </div>
  )
}

export default About
