import {
  isDef,
  isEmail,
  isMobile,
  isString,
  isIdCard,
  isCarNo,
  isEmpty,
  isArray,
  isObject,
  isCode,
  isFunction,
  isTrue,
  isURL,
  inBrowser
} from '../src'

describe('isDef', () => {
  test('returns true when value is defined', () => {
    expect(isDef(0)).toBe(true)
    expect(isDef('')).toBe(true)
    expect(isDef(false)).toBe(true)
    expect(isDef([])).toBe(true)
    expect(isDef({})).toBe(true)
  })

  test('returns false when value is null or undefined', () => {
    expect(isDef(null)).toBe(false)
    expect(isDef(undefined)).toBe(false)
  })
})

describe('isEmail', () => {
  test('valid email', () => {
    expect(isEmail('test@example.com')).toBe(true)
    expect(isEmail('user.name@domain.co.uk')).toBe(true)
    expect(isEmail('user-name@domain.com')).toBe(true)
  })

  test('invalid email', () => {
    expect(isEmail('invalid')).toBe(false)
    expect(isEmail('invalid@')).toBe(false)
    expect(isEmail('@domain.com')).toBe(false)
  })
})

describe('isMobile', () => {
  test('valid mobile number', () => {
    expect(isMobile('13812345678')).toBe(true)
    expect(isMobile('15912345678')).toBe(true)
    expect(isMobile('18888888888')).toBe(true)
    expect(isMobile(13812345678)).toBe(true)
  })

  test('invalid mobile number', () => {
    expect(isMobile('12345678901')).toBe(false)
    expect(isMobile('1381234567')).toBe(false)
    expect(isMobile('138123456789')).toBe(false)
  })
})

describe('isString', () => {
  test('is string', () => {
    expect(isString('hello')).toBe(true)
    expect(isString('')).toBe(true)
    expect(isString(new String('test'))).toBe(true)
  })

  test('is not string', () => {
    expect(isString(123)).toBe(false)
    expect(isString(null)).toBe(false)
    expect(isString(undefined)).toBe(false)
    expect(isString({})).toBe(false)
  })
})

describe('isIdCard', () => {
  test('valid ID card number', () => {
    expect(isIdCard('110101199003077758')).toBe(true)
    expect(isIdCard('11010119900307775X')).toBe(true)
  })

  test('invalid ID card number', () => {
    expect(isIdCard('123456789012345678')).toBe(false)
    expect(isIdCard('1101011990030777')).toBe(false)
  })
})

describe('isCarNo', () => {
  test('valid car plate - regular', () => {
    expect(isCarNo('京A12345')).toBe(true)
    expect(isCarNo('粤B88888')).toBe(true)
  })

  test('valid car plate - new energy', () => {
    expect(isCarNo('京AD12345')).toBe(true)
    expect(isCarNo('粤BF12345')).toBe(true)
  })

  test('invalid car plate', () => {
    expect(isCarNo('12345')).toBe(false)
    expect(isCarNo('京A1234')).toBe(false)
  })
})

describe('isEmpty', () => {
  test('empty values', () => {
    expect(isEmpty('')).toBe(true)
    expect(isEmpty([])).toBe(true)
    expect(isEmpty({})).toBe(true)
    expect(isEmpty(null)).toBe(true)
    expect(isEmpty(undefined)).toBe(true)
  })

  test('non-empty values', () => {
    expect(isEmpty('hello')).toBe(false)
    expect(isEmpty([1])).toBe(false)
    expect(isEmpty({ a: 1 })).toBe(false)
    expect(isEmpty(0)).toBe(false)
    expect(isEmpty(false)).toBe(false)
  })
})

describe('isArray', () => {
  test('is array', () => {
    expect(isArray([])).toBe(true)
    expect(isArray([1, 2, 3])).toBe(true)
  })

  test('is not array', () => {
    expect(isArray({})).toBe(false)
    expect(isArray('array')).toBe(false)
    expect(isArray(null)).toBe(false)
  })
})

describe('isObject', () => {
  test('is object', () => {
    expect(isObject({})).toBe(true)
    expect(isObject({ a: 1 })).toBe(true)
  })

  test('is not object', () => {
    expect(isObject([])).toBe(false)
    expect(isObject(null)).toBe(false)
    expect(isObject('object')).toBe(false)
  })
})

describe('isCode', () => {
  test('valid verification code', () => {
    expect(isCode('123456')).toBe(true)
    expect(isCode('1234', 4)).toBe(true)
  })

  test('invalid verification code', () => {
    expect(isCode('12345')).toBe(false)
    expect(isCode('abcdef')).toBe(false)
    expect(isCode('12345', 4)).toBe(false)
  })
})

describe('isFunction', () => {
  test('is function', () => {
    expect(isFunction(() => {})).toBe(true)
    expect(isFunction(function () {})).toBe(true)
    expect(isFunction(async () => {})).toBe(true)
  })

  test('is not function', () => {
    expect(isFunction({})).toBe(false)
    expect(isFunction('function')).toBe(false)
    expect(isFunction(null)).toBe(false)
  })
})

describe('isTrue', () => {
  test('is true or "true"', () => {
    expect(isTrue(true)).toBe(true)
    expect(isTrue('true')).toBe(true)
  })

  test('is not true', () => {
    expect(isTrue(false)).toBe(false)
    expect(isTrue('false')).toBe(false)
    expect(isTrue(1)).toBe(false)
  })
})

describe('isURL', () => {
  test('valid URL', () => {
    expect(isURL('http://example.com')).toBe(true)
    expect(isURL('https://example.com')).toBe(true)
    expect(isURL('ftp://example.com')).toBe(true)
  })

  test('invalid URL', () => {
    expect(isURL('example.com')).toBe(false)
    expect(isURL('/path/to/file')).toBe(false)
  })
})

describe('inBrowser', () => {
  test('should be boolean in Node.js environment', () => {
    expect(typeof inBrowser).toBe('boolean')
  })
})
