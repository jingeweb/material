import { vm } from 'jinge';

export default () =>
  vm({
    props: {
      headings: ['名称', '描述', '默认值'],
      props: [
        {
          name: 'value',
          type: 'Any',
          description: '多选框的值',
          defaults: 'false',
        },
        {
          name: 'trueValue',
          type: 'Any',
          description: '选中状态下的值',
          defaults: 'true',
        },
        {
          name: 'falseValue',
          type: 'Any',
          description: '未选中状态下的值',
          defaults: 'false',
        },
        {
          name: 'id',
          type: 'String',
          description: '多选框的唯一标识',
          defaults: 'a random string',
        },
      ],
    },
    events: {
      headings: ['名称', '描述', '参数'],
      props: [
        {
          name: 'change',
          description: '多选框的值发生变化时触发',
          value: 'value',
        },
      ],
    },
  });
