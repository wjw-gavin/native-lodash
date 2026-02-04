import { timeFormat } from '../src'

describe('timeFormat', () => {
  test('format datetime', () => {
    const date = new Date()
    const y = date.getFullYear().toString() // Year
    const m = (date.getMonth() + 1).toString().padStart(2, '0') // Month
    const d = date.getDate().toString().padStart(2, '0') // Day
    const h = date.getHours().toString().padStart(2, '0') // Hour
    const M = date.getMinutes().toString().padStart(2, '0') // Minute
    const s = date.getSeconds().toString().padStart(2, '0') // Second

    expect(timeFormat('2025-06-02', 'yyyy/mm/dd')).toBe('2025/06/02')
    expect(timeFormat(date.getTime())).toBe(`${y}-${m}-${d}`)
    expect(timeFormat(date.getTime(), 'yyyy/mm/dd')).toBe(`${y}/${m}/${d}`)
    expect(timeFormat(date.getTime(), 'yyyy-mm-dd hh:MM:ss')).toBe(
      `${y}-${m}-${d} ${h}:${M}:${s}`
    )
  })
})
