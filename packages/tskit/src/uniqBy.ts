import { isString } from '.'

type Iteratee<T> = string | ((value: T) => unknown)

/**
 * @description Create a duplicate-free version of an array using iteratee for uniqueness comparison
 * @param arr The target array
 * @param iteratee The iteratee invoked per element (can be a property name string or a function)
 */

export function uniqBy<T>(arr: T[], iteratee?: Iteratee<T>): T[] {
  if (!iteratee) return [...new Set(arr)]

  const it = isString(iteratee)
    ? (val: T) => (val as Record<string, unknown>)[iteratee]
    : iteratee

  // Use Set for O(n) performance instead of O(n²)
  const seen = new Set<unknown>()
  const result: T[] = []

  for (const item of arr) {
    const key = it(item)
    if (!seen.has(key)) {
      seen.add(key)
      result.push(item)
    }
  }

  return result
}
