import { Attributes, Component } from 'jinge';

import _tpl from './code-example.html';

export class CodeExample extends Component {
  static template = _tpl;

  _title: string;
  _example: unknown;
  _label: string;
  tab: string;

  constructor(
    attrs: Attributes<{
      title: string;
      example: unknown;
      label: string;
    }>,
  ) {
    super(attrs);
    this._title = attrs.title;
    this._example = attrs.example;
    this._label = attrs.label || 'jinge';
    this.tab = 'demo';
  }
}
