import * as React from 'react'
import { connect } from 'react-redux'
import Header from 'src/components/Header/index'
import Footer from 'src/components/Footer'
import Community from 'src/components/Community/index'
import PageRoot from 'src/components/Root/PageRoot'

const CommunityListPage = ({ pageContext, dispatch }) => {
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

export default connect(
  state => ({
    editingCaption: state.app.editingCaption
  }),
  null
)(CommunityListPage)
