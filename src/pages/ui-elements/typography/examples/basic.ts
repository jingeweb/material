import { Attributes, Component } from 'jinge';

import _tpl from './basic.html';

// https://m3.material.io/styles/typography/overview
const Typos: Record<string, unknown[][]> = {
  Display: [
    [57, 64, 0],
    [45, 52, 0],
    [36, 44, 0],
  ],
  Headline: [
    [32, 40, 0],
    [28, 36, 0],
    [24, 32, 0],
  ],
  Title: [
    [22, 28, 0],
    [16, 24, '+0.15'],
    [14, 20, '+0.1'],
  ],
  Label: [
    [14, 20, '+0.1'],
    [12, 16, '+0.5'],
    [11, 16, '+0.5'],
  ],
  Body: [
    [16, 24, '+0.15'],
    [14, 20, '+0.25'],
    [12, 16, '+0.4'],
  ],
};
export default class ExampleElevation extends Component {
  static template = _tpl;

  _typos: unknown;

  constructor(attrs: Attributes) {
    super(attrs);
    // jinge 框架的 <for> 组件暂时不支持遍历 object 类型，先转成数组。
    this._typos = Object.keys(Typos).reduce((typos, type) => {
      return typos.concat(
        Typos[type].map((values, i) => {
          const size = i === 0 ? 'Large' : i === 1 ? 'Medium' : 'Small';
          return {
            class: `md-${type.toLowerCase()}-${size.toLowerCase()}`,
            type,
            size,
            values,
          };
        }),
      );
    }, []);
  }
}
