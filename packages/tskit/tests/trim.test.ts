import { trim } from '../src'

describe('trim', () => {
  test('trim both sides', () => {
    expect(trim(' 12 12 ')).toBe('12 12')
  })

  test('trim left side', () => {
    expect(trim(' 12 12 ', 'left')).toBe('12 12 ')
  })

  test('trim right side', () => {
    expect(trim(' 12 12 ', 'right')).toBe(' 12 12')
  })

  test('trim all whitespace', () => {
    expect(trim(' 12 12 ', 'all')).toBe('1212')
  })
})
