import { Attributes, Component } from 'jinge';

import { watchForComponent } from 'jinge-i18n';
import _tpl from './index.html';
import apis from './api';

import RegularToolbar from './examples/regular';
import sourceRegularToolbar from './examples/regular?example';
import SizeToolbar from './examples/size';
import sourceSizeToolbar from './examples/size?example';
import ContentToolbar from './examples/content';
import sourceContentToolbar from './examples/content?example';
import { Examples } from '~service/interface';

export class PageToolbar extends Component {
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
      regularToolbar: {
        component: RegularToolbar,
        source: sourceRegularToolbar,
      },
      toolbarSizes: {
        component: SizeToolbar,
        source: sourceSizeToolbar,
      },
      contentActions: {
        component: ContentToolbar,
        source: sourceContentToolbar,
      },
    };
  }
}
