/**
 * 创建一个 debounced（防抖动）函数，该函数会从上一次被调用后，延迟 wait 毫秒后调用 func 方法
 * @param fn 需要防抖的函数
 * @param ms 毫秒数
 * @param immediate 是否立即执行
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
