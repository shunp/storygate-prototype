import * as React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
import { display } from 'src/utils/numeral'
import { toggleEditStory, toggleEditPortfolio } from 'src/state/app'
import { AnyAction } from 'redux'
import EditButton from './EditButton'
import ClearButton from './ClearButton'
import DoneButton from './DoneButton'
import { NewPortfolio, PortfolioList } from './Content/Portfolio'
import { Story, AddStory } from './Content/Story'

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

const PortfolioTabContent = ({ index, openTab, size, editing, dispatch }) => {
  const [inputNewTitle, setInputNewTitle] = React.useState('')
  const [inputNewURL, setInputNewURL] = React.useState('')
  const [inputNewExplanation, setInputNewExplanation] = React.useState('')

  const doneEditing = () => {
    // TODO: firebase
    if (!inputNewTitle) {
      // TODO: validate
      console.log('inputNewTitle', inputNewTitle)
      return
    }

    if (!inputNewURL) {
      // TODO: validate
      console.log('inputNewURL', inputNewURL)
      return
    }

    dispatch(toggleEditPortfolio())
  }

  const resetEditing = () => {
    dispatch(toggleEditPortfolio())
  }

  const portfolioData = [
    {
      type: 'YouTubePost',
      title: 'Best Architecture 2018',
      iframeKey: 'WlkWTye4mfI',
      fullURL: 'https://www.youtube.com/watch?v=WlkWTye4mfI',
      pic: '',
      text:
        'AWSが選ぶベストアーキテクチャ2018に僕らのつくった仮想通貨ウォレットシステムが選出されました。日本金融業界からは初選出とのことで嬉しい限りです。'
    },
    {
      type: 'TwitterPost',
      title: '3D WebXR Template',
      iframeKey: '1279046962025652225',
      fullURL:
        'https://twitter.com/shunpei42ba_/status/1279046962025652225?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1279046962025652225%7Ctwgr%5E&ref_url=https%3A%2F%2Fgatsby-three-ts-plus.netlify.app%2Fpersons%2Fowner',
      pic: '',
      text: 'GatsbyへThree.js×TypeScriptのテンプレートをコントリビュートさせていただきました。'
    }
  ]

  if (editing) {
    return (
      <div className={openTab === index ? 'block' : 'hidden'} id={`link${index}`}>
        <EditButton
          ClearButton={<ClearButton onClick={resetEditing} />}
          DoneButton={<DoneButton onClick={doneEditing} />}
          className="mt-1"
        />
        <NewPortfolio
          inputNewTitle={inputNewTitle}
          setInputNewTitle={setInputNewTitle}
          inputNewURL={inputNewURL}
          setInputNewURL={setInputNewURL}
          inputNewExplanation={inputNewExplanation}
          setInputNewExplanation={setInputNewExplanation}
        />
        <PortfolioList data={portfolioData} size={size} />
      </div>
    )
  }
  return (
    <div className={openTab === index ? 'block' : 'hidden'} id={`link${index}`}>
      <PortfolioList data={portfolioData} size={size} />
    </div>
  )
}

const StoryTabContent = ({ index, openTab, size, editing, dispatch }) => {
  const [inputNewTitle, setInputNewTitle] = React.useState('')
  const [inputNewURL, setInputNewURL] = React.useState('')
  const [inputNewExplanation, setInputNewExplanation] = React.useState('')

  const storyData = [
    {
      type: 'FacebookPost',
      time: '2014/9',
      title: '社長インタビュアーの小池',
      iframeKey: 'https%3A%2F%2Fwww.facebook.com%2Fshunpei.koike.9%2Fposts%2F571158393013178',
      fullURL: '',
      pic: '',
      text:
        '大学3年後期、学校の単位を全て取り切り、残りの期間は法人営業で自分を磨くことを決意。当時社長と二人三脚のような零細ベンチャーでの修行が始まった。時給も休みもあまりなかったけれど、大人の世界に背伸びして社長インタビューやスポンサー獲得のために必死に営業した日々はとても疲労に満ちて充実していた。'
    },
    {
      type: 'FacebookPost',
      time: '2020/1',
      title: '痛みを伴う脱皮',
      iframeKey: 'https%3A%2F%2Fwww.facebook.com%2Fshunpei.koike.9%2Fposts%2F2493928454069486',
      fullURL: '',
      pic: '',
      text:
        '2019年の振り返り。個人事業主として独立、海外への挑戦、専門性の確立。とても濃い1年だった。悩んだ時間、価値観について向き合った時間、努力が成果に合わられない時間がとてつもなく大きい一方、1年前からは考えられない距離を自走することができたと思う。'
    },
    {
      type: 'InstagramPost',
      time: '2020/5',
      title: '人工的余白',
      iframeKey: 'CBPLA0eJs5Z',
      fullURL: '',
      pic: '',
      text:
        '日本を離れマレーシアでの生活。東南アジアの成長スピードと、異文化が交わる都市クアラルンプールの雰囲気に圧倒されつつも、気候も人情もあたたかいこの街がすごく好き。フリーランスエンジニアとしてのポジショニングも安定し、金銭的・時間的余裕を初めてつくり出すことができた。StoryGateを含む多くの活動をこの期間に始める。'
    },
    {
      type: 'Text',
      time: '2020/9',
      title: '更なる専門性の追求',
      iframeKey: '香港科技大学で技術研究',
      fullURL: '',
      pic: '',
      text:
        'より専門性を深めるため、アジアトップクラスの大学にて修行することを決意。Asia Future Leadersの100人にアジアから選出。3D技術、ディープラーニング、そしてブロックチェーンを使い、仮想空間には何が必要か技術的に探究予定。to be continued...'
    }
  ]

  const doneEditing = () => {
    // TODO: firebase
    if (!inputNewTitle) {
      // TODO: validate
      console.log('inputNewTitle', inputNewTitle)
      return
    }

    if (!inputNewURL) {
      // TODO: validate
      console.log('inputNewURL', inputNewURL)
      return
    }

    dispatch(toggleEditStory())
  }

  const resetEditing = () => {
    dispatch(toggleEditStory())
  }

  if (editing) {
    return (
      <div className={openTab === index ? 'block' : 'hidden'} id={`link${index}`}>
        <EditButton
          ClearButton={<ClearButton onClick={resetEditing} />}
          DoneButton={<DoneButton onClick={doneEditing} />}
          className="mt-1"
        />
        <AddStory
          inputNewTitle={inputNewTitle}
          setInputNewTitle={setInputNewTitle}
          inputNewURL={inputNewURL}
          setInputNewURL={setInputNewURL}
          inputNewExplanation={inputNewExplanation}
          setInputNewExplanation={setInputNewExplanation}
        />
        <Story data={storyData} size={size} />
      </div>
    )
  }
  return (
    <div className={openTab === index ? 'block' : 'hidden'} id={`link${index}`}>
      <Story data={storyData} size={size} />
    </div>
  )
}
interface PersonContentLayoutProps {
  openTab: number
  editingPortfolio: boolean
  editingStory: boolean
  dispatch: React.Dispatch<React.SetStateAction<AnyAction>>
}
const PersonContentLayout: React.FC<PersonContentLayoutProps> = ({ openTab, editingPortfolio, editingStory, dispatch }) => {
  const size = useWindowSize()

  return (
    <div id="main-content" className="relative flex flex-col w-full">
      <div className="mt-4 flex-auto">
        <div className="tab-content tab-space">
          <PortfolioTabContent index={1} openTab={openTab} size={size.width} editing={editingPortfolio} dispatch={dispatch} />
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
