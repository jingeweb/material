import { vm } from 'jinge';

export default () =>
  vm({
    slots: {
      headings: ['名称', '描述', '示例'],
      props: [
        {
          name: 'item',
          description: '创建自定义的匹配项',
          options: [
            {
              name: 'option',
              description: '将收到匹配选项的每个选项。',
            },
            {
              name: 'term',
              description: '当前输入的搜索词。',
            },
          ],
          usage: '<_slot slot-pass:"item" vm-use:option="option" vm:term > ... </_slot>',
        },
        {
          name: 'empty',
          description: '在零匹配的情况下创建一个空状态',
          options: [
            {
              name: 'term',
              description: '当前输入的搜索词。',
            },
          ],
          usage: '<_slot slot-pass:empty vm-use:term="term"> ... </_slot>',
        },
      ],
    },
    props: {
      headings: ['名称', '描述', '默认值'],
      props: [
        {
          name: 'value',
          type: 'String',
          description: '自动补全输入框的值',
          defaults: 'null',
        },
        {
          name: 'options',
          type: 'Array|Promise',
          description:
            '要搜索的可用选项。如果为 Array，则自动完成功能将使用内部搜索引擎。 如果是 Promise，则需要您自己执行搜索（这通常是由后端服务进行的）。',
          defaults: '[]',
        },
        {
          name: 'name',
          type: 'String',
          description: '传递给输入框的 name 属性',
          defaults: 'null',
        },
        {
          name: 'id',
          type: 'String',
          description: '传递给输入框的 id 属性',
          defaults: 'a random string',
        },
        {
          name: 'maxlength',
          type: 'Number',
          description: '指定允许输入的最大的字符数量',
          defaults: 'null',
        },
        {
          name: 'placeholder',
          type: 'Number',
          description: '输入框的占位提示',
          defaults: 'null',
        },
        {
          name: 'dense',
          type: 'Boolean',
          description: '使用紧凑型的自动补全组件',
          defaults: 'false',
        },
        {
          name: 'layout',
          type: 'String',
          description: '设置布局方式，请参见下面每种布局的详细说明。',
          defaults: 'floating',
        },
        {
          offset: true,
          name: 'layout="floating"',
          type: 'String',
          description: '布局方式使用 floating 模式。这是默认的布局。',
          defaults: '-',
        },
        {
          offset: true,
          name: 'layout="box"',
          type: 'String',
          description: '布局方式使用 boxed 模式。',
          defaults: '-',
        },
        {
          name: 'openOnFocus',
          type: 'Boolean',
          description: '禁用/启用焦点事件。 如果 false，则选项将在按键后立即显示结果。',
          defaults: 'true',
        },
        {
          name: 'searchProp',
          type: 'String',
          description: '如果 option 为 object，则需要指定哪个属性将用于搜索过滤器。',
          defaults: 'null',
        },
        {
          name: 'searchMethod',
          type: 'String',
          description:
            '选项过滤器的搜索算法。如果传递的 <code>options</code> 属性是 Promise，则此选项不起作用。有关更多详细信息，请参见 <code>md-highlight</code> 的 API。',
          defaults: 'fuzzy',
        },
      ],
    },
    events: {
      headings: ['名称', '描述', '参数'],
      props: [
        {
          name: 'change',
          description: '用户在输入字段上键入时触发',
          value: 'The term string',
        },
        {
          name: 'selected',
          description: '当用户选择一个选项时触发',
          value: 'The selected option',
        },
        {
          name: 'opened',
          description: '在打开选项面板时触发',
          value: 'null',
        },
        {
          name: 'closed',
          description: '在关闭选项面板时触发',
          value: 'null',
        },
      ],
    },
  });
