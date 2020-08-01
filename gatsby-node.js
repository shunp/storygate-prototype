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
  const result = await graphql(`
    query {
      allPageCaption {
        edges {
          node {
            id
            ownerUid
            username
            title
            introduction
          }
        }
      }
    }
  `)

  const { createPage } = actions
  const communities = [
    {
      pageId: 'nishinosalon',
      name: '西野亮廣エンタメ研究所',
      number: 69000,
      introduction: 'このグループには西野亮廣エンタメ研究所のサロンメンバーのみが参加しています。',
      backgroundImg: ''
    }
  ]
  result.data.allPageCaption.edges.forEach(edge => {
    const { node } = edge
    createPage({
      path: `/${node.id}`,
      component: personTemplate,
      context: {
        pageId: node.id,
        ownerUid: node.ownerUid,
        username: node.username,
        title: node.title,
        introduction: node.introduction
      }
    })
  })

  communities.forEach(node => {
    createPage({
      path: `/${node.pageId}`,
      component: communityTemplate,
      context: {
        pageId: node.pageId,
        name: node.name,
        number: node.number,
        introduction: node.introduction,
        backgroundImg: node.backgroundImg
      }
    })
  })
}
