import { toFixed } from '../src'

describe('toFixed', () => {
  // 0.345.toFixed(2) = 0.34

  test('四舍五入保留N位小数', () => {
    expect(toFixed(0.345, 2)).toBe(0.35)
    expect(toFixed(0.345, 0)).toBe(0)
  })
})
