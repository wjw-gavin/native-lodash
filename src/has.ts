import type { TObject } from './types'
/**
 * Checks if key is a direct property of object. Key may be a path of a value separated by .
 *
 * @example
 *
 * const object = { a: 1, b: 'settings', c: { d: 'test' } }
 *
 * const result = has(object, 'a')
 * output: true
 *
 * const result = has(object, 'c.d')
 * output: true
 */

const hasOwnProperty = Object.prototype.hasOwnProperty

export const has = (obj: TObject, key: string): boolean => {
  const keyParts = key.split('.')

  return (
    !!obj &&
    (keyParts.length > 1
      ? has(obj[key.split('.')[0]] as TObject, keyParts.slice(1).join('.'))
      : hasOwnProperty.call(obj, key))
  )
}
