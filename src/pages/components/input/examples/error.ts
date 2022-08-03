import { Attributes, Component } from 'jinge';

import _tpl from './error.html';

export default class ExampleInputError extends Component {
  static template = _tpl;

  noError: string;
  required: string;
  textarea: string;
  messageClass: string;
  _hm: boolean;

  constructor(attrs: Attributes) {
    super(attrs);
    this.noError = null;
    this.required = null;
    this.textarea = null;
    this.messageClass = undefined;
    this.hasMessages = false;
  }

  get hasMessages() {
    return this._hm;
  }

  set hasMessages(v) {
    if (this._hm === v) return;
    this._hm = v;
    this.messageClass = v ? 'md-invalid' : undefined;
  }
}
