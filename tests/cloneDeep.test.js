import { cloneDeep } from '../packages'

test('深度克隆对象', () => {
  const obj = {
    name: 'Gavin'
  }

  // 相等
  const cloneObj = obj
  cloneObj.name = 'wjw'

  // 深度克隆不相等
  const cloneDeepObj = cloneDeep(obj)
  cloneDeepObj.name = 'wjw'

  expect(cloneObj).toBe(obj)
  expect(cloneDeepObj).not.toBe(obj)
})
