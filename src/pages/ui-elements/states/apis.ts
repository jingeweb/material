import { vm } from 'jinge';

export default () =>
  vm({
    classes: {
      headings: ['名称', '描述'],
      props: [
        {
          name: 'md-state-container',
          description: '对应 Material Design States 规范里的 Container，指定状态的容器层。',
        },
        {
          name: 'md-state-overlay',
          description: '对应 Material Design States 规范里的 Overlay，指定状态的悬停层。',
        },
        {
          name: 'md-state-content',
          description: '对应 Material Design States 规范里的 Content，指定状态的内容层。',
        },
        {
          name: 'md-content-on-surface',
          description: '指定使用设计规范里的 Content: On Surface 类型。',
        },
        {
          name: 'md-content-is-primary',
          description: '指定使用设计规范里的 Content: Primary 类型。',
        },
        {
          name: 'md-content-on-primary',
          description: '指定使用设计规范里的 Content: On Primary 类型。',
        },
      ],
    },
  });
