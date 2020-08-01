import * as React from 'react'
import { connect } from 'react-redux'
import Header from 'src/components/Header/index'
import Footer from 'src/components/Footer'
import Community from 'src/components/Community/index'

const CommunityListPage = ({ dispatch }) => {
  return (
    <>
      <Header dispatch={dispatch} />
      <Community />
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
