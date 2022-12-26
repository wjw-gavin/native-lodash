/**
 * @description 深度克隆
 * @param {object} obj 需要深度克隆的对象
 * @returns {*} 克隆后的对象或者原值（不是对象）
 */

export const cloneDeep = (obj) => {
  if ([null, undefined, NaN, false].includes(obj)) return obj

  // 原始类型直接返回
  if (typeof obj !== 'object' && typeof obj !== 'function') {
    return obj
  }

  const clone = Array.isArray(obj) ? [] : {}
  for (const i in obj) {
    if (obj.hasOwnProperty(i)) {
      clone[i] = typeof obj[i] === 'object' ? deepClone(obj[i]) : obj[i]
    }
  }
  return clone
}
