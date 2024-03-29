import zh_cn from 'jinge-material/locales/zh_cn';
import en from 'jinge-material/locales/en';
import { setLocale as setMaterialLocale } from 'jinge-material/config';
import { getLocale, setLocale } from 'jinge-i18n';
import { env } from './env';
import { router } from './router';

export type TargetLocale = 'en' | 'zh_cn';

function loadFontIfNeed(locale: TargetLocale) {
  const ID = 'roboto-webfont-link';
  if (locale !== 'en' || document.head.querySelector('#' + ID)) return;
  const $s = document.createElement('link');
  $s.id = ID;
  $s.rel = 'stylesheet';
  $s.href = 'https://fonts.googleapis.com/css?family=Roboto+Mono:400,500,700|Roboto:300,400,500,700';
  document.head.appendChild($s);
}

export function setCurrentLocale(targetLocale: TargetLocale) {
  /**
   * 英文环境需要加载 Roboto 字体。
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
