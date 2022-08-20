import { Router } from 'jinge-router';
import { env } from './env';

export const router = new Router({
  mode: 'html5',
  baseHref: env.baseHref,
});
