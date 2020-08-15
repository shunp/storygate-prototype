import * as React from 'react'
import { connect } from 'react-redux'
import { css } from '@emotion/core'
import 'src/styles/top-menu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faMapMarkerAlt, faSearch, faEdit } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'gatsby'
import {
  toggleEditingCaptionAction,
  toggleEditingStoryAction,
  toggleEditingPortfolioAction,
  toggleEditingCommunityAction
} from 'src/state/app'
import { Montserrat } from '../SGText'

const MenuLinkWrapper = ({ title, to }) => {
  return (
    <div className="m-2">
      <Link to={`/${to}`}>
        <Montserrat className="text-white font-bold text-2xl">{title}</Montserrat>
      </Link>
    </div>
  )
}

const MenuButtonWrapper = ({ title, onClick }) => {
  return (
    <div className="m-2">
      <button type="button" className="focus:outline-none" onClick={onClick}>
        <Montserrat className="text-white font-bold text-2xl">{title}</Montserrat>
      </button>
    </div>
  )
}

// const MapMenuButton = () => {
//   return (
//     <>
//       <MenuLinkWrapper title="フレンドマップ" to="map" icon={<FontAwesomeIcon icon={faMapMarkerAlt} size="sm" className="mr-2" />} />
//       <div className="text-white text-xs">
//         グループ内の友達を地図上から検索できます。近くにある店舗や待ち合わせ場所を決める際に便利です。
//       </div>
//     </>
//   )
// }

// const SearchMenuButton = () => {
//   return (
//     <>
//       <MenuLinkWrapper title="キーワード検索" to="list" icon={<FontAwesomeIcon icon={faSearch} size="sm" className="mr-2" />} />
//       <div className="text-white text-xs">キーワードで友達を検索できます。仕事の依頼や共通の趣味を持つ人を見つけることができます。</div>
//     </>
//   )
// }

// const EditCaptionButton = ({ editCaption }) => {
//   const startEditingCaption = () => {
//     editCaption()
//     if (document.getElementById('top-menu-toggle')) {
//       document.getElementById('top-menu-toggle').checked = false
//     }
//   }
//   return (
//     <>
//       <MenuButtonWrapper
//         title="プロフィール編集"
//         icon={<FontAwesomeIcon icon={faEdit} size="sm" className="mr-2" />}
//         onClick={startEditingCaption}
//       />
//       <div className="text-white text-xs">
//         自分のプロフィールを変更できます。検索でヒットしてもらいやすいようなわかりやすいプロフィールを心がけましょう。
//       </div>
//     </>
//   )
// }

// const EditPortfolioButton = ({ editPortfolio }) => {
//   const startEditingPortfolio = () => {
//     editPortfolio()
//     // TODO: open portfolio tab
//     // setOpenTab(1)
//     if (document.getElementById('top-menu-toggle')) {
//       document.getElementById('top-menu-toggle').checked = false
//     }
//   }
//   return (
//     <>
//       <MenuButtonWrapper
//         title="ポートフォリオ編集"
//         icon={<FontAwesomeIcon icon={faEdit} size="sm" className="mr-2" />}
//         onClick={startEditingPortfolio}
//       />
//       <div className="text-white text-xs">
//         自分のポートフォリオを修正できます。最近の活動内容や自身の強みを記載してGiveできる項目をまとめてみましょう。
//       </div>
//     </>
//   )
// }

// const EditStoryButton = ({ editStory }) => {
//   const startEditingStory = () => {
//     editStory()
//     if (document.getElementById('top-menu-toggle')) {
//       document.getElementById('top-menu-toggle').checked = false
//     }
//   }
//   return (
//     <>
//       <MenuButtonWrapper
//         title="ストーリー編集"
//         icon={<FontAwesomeIcon icon={faEdit} size="sm" className="mr-2" />}
//         onClick={startEditingStory}
//       />
//       <div className="text-white text-xs">
//         自分のストーリーを修正できます。苦い経験や達成した出来事を過去から順に綴ったあなたの物語は、きっと共感者や応援してくれる仲間を呼ぶことに繋がるでしょう。
//       </div>
//     </>
//   )
// }

// const EditCommunityButton = ({ editCommunity }) => {
//   const startEditingCommunity = () => {
//     editCommunity()
//     if (document.getElementById('top-menu-toggle')) {
//       document.getElementById('top-menu-toggle').checked = false
//     }
//   }
//   return (
//     <>
//       <MenuButtonWrapper
//         title="コミュニティ編集"
//         icon={<FontAwesomeIcon icon={faEdit} size="sm" className="mr-2" />}
//         onClick={startEditingCommunity}
//       />
//       <div className="text-white text-xs">自分のコミュニティを修正できます。所属先を増やして新たな仲間を見つけましょう。</div>
//     </>
//   )
// }

const TopMenuBase = ({ logout, editCaption, editStory, editPortfolio, editCommunity }) => {
  return (
    <div className="menu-wrap">
      <input id="top-menu-toggle" type="checkbox" className="toggler" />
      <div className="hamburger">
        <div />
      </div>
      <div className="menu">
        <div className="flex-col">
          <MenuLinkWrapper title="Map" to="map" />
          <div className="m-2">
            <button type="button" className="bg-transparent focus:outline-none" id="options-menu" aria-haspopup="true" aria-expanded="true">
              <Montserrat className="text-white font-bold text-2xl">Edit</Montserrat>
            </button>
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              <Montserrat className="text-white font-bold text-2xl">Portfolio</Montserrat>
            </div>
          </div>

          <div className="mt-20" />
          <MenuLinkWrapper title="About" to="about" />
          <MenuLinkWrapper title="Company" to="company" />
          <MenuLinkWrapper title="FAQ" to="faq" />

          {/* <MapMenuButton />
          <SearchMenuButton />
          <EditCaptionButton editCaption={editCaption} />
          <EditPortfolioButton editPortfolio={editPortfolio} />
          <EditStoryButton editStory={editStory} />
          <EditCommunityButton editCommunity={editCommunity} /> */}
          <div className="text-sm text-gray-300 mt-10 p-2" onClick={logout} onKeyPress={logout} role="button" tabIndex={0}>
            <FontAwesomeIcon icon={faSignOutAlt} size="sm" className="mr-1" />
            Logout
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect(
  state => ({}),
  dispatch => ({
    editCaption: () => dispatch(toggleEditingCaptionAction()),
    editStory: () => dispatch(toggleEditingStoryAction()),
    editPortfolio: () => dispatch(toggleEditingPortfolioAction()),
    editCommunity: () => dispatch(toggleEditingCommunityAction())
  })
)(TopMenuBase)
