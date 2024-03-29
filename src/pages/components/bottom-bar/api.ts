import { vm } from 'jinge';

export default () =>
  vm({
    bar: {
      props: {
        headings: ['名称', '描述', '默认值'],
        props: [
          {
            name: 'type',
            type: 'String',
            description: '设置显示模式。请参见下面每种类型的详细说明。',
            defaults: 'fixed',
          },
          {
            offset: true,
            name: 'type="fixed"',
            type: 'String',
            description: '用固定项目制作栏。适合少量元素。',
            defaults: '-',
          },
          {
            offset: true,
            name: 'type="shift"',
            type: 'String',
            description: '突出显示所选项目，并隐藏其他项目的标签。适合最多达 6 个的大量元素。',
            defaults: '-',
          },
          {
            name: 'activeItem',
            type: 'String/Number',
            description: '动态更改所选项目，通过传递底部栏项目的 id 来实现。',
            defaults: 'null',
          },
        ],
      },
    },
    item: {
      props: {
        headings: ['名称', '描述', '默认值'],
        props: [
          {
            name: 'id',
            type: 'String',
            description: '项目的编号，需要动态更改所选项目时可指定',
            defaults: 'a random string',
          },
          {
            name: 'disabled',
            type: 'Boolean',
            description: '禁用底部栏，阻止包括单击在内的所有操作。',
            defaults: 'false',
          },
        ],
      },
    },
  });
