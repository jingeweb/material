import { Attributes, Component } from 'jinge';

import _tpl from './button.html';

export default class ExampleLoadingSpinner extends Component {
  static template = _tpl;

  loading: boolean;

  constructor(attrs: Attributes) {
    super(attrs);
    this.loading = false;
  }

  submit() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }
}
