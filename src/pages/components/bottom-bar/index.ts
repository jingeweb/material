import { Attributes, Component } from 'jinge';
import { watchForComponent } from 'jinge-i18n';
import _tpl from './index.html';
import apis from './api';

import Fixed from './examples/fixed';
import sourceFixed from './examples/fixed?example';
import Shift from './examples/shift';
import sourceShift from './examples/shift?example';
import { Examples } from '~service/interface';

export class PageBottomBar extends Component {
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
      fixed: {
        component: Fixed,
        source: sourceFixed,
      },
      shift: {
        component: Shift,
        source: sourceShift,
      },
    };
  }
}
