type Numeric = number | string;
type TObject = Record<any, unknown>;

/**
 * 各类校验方法
 */

declare const isDef: <T>(val: T) => val is NonNullable<T>;
/**
 * 验证电子邮箱格式
 */
declare function isEmail(value: string): boolean;
/**
 * 验证手机格式
 */
declare function isMobile(value: Numeric): boolean;
/**
 * 验证字符串
 */
declare function isString(str: unknown): boolean;
/**
 * 验证身份证号码
 */
declare function isIdCard(value: string): boolean;
/**
 * 是否车牌号
 */
declare function isCarNo(value: string): boolean;
/**
 * 判断是否为空
 */
declare function isEmpty(val: unknown): boolean;
/**
 * 是否数组
 */
declare function isArray(value: unknown): boolean;
/**
 * 是否对象
 */
declare function isObject(value: unknown): boolean;
/**
 * 是否短信验证码
 */
declare function isCode(value: string, len?: number): boolean;
/**
 * 是否函数方法
 */
declare const isFunction: (func: unknown) => func is Function;
/**
 * 是否是布尔 true 或者是字符 'true'
 */
declare const isTrue: (val: unknown) => boolean;

/**
 * @description 深度克隆
 * @param {object} obj 需要深度克隆的对象
 * @returns {*} 克隆后的对象或者原值（不是对象）
 */
declare const cloneDeep: <T extends Record<string, any> | null | undefined>(obj: T) => T;

/**
 * 创建一个 debounced（防抖动）函数，该函数会从上一次被调用后，延迟 wait 毫秒后调用 func 方法
 * @param {Function} fn 需要防抖的函数
 * @param {number} ms 毫秒数
 * @param {immediate} ms 是否立即执行
 */
declare const debounce: (fn: (...args: any[]) => any, ms?: number, immediate?: boolean) => (this: unknown, ...args: any[]) => void;

/**
 * @description 延迟 wait 毫秒后调用 func。 调用时，任何附加的参数会传给func。
 * @param {Function} func 要延迟的函数
 * @param {number} wait 要延迟的毫秒数
 * @param {...*} [args] 会在调用时传入到 func 的参数。
 * @returns {number} 返回计时器 id
 */
declare function delay(func: (...args: any[]) => any, wait?: number, ...args: any[]): ReturnType<typeof setTimeout>;

/**
 * @description 使用 SameValueZero 比较两者的值，来确定它们是否相等。
 * @param {*} value 要比较的值
 * @param {*} other 另一个要比较的值
 * @returns {boolean}
 */
declare function eq(value: unknown, other: unknown): boolean;

/**
 * Recursively flattens array.
 *
 * @example
 *
 * flattenDeep([1, [[2], [3, [4]], 5]])
 * output: [1, 2, 3, 4, 5]
 */
declare const flattenDeep: <T>(array: T[]) => T[];

/**
 * @description 对象数组根据某个字段分类，常用于 index 索引列表
 * @param {Array} array 必须是对象数组
 * @param {string} property 分类依据的字段
 */
declare function groupBy(array: any[], property: string): any;

/**
 * @description 全局唯一标识
 * @param {Number} len uuid的长度
 * @param {String} firstLetter 将首位设置为某个字母，默认为 u
 * @param {Nubmer} radix 生成uuid的基数(意味着返回的字符串都是这个基数),2-二进制,8-八进制,10-十进制,16-十六进制,默认62
 */
declare function guid(len?: number, firstLetter?: string, radix?: number): string;

declare const has: (obj: TObject, key: string) => boolean;

/**
 * @description 判断对象或数组是否相等。
 * @param {*} value 要比较的值
 * @param {*} other 另一个要比较的值
 * @returns {boolean}
 */
declare function isEqual(value: TObject, other: TObject): boolean;

/**
 * @description 金额格式化
 * @param {number|string} number 要格式化的数字
 * @param {number} decimals 保留几位小数
 * @returns {string} 格式化后的数字
 */
declare function moneyFormat(number: Numeric, decimals?: number): string;

