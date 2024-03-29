import { toFixed } from '../src'

describe('toFixed', () => {
  test('四舍五入保留N位小数', () => {
    expect(toFixed(0.345, 2)).toBe('0.35')
    expect(toFixed(0.345, 0)).toBe('0')
    expect(toFixed('1.00', 2)).toBe('1.00')
  })
})
