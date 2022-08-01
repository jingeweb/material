import { vm } from 'jinge';

export default () =>
  vm({
    container: {
      props: {
        headings: ['名称', '描述', '默认值'],
        props: [
          {
            name: 'pushMode',
            type: 'Boolean',
            description: '将抽屉的打开设置为从侧面推送模式，会挤压内容。',
            defaults: 'false',
          },
        ],
      },
    },
    drawer: {
      props: {
        headings: ['名称', '描述', '默认值'],
        props: [
          {
            name: 'active',
            type: 'Boolean',
            description: '控制抽屉的打开和关闭',
            defaults: 'false',
          },
          {
            name: 'fixed',
            type: 'Boolean',
            description: '将 position:fixed 应用于抽屉。可用作应用程序的主抽屉（类似于本文档）。',
            defaults: 'false',
          },
          {
            name: 'right',
            type: 'Boolean',
            description: '将抽屉放置在屏幕的右侧。',
            defaults: 'false',
          },
        ],
      },
      events: {
        headings: ['名称', '描述', '参数'],
        props: [
          {
            name: 'opened',
            description: '抽屉打开时触发',
            value: 'null',
          },
          {
            name: 'closed',
            description: '抽屉关闭时触发',
            value: 'null',
          },
        ],
      },
    },
  });
