# 说明
一些常用的`js`工具库，避免在多个项目中来回拷贝。
## 安装使用
方式1: 通过 CDN 引入
```html
<script src="https://cdn.jsdelivr.net/npm/native-lodash/dist/index.min.js"></script>

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
方式2: 通过 npm 安装
```javascript
// npm
npm install native-lodash

// yarn
yarn add native-lodash

// pnpm
pnpm add native-lodash

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
### 参考
[lodash](https://lodash.com)
[uview](https://www.uviewui.com)
