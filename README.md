# 说明
一些常用的 `js` 工具库，避免在多个项目中来回拷贝。

## 安装使用
方式1: 通过 CDN 引入
```html
<script src="https://cdn.jsdelivr.net/npm/native-lodash/dist/index.min.js"></script>

<script>
  console.log(nativeLodash)
  
  const arr = [1, [[2], [3, [4]], 5]]
  console.log(nativeLodash.flattenDeep(arr))
  // => [1, 2, 3, 4, 5]
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
import { flattenDeep } from 'native-lodash'

const arrObj = [{ a: 'a' }, [{ b: 'b' }, { c: 'c' }, [{ d: 'd' }]], [{ e: 'e' }]]
console.log(flattenDeep(arrObj))
// =>  [{ a: 'a' }, { b: 'b' }, { c: 'c' }, { d: 'd' }, { e: 'e' }]
```

### 参考

[lodash](https://lodash.com/)   
[uview](https://www.uviewui.com)

