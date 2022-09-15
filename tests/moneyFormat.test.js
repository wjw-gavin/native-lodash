import { moneyFormat } from '../packages'

describe('moneyFormat', () => {
  test('数字格式化', () => {
    const a = 3002.2345

    expect(moneyFormat(3002.2345)).toBe('3,002')
    expect(moneyFormat(3002.245, 2)).toBe('3,002.25')
  })
})
