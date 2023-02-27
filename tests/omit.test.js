import { omit } from '../src'

describe('omit', () => {
  test('可以理解为删除object对象的属性', () => {
    const object = { a: 1, b: '2', c: 3 }

    expect(omit(object, 'a')).toEqual({ b: '2', c: 3 })
    expect(omit(object, ['b', 'c'])).toEqual({ a: 1 })
  })
})
