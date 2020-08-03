import * as React from 'react'
import { connect } from 'react-redux'
import Header from 'src/components/Header/index'
import Footer from 'src/components/Footer'
import Community from 'src/components/Community/index'

const members = [	
  {	
    id: '1',	
    name: '小池駿平',	
    title: 'Software Engineer',	
    pageId: 'owner',	
    pic:	
      'https://firebasestorage.googleapis.com/v0/b/story-gate.appspot.com/o/1sLl53hRd7Z0LDksz9iB%2Fprofile.jpg?alt=media&token=2e5eda6a-07c8-4fd4-bbc1-1a5a30f455f4'	
  },	
  {	
    id: '2',	
    name: '柳澤翔矢',	
    title: 'Software Engineer',	
    pageId: 'owner',	
    pic:	
      'https://firebasestorage.googleapis.com/v0/b/story-gate.appspot.com/o/443502378%2Fprofile.jpg?alt=media&token=bc87f7be-760d-4f9a-92e1-c6b2abc0eba4'	
  },	
  {	
    id: '3',	
    name: '松井大樹',	
    title: 'UI Designer',	
    pageId: 'owner',	
    pic:	
      'https://firebasestorage.googleapis.com/v0/b/story-gate.appspot.com/o/2092825305%2Fprofile.jpg?alt=media&token=6c27b6bf-b971-4eed-927f-6aa15552c74d'	
  },	
  {	
    id: '4',	
    name: 'Youichi Honda',	
    title: 'チャリドクター',	
    pageId: 'owner',	
    pic:	
      'https://firebasestorage.googleapis.com/v0/b/story-gate.appspot.com/o/Zps5pW9D0tifgako4WpM%2Fprofile.jpg?alt=media&token=85724c7e-771f-4519-aedb-90afefde43d4'	
  },	
  {	
    id: '1',	
    name: '小池駿平',	
    title: 'Software Engineer',	
    pageId: 'owner',	
    pic:	
      'https://firebasestorage.googleapis.com/v0/b/story-gate.appspot.com/o/1sLl53hRd7Z0LDksz9iB%2Fprofile.jpg?alt=media&token=2e5eda6a-07c8-4fd4-bbc1-1a5a30f455f4'	
  },	
  {	
    id: '2',	
    name: '柳澤翔矢',	
    title: 'Software Engineer',	
    pageId: 'owner',	
    pic:	
      'https://firebasestorage.googleapis.com/v0/b/story-gate.appspot.com/o/443502378%2Fprofile.jpg?alt=media&token=bc87f7be-760d-4f9a-92e1-c6b2abc0eba4'	
  },	
  {	
    id: '3',	
    name: '松井大樹',	
    title: 'UI Designer',	
    pageId: 'owner',	
    pic:	
      'https://firebasestorage.googleapis.com/v0/b/story-gate.appspot.com/o/2092825305%2Fprofile.jpg?alt=media&token=6c27b6bf-b971-4eed-927f-6aa15552c74d'	
  },	
  {	
    id: '4',	
    name: 'Youichi Honda',	
    title: 'チャリドクター',	
    pageId: 'owner',	
    pic:	
      'https://firebasestorage.googleapis.com/v0/b/story-gate.appspot.com/o/Zps5pW9D0tifgako4WpM%2Fprofile.jpg?alt=media&token=85724c7e-771f-4519-aedb-90afefde43d4'	
  },	
  {	
    id: '1',	
    name: '小池駿平',	
    title: 'Software Engineer',	
    pageId: 'owner',	
    pic:	
      'https://firebasestorage.googleapis.com/v0/b/story-gate.appspot.com/o/1sLl53hRd7Z0LDksz9iB%2Fprofile.jpg?alt=media&token=2e5eda6a-07c8-4fd4-bbc1-1a5a30f455f4'	
  },	
  {	
    id: '2',	
    name: '柳澤翔矢',	
    title: 'Software Engineer',	
    pageId: 'owner',	
    pic:	
      'https://firebasestorage.googleapis.com/v0/b/story-gate.appspot.com/o/443502378%2Fprofile.jpg?alt=media&token=bc87f7be-760d-4f9a-92e1-c6b2abc0eba4'	
  },	
  {	
    id: '3',	
    name: '松井大樹',	
    title: 'UI Designer',	
    pageId: 'owner',	
    pic:	
      'https://firebasestorage.googleapis.com/v0/b/story-gate.appspot.com/o/2092825305%2Fprofile.jpg?alt=media&token=6c27b6bf-b971-4eed-927f-6aa15552c74d'	
  },	
  {	
    id: '4',	
    name: 'Youichi Honda',	
    title: 'チャリドクター',	
    pageId: 'owner',	
    pic:	
      'https://firebasestorage.googleapis.com/v0/b/story-gate.appspot.com/o/Zps5pW9D0tifgako4WpM%2Fprofile.jpg?alt=media&token=85724c7e-771f-4519-aedb-90afefde43d4'	
  }	
]

const CommunityListPage = ({ dispatch }) => {
  return (
    <>
      <Header dispatch={dispatch} />
      <Community members={members}/>
      <Footer />
    </>
  )
}

export default connect(
  state => ({
    editingCaption: state.app.editingCaption
  }),
  null
)(CommunityListPage)
