const path = require('path')

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: 'empty'
    }
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {}

const communityTemplate = path.resolve(`src/templates/community.tsx`)

exports.createPages = async ({ graphql, actions }) => {
  const resultCommunity = await graphql(`
    query {
      allCommunityCaption {
        edges {
          node {
            id
            name
            introduction
          }
        }
      }
    }
  `)

  const { createPage } = actions

  resultCommunity.data.allCommunityCaption.edges.forEach(edge => {
    const { node } = edge
    const { id, name, introduction } = node
    createPage({
      path: `/communities/${node.id}`,
      component: communityTemplate,
      context: {
        pageId: id,
        name,
        introduction
      }
    })
  })
}
