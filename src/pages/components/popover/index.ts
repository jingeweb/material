import { Attributes, Component } from 'jinge';

import { watchForComponent } from 'jinge-i18n';
import _tpl from './index.html';
import apis from './api';

import SimplePopover from './examples/simple';
import sourceSimplePopover from './examples/simple?example';
import { Examples } from '~service/interface';

export class PagePopover extends Component {
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
        component: SimplePopover,
        source: sourceSimplePopover,
      },
    };
  }
}
