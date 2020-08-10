import * as React from 'react'
import { Story, StoryContent } from 'src/services/interfaces/Story'
import { extractFromUrl } from 'src/components/Provider/ContentsExtractor'
import { findOpenGraph } from 'src/services/firebase/functions'
import { WithIFrame, WithPicture } from 'src/services/interfaces/Portfolio'
import { StoryLine, AddStory, ModifiableStoryLine } from '../../Content/Story'
import { CompleteButtonSet, ClearButton, DoneButton } from '../../EditButton'

const createContent = async (
  time: string,
  title: string,
  url: string,
  explanation: string
): Promise<StoryContent<WithIFrame | WithPicture>> => {
  const contentElement = extractFromUrl(url)
  if (contentElement.type === 'GeneralURL') {
    const result = await findOpenGraph(url)
    return {
      id: `content${new Date().getTime()}`,
      time,
      title,
      text: explanation,
      type: contentElement.type,
      fullURL: contentElement.key,
      pic: result.ogImg
    }
  }
  return {
    id: `content${new Date().getTime()}`,
    time,
    title,
    text: explanation,
    type: contentElement.type,
    iframeKey: contentElement.key
  }
}
interface StoryTabContentProps {
  index: number
  openTab: number
  story: Story
  size: number
  editing: boolean
  toggleEditingStory: () => void
  update: (story: Story) => void
}
const StoryTabContent: React.FC<StoryTabContentProps> = ({ index, openTab, story, size, editing, toggleEditingStory, update }) => {
  const storyData = {
    contents: [
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
  }
  const [inputNewTime, setInputNewTime] = React.useState('')
  const [inputNewTitle, setInputNewTitle] = React.useState('')
  const [inputNewURL, setInputNewURL] = React.useState('')
  const [inputNewExplanation, setInputNewExplanation] = React.useState('')
  const [inputNewLocation, setInputNewLocation] = React.useState('')
  const clearState = () => {
    setInputNewTime('')
    setInputNewTitle('')
    setInputNewURL('')
    setInputNewExplanation('')
    setInputNewLocation('')
  }
  const doneEditing = async () => {
    // TODO: firebase
    if (!inputNewTime) {
      // TODO: validate
      console.log('inputNewTime', inputNewTime)
      return
    }
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
    const updated = { ...story }
    updated.contents.push(await createContent(inputNewTime, inputNewTitle, inputNewURL, inputNewExplanation))
    update(story)
    clearState()
    toggleEditingStory()
  }

  const resetEditing = () => {
    clearState()
    toggleEditingStory()
  }

  if (editing) {
    return (
      <div className={openTab === index ? 'block' : 'hidden'} id={`link${index}`}>
        <CompleteButtonSet
          ClearButton={<ClearButton onClick={resetEditing} />}
          DoneButton={<DoneButton onClick={doneEditing} />}
          className="mt-1"
        />
        <AddStory
          inputNewMonth={inputNewTime}
          setInputNewMonth={setInputNewTime}
          inputNewTitle={inputNewTitle}
          setInputNewTitle={setInputNewTitle}
          inputNewURL={inputNewURL}
          setInputNewURL={setInputNewURL}
          inputNewExplanation={inputNewExplanation}
          setInputNewExplanation={setInputNewExplanation}
        />
        <ModifiableStoryLine story={story} size={size} update={update} />
      </div>
    )
  }
  return (
    <div className={openTab === index ? 'block' : 'hidden'} id={`link${index}`}>
      <StoryLine story={story} size={size} />
    </div>
  )
}

export default StoryTabContent
