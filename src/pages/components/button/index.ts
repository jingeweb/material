import { Attributes, Component, vm } from 'jinge';
import { watchForComponent } from 'jinge-i18n';
import _tpl from './index.html';
import apis from './api';

import RegularButtons from './examples/common-buttons';
import sourceRegularButtons from './examples/common-buttons?example';
import IconButtons from './examples/icon-buttons';
import sourceIconButtons from './examples/icon-buttons?example';
import FloatingButtons from './examples/floating-buttons';
import sourceFloatingButtons from './examples/floating-buttons?example';
import LinkButtons from './examples/link-buttons';
import sourceLinkButtons from './examples/link-buttons?example';
import SrefButtons from './examples/uisref-buttons';
import sourceSrefButtons from './examples/uisref-buttons?example';
import SegmentedButtons from './examples/segmented-button';
import sourceSegmentedButtons from './examples/segmented-button?example';
import { Examples } from '~service/interface';

export class PageButton extends Component {
  static template = _tpl;

  api: unknown;
  _examples: Examples;

  constructor(attrs: Attributes) {
    super(attrs);
    watchForComponent(this, () => (this.api = vm(apis())), true);
    this._examples = {
      regularButtons: {
        component: RegularButtons,
        source: sourceRegularButtons,
      },
      iconButtons: {
        component: IconButtons,
        source: sourceIconButtons,
      },
      floatingButtons: {
        component: FloatingButtons,
        source: sourceFloatingButtons,
      },
      linkButtons: {
        component: LinkButtons,
        source: sourceLinkButtons,
      },
      srefButtons: {
        component: SrefButtons,
        source: sourceSrefButtons,
      },
      segmentedButtons: {
        component: SegmentedButtons,
        source: sourceSegmentedButtons,
      },
    };
  }
}
