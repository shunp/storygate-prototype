import * as React from 'react'
import { connect } from 'react-redux'
import Header from 'src/components/Header/index'
import Footer from 'src/components/Footer'
import Community from 'src/components/Community/index'
import PageRoot from 'src/components/Root/PageRoot'
import { State } from 'src/state'
import { AnyAction } from 'redux'

interface CommunityContext {
  pageId: string
  name: string
  introduction: string
  backgroundImg: string
}
interface CommunityState {
  editingCaption: boolean
}
interface CommunityListPageProps {
  pageContext: CommunityContext
  dispatch: React.Dispatch<React.SetStateAction<AnyAction>>
}
const CommunityListPage: React.FC<CommunityListPageProps> = ({ pageContext, dispatch }) => {
  return (
    <PageRoot>
      <Header dispatch={dispatch} />
      <Community
        name={pageContext.name}
        number={pageContext.number}
        introduction={pageContext.introduction}
        backgroundImg={pageContext.backgroundImg}
      />
      <Footer />
    </PageRoot>
  )
}

export default connect<CommunityState, null, {}, State>(
  state => ({
    editingCaption: state.app.editingCaption
  }),
  null
)(CommunityListPage)
