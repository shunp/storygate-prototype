import * as React from 'react'
import { Router } from '@reach/router'

import Header from 'src/components/Header/index'
import Footer from 'src/components/Footer'
import PageRoot from 'src/components/Root/PageRoot'
import GroupPageLayout from 'src/components/Group/GroupPageLayout'

const GroupPage: React.FC = () => {
  return (
    <PageRoot>
      <Header />
      <Router>
        <GroupPageLayout path="groups/:groupId" groupId="" />
      </Router>
      <Footer />
    </PageRoot>
  )
}

export default GroupPage
