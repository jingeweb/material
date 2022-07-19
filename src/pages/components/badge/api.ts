import { vm } from 'jinge';

export default () =>
  vm({
    classes: {
      headings: ['名称', '描述'],
      props: [
        {
          name: 'md-square',
          description: '创建静态的方形徽标',
        },
      ],
    },
    props: {
      headings: ['名称', '描述', '默认值'],
      props: [
        {
          name: 'content',
          type: 'String, Number',
          description: '指定徽章内容',
          defaults: ' ',
        },
        {
          name: 'position',
          type: 'String',
          description: '指定徽章位置，<code>top</code> 或 <code>bottom</code>',
          defaults: 'top',
        },
        {
          name: 'dense',
          type: 'Boolean',
          description: '使用紧凑型徽章',
          defaults: 'false',
        },
      ],
    },
  });
