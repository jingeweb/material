import { TargetLocale } from './locale';

export interface Env {
  locale: TargetLocale;
  localeKey: string;
  theme: string;
  themeKey: string;
  themeId: string;
  baseHref: string;
  [k: string]: string;
}

export const env = window.__env__;
