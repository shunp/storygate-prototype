import firebase from 'gatsby-plugin-firebase'
import { Content } from 'src/services/interfaces/Content'
import { Story } from 'src/services/interfaces/Story'
import { Portfolio } from 'src/services/interfaces/Portfolio'
import { Person } from 'src/services/interfaces/Person'
import { equalsDay } from 'src/utils/date'
import { toSequenceString } from 'src/utils/sequnce'

import { firestore } from './firebase'

export interface PersonCaption {
  pageId: string
  ownerUid: string
  name: string
  title: string
  introduction: string
  location: string
  img: string
}
export interface ContentData {
  portfolio: Portfolio
  story: Story
  openCommunities: string[]
}
export interface CommunityCaptionData {
  pageId: string
  name: string
  introduction: string
  backgroundImg: string
  groups: string[]
  numOfMembers: number
}
export interface CommunityMembersData {
  communityId: string
  members: string[]
}
export interface GroupCaptionData {
  pageId: string
  name: string
  introduction: string
  backgroundImg: string
  community?: string
  members: string[]
}
export interface AnnouncementData {
  message: string
  createdAt: Date
  authorName: string
}
export interface Invitation {
  id: string
  hostCommunity: string
}
export interface LoginCount {
  count: number
  lastUpdate: firebase.firestore.Timestamp
}
interface ReadMarkerData {
  [key: string]: string
}
export interface ChatRoomData {
  id: string
  readMarker: ReadMarkerData
  latestMessage?: MessageData
}
export interface MessageData {
  sequenceId: string
  uid: string
  message: string
  timestamp: firebase.firestore.Timestamp
}
interface MyChatRoomsData {
  roomIds: string[]
}
const queryByDocIds = async <T>(
  ids: string[],
  path: string,
  build: (doc: firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>) => T
): Promise<T[]> => {
  if (!ids.length) {
    return []
  }
  const collection = await firestore
    .collection(`v2/proto/${path}`)
    .where(firebase.firestore.FieldPath.documentId(), 'in', ids)
    .get()
  return collection.docs.map(doc => build(doc))
}
const LOGIN_COUNTER = () => ({
  count: firebase.firestore.FieldValue.increment(1),
  lastUpdate: firebase.firestore.FieldValue.serverTimestamp()
})

const toPersonCaptionData = (doc: firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>): PersonCaption => {
  const personCaption = doc.data() || {}
  return {
    pageId: doc.id || '',
    ownerUid: personCaption.ownerUid || '',
    name: personCaption.name || '',
    title: personCaption.title || '',
    introduction: personCaption.introduction || '',
    location: personCaption.location || '',
    img: personCaption.img || ''
  }
}
export const fetchPersonCaption = async (pageId: string): Promise<PersonCaption> => {
  const doc = await firestore
    .collection('v2/proto/personCaptions')
    .doc(pageId)
    .get()
  return toPersonCaptionData(doc)
}

