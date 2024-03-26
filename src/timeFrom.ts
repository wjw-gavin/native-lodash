import { timeFormat } from './timeFormat'
import type { Numeric } from './types'

/**
 * @description 时间戳转为多久之前
 * @param timestamp 时间戳
 * @param format 格式化规则,超出一定时间范围，返回固定的时间格式
 */

export function timeFrom(timestamp: Numeric, format = '') {
  if (!timestamp) timestamp = Date.now()

  timestamp = parseInt(String(timestamp))
  if (timestamp.toString().length === 10) timestamp *= 1000
  let timer = Date.now() - timestamp
  timer = parseInt(String(timer / 1000))
  let tips = ''
  switch (true) {
    // 如果小于1分钟,则返回"刚刚",其他以此类推
    case timer < 60:
      tips = '刚刚'
      break
    // 1分钟-1小时之间
    case timer >= 60 && timer < 3600:
      tips = `${parseInt(String(timer / 60))}分钟前`
      break
    // 1小时-24小时之间
    case timer >= 3600 && timer < 86400:
      tips = `${parseInt(String(timer / 3600))}小时前`
      break
    // 24小时-48小时之间
    case timer >= 86400 && timer < 172800:
      tips = '昨天'
      break
    // 大于 48 小时
    case timer >= 172800 && timer < 2592000:
      tips = `${parseInt(String(timer / 86400))}天前`
      break
    default:
      if (!format) {
        if (timer >= 2592000 && timer < 365 * 86400) {
          tips = `${parseInt(String(timer / (86400 * 30)))}个月前`
        } else {
          tips = `${parseInt(String(timer / (86400 * 365)))}年前`
        }
      } else {
        tips = timeFormat(timestamp, format)
      }
  }
  return tips
}
