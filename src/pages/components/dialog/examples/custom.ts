import { Attributes, Component } from 'jinge';

import _tpl from './custom.html';

export default class ExampleDialogCustomMarkup extends Component {
  static template = _tpl;

  showDialog: boolean;

  constructor(attrs: Attributes) {
    super(attrs);
    this.showDialog = false;
  }
}
