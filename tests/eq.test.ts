import { eq } from '../src'

describe('eq', () => {
  test('执行 SameValueZero 比较两者的值，来确定它们是否相等', () => {
    const object = { a: 1 }
    const other = { a: 1 }

    expect(eq(object, object)).toBeTruthy()
    expect(eq(object, other)).toBeFalsy()

    expect(eq('a', 'a')).toBeTruthy()
    expect(eq(Number.NaN, Number.NaN)).toBeTruthy()
  })
})
