import * as React from 'react'
import { AnyAction } from 'redux'
import { connect } from 'react-redux'

import { PersonServiceImpl } from 'src/services/PersonService'

import { themes, DEFAULT_THEME } from 'src/themes'
import Header from 'src/components/Header/index'
import Caption from 'src/components/Caption/index'
import PersonTabLayout from 'src/components/PersonTabLayout'
import PersonContentLayout from 'src/components/PersonContentLayout'
import Footer from 'src/components/Footer'
import { applyTheme } from '../themes/utils'

interface PagesProps {
  editingCaption: boolean
  dispatch: React.Dispatch<React.SetStateAction<AnyAction>>
}
const IndexPage: React.FC<PagesProps> = ({ editingCaption, dispatch }) => {
  React.useEffect(() => {
    applyTheme(DEFAULT_THEME, themes)
  }, [])
  const [openTab, setOpenTab] = React.useState(1)

  return (
    <div>
      <Header dispatch={dispatch} />
      <Caption data={PersonServiceImpl.fetchPersonById()} editingCaption={editingCaption} dispatch={dispatch} />
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
