import { vm } from 'jinge';

export default () =>
  vm({
    regular: {
      events: {
        headings: ['名称', '描述', '参数'],
        props: [
          {
            name: 'change',
            description: '每次选择文件时触发，传递 FileList 参数。',
            value: 'name, FileList|File',
          },
        ],
      },
    },
  });
