import { isArray, isObject } from '.'
import type { TObject } from './types'

function _isObject(val: unknown): boolean {
  return isArray(val) || isObject(val)
}

/**
 * @description 判断对象或数组是否相等。
 * @param {*} value 要比较的值
 * @param {*} other 另一个要比较的值
 * @returns {boolean}
 */

export function isEqual(value: TObject, other: TObject): boolean {
  // 两个数据有任何一个不是对象或数组
  if (!_isObject(value) || !_isObject(other)) {
    return value === other
  }
  // 如果传的两个参数都是同一个对象或数组
  if (value === other) {
    return true
  }

  // 两个都是对象或数组，而且不相等
  // 1.先比较value和other的key的个数，是否一样
  const valueKeys = Object.keys(value)
  const otherKeys = Object.keys(other)
  if (valueKeys.length !== otherKeys.length) {
    return false
  }

  // 如果key的个数相等,就是第二步
  // 2.以value为基准，和other依次递归比较
  // eslint-disable-next-line no-restricted-syntax
  for (const key in value) {
    const res = isEqual(value[key] as TObject, other[key] as TObject)
    if (!res) {
      return false
    }
  }

  return true
}
