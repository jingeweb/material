import { Component } from 'jinge';

import _tpl from './non-editable.html';

export default class ExampleSteppersNoneEditable extends Component {
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
