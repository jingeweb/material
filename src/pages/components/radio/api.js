import { vm, _t } from 'jinge';

export default () =>
  vm({
    props: {
      headings: ['名称', '描述', '默认值'],
      props: [
        {
          name: 'value',
          type: 'Any',
          description: '点击选中时通过 change 事件向外传递的值',
          defaults: 'undefined',
        },
        {
          name: 'checked',
          type: 'Boolean',
          description: '是否为选中状态',
          defaults: 'false',
        },
        {
          name: 'id',
          type: 'String',
          description: '唯一标识',
          defaults: 'a random string',
        },
        {
          name: 'name',
          type: 'String',
          description: '用于标识分组的 name，会传递给原生 input，实现多个 radio 关联',
          defaults: 'a empty string',
        },
      ],
    },
    events: {
      headings: ['名称', '描述', '参数'],
      props: [
        {
          name: 'change',
          description: '选中的值变化时触发',
          value: 'value',
        },
      ],
    },
  });
