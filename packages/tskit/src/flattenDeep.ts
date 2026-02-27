/**
 * Recursively flattens array.
 *
 * @example
 *
 * flattenDeep([1, [[2], [3, [4]], 5]])
 * output: [1, 2, 3, 4, 5]
 */

export const flattenDeep = <T>(array: T[]): T[] => {
  return array.flatMap((subArray) =>
    Array.isArray(subArray) ? flattenDeep(subArray) : subArray
  )
}
