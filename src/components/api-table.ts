import { Attributes, Component } from 'jinge';

import _tpl from './api-table.html';

export class ApiTable extends Component {
  static template = _tpl;

  headings: string[];
  props: unknown[];

  constructor(
    attrs: Attributes<{
      headings: string[];
      props: unknown[];
    }>,
  ) {
    super(attrs);
    this.headings = attrs.headings;
    this.props = attrs.props;
  }
}
