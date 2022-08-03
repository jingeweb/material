import { Attributes, Component } from 'jinge';

import _tpl from './action.html';

export default class ExampleInputAction extends Component {
  static template = _tpl;

  initial: string;
  password: string;

  constructor(attrs: Attributes) {
    super(attrs);
    this.initial = 'Initial value';
    this.password = 'S3cur!ty';
  }
}
