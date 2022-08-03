import { vm } from 'jinge';

export default () =>
  vm({
    chip: {
      props: {
        headings: ['名称', '描述', '默认值'],
        props: [
          {
            name: 'clickable',
            type: 'Boolean',
            description: '启用/禁用纸片上的点击动作。',
            defaults: 'false',
          },
          {
            name: 'deletable',
            type: 'Boolean',
            description: '创建一个可以执行删除操作的纸片。',
            defaults: 'false',
          },
          {
            name: 'disabled',
            type: 'Boolean',
            description: '指定是否禁用纸片（包括点击和删除）。',
            defaults: 'false',
          },
        ],
      },
      events: {
        headings: ['名称', '描述', '参数'],
        props: [
          {
            name: 'delete',
            description: '鼠标单击删除图标后触发，仅在 deletable 属性为 true 时才有效。',
            value: '$event',
          },
        ],
      },
    },
    chips: {
      props: {
        headings: ['名称', '描述', '默认值'],
        props: [
          {
            name: 'value',
            type: 'Array',
            description: '指定全部的纸片。除非您指定自定义模板，否则必须是字符串数组。',
            defaults: '[]',
          },
          {
            name: 'id',
            type: 'String',
            description: '唯一标识，如果为 null，将自动创建。',
            defaults: 'null',
          },
          {
            name: 'inputType',
            type: 'String',
            description: '输入框的类型',
            defaults: 'text',
          },
          {
            name: 'placeholder',
            type: 'String',
            description: '输入框的占位符，可用于向用户显示将插入哪种数据类型。',
            defaults: 'null',
          },
          {
            name: 'static',
            type: 'Boolean',
            description: '创建一个不可编辑的纸片集，可以用在显示详细信息的页面。',
            defaults: 'false',
          },
          {
            name: 'limit',
            type: 'Number',
            description: '当纸片集的数量超过限定时，不允许再创建纸片。',
            defaults: 'false',
          },
          {
            name: 'checkDuplicated',
            type: 'Boolean',
            description: '更改输入值时始终检查纸片是否重复，或者仅在插入时检查纸片是否重复',
            defaults: 'false',
          },
        ],
      },
      events: {
        headings: ['名称', '描述', '参数'],
        props: [
          {
            name: 'change',
            description: '纸片集发生变化（增删）时触发。',
          },
          {
            name: 'delete',
            description: '鼠标单击纸片的删除图标后触发。',
            value: 'chip, index',
          },
          {
            name: 'chipClicked',
            description: '鼠标点击纸片时触发。',
            value: 'chip, index',
          },
          {
            name: 'insert',
            description: '插入纸片后触发',
            value: '新插入的 chip',
          },
        ],
      },
    },
  });
