import { Attributes, Component } from 'jinge';
import _tpl from './code-example.html';
import { Example } from '~service/interface';

export class CodeExample extends Component {
  static template = _tpl;

  _title: string;
  _example: Example;
  _label: string;
  tab: string;

  constructor(
    attrs: Attributes<{
      title: string;
      example: Example;
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
