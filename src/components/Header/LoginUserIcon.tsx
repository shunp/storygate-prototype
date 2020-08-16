import * as React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

const className = 'w-8 h-8 rounded-full z-20 bg-white'
interface LoginUserIconProps {
  pageId: string
  icon: string
}
const LoginUserIcon: React.FC<LoginUserIconProps> = ({ pageId, icon }) => {
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
  return (
    <Link to={`/persons/${pageId}`}>
      {pageId && icon ? (
        <img src={icon} className={className} alt="" />
      ) : (
        <Img fluid={data.guest.childImageSharp.fluid} className={className} />
      )}
    </Link>
  )
}
export default LoginUserIcon
