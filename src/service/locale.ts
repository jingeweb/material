import zh_cn from 'jinge-material/locales/zh_cn';
import en from 'jinge-material/locales/en';
import { setLocale as setMaterialLocale } from 'jinge-material/config';
import { getLocale, setLocale } from 'jinge-i18n';
import { env } from './env';
import { router } from './router';

let fontCheckLocale: 'en' | 'zh_cn' | false;
function loadFontIfNeed(locale: 'en' | 'zh_cn') {
  if (fontCheckLocale === false) {
    return;
  }
  if (locale === 'en') {
    if (fontCheckLocale) {
      const $s = document.createElement('link');
      $s.rel = 'stylesheet';
      $s.href = 'https://fonts.googleapis.com/css?family=Roboto+Mono:400,500,700|Roboto:300,400,500,700';
      document.head.appendChild($s);
    }
    fontCheckLocale = false;
  } else {
    fontCheckLocale = locale;
  }
}

export function setCurrentLocale(targetLocale: 'en' | 'zh_cn') {
  /**
   * 首次从非英文切换到英文时，加载 Roboto 字体。
   */
  loadFontIfNeed(targetLocale);
  /**
   * 切换组件库语言资源
   */
  setMaterialLocale(targetLocale === 'en' ? en : zh_cn);
  /**
   * 设置 router 的 baseHref
   */
  const newBaseHref = `${env.baseHref}${targetLocale}/`;
  router.baseHref = newBaseHref;

  const currentLocale = getLocale();
  if (targetLocale === currentLocale) {
    return;
  }
  /**
   * 切换语言
   */
  const oldBaseHrefRegExp = new RegExp('^' + `${env.baseHref}${currentLocale}/`);
  setLocale(targetLocale);
  history.pushState(null, null, location.pathname.replace(oldBaseHrefRegExp, newBaseHref));
  localStorage.setItem(env.localeKey, targetLocale);
  env.locale = targetLocale;
}
