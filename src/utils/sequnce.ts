const SEQUNCE_DIGITS = 15
export const toSequenceString = (num: number) => num.toString().padStart(SEQUNCE_DIGITS, '0')
