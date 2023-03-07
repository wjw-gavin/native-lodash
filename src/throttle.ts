/**
 * 创建一个节流函数，在 wait 秒内最多执行 func 一次的函数。
 */

export const throttle = (func: (...args: any[]) => any, time = 0) => {
  let activeTime = 0

  return function (this: unknown, ...args: any[]) {
    const current = Date.now()
    if (current - activeTime > time) {
      Reflect.apply(func, this, args)
      activeTime = Date.now()
    }
  }
}
