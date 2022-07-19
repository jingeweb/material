import { Attributes, Component } from 'jinge';

import _tpl from './alignment.html';

export default class ExampleLayoutAlignment extends Component {
  static template = _tpl;

  vertical: string;
  horizontal: string;

  constructor(attrs: Attributes) {
    super(attrs);
    this.vertical = null;
    this.horizontal = null;
  }
}
