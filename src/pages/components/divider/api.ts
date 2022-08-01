import { vm } from 'jinge';

export default () =>
  vm({
    classes: {
      headings: ['名称', '描述'],
      props: [
        {
          name: 'md-inset',
          description: '创建一个插入分隔符，通常用于分隔相关内容。',
        },
      ],
    },
  });
