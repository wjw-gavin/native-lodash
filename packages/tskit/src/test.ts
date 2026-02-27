/**
 * Various validation methods
 */
import type { Numeric } from './types'

export const isDef = <T>(val: T): val is NonNullable<T> =>
  val !== undefined && val !== null

/**
 * Validate email format
 */
export function isEmail(value: string) {
  return /^\w+((-\w+)|(\.\w+))*@[\dA-Za-z]+(([.-])[\dA-Za-z]+)*\.[\dA-Za-z]+$/.test(
    value
  )
}

/**
 * Validate mobile phone number format
 */
export function isMobile(value: Numeric) {
  const reg = /^1[3-9]\d{9}$/
  return reg.test(String(value))
}

/**
 * Check if value is a string
 */
export function isString(value: unknown): value is string {
  return typeof value === 'string' || value instanceof String
}

/**
 * Validate Chinese ID card number
 */
export function isIdCard(value: string) {
  return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0-2|]\d)|3[01])\d{3}(\d|X)$/.test(
    value
  )
}

/**
 * Check if value is a valid Chinese car plate number
 */
export function isCarNo(value: string) {
  // New energy vehicle plate
  const xreg =
    /^[A-Z云京使冀吉宁川新晋桂沪津浙渝湘琼甘皖粤苏蒙藏豫贵赣辽鄂闽陕青领鲁黑][A-Z]((\d{5}[DF]$)|([DF][\dA-HJ-NP-Z]\d{4}$))/
  // Regular vehicle plate
  const creg =
    /^[A-Z云京使冀吉宁川新晋桂沪津浙渝湘琼甘皖粤苏蒙藏豫贵赣辽鄂闽陕青领鲁黑][A-Z][\dA-HJ-NP-Z]{4}[\dA-HJ-NP-Z学挂港澳警]$/
  if (value.length === 7) {
    return creg.test(value)
  }
  if (value.length === 8) {
    return xreg.test(value)
  }
  return false
}

/**
 * Check if value is empty
 */
export function isEmpty(val: any) {
  if (val == null) return true
  if (val === '') return true
  if (Array.isArray(val)) return val.length === 0
  if (typeof val === 'object') return Object.keys(val).length === 0
  return false
}

/**
 * Check if value is an array
 */
export const isArray = Array.isArray

/**
 * Check if value is a plain object
 */
export function isObject(value: unknown) {
  return Object.prototype.toString.call(value) === '[object Object]'
}

/**
 * Check if value is a valid SMS verification code
 */

export function isCode(value: string, len = 6) {
  return new RegExp(`^\\d{${len}}$`).test(value)
}

/**
 * Check if value is a function
 */
export const isFunction = (fn: unknown): fn is Function =>
  typeof fn === 'function'

/**
 * Check if value is boolean true or string 'true'
 */
export const isTrue = (val: unknown) => val === true || val === 'true'

/**
 * Check if value is a valid URL
 */
export const isURL = (url: string): boolean => {
  return /^((ht|f)tps?):\/\/?/.test(url)
}

/**
 * Check if running in browser environment
 */
export const inBrowser = typeof window !== 'undefined'
