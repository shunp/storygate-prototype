import * as React from 'react'
import { css } from '@emotion/core'
import { TwitterTweetEmbed } from 'react-twitter-embed'
import InstagramEmbed from 'react-instagram-embed'
import { Link } from 'gatsby'
import { display } from 'src/utils/numeral'
import { toggleEditStory } from 'src/state/app'
import { AnyAction } from 'redux'
import TitleLine from './TitleLine'
import EditButton from './EditButton'
import ClearButton from './ClearButton'
import DoneButton from './DoneButton'

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

const ContentExplanation = ({ text }) => {
  return <div className="text-gray-500 p-4">{text}</div>
}

interface ContentProps {
  title: string
  contentKey: string
  text: string
  size: number
}

const YouTubeContent: React.FC<ContentProps> = ({ title, contentKey, text, size }) => {
  return (
    <>
      <TitleLine title={title} />
      <div className="flex justify-center">
        <iframe
          className="relative z-10"
          title="youtube"
          id="ytplayer"
          width={size}
          height={size ? size * 0.6 : 0}
          src={`https://www.youtube.com/embed/${contentKey}`}
          frameBorder="0"
        />
      </div>
      <ContentExplanation text={text} />
    </>
  )
}

const TwitterContent: React.FC<ContentProps> = ({ title, contentKey, text, size }) => {
  return (
    <>
      <TitleLine title={title} />
      <div className="flex justify-center">
        <TwitterTweetEmbed
          tweetId={contentKey}
          options={{ width: size }}
          onLoad={tweetWidgetEl => {
            if (tweetWidgetEl.children[0]) {
              tweetWidgetEl.children[0].style.width = `${size}px`
            }
            if (tweetWidgetEl.shadowRoot) {
              const tweetEl = tweetWidgetEl.shadowRoot.querySelector('.SandboxRoot')
              tweetEl.style.position = 'static'
            }
          }}
        />
      </div>
      <ContentExplanation text={text} />
    </>
  )
}

const FacebookContent: React.FC<ContentProps> = ({ title, contentKey, text, size }) => {
  return (
    <>
      <TitleLine title={title} />
      <div className="flex justify-center">
        <iframe
          title="facebook"
          src={`https://www.facebook.com/plugins/post.php?href=${contentKey}`}
          width={size}
          height={size ? size * 0.6 : 0}
          scrolling="no"
          frameBorder="0"
          // allowTransparency="true"
          allow="encrypted-media"
        />
      </div>
      <ContentExplanation text={text} />
    </>
  )
}

const InstagramContent: React.FC<ContentProps> = ({ title, contentKey, text, size }) => {
  return (
    <>
      <TitleLine title={title} />
      <div className="flex justify-center">
        <InstagramEmbed
          url={`https://www.instagram.com/p/${contentKey}/`}
          maxWidth={size}
          hideCaption
          containerTagName="div"
          protocol=""
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
        />
      </div>
      <ContentExplanation text={text} />
    </>
  )
}

const TextContent: React.FC<ContentProps> = ({ title, contentKey, text, size }) => {
  return (
    <>
      <TitleLine title={title} />
      <div className="flex justify-center">
        <span className="text-lg font-bold text-gray-600 mt-4">{contentKey}</span>
      </div>
      <ContentExplanation text={text} />
    </>
  )
}

interface CommunityPanelProps {
  title: string
  num: number
  link: string
}

const CommunityPanel: React.FC<CommunityPanelProps> = ({ title, num, link }) => {
  return (
    <div className="font-semibold italic text-primary text-center py-3 shadow-lg">
      <Link to={`/communities/${link}`}>
        {title} ({display(num)}人)
      </Link>
    </div>
  )
}

