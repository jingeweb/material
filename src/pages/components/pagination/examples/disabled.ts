import { Component } from 'jinge';

import _tpl from './disabled.html';

export default class ExamplePaginationDisabled extends Component {
  static template = _tpl;

  onPaginationChanged(currentPage: number, pageSize: number) {
    // eslint-disable-next-line no-console
    console.log('pagi:', currentPage, pageSize);
  }
}
