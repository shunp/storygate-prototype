import * as React from 'react'
import { Router } from '@reach/router'

import Header from 'src/components/Header/index'
import Footer from 'src/components/Footer'
import PageRoot from 'src/components/Root/PageRoot'
import CommunityPageLayout from 'src/components/Community/CommunityPageLayout'

const CommunityPage: React.FC = () => {
  return (
    <PageRoot>
      <Header />
      <Router>
        <CommunityPageLayout path="communities/:communityId" communityId="" />
      </Router>
      <Footer />
    </PageRoot>
  )
}

export default CommunityPage
