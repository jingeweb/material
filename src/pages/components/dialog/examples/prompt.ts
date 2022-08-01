import { Attributes, Component } from 'jinge';

import { DialogPrompt } from 'jinge-material/lib/dialog/dialog-prompt';
import { Snackbar } from 'jinge-material/lib/snackbar';

import _tpl from './prompt.html';

function mockDeleteApi() {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) resolve();
      else reject(new Error('net work error.'));
    }, 3000);
  });
}

export default class ExampleDialogPrompt extends Component {
  static template = _tpl;

  active: boolean;
  value: string;

  constructor(attrs: Attributes) {
    super(attrs);
    this.active = false;
    this.value = 'jinge';
  }

  show() {
    DialogPrompt.show(
      {
        title: '请输入您的名字：',
        defaultValue: this.value,
        inputPlaceholder: '名字',
        inputRequired: true,
        inputMaxlength: 30,
      },
      (input) => {
        if (!input.startsWith('a')) {
          return '名字必须以字符 a 打头！';
        }
        return mockDeleteApi();
      },
      () => {
        // eslint-disable-next-line no-console
        console.log('user click cancel.');
      },
    );
  }

  onConfirm(input: string) {
    this.value = input;
    Snackbar.show(`你好，${this.value}`);
  }
}
