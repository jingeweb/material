import { Attributes, Component } from 'jinge';

import _tpl from './determinate.html';

export default class ExampleDeterminateProgress extends Component {
  static template = _tpl;

  amount: number;

  constructor(attrs: Attributes) {
    super(attrs);
    this.amount = (Math.random() * 100) | 0;
  }
}
