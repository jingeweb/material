import { Component, vm } from 'jinge';

import _tpl from './segmented-button.html';

export default class ExapmleSrefButtons extends Component {
  static template = _tpl;

  v = 'day';
  vs = vm(['day', 'month']);

  onselect(v: string) {
    // eslint-disable-next-line no-console
    console.log('selected:', v);
  }
}
