/**
 * Similar to without, but returns the values from array that are not present in the other arrays.
 *
 * @example
 *
 * const arrays = [[1, 2, 3, 4, 5], [5, 2, 10]]
 * console.log(difference(arrays])
 * output: [1, 3, 4]
 */

export const difference = (array) =>
  array.reduce((a, b) => a.filter((c) => !b.includes(c)))
