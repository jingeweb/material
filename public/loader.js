(function () {
  // 处理 404.html 跳转过来的 url。刷新网页时，github 并不能支持 html5 模式的静态路由，会访问到 404.html，再从 404 跳过来恢复 url。
  const urlParams = new URLSearchParams(location.search);
  const redirectUrl = urlParams.get('__git_pages_redirect');
  redirectUrl && history.replaceState(null, null, redirectUrl);
})();
(function () {
  const LOCALE_KEY_NAME = 'jinge-material-site.locale';
  const THEME_KEY_NAME = 'jinge-material-site.theme';
  const THEME_LINK_ID = 'jinge-material-site-theme-link';
  const SUPPORT_THEMES = ['blue', 'purple', 'green', 'red'];
  const BASE_HREF = '{BASE_HREF}'; // BASE_HEF 会被 ../scripts/html.js 替换
  /** loader utils **/
  function loadStyle(href, id) {
    return new Promise((resolve, reject) => {
      const $s = document.createElement('link');
      $s.rel = 'stylesheet';
      $s.onload = resolve;
      $s.onerror = reject;
      if (!href.startsWith('https://')) {
        href = BASE_HREF + href;
      }
      $s.href = href;
      id && ($s.id = id);
      document.head.appendChild($s);
    });
  }
  function loadScript(src) {
    return new Promise((resolve) => {
      const $s = document.createElement('script');
      $s.src = BASE_HREF + src;
      $s.async = false; // force execute sequence
      $s.onload = resolve;
      // $s.onerror = reject; // won't work any more.
      document.body.appendChild($s);
    });
  }
  function getLocale() {
    locale = localStorage.getItem(LOCALE_KEY_NAME) || navigator.language.toLowerCase().replace(/-/g, '_');
    if (locale === 'zh_cn') {
      // do nothing
    } else if (locale.startsWith('zh_')) {
      locale = 'zh_tr';
    } else {
      locale = 'en';
    }
    localStorage.setItem(LOCALE_KEY_NAME, locale);
    return locale;
  }
  function getTheme() {
    let [theme, dark] = (localStorage.getItem(THEME_KEY_NAME) || '').split('.');
    if (!theme || SUPPORT_THEMES.indexOf(theme) < 0) {
      theme = SUPPORT_THEMES[0];
    }
    if (!dark || (dark !== 'light' && dark !== 'dark')) {
      dark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return `${theme}.${dark}`;
  }

  const env = {
    baseHref: BASE_HREF,
    localeKey: LOCALE_KEY_NAME,
    themeKey: THEME_KEY_NAME,
    themeId: THEME_LINK_ID,
    locale: getLocale(),
    theme: getTheme(),
  };
  window.I18N_DEFAULT_LOCALE = env.locale;
  window.__env__ = env;

  Promise.all([
    // env.locale === 'en'
    //   ? loadStyle('https://fonts.googleapis.com/css?family=Roboto+Mono:400,500,700|Roboto:300,400,500,700')
    //   : Promise.resolve(),
    loadStyle(`themes/${env.theme}.css`, THEME_LINK_ID),
    loadStyle('{STYLE_BUNDLE}'), // STYLE_BUNDLE 和 SCRIPT_BUNDLE 会被 ../scripts/html.js 替换
    loadScript('{SCRIPT_BUNDLE}'),
  ]).catch((err) => {
    alert(`load failed with message: ${err.message || 'none'}!\nplease check console.`);
  });
})();
