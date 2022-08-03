import './simple.scss';

import { Attributes, Component } from 'jinge';

import _tpl from './simple.html';

export default class ExampleSimplePopover extends Component {
  static template = _tpl;

  isPopShown: boolean;

  constructor(attrs: Attributes) {
    super(attrs);
    this.isPopShown = false;
  }
}
