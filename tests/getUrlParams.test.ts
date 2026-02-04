// @vitest-environment jsdom

import { getUrlParams } from '../src'

describe('getUrlParams', () => {
  const url = 'https://www.baidu.com/?name=Tom&age=18'

  test('get specific URL parameter', () => {
    expect(getUrlParams('name', url)).toBe('Tom')
    expect(getUrlParams('age', url)).toBe('18')
  })

  test('returns null for non-existent parameter', () => {
    expect(getUrlParams('foo', url)).toBe(null)
  })

  test('returns null when URL has no query string', () => {
    expect(getUrlParams('name', 'https://www.baidu.com')).toBe(null)
  })
})
