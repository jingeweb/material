import { Component } from 'jinge';
import { DialogAlert } from 'jinge-material/lib/dialog';
import _tpl from './list-types.html';

export default class ExampleListTypes extends Component {
  static template = _tpl;

  alert() {
    DialogAlert.show('You clicked me!');
  }
}
