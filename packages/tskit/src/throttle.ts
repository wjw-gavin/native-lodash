/**
 * @description Creates a throttled function that only invokes fn at most once per every wait milliseconds.
 */

export const throttle = (fn: (...args: any[]) => any, time = 0) => {
  let activeTime = 0

  return function (this: unknown, ...args: any[]) {
    const current = Date.now()
    if (current - activeTime > time) {
      Reflect.apply(fn, this, args)
      activeTime = Date.now()
    }
  }
}
