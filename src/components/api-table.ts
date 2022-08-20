import { Attributes, Component } from 'jinge';

import _tpl from './api-table.html';

export class ApiTable extends Component {
  static template = _tpl;

  props: unknown[];

  constructor(attrs: Attributes<{ props: unknown[] }>) {
    super(attrs);
    this.props = attrs.props;
  }
}
