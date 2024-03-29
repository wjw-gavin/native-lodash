import { isString } from '.'

/**
 * @description 调用数组的每个元素以产生唯一性
 * @param arr 目标数组
 * @param iteratee 迭代函数，调用每个元素
 */

export function uniqBy<T>(arr: T[], iteratee?: any) {
  if (!iteratee) return [...new Set(arr)]

  const it = isString(iteratee) ? (val: any) => val[iteratee] : iteratee

  return arr.reduce((pre: T[], cur) => {
    if (!pre.some((item) => it(item) === it(cur))) {
      pre.push(cur)
    }
    return pre
  }, [])
}
