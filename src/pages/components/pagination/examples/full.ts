import { Attributes, Component, vm } from 'jinge';

import _tpl from './full.html';

export default class ExamplePaginationFull extends Component {
  static template = _tpl;

  onPaginationChanged(currentPage: number, pageSize: number) {
    // eslint-disable-next-line no-console
    console.log('pagi:', currentPage, pageSize);
  }

  sizeOptions: number[];
  totalSize: number;

  constructor(attrs: Attributes) {
    super(attrs);
    this.sizeOptions = vm([10, 50, 100, 200]);
    this.totalSize = ((Math.random() * 1000) | 0) + 1000;
  }
}
