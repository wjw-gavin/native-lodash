import { toFixed } from '../src'

describe('toFixed', () => {
  test('round to N decimal places', () => {
    expect(toFixed(0.345, 2)).toBe('0.35')
    expect(toFixed(0.345, 0)).toBe('0')
    expect(toFixed('1.00', 2)).toBe('1.00')
  })
})
