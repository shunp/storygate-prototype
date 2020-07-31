import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export interface CaptionProfileImgProps {
  profileImg: string
}
const CaptionProfileImg: React.FC<CaptionProfileImgProps> = ({ profileImg }) => {
  const data = useStaticQuery(graphql`
    query {
      guest: file(relativePath: { eq: "guest.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  if (profileImg) {
    return <img src={profileImg} className="w-24 h-24 rounded-full bg-white border-4 border-primary" alt="" />
  }
  return <Img fluid={data.guest.childImageSharp.fluid} className="w-24 h-24 rounded-full bg-white border-4 border-primary" />
}

export default CaptionProfileImg
