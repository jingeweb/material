import { vm } from 'jinge';

const Typos = ['Display', 'Headline', 'Title', 'Label', 'Body'].reduce((typos, type) => {
  return typos.concat(
    ['Large', 'Medium', 'Small'].map((s) => ({
      name: `md-${type.toLowerCase()}-${s.toLowerCase()}`,
      description: `对应于 Material Design 设计规范中的 ${type} ${s} 样式。`,
    })),
  );
}, []);
export default () =>
  vm({
    classes: {
      headings: ['名称', '描述'],
      props: Typos,
    },
  });
