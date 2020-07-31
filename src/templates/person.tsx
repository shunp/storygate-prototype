import * as React from 'react'
import { connect } from 'react-redux'

import Header from 'src/components/Header/index'
import Caption from 'src/components/Caption/index'
import { applyTheme } from 'src/themes/utils'
import { themes, DEFAULT_THEME } from 'src/themes'
import PersonTabLayout from 'src/components/PersonTabLayout'
import PersonContentLayout from 'src/components/PersonContentLayout'
import Footer from 'src/components/Footer'

const PersonPage = ({ pageContext, editingCaption, dispatch }) => {
  console.log('dispatch', dispatch)
  console.log('edittingCaption', editingCaption)
  React.useEffect(() => {
    applyTheme(DEFAULT_THEME, themes)
  }, [])
  const [openTab, setOpenTab] = React.useState(1)

  return (
    <>
      <Header dispatch={dispatch} />
      <Caption editingCaption={editingCaption} dispatch={dispatch} />
      <PersonTabLayout openTab={openTab} setOpenTab={setOpenTab} />
      <PersonContentLayout openTab={openTab} />
      <Footer />
    </>
  )
}

export default connect(
  state => ({
    editingCaption: state.app.editingCaption
  }),
  null
)(PersonPage)
