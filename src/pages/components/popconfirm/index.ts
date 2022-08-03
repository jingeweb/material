import { Attributes, Component } from 'jinge';

import { watchForComponent } from 'jinge-i18n';
import _tpl from './index.html';
import apis from './api';

import SimplePopconfirm from './examples/simple';
import sourceSimplePopconfirm from './examples/simple?example';
import { Examples } from '~service/interface';

export class PagePopconfirm extends Component {
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
      simple: {
        component: SimplePopconfirm,
        source: sourceSimplePopconfirm,
      },
    };
  }
}
