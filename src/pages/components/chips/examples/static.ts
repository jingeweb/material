import { Attributes, Component, vm } from 'jinge';

import _tpl from './static.html';

export default class ExampleClipsStatic extends Component {
  static template = _tpl;

  cities: string[];

  constructor(attrs: Attributes) {
    super(attrs);
    this.cities = vm(['Chengdu', 'Shanghai', 'New York', 'Tokyo']);
  }
}
