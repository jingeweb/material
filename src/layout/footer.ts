import { Attributes, Component } from 'jinge';

import _tpl from './footer.html';

export class Footer extends Component {
  static template = _tpl;

  hide: boolean;
  isSplash: boolean;

  constructor(
    attrs: Attributes<{
      hide: boolean;
      isSplash: boolean;
    }>,
  ) {
    super(attrs);
    this.hide = attrs.hide;
    this.isSplash = attrs.isSplash;
  }
}
