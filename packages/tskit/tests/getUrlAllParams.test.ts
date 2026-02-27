// @vitest-environment jsdom

import { getUrlAllParams } from '../src'

describe('getUrlAllParams', () => {
  const url = 'https://www.baidu.com?name=gavin&age=18'

  test('get all URL parameters', () => {
    const obj = {
      name: 'gavin',
      age: '18'
    }

    expect(getUrlAllParams(url)).toMatchObject(obj)
  })
})
