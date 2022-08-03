import { vm } from 'jinge';

export default () =>
  vm({
    props: {
      headings: ['名称', '描述', '默认值'],
      props: [
        {
          name: 'title',
          description: '工具提示的内容',
          defaults: 'an empty string',
        },
        {
          name: 'trigger',
          description: '参看 Popover 组件',
          defaults: 'hover',
        },
        {
          name: 'placement',
          description: '参看 Popover 组件',
          defaults: 'bottom',
        },
        {
          name: 'delay',
          description: '参看 Popover 组件',
          defaults: '150',
        },
        {
          name: 'offset',
          description: '参看 Popover 组件',
          defaults: '16',
        },
        {
          name: 'className',
          description: '参看 Popover 组件',
          defaults: 'md-tooltip',
        },
      ],
    },
  });
