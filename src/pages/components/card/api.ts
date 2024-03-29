import { vm } from 'jinge';

export default () =>
  vm({
    card: {
      headings: ['名称', '描述', '默认值'],
      props: [
        {
          name: 'withHover',
          type: 'Boolean',
          description: '卡片在鼠标悬停时启用阴影（elevation）效果',
          defaults: 'false',
        },
      ],
    },
    cardActions: {
      headings: ['名称', '描述', '默认值'],
      props: [
        {
          name: 'alignment',
          type: 'String',
          description: '操作按钮的对齐方式',
          defaults: 'right',
        },
      ],
    },
    cardArea: {
      headings: ['名称', '描述', '默认值'],
      props: [
        {
          name: 'inset',
          type: 'Boolean',
          description: '使用 inset 类型的边框',
          defaults: 'false',
        },
      ],
    },
    cardMedia: {
      headings: ['名称', '描述', '默认值'],
      props: [
        {
          name: 'ratio',
          type: 'String',
          description: '自动调整大小或裁剪图像。可选比例包括：1:1、1/1、4:3、4/3、16:9 或 16/9。',
          defaults: 'null',
        },
        {
          name: 'medium',
          type: 'Boolean',
          description: '指定使用中等大小的媒介。仅在 md-card-header 内部起作用。',
          defaults: 'false',
        },
        {
          name: 'big',
          type: 'Boolean',
          description: '指定使用大尺寸的媒介。仅在 md-card-header 内部起作用。',
          defaults: 'false',
        },
      ],
    },
    cardMediaCover: {
      headings: ['名称', '描述', '默认值'],
      props: [
        {
          name: 'textScrim',
          type: 'Boolean',
          description:
            '根据图像应用自动计算出来的渐变背景。此选项通过提取图像上的明暗度来应用背景颜色，从而增加了文本的清晰度。如果图像较暗，则文本的背景会更亮。如果不是很暗，则背景会更暗。',
          defaults: 'false',
        },
        {
          name: 'solid',
          type: 'Boolean',
          description: '以与 textScrim 相同的计算逻辑应用纯色背景。',
          defaults: 'false',
        },
      ],
    },
  });
