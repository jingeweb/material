import { Attributes, Component } from 'jinge';

import _tpl from './regular-buttons.html';

export default class ExampleRegularButtons extends Component {
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

  load() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }
}
