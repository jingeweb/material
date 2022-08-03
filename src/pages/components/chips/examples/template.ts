import { Attributes, Component, vm } from 'jinge';

import _tpl from './template.html';

export default class ExampleClipsTemplate extends Component {
  static template = _tpl;

  currentProject: string;
  projects: string[];

  constructor(attrs: Attributes) {
    super(attrs);
    this.currentProject = 'Jinge Material';
    this.projects = vm(['Jinge Material', 'Ant Design', 'Angular Material']);
  }
}
