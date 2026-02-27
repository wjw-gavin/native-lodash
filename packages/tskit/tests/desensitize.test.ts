import { desensitize } from '../src'

describe('desensitize', () => {
  test('mask name', () => {
    expect(desensitize('王小二', 0, 2)).toBe('*小二')
    expect(desensitize('王小二', 1, 1)).toBe('王*二')
  })

  test('mask phone number', () => {
    expect(desensitize('18088888888')).toBe('180****8888')
    expect(desensitize('18088888888', 3, 4, '-')).toBe('180----8888')
  })

  test('mask bank card number', () => {
    expect(desensitize('6221123443210045', 4, 4)).toBe('6221********0045')
  })

  test('returns original when length is too short', () => {
    expect(desensitize('abc', 3, 4)).toBe('abc')
    expect(desensitize('1234567', 3, 4)).toBe('1234567')
  })
})
