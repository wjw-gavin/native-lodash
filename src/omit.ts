import { isObject, isString } from '.'
import type { TObject } from './types'

/**
 * @description 返回一个对象，这个对象由忽略属性之外的自身和继承的可枚举属性组成。（注：可以理解为删除对象的属性）。
 * @param obj 目标对象.
 * @param props 要被忽略的属性
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

export function omit(obj: TObject, props: string | string[]) {
  if (!isObject(obj)) return {}

  if (isString(props)) {
    props = [props] as string[]
  }

  const keys = Object.keys(obj)
  const res: TObject = {}

  for (const key of keys) {
    const val = obj[key]

    if (!props || !props.includes(key)) {
      res[key] = val
    }
  }
  return res
}
