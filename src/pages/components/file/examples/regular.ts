import { Attributes, Component } from 'jinge';

import _tpl from './regular.html';

export default class ExampleFileRegular extends Component {
  static template = _tpl;

  initial: string;
  single: boolean;
  placeholder: string;
  disabled: boolean;
  multiple: boolean;

  constructor(attrs: Attributes) {
    super(attrs);
    this.initial = 'jinge-material-is-awesome.jpg';
    this.single = null;
    this.placeholder = null;
    this.disabled = null;
    this.multiple = null;
  }
}
