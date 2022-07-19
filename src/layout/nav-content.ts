import { vm, Component, Attributes } from 'jinge';
import { watchForComponent } from 'jinge-i18n';

import _tpl from './nav-content.html';

type Item = { key?: string; name: string; state: string; tip?: string; children?: Item[] };

let aid = 0;
function generateMenus() {
  function loopName(arr: Item[]) {
    arr.forEach((m) => {
      m.key = `m-${aid++}`;
      const i = m.name.indexOf('|');
      if (i > 0) {
        m.tip = m.name.substring(i + 1);
        m.name = m.name.substring(0, i);
      }
      m.children && loopName(m.children);
    });
    return arr;
  }
  return loopName([
    {
      name: '首页',
      state: 'home',
    },
    {
      name: '快速上手',
      state: 'getting-started',
    },
    {
      name: '主题',
      state: 'theme',
    },
    {
      name: '路由整合',
      state: 'use-router',
    },
    {
      name: '国际化',
      state: 'i18n',
    },
    {
      name: 'UI 规范',
      state: 'ui',
      children: [
        {
          name: '阴影|Elevation',
          state: 'ui.elevation',
        },
        {
          name: '布局|Layout',
          state: 'ui.layout',
        },
        {
          name: '版式|Typography',
          state: 'ui.typography',
        },
        {
          name: '状态|States',
          state: 'ui.states',
        },
      ],
    },
    {
      name: '组件',
      state: 'components',
      children: [
        {
          //   name: '顶栏 App Bar',
          //   state: 'components.app-bar'
          // }, {
          name: '头像|Avatar',
          state: 'components.avatar',
        },
        {
          name: '徽章|Badge',
          state: 'components.badge',
        },
        {
          name: '底栏|Bottom Bar',
          state: 'components.bottom-bar',
        },
        {
          name: '按钮|Button',
          state: 'components.button',
        },
        {
          name: '卡片|Card',
          state: 'components.card',
        },
        {
          name: '内容|Content',
          state: 'components.content',
        },
        {
          name: '日期选择|Datepicker',
          state: 'components.datepicker',
        },
        {
          name: '对话框|Dialog',
          state: 'components.dialog',
        },
        {
          name: '分隔线|Divider',
          state: 'components.divider',
        },
        {
          name: '抽屉|Drawer',
          state: 'components.drawer',
        },
        {
          name: '空提示|Empty State',
          state: 'components.empty-state',
        },
        {
          name: '表单|Forms',
          state: 'components.forms',
          children: [
            {
              name: '自动补全|Autocomplete',
              state: 'components.forms.autocomplete',
            },
            {
              name: '多选框|Checkbox',
              state: 'components.forms.checkbox',
            },
            {
              name: '纸片|Chips',
              state: 'components.forms.chips',
            },
            {
              name: '文件选择|File',
              state: 'components.forms.file',
            },
            {
              name: '文本框|Input & Textarea',
              state: 'components.forms.input',
            },
            {
              name: '单选项|Radio',
              state: 'components.forms.radio',
            },
            {
              name: '下拉选择|Select',
              state: 'components.forms.select',
            },
            {
              name: '切换|Switch',
              state: 'components.forms.switch',
            },
          ],
        },
        {
          name: '文本高亮|Highlight',
          state: 'components.highlight',
        },
        {
          name: '图标|Icon',
          state: 'components.icon',
        },
        {
          name: '列表|List',
          state: 'components.list',
        },
        {
          name: '菜单|Menu',
          state: 'components.menu',
        },
        {
          name: '分页|Pagination',
          state: 'components.pagination',
        },
        {
          name: '气泡确认框|Popconfirm',
          state: 'components.popconfirm',
        },
        {
          name: '气泡卡片|Popover',
          state: 'components.popover',
        },
        {
          name: '进度条|Progress',
          state: 'components.progress',
        },
        {
          name: '消息提示|Snackbar',
          state: 'components.snackbar',
        },
        {
          name: '正在加载|Spinner',
          state: 'components.spinner',
        },
        {
          name: '步骤条|Steppers',
          state: 'components.steppers',
        },
        {
          name: '子标题|Subheader',
          state: 'components.subheader',
        },
        {
          name: '表格|Table',
          state: 'components.table',
        },
        {
          name: '标签页|Tabs',
          state: 'components.tabs',
        },
        {
          name: '工具栏|Toolbar',
          state: 'components.toolbar',
        },
        {
          name: '工具提示|Tooltip',
          state: 'components.tooltip',
        },
      ],
    },
    {
      name: '关于',
      state: 'about',
    },
    {
      name: '许可证',
      state: 'license',
    },
  ]);
}

export class NavContent extends Component {
  static template = _tpl;

  menus: Item[];

  constructor(attrs: Attributes) {
    super(attrs);

    watchForComponent(
      this,
      () => {
        this.menus = vm(generateMenus());
      },
      true,
    );
  }
}