const toGroupCaptionData = (doc: firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>): GroupCaptionData => {
  const groupCaption = doc.data() || {}
  return {
    pageId: doc.id || '',
    name: groupCaption.name || '',
    introduction: groupCaption.introduction || '',
    backgroundImg: groupCaption.backgroundImg || '',
    members: groupCaption.members || [],
    community: groupCaption.community || ''
  }
}
export const fetchGroupCaption = async (pageId: string): Promise<GroupCaptionData> => {
  const doc = await firestore
    .collection('v2/proto/groupCaptions')
    .doc(pageId)
    .get()
  return toGroupCaptionData(doc)
}
export const fetchLatestGroupAnnoucement = async (groupId: string): Promise<AnnouncementData | undefined> => {
  const collection = await firestore
    .collection(`v2/proto/groupCaptions/${groupId}/announcements`)
    .orderBy('createdAt', 'desc')
    .limit(1)
    .get()
  if (!collection.docs.length) {
    return undefined
  }
  const data = collection.docs[0]?.data() || {}
  return {
    message: data.message || '',
    authorName: data.authorName || '',
    createdAt: data.createdAt.toDate()
  }
}
export const fetchFromMemberRef = async (members: string[]): Promise<PersonCaption[]> => {
  return queryByDocIds(members, 'personCaptions', toPersonCaptionData)
}
export const fetchFromGroupRef = (groups: string[]): Promise<GroupCaptionData[]> => {
  return queryByDocIds(groups, 'groupCaptions', toGroupCaptionData)
}
const toCommunityCaptionData = (doc: firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>): CommunityCaptionData => {
  const communityCaption = doc.data() || {}
  return {
    pageId: doc.id || '',
    name: communityCaption.name || '',
    introduction: communityCaption.introduction || '',
    backgroundImg: communityCaption.backgroundImg || '',
    groups: communityCaption.groups || [],
    numOfMembers: communityCaption.numOfMembers || 0
  }
}
export const fetchCommunityCaption = async (pageId: string): Promise<CommunityCaptionData> => {
  const docRef = firestore.collection('v2/proto/communityCaptions').doc(pageId)
  const doc = await docRef.get()
  const communityCaption = doc.data() || {}
  return {
    pageId: doc.id || '',
    name: communityCaption.name || '',
    introduction: communityCaption.introduction || '',
    backgroundImg: communityCaption.backgroundImg || '',
    groups: communityCaption.groups || [],
    numOfMembers: communityCaption.numOfMembers || 0
  }
}
export const fetchCommunityMembers = async (communityId: string): Promise<string[]> => {
  const docRef = firestore.collection('v2/proto/communityMembers').doc(communityId)
  const doc = await docRef.get()
  const communityMembers = doc.data() || {}
  return communityMembers.members || []
}
export const queryCommunityCaptionByIds = async (communityIds: string[] = []): Promise<CommunityCaptionData[]> => {
  return queryByDocIds(communityIds, 'communityCaptions', toCommunityCaptionData)
}
export const queryCommunityCaptionByPerson = async (personId: string): Promise<CommunityCaptionData[]> => {
  const collection = await firestore
    .collection('v2/proto/communityMembers')
    .where('members', 'array-contains', personId)
    .get()
  return queryCommunityCaptionByIds(collection.docs.map(doc => doc.id))
}
export const createNewGroupInCommunity = async (communityId: string, ownerUid: string, name: string, introduction: string) => {
  const groupRef = await firestore.collection('v2/proto/groupCaptions').add({
    community: communityId,
    ownerUid,
    name,
    introduction,
    members: [ownerUid]
  })
  const docRef = firestore.collection('v2/proto/communityCaptions').doc(communityId)
  await docRef.update({
    groups: firebase.firestore.FieldValue.arrayUnion(groupRef.id)
  })
  return groupRef.id
}
export const updateGroup = async (id: string, name: string, introduction: string, backgroundImg: string) => {
  await firestore
    .collection('v2/proto/groupCaptions')
    .doc(id)
    .update({
      name,
      introduction,
      backgroundImg
    })
    .catch(err => console.error(err))
}
export const fetchInvitation = async (invitationId: string): Promise<Invitation> => {
  const docRef = firestore.collection('v2/proto/invitations').doc(invitationId)
  const doc = await docRef.get()
  const invitation = doc.data()
  if (!invitation) {
    return Promise.reject(new Error('Invitaion not found.'))
  }
  return {
    id: doc.id,
    hostCommunity: invitation.hostCommunity
  }
}

export const addCommunityMember = async (communityId: string, uid: string) => {
  const docRef = firestore.collection('v2/proto/communityCaptions').doc(communityId)
  const doc = await docRef.get()
  const communityCaption = doc.data() || {}
  communityCaption.members.push(uid)
  await docRef.update(communityCaption).catch(err => console.error(err))
}
export const addGroupMember = async (groupId: string, uid: string) => {
  await firestore
    .collection('v2/proto/groupCaptions')
    .doc(groupId)
    .update({
      members: firebase.firestore.FieldValue.arrayUnion(uid)
    })
}

export const addPersonPage = async (pageId: string, ownerUid: string, name: string, img: string) => {
  await firestore
    .collection('v2/proto/personCaptions')
    .doc(pageId)
    .set(
      {
        ownerUid,
        name,
        img
      },
      { merge: true }
    )
    .catch(err => console.error(err))
}

export const updatePerson = async (person: Person) => {
  const docRef = firestore.collection('v2/proto/personCaptions').doc(person.pageId)
  const update = { ...person }
  delete update.pageId
  delete update.lastLogin
  await docRef.update(update).catch(err => console.error(err))
}

export const fetchPersonContent = async (pageId: string): Promise<ContentData> => {
  const docRef = firestore.collection('v2/proto/personContents').doc(pageId)
  const doc = await docRef.get()
  const personContent = doc.data() || {}
  return {
    portfolio: personContent.portfolio || { contents: [] },
    story: personContent.story || { contents: [] },
    openCommunities: personContent.openCommunities || []
  }
}
export const updatePersonContent = async (pageId: string, personContent: Content) => {
  const docRef = firestore.collection('v2/proto/personContents').doc(pageId)
  const update = { ...personContent }
  delete update.communities
  await docRef.set(update, { merge: true }).catch(err => console.error(err))
}

