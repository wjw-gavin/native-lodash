import { queryParams } from '../src'

describe('queryParams', () => {
  test('convert object to URL params without array', () => {
    const query = { a: 'a', b: 'b' }

    expect(queryParams(query, false)).toBe('a=a&b=b')
    expect(queryParams(query)).toBe('?a=a&b=b')
  })

  test('convert object to URL params with array', () => {
    const query = {
      a: 'a',
      c: [1, 2, 3]
    }

    expect(queryParams(query)).toBe('?a=a&c[]=1&c[]=2&c[]=3') // brackets
    expect(queryParams(query, true, 'indices')).toBe(
      '?a=a&c[0]=1&c[1]=2&c[2]=3'
    )
    expect(queryParams(query, true, 'repeat')).toBe('?a=a&c=1&c=2&c=3')
    expect(queryParams(query, true, 'comma')).toBe('?a=a&c=1,2,3')
  })
})
