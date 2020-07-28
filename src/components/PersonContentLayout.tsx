import * as React from 'react'
import { css } from '@emotion/core'
import { TwitterTweetEmbed } from 'react-twitter-embed'
import InstagramEmbed from 'react-instagram-embed'

const useWindowSize = () => {
  const isClient = typeof window === 'object'

  const getSize = () => {
    return {
      width: isClient ? window.innerWidth : 340,
      height: isClient ? window.innerHeight : 200
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

const PersonContentLayout = ({ openTab }) => {
  const size = useWindowSize()

  return (
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
          <div className={openTab === 3 ? 'block' : 'hidden'} id="link3">
            <div className="font-semibold italic text-primary text-center py-3 shadow-lg">
              <a href="#">西野亮廣エンタメ研究所 (70,000人)</a>
            </div>
            <div className="font-semibold italic text-primary text-center py-3 shadow-lg">
              <a href="#">StoryGate (15人)</a>
            </div>
            <div className="font-semibold italic text-primary text-center py-3 shadow-lg">
              <a href="#">香港日本人エンジニア会 (40人)</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonContentLayout
