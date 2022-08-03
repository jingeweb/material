import { Attributes, Component, vm } from 'jinge';

import _tpl from './basic.html';

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

export default class ExampleTableBasic extends Component {
  static template = _tpl;

  data: unknown;

  constructor(attrs: Attributes) {
    super(attrs);

    this.data = data;
  }
}
