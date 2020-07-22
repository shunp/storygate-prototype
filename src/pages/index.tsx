import * as React from 'react'
import Img from 'gatsby-image'
import { graphql, StaticQuery } from 'gatsby'
import { applyTheme } from '../themes/utils'
import { themes, DEFAULT_THEME } from 'src/themes'

const query = graphql`
  query {
    guest: file(relativePath: { eq: "guest.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const IndexPage = () => {
  React.useEffect(() => {
    applyTheme(DEFAULT_THEME, themes)
  }, [])
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gradient-r-gray900-primary-gray900 p-1 w-full top-0 fixed z-20">
      <StaticQuery query={query}
        render={data => <Img fluid={data.guest.childImageSharp.fluid} className="w-8 h-8 rounded-full z-20 bg-white opacity-50" />
        } />
      <div className="flex items-center">
        <span className="font-semibold text-xl tracking-tight text-white font-serif">StoryGate</span>
      </div>
      <button type="button" className="inline-block text-xs px-2 py-2 leading-none text-white border-white border rounded">LOGIN</button>
    </nav>)
}
export default IndexPage
