import { Attributes, Component } from 'jinge';
import { watchForComponent } from 'jinge-i18n';
import _tpl from './index.html';
import apis from './api';

import Over from './examples/over';
import sourceOver from './examples/over?example';
import Push from './examples/push';
import sourcePush from './examples/push?example';
import { Examples } from '~service/interface';

export class PageDrawer extends Component {
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
      over: {
        component: Over,
        source: sourceOver,
      },
      push: {
        component: Push,
        source: sourcePush,
      },
    };
  }
}
