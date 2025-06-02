import type { Numeric } from './types'

export type TimeFormatItem = 'y' | 'm' | 'd' | 'h' | 'M' | 's'

/**
 * @description 格式化时间
 * @param dateTime 需要格式化的时间
 * @param format 格式化规则 yyyy:mm:dd|yyyy:mm|yyyy年mm月dd日|yyyy年mm月dd日 hh时MM分等,可自定义组合 默认yyyy-mm-dd
 */

export function timeFormat(dateTime: Numeric, format = 'yyyy-mm-dd') {
  let date: Date

  // 若传入时间为假值，则取当前时间
  if (!dateTime) {
    date = new Date()
  }

  // 若为unix秒时间戳，则转为毫秒时间戳
  else if (/^\d{10}$/.test(dateTime?.toString().trim())) {
    date = new Date(+dateTime * 1000)
  }

  // 若用户传入字符串格式时间戳，new Date无法解析，需做兼容
  else if (typeof dateTime === 'string' && /^\d+$/.test(dateTime.trim())) {
    date = new Date(Number(dateTime))
  }
  // 处理平台性差异，在Safari/Webkit中，new Date仅支持/作为分割符的字符串时间
  else if (
    typeof dateTime === 'string' &&
    dateTime.includes('-') &&
    !dateTime.includes('T')
  ) {
    date = new Date(dateTime.replace(/-/g, '/'))
  }
  // 其他都认为符合 RFC 2822 规范
  else {
    date = new Date(dateTime)
  }
  const timeSource = {
    y: date.getFullYear().toString(), // 年
    m: (date.getMonth() + 1).toString().padStart(2, '0'), // 月
    d: date.getDate().toString().padStart(2, '0'), // 日
    h: date.getHours().toString().padStart(2, '0'), // 时
    M: date.getMinutes().toString().padStart(2, '0'), // 分
    s: date.getSeconds().toString().padStart(2, '0') // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  }

  Object.keys(timeSource).forEach((key) => {
    const [ret] = new RegExp(`${key}+`).exec(format) || []
    if (ret) {
      // 年可能只需展示两位
      const beginIndex = key === 'y' && ret.length === 2 ? 2 : 0
      format = format.replace(
        ret,
        timeSource[key as TimeFormatItem].slice(beginIndex)
      )
    }
  })

  return format
}
