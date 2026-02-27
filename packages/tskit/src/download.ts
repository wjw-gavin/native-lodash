/**
 * @description Download file by URL (for file formats not supported by browser preview)
 * Use downloadImage for downloading images
 * @param href Download URL
 * @param title File name
 */

export function download(href: string, title?: string) {
  const a: HTMLAnchorElement = document.createElement('a')
  a.style.display = 'none'
  a.setAttribute('href', href)
  a.setAttribute('download', title ? title : '')

  // Random string id
  const randomId = Math.random().toString(36).slice(2)
  a.id = randomId
  document.body.append(a)

  a.click()
  a.remove()
}
