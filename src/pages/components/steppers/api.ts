import { vm } from 'jinge';

export default () =>
  vm({
    steppers: {
      props: {
        headings: ['名称', '描述', '默认值'],
        props: [
          {
            name: 'activeStep',
            type: 'String/Number',
            description: '指定当前激活的步骤，可以是数字索引，或某个步骤的 id。',
            defaults: '0',
          },
          {
            name: 'alternative',
            type: 'Boolean',
            description: '使用替代布局',
            defaults: 'false',
          },
          {
            name: 'vertical',
            type: 'Boolean',
            description: '使用垂直布局，通常用于移动平台。',
            defaults: 'false',
          },
          {
            name: 'linear',
            type: 'Boolean',
            description: '使用线性工作流模式。',
            defaults: 'false',
          },
          {
            name: 'dynamicHeight',
            type: 'Boolean',
            description: '自动计算步骤的高度，并在它们之间使用高度过渡。',
            defaults: 'false',
          },
        ],
      },
      events: {
        headings: ['名称', '描述', '参数'],
        props: [
          {
            name: 'changed',
            description: '当前激活步骤发生变化时触发',
            value: '(index, step)',
          },
        ],
      },
    },
    step: {
      props: {
        headings: ['名称', '描述', '默认值'],
        props: [
          {
            name: 'id',
            type: 'String',
            description: '唯一标识，可用于和 activeStep 属性配合指定当前激活步骤',
            defaults: 'a random string',
          },
          {
            name: 'label',
            type: 'String',
            description: '步骤的标签文本',
            defaults: 'null',
          },
          {
            name: 'description',
            type: 'String',
            description: '步骤的描述文本。如果某个步骤是可选的，请使用此属性说明。',
            defaults: 'null',
          },
          {
            name: 'error',
            type: 'String',
            description: '错误消息。设置此属性后，步骤将自动变成错误状态。要清除错误，请将此属性设置为 null。',
            defaults: 'null',
          },
          {
            name: 'done',
            type: 'Boolean',
            description: '将此属性设置为 true 可提示特定步骤已完成。',
            defaults: 'false',
          },
          {
            name: 'editable',
            type: 'Boolean',
            description: '使步骤可编辑或不可编辑。',
            defaults: 'true',
          },
        ],
      },
    },
  });
