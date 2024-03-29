import { Attributes, Component } from 'jinge';
import { watchForComponent } from 'jinge-i18n';
import _tpl from './index.html';

import Horizontal from './examples/horizontal';
import sourceHorizontal from './examples/horizontal?example';
import Alternative from './examples/alternative';
import sourceAlternative from './examples/alternative?example';
import Vertical from './examples/vertical';
import sourceVertical from './examples/vertical?example';
import Linear from './examples/linear';
import sourceLinear from './examples/linear?example';
import NonEditable from './examples/non-editable';
import sourceNonEditable from './examples/non-editable?example';

import apis from './api';
import { Examples } from '~service/interface';

export class PageSteppers extends Component {
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
      horizontal: {
        component: Horizontal,
        source: sourceHorizontal,
      },
      alternative: {
        component: Alternative,
        source: sourceAlternative,
      },
      vertical: {
        component: Vertical,
        source: sourceVertical,
      },
      linear: {
        component: Linear,
        source: sourceLinear,
      },
      nonEditable: {
        component: NonEditable,
        source: sourceNonEditable,
      },
    };
  }
}
