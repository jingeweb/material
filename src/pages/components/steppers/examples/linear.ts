import { Component } from 'jinge';

import _tpl from './linear.html';

export default class ExampleSteppersLinear extends Component {
  static template = _tpl;

  active = 'first';
  first = false;
  second = false;
  third = false;
  error = '';

  setDone(id: 'first', index: string) {
    this[id] = true;
    this.error = null;
    if (index) {
      this.active = index;
    }
  }

  setError() {
    this.error = 'This is an error!';
  }
}
