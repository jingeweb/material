import { Attributes, Component } from 'jinge';

import _tpl from './link-buttons.html';

export default class ExapmleLinkButtons extends Component {
  static template = _tpl;

  pageUrl: string;

  constructor(attrs: Attributes) {
    super(attrs);
    this.pageUrl = window.location.href;
  }
}
