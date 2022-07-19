import Clipboard from 'clipboard';
import { Attributes, Component, createElementWithoutAttrs } from 'jinge';
import { Snackbar } from 'jinge-material/lib/snackbar';
import { getIndentedSource } from '../service';

import _tpl from './code-block.html';

const HighlightMap: Record<string, ($el: HTMLElement) => Promise<void>> = {
  ts: ($el) => import('./highlight/ts').then((mod) => mod.highlight($el)),
  bash: ($el) => import('./highlight/bash').then((mod) => mod.highlight($el)),
  html: ($el) => import('./highlight/html').then((mod) => mod.highlight($el)),
  sass: ($el) => import('./highlight/sass').then((mod) => mod.highlight($el)),
};

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
    this.height = Number(attrs.height || 450);
    this.showMessage = false;
    this._$ce = null;
  }

  __afterRender() {
    const $pre = this.__getRef('pre'); // get code dom element;
    let $code = $pre.children[0] as HTMLElement;
    if (!$code || $code.tagName !== 'CODE') {
      $code = createElementWithoutAttrs('code') as HTMLElement;
      $code.textContent = getIndentedSource(this._code || $pre.textContent);
      while ($pre.firstChild) $pre.removeChild($pre.firstChild); // clear
      $pre.appendChild($code);
    } else {
      $code.textContent = getIndentedSource($code.textContent);
    }
    this._$ce = $code;
    this.enableCopy();
    HighlightMap[this._lang]?.($code);
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
