import { isDef } from '.'
import type { TObject } from './types'

type ArrayFormat = 'indices' | 'brackets' | 'repeat' | 'comma'
/**
 * @description 对象转 url 参数
 * @param data 对象
 * @param isPrefix 是否自动加上'?'
 * @param arrayFormat 规则 indices|brackets|repeat|comma
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

    // 如果值为数组，另行处理
    if (Array.isArray(value)) {
      // e.g. {ids: [1, 2, 3]}
      switch (arrayFormat) {
        case 'indices':
          // 结果: ids[0]=1&ids[1]=2&ids[2]=3
          for (const [i, element] of value.entries()) {
            _result.push(`${key}[${i}]=${element}`)
          }
          break
        case 'brackets':
          // 结果: ids[]=1&ids[]=2&ids[]=3
          value.forEach((_value) => {
            _result.push(`${key}[]=${_value}`)
          })
          break
        case 'repeat':
          // 结果: ids=1&ids=2&ids=3
          value.forEach((_value) => {
            _result.push(`${key}=${_value}`)
          })
          break
        case 'comma':
          // 结果: ids=1,2,3
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
