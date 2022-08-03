import { Attributes, Component, vm } from 'jinge';

import _tpl from './selection.html';

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

export default class ExampleTableSelection extends Component {
  static template = _tpl;

  data: unknown[];
  selection: unknown[];

  constructor(attrs: Attributes) {
    super(attrs);
    this.data = data;
    this.selection = data.slice(0, 1);
  }

  onSelectionChange(selection: unknown[]) {
    this.selection = selection;
    // eslint-disable-next-line no-console
    console.log(selection.length);
  }
}
