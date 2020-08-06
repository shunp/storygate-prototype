import * as React from 'react'
import { css } from '@emotion/core'

import BackgroundImage from 'gatsby-background-image'
import { useStaticQuery, graphql } from 'gatsby'

const Background = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { eq: "top_background.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const imageData = data.bg.childImageSharp.fluid
  return (
    <div className="absolute w-full h-full">
      <BackgroundImage
        Tag="section"
        className=""
        fluid={imageData}
        css={css`
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          height: 100%;
          width: 100%;
        `}
      >
        <div className="absolute w-full h-full bg-gradient-b-blue-pink-purple opacity-75" />
        <div className="absolute w-full h-full">{children}</div>
      </BackgroundImage>
    </div>
  )
}

export default Background
