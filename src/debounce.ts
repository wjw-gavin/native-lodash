/**
 * 创建一个 debounced（防抖动）函数，该函数会从上一次被调用后，延迟 wait 毫秒后调用 func 方法
 */

export const debounce = (fn: (...args: any[]) => any, ms = 0) => {
  let timer: ReturnType<typeof setTimeout>
  return function (this: unknown, ...args: any[]) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => fn.apply(this, args), ms)
  }
}
