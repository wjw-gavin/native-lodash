/**
 * @description Check if two values are deeply equal, supporting Date, RegExp, Map, Set, Array, and plain objects
 * @param value The value to compare
 * @param other The other value to compare
 */

export function isEqual(value: unknown, other: unknown): boolean {
  // Same reference or both primitives with same value
  if (value === other) {
    return true
  }

  // Handle NaN (NaN !== NaN in JS)
  if (
    typeof value === 'number' &&
    typeof other === 'number' &&
    Number.isNaN(value) &&
    Number.isNaN(other)
  ) {
    return true
  }

  // If either is null/undefined or not object, they're not equal (already checked ===)
  if (
    value == null ||
    other == null ||
    typeof value !== 'object' ||
    typeof other !== 'object'
  ) {
    return false
  }

  // Handle Date
  if (value instanceof Date && other instanceof Date) {
    return value.getTime() === other.getTime()
  }

  // Handle RegExp
  if (value instanceof RegExp && other instanceof RegExp) {
    return value.source === other.source && value.flags === other.flags
  }

  // Handle Map
  if (value instanceof Map && other instanceof Map) {
    if (value.size !== other.size) return false
    for (const [k, v] of value) {
      if (!other.has(k) || !isEqual(v, other.get(k))) return false
    }
    return true
  }

  // Handle Set
  if (value instanceof Set && other instanceof Set) {
    if (value.size !== other.size) return false
    for (const v of value) {
      if (!other.has(v)) return false
    }
    return true
  }

  // Type mismatch (e.g., Date vs plain object)
  if (value.constructor !== other.constructor) {
    return false
  }

  // Handle Array and plain objects
  const valueKeys = Object.keys(value)
  const otherKeys = Object.keys(other)

  if (valueKeys.length !== otherKeys.length) {
    return false
  }

  return valueKeys.every((key) =>
    isEqual(
      (value as Record<string, unknown>)[key],
      (other as Record<string, unknown>)[key]
    )
  )
}
