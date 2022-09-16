/**
 * @description 字符串脱敏（手机号，身份证，银行卡号、姓名等）
 * @param {String|Number} value 要脱敏的数据
 * @param {Number} start 前几位不参与脱敏，默认 3
 * @param {Number} end 后几位不参与脱敏，默认 4
 * @returns {String} 脱敏后的字符串
 */

export function desensitize(value, start = 3, end = 4, str = '*') {
  if (!value) return value

  const reg = new RegExp(`^(.{${start}})(.*)(.{${end}})$`)

  return String(value).replace(
    reg,
    (self, str1, str2, str3) => str1 + str.repeat(str2.length) + str3
  )
}
