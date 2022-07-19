import Prism from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';

export function highlight($el: HTMLElement) {
  const html = Prism.highlight($el.textContent, Prism.languages.typescript, 'typescript');
  $el.innerHTML = html;
  $el.style.opacity = '1';
}
