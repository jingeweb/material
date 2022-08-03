import { Attributes, Component, vm } from 'jinge';

import _tpl from './editable.html';

export default class ExampleClipsEditable extends Component {
  static get template() {
    return _tpl;
  }

  fruits: string[];

  constructor(attrs: Attributes) {
    super(attrs);
    this.fruits = vm(['Orange', 'Apple']);
  }

  log(msg: unknown) {
    // eslint-disable-next-line no-console
    console.log(msg);
  }
}
