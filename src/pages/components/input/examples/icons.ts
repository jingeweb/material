import { Attributes, Component } from 'jinge';

import _tpl from './icons.html';

export default class ExampleInputIcons extends Component {
  static template = _tpl;

  date: string;
  voice: string;
  description: string;
  money: string;

  constructor(attrs: Attributes) {
    super(attrs);
    this.date = null;
    this.voice = null;
    this.description = null;
    this.money = null;
  }
}
