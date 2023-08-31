import { isDef, isObject } from '.'
import type { TObject } from './types'

/**
 * @description 深度克隆
 * @param data 需要深度克隆的对象
 * @return 克隆后的对象或者原始值
 */

export const cloneDeep = <T extends TObject | null | undefined>(data: T): T => {
  if (!isDef(data)) {
    return data
  }

  if (Array.isArray(data)) {
    return data.map((item) => cloneDeep(item)) as unknown as T
  }

  if (isObject(data)) {
    const obj: TObject = {}
    Object.keys(data).forEach((key) => {
      obj[key] = cloneDeep(data[key])
    })

    return obj
  }

  return data
}
