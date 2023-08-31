/**
 * @description 获取 url 中指定参数
 * @param name 要获取的参数名
 * @param url 指定url，默认 location.href
 */

export function getUrlParams(name: string, url: string) {
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`)
  let result = null

  if (!url) {
    result = window.location.search.slice(1).match(reg)
  } else {
    result = url.split('?')[1].match(reg)
  }

  if (result != null) return decodeURIComponent(result[2])

  return null
}
