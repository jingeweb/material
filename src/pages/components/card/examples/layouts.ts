import { Component } from 'jinge';

import { DialogAlert } from 'jinge-material/lib/dialog/dialog-alert';
import _tpl from './layouts.html';

export default class ExampleLayoutsCard extends Component {
  static template = _tpl;

  sendMessage() {
    DialogAlert.show('Send a message...');
  }

  doACall() {
    DialogAlert.show('Calling someone...');
  }
}
