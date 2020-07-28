import * as React from 'react'
import Img from 'gatsby-image'
import { Link, useStaticQuery, graphql } from 'gatsby'

const HeaderLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Link to="/">
      <div className="flex items-center">
        <Img fluid={data.logo.childImageSharp.fluid} className="w-40 z-20 bg-white" />
      </div>
    </Link>
  )
}

export default HeaderLogo
