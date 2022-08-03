import { Attributes, Component } from 'jinge';

import { watchForComponent } from 'jinge-i18n';
import _tpl from './index.html';
import apis from './api';

import MaterialIcons from './examples/material-icons';
import sourceMaterialIcons from './examples/material-icons?example';
import FontIcons from './examples/font-icons';
import sourceFontIcons from './examples/font-icons?example';
import SvgIcons from './examples/svg-icons';
import sourceSvgIcons from './examples/svg-icons?example';
import { Examples } from '~service/interface';

export class PageIcon extends Component {
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
      materialIcons: {
        component: MaterialIcons,
        source: sourceMaterialIcons,
      },
      fontIcons: {
        component: FontIcons,
        source: sourceFontIcons,
      },
      svgIcons: {
        component: SvgIcons,
        source: sourceSvgIcons,
      },
    };
  }
}
