import { Attributes, Component } from 'jinge';

import _tpl from './init.html';

export default class ExampleDatepickerInit extends Component {
  static template = _tpl;

  selectedDate: Date;

  constructor(attrs: Attributes) {
    super(attrs);
    this.selectedDate = new Date('1990-04-02');
  }
}
