import { Component } from 'jinge';

import _tpl from './icon-buttons.html';

export default class ExapmleIconButtons extends Component {
  static template = _tpl;

  loading: boolean;

  search() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }
}
