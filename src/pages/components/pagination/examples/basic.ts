import { Component } from 'jinge';

import _tpl from './basic.html';

export default class ExamplePaginationBasic extends Component {
  static template = _tpl;

  onPaginationChanged(currentPage: number, pageSize: number) {
    // eslint-disable-next-line no-console
    console.log('pagi:', currentPage, pageSize);
  }
}
