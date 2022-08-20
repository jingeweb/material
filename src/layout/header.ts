import { Attributes, Component, vm } from 'jinge';
import { getLocale } from 'jinge-i18n';
import { env, setCurrentLocale, setCurrentTheme, TargetLocale } from '../service';

import _tpl from './header.html';
import locales from './locales';

type Theme = { theme: string; color: string };
const Themes: Theme[] = vm([
  {
    theme: 'purple',
    color: '#6750a4',
  },
  {
    theme: 'blue',
    color: '#0856cf',
  },
  {
    theme: 'red',
    color: '#c00006',
  },
  {
    theme: 'green',
    color: '#3c6a1c',
  },
]);

export class Header extends Component {
  static template = _tpl;

  isSplash: boolean;
  title: string;
  _locales: typeof locales;
  scrolled: boolean;
  locale: string;
  themes: Theme[];
  curTheme: Theme;
  darkMode: boolean;

  constructor(
    attrs: Attributes<{
      isSplash: boolean;
      title: string;
    }>,
  ) {
    super(attrs);
    this.isSplash = attrs.isSplash;
    this.title = attrs.title;
    this._locales = locales;
    this.themes = Themes;
    this.locale = locales.find((l) => l.locale === getLocale()).name;
    const ts = env.theme.split('.');
    this.curTheme = Themes.find((t) => t.theme === ts[0]);
    this.darkMode = ts[1] === 'dark';
  }

  toggleMenu() {
    this.__notify('toggle-menu');
  }

  changeLocale(loc: { name: string; locale: TargetLocale }) {
    this.locale = loc.name;
    setCurrentLocale(loc.locale);
  }

  changeTheme(theme: Theme) {
    this.curTheme = theme;
    this._updateTheme();
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    this._updateTheme();
  }

  _updateTheme() {
    setCurrentTheme(`${this.curTheme.theme}.${this.darkMode ? 'dark' : 'light'}`);
  }

  __afterRender() {
    this.__domAddListener(document, 'scroll', () => {
      this.scrolled = document.documentElement.scrollTop > 4;
    });
  }
}
