/**
 * @description Get the current browser/app environment
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

  /** WeChat Work - must be detected before WeChat */
  if (/micromessenger/i.test(ua) && /wxwork/i.test(ua)) {
    return 'wxwork'
  }

  /** WeChat Mini Program - must be detected before WeChat */
  if (/micromessenger/i.test(ua) && /miniprogram/i.test(ua)) {
    return 'wxmini'
  }

  /** WeChat */
  if (/micromessenger/i.test(ua)) {
    return 'wechat'
  }

  /** DingTalk */
  if (/dingtalk/i.test(ua)) {
    return 'dingding'
  }

  /** Feishu/Lark */
  if (/lark/i.test(ua)) {
    return 'feishu'
  }

  /** ios */
  if (/iphone|ipod|ipad/i.test(ua)) {
    return 'ios'
  }

  /** android */
  if (/android/i.test(ua)) {
    return 'android'
  }

  /** Mobile browser */
  if (/applewebkit.*mobile.*/gi.test(ua)) {
    return 'mobile'
  }
}
