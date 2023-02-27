/**
 * @description 获取 url 中所有参数，并转换为 json 对象
 * @param {string} url 指定url，默认 location.href
 * @returns {object}
 */

export function getUrlAllParams(url) {
  url = url ? url : window.location.href
  const pa = url.substring(url.indexOf('?') + 1),
    arr = pa.split('&'),
    result = {}

  for (var i = 0, _len = arr.length; i < _len; i++) {
    var pos = arr[i].indexOf('=')
    if (pos == -1) {
      continue
    }
    var name = arr[i].substring(0, pos),
      value = window.decodeURIComponent(arr[i].substring(pos + 1))
    result[name] = value
  }

  return result
}
