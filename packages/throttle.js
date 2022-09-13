/**
 * Create a new function that calls func
 */

export const throttle = (func, time) => {
  let activeTime = 0
  return () => {
    const current = Date.now()
    if (current - activeTime > time) {
      func.apply(this, arguments)
      activeTime = Date.now()
    }
  }
}
