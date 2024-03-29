import { Attributes, Component } from 'jinge';
import { watchForComponent } from 'jinge-i18n';
import _tpl from './index.html';
import apis from './api';

import Static from './examples/static';

import sourceStatic from './examples/static?example';
import Trigger from './examples/trigger';
import sourceTrigger from './examples/trigger?example';
import Box from './examples/box';
import sourceBox from './examples/box?example';
import Template from './examples/template';
import sourceTemplate from './examples/template?example';
import Search from './examples/search';
import sourceSearch from './examples/search?example';
import Async from './examples/async';
import sourceAsync from './examples/async?example';
import { Examples } from '~service/interface';

export class PageAutocomplete extends Component {
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
      static: {
        component: Static,
        source: sourceStatic,
      },
      trigger: {
        component: Trigger,
        source: sourceTrigger,
      },
      box: {
        component: Box,
        source: sourceBox,
      },
      template: {
        component: Template,
        source: sourceTemplate,
      },
      search: {
        component: Search,
        source: sourceSearch,
      },
      async: {
        component: Async,
        source: sourceAsync,
      },
    };
  }
}
