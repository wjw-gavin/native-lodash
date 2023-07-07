import { isFunction } from '.'

/**
 * @description 延迟 wait 毫秒后调用 func。 调用时，任何附加的参数会传给func。
 */

export function delay(func: (...args: any[]) => any, wait = 0, ...args: any[]) {
  if (!isFunction(func)) {
    throw new TypeError('Expected a function')
  }
  return setTimeout(func, wait, ...args)
}

export function later(delay = 0): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, delay)
  })
}
