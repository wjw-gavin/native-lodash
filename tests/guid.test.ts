import { guid } from '../src'

describe('guid - globally unique identifier', () => {
  test('generates specified length', () => {
    expect(guid(12).length === 12).toBeTruthy()
  })

  test('sets first letter', () => {
    expect(guid().slice(0, 1) === 'u').toBeTruthy()
    expect(guid(32, 'g').slice(0, 1) === 'g').toBeTruthy()
  })
})
