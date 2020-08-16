import * as React from 'react'
import { connect } from 'react-redux'
import { useLocation } from '@reach/router'

import { State } from 'src/state'
import { PersonService } from 'src/services/PersonService'
import { ContentService } from 'src/services/ContentService'

import Caption from 'src/components/Person/Caption/index'
import { applyTheme } from 'src/themes/utils'
import { themes, DEFAULT_THEME } from 'src/themes'
import PersonTabLayout from 'src/components/Person/PersonTabLayout'
import PersonContentLayout from 'src/components/Person/PersonContentLayout'
import { Person } from 'src/services/interfaces/Person'
import { toggleEditingCaptionAction, toggleEditingPortfolioAction, toggleEditingStoryAction, clearEditingStateAction } from 'src/state/app'
import { Content } from 'src/services/interfaces/Content'
import { LoginUser } from 'src/services/interfaces/Auth'

interface PersonPageState {
  loginUser: LoginUser
  editingCaption: boolean
  editingPortfolio: boolean
  editingStory: boolean
  editingCommunity: boolean
}
interface PersonPageDispatch {
  toggleEditingCaption: () => void
  toggleEditingPortfolio: () => void
  toggleEditingStory: () => void
  clearEditingState: () => void
}
interface PersonPageLayoutOwnProps {
  path: string
  pageId: string
}

type PersonPageLayoutProps = PersonPageState & PersonPageDispatch & PersonPageLayoutOwnProps
const PersonPageLayout: React.FC<PersonPageLayoutProps> = ({
  pageId,
  loginUser,
  editingCaption,
  editingPortfolio,
  editingStory,
  editingCommunity,
  toggleEditingCaption,
  toggleEditingPortfolio,
  toggleEditingStory,
  clearEditingState
}) => {
  const [openTab, setOpenTab] = React.useState(1)
  const [person, setPerson] = React.useState<Person>(PersonService.emptyPerson())
  const [content, setContent] = React.useState<Content>(ContentService.emptyContent())
  const location = useLocation()
  const loadPerson = async () => {
    await PersonService.fetchById(pageId, loginUser.editablePage(location.pathname)).then(fetchedPerson => setPerson(fetchedPerson))
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
    if (!pageId) {
      return
    }
    clearEditingState()
    applyTheme(DEFAULT_THEME, themes)
    loadPerson()
    loadContent()
  }, [location])

  return (
    <>
      <Caption data={person} editingCaption={editingCaption} toggleEditingCaption={toggleEditingCaption} updateCaption={updateCaption} />
      <PersonTabLayout openTab={openTab} setOpenTab={setOpenTab} />
      <PersonContentLayout
        openTab={openTab}
        content={content}
        communities={person.communities}
        editingPortfolio={editingPortfolio}
        editingStory={editingStory}
        editingCommunity={editingCommunity}
        toggleEditingPortfolio={toggleEditingPortfolio}
        toggleEditingStory={toggleEditingStory}
        updateContent={updateContent}
      />
    </>
  )
}

export default connect<PersonPageState, PersonPageDispatch, PersonPageLayoutOwnProps, State>(
  (state, props) => ({
    loginUser: state.app.loginUser,
    editingCaption: state.app.editingCaption,
    editingPortfolio: state.app.editingPortfolio,
    editingStory: state.app.editingStory,
    editingCommunity: state.app.editingCommunity,
    path: props.path,
    pageId: props.pageId
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
    },
    clearEditingState: () => {
      dispatch(clearEditingStateAction())
    }
  })
)(PersonPageLayout)
