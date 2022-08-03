import { Attributes, Component } from 'jinge';

import { watchForComponent } from 'jinge-i18n';
import _tpl from './index.html';
import apis from './api';

import LoadingSpinner from './examples/loading';
import sourceLoadingSpinner from './examples/loading?example';
import ProgressSpinner from './examples/progress';
import sourceProgressSpinner from './examples/progress?example';
import ButtonSpinner from './examples/button';
import sourceButtonSpinner from './examples/button?example';
import { Examples } from '~service/interface';

export class PageSpinner extends Component {
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
      loadingSpinner: {
        component: LoadingSpinner,
        source: sourceLoadingSpinner,
      },
      progressSpinner: {
        component: ProgressSpinner,
        source: sourceProgressSpinner,
      },
      buttonSpinner: {
        component: ButtonSpinner,
        source: sourceButtonSpinner,
      },
    };
  }
}
