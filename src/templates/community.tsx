import * as React from 'react'
import { connect } from 'react-redux'
import Header from 'src/components/Header/index'
import Footer from 'src/components/Footer'
import PageRoot from 'src/components/Root/PageRoot'
import { State } from 'src/state'
import { AnyAction } from 'redux'
import { Community } from 'src/services/interfaces/Community'
import { CommunityService } from 'src/services/CommunityService'
import CommunityPage from 'src/components/Community'

interface CommunityContext {
  pageId: string
  name: string
  introduction: string
}
interface CommunityState {
  editingCaption: boolean
}
interface CommunityListPageProps {
  pageContext: CommunityContext
  dispatch: React.Dispatch<React.SetStateAction<AnyAction>>
}
const CommunityListPage: React.FC<CommunityListPageProps> = ({ pageContext, dispatch }) => {
  const { pageId, name, introduction } = pageContext
  const [community, setCommunity] = React.useState<Community>(CommunityService.fromContext(name, introduction))
  React.useEffect(() => {
    CommunityService.fetchById(pageId).then(fetched => setCommunity(fetched))
  }, [])

  return (
    <PageRoot>
      <Header dispatch={dispatch} />
      <CommunityPage
        name={community.name}
        number={community.numOfMembers}
        introduction={community.introduction}
        backgroundImg={community.backgroundImg}
        members={community.members}
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
