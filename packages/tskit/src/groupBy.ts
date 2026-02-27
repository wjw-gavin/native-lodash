/**
 * @description Group an array of objects by a specific property, commonly used for index lists
 * @param array Must be an array of objects
 * @param property The property to group by
 */

export function groupBy(array: any[], property: string) {
  return array.reduce((result, obj) => {
    const key = obj[property]
    if (!result[key]) {
      result[key] = []
    }
    result[key].push(obj)
    return result
  }, {})
}
