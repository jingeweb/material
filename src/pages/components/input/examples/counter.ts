import { Attributes, Component } from 'jinge';

import _tpl from './counter.html';

export default class ExampleInputCounter extends Component {
  static template = _tpl;

  regular: string;
  maxLength: string;
  disabled: string;
  autogrow: string;
  textarea: string;

  constructor(attrs: Attributes) {
    super(attrs);
    this.regular = null;
    this.maxLength = null;
    this.disabled = null;
    this.autogrow = null;
    this.textarea = null;
  }
}
