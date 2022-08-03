import { Attributes, Component } from 'jinge';

import _tpl from './text.html';

export default class ExampleInputText extends Component {
  static template = _tpl;

  initial: string;
  type: string;
  withLabel: string;
  inline: string;
  number: string;
  textarea: string;
  autogrow: string;
  disabled: string;

  constructor(attrs: Attributes) {
    super(attrs);
    this.initial = 'Initial Value';
    this.type = null;
    this.withLabel = null;
    this.inline = null;
    this.number = null;
    this.textarea = null;
    this.autogrow = null;
    this.disabled = null;
  }
}
