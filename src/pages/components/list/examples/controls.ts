import { Attributes, Component, vm } from 'jinge';

import _tpl from './controls.html';

export default class ExampleListControls extends Component {
  static template = _tpl;

  ringtone: string;
  settings: unknown;
  notification: string[];

  constructor(attrs: Attributes) {
    super(attrs);
    this.ringtone = 'peace';
    this.settings = vm({
      wifi: true,
      bluetooth: false,
    });
    this.notification = vm(['sound', 'vibrate']);
  }
}
