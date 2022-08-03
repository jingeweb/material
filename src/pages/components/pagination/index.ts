import { Attributes, Component } from 'jinge';

import { watchForComponent } from 'jinge-i18n';
import _tpl from './index.html';
import apis from './api';

import Basic from './examples/basic';
import sourceBasic from './examples/basic?example';
import Full from './examples/full';
import sourceFull from './examples/full?example';
import Disabled from './examples/disabled';
import sourceDisabled from './examples/disabled?example';
import Light from './examples/light';
import sourceLight from './examples/light?example';
import { Examples } from '~service/interface';

export class PagePagination extends Component {
  static get template() {
    return _tpl;
  }

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
      full: {
        component: Full,
        source: sourceFull,
      },
      disabled: {
        component: Disabled,
        source: sourceDisabled,
      },
      light: {
        component: Light,
        source: sourceLight,
      },
    };
  }
}
