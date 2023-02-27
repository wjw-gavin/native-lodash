import { flattenDeep } from '../src'

test('递归展平数组', () => {
  const arrBase = [1, [[2], [3, [4]], 5]]

  expect(flattenDeep(arrBase)).toEqual([1, 2, 3, 4, 5])

  const arrObj = [{ a: 'a' }, [{ b: 'b' }, { c: 'c' }, [{ d: 'd' }]], [{ e: 'e' }]]
  const targetArr = [{ a: 'a' }, { b: 'b' }, { c: 'c' }, { d: 'd' }, { e: 'e' }]

  expect(flattenDeep(arrObj)).toEqual(targetArr)
})
