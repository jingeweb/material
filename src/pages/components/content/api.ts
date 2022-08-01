import { vm } from 'jinge';

export default () =>
  vm({
    props: {
      headings: ['名称', '描述', '默认值'],
      props: [
        {
          name: 'tag',
          type: 'String',
          description: '渲染的 HTML 标签，用于创建不是默认的 div 标签。',
          defaults: 'div',
        },
      ],
    },
  });
