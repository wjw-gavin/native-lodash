import type { TObject } from './types'

/**
 * @description Get all URL parameters and convert them to a JSON object
 * @param url The URL to parse, defaults to location.href
 */

export function getUrlAllParams(url?: string) {
  url = url ? url : decodeURIComponent(window.location.href)
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
