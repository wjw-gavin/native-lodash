import { timeFormat } from './timeFormat'

/**
 * @description 时间戳转为多久之前
 * @param {String | Number} timestamp 时间戳
 * @param {String | Boolean} format
 * 格式化规则如果为时间格式字符串，超出一定时间范围，返回固定的时间格式；
 * 如果为布尔值false，无论什么时间，都返回多久以前的格式
 * @returns {string} 转化后的内容
 */

export function timeFrom(timestamp, format = 'yyyy-mm-dd') {
  if (!timestamp) timestamp = Number(new Date())

  timestamp = parseInt(timestamp)
  // 判断用户输入的时间戳是秒还是毫秒,一般前端js获取的时间戳是毫秒(13位),后端传过来的为秒(10位)
  if (timestamp.toString().length === 10) timestamp *= 1000
  let timer = new Date().getTime() - timestamp
  timer = parseInt(timer / 1000)
  let tips = ''
  switch (true) {
    // 如果小于1分钟,则返回"刚刚",其他以此类推
    case timer < 60:
      tips = '刚刚'
      break
    // 1分钟-1小时之间
    case timer >= 60 && timer < 3600:
      tips = `${parseInt(timer / 60)}分钟前`
      break
    // 1小时-24小时之间
    case timer >= 3600 && timer < 86400:
      tips = `${parseInt(timer / 3600)}小时前`
      break
    // 24小时-48小时之间
    case timer >= 86400 && timer < 172800:
      tips = '昨天'
      break
    // 大于48小时
    case timer >= 172800 && timer < 2592000:
      tips = `${parseInt(timer / 86400)}天前`
      break
    default:
      // 如果format为false，则无论什么时间戳，都显示xx之前
      if (format === false) {
        if (timer >= 2592000 && timer < 365 * 86400) {
          tips = `${parseInt(timer / (86400 * 30))}个月前`
        } else {
          tips = `${parseInt(timer / (86400 * 365))}年前`
        }
      } else {
        tips = timeFormat(timestamp, format)
      }
  }
  return tips
}
