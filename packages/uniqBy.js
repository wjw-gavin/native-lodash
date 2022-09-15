import { test } from 'test'
/**
 * @description 调用数组的每个元素以产生唯一性
 * @param {Array} arr 要去重的数组
 * @param {*} it 迭代函数，调用每个元素
 * @returns {boolean}
 */

export function uniqBy(arr, it) {
  const iteratee = test.isString(it) ? (val) => val[it] : it

  return arr.reduce((pre, cur) => {
    if (!pre.some((item) => iteratee(item) === iteratee(cur))) {
      pre.push(cur)
    }
    return pre
  }, [])
}
