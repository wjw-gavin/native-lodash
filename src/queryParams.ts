import { isDef } from '.'
import type { TObject } from './types'

type ArrayFormat = 'indices' | 'brackets' | 'repeat' | 'comma'
/**
 * @description Convert object to URL query parameters
 * @param data The object to convert
 * @param isPrefix Whether to add '?' prefix automatically
 * @param arrayFormat Array format rule: indices|brackets|repeat|comma
 */
export function queryParams(
  data: TObject = {},
  isPrefix = true,
  arrayFormat: ArrayFormat = 'brackets'
) {
  const prefix = isPrefix ? '?' : ''
  const _result = []
  if (!['indices', 'brackets', 'repeat', 'comma'].includes(arrayFormat))
    arrayFormat = 'brackets'
  // eslint-disable-next-line no-restricted-syntax
  for (const key in data) {
    const value = data[key]

    if (!isDef(value)) continue

    // Handle array values separately
    if (Array.isArray(value)) {
      // e.g. {ids: [1, 2, 3]}
      switch (arrayFormat) {
        case 'indices':
          // Result: ids[0]=1&ids[1]=2&ids[2]=3
          for (const [i, element] of value.entries()) {
            _result.push(`${key}[${i}]=${element}`)
          }
          break
        case 'brackets':
          // Result: ids[]=1&ids[]=2&ids[]=3
          value.forEach((_value) => {
            _result.push(`${key}[]=${_value}`)
          })
          break
        case 'repeat':
          // Result: ids=1&ids=2&ids=3
          value.forEach((_value) => {
            _result.push(`${key}=${_value}`)
          })
          break
        case 'comma':
          // Result: ids=1,2,3
          // eslint-disable-next-line no-case-declarations
          let commaStr = ''
          value.forEach((_value) => {
            commaStr += (commaStr ? ',' : '') + _value
          })
          _result.push(`${key}=${commaStr}`)
          break
      }
    } else {
      _result.push(`${key}=${value}`)
    }
  }

  return _result.length > 0 ? prefix + _result.join('&') : ''
}
