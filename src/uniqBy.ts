import { test } from '.'

/**
 * @description 调用数组的每个元素以产生唯一性
 * @param {Array} arr 要去重的数组
 * @param {*} iteratee 迭代函数，调用每个元素
 * @returns {Array} 返回新的去重后的数组
 */

export function uniqBy<T>(arr: T[], iteratee?: any): T[] {
  if (!iteratee) return [...new Set(arr)]

  const it = test.isString(iteratee) ? (val: any) => val[iteratee] : iteratee

  return arr.reduce((pre: T[], cur) => {
    if (!pre.some((item) => it(item) === it(cur))) {
      pre.push(cur)
    }
    return pre
  }, [])
}
