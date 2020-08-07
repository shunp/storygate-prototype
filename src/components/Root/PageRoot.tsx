import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import PageLoader from './PageLoader'

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string
    }
  }
}

const PageRoot = ({ children, loading = true }) => (
  <StaticQuery
    query={graphql`
      query IndexLayoutQuery {
        site {
          siteMetadata {
            title
            description
            lang
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: data.site.siteMetadata.keywords }
          ]}
        >
          <html lang="en" />
          <link rel="stylesheet" href="https://use.typekit.net/ajn0goi.css" />
        </Helmet>
        {loading && <PageLoader />}
        {/* <FooterMessage /> */}
        {children}
      </>
    )}
  />
)
export default PageRoot
