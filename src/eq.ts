/**
 * @description 使用 SameValueZero 比较两者的值，来确定它们是否相等。
 * @param value 要比较的值
 * @param other 另一个要比较的值
 */

export function eq(value: unknown, other: unknown) {
  return value === other || (value !== value && other !== other)
}
