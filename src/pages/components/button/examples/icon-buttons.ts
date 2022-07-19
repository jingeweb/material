import { Component } from 'jinge';

import _tpl from './icon-buttons.html';

export default class ExapmleIconButtons extends Component {
  static template = _tpl;

  onClick(evt: MouseEvent) {
    // eslint-disable-next-line no-console
    console.log('click button', evt);
  }
}
