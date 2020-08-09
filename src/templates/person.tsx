import * as React from 'react'
import { connect } from 'react-redux'

import { State } from 'src/state'
import { PersonService } from 'src/services/PersonService'
import { ContentService } from 'src/services/ContentService'

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
import { Content } from 'src/services/interfaces/Content'

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
  const { pageId, ownerUid, name, title, introduction, location } = pageContext
  const [openTab, setOpenTab] = React.useState(1)
  const [person, setPerson] = React.useState<Person>(PersonService.fromContext(pageId, ownerUid, name, title, introduction, location))
  const [content, setContent] = React.useState<Content>(ContentService.emptyContent())
  const loadPerson = async () => {
    await PersonService.fetchById(pageId).then(fetchedPerson => setPerson(fetchedPerson))
  }
  const loadContent = async () => {
    await ContentService.fetchPersonContentById(pageId).then(fetchedContent => setContent(fetchedContent))
  }
  const updateCaption = async (updatedPerson: Person, newImg?: Blob) => {
    await PersonService.updateCaption(updatedPerson, newImg)
    await loadPerson()
  }
  const updateContent = async (updatedContent: Content) => {
    await ContentService.updatePersonContent(pageId, updatedContent)
    await loadContent()
  }
  React.useEffect(() => {
    applyTheme(DEFAULT_THEME, themes)
    loadPerson()
    loadContent()
  }, [])

  return (
    <PageRoot>
      <Header />
      <Caption data={person} editingCaption={editingCaption} toggleEditingCaption={toggleEditingCaption} updateCaption={updateCaption} />
      <PersonTabLayout openTab={openTab} setOpenTab={setOpenTab} />
      <PersonContentLayout
        openTab={openTab}
        content={content}
        editingPortfolio={editingPortfolio}
        editingStory={editingStory}
        editingCommunity={editingCommunity}
        toggleEditingPortfolio={toggleEditingPortfolio}
        toggleEditingStory={toggleEditingStory}
        updateContent={updateContent}
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
