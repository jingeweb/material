import highlight from 'highlight.js/lib/core';
import highlightSCSS from 'highlight.js/lib/languages/scss';
import highlightXML from 'highlight.js/lib/languages/xml';
import highlightBash from 'highlight.js/lib/languages/bash';
import highlightJavascript from 'highlight.js/lib/languages/javascript';
import Clipboard from 'clipboard';
import { Attributes, Component } from 'jinge';
import { Snackbar } from 'jinge-material/lib/snackbar';
import { getIndentedSource } from '../service';

import _tpl from './code-block.html';
import './code-block.global.scss';

highlight.registerLanguage('scss', highlightSCSS);
highlight.registerLanguage('xml', highlightXML);
highlight.registerLanguage('javascript', highlightJavascript);
highlight.registerLanguage('bash', highlightBash);

export class CodeBlock extends Component {
  static template = _tpl;

  _lang: string;
  _code: string;
  height?: number;
  showMessage?: boolean;
  _$ce: HTMLElement;

  constructor(
    attrs: Attributes<{
      lang: string;
      code: string;
      height?: number;
    }>,
  ) {
    super(attrs);
    this._lang = attrs.lang;
    this._code = attrs.code || '';
    this.height = attrs.height || 450;
    this.showMessage = false;
    this._$ce = null;
  }

  __afterRender() {
    this._$ce = this.__getRef('code'); // get code dom element
    this.reindentSource();
    this.enableCopy();

    highlight.highlightBlock(this._$ce);
  }

  reindentSource() {
    this._$ce.textContent = getIndentedSource(this._$ce.textContent);
  }

  enableCopy() {
    const $cb = this.__getRef<Component>('copy'); // get copy button
    if (!$cb) return;

    const clipboard = new Clipboard($cb.__firstDOM as HTMLElement, {
      target: () => this._$ce,
    });
    clipboard.on('success', (event) => {
      event.clearSelection();
      Snackbar.show({
        message: '代码已复制！',
        duration: 1500,
      });
    });
  }
}
