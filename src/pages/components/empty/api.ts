import { vm } from 'jinge';

export default () =>
  vm({
    props: {
      headings: ['名称', '描述', '默认值'],
      props: [
        {
          name: 'label',
          type: 'String',
          description: '空状态的标签，用作标题。',
          defaults: 'null',
        },
        {
          name: 'description',
          type: 'String',
          description: '空状态的描述。',
          defaults: 'null',
        },
        {
          name: 'rounded',
          type: 'Boolean',
          description: '使空状态变圆，并具有漂亮的背景颜色。',
          defaults: 'false',
        },
        {
          name: 'size',
          type: 'Number|String',
          description: '圆角的宽度/高度大小。仅适用于 <code>rounded</code>。',
          defaults: '420',
        },
      ],
    },
  });
