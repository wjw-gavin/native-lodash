import { isEqual } from '../src'

describe('isEqual', () => {
  test('判断对象是否相等。', () => {
    const obj = {
      name: 'a'
    }
    const other = {
      name: 'a'
    }
    const deepObj = { a: 'a', b: { c: 'c' } }
    const deepOther = { a: 'a', b: { c: 'c' } }
    const deepErr = { a: 'a', b: { c: 'd' } }

    expect(isEqual(obj, other)).toBeTruthy()
    expect(isEqual(deepObj, deepOther)).toBeTruthy()
    expect(isEqual(deepObj, deepErr)).toBeFalsy()
  })

  test('判断数组是否相等。', () => {
    const arr = [1, 2, 3]
    const arrOther = [1, 2, 3]
    const arrErr = [1, 2, 3, 4]

    const arrObj = [{ a: 'a' }, { b: 'b' }]
    const arrObjOther = [{ a: 'a' }, { b: 'b' }]

    expect(isEqual(arr, arrOther)).toBeTruthy()
    expect(isEqual(arrObj, arrObjOther)).toBeTruthy()
    expect(isEqual(arr, arrErr)).toBeFalsy()
  })
})
