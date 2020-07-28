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

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = [
    {
      pageId: 'owner',
      ownerUid: '1',
      username: '小池 駿平',
      title: 'Software Engineer',
      introduction:
        'BlockchainやWebGLなど / AWS Best Architecture 2018 / 書籍「Solidityプログラミング」 / アートブロックチェーンネットワークや仮想世界つくってます'
    }
  ]
  // result.data.allPageCaption.edges.forEach(edge => {
  // const { node } = edge
  result.forEach(node => {
    createPage({
      path: `/${node.pageId}`,
      component: personTemplate,
      context: {
        pageId: node.pageId,
        ownerUid: node.ownerUid,
        username: node.username,
        title: node.title,
        introduction: node.introduction
      }
    })
  })
}
