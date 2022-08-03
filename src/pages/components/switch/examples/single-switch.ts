import { Attributes, Component, vm } from 'jinge';

import _tpl from './single-switch.html';

function _rnd() {
  return Math.random() > 0.5;
}

export default class ExampleSingleCheckbox extends Component {
  static template = _tpl;

  v1: boolean;
  v2: string;
  s: { t: { v: boolean }; f: { v: boolean } };
  v3s: string;
  _v3: { v: boolean };

  constructor(attrs: Attributes) {
    super(attrs);
    this.v1 = _rnd();
    this.v2 = _rnd() ? 'yes' : 'no';
    this.s = vm({
      t: {
        v: true,
      },
      f: {
        v: false,
      },
    });
    this.v3s = '';
    this.v3 = _rnd() ? this.s.t : this.s.f;
  }

  get v3() {
    return this._v3;
  }

  set v3(v) {
    if (this._v3 === v) return;
    this._v3 = v;
    this.v3s = JSON.stringify(this._v3);
  }
}
