/**
 * @description 比较两者的值，来确定它们是否相等。
 * @param {*} value 要比较的值
 * @param {*} other 另一个要比较的值
 * @returns {boolean}
 */

export function eq(value, other) {
  return value === other || (value !== value && other !== other)
}
