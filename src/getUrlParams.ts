/**
 * @description Get a specific parameter from URL
 * @param name The parameter name to get
 * @param url The URL to parse, defaults to location.href
 */

export function getUrlParams(name: string, url?: string) {
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`)
  let result = null

  if (!url) {
    result = window.location.search.slice(1).match(reg)
  } else {
    const query = url.split('?')[1]
    if (query) {
      result = query.match(reg)
    }
  }

  if (result != null) return decodeURIComponent(result[2])

  return null
}
