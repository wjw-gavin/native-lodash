# fekt

简体中文 | [English](./README.md)

一组现代、轻量的工具包集合 — 使用 TypeScript 编写，pnpm monorepo 管理。

## 包列表

| 包名                            | 版本                                                                                          | 说明                                      |
| ------------------------------- | --------------------------------------------------------------------------------------------- | ----------------------------------------- |
| [@fekt/tskit](./packages/tskit) | [![npm](https://img.shields.io/npm/v/@fekt/tskit)](https://www.npmjs.com/package/@fekt/tskit) | 常用的 JavaScript 工具库，TypeScript 编写 |

## 快速开始

```bash
pnpm add @fekt/tskit
```

```ts
import { desensitize, moneyFormat, debounce } from '@fekt/tskit'

desensitize('18688888888') // => '186****8888'
moneyFormat(3002.345, 2) // => '3,002.35'
```

各包的完整 API 文档请查看对应包的 README。

## 开发

```bash
# 安装依赖
pnpm install

# 构建所有包
pnpm -r run build

# 运行所有测试
pnpm -r run test

# 类型检查
pnpm -r run typecheck
```

## 贡献

1. Fork 本仓库
2. 创建功能分支 (`git checkout -b feat/amazing-feature`)
3. 提交更改 (`git commit`)
4. 推送分支 (`git push origin feat/amazing-feature`)
5. 发起 Pull Request

## 许可证

[MIT](./LICENSE)
