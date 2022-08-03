import { vm } from 'jinge';

export default () =>
  vm({
    table: {
      props: {
        headings: ['名称', '描述', '默认值'],
        props: [
          {
            name: 'data',
            type: 'Array',
            description: '指定表格的数据。必须是数组，数组每个元素是一行数据。',
            defaults: 'null',
          },
          {
            name: 'selectable',
            type: 'Boolean',
            description: '表格是否开启可选择模式。',
            defaults: 'false',
          },
          {
            name: 'selection',
            type: 'Array',
            description: '当表格处于可选择模式时，指定表格的已选择行。',
            defaults: 'null',
          },
          {
            name: 'rowLoopKey',
            type: 'String',
            description: '传递给行循环使用的 <code>&lt;for&gt;</code> 组件的 key。',
            defaults: 'index',
          },
          {
            name: 'columnLoopKey',
            type: 'String',
            description: '传递给列循环使用的 <code>&lt;for&gt;</code> 组件的 key。',
            defaults: 'index',
          },
        ],
      },
      events: {
        headings: ['名称', '描述', '参数'],
        props: [
          {
            name: 'select',
            description: '表格的选中行发生变化时触发。只在表格开启选择模式时有效。',
            value: 'selection',
          },
        ],
      },
    },
    column: {
      headings: ['名称', '描述', '默认值'],
      props: [
        {
          name: 'label',
          description: '表头的文本。可以不指定该属性，然后用 slot 来渲染自定义表头。',
          defaults: 'an empty string',
        },
        {
          name: 'prop',
          description:
            '数据的属性。用于从行数据中获取属性值并展示到单元格里。可以不指定该属性，然后用 slot 来渲染自定义单元格。',
          defaults: 'an empty string',
        },
        {
          name: 'numberic',
          description: '指定当前列是否是数值类型。数值类型的列会右对齐。',
          defaults: 'false',
        },
      ],
    },
  });
