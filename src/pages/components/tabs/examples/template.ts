import { Attributes, Component } from 'jinge';

import _tpl from './template.html';

export default class ExampleTabsTemplate extends Component {
  static template = _tpl;

  newPosts: string | number;
  _int: number;

  constructor(attrs: Attributes) {
    super(attrs);
    this.newPosts = 0;
    this._int = null;
  }

  clearCheckPosts() {
    clearInterval(this._int);
    this._int = null;
  }

  clearNewPosts() {
    this.clearCheckPosts();
    this.newPosts = 0;
  }

  checkNewPosts(index?: number, tab?: { id: string }) {
    if (tab && tab.id === 'tab-posts') {
      this.clearNewPosts();
    } else if (!this._int) {
      this._int = window.setInterval(() => {
        if (this.newPosts === 99) {
          this.newPosts = '99+';
          this.clearCheckPosts();
        } else {
          (this.newPosts as number)++;
        }
      }, 1000);
    }
  }

  __afterRender() {
    this.checkNewPosts();
  }

  __beforeDestroy() {
    this.clearCheckPosts();
  }
}
