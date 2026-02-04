/**
 * Creates a debounced function that delays invoking fn until after ms milliseconds have elapsed since the last time the debounced function was invoked
 * @param fn The function to debounce
 * @param ms The number of milliseconds to delay
 * @param immediate Whether to invoke the function on the leading edge
 */

export const debounce = (
  fn: (...args: any[]) => any,
  ms = 0,
  immediate = false
) => {
  let invoked = false
  let timer: ReturnType<typeof setTimeout>

  return function (this: unknown, ...args: any[]) {
    if (timer) clearTimeout(timer)
    if (immediate && !invoked) {
      Reflect.apply(fn, this, args)
      invoked = true
    } else {
      timer = setTimeout(() => {
        Reflect.apply(fn, this, args)
        invoked = false
      }, ms)
    }
  }
}
