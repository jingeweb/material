import { Attributes, Component } from 'jinge';
import { watchForComponent } from 'jinge-i18n';
import _tpl from './index.html';
import apis from './api';

import SimpleRadio from './examples/simple-radios';
import sourceSimpleRadio from './examples/simple-radios?example';
import { Examples } from '~service/interface';

export class PageRadio extends Component {
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
      simpleRadio: {
        component: SimpleRadio,
        source: sourceSimpleRadio,
      },
    };
  }
}
