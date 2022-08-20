import { Attributes, Component, vm } from 'jinge';
import { Ics_apps } from 'jinge-symbols/apps';
import { Ics_home } from 'jinge-symbols/home';
import { Ics_water_drop } from 'jinge-symbols/water_drop';
import { Ics_add_circle } from 'jinge-symbols/add_circle';
import _tpl from './sidebar.html';

// interface MenuItem {
//   name: string;
//   to: string;
//   icon?: IconSet;
//   children?: MenuItem[];
// }

const componentMenus = [
  {
    name: '头像|Avatar',
    to: 'components.avatar',
  },
  {
    name: '徽章|Badge',
    to: 'components.badge',
  },
  {
    name: '底栏|Bottom Bar',
    to: 'components.bottom-bar',
  },
  {
    name: '按钮|Button',
    to: 'components.button',
  },
  {
    name: '卡片|Card',
    to: 'components.card',
  },
  {
    name: '内容|Content',
    to: 'components.content',
  },
  {
    name: '日期选择|Datepicker',
    to: 'components.datepicker',
  },
  {
    name: '对话框|Dialog',
    to: 'components.dialog',
  },
  {
    name: '分隔线|Divider',
    to: 'components.divider',
  },
  {
    name: '抽屉|Drawer',
    to: 'components.drawer',
  },
  {
    name: '空提示|Empty State',
    to: 'components.empty-state',
  },
  {
    name: '表单|Forms',
    to: 'components.forms',
    children: [
      {
        name: '自动补全|Autocomplete',
        to: 'components.forms.autocomplete',
      },
      {
        name: '多选框|Checkbox',
        to: 'components.forms.checkbox',
      },
      {
        name: '纸片|Chips',
        to: 'components.forms.chips',
      },
      {
        name: '文件选择|File',
        to: 'components.forms.file',
      },
      {
        name: '文本框|Input & Textarea',
        to: 'components.forms.input',
      },
      {
        name: '单选项|Radio',
        to: 'components.forms.radio',
      },
      {
        name: '下拉选择|Select',
        to: 'components.forms.select',
      },
      {
        name: '切换|Switch',
        to: 'components.forms.switch',
      },
    ],
  },
  {
    name: '文本高亮|Highlight',
    to: 'components.highlight',
  },
  {
    name: '图标|Icon',
    to: 'components.icon',
  },
  {
    name: '列表|List',
    to: 'components.list',
  },
  {
    name: '菜单|Menu',
    to: 'components.menu',
  },
  {
    name: '分页|Pagination',
    to: 'components.pagination',
  },
  {
    name: '气泡确认框|Popconfirm',
    to: 'components.popconfirm',
  },
  {
    name: '气泡卡片|Popover',
    to: 'components.popover',
  },
  {
    name: '进度条|Progress',
    to: 'components.progress',
  },
  {
    name: '消息提示|Snackbar',
    to: 'components.snackbar',
  },
  {
    name: '正在加载|Spinner',
    to: 'components.spinner',
  },
  {
    name: '步骤条|Steppers',
    to: 'components.steppers',
  },
  {
    name: '子标题|Subheader',
    to: 'components.subheader',
  },
  {
    name: '表格|Table',
    to: 'components.table',
  },
  {
    name: '标签页|Tabs',
    to: 'components.tabs',
  },
  {
    name: '工具栏|Toolbar',
    to: 'components.toolbar',
  },
  {
    name: '工具提示|Tooltip',
    to: 'components.tooltip',
  },
];

export class Sidebar extends Component {
  static template = _tpl;
  menus: unknown[];

  withShadow: boolean;
  activeRailItem: { children?: unknown[] };
  hoverRailItem: { children?: unknown[] };
  drawerMenus: unknown[];
  hoverMenus: unknown[];
  slideDrawer: boolean;
  fadeDrawer: boolean;

  constructor(attrs: Attributes) {
    super(attrs);
    this.menus = vm([
      {
        name: '首页',
        to: 'home',
        icon: Ics_home,
      },
      {
        name: '快速上手',
        to: 'getting-started',
        icon: Ics_apps,
      },
      {
        name: 'UI 规范',
        to: 'ui',
        icon: Ics_water_drop,
        children: [
          {
            name: '主题',
          },
          {
            name: '阴影',
          },
        ],
      },
      {
        name: '组件',
        to: 'components.button',
        icon: Ics_add_circle,
        children: componentMenus,
      },
    ]);
  }
  _onActive(isActive: boolean, menu: { children: unknown[] }) {
    if (!isActive) return;
    this.activeRailItem = menu;
    if (menu.children?.length) {
      this.drawerMenus = menu.children;
      this.fadeDrawer = true;
      this.slideDrawer = true;
    }
  }
  _onMouseOut() {
    this.hoverRailItem = null;
    this.hoverMenus = null;
    this.withShadow = false;
    const activeDrawerMenus = this.activeRailItem?.children;
    if (!activeDrawerMenus?.length) {
      this.slideDrawer = false;
    } else if (this.drawerMenus !== activeDrawerMenus) {
      this.fadeDrawer = false;
      this.hoverMenus = activeDrawerMenus;
    }
  }
  _onHover(isHover: boolean, menu: { children: unknown[] }) {
    if (!isHover) {
      if (menu === this.hoverRailItem && !menu.children?.length) {
        this.hoverRailItem = null;
      }
      return;
    }
    this.hoverRailItem = menu;
    if (menu.children?.length) {
      this.slideDrawer = true;
      this.withShadow = true;
      if (this.drawerMenus) {
        if (this.drawerMenus !== menu.children) {
          this.fadeDrawer = false;
          this.hoverMenus = menu.children;
        }
      } else {
        this.fadeDrawer = true;
        this.drawerMenus = menu.children;
      }
    } else if (this.activeRailItem.children?.length) {
      if (this.drawerMenus !== this.activeRailItem.children) {
        this.fadeDrawer = false;
        this.hoverMenus = this.activeRailItem.children;
      }
      this.withShadow = false;
    } else {
      this.slideDrawer = false;
    }
  }
  _onHideTs(t: string) {
    if (t === 'after-enter' && this.hoverMenus) {
      this.drawerMenus = this.hoverMenus;
      this.hoverMenus = null;
      this.fadeDrawer = true;
    }
  }
  _onSlideTs(t: string) {
    if (t === 'after-leave' && this.drawerMenus) {
      this.drawerMenus = null;
      this.fadeDrawer = false;
    }
  }
}
