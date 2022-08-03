import { Attributes, Component } from 'jinge';

import _tpl from './disabled.html';

export default class ExampleSelectDisabled extends Component {
  static template = _tpl;

  movie: string;
  food: string;
  country: string;

  constructor(attrs: Attributes) {
    super(attrs);
    this.movie = null;
    this.food = null;
    this.country = null;
  }
}
