import { debounce } from '../src'
import { vi } from 'vitest'

describe('debounce', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  test('delays function execution', () => {
    const fn = vi.fn()
    const debouncedFn = debounce(fn, 100)

    debouncedFn()
    expect(fn).not.toBeCalled()

    vi.advanceTimersByTime(50)
    expect(fn).not.toBeCalled()

    vi.advanceTimersByTime(50)
    expect(fn).toBeCalledTimes(1)
  })

  test('only executes last call when called multiple times', () => {
    const fn = vi.fn()
    const debouncedFn = debounce(fn, 100)

    debouncedFn()
    debouncedFn()
    debouncedFn()

    vi.advanceTimersByTime(100)
    expect(fn).toBeCalledTimes(1)
  })

  test('immediate parameter - executes immediately', () => {
    const fn = vi.fn()
    const debouncedFn = debounce(fn, 100, true)

    debouncedFn()
    expect(fn).toBeCalledTimes(1)

    // Calling again during delay does not trigger immediately, sets timer
    debouncedFn()
    expect(fn).toBeCalledTimes(1)

    // Timer expires, executes second call
    vi.advanceTimersByTime(100)
    expect(fn).toBeCalledTimes(2)

    // After delay, invoked resets, can execute immediately again
    debouncedFn()
    expect(fn).toBeCalledTimes(3)
  })

  test('passes arguments', () => {
    const fn = vi.fn()
    const debouncedFn = debounce(fn, 100)

    debouncedFn('a', 'b')
    vi.advanceTimersByTime(100)

    expect(fn).toBeCalledWith('a', 'b')
  })

  test('preserves this context', () => {
    const obj = {
      value: 42,
      getValue: debounce(function (this: any) {
        return this.value
      }, 100)
    }

    obj.getValue()
    vi.advanceTimersByTime(100)
    expect(obj.value).toBe(42)
  })
})
