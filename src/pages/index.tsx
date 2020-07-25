import * as React from 'react'
import { css } from '@emotion/core'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import { themes, DEFAULT_THEME } from 'src/themes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { TwitterTweetEmbed } from 'react-twitter-embed'
import InstagramEmbed from 'react-instagram-embed'
import { applyTheme } from '../themes/utils'

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
      return false
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
  const [openTab, setOpenTab] = React.useState(1)
  const size = useWindowSize()
  const data = useStaticQuery(graphql`
    query {
      guest: file(relativePath: { eq: "guest.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logo: file(relativePath: { eq: "logo.png" }) {
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
  `)
  return (
    <div>
      <nav id="header" className="flex items-center justify-between flex-wrap p-2 w-full top-0 fixed z-20 bg-white">
        <Img fluid={data.koike.childImageSharp.fluid} className="w-8 h-8 rounded-full z-20 bg-white" />
        <div className="flex items-center">
          <Img fluid={data.logo.childImageSharp.fluid} className="w-40 z-20 bg-white" />
        </div>
        <button type="button" className="inline-block text-sm px-2 py-2 leading-none text-black border-white border rounded">
          ...
        </button>
      </nav>
      <div id="caption" className="flex items-center justify-center flex-col flex-wrap p-4 pt-16">
        <div id="profile-image" className="flex items-center justify-between flex-wrap w-1/2">
          <Img fluid={data.koike.childImageSharp.fluid} className="w-24 h-24 rounded-full bg-white border-4 border-primary" />
          <FontAwesomeIcon icon={faPaw} size="2x" className="text-primary" />
        </div>
        <div id="profile-name" className="mt-2">
          <span
            className="font-semibold text-xl"
            css={css`
              font-family: noto-sans-cjk-jp, sans-serif;
              font-style: normal;
            `}
          >
            小池 駿平
          </span>
        </div>
        <div id="profile-location" className="">
          <FontAwesomeIcon icon={faMapMarkerAlt} size="1x" className="text-gray-500" />
          <span className="mx-1 text-gray-500">Hong Kong</span>
        </div>
        <div id="profile-introduction" className="mt-2">
          <span
            className="text-gray-500"
            css={css`
              font-family: noto-sans-cjk-jp, sans-serif;
              font-style: normal;
            `}
          >
            BlockchainやWebGLなど / AWS Best Architecture 2018 / 書籍「Solidityプログラミング」発売中 / 秋から香港で仮想世界構築の研究
          </span>
        </div>
      </div>
      <div id="main-tab" className="flex flex-wrap">
        <div className="w-full">
          <ul className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row" role="tablist">
            <li className="mx-1 flex-auto text-center">
              <a
                className={`text-xs font-bold uppercase px-2 py-2 shadow-lg rounded block leading-normal ${
                  openTab === 1 ? 'text-white bg-primary' : 'text-primary bg-white'
                }`}
                onClick={e => {
                  e.preventDefault()
                  setOpenTab(1)
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
                css={css`
                  font-family: 'Lato', sans-serif;
                `}
              >
                Portfolio
              </a>
            </li>
            <li className="mx-1 flex-auto text-center">
              <a
                className={`text-xs font-bold uppercase px-5 py-2 shadow-lg rounded block leading-normal ${
                  openTab === 2 ? 'text-white bg-primary' : 'text-primary bg-white'
                }`}
                onClick={e => {
                  e.preventDefault()
                  setOpenTab(2)
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
                css={css`
                  font-family: 'Lato', sans-serif;
                `}
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
            <div className={openTab === 1 ? 'block' : 'hidden'} id="link1">
              <div
                className="font-semibold italic bg-primary text-white text-center py-3 shadow-lg"
                css={css`
                  font-family: 'Lato', sans-serif;
                `}
              >
                Best Architecture 2018
              </div>
              <div className="flex justify-center">
                <iframe
                  className="relative z-10"
                  title="youtube"
                  id="ytplayer"
                  width={size.width}
                  height={size.width ? size.width * 0.6 : 0}
                  src="https://www.youtube.com/embed/WlkWTye4mfI"
                  frameBorder="0"
                />
              </div>
              <div className="text-gray-500 p-4">
                AWSが選ぶベストアーキテクチャ2018に僕らのつくった仮想通貨ウォレットシステムが選出されました。日本金融業界からは初選出とのことで嬉しい限りです。
              </div>
              <div
                className="font-semibold italic bg-primary text-white text-center py-3 shadow-lg"
                css={css`
                  font-family: 'Lato', sans-serif;
                `}
              >
                3D WebXR Template
              </div>
              <div className="flex justify-center">
                <TwitterTweetEmbed
                  tweetId="1279046962025652225"
                  options={{ width: size.width }}
                  onLoad={tweetWidgetEl => {
                    if (tweetWidgetEl.children[0]) {
                      tweetWidgetEl.children[0].style.width = `${size.width}px`
                    }
                    if (tweetWidgetEl.shadowRoot) {
                      const tweetEl = tweetWidgetEl.shadowRoot.querySelector('.SandboxRoot')
                      tweetEl.style.position = 'static'
                    }
                  }}
                />
              </div>
              <div className="text-gray-500 p-4">
                AWSが選ぶベストアーキテクチャ2018に僕らのつくった仮想通貨ウォレットシステムが選出されました。日本金融業界からは初選出とのことで嬉しい限りです。
              </div>
            </div>
            <div className={openTab === 2 ? 'block' : 'hidden'} id="link2">
              <div className="font-semibold italic bg-primary text-white text-center py-3 shadow-lg">
                2014/9 (21歳) 社長インタビュアーの小池
              </div>
              <div className="flex justify-center">
                <iframe
                  title="facebook"
                  src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fshunpei.koike.9%2Fposts%2F571158393013178"
                  width={size.width}
                  height={size.width ? size.width * 0.6 : 0}
                  scrolling="no"
                  frameBorder="0"
                  // allowTransparency="true"
                  allow="encrypted-media"
                />
              </div>
              <div className="text-gray-500 p-4">
                大学3年後期、学校の単位を全て取り切り、残りの期間は法人営業で自分を磨くことを決意。当時社長と二人三脚のような零細ベンチャーでの修行が始まった。時給も休みもあまりなかったけれど、大人の世界に背伸びして社長インタビューやスポンサー獲得のために必死に営業した日々はとても疲労に満ちて充実していた。
              </div>
              <div className="font-semibold italic bg-primary text-white text-center py-3 shadow-lg">2020/1 (26歳) 痛みを伴う脱皮</div>
              <div className="flex justify-center">
                <iframe
                  title="facebook"
                  src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fshunpei.koike.9%2Fposts%2F2493928454069486"
                  width={size.width}
                  height={size.width ? size.width * 0.6 : 0}
                  scrolling="no"
                  frameBorder="0"
                  // allowTransparency="true"
                  allow="encrypted-media"
                />
              </div>
              <div className="text-gray-500 p-4">
                2019年の振り返り。個人事業主として独立、海外への挑戦、専門性の確立。とても濃い1年だった。悩んだ時間、価値観について向き合った時間、努力が成果に合わられない時間がとてつもなく大きい一方、1年前からは考えられない距離を自走することができたと思う。{' '}
              </div>
              <div className="font-semibold italic bg-primary text-white text-center py-3 shadow-lg">2020/5 (26歳) 人工的余白</div>
              <div className="flex justify-center">
                <InstagramEmbed
                  url="https://www.instagram.com/p/CBPLA0eJs5Z/"
                  maxWidth={size.width}
                  hideCaption
                  containerTagName="div"
                  protocol=""
                  onLoading={() => {}}
                  onSuccess={() => {}}
                  onAfterRender={() => {}}
                  onFailure={() => {}}
                />
              </div>
              <div className="text-gray-500 p-4">
                日本を離れマレーシアでの生活。東南アジアの成長スピードと、異文化が交わる都市クアラルンプールの雰囲気に圧倒されつつも、気候も人情もあたたかいこの街がすごく好き。フリーランスエンジニアとしてのポジショニングも安定し、金銭的・時間的余裕を初めてつくり出すことができた。StoryGateを含む多くの活動をこの期間に始める。
              </div>
              <div className="font-semibold italic bg-primary text-white text-center py-3 shadow-lg">
                2020/9 (27歳) フツウのCTOに収まるものか
              </div>
              <div className="flex justify-center">
                <span className="text-lg font-bold text-gray-600 mt-4">香港科技大学で技術研究</span>
              </div>
              <div className="text-gray-500 p-4">
                より専門性を深めるため、アジアトップクラスの大学にて修行することを決意。Asia Future
                Leadersの100人にアジアから選出。3D技術、ディープラーニング、そしてブロックチェーンを使い、仮想空間には何が必要か技術的に探究予定。to
                be continued...
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer" className="flex items-center justify-center flex-wrap bg-primary p-2 text-white text-sm bottom-0 w-full mt-4">
        <span className="">© 2020 Asymmatrix OÜ</span>
      </div>
    </div>
  )
}
export default IndexPage
