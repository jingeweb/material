import Prism from 'prismjs/components/prism-core';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-sass';

export function highlight($el: HTMLElement) {
  const html = Prism.highlight($el.textContent, Prism.languages.sass, 'sass');
  $el.innerHTML = html;
  $el.style.opacity = '1';
}
