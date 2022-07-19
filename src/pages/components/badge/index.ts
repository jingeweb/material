import { Attributes, Component } from 'jinge';
import { watchForComponent } from 'jinge-i18n';
import _tpl from './index.html';
import apis from './api';

import Buttons from './examples/button';
import sourceButtons from './examples/button?example';
import Lists from './examples/list';
import sourceLists from './examples/list?example';
import Dense from './examples/dense';
import sourceDense from './examples/dense?example';
import { Examples } from '~service/interface';

export class PageBadge extends Component {
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
      buttons: {
        component: Buttons,
        source: sourceButtons,
      },
      lists: {
        component: Lists,
        source: sourceLists,
      },
      dense: {
        component: Dense,
        source: sourceDense,
      },
    };
  }
}
