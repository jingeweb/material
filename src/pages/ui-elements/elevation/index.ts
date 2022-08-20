import { Attributes, Component } from 'jinge';

import _tpl from './index.html';

import Basic from './examples/basic';
import sourceBasic from './examples/basic?example';
import { Examples } from '~service/interface';

export class PageElevation extends Component {
  static template = _tpl;

  api: unknown;
  _examples: Examples;

  constructor(attrs: Attributes) {
    super(attrs);

    this._examples = {
      basic: {
        component: Basic,
        source: sourceBasic,
      },
    };
  }
}
