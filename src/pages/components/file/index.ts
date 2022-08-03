import { Attributes, Component } from 'jinge';

import { watchForComponent } from 'jinge-i18n';
import _tpl from './index.html';
import apis from './api';

import Regular from './examples/regular';
import sourceRegular from './examples/regular?example';
import { Examples } from '~service/interface';

export class PageFile extends Component {
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
      regular: {
        component: Regular,
        source: sourceRegular,
      },
    };
  }
}
