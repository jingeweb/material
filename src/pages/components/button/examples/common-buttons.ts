import { Attributes, Component } from 'jinge';

import _tpl from './common-buttons.html';

export default class ExampleCommonButtons extends Component {
  static template = _tpl;

  loading: boolean;

  constructor(attrs: Attributes) {
    super(attrs);
    this.loading = false;
  }

  onClick(evt: MouseEvent) {
    // eslint-disable-next-line no-console
    console.log('click button', evt);
  }

  search() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }
}
