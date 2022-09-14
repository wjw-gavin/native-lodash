import { has } from '../packages'

test('检查一个对象中是否包含某个key', () => {
  const obj = {
    a: 1,
    b: 'settings',
    c: { d: 'test' },
    x: {
      y: {
        z: 'deep'
      }
    }
  }
  expect(has(obj, 'a')).toBeTruthy()
  expect(has(obj, 'c.d')).toBeTruthy()
  expect(has(obj, 'x.y.z')).toBeTruthy()
  expect(has(obj, 'd')).toBeFalsy()
  expect(has(obj, 'a.c')).toBeFalsy()
})
