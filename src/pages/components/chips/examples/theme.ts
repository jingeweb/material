import { Attributes, Component, vm } from 'jinge';

import _tpl from './theme.html';

export default class ExampleClipsTheme extends Component {
  static template = _tpl;

  primary: string[];
  accent: string[];

  constructor(attrs: Attributes) {
    super(attrs);
    this.primary = vm(['Orange', 'Apple', 'Pineapple']);
    this.accent = vm(['Cat', 'Dog', 'Rabbit']);
  }
}
