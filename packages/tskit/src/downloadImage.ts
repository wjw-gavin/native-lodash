/**
 * @description Download image by URL
 * @param src Image URL to download
 * @param title Image file name
 */
export function downloadImage(src: string, title?: string) {
  const image = new Image()

  // Solve cross-origin Canvas pollution issue
  image.setAttribute('crossOrigin', 'anonymous')

  image.addEventListener('load', () => {
    const canvas = document.createElement('canvas')
    canvas.width = image.width
    canvas.height = image.height
    const context = canvas.getContext('2d')
    context?.drawImage(image, 0, 0, image.width, image.height)

    // Get base64 encoded image data
    const url = canvas.toDataURL('image/png')
    const a = document.createElement('a')
    const event = new MouseEvent('click')
    a.download = title || 'photo'
    a.href = url

    a.dispatchEvent(event)
  })

  image.src = src
}
