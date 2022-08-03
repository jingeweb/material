import { Attributes, Component } from 'jinge';
import _tpl from './index.html';

import SingleSwitch from './examples/single-switch';
import sourceSingleSwitch from './examples/single-switch?example';
import ArraySwitch from './examples/array-switch';
import sourceArraySwitch from './examples/array-switch?example';
import { Examples } from '~service/interface';

export class PageSwitch extends Component {
  static template = _tpl;

  _examples: Examples;

  constructor(attrs: Attributes) {
    super(attrs);
    this._examples = {
      singleSwitch: {
        component: SingleSwitch,
        source: sourceSingleSwitch,
      },
      arraySwitch: {
        component: ArraySwitch,
        source: sourceArraySwitch,
      },
    };
  }
}
