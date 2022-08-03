import { vm } from 'jinge';

export default () =>
  vm({
    props: {
      headings: ['名称', '描述', '默认值'],
      props: [
        {
          name: 'title',
          description: '文字提示的内容',
          defaults: 'an empty string',
        },
        {
          name: 'errorTip',
          description: '如果指定该属性，会显示错误提示。',
          defaults: 'null',
        },
        {
          name: 'hideWhenConfirmClick',
          description: '点击确认按钮后是否隐藏气泡。',
          defaults: 'true',
        },
        {
          name: 'confirmSpinner',
          description: '是否进入正在确认的加载状态',
          defaults: 'false',
        },
        {
          name: 'placement',
          description: '同 Popover 组件',
          defaults: 'top-end',
        },
        {
          name: 'offset',
          description: '同 Popover 组件',
          defaults: '16',
        },
      ],
    },
    events: {
      headings: ['名称', '描述', '参数'],
      props: [
        {
          name: 'confirm',
          description: '用户点击确认按钮',
          value: 'undefined',
        },
        {
          name: 'cancel',
          description: '用户点击取消按钮',
          value: 'undefined',
        },
        {
          name: 'update.active',
          description: '同 Popover 组件',
          value: '(isActive, action)',
        },
      ],
    },
  });
