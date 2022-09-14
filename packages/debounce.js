/**
 * Create a new function that calls func
 */

export const debounce = (fn, ms = 0) => {
  let timer
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => fn.apply(this, args), ms)
  }
}
