import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { existImg } from 'src/utils/image'

export interface CaptionProfileImgProps {
  profileImg?: string
  className: string
}
const CLASSNAME_DEFAULT = 'w-12 h-12 rounded-full'
const CaptionProfileImg: React.FC<CaptionProfileImgProps> = ({ profileImg, className = CLASSNAME_DEFAULT }) => {
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
  if (existImg(profileImg)) {
    return <img src={profileImg} className={className} alt="" />
  }
  return <Img fluid={data.guest.childImageSharp.fluid} className={`${className} bg-white border-4 border-primary`} />
}

export default CaptionProfileImg
