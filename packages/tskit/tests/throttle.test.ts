import { throttle } from '../src'
import { vi } from 'vitest'

describe('throttle', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  test('executes first call immediately', () => {
    const fn = vi.fn()
    const throttledFn = throttle(fn, 100)

    throttledFn()
    expect(fn).toBeCalledTimes(1)
  })

  test('does not repeat execution within throttle time', () => {
    const fn = vi.fn()
    const throttledFn = throttle(fn, 100)

    throttledFn()
    throttledFn()
    throttledFn()

    expect(fn).toBeCalledTimes(1)
  })

  test('can execute again after throttle time', () => {
    const fn = vi.fn()
    const throttledFn = throttle(fn, 100)

    throttledFn()
    expect(fn).toBeCalledTimes(1)

    vi.advanceTimersByTime(50)
    throttledFn()
    expect(fn).toBeCalledTimes(1)

    vi.advanceTimersByTime(51)
    throttledFn()
    expect(fn).toBeCalledTimes(2)
  })

  test('passes arguments', () => {
    const fn = vi.fn()
    const throttledFn = throttle(fn, 100)

    throttledFn('a', 'b')
    expect(fn).toBeCalledWith('a', 'b')
  })

  test('preserves this context', () => {
    const obj = {
      value: 42,
      getValue: throttle(function (this: any) {
        return this.value
      }, 100)
    }

    obj.getValue()
    expect(obj.value).toBe(42)
  })
})
