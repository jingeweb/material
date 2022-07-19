import { vm } from 'jinge';

export default () =>
  vm({
    regular: {
      headings: ['名称', '描述'],
      props: [
        {
          name: 'md-avatar-icon',
          description: '创建可以显示图标的头像。',
        },
      ],
    },
    sizes: {
      headings: ['名称', '描述'],
      props: [
        {
          name: 'md-small',
          description: '制作小头像，更改图像，图标或文字的大小。',
        },
        {
          name: 'md-large',
          description: '大头像，通常用于在 <md-drawer> 中展示当前用户头像。',
        },
      ],
    },
  });
