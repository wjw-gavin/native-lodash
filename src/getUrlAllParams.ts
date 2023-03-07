import type { TObject } from './types'

/**
 * @description 获取 url 中所有参数，并转换为 json 对象
 * @param {string} url 指定url，默认 location.href
 * @returns {object}
 */

export function getUrlAllParams(url: string): object {
  url = url ? url : window.location.href
  const pa = url.slice(Math.max(0, url.indexOf('?') + 1)),
    arr = pa.split('&'),
    result: TObject = {}

  for (let i = 0, _len = arr.length; i < _len; i++) {
    const pos = arr[i].indexOf('=')
    if (pos === -1) {
      continue
    }
    const name = arr[i].slice(0, Math.max(0, pos)),
      value = window.decodeURIComponent(arr[i].slice(Math.max(0, pos + 1)))
    result[name] = value
  }

  return result
}
