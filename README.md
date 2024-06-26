# 说明

前端常用的工具库，`typescript` 编写。

# 安装使用

方式1: 通过 CDN 引入

```html
<script src="https://cdn.jsdelivr.net/npm/native-lodash/dist/index.js"></script>

<script>
  console.log(nativeLodash)

  // 手机号脱敏
  const mobile = '18688888888'
  console.log(nativeLodash.desensitize(mobile))
  // => 186****8888

  // 金额格式化
  const money = 3002.345
  console.log(nativeLodash.moneyFormat(money))
  // => '3,002'
  console.log(nativeLodash.moneyFormat(money, 2))
  // => '3,002.25'
</script>
```

方式2: 通过 pnpm | yarn | npm 安装

```js
// pnpm | yarn
pnpm(yarn) add native-lodash

// 使用
import { desensitize, moneyFormat } from 'native-lodash'

// 手机号脱敏
const mobile = '18688888888'
console.log(desensitize(mobile))
// => 186****8888

// 金额格式化
const money = 3002.345
console.log(moneyFormat(money))
// => '3,002'
console.log(moneyFormat(money, 2))
// => '3,002.25'
```

# 使用文档

1. [isX](#isx)
1. [clipboard](#clipboard)
1. [cloneDeep](#clonedeep)
1. [debounce](#debounce)
1. [delay](#delay)
1. [desensitize](#desensitize)
1. [download](#download)
1. [downloadImage](#downloadimage)
1. [eq](#eq)
1. [flattenDeep](#flattendeep)
1. [getUa](#getua)
1. [getUrlAllParams](#geturlallparams)
1. [getUrlParams](#geturlparams)
1. [groupBy](#groupby)
1. [guid](#guid)
1. [has](#has)
1. [later](#later)
1. [moneyFormat](#moneyformat)
1. [omit](#omit)
1. [queryParams](#queryparams)
1. [throttle](#throttle)
1. [timeFormat](#timeformat)
1. [timeFrom](#timefrom)
1. [toFixed](#tofixed)
1. [trim](#trim)
1. [uniqBy](#uniqby)

### isX

```js
/**
 * @description 常用的校验方法
 * @return Boolean
 */

// 使用
import { isEqual } from 'native-lodash'

const obj = { name: 'a' }
const other = { name: 'a' }
const deepObj = { a: 'a', b: { c: 'c' } }
const deepOther = { a: 'a', b: { c: 'c' } }

isEqual(obj, other)
// => true

isEqual(deepObj, deepOther)
// => true

// 同理
isEmail // 是否是邮箱
isMobile // 是否是手机号
isString // 是否是字符串
isIdCard // 是否是身份证号
isCarNo // 是否是车牌号，包括新能源
isEmpty // 是否是空的值：字符串、对象、数组
isObject // 是否是对象
isArray // 是否是数组
isCode // 是否是验证码，长度默认为6，第二个参数可修改 code 的校验长度
isFunction // 是否是函数
isTrue // 是否是布尔 true 或者是字符 'true'
isURL // 是否是 URL
inBrowser // 是否在浏览器
```

### clipboard

```js
/**
 * @description 剪贴板，返回一个 Promise
 */

// 使用
import { clipboard } from 'native-lodash'

// 必须由用户主动触发
const handleClipboard = async () => {
  await clipboard()
  // something...
}
```

### cloneDeep

```js
/**
 * @description 深度克隆
 * @param {object} obj 需要深度克隆的对象
 * @returns {*} 克隆后的对象或者原值
 */

// 使用
import { cloneDeep } from 'native-lodash'

const obj = { name: 'Gavin' }
const cloneObj = obj
cloneObj.name = 'wjw'
obj === cloneObj // => true

const cloneDeepObj = cloneDeep(obj)
cloneDeepObj.name = 'wjw'
obj === cloneDeepObj // => false
```

### debounce

```js
/**
 * @description 创建一个 debounced（防抖）函数，该函数会在延迟 wait 毫秒后调用 fn 方法
 * @param {Function} fn 需要防抖的函数
 * @param {number} ms 毫秒数
 * @param {immediate} ms 是否立即执行，默认 false
 */

// 使用
import { debounce } from 'native-lodash'

// 避免窗口在变动时出现昂贵的计算开销。
jQuery(window).on('resize', debounce(updateFun, 300))
```

### delay

```js
/**
 * @description 延迟 wait 毫秒后调用 fn。 调用时，任何附加的参数会传给func。
 * @param {Function} fn 要延迟的函数
 * @param {number} wait 要延迟的毫秒数
 * @param {...*} [args] 会在调用时传入到 fn 的参数。
 * @returns {number} 返回计时器 id
 */
```

### desensitize

```js
/**
 * @description 字符串脱敏（手机号，身份证，银行卡号、姓名等）
 * @param {String|Number} value 要脱敏的数据
 * @param {Number} start 前几位不参与脱敏，默认 3
 * @param {Number} end 后几位不参与脱敏，默认 4
 * @returns {String} 脱敏后的字符串
 */

// 使用
import { desensitize } from 'native-lodash'

// 手机号脱敏
const mobile = '18688888888'
desensitize(mobile)
// => 186****8888

// 名字脱敏
const mobile = '王小二'
desensitize(mobile, 1, 1)
// => 王*二
```

### download

```js
/**
 * @description: 根据地址使用 a 标签下载文件
 * 如需下载图片请使用 downloadImage
 * @param {String} href  文件链接
 * @param {String} title 文件名称
 */

// 使用
import { download } from 'native-lodash'

download(href, title)
```

### downloadImage

```js
/**
 * @description: 根据图片地址下载图片
 * @param {String} src  图片地址
 * @param {String} title 下载图片名称
 */

// 使用
import { downloadImage } from 'native-lodash'

downloadImage(src, title)
```

### eq

```js
/**
 * @description 使用 SameValueZero 比较两者的值，来确定它们是否相等。
 * @param {*} value 要比较的值
 * @param {*} other 另一个要比较的值
 * @returns {boolean}
 */

// 使用
import { eq } from 'native-lodash'

const object = { a: 1 }
const other = { a: 1 }

eq(object, object)
// => true

eq(object, other)
// => false

eq('a', 'a')
// => true

eq('a', Object('a'))
// => false

eq(NaN, NaN)
// => true
```

### flattenDeep

```js
/**
 * @description 将array递归为一维数组。
 */

// 使用
import { flattenDeep } from 'native-lodash'

flattenDeep([1, [2, [3, [4]], 5]])
// => [1, 2, 3, 4, 5]
```

### getUa

```js
/**
 * @description 获取当前网页所在的运行环境
 * @return 
  | 'ios'       // ios
  | 'android'   // android
  | 'wechat'    // 微信
  | 'wxwork'    // 企微
  | 'wxmini'    // 微信小程序
  | 'dingding'  // 钉钉
  | 'feishu'    // 飞书
  | 'mobile'    // 移动端
  | undefined   // 不是以上情况
 */

// 使用
import { getUa } from 'native-lodash'

const ua = getUa()
// =>  ios
```

### getUrlAllParams

```js
/**
 * @description 获取 url 中所有参数
 */

// 使用
import { getUrlAllParams } from 'native-lodash'

const url = 'https://www.baidu.com?name=gavin&age=18'

getUrlAllParams(url)
// { name: 'gavin', age: '18'}
```

### getUrlParams

```js
/**
 * @description 获取 url 中所有参数
 */

// 使用
import { getUrlParams } from 'native-lodash'

const url = 'https://www.baidu.com?name=gavin&age=18'

getUrlParams('name', url)
// gavin

getUrlParams('age', url)
// 18
```

### groupBy

```js
/**
 * @description 对象数组根据某个字段分类，常用于 index 索引列表
 * @param {Array} array 必须是对象数组
 * @param {string} property 分类依据的字段
 */

// 使用
import { groupBy } from 'native-lodash'

const arr = [
  {
    id: 1,
    state: 'online',
    create_time: '2022-04-24'
  },
  {
    id: 2,
    state: 'online',
    create_time: '2022-04-23'
  },
  {
    id: 3,
    state: 'online',
    create_time: '2022-04-23'
  },
  {
    id: 4,
    state: 'online',
    create_time: '2022-04-22'
  }
]

groupBy(arr, 'create_time')
// =>
// {
//   '2022-04-24': [
//     { id: 1, state: 'online', create_time: '2022-04-24' }
//   ],
//   '2022-04-23': [
//     { id: 2, state: 'online', create_time: '2022-04-23' },
//     { id: 3, state: 'online', create_time: '2022-04-23' }
//   ],
//   '2022-04-22': [
//     { id: 4, state: 'online', create_time: '2022-04-22' }
//   ]
// }
```

### guid

```js
/**
 * @description 全局唯一标识
 * @param {Number} len uuid的长度
 * @param {Boolean} firstLetter 将首位设置为某个字母，默认为 u
 * @param {Nubmer} radix 生成uuid的基数(意味着返回的字符串都是这个基数),2-二进制,8-八进制,10-十进制,16-十六进制,默认62
 */

// 使用
import { guid } from 'native-lodash'

guid(16)
// => 随机16为字符串

guid(16, 'g')
// => 首位字符为'g'的16为字符串
```

### has

```js
/**
 * @description 检查 path 是否是 Object 的直接或继承属性
 */

// 使用
import { has } from 'native-lodash'

const object = { a: 1, b: 'settings', c: { d: 'test' } }

const result = has(object, 'a')
// => true

const result = has(object, 'c.d')
// => true
```

### later

```js
/**
 * @description 延迟 later 毫秒后执行，返回 Promise。
 * @param {number} later 要延迟的毫秒数
 * @returns {Promise} Promise
 */

// 使用
import { later } from 'native-lodash'

// 1000ms 后继续执行
await later(1000)
// ...
```

### moneyFormat

```js
/**
 * @description 金额格式化
 * @param {number|string} number 要格式化的数字
 * @param {number} decimals 保留几位小数
 * @returns {string} 格式化后的数字
 */

// 使用
import { moneyFormat } from 'native-lodash'

moneyFormat(3002.2345)
// => 3,002

moneyFormat(3002.245, 2)
// => 3,002.25
```

### omit

```js
/**
 * @description 返回一个对象，这个对象由忽略属性之外的 Object 自身和继承的可枚举属性组成。（注：可以理解为删除 Object 的属性）。
 * @param {Object} object 目标对象.
 * @param {string|string[]} props 要被忽略的属性
 * @returns {Object} 返回新对象
 */

// 使用
import { omit } from 'native-lodash'

const object = { a: 1, b: '2', c: 3 }

omit(object, ['a', 'c'])
// => { 'b': '2' }

omit(object, 'a')
// => { 'b': '2', 'c': 3 }
```

### queryParams

```js
/**
 * @description 对象转 url 参数
 * @param {object} data, Object
 * @param {Boolean} isPrefix,是否自动加上"?"
 * @param {string} arrayFormat 规则 indices|brackets|repeat|comma，默认 brackets
 * e.g. { ids: [1, 2, 3] }
 * indices: ids[0]=1&ids[1]=2&ids[2]=3
 * brackets: ids[]=1&ids[]=2&ids[]=3
 * repeat: ids=1&ids=2&ids=3
 * comma: ids=1,2,3
 */

// 使用
import { queryParams } from 'native-lodash'

const query = {
  a: 'a',
  c: [1, 2, 3]
}

queryParams(query)
// => ?a=a&c[]=1&c[]=2&c[]=3

queryParams(query, true, 'indices')
// => ?a=a&c[0]=1&c[1]=2&c[2]=3'
```

### throttle

```js
/**
 * @description 创建一个节流函数，在 time 秒内最多执行 fn 一次的函数
 * @param {Function} fn 要节流的函数
 * @param {Number} time 需要节流的毫秒
 */

// 使用
import { throttle } from 'native-lodash'

// 避免在滚动时过分的更新定位
jQuery(window).on('scroll', throttle(updateFun, 300))
```

### timeFormat

```js
/**
 * @description 格式化时间
 * @param {String|Number} timestamp 需要格式化的时间戳
 * @param {String} format 格式化规则 yyyy-mm-dd hh:MM:ss,可自定义组合 默认 yyyy-mm-dd
 * @returns {string} 返回格式化后的字符串
 */

// 使用
import { timeFormat } from 'native-lodash'

const timestamp = Date.now()

timeFormat(timestamp)
// => 2022-12-22

timeFormat(timestamp, 'yyyy/mm/dd')
// => 2022/12/22
```

### timeFrom

```js
/**
 * @description 时间戳转为多久之前
 * @param {String | Number} timestamp 时间戳
 * @param {String} format 格式化规则,超出一定时间范围，返回固定的时间格式，同 timeFormat 中 format
 * @returns {string} 转化后的内容
 */

// 使用
import { timeFrom } from 'native-lodash'

const timestamp = Date.now()

timeFrom(timestamp)
// => 刚刚

// 根据时间差显示为：刚刚；几分钟前；几小时前；昨天；几天前；再往前显示如下说明：
// 如果判断format有值，则再往前的时间显示为 format 格式，否则继续显示几个月前、几年前。
```

### toFixed

```js
/**
 * @description: 重写 toFixed
 * 原因：比如 0.345.toFixed(2) = 0.34 而非 0.35
 * digit: 保留位数，默认2位
 * @param {String | Number} num 数值
 * @param {Number} digit 保留位数，默认2位
 * @return {String}
 */

// 使用
import { toFixed } from 'native-lodash'

const date = new Date()

// 原生：0.345.toFixed(2) = 0.34

toFixed(0.345, 2)
// => 0.35

toFixed(0.345, 0)
// => 0
```

### trim

```js
/**
 * @description 去除空格
 * @param String str 需要去除空格的字符串
 * @param String pos both(两端)|left|right|all 默认both
 */

// 使用
import { trim } from 'native-lodash'

trim(' 12 12 ')
// => '12 12'

trim(' 12 12 ', 'left')
// => '12 12 '

trim(' 12 12 ', 'right')
// => ' 12 12'

trim(' 12 12 ', 'all')
// => '1212'
```

### uniqBy

```js
/**
 * @description 调用数组的每个元素以产生唯一性
 * @param {Array} arr 要去重的数组
 * @param {*} it 迭代函数要调用的元素
 * @returns {Array} 返回新的去重后的数组
 */

// 使用
import { uniqBy } from 'native-lodash'

// 数组元素为基本类型去重
uniqBy([1, 3, 4, 5, 5, 4])
// => [1, 3, 4, 5]

const arr = [
  { id: 1, name: 'cat' },
  { id: 2, name: 'dog' },
  { id: 3, name: 'tiger' },
  { id: 1, name: 'sheep' }
]

// 数组元素为对象去重
uniqBy(arr, 'id')
// =>
// [
//   { id: 1, name: 'cat' },
//   { id: 2, name: 'dog' },
//   { id: 3, name: 'tiger' }
// ]
```

# 参考

[lodash](https://lodash.com)
[uview](https://www.uviewui.com)
