import base from './base'
import orange from './orange'
import blue from './blue'
import white from './white'
import green from './green'
import pink from './pink'
import yellow from './yellow'
import teal from './teal'

/**
 * The default theme to load
 */
export const DEFAULT_THEME = 'base'
export const ORANGE_THEME = 'orange'
export const BLUE_THEME = 'blue'
export const WHITE_THEME = 'white'
export const GREEN_THEME = 'green'
export const PINK_THEME = 'pink'
export const YELLOW_THEME = 'yellow'
export const TEAL_THEME = 'teal'

export const exist = (theme: string) => {
  return (
    theme === ORANGE_THEME ||
    theme === BLUE_THEME ||
    theme === WHITE_THEME ||
    theme === GREEN_THEME ||
    theme === PINK_THEME ||
    theme === YELLOW_THEME ||
    theme === TEAL_THEME
  )
}

export const themes = {
  base,
  orange,
  blue,
  white,
  green,
  pink,
  yellow,
  teal
}
