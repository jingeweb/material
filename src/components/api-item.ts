import { Attributes, Component, RenderFn, vm, __ } from 'jinge';

import _tpl from './api-item.html';

export interface ApiItemSlot {
  name: string;
  title: string;
  _render: RenderFn;
}

export class ApiItem extends Component {
  static template = _tpl;

  _title: string;
  _slots: ApiItemSlot[];
  currentSlot: string;

  constructor(
    attrs: Attributes<{
      title: string;
    }>,
  ) {
    super(attrs);
    this._title = attrs.title;
    const slots = Object.keys(this[__].slots)
      .filter((slotName) => slotName !== 'default')
      .map((slotName) => ({
        name: slotName,
        title: slotName.replace(/(?:^|\s)\S/g, (transformed) => transformed.toUpperCase()).replace(/-/g, ' '),
        _render: this[__].slots[slotName],
      }));
    this._slots = vm(slots);
    this.currentSlot = slots.length > 0 ? slots[0].name : null;
  }
}
