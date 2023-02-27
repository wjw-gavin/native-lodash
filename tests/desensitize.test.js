import { desensitize } from '../src'

describe('desensitize', () => {
  test('姓名脱敏', () => {
    expect(desensitize('王小二', 0, 2)).toBe('*小二')
    expect(desensitize('王小二', 1, 1)).toBe('王*二')
  })

  test('手机号脱敏', () => {
    expect(desensitize('18088888888')).toBe('180****8888')
    expect(desensitize('18088888888', 3, 4, '-')).toBe('180----8888')
  })

  test('银行卡号', () => {
    expect(desensitize('6221123443210045', 4, 4)).toBe('6221********0045')
  })
})
