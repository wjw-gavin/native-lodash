# fekt

[简体中文](./README.zh-CN.md) | English

A collection of modern, lightweight utility packages — built with TypeScript, managed as a pnpm monorepo.

## Packages

| Package                         | Version                                                                                       | Description                                             |
| ------------------------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| [@fekt/tskit](./packages/tskit) | [![npm](https://img.shields.io/npm/v/@fekt/tskit)](https://www.npmjs.com/package/@fekt/tskit) | Common JavaScript utility library written in TypeScript |

## Quick Start

```bash
pnpm add @fekt/tskit
```

```ts
import { desensitize, moneyFormat, debounce } from '@fekt/tskit'

desensitize('18688888888') // => '186****8888'
moneyFormat(3002.345, 2) // => '3,002.35'
```

See each package's README for full API documentation.

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm -r run build

# Run all tests
pnpm -r run test

# Type check
pnpm -r run typecheck
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feat/amazing-feature`)
3. Commit your changes (`git commit`)
4. Push to the branch (`git push origin feat/amazing-feature`)
5. Open a Pull Request

## License

[MIT](./LICENSE)
