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
    koike: file(relativePath: { eq: "koike.png" }) {
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
    <div>
      <nav id="header" className="flex items-center justify-between flex-wrap p-1 mt-2 w-full top-0 fixed z-20">
        <StaticQuery query={query}
          render={data => <Img fluid={data.koike.childImageSharp.fluid} className="w-8 h-8 rounded-full z-20 bg-white" />
          } />
        <div className="flex items-center">
          <span className="font-semibold text-3xl tracking-tight font-serif">StoryGate</span>
        </div>
        <button type="button" className="inline-block text-xs px-2 py-2 leading-none text-white border-white border rounded">...</button>
      </nav>
      <div id="caption" className="flex items-center justify-center flex-col flex-wrap p-4 pt-16">
        <StaticQuery query={query}
          render={data => <Img fluid={data.koike.childImageSharp.fluid} className="w-24 h-24 rounded-full z-20 bg-white border-4 border-primary" />
          } />

      </div>
    </div>
  )
}
export default IndexPage
