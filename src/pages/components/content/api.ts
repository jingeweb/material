export default () => [
  {
    name: 'type',
    type: "'primary' | 'secondary' | 'tertiary'  | 'surface'  | 'primary-container'  | 'secondary-container'  | 'tertiary-container' | 'surface-variant'",
    desc: '容器的类型，对应到 M3 规范里的色板体系中的色彩分类',
    defaults: 'surface',
  },
  {
    name: 'interactive',
    type: 'boolean',
    desc: '是否开启交互状态',
    defaults: 'false',
  },
  {
    name: 'elevation',
    type: 'number',
    desc: '容器的深度，可指定 0 ~ 5，0 或不指定都代表没有深度',
  },
  {
    name: 'noShadow',
    type: 'boolean',
    desc: '在指定 elevation 不为 0 时，可控制不展示阴影',
    defaults: 'false',
  },
];
