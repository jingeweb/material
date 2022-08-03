import { vm } from 'jinge';

export default () =>
  vm({
    common: {
      headings: ['名称', '描述', '默认值'],
      props: [
        {
          name: 'size',
          type: 'Number|String',
          description: '图标大小，可以指定为数字，也可以指定为 css 字符串值。默认大小为当前字号。',
          defaults: '1em',
        },
      ],
    },
    props: {
      headings: ['名称', '描述', '默认值'],
      props: [
        {
          name: 'src',
          type: 'String',
          description: '指定需要下载并渲染的远程 svg 资源路径。',
          defaults: 'null',
        },
        {
          name: 'cache',
          type: 'Boolean',
          description: '当使用 src 指定远程资源时，可以通过 cache 参数指定是否缓存该资源。',
          defaults: 'true',
        },
      ],
    },
    events: {
      headings: ['名称', '描述', '参数'],
      props: [
        {
          name: 'loaded',
          description: '当 src 属性指定的远程 svg 资源被加载结束时触发。如果加载出错，则会将错误信息做为参数传递。',
          value: 'null/Error',
        },
      ],
    },
  });
