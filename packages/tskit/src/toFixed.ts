import type { Numeric } from './types'

/**
 * @description Fixed version of toFixed. Native toFixed has rounding issues (e.g., 0.345.toFixed(2) = 0.34 instead of 0.35)
 * @param num The number to format
 * @param digit Number of decimal places, default is 2
 */
export function toFixed(num: Numeric, digit = 2) {
  const pow = 10 ** digit
  return (Math.round(Number(num) * pow) / pow).toFixed(digit)
}
