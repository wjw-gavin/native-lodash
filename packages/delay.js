/**
 * @description 延迟 wait 毫秒后调用 func。 调用时，任何附加的参数会传给func。
 * @param {Function} func 要延迟的函数
 * @param {number} wait 要延迟的毫秒数
 * @param {...*} [args] 会在调用时传入到 func 的参数。
 * @returns {number} 返回计时器 id
 */

export function delay(func, wait, ...args) {
  if (typeof func !== 'function') {
    throw new TypeError('Expected a function')
  }
  return setTimeout(func, +wait || 0, ...args)
}
