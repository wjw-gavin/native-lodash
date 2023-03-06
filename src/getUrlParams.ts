/**
 * @description 获取 url 中指定参数
 * @param {string} name 要获取的参数名
 * @param {string} url 指定url，默认 location.ref
 * @returns {string | null}
 */

export function getUrlParams(name, url) {
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
