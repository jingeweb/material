import { vm } from 'jinge';

export default () =>
  vm({
    props: {
      headings: ['名称', '描述', '默认值'],
      props: [
        {
          name: 'text',
          type: 'String',
          description: '待进行关键字搜索的文本',
          defaults: '',
        },
        {
          name: 'term',
          type: 'String',
          description: '待查询的高亮关键字',
          defaults: 'null',
        },
        {
          name: 'ignoreCase',
          type: 'Boolean',
          description: '搜索算法忽略大小写',
          defaults: 'true',
        },
        {
          name: 'searchMethod',
          type: 'String',
          description: '指定使用哪种算法进行搜索，默认使用模糊查询（fuzzysearch）',
          defaults: 'fuzzy',
        },
        {
          offset: true,
          name: 'searchMethod="fuzzy"',
          type: 'String',
          description: '使用模糊查询（fuzzysearch）算法来搜索关键字。',
          defaults: '-',
        },
        {
          offset: true,
          name: 'searchMethod="starts"',
          type: 'String',
          description: '使用包含子串（includes）算法来搜索关键字。',
          defaults: '-',
        },
        {
          offset: true,
          name: 'searchMethod="includes"',
          type: 'String',
          description: '使用以子串打头（starts）算法来搜索关键字。',
          defaults: '-',
        },
      ],
    },
  });
