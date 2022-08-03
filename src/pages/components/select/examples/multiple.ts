import { Attributes, Component, vm } from 'jinge';

import _tpl from './multiple.html';

export default class ExampleSelectMultiple extends Component {
  static template = _tpl;

  selectedMovies: string[];
  selectedMoviesDisplay: string;

  constructor(attrs: Attributes) {
    super(attrs);
    this.selectedMovies = vm([]);
    this.selectedMoviesDisplay = '';
  }

  onChange() {
    this.selectedMoviesDisplay = JSON.stringify(this.selectedMovies);
  }
}
