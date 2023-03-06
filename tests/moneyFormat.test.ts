import { moneyFormat } from '../src'

describe('moneyFormat', () => {
  test('数字格式化', () => {
    expect(moneyFormat(3002.2345)).toBe('3,002')
    expect(moneyFormat(3002.245, 2)).toBe('3,002.25')
  })
})
