import { Attributes, Component } from 'jinge';

import { Snackbar } from 'jinge-material/lib/snackbar';
import _tpl from './static.html';

export default class ExampleSnackbarStatic extends Component {
  static get template() {
    return _tpl;
  }

  _inc: number;

  constructor(attrs: Attributes) {
    super(attrs);
    this._inc = 0;
  }

  show() {
    Snackbar.show({
      position: Math.random() > 0.5 ? 'center' : 'left',
      message: `Hello, World ${this._inc++}.`,
      duration: ((Math.random() * 3000) | 0) + 1000,
    });
  }
}
