import { trim } from '../packages'

describe('trim', () => {
  test('去除两端空格 both', () => {
    expect(trim(' 12 12 ')).toBe('12 12')
  })

  test('去除左边空格 left', () => {
    expect(trim(' 12 12 ', 'left')).toBe('12 12 ')
  })

  test('去除右边空格 right', () => {
    expect(trim(' 12 12 ', 'right')).toBe(' 12 12')
  })

  test('去除所有空格 all', () => {
    expect(trim(' 12 12 ', 'all')).toBe('1212')
  })
})
