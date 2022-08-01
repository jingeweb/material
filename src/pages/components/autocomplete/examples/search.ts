import { Attributes, Component, vm } from 'jinge';

import _tpl from './search.html';

export default class ExampleACSearch extends Component {
  static template = _tpl;

  selectedEmployee: unknown;
  selectedCountry: unknown;
  countries: string[];
  employees: string[];

  constructor(attrs: Attributes) {
    super(attrs);
    this.selectedCountry = null;
    this.selectedEmployee = null;
    this.countries = vm([
      'Algeria',
      'Argentina',
      'Brazil',
      'Canada',
      'Italy',
      'Japan',
      'United Kingdom',
      'United States',
    ]);
    this.employees = vm([
      'Jim Halpert',
      'Dwight Schrute',
      'Michael Scott',
      'Pam Beesly',
      'Angela Martin',
      'Kelly Kapoor',
      'Ryan Howard',
      'Kevin Malone',
      'Creed Bratton',
      'Oscar Nunez',
      'Toby Flenderson',
      'Stanley Hudson',
      'Meredith Palmer',
      'Phyllis Lapin-Vance',
    ]);
  }
}
