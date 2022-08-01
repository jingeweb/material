import { vm } from 'jinge';

export default () =>
  vm({
    dialog: {
      props: {
        headings: ['名称', '描述', '默认值'],
        props: [
          {
            name: 'active',
            type: 'Boolean',
            description: '控制对话框的打开和关闭',
            defaults: 'false',
          },
          {
            name: 'backdrop',
            type: 'Boolean',
            description: '是否启用叠加的灰色蒙层',
            defaults: 'true',
          },
          {
            name: 'closeOnEsc',
            type: 'Boolean',
            description: '默认情况下，按 esc 时对话框将关闭。设置为 false 可取消此行为。',
            defaults: 'true',
          },
          {
            name: 'closeOnOutsideClick',
            type: 'Boolean',
            description: '默认情况下，单击外部时该对话框将关闭。设置为 false 可取消此行为。',
            defaults: 'true',
          },
          {
            name: 'fullscreen',
            type: 'Boolean',
            description: '控制该对话框将在移动屏幕上是否会变为全屏。',
            defaults: 'true',
          },
        ],
      },
      events: {
        headings: ['名称', '描述', '参数'],
        props: [
          {
            name: 'open',
            description: '对话框打开时触发',
            value: 'null',
          },
          {
            name: 'close',
            description: '对话框关闭时触发',
            value: 'null',
          },
          {
            name: 'click-overlay',
            description: '在叠加层外点击时触发',
            value: 'null',
          },
        ],
      },
    },
    alert: {
      props: {
        headings: ['名称', '描述', '默认值'],
        props: [
          {
            name: 'title',
            type: 'String',
            description: '通知对话框的标题',
            defaults: 'null',
          },
          {
            name: 'content',
            type: 'String',
            description: '通知对话框的内容。支持 html。',
            defaults: 'null',
          },
          {
            name: 'confirmText',
            type: 'String',
            description: '确认按钮的文案',
            defaults: '确认',
          },
        ],
      },
    },
    confirm: {
      props: {
        headings: ['名称', '描述', '默认值'],
        props: [
          {
            name: 'title',
            type: 'String',
            description: '确认对话框的标题',
            defaults: 'null',
          },
          {
            name: 'content',
            type: 'String',
            description: '确认对话框的内容。支持 html。',
            defaults: 'null',
          },
          {
            name: 'confirmText',
            type: 'String',
            description: '确认按钮的文案',
            defaults: '确认',
          },
          {
            name: 'cancelText',
            type: 'String',
            description: '取消按钮的文案',
            defaults: '取消',
          },
          {
            name: 'confirmSpinner',
            type: 'Boolean',
            description:
              '确认按钮是否处于加载状态。当该参数为 true 时，确认按钮会展示 md-spinner，并处于 disabled 状态。',
            defaults: 'false',
          },
        ],
      },
      events: {
        headings: ['名称', '描述', '参数'],
        props: [
          {
            name: 'confirm',
            description: '点击确认按钮时触发',
            value: 'null',
          },
          {
            name: 'cancel',
            description: '点击取消按钮时触发',
            value: 'null',
          },
        ],
      },
    },
    prompt: {
      props: {
        headings: ['名称', '描述', '默认值'],
        props: [
          {
            name: 'defaultValue',
            type: 'Any',
            description: '输入框的默认值',
            defaults: 'null',
          },
          {
            name: 'inputRequired',
            type: 'Boolean',
            description: '输入框是否必须填写',
            defaults: 'false',
          },
          {
            name: 'inputMaxLength',
            type: 'Number',
            description: '可选参数，指定输入框的最大允许字符数',
            defaults: 'null',
          },
          {
            name: 'inputPlaceholder',
            type: 'Number',
            description: '输入框的占位提示信息',
            defaults: 'null',
          },
          {
            name: 'title',
            type: 'String',
            description: '对话框的标题',
            defaults: 'null',
          },
          {
            name: 'confirmText',
            type: 'String',
            description: '确认按钮的文案',
            defaults: '确认',
          },
          {
            name: 'cancelText',
            type: 'String',
            description: '取消按钮的文案',
            defaults: '取消',
          },
          {
            name: 'confirmSpinner',
            type: 'Boolean',
            description:
              '确认按钮是否处于加载状态。当该参数为 true 时，确认按钮会展示 md-spinner，并处于 disabled 状态。',
            defaults: 'false',
          },
        ],
      },
      events: {
        headings: ['名称', '描述', '参数'],
        props: [
          {
            name: 'confirm',
            description: '点击确认按钮时触发',
            value: 'inputValue',
          },
          {
            name: 'cancel',
            description: '点击取消按钮时触发',
            value: 'null',
          },
        ],
      },
    },
  });
