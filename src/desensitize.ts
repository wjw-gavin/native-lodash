import type { Numeric } from './types'

/**
 * @description Mask sensitive data (phone number, ID card, bank card number, name, etc.)
 * @param value The data to mask
 * @param start Number of characters to keep at the start, default 3
 * @param end Number of characters to keep at the end, default 4
 */

export function desensitize(value: Numeric, start = 3, end = 4, str = '*') {
  if (!value) return value

  const strValue = String(value)
  // If string length is less than or equal to start + end, do not mask
  if (strValue.length <= start + end) {
    return strValue
  }

  const reg = new RegExp(`^(.{${start}})(.*)(.{${end}})$`)

  return strValue.replace(
    reg,
    (_self, str1, str2, str3) => str1 + str.repeat(str2.length) + str3
  )
}
