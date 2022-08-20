import 'jinge-material/style/index.css';
import './entry/style.scss';

import { bootstrap } from 'jinge';
import { router } from './service/router';

import App from './entry/app';
import Routes from './entry/routes';
import { env, setCurrentLocale } from './service';

Routes.forEach((r) => router.register(r));
setCurrentLocale(env.locale);
bootstrap(App, document.getElementById('root-app'));
