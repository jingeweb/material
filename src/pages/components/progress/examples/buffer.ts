import { Attributes, Component } from 'jinge';

import _tpl from './buffer.html';

export default class ExampleBufferProgress extends Component {
  static template = _tpl;

  amount: number;
  buffer: number;

  constructor(attrs: Attributes) {
    super(attrs);
    this.amount = (Math.random() * 100) | 0;
    this.buffer = (Math.random() * 100) | 0;
  }
}
