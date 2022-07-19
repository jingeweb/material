import Prism from 'prismjs/components/prism-core';
import 'prismjs/components/prism-bash';

export function highlight($el: HTMLElement) {
  const html = Prism.highlight($el.textContent, Prism.languages.bash, 'bash');
  $el.innerHTML = html;
  $el.style.opacity = '1';
}
