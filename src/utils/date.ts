import dayjs, { Dayjs } from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/ja'

dayjs.extend(relativeTime)
dayjs.locale('ja')

export const fromNow = (date: string) => dayjs(date).fromNow()

export const equalsDay = (date: Date, comparison: Dayjs = dayjs()) => comparison.day() === dayjs(date).day()
