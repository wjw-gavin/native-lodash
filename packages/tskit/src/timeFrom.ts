import { timeFormat } from './timeFormat'
import type { Numeric } from './types'

/**
 * @description Convert timestamp to relative time (e.g., "5 minutes ago")
 * @param timestamp The timestamp to convert
 * @param format Format pattern for dates beyond a certain range
 */

export function timeFrom(timestamp: Numeric, format = '') {
  if (!timestamp) timestamp = Date.now()

  timestamp = parseInt(String(timestamp))
  if (timestamp.toString().length === 10) timestamp *= 1000
  let timer = Date.now() - timestamp
  timer = parseInt(String(timer / 1000))
  let tips = ''
  switch (true) {
    // Less than 1 minute, return "just now"
    case timer < 60:
      tips = '刚刚'
      break
    // 1 minute to 1 hour
    case timer >= 60 && timer < 3600:
      tips = `${parseInt(String(timer / 60))}分钟前`
      break
    // 1 hour to 24 hours
    case timer >= 3600 && timer < 86400:
      tips = `${parseInt(String(timer / 3600))}小时前`
      break
    // 24 hours to 48 hours
    case timer >= 86400 && timer < 172800:
      tips = '昨天'
      break
    // More than 48 hours
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
