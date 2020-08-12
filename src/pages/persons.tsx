import * as React from 'react'
import { Router } from '@reach/router'

import Header from 'src/components/Header/index'
import Footer from 'src/components/Footer'
import PageRoot from 'src/components/Root/PageRoot'
import PersonPageLayout from 'src/components/Person/PersonPageLayout'

const PersonPage: React.FC = () => {
  return (
    <PageRoot>
      <Header />
      <Router>
        <PersonPageLayout path="persons/:pageId" pageId="" />
      </Router>
      <Footer />
    </PageRoot>
  )
}

export default PersonPage
