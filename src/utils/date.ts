import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/ja'

dayjs.extend(relativeTime)
dayjs.locale('ja')

export const fromNow = (date: string) => dayjs(date).fromNow()
