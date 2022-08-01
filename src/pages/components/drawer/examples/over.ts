import { Attributes, Component } from 'jinge';

import _tpl from './over.html';

export default class ExampleDrawerTemporary extends Component {
  static template = _tpl;

  showNavigation: boolean;
  showSidepanel: boolean;

  constructor(attrs: Attributes) {
    super(attrs);
    this.showNavigation = false;
    this.showSidepanel = false;
  }
}
