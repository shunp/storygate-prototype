import * as React from 'react'
import { AnyAction } from 'redux'
import { connect } from 'react-redux'

import { PersonService } from 'src/services/PersonService'

import { themes, DEFAULT_THEME } from 'src/themes'
import Header from 'src/components/Header/index'
import Caption from 'src/components/Person/Caption/index'
import PersonTabLayout from 'src/components/Person/PersonTabLayout'
import PersonContentLayout from 'src/components/Person/PersonContentLayout'
import Footer from 'src/components/Footer'
import { Person } from 'src/services/interfaces/Person'
import { State } from 'src/state'
import { applyTheme } from '../themes/utils'

interface PagesState {
  editingCaption: boolean
  editingPortfolio: boolean
  editingStory: boolean
}
interface PagesProps {
  editingCaption: boolean
  editingPortfolio: boolean
  editingStory: boolean
  dispatch: React.Dispatch<React.SetStateAction<AnyAction>>
}
const IndexPage: React.FC<PagesProps> = ({ editingCaption, editingPortfolio, editingStory, dispatch }) => {
  const [openTab, setOpenTab] = React.useState(1)
  const [person, setPerson] = React.useState<Person>(PersonService.emptyPerson())
  console.log('1caption', editingCaption)
  console.log('1editingPortfolio', editingPortfolio)
  console.log('1editingStory', editingStory)

  React.useEffect(() => {
    applyTheme(DEFAULT_THEME, themes)
    PersonService.fetchById('owner').then(fetchedPerson => setPerson(fetchedPerson))
  }, [])

  return (
    <div>
      <Header />
      <Caption data={person} editingCaption={editingCaption} dispatch={dispatch} />
      <PersonTabLayout openTab={openTab} setOpenTab={setOpenTab} />
      <PersonContentLayout openTab={openTab} editingPortfolio={editingPortfolio} editingStory={editingStory} dispatch={dispatch} />
      <Footer />
    </div>
  )
}

export default connect<PagesState, null, {}, State>(
  state => ({
    editingCaption: state.app.editingCaption,
    editingPortfolio: state.app.editingPortfolio,
    editingStory: state.app.editingStory
  }),
  null
)(IndexPage)
