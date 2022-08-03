import { Component } from 'jinge';

import _tpl from './single.html';

export default class ExampleClipsSingle extends Component {
  static template = _tpl;

  log(msg: unknown) {
    // eslint-disable-next-line no-console
    console.log(msg);
  }
}
