import * as React from 'react'
import Header from 'src/components/Header/index'

const PersonPage = ({ pageContext }) => {
  return (
    <>
      <Header />
      <div>{pageContext.pageId}</div>
    </>
  )
}
export default PersonPage
