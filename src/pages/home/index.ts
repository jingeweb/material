import { Component } from 'jinge';

import { pageState } from '../../service';
import _tpl from './index.html';

export class PageHome extends Component {
  static template = _tpl;

  __afterRender() {
    pageState.isSplash = true;
    pageState.title = 'Jinge Material - 构建在 Jinge 框架上的 Material Design 组件库';
  }
}
