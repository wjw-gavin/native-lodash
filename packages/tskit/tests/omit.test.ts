import { omit } from '../src'

describe('omit', () => {
  test('removes specified properties from object', () => {
    const object = { a: 1, b: '2', c: 3 }

    expect(omit(object, 'a')).toEqual({ b: '2', c: 3 })
    expect(omit(object, ['b', 'c'])).toEqual({ a: 1 })
  })
})
