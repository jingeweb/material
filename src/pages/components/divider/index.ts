import { Attributes, Component } from 'jinge';
import { watchForComponent } from 'jinge-i18n';
import _tpl from './index.html';
import apis from './api';

import Divider from './examples/divider';
import sourceDivider from './examples/divider?example';
import { Examples } from '~service/interface';

export class PageDivider extends Component {
  static template = _tpl;

  api: unknown;
  _examples: Examples;

  constructor(attrs: Attributes) {
    super(attrs);
    watchForComponent(
      this,
      () => {
        this.api = apis();
      },
      true,
    );
    this._examples = {
      divider: {
        component: Divider,
        source: sourceDivider,
      },
    };
  }
}
