import { Attributes, Component, vm } from 'jinge';

import _tpl from './light.html';

function mockApi(currentCursor: string, pageSize: number) {
  const idx = Number(currentCursor || '0');
  const nextCursor = idx + pageSize > 50 ? null : (idx + pageSize).toString();
  const list = new Array(pageSize).fill(0).map((n, i) => {
    return String.fromCharCode(65 + i + idx);
  });
  return new Promise<{
    nextCursor: string;
    list: string[];
  }>((resolve) => {
    setTimeout(
      () =>
        resolve({
          nextCursor,
          list,
        }),
      2000,
    );
  });
}

export default class ExamplePaginationLight extends Component {
  static template = _tpl;

  loading: boolean;
  pageSize: number;
  cursors: string[];
  list: string[];

  constructor(attrs: Attributes) {
    super(attrs);
    this.loading = false;
    this.pageSize = 10;
    this.cursors = vm([]);
    this.list = null;
  }

  __afterRender() {
    this.request(null, this.pageSize);
  }

  request(cursor: string, pageSize: number) {
    this.loading = true;
    mockApi(cursor, pageSize).then((result) => {
      this.cursors.push(result.nextCursor || null);
      this.list = vm(result.list);
      this.loading = false;
    });
  }

  onPaginationChanged(cursor: string, pageSize: number) {
    this.pageSize = pageSize;
    this.request(cursor, pageSize);
  }

  reset() {
    this.cursors.length = 0;
    this.pageSize = 10;
    this.request(null, 10);
  }
}
