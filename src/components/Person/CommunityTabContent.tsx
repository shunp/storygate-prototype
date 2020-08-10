import * as React from 'react'
import { CommunityList } from '../Content/Community'

const CommunityTabContent = ({ index, openTab, size, editing }) => {
  // TODO: DB
  // show: can see the content if the login user is one of the members of the community
  const communityData = [
    {
      title: '西野亮廣エンタメ研究所',
      number: 70000,
      link: 'nishinosalon',
      pic: '',
      show: true,
      text:
        '日本を離れマレーシアでの生活。東南アジアの成長スピードと、異文化が交わる都市クアラルンプールの雰囲気に圧倒されつつも、気候も人情もあたたかいこの街がすごく好き。フリーランスエンジニアとしてのポジショニングも安定し、金銭的・時間的余裕を初めてつくり出すことができた。StoryGateを含む多くの活動をこの期間に始める。'
    },
    {
      title: 'StoryGate',
      number: 15,
      link: 'stroygate',
      pic: '',
      show: true,
      text:
        '日本を離れマレーシアでの生活。東南アジアの成長スピードと、異文化が交わる都市クアラルンプールの雰囲気に圧倒されつつも、気候も人情もあたたかいこの街がすごく好き。フリーランスエンジニアとしてのポジショニングも安定し、金銭的・時間的余裕を初めてつくり出すことができた。StoryGateを含む多くの活動をこの期間に始める。'
    },
    {
      title: '香港日本人エンジニア会',
      number: 40,
      link: 'hongkong',
      pic: '',
      show: false,
      text:
        '日本を離れマレーシアでの生活。東南アジアの成長スピードと、異文化が交わる都市クアラルンプールの雰囲気に圧倒されつつも、気候も人情もあたたかいこの街がすごく好き。フリーランスエンジニアとしてのポジショニングも安定し、金銭的・時間的余裕を初めてつくり出すことができた。StoryGateを含む多くの活動をこの期間に始める。'
    }
  ]
  if (editing) {
    return (
      <div className={openTab === index ? 'block' : 'hidden'} id={`link${index}`}>
        <CommunityList data={communityData} size={size} />
      </div>
    )
  }
  return (
    <div className={openTab === index ? 'block' : 'hidden'} id={`link${index}`}>
      <CommunityList data={communityData} size={size} />
    </div>
  )
}

export default CommunityTabContent
