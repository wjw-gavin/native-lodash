# @fekt/tskit

[简体中文](./README.zh-CN.md) | English

Common JavaScript utility library written in TypeScript.

## Installation

Option 1: Via CDN

```html
<script src="https://cdn.jsdelivr.net/npm/@fekt/tskit/dist/index.iife.js"></script>

<script>
  console.log(tskit)

  // Phone number masking
  const mobile = '18688888888'
  console.log(tskit.desensitize(mobile))
  // => 186****8888

  // Money formatting
  const money = 3002.345
  console.log(tskit.moneyFormat(money))
  // => '3,002'
  console.log(tskit.moneyFormat(money, 2))
  // => '3,002.25'
</script>
```

Option 2: Via pnpm | yarn | npm

```js
pnpm add @fekt/tskit

import { desensitize, moneyFormat } from '@fekt/tskit'

// Phone number masking
const mobile = '18688888888'
console.log(desensitize(mobile))
// => 186****8888

// Money formatting
const money = 3002.345
console.log(moneyFormat(money))
// => '3,002'
console.log(moneyFormat(money, 2))
// => '3,002.25'
```

## API Documentation

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
 * @description Common validation methods
 * @return Boolean
 */

import { isEqual } from '@fekt/tskit'

const obj = { name: 'a' }
const other = { name: 'a' }
const deepObj = { a: 'a', b: { c: 'c' } }
const deepOther = { a: 'a', b: { c: 'c' } }

isEqual(obj, other)
// => true

isEqual(deepObj, deepOther)
// => true

// Similarly:
isEmail // Check if email
isMobile // Check if mobile number
isString // Check if string
isIdCard // Check if ID card number
isCarNo // Check if license plate number (including new energy vehicles)
isEmpty // Check if empty value: string, object, array
isObject // Check if object
isArray // Check if array
isCode // Check if verification code, default length 6, second param customizes length
isFunction // Check if function
isTrue // Check if boolean true or string 'true'
isURL // Check if URL
inBrowser // Check if in browser
```

### clipboard

```js
/**
 * @description Clipboard, returns a Promise
 */

import { clipboard } from '@fekt/tskit'

// Must be triggered by user action
const handleClipboard = async () => {
  await clipboard()
  // something...
}
```

### cloneDeep

```js
/**
 * @description Deep clone
 * @param {object} obj Object to deep clone
 * @returns {*} Cloned object or original value
 */

import { cloneDeep } from '@fekt/tskit'

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
 * @description Creates a debounced function that delays invoking fn until after wait milliseconds
 * @param {Function} fn Function to debounce
 * @param {number} ms Milliseconds
 * @param {boolean} immediate Whether to invoke immediately, default false
 */

import { debounce } from '@fekt/tskit'

// Avoid costly calculations while window size is in flux
jQuery(window).on('resize', debounce(updateFun, 300))
```

### delay

```js
/**
 * @description Invokes fn after wait milliseconds. Any additional arguments are passed to fn.
 * @param {Function} fn Function to delay
 * @param {number} wait Milliseconds to delay
 * @param {...*} [args] Arguments passed to fn
 * @returns {number} Returns the timer id
 */
```

### desensitize

```js
/**
 * @description String masking (phone number, ID card, bank card, name, etc.)
 * @param {String|Number} value Data to mask
 * @param {Number} start Number of leading characters to keep, default 3
 * @param {Number} end Number of trailing characters to keep, default 4
 * @returns {String} Masked string
 */

import { desensitize } from '@fekt/tskit'

// Phone number masking
const mobile = '18688888888'
desensitize(mobile)
// => 186****8888

// Name masking
const name = 'John'
desensitize(name, 1, 1)
// => J**n
```

### download

```js
/**
 * @description Download a file via <a> tag
 * Use downloadImage to download images
 * @param {String} href File URL
 * @param {String} title File name
 */

import { download } from '@fekt/tskit'

download(href, title)
```

### downloadImage

```js
/**
 * @description Download an image by its URL
 * @param {String} src Image URL
 * @param {String} title Downloaded image name
 */

import { downloadImage } from '@fekt/tskit'

downloadImage(src, title)
```

### eq

```js
/**
 * @description Compares two values using SameValueZero to determine if they are equivalent.
 * @param {*} value The value to compare
 * @param {*} other The other value to compare
 * @returns {boolean}
 */

import { eq } from '@fekt/tskit'

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
 * @description Recursively flattens an array.
 */

import { flattenDeep } from '@fekt/tskit'

flattenDeep([1, [2, [3, [4]], 5]])
// => [1, 2, 3, 4, 5]
```

### getUa

```js
/**
 * @description Get the current web page's runtime environment
 * @return
  | 'ios'       // iOS
  | 'android'   // Android
  | 'wechat'    // WeChat
  | 'wxwork'    // WeCom
  | 'wxmini'    // WeChat Mini Program
  | 'dingding'  // DingTalk
  | 'feishu'    // Feishu/Lark
  | 'mobile'    // Mobile
  | undefined   // None of the above
 */

import { getUa } from '@fekt/tskit'

const ua = getUa()
// => ios
```

### getUrlAllParams

```js
/**
 * @description Get all parameters from a URL
 */

import { getUrlAllParams } from '@fekt/tskit'

const url = 'https://www.baidu.com?name=gavin&age=18'

getUrlAllParams(url)
// { name: 'gavin', age: '18'}
```

### getUrlParams

```js
/**
 * @description Get a specific parameter from a URL
 */

import { getUrlParams } from '@fekt/tskit'

const url = 'https://www.baidu.com?name=gavin&age=18'

getUrlParams('name', url)
// gavin

