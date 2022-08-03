import { Attributes, Component, vm } from 'jinge';
import { watchForComponent } from 'jinge-i18n';

import { Snackbar } from 'jinge-material/lib/snackbar';

import _tpl from './simple.html';

function mockDeleteApi() {
  // mock server api
  return new Promise<void>((resolve, reject) =>
    setTimeout(() => {
      if (Math.random() > 0.5) resolve();
      else reject(new Error('server error.'));
    }, 1500),
  );
}

export default class ExampleSimplePopover extends Component {
  static template = _tpl;

  isConfirmShown: boolean;
  fetching: boolean;
  some: { name: string };
  errorTip: string;

  constructor(attrs: Attributes) {
    super(attrs);
    watchForComponent(
      this,
      () => {
        this.some = vm({
          name: '未命名',
        });
      },
      true,
    );
    this.isConfirmShown = false;
    this.fetching = false;
  }

  confirm() {
    // eslint-disable-next-line no-console
    console.log('user click yes.');
  }

  cancel() {
    // eslint-disable-next-line no-console
    console.log('user click no.');
  }

  submitDelete() {
    this.fetching = true;
    this.errorTip = null;
    mockDeleteApi().then(
      () => {
        Snackbar.show('删除成功！');
        this.isConfirmShown = false;
        this.fetching = false;
      },
      (err) => {
        this.errorTip = err.toString();
        this.fetching = false;
      },
    );
  }
}
