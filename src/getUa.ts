/**
 * @description 获取当前网页所在的运行环境
 */

export function getUa():
  | 'ios'
  | 'android'
  | 'wechat'
  | 'wxwork'
  | 'wxmini'
  | 'dingding'
  | 'feishu'
  | 'mobile'
  | undefined {
  const ua = window.navigator.userAgent.toLowerCase()

  /** ios */
  if (/iphone|ipod|ipad/i.test(ua)) {
    return 'ios'
  }

  /** android */
  if (/android/i.test(ua)) {
    return 'android'
  }

  /** 微信 */
  if (/micromessenger/i.test(ua)) {
    return 'wechat'
  }

  /** 企业微信 */
  if (/micromessenger/i.test(ua) && /wxwork/i.test(ua)) {
    return 'wxwork'
  }

  /** 微信小程序 */
  if (/micromessenger/i.test(ua) && /miniprogram/i.test(ua)) {
    return 'wxmini'
  }

  /** 钉钉 */
  if (/dingtalk/i.test(ua)) {
    return 'dingding'
  }

  /** 飞书 */
  if (/lark/i.test(ua)) {
    return 'feishu'
  }

  /** 移动的 */
  if (/applewebkit.*mobile.*/gi.test(ua)) {
    return 'mobile'
  }
}
