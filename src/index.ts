// import app style
import './entry/style.scss';

import { bootstrap } from 'jinge';
import { router } from './service/router';

import App from './entry/app';
import Routes from './entry/routes';

Routes.forEach((r) => router.register(r));

bootstrap(App, document.getElementById('root-app'));
