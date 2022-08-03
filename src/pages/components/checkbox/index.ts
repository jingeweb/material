import { Attributes, Component } from 'jinge';
import { watchForComponent } from 'jinge-i18n';
import _tpl from './index.html';
import apis from './api';

import SingleCheckbox from './examples/single-checkbox';
import sourceSingleCheckbox from './examples/single-checkbox?example';
import ArrayCheckbox from './examples/array-checkbox';
import sourceArrayCheckbox from './examples/array-checkbox?example';
import { Examples } from '~service/interface';

export class PageCheckbox extends Component {
  static get template() {
    return _tpl;
  }

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
      singleCheckbox: {
        component: SingleCheckbox,
        source: sourceSingleCheckbox,
      },
      arrayCheckbox: {
        component: ArrayCheckbox,
        source: sourceArrayCheckbox,
      },
    };
  }
}
