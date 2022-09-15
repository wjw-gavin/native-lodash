import { round } from './utils/digit.js'

/**
 * @description 金额格式化
 * @param {number|string} number 要格式化的数字
 * @param {number} decimals 保留几位小数
 * @returns {string} 格式化后的数字
 * https://github.com/umicro/uView2.0/blob/master/uni_modules/uview-ui/libs/function/digit.js
 */

export function moneyFormat(number, decimals = 0) {
  number = `${number}`.replace(/[^0-9+-Ee.]/g, '')
  const n = !isFinite(+number) ? 0 : +number
  const prec = !isFinite(+decimals) ? 0 : Math.abs(decimals)
  const sep = ','
  const dec = '.'
  let s = ''

  s = (prec ? round(n, prec) + '' : `${Math.round(n)}`).split('.')
  const re = /(-?\d+)(\d{3})/
  while (re.test(s[0])) {
    s[0] = s[0].replace(re, `$1${sep}$2`)
  }

  if ((s[1] || '').length < prec) {
    s[1] = s[1] || ''
    s[1] += new Array(prec - s[1].length + 1).join('0')
  }
  return s.join(dec)
}
