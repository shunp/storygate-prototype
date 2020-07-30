import * as React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

const CommunityBackground = () => {
  // TODO: DB
  const data = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "nishinosalon_background.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="flex items-center justify-center w-full">
      <Img fluid={data.background.childImageSharp.fluid} className="w-full" />
    </div>
  )
}

export default CommunityBackground
