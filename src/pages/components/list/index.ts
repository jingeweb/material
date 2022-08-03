import { Attributes, Component } from 'jinge';
import { interactionEvents } from 'jinge-material/lib/_util/interaction-events';
import { watchForComponent } from 'jinge-i18n';
import _tpl from './index.html';
import apis from './api';

import SingleLine from './examples/single-line';
import sourceSingleLine from './examples/single-line?example';
import DoubleLine from './examples/double-line';
import sourceDoubleLine from './examples/double-line?example';
import TripleLine from './examples/triple-line';
import sourceTripleLine from './examples/triple-line?example';
import ListTypes from './examples/list-types';
import sourceListTypes from './examples/list-types?example';
import Controls from './examples/controls';
import sourceControls from './examples/controls?example';
import Expansion from './examples/expansion';
import sourceExpansion from './examples/expansion?example';
import { Examples } from '~service/interface';

export class PageList extends Component {
  static template = _tpl;

  api: unknown;
  _examples: Examples;
  _interactionEvents: unknown;

  constructor(attrs: Attributes) {
    super(attrs);
    watchForComponent(
      this,
      () => {
        this.api = apis();
      },
      true,
    );
    this._interactionEvents = interactionEvents;
    this._examples = {
      singleLine: {
        component: SingleLine,
        source: sourceSingleLine,
      },
      doubleLine: {
        component: DoubleLine,
        source: sourceDoubleLine,
      },
      tripleLine: {
        component: TripleLine,
        source: sourceTripleLine,
      },
      listTypes: {
        component: ListTypes,
        source: sourceListTypes,
      },
      controls: {
        component: Controls,
        source: sourceControls,
      },
      expansion: {
        component: Expansion,
        source: sourceExpansion,
      },
    };
  }
}
