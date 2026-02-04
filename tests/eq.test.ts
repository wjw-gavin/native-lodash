import { eq } from '../src'

describe('eq', () => {
  test('performs SameValueZero comparison', () => {
    const object = { a: 1 }
    const other = { a: 1 }

    expect(eq(object, object)).toBeTruthy()
    expect(eq(object, other)).toBeFalsy()

    expect(eq('a', 'a')).toBeTruthy()
    expect(eq(Number.NaN, Number.NaN)).toBeTruthy()
  })
})
