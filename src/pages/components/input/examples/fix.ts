import { Attributes, Component } from 'jinge';

import _tpl from './fix.html';

export default class ExampleInputFix extends Component {
  static template = _tpl;

  initial: number;
  empty: string;

  constructor(attrs: Attributes) {
    super(attrs);
    this.initial = 0;
    this.empty = '';
  }
}
