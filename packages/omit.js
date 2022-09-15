import { test } from './test'

/**
 * @description 返回一个对象，这个对象由忽略属性之外的object自身和继承的可枚举属性组成。（注：可以理解为删除object对象的属性）。
 * @param {Object} object 目标对象.
 * @param {string|string[]} props 要被忽略的属性
 * @returns {Object} 返回新对象
 * @example
 *
 * const object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * omit(object, ['a', 'c']);
 * // => { 'b': '2' }
 *
 * omit(object, 'a');
 * // => { 'b': '2', 'c': 3 }
 */

export function omit(obj, props) {
  if (!test.isObject(obj)) return {}

  if (test.isString(props)) {
    props = [props]
  }

  const keys = Object.keys(obj)
  const res = {}

  for (const i = 0; i < keys.length; i++) {
    const key = keys[i]
    const val = obj[key]

    if (!props || props.indexOf(key) === -1) {
      res[key] = val
    }
  }
  return res
}
