/**
 * 各类校验方法
 */
import type { Numeric } from './types'

export const isDef = <T>(val: T): val is NonNullable<T> =>
  val !== undefined && val !== null

/**
 * 验证电子邮箱格式
 */
export function isEmail(value: string) {
  return /^\w+((-\w+)|(\.\w+))*@[\dA-Za-z]+(([.-])[\dA-Za-z]+)*\.[\dA-Za-z]+$/.test(
    value
  )
}

/**
 * 验证手机格式
 */
export function isMobile(value: Numeric) {
  const reg = /^1[3-9]\d{9}$/
  return reg.test(String(value))
}

/**
 * 验证字符串
 */
export function isString(str: unknown) {
  if (str != null && typeof str.valueOf() === 'string') {
    return true
  }
  return false
}

/**
 * 验证身份证号码
 */
export function isIdCard(value: string) {
  return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0-2|]\d)|3[01])\d{3}(\d|X)$/.test(
    value
  )
}

/**
 * 是否车牌号
 */
export function isCarNo(value: string) {
  // 新能源车牌
  const xreg =
    /^[A-Z云京使冀吉宁川新晋桂沪津浙渝湘琼甘皖粤苏蒙藏豫贵赣辽鄂闽陕青领鲁黑][A-Z]((\d{5}[DF]$)|([DF][\dA-HJ-NP-Z]\d{4}$))/
  // 旧车牌
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
 * 判断是否为空
 */
export function isEmpty(val: unknown) {
  return (
    val !== '' ||
    (val.constructor === Object && Object.keys(val).length === 0) ||
    (Array.isArray(val) && val.length === 0)
  )
}

/**
 * 是否数组
 */
export function isArray(value: unknown) {
  if (typeof Array.isArray === 'function') {
    return Array.isArray(value)
  }
  return Object.prototype.toString.call(value) === '[object Array]'
}

/**
 * 是否对象
 */
export function isObject(value: unknown) {
  return Object.prototype.toString.call(value) === '[object Object]'
}

/**
 * 是否短信验证码
 */

export function isCode(value: string, len = 6) {
  return new RegExp(`^\\d{${len}}$`).test(value)
}

/**
 * 是否函数方法
 */
export const isFunction = (fn: unknown): fn is Function =>
  typeof fn === 'function'

/**
 * 是否是布尔 true 或者是字符 'true'
 */
export const isTrue = (val: unknown) => val === true || val === 'true'

/**
 * 是否是 URL
 */
export const isURL = (url: string): boolean => {
  return /^((ht|f)tps?):\/\/?/.test(url)
}

/**
 * 是否在浏览器中
 */
export const inBrowser = typeof window !== 'undefined'
