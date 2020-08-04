import * as React from 'react'
import { toggleEditPortfolio } from 'src/state/app'
import EditButton from '../EditButton'
import ClearButton from '../ClearButton'
import DoneButton from '../DoneButton'
import { NewPortfolio, PortfolioList } from '../Content/Portfolio'

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

export default PortfolioTabContent
