import Prism from 'prismjs/components/prism-core';
import 'prismjs/components/prism-markup';

export function highlight($el: HTMLElement) {
  const html = Prism.highlight($el.textContent, Prism.languages.html, 'html');
  $el.innerHTML = html;
  $el.style.opacity = '1';
}
