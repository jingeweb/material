import { Attributes, Component } from 'jinge';
import { watchForComponent } from 'jinge-i18n';
import _tpl from './index.html';
import apis from './api';

import Basic from './examples/basic';
import sourceBasic from './examples/basic?example';
import Colors from './examples/colors';
import sourceColors from './examples/colors?example';
import Rounded from './examples/rounded';
import sourceRounded from './examples/rounded?example';
import { Examples } from '~service/interface';

export class PageEmptyState extends Component {
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
      colors: {
        component: Colors,
        source: sourceColors,
      },
      rounded: {
        component: Rounded,
        source: sourceRounded,
      },
    };
  }
}
