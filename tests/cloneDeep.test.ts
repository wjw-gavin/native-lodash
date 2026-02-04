import { cloneDeep } from '../src'

describe('cloneDeep', () => {
  test('deep clone plain object', () => {
    const obj = { name: 'Gavin', nested: { value: 1 } }
    const cloned = cloneDeep(obj)

    expect(cloned).toEqual(obj)
    expect(cloned).not.toBe(obj)
    expect(cloned.nested).not.toBe(obj.nested)
  })

  test('deep clone array', () => {
    const arr = [1, [2, 3], { a: 4 }]
    const cloned = cloneDeep(arr)

    expect(cloned).toEqual(arr)
    expect(cloned).not.toBe(arr)
    expect(cloned[1]).not.toBe(arr[1])
  })

  test('clone Date', () => {
    const date = new Date('2024-01-01')
    const cloned = cloneDeep(date)

    expect(cloned).toEqual(date)
    expect(cloned).not.toBe(date)
    expect(cloned instanceof Date).toBe(true)
  })

  test('clone RegExp', () => {
    const regex = /test/gi
    const cloned = cloneDeep(regex)

    expect(cloned.source).toBe(regex.source)
    expect(cloned.flags).toBe(regex.flags)
    expect(cloned).not.toBe(regex)
  })

  test('clone Map', () => {
    const map = new Map<string, unknown>([
      ['a', 1],
      ['b', { nested: 2 }]
    ])
    const cloned = cloneDeep(map)

    expect(cloned.get('a')).toBe(1)
    expect(cloned.get('b')).toEqual({ nested: 2 })
    expect(cloned.get('b')).not.toBe(map.get('b'))
    expect(cloned).not.toBe(map)
  })

  test('clone Set', () => {
    const set = new Set([1, 2, { a: 3 }])
    const cloned = cloneDeep(set)

    expect(cloned.size).toBe(3)
    expect(cloned.has(1)).toBe(true)
    expect(cloned).not.toBe(set)
  })

  test('handle circular references', () => {
    const obj: any = { name: 'test' }
    obj.self = obj

    const cloned = cloneDeep(obj)

    expect(cloned.name).toBe('test')
    expect(cloned.self).toBe(cloned)
    expect(cloned).not.toBe(obj)
  })

  test('handle null and undefined', () => {
    expect(cloneDeep(null)).toBe(null)
    expect(cloneDeep(undefined)).toBe(undefined)
  })

  test('handle primitives', () => {
    expect(cloneDeep(42)).toBe(42)
    expect(cloneDeep('hello')).toBe('hello')
    expect(cloneDeep(true)).toBe(true)
  })
})
