/**
 * 创建一个节流函数，在 wait 秒内最多执行 func 一次的函数。
 */

export const throttle = (func, time) => {
  let activeTime = 0
  return function (...args) {
    const current = Date.now()
    if (current - activeTime > time) {
      Reflect.apply(func, this, args)
      activeTime = Date.now()
    }
  }
}
