export default () => ({
  breakpoints: [
    {
      name: 'xsmall',
      desc: '适用于最大 599px 宽的屏幕，比如大、中、小型人像手机以及纵向的小型平板电脑。',
      type: '0 ~ 599',
    },
    {
      name: 'small',
      desc: '适用于宽度介于 600 像素到 904 像素之间的屏幕，比如中型和大型手机、纵向模式的小型和大型平板电脑以及某些台式机显示器。',
      type: '600 ~ 904',
    },
    {
      name: 'medium',
      desc: '适用于 905 像素至 1239 像素之间的屏幕，比如横向和台式显示器中的小型和大型平板电脑。',
      type: '905 ~ 1239',
    },
    {
      name: 'large',
      desc: '适用于 1240 像素至 1439 像素之间的屏幕，比如大型台式机显示器。',
      type: '1240 ~ 1439',
    },
    {
      name: 'xlarge',
      desc: '适用于宽于 1440 像素的屏幕，比如大型台式机显示器或并排屏幕。',
      type: '>= 1440',
    },
  ],
  gutter: [
    {
      name: 'xsmall',
      value: '8px',
    },
    {
      name: 'small',
      value: '16px',
    },
    {
      name: 'medium',
      value: '24px',
    },
    {
      name: 'large',
      value: '40px',
    },
  ],
});
