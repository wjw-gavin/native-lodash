/**
 * @description Performs a SameValueZero comparison between two values to determine if they are equivalent.
 * @param value The value to compare
 * @param other The other value to compare
 */

export function eq(value: unknown, other: unknown) {
  return value === other || (value !== value && other !== other)
}
