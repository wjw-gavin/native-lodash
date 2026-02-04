export type Pos = 'both' | 'left' | 'right' | 'all'

/**
 * @description Remove whitespace from string
 * @param str The string to trim
 * @param pos Position: both (left and right) | left | right | all; default is 'both'
 */

export function trim(str: string, pos: Pos = 'both') {
  str = String(str)
  if (pos === 'both') {
    return str.replace(/^\s+|\s+$/g, '')
  }
  if (pos === 'left') {
    return str.replace(/^\s*/, '')
  }
  if (pos === 'right') {
    return str.replace(/(\s*$)/g, '')
  }
  if (pos === 'all') {
    return str.replace(/\s+/g, '')
  }
  return str
}
