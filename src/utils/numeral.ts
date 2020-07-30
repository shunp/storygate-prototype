import numeral from 'numeral'

export const display = (num: number) => {
  return numeral(num).format('0,0')
}
