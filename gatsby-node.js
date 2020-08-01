const path = require('path')

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: 'empty'
    }
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {}

const personTemplate = path.resolve(`src/templates/person.tsx`)
const communityTemplate = path.resolve(`src/templates/community.tsx`)

exports.createPages = async ({ graphql, actions }) => {
  const resultPerson = await graphql(`
    query {
      allPersonCaption {
        edges {
          node {
            id
            ownerUid
            name
            title
            introduction
          }
        }
      }
    }
  `)
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
  resultPerson.data.allPersonCaption.edges.forEach(edge => {
    const { node } = edge
    createPage({
      path: `/persons/${node.id}`,
      component: personTemplate,
      context: {
        pageId: node.id,
        ownerUid: node.ownerUid,
        name: node.name,
        title: node.title,
        introduction: node.introduction,
        location: node.location
      }
    })
  })

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
