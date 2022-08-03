import { Attributes, Component } from 'jinge';

import _tpl from './expansion.html';

export default class ExampleListExpansion extends Component {
  static template = _tpl;

  expandNews: boolean;
  expandSingle: boolean;

  constructor(attrs: Attributes) {
    super(attrs);
    this.expandNews = false;
    this.expandSingle = false;
  }
}
