import { Attributes, Component } from 'jinge';

import _tpl from './nav-menu.html';

export class NavMenu extends Component {
  static template = _tpl;

  _menu: unknown;

  constructor(
    attrs: Attributes<{
      _menu: unknown;
    }>,
  ) {
    super(attrs);
    this._menu = attrs._menu;
  }
}
