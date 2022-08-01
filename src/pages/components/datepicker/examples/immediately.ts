import { Attributes, Component } from 'jinge';

import _tpl from './immediately.html';

export default class ExampleDatepickerImmediately extends Component {
  static template = _tpl;

  selectedDate: Date;

  constructor(attrs: Attributes) {
    super(attrs);
    this.selectedDate = new Date('1990-04-02');
  }
}
