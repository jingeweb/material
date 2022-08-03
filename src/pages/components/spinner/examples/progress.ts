import { Attributes, Component } from 'jinge';

import _tpl from './progress.html';

export default class ExampleProgressSpinner extends Component {
  static template = _tpl;

  v: number;
  _int: number;
  constructor(attrs: Attributes) {
    super(attrs);
    this.v = 10;
    this._int = window.setInterval(() => {
      if (this.v >= 100) {
        this.v = 10;
      } else {
        this.v += 10;
      }
    }, 2000);
  }

  __beforeDestroy() {
    clearInterval(this._int);
  }
}
