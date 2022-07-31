import { Attributes, Component } from 'jinge';

import { watchForComponent } from 'jinge-i18n';
import _tpl from './index.html';
import apis from './api';

import ExampleRegularCard from './examples/regular';
import sourceExampleRegularCard from './examples/regular?example';
import ExampleMediaCard from './examples/media';
import sourceExampleMediaCard from './examples/media?example';
import ExampleMediaCoverCard from './examples/media-cover';
import sourceExampleMediaCoverCard from './examples/media-cover?example';
import ExampleThemeCard from './examples/theme';
import sourceExampleThemeCard from './examples/theme?example';
import ExampleExpandCard from './examples/expand';
import sourceExampleExpandCard from './examples/expand?example';
import ExampleLayoutsCard from './examples/layouts';
import sourceExampleLayoutsCard from './examples/layouts?example';
import { Examples } from '~service/interface';

export class PageCard extends Component {
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
      regular: {
        component: ExampleRegularCard,
        source: sourceExampleRegularCard,
      },
      media: {
        component: ExampleMediaCard,
        source: sourceExampleMediaCard,
      },
      mediaCover: {
        component: ExampleMediaCoverCard,
        source: sourceExampleMediaCoverCard,
      },
      theme: {
        component: ExampleThemeCard,
        source: sourceExampleThemeCard,
      },
      expand: {
        component: ExampleExpandCard,
        source: sourceExampleExpandCard,
      },
      layouts: {
        component: ExampleLayoutsCard,
        source: sourceExampleLayoutsCard,
      },
    };
  }
}
