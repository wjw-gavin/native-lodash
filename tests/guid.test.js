import { guid } from '../packages'

describe('全局唯一标识符', () => {
  test('长度为12', () => {
    expect(guid(12).length === 12).toBeTruthy()
  })

  test('设置首位字母', () => {
    expect(guid().slice(0, 1) === 'u').toBeTruthy()
    expect(guid(32, 'g').slice(0, 1) === 'g').toBeTruthy()
  })
})
