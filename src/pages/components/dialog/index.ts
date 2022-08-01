import { Attributes, Component } from 'jinge';
import { watchForComponent } from 'jinge-i18n';
import _tpl from './index.html';
import apis from './api';

import CustomMarkup from './examples/custom';
import sourceCustomMarkup from './examples/custom?example';
import Alert from './examples/alert';
import sourceAlert from './examples/alert?example';
import Confirm from './examples/confirm';
import sourceConfirm from './examples/confirm?example';
import Prompt from './examples/prompt';
import sourcePrompt from './examples/prompt?example';
import { Examples } from '~service/interface';

export class PageDialog extends Component {
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
      customMarkup: {
        component: CustomMarkup,
        source: sourceCustomMarkup,
      },
      dialogAlert: {
        component: Alert,
        source: sourceAlert,
      },
      dialogConfirm: {
        component: Confirm,
        source: sourceConfirm,
      },
      dialogPrompt: {
        component: Prompt,
        source: sourcePrompt,
      },
    };
  }
}
