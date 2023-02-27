// @vitest-environment jsdom

import { getUrlAllParams } from '../src'

describe('getUrlAllParams', () => {
  const url = 'https://www.baidu.com?name=gavin&age=18'

  test('获取 url 中所有参数', () => {
    const obj = {
      name: 'gavin',
      age: '18'
    }

    expect(getUrlAllParams(url)).toMatchObject(obj)
  })
})
