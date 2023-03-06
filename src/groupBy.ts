/**
 * @description 对象数组根据某个字段分类，常用于 index 索引列表
 * @param {Array} array 必须是对象数组
 * @param {string} property 分类依据的字段
 */

export function groupBy(array, property) {
  return array.reduce((result, obj) => {
    const key = obj[property]
    if (!result[key]) {
      result[key] = []
    }
    result[key].push(obj)
    return result
  }, {})
}
