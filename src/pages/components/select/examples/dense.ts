import { Attributes, Component, vm } from 'jinge';

import _tpl from './dense.html';

export default class ExampleSelectDense extends Component {
  static template = _tpl;

  selectedMovie: string;
  selectedCountry: string;
  allCountries: string[];
  selectedFont: { id: string; name: string };
  allFonts: { id: string; name: string }[];

  constructor(attrs: Attributes) {
    super(attrs);
    this.selectedMovie = null;
    this.selectedCountry = 'China';
    this.allCountries = vm(['China', 'United States', 'Japan', 'Australia']);
    this.selectedFont = null;
    this.allFonts = vm([
      {
        id: 'arial',
        name: 'Arial',
      },
      {
        id: 'roboto',
        name: 'Roboto',
      },
      {
        id: 'consolas',
        name: 'Consolas',
      },
    ]);
  }

  onFontChange(font: { id: string; name: string }) {
    this.selectedFont = font;
    // eslint-disable-next-line no-console
    console.log(font);
  }
}
