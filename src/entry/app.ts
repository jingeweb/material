import { Attributes, Component } from 'jinge';

import { router } from '../service/router';
import { pageState } from '../service/page-state';
import _tpl from './app.html';

export default class App extends Component {
  static template = _tpl;

  isSplash: boolean;
  appTitle: string;
  menuShown: boolean;
  hideFooter: boolean;

  constructor(attrs: Attributes) {
    super(attrs);

    // this code is important!
    // register ui router in root component
    this.__setContext('router', router);

    this.isSplash = pageState.isSplash;
    this.appTitle = pageState.title;
    this.menuShown = false;
    pageState.__on('is-splash-change', (isSplash) => {
      this.isSplash = isSplash as boolean;
    });
    pageState.__on('title-change', (title) => {
      this.appTitle = title as string;
    });

    this.hideFooter = true;
    router.beforeEach(() => {
      this.hideFooter = true;
    });
    router.afterEach(() => {
      this.hideFooter = false;
    });
  }

  __afterRender() {
    router.start();
  }
}
