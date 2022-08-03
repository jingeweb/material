import { Attributes, Component, vm } from 'jinge';
import { watchForComponent } from 'jinge-i18n';

import _tpl from './simple-radios.html';

export default class ExampleSimpleRadio extends Component {
  static template = _tpl;

  v: string;
  persons: { name: string }[];
  selectedPerson: { name: string };
  cities: string[];
  selectedCity: string;

  constructor(attrs: Attributes) {
    super(attrs);
    this.v = null;
    watchForComponent(
      this,
      () => {
        const persons = vm([
          {
            name: '小葛',
          },
          {
            name: '小明',
          },
          {
            name: '小王',
          },
        ]);
        if (!this.persons) {
          this.persons = persons;
        } else {
          persons.forEach((p, i) => {
            this.persons[i].name = p.name;
          });
        }
      },
      true,
    );
    this.cities = vm(['Chengdu', 'Beijing', 'Shanghai']);
    this.selectedCity = this.cities[0];
    this.selectedPerson = null;
  }

  onSelectedPersonChange(sp: { name: string }) {
    this.selectedPerson = sp;
    // eslint-disable-next-line no-console
    console.log(sp);
  }
}
