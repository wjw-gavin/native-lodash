/**
 * @description: 重写 toFixed
 * 原因：比如 0.345.toFixed(2) = 0.34 而非 0.35
 * digit: 保留位数，默认2位
 * @param {String | Number} num 数值
 * @param {Number} digit 保留位数，默认2位
 * @return {Number}
 */
export function toFixed(num, digit = 2) {
  const pow = Math.pow(10, digit)
  return Math.round(Number(num) * pow) / pow
}
