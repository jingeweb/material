import { Attributes, Component } from 'jinge';
import { watchForComponent } from 'jinge-i18n';
import _tpl from './index.html';
import apis from './api';

import PaperContent from './examples/paper-content';
import sourcePaperContent from './examples/paper-content?example';
import { Examples } from '~service/interface';

export class PageContent extends Component {
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
      paperContent: {
        component: PaperContent,
        source: sourcePaperContent,
      },
    };
  }
}
