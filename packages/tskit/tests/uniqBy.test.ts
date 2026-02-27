import { uniqBy } from '../src'

describe('uniqBy', () => {
  test('dedupe array of primitives', () => {
    expect(uniqBy([1, 3, 4, 5, 5, 4])).toEqual([1, 3, 4, 5])
    expect(uniqBy(['a', 'b', 'a', 'c'])).toEqual(['a', 'b', 'c'])
  })

  test('dedupe array of objects by property name', () => {
    const val = [
      { id: 1, name: 'cat' },
      { id: 2, name: 'dog' },
      { id: 3, name: 'tiger' },
      { id: 1, name: 'sheep' }
    ]
    const target = [
      { id: 1, name: 'cat' },
      { id: 2, name: 'dog' },
      { id: 3, name: 'tiger' }
    ]

    expect(uniqBy(val, 'id')).toEqual(target)
  })

  test('dedupe array of objects by function', () => {
    const val = [
      { x: 1, y: 2 },
      { x: 2, y: 4 },
      { x: 1, y: 3 }
    ]
    const target = [
      { x: 1, y: 2 },
      { x: 2, y: 4 }
    ]

    expect(uniqBy(val, (item) => item.x)).toEqual(target)
  })

  test('handles empty array', () => {
    expect(uniqBy([])).toEqual([])
    expect(uniqBy([], 'id')).toEqual([])
  })

  test('preserves order (first occurrence wins)', () => {
    const val = [
      { id: 1, value: 'first' },
      { id: 1, value: 'second' }
    ]

    expect(uniqBy(val, 'id')[0].value).toBe('first')
  })
})
