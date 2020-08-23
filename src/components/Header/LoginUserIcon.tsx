import * as React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { LoginUser } from 'src/services/interfaces/Auth'
import { toggleLoginModal } from '../Auth/modal/utils'
import LoginModal from '../Auth/modal/LoginModal'

const className = 'w-8 h-8 rounded-full z-20 bg-white'
interface LoginUserIconProps {
  pageId: string
  icon: string
  login: (logingUser: LoginUser) => void
}
const LoginUserIcon: React.FC<LoginUserIconProps> = ({ pageId, icon, login }) => {
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
  if (pageId && icon) {
    return (
      <div className="relative z-30">
        <Link to={`/persons/${pageId}`}>
          <img src={icon} className={className} alt="" />
        </Link>
      </div>
    )
  }

  return (
    <div className="relative z-30">
      <button
        type="submit"
        className="modal-open inline-block text-xs leading-none text-white"
        onClick={() => {
          toggleLoginModal()
        }}
      >
        <Img fluid={data.guest.childImageSharp.fluid} className={className} />
      </button>
      <LoginModal login={login} />
    </div>
  )
}
export default LoginUserIcon
