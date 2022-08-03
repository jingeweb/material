import { Attributes, Component, vm } from 'jinge';

import _tpl from './duplicated.html';

export default class ExampleClipsDuplicated extends Component {
  static template = _tpl;

  chips: string[];

  constructor(attrs: Attributes) {
    super(attrs);
    this.chips = vm(['Pop', 'Rock', 'Jazz', 'Metal']);
  }

  log(msg: unknown) {
    // eslint-disable-next-line no-console
    console.log(msg);
  }
}
