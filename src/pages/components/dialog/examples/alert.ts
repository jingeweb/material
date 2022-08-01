import { Attributes, Component } from 'jinge';

import { DialogAlert } from 'jinge-material/lib/dialog/dialog-alert';

import _tpl from './alert.html';

export default class ExampleDialogAlert extends Component {
  static template = _tpl;

  first: boolean;
  second: boolean;

  constructor(attrs: Attributes) {
    super(attrs);
    this.first = false;
    this.second = false;
  }

  show() {
    DialogAlert.show(
      {
        title: 'Hello',
        content: 'This message is shown by calling DialogAlert.show()',
      },
      () => {
        // eslint-disable-next-line no-console
        console.log('callback after close.');
      },
    );
  }
}
