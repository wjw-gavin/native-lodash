/**
 * @description: 根据地址下载文件
 * @param {String} href  下载链接
 * @param {String} title 文件名称
 */

export function download(href, title) {
  const a = document.createElement('a')
  a.style.display = 'none'
  a.setAttribute('href', href)
  a.setAttribute('download', title ? title : '')
  // 随机字符串id
  const randomId = Math.random().toString(36).substring(2)
  a.id = randomId
  document.body.appendChild(a)
  a.click()
  a.remove()
}
