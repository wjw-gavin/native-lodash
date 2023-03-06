import { test } from './test'
/**
 * @description 深度克隆
 * @param {object} obj 需要深度克隆的对象
 * @returns {*} 克隆后的对象或者原值（不是对象）
 */

export const deepClone = <T extends Record<string, any> | null | undefined>(
  obj: T
): T => {
  if (!test.isDef(obj)) {
    return obj
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => deepClone(item)) as unknown as T
  }

  if (test.isObject(obj)) {
    const to = {} as Record<string, any>
    Object.keys(obj).forEach((key) => {
      to[key] = deepClone(obj[key])
    })

    return to as T
  }

  return obj
}
