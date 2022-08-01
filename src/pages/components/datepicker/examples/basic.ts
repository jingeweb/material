import { Attributes, Component } from 'jinge';

import _tpl from './basic.html';

export default class ExampleDatepickerBasic extends Component {
  static template = _tpl;

  selectedDate: Date;

  constructor(attrs: Attributes) {
    super(attrs);
    this.selectedDate = null;
  }

  onChange(v: Date) {
    this.selectedDate = v;
    // eslint-disable-next-line no-console
    console.log(v);
  }
}
