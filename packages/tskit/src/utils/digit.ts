import type { Numeric } from '../types'

let _boundaryCheckingState = true // Global switch for boundary checking

/**
 * Strip floating point errors
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
 * Convert decimal to integer by scaling
 * @private
 * @param {Numeric} num Input number
 */
function float2Fixed(num: Numeric) {
  if (!num.toString().includes('e')) {
    return Number(num.toString().replace('.', ''))
  }
  const dLen = digitLength(num)
  return dLen > 0 ? strip(Number(num) * 10 ** dLen) : Number(num)
}

/**
 * Check if number exceeds safe integer bounds and warn if so
 * @private
 * @param {Numeric} num Input number
 */
function checkBoundary(num: Numeric) {
  if (
    _boundaryCheckingState &&
    (Number(num) > Number.MAX_SAFE_INTEGER ||
      Number(num) < Number.MIN_SAFE_INTEGER)
  ) {
    console.warn(`${num} exceeds safe integer bounds, result may be inaccurate`)
  }
}

/**
 * Flatten recursive operations into iteration
 * @param {number[]} arr Array of numbers to operate on
 * @param {function} operation The operation to perform
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
 * High precision multiplication
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
 * High precision addition
 * @export
 */
export function plus(...nums: any[]) {
  if (nums.length > 2) {
    return iteratorOperation(nums, plus)
  }

  const [num1, num2] = nums
  // Get the maximum decimal places
  const baseNum = 10 ** Math.max(digitLength(num1), digitLength(num2))
  // Convert decimals to integers then calculate
  return (times(num1, baseNum) + times(num2, baseNum)) / baseNum
}

/**
 * High precision subtraction
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
 * High precision division
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
  // Important: must use strip for correction
  return times(
    num1Changed / num2Changed,
    strip(10 ** (digitLength(num2) - digitLength(num1)))
  )
}

/**
 * Round to specified decimal places
 * @export
 */
export function round(num: number, ratio: number) {
  const base = 10 ** ratio
  let result = divide(Math.round(Math.abs(times(num, base))), base)
  if (num < 0 && result !== 0) {
    result = times(result, -1)
  }
  // Pad with zeros if needed
  return result
}

/**
 * Enable or disable boundary checking, enabled by default
 * @param flag true to enable, false to disable, default is true
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
