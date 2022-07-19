import { Attributes, Component } from 'jinge';
import { RouterInfo } from 'jinge-router';
import { router } from '../service';

import _tpl from './nav.html';

function _r(routeInfo: RouterInfo) {
  const routeInfoPath = routeInfo._routePath;
  return routeInfoPath.length > 0 ? routeInfoPath[routeInfoPath.length - 1].route : null;
}

export class Nav extends Component {
  static template = _tpl;

  isSplash: boolean;
  menuShown: boolean;
  _obd: () => void;

  constructor(
    attrs: Attributes<{
      isSplash: boolean;
      menuShown: boolean;
    }>,
  ) {
    super(attrs);
    this.isSplash = attrs.isSplash;
    this.menuShown = attrs.menuShown;
    this._obd = null;
  }

  hideMenu() {
    this.menuShown = false;
    this.__notify('hide-menu');
  }

  __afterRender() {
    this._obd = router.afterEach((from, to) => {
      if (_r(from) !== _r(to)) {
        document.documentElement.scrollTop = 0;
      }
      this.hideMenu();
    });
  }

  __beforeDestroy() {
    this._obd();
  }
}
