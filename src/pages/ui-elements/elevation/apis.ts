import { vm } from 'jinge';

export default () =>
  vm({
    classes: {
      headings: ['名称', '描述'],
      props: [
        {
          name: 'md-elevation-[depth]',
          description: '为元素添加阴影（Elevation），深度可以是 1、2、3、4、6、8、12、16 或 24，例如：md-elevation-4。',
        },
      ],
    },
  });
