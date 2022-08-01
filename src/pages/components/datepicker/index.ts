import { Attributes, Component } from 'jinge';
import { watchForComponent } from 'jinge-i18n';
import _tpl from './index.html';
import apis from './api';

import Basic from './examples/basic';
import sourceBasic from './examples/basic?example';
import Init from './examples/init';
import sourceInit from './examples/init?example';
import Immediately from './examples/immediately';
import sourceImmediately from './examples/immediately?example';
import Disable from './examples/disable';
import sourceDisable from './examples/disable?example';
import { Examples } from '~service/interface';

export class PageDatepicker extends Component {
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
      basic: {
        component: Basic,
        source: sourceBasic,
      },
      init: {
        component: Init,
        source: sourceInit,
      },
      immediately: {
        component: Immediately,
        source: sourceImmediately,
      },
      disable: {
        component: Disable,
        source: sourceDisable,
      },
    };
  }
}
