import { timeFrom, timeFormat } from '../src'

describe('timeFrom', () => {
  const date = new Date()
  const timestamp = date.getTime()

  test('刚刚', () => {
    expect(timeFrom(timestamp)).toBe('刚刚')
  })

  test('几分钟前', () => {
    expect(timeFrom(timestamp - 60000)).toBe('1分钟前')
  })

  test('几小时前', () => {
    expect(timeFrom(timestamp - 3600000)).toBe('1小时前')
  })

  test('昨天', () => {
    expect(timeFrom(timestamp - 86400000)).toBe('昨天')
  })

  test('几天前', () => {
    expect(timeFrom(timestamp - 172800000)).toBe('2天前')
  })

  test('几个月前', () => {
    expect(timeFrom(timestamp - 2592000000, false)).toBe('1个月前')
  })

  test('几年前', () => {
    expect(timeFrom(timestamp - 86400 * 365 * 1000, false)).toBe('1年前')
  })

  test('超出一定时间范围，返回固定的时间格式', () => {
    const s = timestamp - 2592000000
    expect(timeFrom(s)).toBe(timeFormat(s))
  })
})
