import { Attributes, Component } from 'jinge';
import { pageState } from '../service';

import _tpl from './page-container.html';

export class PageContainer extends Component {
  static template = _tpl;

  _t: string;
  centered: boolean;

  constructor(
    attrs: Attributes<{
      title: string;
      centered?: boolean;
    }>,
  ) {
    super(attrs);
    this.title = attrs.title;
    this.centered = !!attrs.centered;
  }

  get title() {
    return this._t;
  }

  set title(v) {
    if (this._t === v) return;
    this._t = v;
    pageState.title = v;
  }

  __afterRender() {
    pageState.isSplash = false;
  }
}
