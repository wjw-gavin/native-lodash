// @vitest-environment jsdom

import { getUrlParams } from '../src'

describe('getUrlParams', () => {
  const url = 'https://www.baidu.com/?name=Tom&age=18'

  test('获取 url 中指定参数', () => {
    expect(getUrlParams('name', url)).toBe('Tom')
    expect(getUrlParams('age', url)).toBe('18')
  })
})
