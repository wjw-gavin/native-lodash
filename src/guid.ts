/**
 * @description Generate a globally unique identifier
 * @param len Length of the uuid
 * @param firstLetter Set the first character to a specific letter, default is 'u'
 * @param radix Base for generating uuid (2-binary, 8-octal, 10-decimal, 16-hexadecimal), default 62
 */

export function guid(len = 32, firstLetter = 'u', radix = 62) {
  const chars =
    '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
  const uuid = []

  if (len) {
    // If uuid length is specified, just take random characters. 0|x is a bitwise operation that removes decimals
    for (let i = 0; i < len; i++) uuid[i] = chars[0 | (Math.random() * radix)]
  } else {
    let r
    // RFC4122 standard requires certain positions to have fixed characters
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-'
    uuid[14] = '4'

    for (let i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r = 0 | (Math.random() * 16)
        uuid[i] = chars[i === 19 ? (r & 0x3) | 0x8 : r]
      }
    }
  }

  // Remove first character and replace with letter, since numeric first char cannot be used as id or class
  if (firstLetter) {
    uuid.shift()
    return `${firstLetter}${uuid.join('')}`
  }
  return uuid.join('')
}
