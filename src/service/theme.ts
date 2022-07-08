import { createElement } from 'jinge';
import { env } from './env';

export function setCurrentTheme(theme: string) {
  localStorage.setItem(env.themeKey, theme);
  env.theme = theme;
  const $head = document.head;
  const $oldLink = document.getElementById(env.themeId);
  const $link = createElement('link', {
    rel: 'stylesheet',
    href: `${env.baseHref}css/theme-${theme}.css`,
    id: env.themeId,
  }) as HTMLLinkElement;
  $link.onload = function () {
    $oldLink && $head.removeChild($oldLink);
  };
  $head.appendChild($link);
}
