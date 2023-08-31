import type { TObject } from './types'

const hasOwnProperty = Object.prototype.hasOwnProperty

/**
 * @description Checks if key is a direct property of object. Key may be a path of a value separated by .
 */

export const has = (obj: TObject, key: string): boolean => {
  const keyParts = key.split('.')

  return (
    !!obj &&
    (keyParts.length > 1
      ? has(obj[key.split('.')[0]], keyParts.slice(1).join('.'))
      : hasOwnProperty.call(obj, key))
  )
}
