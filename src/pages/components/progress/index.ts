import { Attributes, Component } from 'jinge';

import { watchForComponent } from 'jinge-i18n';
import _tpl from './index.html';
import apis from './api';

import DeterminateProgress from './examples/determinate';
import sourceDeterminateProgress from './examples/determinate?example';
import IndeterminateProgress from './examples/indeterminate';
import sourceIndeterminateProgress from './examples/indeterminate?example';
import BufferProgress from './examples/buffer';
import sourceBufferProgress from './examples/buffer?example';
import QueryProgress from './examples/query';
import sourceQueryProgress from './examples/query?example';
import { Examples } from '~service/interface';

export class PageProgress extends Component {
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
      determinate: {
        component: DeterminateProgress,
        source: sourceDeterminateProgress,
      },
      indeterminate: {
        component: IndeterminateProgress,
        source: sourceIndeterminateProgress,
      },
      buffer: {
        component: BufferProgress,
        source: sourceBufferProgress,
      },
      query: {
        component: QueryProgress,
        source: sourceQueryProgress,
      },
    };
  }
}
