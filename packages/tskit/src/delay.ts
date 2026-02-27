import { isFunction } from '.'

/**
 * @description Invokes fn after wait milliseconds. Any additional arguments are provided to fn when it's invoked.
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
