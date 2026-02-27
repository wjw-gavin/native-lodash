import { timeFormat, timeFrom } from '../src'

describe('timeFrom', () => {
  const date = new Date()
  const timestamp = date.getTime()

  test('just now', () => {
    expect(timeFrom(timestamp)).toBe('刚刚')
  })

  test('minutes ago', () => {
    expect(timeFrom(timestamp - 60000)).toBe('1分钟前')
  })

  test('hours ago', () => {
    expect(timeFrom(timestamp - 3600000)).toBe('1小时前')
  })

  test('yesterday', () => {
    expect(timeFrom(timestamp - 86400000)).toBe('昨天')
  })

  test('days ago', () => {
    expect(timeFrom(timestamp - 172800000)).toBe('2天前')
  })

  test('months ago', () => {
    expect(timeFrom(timestamp - 2592000000)).toBe('1个月前')
  })

  test('years ago', () => {
    expect(timeFrom(timestamp - 86400 * 365 * 1000)).toBe('1年前')
  })

  test('custom format for older dates', () => {
    const s = timestamp - 2592000000
    expect(timeFrom(s, 'yyyy-mm-dd')).toBe(timeFormat(s))
  })
})