/**
 * @description 返回一个对象，这个对象由忽略属性之外的object自身和继承的可枚举属性组成。（注：可以理解为删除object对象的属性）。
 * @param {Object} obj 目标对象.
 * @param {string|string[]} props 要被忽略的属性
 * @returns {Object} 返回新对象
 * @example
 *
 * const object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * omit(object, ['a', 'c']);
 * // => { 'b': '2' }
 *
 * omit(object, 'a');
 * // => { 'b': '2', 'c': 3 }
 */
declare function omit(obj: TObject, props: string | string[]): object;

type ArrayFormat = 'indices' | 'brackets' | 'repeat' | 'comma';
/**
 * @description 对象转url参数
 * @param {object} data,对象
 * @param {Boolean} isPrefix,是否自动加上"?"
 * @param {ArrayFormat} arrayFormat 规则 indices|brackets|repeat|comma
 */
declare function queryParams(data?: TObject, isPrefix?: boolean, arrayFormat?: ArrayFormat): string;

/**
 * 创建一个节流函数，在 wait 秒内最多执行 func 一次的函数。
 * @param {Function} fn 需要节流的函数
 * @param {number} time 毫秒数
 */
declare const throttle: (fn: (...args: any[]) => any, time?: number) => (this: unknown, ...args: any[]) => void;

type TimeFormatItem = 'y' | 'm' | 'd' | 'h' | 'M' | 's';
/**
 * @description 格式化时间
 * @param {String|Number} timestamp 需要格式化的时间戳
 * @param {String} formatStr 格式化规则 yyyy:mm:dd|yyyy:mm|yyyy年mm月dd日|yyyy年mm月dd日 hh时MM分等,可自定义组合 默认yyyy-mm-dd
 * @returns {string} 返回格式化后的字符串
 */
declare function timeFormat(timestamp: Numeric, formatStr?: string): string;

/**
 * @description 时间戳转为多久之前
 * @param {String | Number} timestamp 时间戳
 * @param {String} format 格式化规则,超出一定时间范围，返回固定的时间格式
 * @returns {string} 转化后的内容
 */
declare function timeFrom(timestamp: Numeric, format?: string): string;

/**
 * @description: 重写 toFixed
 * 原因：比如 0.345.toFixed(2) = 0.34 而非 0.35
 * digit: 保留位数，默认2位
 * @param {String | Number} num 数值
 * @param {Number} digit 保留位数，默认2位
 * @return {Number}
 */
declare function toFixed(num: Numeric, digit?: number): number;

/**
 * @description 去除空格
 * @param {String} str 需要去除空格的字符串
 * @param {String} pos both(左右)|left|right|all 默认both
 */
declare function trim(str: string, pos?: string): string;

/**
 * @description 调用数组的每个元素以产生唯一性
 * @param {Array} arr 要去重的数组
 * @param {*} iteratee 迭代函数，调用每个元素
 * @returns {Array} 返回新的去重后的数组
 */
declare function uniqBy<T>(arr: T[], iteratee?: any): T[];

/**
 * @description 字符串脱敏（手机号，身份证，银行卡号、姓名等）
 * @param {String|Number} value 要脱敏的数据
 * @param {Number} start 前几位不参与脱敏，默认 3
 * @param {Number} end 后几位不参与脱敏，默认 4
 * @returns {String} 脱敏后的字符串
 */

declare function desensitize(value: Numeric, start?: number, end?: number, str?: string): Numeric;

/**
 * @description: 根据地址下载文件
 * @param {String} href  下载链接
 * @param {String} title 文件名称
 */
declare function download(href: string, title?: string): void;

/**
 * @description 获取 url 中指定参数
 * @param {string} name 要获取的参数名
 * @param {string} url 指定url，默认 location.ref
 * @returns {string | null}
 */
declare function getUrlParams(name: string, url: string): string | null;

/**
 * @description 获取 url 中所有参数，并转换为 json 对象
 * @param {string} url 指定url，默认 location.href
 * @returns {object}
 */
declare function getUrlAllParams(url: string): object;

export { TimeFormatItem, cloneDeep, debounce, delay, desensitize, download, eq, flattenDeep, getUrlAllParams, getUrlParams, groupBy, guid, has, isArray, isCarNo, isCode, isDef, isEmail, isEmpty, isEqual, isFunction, isIdCard, isMobile, isObject, isString, isTrue, moneyFormat, omit, queryParams, throttle, timeFormat, timeFrom, toFixed, trim, uniqBy };
