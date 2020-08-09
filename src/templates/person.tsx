import * as React from 'react'
import { AnyAction } from 'redux'
import { connect } from 'react-redux'

import { State } from 'src/state'
import { PersonService } from 'src/services/PersonService'

import Header from 'src/components/Header/index'
import Caption from 'src/components/Person/Caption/index'
import { applyTheme } from 'src/themes/utils'
import { themes, DEFAULT_THEME } from 'src/themes'
import PersonTabLayout from 'src/components/Person/PersonTabLayout'
import PersonContentLayout from 'src/components/Person/PersonContentLayout'
import Footer from 'src/components/Footer'
import PageRoot from 'src/components/Root/PageRoot'
import { Person } from 'src/services/interfaces/Person'
import { toggleEditingCaptionAction, toggleEditingPortfolioAction, toggleEditingStoryAction } from 'src/state/app'

interface PageContext {
  pageId: string
  ownerUid: string
  name: string
  title: string
  introduction: string
  location: string
}
interface PersonPageState {
  editingCaption: boolean
  editingPortfolio: boolean
  editingStory: boolean
  editingCommunity: boolean
}
interface PersonPageDispatch {
  toggleEditingCaption: () => void
  toggleEditingPortfolio: () => void
  toggleEditingStory: () => void
}
interface PersonPageProps extends PersonPageState, PersonPageDispatch {
  pageContext: PageContext
}
const PersonPage: React.FC<PersonPageProps> = ({
  pageContext,
  editingCaption,
  editingPortfolio,
  editingStory,
  editingCommunity,
  toggleEditingCaption,
  toggleEditingPortfolio,
  toggleEditingStory
}) => {
  const { pageId, name, title, introduction, location } = pageContext
  const [openTab, setOpenTab] = React.useState(1)
  const [person, setPerson] = React.useState<Person>(PersonService.fromContext(pageId, name, title, introduction, location))
  const loadPerson = async () => {
    await PersonService.fetchById(pageId).then(fetchedPerson => setPerson(fetchedPerson))
  }
  const updateCaption = async (updatedPerson: Person) => {
    await PersonService.updateCaption(updatedPerson)
    await loadPerson()
  }
  React.useEffect(() => {
    applyTheme(DEFAULT_THEME, themes)
    loadPerson()
  }, [])

  return (
    <PageRoot>
      <Header />
      <Caption data={person} editingCaption={editingCaption} toggleEditingCaption={toggleEditingCaption} updateCaption={updateCaption} />
      <PersonTabLayout openTab={openTab} setOpenTab={setOpenTab} />
      <PersonContentLayout
        openTab={openTab}
        editingPortfolio={editingPortfolio}
        editingStory={editingStory}
        editingCommunity={editingCommunity}
        toggleEditingPortfolio={toggleEditingPortfolio}
        toggleEditingStory={toggleEditingStory}
      />
      <Footer />
    </PageRoot>
  )
}

export default connect<PersonPageState, PersonPageDispatch, {}, State>(
  state => ({
    editingCaption: state.app.editingCaption,
    editingPortfolio: state.app.editingPortfolio,
    editingStory: state.app.editingStory,
    editingCommunity: state.app.editingCommunity
  }),
  dispatch => ({
    toggleEditingCaption: () => {
      dispatch(toggleEditingCaptionAction())
    },
    toggleEditingPortfolio: () => {
      dispatch(toggleEditingPortfolioAction())
    },
    toggleEditingStory: () => {
      dispatch(toggleEditingStoryAction())
    }
  })
)(PersonPage)
