import { Attributes, Component } from 'jinge';

import { watchForComponent } from 'jinge-i18n';
import _tpl from './index.html';
import apis from './api';

import Basic from './examples/basic';
import sourceBasic from './examples/basic?example';
import Multiple from './examples/multiple';
import sourceMultiple from './examples/multiple?example';
import Dense from './examples/dense';
import sourceDense from './examples/dense?example';
import Groups from './examples/groups';
import sourceGroups from './examples/groups?example';
import Disabled from './examples/disabled';
import sourceDisabled from './examples/disabled?example';
import { Examples } from '~service/interface';

export class PageSelect extends Component {
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
      basic: {
        component: Basic,
        source: sourceBasic,
      },
      multiple: {
        component: Multiple,
        source: sourceMultiple,
      },
      dense: {
        component: Dense,
        source: sourceDense,
      },
      groups: {
        component: Groups,
        source: sourceGroups,
      },
      disabled: {
        component: Disabled,
        source: sourceDisabled,
      },
    };
  }
}
