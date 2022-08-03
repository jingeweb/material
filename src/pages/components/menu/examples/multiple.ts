import { Component } from 'jinge';

import _tpl from './multiple.html';

export default class ExampleMenuMultiple extends Component {
  static template = _tpl;

  toggleCard = false;

  toggle() {
    this.toggleCard = !this.toggleCard;
  }
}
