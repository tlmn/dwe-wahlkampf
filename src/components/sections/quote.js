import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"
import { randomGenerator } from "../../lib/lib"

const Quote = () => {
  const intl = useIntl()
  const data = useStaticQuery(graphql`
    {
      allImageSharp(filter: { original: { src: { regex: "/quote/" } } }) {
        nodes {
          fluid {
            originalImg
            srcSet
          }
        }
      }
    }
  `)

  const {
    allImageSharp: { nodes },
  } = data

  const randomIndex = randomGenerator(0, nodes.length - 1)
  console.log(randomIndex)

  return (
    <div className="bg-yellow">
      <div
        className="bg-purple flex flex-col items-center justify-center py-16"
        style={{
          clipPath:
            "polygon(0% 0%, calc(50% - 30px) 0%, 50% 30px, calc(50% + 30px) 0%, 100% 0%, 100% 101%, 0% 101%)",
        }}
      >
        <div className="container py-6 grid grid-cols-12">
          <>
            <div className="col-span-10 col-start-2 md:col-span-5 md:col-start-1 py-4 md:py-0">
              <img
                srcSet={nodes[randomIndex].fluid.srcSet}
                className="image-shadow"
              />
            </div>
            <div className="col-span-10 col-start-2 md:col-span-6 md:col-start-7 py-4 md:py-0">
              <span
                dangerouslySetInnerHTML={{
                  __html: intl.formatMessage({
                    id: `quotes.${randomIndex}.quote`,
                  }),
                }}
                className="block text-yellow leading-tight text-2xl md:text-5xl font-bold"
              />
              <span
                dangerouslySetInnerHTML={{
                  __html: intl.formatMessage({
                    id: `quotes.${randomIndex}.author`,
                  }),
                }}
                className="block text-yellow leading-tight uppercase mt-3"
              />
            </div>
          </>
        </div>
      </div>
    </div>
  )
}

export default Quote
