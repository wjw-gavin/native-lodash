import { delay, later } from '../src'
import { vi } from 'vitest'

describe('delay', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  test('delays function execution', () => {
    const fn = vi.fn()
    delay(fn, 100)

    expect(fn).not.toBeCalled()
    vi.advanceTimersByTime(100)
    expect(fn).toBeCalledTimes(1)
  })

  test('passes arguments to delayed function', () => {
    const fn = vi.fn()
    delay(fn, 100, 'arg1', 'arg2')

    vi.advanceTimersByTime(100)
    expect(fn).toBeCalledWith('arg1', 'arg2')
  })

  test('default delay time is 0', () => {
    const fn = vi.fn()
    delay(fn)

    vi.advanceTimersByTime(0)
    expect(fn).toBeCalledTimes(1)
  })

  test('throws TypeError for non-function', () => {
    expect(() => delay('not a function' as any, 100)).toThrow(TypeError)
    expect(() => delay('not a function' as any, 100)).toThrow(
      'Expected a function'
    )
  })

  test('returns setTimeout ID', () => {
    const fn = vi.fn()
    const timerId = delay(fn, 100)

    expect(timerId).toBeDefined()
    clearTimeout(timerId)
    vi.advanceTimersByTime(100)
    expect(fn).not.toBeCalled()
  })
})

describe('later', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  test('returns Promise', () => {
    const result = later(100)
    expect(result).toBeInstanceOf(Promise)
  })

  test('resolves after specified delay', async () => {
    const fn = vi.fn()
    later(100).then(fn)

    expect(fn).not.toBeCalled()
    vi.advanceTimersByTime(100)
    await Promise.resolve()
    expect(fn).toBeCalledTimes(1)
  })

  test('default delay time is 0', async () => {
    const fn = vi.fn()
    later().then(fn)

    vi.advanceTimersByTime(0)
    await Promise.resolve()
    expect(fn).toBeCalledTimes(1)
  })
})
