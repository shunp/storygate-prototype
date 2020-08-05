import * as React from 'react'
import { toggleEditPortfolio } from 'src/state/app'
import { OgTag } from 'src/utils/scraper'
import { CompleteButtonSet, ClearButton, DoneButton } from '../EditButton'
import { NewPortfolio, PortfolioList, ModifiablePortfolioList } from '../Content/Portfolio'

const PortfolioTabContent = ({ index, openTab, size, editing, dispatch }) => {
  const [inputNewTitle, setInputNewTitle] = React.useState('')
  const [inputNewURL, setInputNewURL] = React.useState('')
  const [inputNewExplanation, setInputNewExplanation] = React.useState('')
  const [inputNewLocation, setInputNewLocation] = React.useState('')

  const doneEditing = async () => {
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

    const ogTag = new OgTag()
    const tagParam = await ogTag.fetch(inputNewURL)
    console.log('tagParam', tagParam)
    dispatch(toggleEditPortfolio())
  }

  const resetEditing = () => {
    dispatch(toggleEditPortfolio())
  }

  const portfolioData = [
    {
      id: '1xxxxxxxx',
      type: 'YouTubePost',
      title: 'Best Architecture 2018',
      iframeKey: 'WlkWTye4mfI',
      fullURL: 'https://www.youtube.com/watch?v=WlkWTye4mfI',
      pic: '',
      text:
        'AWSが選ぶベストアーキテクチャ2018に僕らのつくった仮想通貨ウォレットシステムが選出されました。日本金融業界からは初選出とのことで嬉しい限りです。',
      location: ''
    },
    {
      id: '2xxxxxxxx',
      type: 'TwitterPost',
      title: '3D WebXR Template',
      iframeKey: '1279046962025652225',
      fullURL:
        'https://twitter.com/shunpei42ba_/status/1279046962025652225?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1279046962025652225%7Ctwgr%5E&ref_url=https%3A%2F%2Fgatsby-three-ts-plus.netlify.app%2Fpersons%2Fowner',
      pic: '',
      text: 'GatsbyへThree.js×TypeScriptのテンプレートをコントリビュートさせていただきました。',
      location: ''
    },
    {
      id: '3xxxxxxxx',
      type: 'GeneralURL',
      title: '美容院（店舗表示テスト用）',
      iframeKey: '',
      fullURL: 'https://beauty.hotpepper.jp/slnH000105506/?cstt=3',
      pic: 'https://imgbp.hotp.jp/CSP/IMG_SRC/64/09/B002216409/B002216409_419-314.jpg',
      text:
        '友人の美容院です。いつもお世話になっております。※実店舗をお持ちの方はこのように場所とセットでご登録いただくとフレンドマップに表示されます',
      location: '永福町'
    }
  ]

  if (editing) {
    return (
      <div className={openTab === index ? 'block' : 'hidden'} id={`link${index}`}>
        <CompleteButtonSet
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
        <ModifiablePortfolioList data={portfolioData} size={size} />
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
