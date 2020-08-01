import * as React from 'react'
import { connect } from 'react-redux'
import Header from 'src/components/Header/index'
import Footer from 'src/components/Footer'
import Community from 'src/components/Community/index'

const CommunityListPage = ({ pageContext, dispatch }) => {
  console.log(pageContext)

  return (
    <>
      <Header dispatch={dispatch} />
      <Community
        name={pageContext.name}
        number={pageContext.number}
        introduction={pageContext.introduction}
        backgroundImg={pageContext.backgroundImg}
      />
      <Footer />
    </>
  )
}

export default connect(
  state => ({
    editingCaption: state.app.editingCaption
  }),
  null
)(CommunityListPage)
