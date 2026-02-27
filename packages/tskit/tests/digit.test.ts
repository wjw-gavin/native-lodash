import { times, plus, minus, divide, round } from '../src/utils/digit'

describe('digit - High precision math operations', () => {
  describe('times - High precision multiplication', () => {
    test('basic multiplication', () => {
      expect(times(2, 3)).toBe(6)
      expect(times(0.1, 0.2)).toBe(0.02)
      expect(times(0.7, 180)).toBe(126)
    })

    test('multiple numbers multiplication', () => {
      expect(times(2, 3, 4)).toBe(24)
      expect(times(0.1, 0.1, 0.1)).toBe(0.001)
    })

    test('handles floating point precision issues', () => {
      // Native JS: 0.1 * 0.2 = 0.020000000000000004
      expect(times(0.1, 0.2)).toBe(0.02)
      expect(times(19.9, 100)).toBe(1990)
    })
  })

  describe('plus - High precision addition', () => {
    test('basic addition', () => {
      expect(plus(1, 2)).toBe(3)
      expect(plus(0.1, 0.2)).toBe(0.3)
    })

    test('multiple numbers addition', () => {
      expect(plus(1, 2, 3)).toBe(6)
      expect(plus(0.1, 0.2, 0.3)).toBe(0.6)
    })

    test('handles floating point precision issues', () => {
      // Native JS: 0.1 + 0.2 = 0.30000000000000004
      expect(plus(0.1, 0.2)).toBe(0.3)
    })
  })

  describe('minus - High precision subtraction', () => {
    test('basic subtraction', () => {
      expect(minus(5, 3)).toBe(2)
      expect(minus(0.3, 0.1)).toBe(0.2)
    })

    test('multiple numbers subtraction', () => {
      expect(minus(10, 3, 2)).toBe(5)
    })

    test('handles floating point precision issues', () => {
      // Native JS: 1.0 - 0.9 = 0.09999999999999998
      expect(minus(1.0, 0.9)).toBe(0.1)
    })
  })

  describe('divide - High precision division', () => {
    test('basic division', () => {
      expect(divide(6, 2)).toBe(3)
      expect(divide(0.3, 0.1)).toBe(3)
    })

    test('multiple numbers division', () => {
      expect(divide(24, 2, 3)).toBe(4)
    })

    test('handles floating point precision issues', () => {
      expect(divide(0.3, 0.1)).toBe(3)
      expect(divide(1.21, 1.1)).toBe(1.1)
    })
  })

  describe('round - Round to decimal places', () => {
    test('basic rounding', () => {
      expect(round(1.234, 2)).toBe(1.23)
      expect(round(1.235, 2)).toBe(1.24)
      expect(round(1.5, 0)).toBe(2)
    })

    test('negative number rounding', () => {
      expect(round(-1.234, 2)).toBe(-1.23)
      expect(round(-1.235, 2)).toBe(-1.24)
    })

    test('handles edge cases', () => {
      expect(round(0, 2)).toBe(0)
      expect(round(1.005, 2)).toBe(1.01)
    })
  })
})
