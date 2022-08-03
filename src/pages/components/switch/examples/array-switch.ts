import { Attributes, Component, vm } from 'jinge';
import { watchForComponent } from 'jinge-i18n';

import _tpl from './array-switch.html';

export default class ExampleArrayCheckbox extends Component {
  static template = _tpl;

  persons: { name: string }[];
  selectedPersons: { name: string }[];
  selectedPersonsDisplay: string;
  cities: string[];
  selectedCities: string[];
  selectedCitiesDisplay: string;

  constructor(attrs: Attributes) {
    super(attrs);
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
          this.selectedPersonsDisplay = JSON.stringify(this.selectedPersons);
        }
      },
      true,
    );
    this.cities = vm(['Chengdu', 'Beijing', 'Shanghai']);
    this.selectedPersons = vm([]);
    this.selectedCities = vm(['Beijing']);
    this.selectedCitiesDisplay = JSON.stringify(this.selectedCities);
    this.selectedPersonsDisplay = JSON.stringify(this.selectedPersons);
  }

  onSelectedCitiesChange(v: unknown) {
    // eslint-disable-next-line no-console
    console.log(v);
    this.selectedCitiesDisplay = JSON.stringify(this.selectedCities);
  }

  onSelectedPersonsChange(v: unknown) {
    // eslint-disable-next-line no-console
    console.log(v);
    this.selectedPersonsDisplay = JSON.stringify(this.selectedPersons);
  }
}
