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
import { Person } from 'src/services/interfaces/Person'
import { State } from 'src/state'
import { applyTheme } from '../themes/utils'

interface PagesState {
  editingCaption: boolean
}
interface PagesProps {
  editingCaption: boolean
  dispatch: React.Dispatch<React.SetStateAction<AnyAction>>
}
const IndexPage: React.FC<PagesProps> = ({ editingCaption, dispatch }) => {
  const [openTab, setOpenTab] = React.useState(1)
  const [person, setPerson] = React.useState<Person>(PersonServiceImpl.emptyPerson())
  React.useEffect(() => {
    applyTheme(DEFAULT_THEME, themes)
    PersonServiceImpl.fetchPersonById('owner').then(fetchedPerson => setPerson(fetchedPerson))
  }, [])

  return (
    <div>
      <Header dispatch={dispatch} />
      <Caption data={person} editingCaption={editingCaption} dispatch={dispatch} />
      <PersonTabLayout openTab={openTab} setOpenTab={setOpenTab} />
      <PersonContentLayout openTab={openTab} editingStory={false} dispatch={dispatch} />
      <Footer />
    </div>
  )
}

export default connect<PagesState, null, {}, State>(
  state => ({
    editingCaption: state.app.editingCaption
  }),
  null
)(IndexPage)
