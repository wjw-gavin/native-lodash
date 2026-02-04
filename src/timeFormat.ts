import type { Numeric } from './types'

export type TimeFormatItem = 'y' | 'm' | 'd' | 'h' | 'M' | 's'

/**
 * @description Format datetime
 * @param dateTime The datetime to format
 * @param format Format pattern (e.g., yyyy-mm-dd, yyyy/mm/dd hh:MM:ss), default is 'yyyy-mm-dd'
 */

export function timeFormat(dateTime: Numeric, format = 'yyyy-mm-dd') {
  let date: Date

  // If datetime is falsy, use current time
  if (!dateTime) {
    date = new Date()
  }

  // If unix timestamp in seconds, convert to milliseconds
  else if (/^\d{10}$/.test(dateTime?.toString().trim())) {
    date = new Date(+dateTime * 1000)
  }

  // If user passes string timestamp, new Date cannot parse it, need compatibility
  else if (typeof dateTime === 'string' && /^\d+$/.test(dateTime.trim())) {
    date = new Date(Number(dateTime))
  }
  // Handle platform differences, Safari/Webkit only supports '/' as separator in date strings
  else if (
    typeof dateTime === 'string' &&
    dateTime.includes('-') &&
    !dateTime.includes('T')
  ) {
    date = new Date(dateTime.replace(/-/g, '/'))
  }
  // Otherwise assume it conforms to RFC 2822 specification
  else {
    date = new Date(dateTime)
  }
  const timeSource = {
    y: date.getFullYear().toString(), // Year
    m: (date.getMonth() + 1).toString().padStart(2, '0'), // Month
    d: date.getDate().toString().padStart(2, '0'), // Day
    h: date.getHours().toString().padStart(2, '0'), // Hour
    M: date.getMinutes().toString().padStart(2, '0'), // Minute
    s: date.getSeconds().toString().padStart(2, '0') // Second
    // Add more format characters as needed, must be converted to string
  }

  Object.keys(timeSource).forEach((key) => {
    const [ret] = new RegExp(`${key}+`).exec(format) || []
    if (ret) {
      // Year might only need to show two digits
      const beginIndex = key === 'y' && ret.length === 2 ? 2 : 0
      format = format.replace(
        ret,
        timeSource[key as TimeFormatItem].slice(beginIndex)
      )
    }
  })

  return format
}
