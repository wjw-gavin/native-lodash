import { isDef } from '.'

/**
 * @description Deep clone an object, supporting Date, RegExp, Map, Set, Array, and plain objects
 * @param data The object to deep clone
 * @param cache WeakMap cache for circular reference detection
 * @return The cloned object or primitive value
 */

export const cloneDeep = <T>(data: T, cache = new WeakMap()): T => {
  // Handle null, undefined, and primitives
  if (!isDef(data) || typeof data !== 'object') {
    return data
  }

  // Handle circular references
  if (cache.has(data as object)) {
    return cache.get(data as object)
  }

  // Handle Date
  if (data instanceof Date) {
    return new Date(data.getTime()) as T
  }

  // Handle RegExp
  if (data instanceof RegExp) {
    return new RegExp(data.source, data.flags) as T
  }

  // Handle Map
  if (data instanceof Map) {
    const clonedMap = new Map()
    cache.set(data, clonedMap)
    data.forEach((value, key) => {
      clonedMap.set(cloneDeep(key, cache), cloneDeep(value, cache))
    })
    return clonedMap as T
  }

  // Handle Set
  if (data instanceof Set) {
    const clonedSet = new Set()
    cache.set(data, clonedSet)
    data.forEach((value) => {
      clonedSet.add(cloneDeep(value, cache))
    })
    return clonedSet as T
  }

  // Handle Array
  if (Array.isArray(data)) {
    const clonedArr: unknown[] = []
    cache.set(data, clonedArr)
    data.forEach((item, index) => {
      clonedArr[index] = cloneDeep(item, cache)
    })
    return clonedArr as T
  }

  // Handle plain objects
  const clonedObj: Record<string, unknown> = {}
  cache.set(data as object, clonedObj)
  Object.keys(data as object).forEach((key) => {
    clonedObj[key] = cloneDeep((data as Record<string, unknown>)[key], cache)
  })

  return clonedObj as T
}
