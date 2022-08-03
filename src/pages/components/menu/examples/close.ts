import { Component } from 'jinge';

import _tpl from './close.html';

export default class ExampleMenuAutoClose extends Component {
  static template = _tpl;

  closeOnClick = true;
  closeOnSelect = true;
  data = '';
}
