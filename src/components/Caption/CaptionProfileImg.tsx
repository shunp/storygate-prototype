import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const CaptionProfileImg = () => {
  const data = useStaticQuery(graphql`
    query {
      koike: file(relativePath: { eq: "koike.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return <Img fluid={data.koike.childImageSharp.fluid} className="w-24 h-24 rounded-full bg-white border-4 border-primary" />
}

export default CaptionProfileImg
