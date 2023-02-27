import { uniqBy } from '../src'

describe('uniqBy', () => {
  test('数组元素为基本类型去重', () => {
    expect(uniqBy([1, 3, 4, 5, 5, 4])).toEqual([1, 3, 4, 5])
  })

  test('数组元素为对象去重', () => {
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
})
