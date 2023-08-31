/**
 * @Description: 根据图片地址下载图片
 * @param src  下载图片链接
 * @param title  图片名称
 */
export function downloadImage(src: string, title?: string) {
  const image = new Image()

  // 解决跨域 Canvas 污染问题
  image.setAttribute('crossOrigin', 'anonymous')

  image.addEventListener('load', () => {
    const canvas = document.createElement('canvas')
    canvas.width = image.width
    canvas.height = image.height
    const context = canvas.getContext('2d')
    context?.drawImage(image, 0, 0, image.width, image.height)

    // 得到图片的base64编码数据
    const url = canvas.toDataURL('image/png')
    const a = document.createElement('a')
    const event = new MouseEvent('click')
    a.download = title || 'photo'
    a.href = url

    a.dispatchEvent(event)
  })

  image.src = src
}
