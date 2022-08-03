import { Attributes, Component } from 'jinge';

import _tpl from './regular.html';

export default class ExampleSnackbarRegular extends Component {
  static template = _tpl;

  position: string;
  showSnackbar: boolean;

  constructor(attrs: Attributes) {
    super(attrs);
    this.position = 'left';
    this.showSnackbar = false;
  }

  log(msg: unknown) {
    // eslint-disable-next-line no-console
    console.log(msg);
  }
}
