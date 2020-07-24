import * as React from 'react'
import Img from 'gatsby-image'
import { graphql, StaticQuery } from 'gatsby'
import { applyTheme } from '../themes/utils'
import { themes, DEFAULT_THEME } from 'src/themes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

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

const useWindowSize = () => {
  const isClient = typeof window === 'object'

  const getSize = () => {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    }
  }
  const [windowSize, setWindowSize] = React.useState(getSize)

  React.useEffect(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, []) // Empty array ensures that effect is only run on mount and unmount

  return windowSize
}

const IndexPage = () => {
  React.useEffect(() => {
    applyTheme(DEFAULT_THEME, themes)
  }, [])
  const [openTab, setOpenTab] = React.useState(1);
  const size = useWindowSize()
  return (
    <div>
      <nav id="header" className="flex items-center justify-between flex-wrap p-1 mt-2 w-full top-0 fixed z-20">
        <StaticQuery query={query}
          render={data => <Img fluid={data.koike.childImageSharp.fluid} className="w-8 h-8 rounded-full z-20 bg-white" />
          } />
        <div className="flex items-center">
          <span className="font-semibold text-3xl tracking-tight font-serif">StoryGate</span>
        </div>
        <button type="button" className="inline-block text-sm px-2 py-2 leading-none text-black border-white border rounded">...</button>
      </nav>
      <div id="caption" className="flex items-center justify-center flex-col flex-wrap p-4 pt-16">
        <div id="profile-image" className="flex items-center justify-between flex-wrap w-1/2">
          <StaticQuery query={query}
            render={data => <Img fluid={data.koike.childImageSharp.fluid} className="w-24 h-24 rounded-full z-20 bg-white border-4 border-primary" />
            } />
          <FontAwesomeIcon icon={faPaw} size="2x" className="text-primary" />
        </div>
        <div id="profile-name" className="mt-2">
          <span className="font-semibold font-serif text-xl">小池 駿平</span>
        </div>
        <div id="profile-location" className="">
          <FontAwesomeIcon icon={faMapMarkerAlt} size="1x" className="text-gray-500" />
          <span className="mx-1 text-gray-500">Hong Kong</span>
        </div>
        <div id="profile-introduction" className="mt-2">
          <span className="text-gray-500">BlockchainやWebGLなど / AWS Best Architecture 2018 / 書籍「Solidityプログラミング」発売中 / 秋から香港で仮想世界構築の研究</span>
        </div>
      </div>
      <div id="main-tab" className="flex flex-wrap">
        <div className="w-full">
          <ul className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row" role="tablist">
            <li className="mx-1 flex-auto text-center">
              <a className={
                "text-xs font-bold uppercase px-2 py-2 shadow-lg rounded block leading-normal " +
                (openTab === 1
                  ? "text-white bg-primary"
                  : "text-primary bg-white")
              }
                onClick={e => {
                  e.preventDefault()
                  setOpenTab(1)
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Portfolio
              </a>
            </li>
            <li className="mx-1 flex-auto text-center">
              <a className={
                "text-xs font-bold uppercase px-5 py-2 shadow-lg rounded block leading-normal " +
                (openTab === 2
                  ? "text-white bg-primary"
                  : "text-primary bg-white")
              }
                onClick={e => {
                  e.preventDefault()
                  setOpenTab(2)
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Story
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div id="main-content" className="relative flex flex-col w-full">
        <div className="mt-4 flex-auto">
          <div className="tab-content tab-space">
            <div className={openTab === 1 ? "block" : "hidden"} id="link1">
              <div className="font-semibold italic bg-primary text-white text-center py-3 shadow-lg">
                Best Architecture 2018
              </div>
              <div>
                <iframe
                  className="relative z-10"
                  title="youtube"
                  id="ytplayer"
                  width={size.width}
                  height={size.width ? size.width * 0.6 : 0}
                  src={`https://www.youtube.com/embed/WlkWTye4mfI`}
                  frameBorder="0"
                />
              </div>
            </div>
            <div className={openTab === 2 ? "block" : "hidden"} id="link2">
              yyy
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default IndexPage