export const fetchPoints = async (uid: string) => {
  const docRef = firestore.collection('v2/proto/metrics/persons/loginCount').doc(uid)
  const doc = await docRef.get()
  const loginCount = doc.data() as LoginCount | undefined
  return loginCount?.count || 0
}
export const updateLoginCount = async (uid: string) => {
  const docRef = firestore.collection('v2/proto/metrics/persons/loginCount').doc(uid)
  const doc = await docRef.get()
  const loginCount = doc.data() as LoginCount | undefined
  if (!loginCount) {
    await docRef.set(LOGIN_COUNTER())
    return
  }
  if (equalsDay(loginCount.lastUpdate.toDate())) {
    return
  }
  await docRef.update(LOGIN_COUNTER())
}

export const fetchChatRooms = async (uid: string): Promise<ChatRoomData[]> => {
  const myChatRoomsDoc = await firestore
    .collection('v2/proto/myChatRooms')
    .doc(uid)
    .get()
  const myChatRooms = myChatRoomsDoc.data() as MyChatRoomsData
  if (!myChatRooms?.roomIds?.length) {
    return []
  }
  const docsData = await firestore
    .collection('v2/proto/chatRooms')
    .where(firebase.firestore.FieldPath.documentId(), 'in', myChatRooms.roomIds)
    .get()
  return docsData.docs.map(doc => {
    const chatRoom = doc.data()
    return {
      id: doc.id,
      members: chatRoom.members,
      readMarker: chatRoom.readMarker,
      latestMessage: chatRoom.latestMessage
    }
  })
}
export const fetchChatRoomById = async (id: string): Promise<ChatRoomData> => {
  const doc = await firestore
    .collection('v2/proto/chatRooms')
    .doc(id)
    .get()
  const chatRoom = doc.data() || {}
  return {
    id: doc.id || '',
    readMarker: chatRoom.readMarker || {},
    latestMessage: chatRoom.latestMessage
  }
}
export const fetchChatMessages = async (id: string, sequenceFrom: number, limit: number, offset: number): Promise<MessageData[]> => {
  const docsData = await firestore
    .collection(`v2/proto/chatRooms/${id}/messages`)
    .orderBy('sequenceId')
    .startAt(toSequenceString(sequenceFrom - offset || 0))
    // .limit(limit)
    .get()
  return docsData.docs.map(doc => {
    const message = doc.data()
    return {
      sequenceId: doc.id,
      uid: message.uid,
      message: message.message,
      timestamp: message.timestamp
    }
  })
}

export const sendMessage = async (uid: string, roomId: string, message: string): Promise<void> => {
  const roomDocRef = firestore.collection('v2/proto/chatRooms').doc(roomId)
  return firestore.runTransaction(async tx => {
    const roomDoc = await tx.get(roomDocRef)
    if (!roomDoc.exists) {
      tx.set(roomDocRef, {
        latestMessage: {}
      })
    }
    const sequenceId = toSequenceString(+(roomDoc.data()?.latestMessage?.sequenceId || 0) + 1)
    const messageDocRef = firestore.collection(`v2/proto/chatRooms/${roomId}/messages`).doc(sequenceId)
    const messageData = {
      sequenceId,
      uid,
      message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }
    tx.set(messageDocRef, messageData)
    tx.set(
      roomDocRef,
      {
        latestMessage: messageData,
        readMarkers: {
          [uid]: sequenceId
        }
      },
      { merge: true }
    )
  })
}

export const updateReadMarker = async (uid: string, roomId: string, sequenceId: string) => {
  await firestore
    .collection(`v2/proto/chatRooms/${roomId}`)
    .doc(sequenceId)
    .set(
      {
        readMarkers: {
          [uid]: sequenceId
        }
      },
      { merge: true }
    )
}
export const subscribeRoom = (id: string, onUpdate: (message: MessageData[]) => void) => {
  firestore.collection(`v2/proto/chatRooms/${id}/messages`).onSnapshot(snapshot => {
    const updatedData = snapshot.docs.map(doc => {
      const message = doc.data()
      return {
        sequenceId: doc.id,
        uid: message.uid,
        message: message.message,
        timestamp: message.timestamp || { toDate: () => new Date() }
      }
    })
    onUpdate(updatedData)
  })
}
export const unsubscribeRoom = (id: string) => {
  firestore.collection(`v2/proto/chatRooms/${id}/messages`).onSnapshot(() => {})
}
