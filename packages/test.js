/**
 * 验证电子邮箱格式
 */
function email(value) {
  return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(
    value
  )
}

/**
 * 验证手机格式
 */
function mobile(value) {
  const reg = /^1[3-9]\d{9}$/
  return reg.test(str.toString())
}

/**
 * 验证字符串
 */
function string(str) {
  if (str != null && typeof str.valueOf() === 'string') {
    return true
  }
  return false
}

/**
 * 验证身份证号码
 */
function idCard(value) {
  return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(
    value
  )
}

/**
 * 是否车牌号
 */
function carNo(value) {
  // 新能源车牌
  const xreg =
    /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/
  // 旧车牌
  const creg =
    /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/
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
function empty(obj) {
  return (
    [Object, Array].includes((obj || {}).constructor) && !Object.entries(obj || {}).length
  )
}

/**
 * 是否数组
 */
function array(value) {
  if (typeof Array.isArray === 'function') {
    return Array.isArray(value)
  }
  return Object.prototype.toString.call(value) === '[object Array]'
}

/**
 * 是否对象
 */
function object(value) {
  return Object.prototype.toString.call(value) === '[object Object]'
}

/**
 * 是否短信验证码
 * @param {String} value 验证码字符串
 * @param {Number} len 验证码长度，默认为6
 */

function code(value, len = 6) {
  return new RegExp(`^\\d{${len}}$`).test(value)
}

/**
 * 是否函数方法
 */
const func = (func) => typeof func === 'function'

export default {
  email,
  mobile,
  string,
  idCard,
  carNo,
  empty,
  isEmpty: empty,
  object,
  array,
  code,
  func
}
