import type { Numeric } from './types'

/**
 * @description 字符串脱敏（手机号，身份证，银行卡号、姓名等）
 * @param value 要脱敏的数据
 * @param start 前几位不参与脱敏，默认 3
 * @param end 后几位不参与脱敏，默认 4
 */

export function desensitize(value: Numeric, start = 3, end = 4, str = '*') {
  if (!value) return value

  const reg = new RegExp(`^(.{${start}})(.*)(.{${end}})$`)

  return String(value).replace(
    reg,
    (_self, str1, str2, str3) => str1 + str.repeat(str2.length) + str3
  )
}
