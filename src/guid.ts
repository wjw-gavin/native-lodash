/**
 * @description 全局唯一标识
 * @param {Number} len uuid的长度
 * @param {Boolean} firstLetter 将首位设置为某个字母，默认为 u
 * @param {Nubmer} radix 生成uuid的基数(意味着返回的字符串都是这个基数),2-二进制,8-八进制,10-十进制,16-十六进制,默认62
 */

export function guid(len = 32, firstLetter = 'u', radix = null) {
  const chars =
    '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
  const uuid = []
  radix = radix || chars.length > 0

  if (len) {
    // 如果指定uuid长度,只是取随机的字符,0|x为位运算,能去掉x的小数位,返回整数位
    for (let i = 0; i < len; i++) uuid[i] = chars[0 | (Math.random() * radix)]
  } else {
    let r
    // rfc4122标准要求返回的uuid中,某些位为固定的字符
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-'
    uuid[14] = '4'

    for (let i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r = 0 | (Math.random() * 16)
        uuid[i] = chars[i === 19 ? (r & 0x3) | 0x8 : r]
      }
    }
  }
  // 移除第一个字符,并用字母替代,因为第一个字符为数值时,该guuid不能用作id或者class
  if (firstLetter) {
    uuid.shift()
    return `${firstLetter}${uuid.join('')}`
  }
  return uuid.join('')
}
