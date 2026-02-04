import { isEqual } from '../src'

describe('isEqual', () => {
  test('check if objects are equal', () => {
    const obj = { name: 'a' }
    const other = { name: 'a' }
    const deepObj = { a: 'a', b: { c: 'c' } }
    const deepOther = { a: 'a', b: { c: 'c' } }
    const deepErr = { a: 'a', b: { c: 'd' } }

    expect(isEqual(obj, other)).toBeTruthy()
    expect(isEqual(deepObj, deepOther)).toBeTruthy()
    expect(isEqual(deepObj, deepErr)).toBeFalsy()
  })

  test('check if arrays are equal', () => {
    const arr = [1, 2, 3]
    const arrOther = [1, 2, 3]
    const arrErr = [1, 2, 3, 4]

    const arrObj = [{ a: 'a' }, { b: 'b' }]
    const arrObjOther = [{ a: 'a' }, { b: 'b' }]

    expect(isEqual(arr, arrOther)).toBeTruthy()
    expect(isEqual(arrObj, arrObjOther)).toBeTruthy()
    expect(isEqual(arr, arrErr)).toBeFalsy()
  })

  test('compare NaN', () => {
    expect(isEqual(NaN, NaN)).toBeTruthy()
    expect(isEqual(NaN, 1)).toBeFalsy()
  })

  test('compare Date', () => {
    const date1 = new Date('2024-01-01')
    const date2 = new Date('2024-01-01')
    const date3 = new Date('2024-01-02')

    expect(isEqual(date1, date2)).toBeTruthy()
    expect(isEqual(date1, date3)).toBeFalsy()
  })

  test('compare RegExp', () => {
    expect(isEqual(/test/gi, /test/gi)).toBeTruthy()
    expect(isEqual(/test/g, /test/i)).toBeFalsy()
    expect(isEqual(/test/, /other/)).toBeFalsy()
  })

  test('compare Map', () => {
    const map1 = new Map([
      ['a', 1],
      ['b', 2]
    ])
    const map2 = new Map([
      ['a', 1],
      ['b', 2]
    ])
    const map3 = new Map([
      ['a', 1],
      ['b', 3]
    ])

    expect(isEqual(map1, map2)).toBeTruthy()
    expect(isEqual(map1, map3)).toBeFalsy()
  })

  test('compare Set', () => {
    const set1 = new Set([1, 2, 3])
    const set2 = new Set([1, 2, 3])
    const set3 = new Set([1, 2, 4])

    expect(isEqual(set1, set2)).toBeTruthy()
    expect(isEqual(set1, set3)).toBeFalsy()
  })

  test('compare primitives', () => {
    expect(isEqual(1, 1)).toBeTruthy()
    expect(isEqual('a', 'a')).toBeTruthy()
    expect(isEqual(true, true)).toBeTruthy()
    expect(isEqual(1, 2)).toBeFalsy()
    expect(isEqual(null, null)).toBeTruthy()
    expect(isEqual(undefined, undefined)).toBeTruthy()
    expect(isEqual(null, undefined)).toBeFalsy()
  })

  test('type mismatch returns false', () => {
    expect(isEqual([], {})).toBeFalsy()
    expect(isEqual(new Date(), {})).toBeFalsy()
    expect(isEqual(1, '1')).toBeFalsy()
  })
})
