import * as React from 'react'
import { connect } from 'react-redux'

import { themes, DEFAULT_THEME } from 'src/themes'
import Header from 'src/components/Header/index'
import Caption from 'src/components/Caption/index'
import PersonTabLayout from 'src/components/PersonTabLayout'
import PersonContentLayout from 'src/components/PersonContentLayout'
import Footer from 'src/components/Footer'
import { applyTheme } from '../themes/utils'

const IndexPage = ({ editingCaption, dispatch }) => {
  React.useEffect(() => {
    applyTheme(DEFAULT_THEME, themes)
  }, [])
  const [openTab, setOpenTab] = React.useState(1)

  return (
    <div>
      <Header dispatch={dispatch} />
      <Caption editingCaption={editingCaption} dispatch={dispatch} />
      <PersonTabLayout openTab={openTab} setOpenTab={setOpenTab} />
      <PersonContentLayout openTab={openTab} />
      <Footer />
    </div>
  )
}

export default connect(
  state => ({
    editingCaption: state.app.editingCaption
  }),
  null
)(IndexPage)
