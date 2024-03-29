import type { Numeric } from './types'

/**
 * @description: 重写 toFixed。原因：比如 0.345.toFixed(2) = 0.34 而非 0.35;
 * @param num 数字
 * @param digit 保留位数，默认 2 位
 */
export function toFixed(num: Numeric, digit = 2) {
  const pow = 10 ** digit
  return (Math.round(Number(num) * pow) / pow).toFixed(digit)
}
