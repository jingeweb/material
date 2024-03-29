import { Attributes, Component } from 'jinge';
import { watchForComponent } from 'jinge-i18n';
import _tpl from './index.html';
import apis from './api';

import Placement from './examples/placement';
import sourcePlacement from './examples/placement?example';
import Size from './examples/size';
import sourceSize from './examples/size?example';
import Close from './examples/close';
import sourceClose from './examples/close?example';
import Offset from './examples/offset';
import sourceOffset from './examples/offset?example';
import Multiple from './examples/multiple';
import sourceMultiple from './examples/multiple?example';
import { Examples } from '~service/interface';

export class PageMenu extends Component {
  static template = _tpl;

  api: unknown;
  _examples: Examples;

  constructor(attrs: Attributes) {
    super(attrs);
    watchForComponent(
      this,
      () => {
        this.api = apis();
      },
      true,
    );
    this._examples = {
      placement: {
        component: Placement,
        source: sourcePlacement,
      },
      size: {
        component: Size,
        source: sourceSize,
      },
      close: {
        component: Close,
        source: sourceClose,
      },
      offset: {
        component: Offset,
        source: sourceOffset,
      },
      multiple: {
        component: Multiple,
        source: sourceMultiple,
      },
    };
  }
}
