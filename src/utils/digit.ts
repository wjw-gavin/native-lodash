import type { Numeric } from '../types'

let _boundaryCheckingState = true // 是否进行越界检查的全局开关

/**
 * 把错误的数据转正
 * @private
 * @example strip(0.09999999999999998)=0.1
 */
function strip(num: Numeric, precision = 15) {
  return +parseFloat(Number(num).toPrecision(precision))
}

/**
 * Return digits length of a number
 * @private
 * @param {Numeric} num Input number
 */
function digitLength(num: Numeric) {
  // Get digit length of e
  const eSplit = num.toString().split(/[Ee]/)
  const len = (eSplit[0].split('.')[1] || '').length - +(eSplit[1] || 0)
  return len > 0 ? len : 0
}

/**
 * 把小数转成整数,如果是小数则放大成整数
 * @private
 * @param {Numeric} num 输入数
 */
function float2Fixed(num: Numeric) {
  if (!num.toString().includes('e')) {
    return Number(num.toString().replace('.', ''))
  }
  const dLen = digitLength(num)
  return dLen > 0 ? strip(Number(num) * 10 ** dLen) : Number(num)
}

/**
 * 检测数字是否越界，如果越界给出提示
 * @private
 * @param {Numeric} num 输入数
 */
function checkBoundary(num: Numeric) {
  if (
    _boundaryCheckingState &&
    (Number(num) > Number.MAX_SAFE_INTEGER ||
      Number(num) < Number.MIN_SAFE_INTEGER)
  ) {
    console.warn(`${num} 超出了精度限制，结果可能不正确`)
  }
}

/**
 * 把递归操作扁平迭代化
 * @param {number[]} arr 要操作的数字数组
 * @param {function} operation 迭代操作
 * @private
 */
function iteratorOperation(arr: any[], operation: any) {
  const [num1, num2, ...others] = arr
  let res = operation(num1, num2)

  others.forEach((num) => {
    res = operation(res, num)
  })

  return res
}

/**
 * 高精度乘法
 * @export
 */
export function times(...nums: any[]) {
  if (nums.length > 2) {
    return iteratorOperation(nums, times)
  }

  const [num1, num2] = nums
  const num1Changed = float2Fixed(num1)
  const num2Changed = float2Fixed(num2)
  const baseNum = digitLength(num1) + digitLength(num2)
  const leftValue = num1Changed * num2Changed

  checkBoundary(leftValue)

  return leftValue / 10 ** baseNum
}

/**
 * 高精度加法
 * @export
 */
export function plus(...nums: any[]) {
  if (nums.length > 2) {
    return iteratorOperation(nums, plus)
  }

  const [num1, num2] = nums
  // 取最大的小数位
  const baseNum = 10 ** Math.max(digitLength(num1), digitLength(num2))
  // 把小数都转为整数然后再计算
  return (times(num1, baseNum) + times(num2, baseNum)) / baseNum
}

/**
 * 高精度减法
 * @export
 */
export function minus(...nums: any[]) {
  if (nums.length > 2) {
    return iteratorOperation(nums, minus)
  }

  const [num1, num2] = nums
  const baseNum = 10 ** Math.max(digitLength(num1), digitLength(num2))
  return (times(num1, baseNum) - times(num2, baseNum)) / baseNum
}

/**
 * 高精度除法
 * @export
 */
export function divide(...nums: any[]) {
  if (nums.length > 2) {
    return iteratorOperation(nums, divide)
  }

  const [num1, num2] = nums
  const num1Changed = float2Fixed(num1)
  const num2Changed = float2Fixed(num2)
  checkBoundary(num1Changed)
  checkBoundary(num2Changed)
  // 重要，这里必须用strip进行修正
  return times(
    num1Changed / num2Changed,
    strip(10 ** (digitLength(num2) - digitLength(num1)))
  )
}

/**
 * 四舍五入
 * @export
 */
export function round(num: number, ratio: number) {
  const base = 10 ** ratio
  let result = divide(Math.round(Math.abs(times(num, base))), base)
  if (num < 0 && result !== 0) {
    result = times(result, -1)
  }
  // 位数不足则补0
  return result
}

/**
 * 是否进行边界检查，默认开启
 * @param flag 标记开关，true 为开启，false 为关闭，默认为 true
 * @export
 */
export function enableBoundaryChecking(flag = true) {
  _boundaryCheckingState = flag
}

export default {
  times,
  plus,
  minus,
  divide,
  round,
  enableBoundaryChecking
}
