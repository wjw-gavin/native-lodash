import { isFunction } from '.'

/**
 * @description 延迟 wait 毫秒后调用 fn。 调用时，任何附加的参数会传给 fn。
 */

export function delay(fn: (...args: any[]) => any, wait = 0, ...args: any[]) {
  if (!isFunction(fn)) {
    throw new TypeError('Expected a function')
  }
  return setTimeout(fn, wait, ...args)
}

export function later(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay)
  })
}
