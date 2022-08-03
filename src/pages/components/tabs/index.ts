import { Attributes, Component } from 'jinge';
import { watchForComponent } from 'jinge-i18n';
import _tpl from './index.html';

import Router from './examples/router';
import sourceRouter from './examples/router?example';
import Content from './examples/content';
import sourceContent from './examples/content?example';
import Alignments from './examples/alignments';
import sourceAlignments from './examples/alignments?example';
import Icons from './examples/icons';
import sourceIcons from './examples/icons?example';
import Template from './examples/template';
import sourceTemplate from './examples/template?example';

import apis from './api';
import { Examples } from '~service/interface';

export class PageTabs extends Component {
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
      router: {
        component: Router,
        source: sourceRouter,
      },
      content: {
        component: Content,
        source: sourceContent,
      },
      alignments: {
        component: Alignments,
        source: sourceAlignments,
      },
      icons: {
        component: Icons,
        source: sourceIcons,
      },
      template: {
        component: Template,
        source: sourceTemplate,
      },
    };
  }
}
