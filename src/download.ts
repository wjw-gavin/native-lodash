/**
 * @description: 根据地址下载文件
 * @param {String} href  下载链接
 * @param {String} title 文件名称
 */

export function download(href: string, title?: string) {
  const a: HTMLAnchorElement = document.createElement('a')
  a.style.display = 'none'
  a.setAttribute('href', href)
  a.setAttribute('download', title ? title : '')

  // 随机字符串id
  const randomId = Math.random().toString(36).slice(2)
  a.id = randomId
  document.body.append(a)

  a.click()
  a.remove()
}
