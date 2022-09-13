/**
 * Recursively flattens array.
 *
 * @example
 *
 * flattenDeep([1, [[2], [3, [4]], 5]])
 * output: [1, 2, 3, 4, 5]
 */

export const flattenDeep = (array) =>
  array.flatMap((subArray) =>
    Array.isArray(subArray) ? flattenDeep(subArray) : subArray
  )
