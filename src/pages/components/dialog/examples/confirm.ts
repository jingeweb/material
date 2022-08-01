import { Attributes, Component } from 'jinge';

import { DialogConfirm } from 'jinge-material/lib/dialog/dialog-confirm';

import _tpl from './confirm.html';

function mockDeleteApi() {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) resolve();
      else reject(new Error('net work error.'));
    }, 3000);
  });
}

export default class ExampleDialogConfirm extends Component {
  static get template() {
    return _tpl;
  }

  active: boolean;
  value: string;

  constructor(attrs: Attributes) {
    super(attrs);
    this.active = false;
    this.value = null;
  }

  show() {
    DialogConfirm.show(
      {
        title: 'Confirm to delete?',
        content: 'This message is shown by calling DialogConfirm.show()',
      },
      () => {
        // eslint-disable-next-line no-console
        console.log('user click confirm.');
        return mockDeleteApi();
      },
      () => {
        // eslint-disable-next-line no-console
        console.log('user click cancel.');
      },
    );
  }

  onCancel() {
    this.value = 'Disagreed';
  }

  onConfirm() {
    this.value = 'Agreed';
  }
}
