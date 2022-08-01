import { Attributes, Component } from 'jinge';

import _tpl from './disable.html';

export default class ExampleDatepickerDisable extends Component {
  static template = _tpl;

  selectedDate: Date;

  constructor(attrs: Attributes) {
    super(attrs);
    this.selectedDate = new Date('2018-07-12');
  }

  isHoliday(year: number, month: number, date: number, weekday: number) {
    return weekday === 6 || weekday === 0;
  }
}
