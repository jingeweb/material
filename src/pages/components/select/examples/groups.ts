import { Attributes, Component } from 'jinge';

import _tpl from './groups.html';

export default class ExampleSelectGroups extends Component {
  static template = _tpl;

  food1: string;
  food2: string;

  constructor(attrs: Attributes) {
    super(attrs);
    this.food1 = null;
    this.food2 = 'carrots';
  }
}