const StoryTabContent = ({ index, openTab, size, editing, dispatch }) => {
  const doneEditing = () => {
    // TODO: firebase
    dispatch(toggleEditStory())
  }

  const resetEditing = () => {
    dispatch(toggleEditStory())
  }

  const [inputNewTitle, setInputNewTitle] = React.useState('')
  const [inputNewURL, setInputNewURL] = React.useState('')
  const [inputNewExplanation, setInputNewExplanation] = React.useState('')

  if (editing) {
    return (
      <>
        <FacebookContent
          title="2014/9 (21歳) 社長インタビュアーの小池"
          contentKey="https%3A%2F%2Fwww.facebook.com%2Fshunpei.koike.9%2Fposts%2F571158393013178"
          text="大学3年後期、学校の単位を全て取り切り、残りの期間は法人営業で自分を磨くことを決意。当時社長と二人三脚のような零細ベンチャーでの修行が始まった。時給も休みもあまりなかったけれど、大人の世界に背伸びして社長インタビューやスポンサー獲得のために必死に営業した日々はとても疲労に満ちて充実していた。"
          size={size}
        />
        <EditButton
          ClearButton={<ClearButton onClick={resetEditing} />}
          DoneButton={<DoneButton onClick={doneEditing} />}
          className="mt-1"
        />
        <div id="new-content" className="m-2">
          <div className="text-center text-lg font-bold">新しいコンテンツを追加</div>
          <div className="text-center mt-2">タイトル</div>
          <input
            type="text"
            className="border-2 bordeer-gray-300 focus:outline-none bg-white w-full h-10 px-5 rounded-lg"
            value={inputNewURL}
            placeholder="Title..."
            onChange={e => setInputNewTitle(e.target.value)}
          />
          <div className="text-center mt-2">コンテンツURL</div>
          <input
            type="text"
            className="border-2 bordeer-gray-300 focus:outline-none bg-white w-full h-10 px-5 rounded-lg"
            value={inputNewTitle}
            placeholder="URL..."
            onChange={e => setInputNewURL(e.target.value)}
          />
          <div className="text-center mt-2">詳細</div>
          <textarea
            className="border-2 bordeer-gray-300 focus:outline-none bg-white h-20 w-full px-5 rounded-lg"
            value={inputNewExplanation}
            placeholder="Introduction..."
            onChange={e => setInputNewExplanation(e.target.value)}
          />
        </div>
      </>
    )
  }
  return (
    <div className={openTab === index ? 'block' : 'hidden'} id={`link${index}`}>
      <FacebookContent
        title="2014/9 (21歳) 社長インタビュアーの小池"
        contentKey="https%3A%2F%2Fwww.facebook.com%2Fshunpei.koike.9%2Fposts%2F571158393013178"
        text="大学3年後期、学校の単位を全て取り切り、残りの期間は法人営業で自分を磨くことを決意。当時社長と二人三脚のような零細ベンチャーでの修行が始まった。時給も休みもあまりなかったけれど、大人の世界に背伸びして社長インタビューやスポンサー獲得のために必死に営業した日々はとても疲労に満ちて充実していた。"
        size={size}
      />
      <FacebookContent
        title="2020/1 (26歳) 痛みを伴う脱皮"
        contentKey="https%3A%2F%2Fwww.facebook.com%2Fshunpei.koike.9%2Fposts%2F2493928454069486"
        text="2019年の振り返り。個人事業主として独立、海外への挑戦、専門性の確立。とても濃い1年だった。悩んだ時間、価値観について向き合った時間、努力が成果に合わられない時間がとてつもなく大きい一方、1年前からは考えられない距離を自走することができたと思う。"
        size={size}
      />
      <InstagramContent
        title="2020/5 (26歳) 人工的余白"
        contentKey="CBPLA0eJs5Z"
        text="日本を離れマレーシアでの生活。東南アジアの成長スピードと、異文化が交わる都市クアラルンプールの雰囲気に圧倒されつつも、気候も人情もあたたかいこの街がすごく好き。フリーランスエンジニアとしてのポジショニングも安定し、金銭的・時間的余裕を初めてつくり出すことができた。StoryGateを含む多くの活動をこの期間に始める。"
        size={size}
      />
      <TextContent
        title="2020/9 (27歳) フツウのCTOに収まるものか"
        contentKey="香港科技大学で技術研究"
        text="より専門性を深めるため、アジアトップクラスの大学にて修行することを決意。Asia Future
              Leadersの100人にアジアから選出。3D技術、ディープラーニング、そしてブロックチェーンを使い、仮想空間には何が必要か技術的に探究予定。to
              be continued..."
        size={size}
      />
    </div>
  )
}
interface PersonContentLayoutProps {
  openTab: number
  editingStory: boolean
  dispatch: React.Dispatch<React.SetStateAction<AnyAction>>
}
const PersonContentLayout: React.FC<PersonContentLayoutProps> = ({ openTab, editingStory, dispatch }) => {
  const size = useWindowSize()

  return (
    <div id="main-content" className="relative flex flex-col w-full">
      <div className="mt-4 flex-auto">
        <div className="tab-content tab-space">
          <div className={openTab === 1 ? 'block' : 'hidden'} id="link1">
            <YouTubeContent
              title="Best Architecture 2018"
              contentKey="WlkWTye4mfI"
              text="AWSが選ぶベストアーキテクチャ2018に僕らのつくった仮想通貨ウォレットシステムが選出されました。日本金融業界からは初選出とのことで嬉しい限りです。"
              size={size.width}
            />
            <TwitterContent
              title="3D WebXR Template"
              contentKey="1279046962025652225"
              text="AWSが選ぶベストアーキテクチャ2018に僕らのつくった仮想通貨ウォレットシステムが選出されました。日本金融業界からは初選出とのことで嬉しい限りです。"
              size={size.width}
            />
          </div>
          <StoryTabContent index={2} openTab={openTab} size={size.width} editing={editingStory} dispatch={dispatch} />
          <div className={openTab === 3 ? 'block' : 'hidden'} id="link3">
            <CommunityPanel title="西野亮廣エンタメ研究所" num={70000} link="nishinosalon" />
            <CommunityPanel title="StoryGate" num={15} link="stroygate" />
            <CommunityPanel title="香港日本人エンジニア会" num={40} link="hongkong" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonContentLayout
