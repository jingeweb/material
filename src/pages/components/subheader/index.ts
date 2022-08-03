import { Attributes, Component } from 'jinge';
import _tpl from './index.html';

import Subheader from './examples/subheader';
import sourceSubheader from './examples/subheader?example';
import { Examples } from '~service/interface';

export class PageSubheader extends Component {
  static template = _tpl;

  _examples: Examples;

  constructor(attrs: Attributes) {
    super(attrs);
    this._examples = {
      subheader: {
        component: Subheader,
        source: sourceSubheader,
      },
    };
  }
}
