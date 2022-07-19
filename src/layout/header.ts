import { Attributes, Component, vm } from 'jinge';
import { getLocale, watchForComponent } from 'jinge-i18n';
import { setCurrentLocale, setCurrentTheme, TargetLocale } from '../service';

import './header.global.scss';

import _tpl from './header.html';
import locales from './locales';

type Theme = { theme: string; name: string };
function getThemes(): Theme[] {
  return [
    {
      theme: 'default',
      name: '默认蓝',
    },
    {
      theme: 'default-dark',
      name: '暗夜蓝',
    },
    {
      theme: 'purple',
      name: '炫酷紫',
    },
    {
      theme: 'purple-dark',
      name: '暗夜紫',
    },
  ];
}
export class Header extends Component {
  static template = _tpl;

  isSplash: boolean;
  title: string;
  _locales: typeof locales;
  locale: string;
  themes: Theme[];

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
    watchForComponent(
      this,
      () => {
        this.themes = vm(getThemes());
      },
      true,
    );
    this.locale = locales.find((l) => l.locale === getLocale()).name;
  }

  toggleMenu() {
    this.__notify('toggle-menu');
  }

  changeLocale(loc: { name: string; locale: TargetLocale }) {
    this.locale = loc.name;
    setCurrentLocale(loc.locale);
  }

  changeTheme(theme: string) {
    setCurrentTheme(theme);
  }
}
