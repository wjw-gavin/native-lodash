import { round } from './utils/digit'
import type { Numeric } from './types'

/**
 * @description 金额格式化
 * @param number 要格式化的数字
 * @param decimals 保留几位小数
 */

export function moneyFormat(number: Numeric, decimals = 0) {
  number = `${number}`.replace(/[^\d+-Ee]/g, '')
  const n = !isFinite(+number) ? 0 : +number
  const prec = !isFinite(+decimals) ? 0 : Math.abs(decimals)
  const sep = ','
  const dec = '.'
  let s: string[] = []

  s = (prec ? `${round(n, prec)}` : `${Math.round(n)}`).split('.')
  const re = /(-?\d+)(\d{3})/
  while (re.test(s[0])) {
    s[0] = s[0].replace(re, `$1${sep}$2`)
  }

  if ((s[1] || '').length < prec) {
    s[1] = s[1] || ''
    s[1] += Array.from({ length: prec - s[1].length + 1 }).join('0')
  }

  return s.join(dec)
}
