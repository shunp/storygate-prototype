import { GroupCaption } from 'src/services/interfaces/GroupCaption'

export abstract class GroupCaptionModel implements GroupCaption {
  constructor(readonly pageId: string, readonly name: string, readonly introduction: string, readonly backgroundImg: string) {}

  abstract readonly joined: (uid: string) => boolean
}
