import { Attributes, Component } from 'jinge';

import _tpl from './note-block.html';

export class NoteBlock extends Component {
  static template = _tpl;

  alert: boolean;
  warning: boolean;
  tip: string;

  constructor(
    attrs: Attributes<{
      alert: boolean;
      warning: boolean;
      tip: string;
    }>,
  ) {
    super(attrs);
    this.alert = attrs.alert;
    this.warning = attrs.warning;
    this.tip = attrs.tip;
  }
}
