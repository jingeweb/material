import { Attributes, Component, vm } from 'jinge';

import _tpl from './template.html';

const data = vm([
  {
    name: 'jinge',
    version: 1,
    author: 'YuhangGe',
  },
  {
    name: 'vue',
    version: 3,
    author: 'vuejs',
  },
  {
    name: 'react',
    version: 16,
    author: 'facebook',
  },
  {
    name: 'angular',
    version: 7,
    author: 'google',
  },
]);

export default class ExampleTableTemplate extends Component {
  static template = _tpl;

  data: unknown;

  constructor(attrs: Attributes) {
    super(attrs);

    this.data = data;
  }

  log(...args: unknown[]) {
    // eslint-disable-next-line no-console
    console.log(...args);
  }
}
