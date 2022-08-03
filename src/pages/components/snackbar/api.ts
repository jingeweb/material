import { vm } from 'jinge';

export default () =>
  vm({
    props: {
      headings: ['名称', '描述', '默认值'],
      props: [
        {
          name: 'active',
          type: 'Boolean',
          description: '控制消息提示的展示和关闭',
          defaults: 'false',
        },
        {
          name: 'duration',
          type: 'Number',
          description: '设置自动关闭消息提示之前的持续时间（以毫秒为单位）。设置为 0 则不自动关闭，需要手动处理。',
          defaults: '4000',
        },
        {
          name: 'position',
          type: 'String',
          description: '设置消息提示在屏幕底部的位置',
          defaults: 'null',
        },
        {
          offset: true,
          name: 'position="center"',
          type: 'String',
          description: '设置消息提示位于中心位置',
          defaults: '-',
        },
        {
          offset: true,
          name: 'position="left"',
          type: 'String',
          description: '设置消息提示位于左侧位置',
          defaults: '-',
        },
      ],
    },
    events: {
      headings: ['名称', '描述', '参数'],
      props: [
        {
          name: 'opened',
          description: '消息提示打开时触发',
          value: 'null',
        },
        {
          name: 'closed',
          description: '消息提示关闭时触发',
          value: 'null',
        },
      ],
    },
  });
