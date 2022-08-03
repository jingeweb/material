import { vm } from 'jinge';

export default () =>
  vm({
    props: {
      headings: ['名称', '描述', '默认值'],
      props: [
        {
          name: 'value',
          type: 'Number',
          description:
            '指示进度的值。当不指定该参数时，spinner 表现为旋转加载状态；当指定该参数时，spinner 表现为进度条。',
          defaults: 'null',
        },
        {
          name: 'size',
          type: 'Number|String',
          description:
            '图标大小，可以指定为数字，也可以指定为 css 字符串值，还可以指定为 "small"/"normal"/"large" 三者之一（依次对应 36px, 48px, 64px）',
          defaults: '1em',
        },
      ],
    },
    classes: {
      headings: ['名称', '描述'],
      props: [
        {
          name: 'md-primary',
          description: '指定使用 primary 颜色。',
        },
        {
          name: 'md-accent',
          description: '指定使用 secondary 颜色。',
        },
        {
          name: 'md-ajust-baseline',
          description:
            '当需要将 Spinner 和文本混合排版时，如果父元素没有使用 flex 布局，则需要使用 md-ajust-baseline 来调整 Baseline。',
        },
      ],
    },
  });
