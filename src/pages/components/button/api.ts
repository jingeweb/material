export default () => ({
  common: [
    {
      name: 'type',
      desc: '常规按钮类型',
      type: ['elevated', 'filled', 'filled-tonal', 'outlined', 'text'].map((v) => `'${v}'`).join(' | '),
      defaults: "'elevated'",
    },
    {
      name: 'disabled',
      type: 'boolean',
      desc: '禁用按钮',
      defaults: 'false',
    },
    {
      name: 'click',
      type: '(event) => void',
      desc: '鼠标点击事件',
    },
  ],
  icon: [
    {
      name: 'type',
      desc: '图标按钮类型',
      type: ['standard', 'filled', 'filled-tonal', 'outlined'].map((v) => `'${v}'`).join(' | '),
      defaults: "'standard'",
    },
    {
      name: 'disabled',
      type: 'boolean',
      desc: '禁用按钮',
      defaults: 'false',
    },
    {
      name: 'click',
      type: '(event) => void',
      desc: '鼠标点击事件',
    },
    {
      name: 'toggle',
      desc: '是否开启切换状态（对应于 m3 规范中的 toggle 状态）',
      type: 'boolean',
      defaults: 'false',
    },
    {
      name: 'selected',
      desc: '在开启切换状态的前提下，指定是否是选中状态',
      type: 'boolean',
      defaults: 'false',
    },
  ],
  segmented: [
    {
      name: 'multiple',
      desc: '是否支持多选',
      type: 'boolean',
      defaults: 'false',
    },
    {
      name: 'value',
      desc: '当前选中的值，如果是多选则需要传递数组',
      type: 'unknown | unknown[]',
      defaults: 'undefined',
    },
    {
      name: 'change',
      desc: '选中项变更后的回调，回调参数根据是否支持多选有不同格式',
      type: '(value: unknown) => void | (values: unknown[]) => void',
    },
  ],
  segmentedItem: [
    {
      name: 'value',
      type: 'unknown',
      desc: '当前项对应的值，用于和父组件的 value 属性搭配选中项',
    },
  ],
  fab: [
    {
      name: 'type',
      desc: '按钮的类型',
      type: "'surface' | 'primary' | 'secondary' | 'tertiary'",
      defaults: "'primary'",
    },
    {
      name: 'size',
      desc: '按钮的大小',
      type: "'small' | 'large' | 'normal'",
      defaults: "'normal'",
    },
    {
      name: 'lowered',
      type: 'boolean',
      desc: '是否是浅度 FAB 按钮（elevation 更小）',
      defaults: 'false',
    },
    {
      name: 'extended',
      type: 'boolean',
      desc: '是否是 Extended FAB 按钮',
      defaults: 'false',
    },
  ],
});
