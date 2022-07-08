(function () {
  const LOCALE_KEY_NAME = 'jinge-material-site.locale';
  const THEME_KEY_NAME = 'jinge-material-site.theme';
  const THEME_LINK_ID = 'jinge-material-site-theme-link';
  const SUPPORT_THEMES = ['default', 'default-dark', 'purple', 'purple-dark'];

  /** loader utils **/
  function loadStyle(href, id) {
    return new Promise((resolve, reject) => {
      const $s = document.createElement('link');
      $s.rel = 'stylesheet';
      $s.onload = resolve;
      $s.onerror = reject;
      if (!href.startsWith('https://')) {
        href = env.meta.public + href;
      }
      $s.href = href;
      id && ($s.id = id);
      document.head.appendChild($s);
    });
  }
  function loadScript(src) {
    return new Promise((resolve) => {
      const $s = document.createElement('script');
      $s.src = env.meta.public + src;
      $s.async = false; // force execute sequence
      $s.onload = resolve;
      // $s.onerror = reject; // won't work any more.
      document.body.appendChild($s);
    });
  }
  function getLocale() {
    const ps = location.pathname.split('/')[2];
    let locale = ps[2];
    if (locale === 'zh_cn' || locale === 'en') {
      localStorage.setItem(LOCALE_KEY_NAME, locale);
      return locale;
    }
    locale = localStorage.getItem(LOCALE_KEY_NAME) || navigator.language.toLowerCase().replace(/-/g, '_');
    if (locale.startsWith('zh_')) {
      locale = 'zh_cn';
    } else {
      locale = 'en';
    }
    history.replaceState(null, null, `/${ps[1]}/${locale}/`);
    localStorage.setItem(LOCALE_KEY_NAME, locale);
    return locale;
  }
  function getTheme() {
    let theme = localStorage.getItem(THEME_KEY_NAME);
    if (!theme || SUPPORT_THEMES.indexOf(theme) < 0) {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        theme = SUPPORT_THEMES[1];
      } else {
        theme = SUPPORT_THEMES[0];
      }
    }
    localStorage.setItem(THEME_KEY_NAME, theme);
    return theme;
  }

  const env = {
    localeKey: LOCALE_KEY_NAME,
    themeKey: THEME_KEY_NAME,
    themeId: THEME_LINK_ID,
    locale: getLocale(),
    theme: getTheme(),
  };
  window.I18N_DEFAULT_LOCALE = env.locale;
  window.__env__ = env;

  /** run application **/
  if (location.search.startsWith('?__git_pages_redirect=')) {
    const redirectPath = decodeURIComponent(location.search.substring(22));
    history.replaceState(null, null, redirectPath);
  }

  Promise.all([
    env.locale === 'en'
      ? loadStyle('https://fonts.googleapis.com/css?family=Roboto+Mono:400,500,700|Roboto:300,400,500,700')
      : Promise.resolve(),
    loadStyle(`css/theme-${env.theme}.css`, THEME_LINK_ID),
    loadStyle('css/index.css'),
    loadScript('js/index.js'),
  ]).catch((err) => {
    alert(`load failed with message: ${err.message || 'none'}!\nplease check console.`);
  });
})();
