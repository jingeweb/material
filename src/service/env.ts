export interface Env {
  locale: string;
  localeKey: string;
  theme: string;
  themeKey: string;
  themeId: string;
  baseHref: string;
  [k: string]: string;
}

export const env = window.__env__;
