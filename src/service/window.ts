import { Env } from './env';

declare global {
  interface Window {
    __env__: Env;
  }
}