getUrlParams('age', url)
// 18
```

### groupBy

```js
/**
 * @description Group an array of objects by a specified field, commonly used for index lists
 * @param {Array} array Must be an array of objects
 * @param {string} property Field to group by
 */

import { groupBy } from '@fekt/tskit'

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
 * @description Generate a globally unique identifier
 * @param {Number} len Length of the uuid
 * @param {Boolean} firstLetter Set the first character to a letter, default 'u'
 * @param {Number} radix Base for generating uuid (2-binary, 8-octal, 10-decimal, 16-hex), default 62
 */

import { guid } from '@fekt/tskit'

guid(16)
// => Random 16-character string

guid(16, 'g')
// => 16-character string starting with 'g'
```

### has

```js
/**
 * @description Checks if path is a direct or inherited property of object
 */

import { has } from '@fekt/tskit'

const object = { a: 1, b: 'settings', c: { d: 'test' } }

const result = has(object, 'a')
// => true

const result = has(object, 'c.d')
// => true
```

### later

```js
/**
 * @description Delays execution for the specified milliseconds, returns a Promise.
 * @param {number} later Milliseconds to delay
 * @returns {Promise} Promise
 */

import { later } from '@fekt/tskit'

// Continue execution after 1000ms
await later(1000)
// ...
```

### moneyFormat

```js
/**
 * @description Money formatting
 * @param {number|string} number Number to format
 * @param {number} decimals Decimal places to keep
 * @returns {string} Formatted number
 */

import { moneyFormat } from '@fekt/tskit'

moneyFormat(3002.2345)
// => 3,002

moneyFormat(3002.245, 2)
// => 3,002.25
```

### omit

```js
/**
 * @description Returns an object composed of the own and inherited enumerable properties
 * that are not omitted. (i.e., removes specified properties from an object)
 * @param {Object} object Target object
 * @param {string|string[]} props Properties to omit
 * @returns {Object} Returns new object
 */

import { omit } from '@fekt/tskit'

const object = { a: 1, b: '2', c: 3 }

omit(object, ['a', 'c'])
// => { 'b': '2' }

omit(object, 'a')
// => { 'b': '2', 'c': 3 }
```

### queryParams

```js
/**
 * @description Convert an object to URL parameters
 * @param {object} data Object
 * @param {Boolean} isPrefix Whether to add "?" prefix automatically
 * @param {string} arrayFormat Format rule: indices|brackets|repeat|comma, default brackets
 * e.g. { ids: [1, 2, 3] }
 * indices: ids[0]=1&ids[1]=2&ids[2]=3
 * brackets: ids[]=1&ids[]=2&ids[]=3
 * repeat: ids=1&ids=2&ids=3
 * comma: ids=1,2,3
 */

import { queryParams } from '@fekt/tskit'

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
 * @description Creates a throttled function that only invokes fn at most once per time milliseconds
 * @param {Function} fn Function to throttle
 * @param {Number} time Throttle interval in milliseconds
 */

import { throttle } from '@fekt/tskit'

// Avoid excessively updating the position while scrolling
jQuery(window).on('scroll', throttle(updateFun, 300))
```

### timeFormat

```js
/**
 * @description Format a timestamp
 * @param {String|Number} timestamp Timestamp to format
 * @param {String} format Format rule: yyyy-mm-dd hh:MM:ss, customizable, default yyyy-mm-dd
 * @returns {string} Formatted string
 */

import { timeFormat } from '@fekt/tskit'

const timestamp = Date.now()

timeFormat(timestamp)
// => 2022-12-22

timeFormat(timestamp, 'yyyy/mm/dd')
// => 2022/12/22
```

### timeFrom

```js
/**
 * @description Convert a timestamp to relative time (e.g., "just now", "5 minutes ago")
 * @param {String | Number} timestamp Timestamp
 * @param {String} format Format rule for dates beyond a certain range, same as timeFormat's format
 * @returns {string} Converted content
 */

import { timeFrom } from '@fekt/tskit'

const timestamp = Date.now()

timeFrom(timestamp)
// => just now

// Displays based on time difference: just now; X minutes ago; X hours ago;
// yesterday; X days ago; beyond that:
// If format is provided, older dates use the format; otherwise continues with X months ago, X years ago.
```

### toFixed

```js
/**
 * @description Override of toFixed
 * Reason: e.g. 0.345.toFixed(2) = 0.34 instead of 0.35
 * @param {String | Number} num Number value
 * @param {Number} digit Decimal places to keep, default 2
 * @return {String}
 */

import { toFixed } from '@fekt/tskit'

// Native: 0.345.toFixed(2) = 0.34

toFixed(0.345, 2)
// => 0.35

toFixed(0.345, 0)
// => 0
```

### trim

```js
/**
 * @description Remove whitespace
 * @param {String} str String to trim
 * @param {String} pos both|left|right|all, default both
 */

import { trim } from '@fekt/tskit'

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
 * @description Deduplicate array elements by identity or a specified key
 * @param {Array} arr Array to deduplicate
 * @param {*} it Key or iteratee for uniqueness comparison
 * @returns {Array} New deduplicated array
 */

import { uniqBy } from '@fekt/tskit'

// Deduplicate primitive values
uniqBy([1, 3, 4, 5, 5, 4])
// => [1, 3, 4, 5]

const arr = [
  { id: 1, name: 'cat' },
  { id: 2, name: 'dog' },
  { id: 3, name: 'tiger' },
  { id: 1, name: 'sheep' }
]

// Deduplicate objects by key
uniqBy(arr, 'id')
// =>
// [
//   { id: 1, name: 'cat' },
//   { id: 2, name: 'dog' },
//   { id: 3, name: 'tiger' }
// ]
```

## References

[lodash](https://lodash.com)
[uview](https://www.uviewui.com)
