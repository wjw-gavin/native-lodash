import { timeFormat } from '../src'

describe('timeFormat', () => {
  test('格式化时间', () => {
    const date = new Date()
    const y = date.getFullYear().toString() // 年
    const m = (date.getMonth() + 1).toString().padStart(2, '0') // 月
    const d = date.getDate().toString().padStart(2, '0') // 日
    const h = date.getHours().toString().padStart(2, '0') // 时
    const M = date.getMinutes().toString().padStart(2, '0') // 分
    const s = date.getSeconds().toString().padStart(2, '0') // 秒

    expect(timeFormat(date.getTime())).toBe(`${y}-${m}-${d}`)
    expect(timeFormat(date.getTime(), 'yyyy/mm/dd')).toBe(`${y}/${m}/${d}`)
    expect(timeFormat(date.getTime(), 'yyyy-mm-dd hh:MM:ss')).toBe(
      `${y}-${m}-${d} ${h}:${M}:${s}`
    )
  })
})
