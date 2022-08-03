import { vm } from 'jinge';

export default () =>
  vm({
    regular: {
      props: {
        headings: ['名称', '描述', '默认值'],
        props: [
          {
            name: 'elevation',
            type: 'String|Number',
            description: '设置工具栏的阴影（Elevation）',
            defaults: '4',
          },
        ],
      },
      classes: {
        headings: ['名称', '描述'],
        props: [
          {
            name: 'md-transparent',
            description: '使用透明工具栏',
          },
          {
            name: 'md-dense',
            description: '使用紧凑型布局',
          },
          {
            name: 'md-medium',
            description: '使用中等大小的工具栏',
          },
          {
            name: 'md-large',
            description: '使用大型工具栏',
          },
        ],
      },
    },
    elements: {
      classes: {
        headings: ['名称', '描述'],
        props: [
          {
            name: 'md-toolbar-row',
            description: '创建工具栏行，通常在大型工具栏上使用',
          },
          {
            name: 'md-toolbar-offset',
            description: '向任何工具栏行添加左偏移量，仅适用于 md-toolbar-row。',
          },
          {
            name: 'md-toolbar-section-start',
            description: '在工具栏或工具栏行的左侧创建一个区域，该区域通常用于放置应用程序菜单按钮和标题。',
          },
          {
            name: 'md-toolbar-section-end',
            description:
              '在工具栏或工具栏行的右侧创建一个区域，该区域通常用于放置工具栏的主要动作，例如更多操作的按钮。',
          },
          {
            name: 'md-title',
            description: '创建工具栏的标题。',
          },
        ],
      },
    },
  });
