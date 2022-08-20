const componentsRoute = {
  name: 'components',
  path: '/components',
  redirect: 'components.button',
  children: [
    {
      name: 'components.button',
      path: '/button',
      component: async () =>
        (await import(/* webpackChunkName: 'pages-components-button' */ '../pages/components/button')).PageButton,
    },
    {
      name: 'components.content',
      path: '/content',
      component: async () =>
        (await import(/* webpackChunkName: 'pages-components-content' */ '../pages/components/content')).PageContent,
    },
    //     {
    //       name: 'components.toolbar',
    //       path: '/toolbar',
    //       component: async () =>
    //         (await import(/* webpackChunkName: 'pages-components-toolbar' */ '../pages/components/toolbar')).PageToolbar,
    //     },
    //     {
    //       name: 'components.dialog',
    //       path: '/dialog',
    //       component: async () =>
    //         (await import(/* webpackChunkName: 'pages-components-dialog' */ '../pages/components/dialog')).PageDialog,
    //     },
    //     {
    //       name: 'components.icon',
    //       path: '/icon',
    //       component: async () =>
    //         (await import(/* webpackChunkName: 'pages-components-icon' */ '../pages/components/icon')).PageIcon,
    //     },
    //     {
    //       name: 'components.spinner',
    //       path: '/spinner',
    //       component: async () =>
    //         (await import(/* webpackChunkName: 'pages-components-spinner' */ '../pages/components/spinner')).PageSpinner,
    //     },
    //     {
    //       name: 'components.progress',
    //       path: '/progress',
    //       component: async () =>
    //         (await import(/* webpackChunkName: 'pages-components-progress' */ '../pages/components/progress')).PageProgress,
    //     },
    //     {
    //       name: 'components.popover',
    //       path: '/popover',
    //       component: async () =>
    //         (await import(/* webpackChunkName: 'pages-components-popover' */ '../pages/components/popover')).PagePopover,
    //     },
    //     {
    //       name: 'components.tooltip',
    //       path: '/tooltip',
    //       component: async () =>
    //         (await import(/* webpackChunkName: 'pages-components-tooltip' */ '../pages/components/tooltip')).PageTooltip,
    //     },
    //     {
    //       name: 'components.popconfirm',
    //       path: '/popconfirm',
    //       component: async () =>
    //         (await import(/* webpackChunkName: 'pages-components-popconfirm' */ '../pages/components/popconfirm'))
    //           .PagePopconfirm,
    //     },
    //     {
    //       name: 'components.card',
    //       path: '/card',
    //       component: async () =>
    //         (await import(/* webpackChunkName: 'pages-components-card' */ '../pages/components/card')).PageCard,
    //     },
    //     {
    //       name: 'components.list',
    //       path: '/list/:optional?',
    //       dynamic: true,
    //       component: async () =>
    //         (await import(/* webpackChunkName: 'pages-components-list' */ '../pages/components/list')).PageList,
    //     },
    //     {
    //       name: 'components.menu',
    //       path: '/menu',
    //       component: async () =>
    //         (await import(/* webpackChunkName: 'pages-components-menu' */ '../pages/components/menu')).PageMenu,
    //     },
    //     {
    //       name: 'components.drawer',
    //       path: '/drawer',
    //       component: async () =>
    //         (await import(/* webpackChunkName: 'pages-components-drawer' */ '../pages/components/drawer')).PageDrawer,
    //     },
    //     {
    //       name: 'components.badge',
    //       path: '/badge',
    //       component: async () =>
    //         (await import(/* webpackChunkName: 'pages-components-badge' */ '../pages/components/badge')).PageBadge,
    //     },
    //     {
    //       name: 'components.bottom-bar',
    //       path: '/bottom-bar/:sub?',
    //       dynamic: true,
    //       component: async () => (await import('../pages/components/bottom-bar')).PageBottomBar,
    //     },
    //     {
    //       name: 'components.divider',
    //       path: '/divider',
    //       component: async () =>
    //         (await import(/* webpackChunkName: 'pages-components-divider' */ '../pages/components/divider')).PageDivider,
    //     },
    //     {
    //       name: 'components.subheader',
    //       path: '/subheader',
    //       component: async () =>
    //         (await import(/* webpackChunkName: 'pages-components-subheader' */ '../pages/components/subheader'))
    //           .PageSubheader,
    //     },
    //     {
    //       name: 'components.avatar',
    //       path: '/avatar',
    //       component: async () =>
    //         (await import(/* webpackChunkName: 'pages-components-avatar' */ '../pages/components/avatar')).PageAvatar,
    //     },
    //     {
    //       name: 'components.snackbar',
    //       path: '/snackbar',
    //       component: async () =>
    //         (await import(/* webpackChunkName: 'pages-components-snackbar' */ '../pages/components/snackbar')).PageSnackbar,
    //     },
    //     {
    //       name: 'components.steppers',
    //       path: '/steppers',
    //       component: async () =>
    //         (await import(/* webpackChunkName: 'pages-components-steppers' */ '../pages/components/steppers')).PageSteppers,
    //     },
    //     {
    //       name: 'components.tabs',
    //       path: '/tabs/:module?/:sub?',
    //       dynamic: true,
    //       component: async () =>
    //         (await import(/* webpackChunkName: 'pages-components-tabs' */ '../pages/components/tabs')).PageTabs,
    //     },
    //     {
    //       name: 'components.forms',
    //       path: '/forms',
    //       redirect: 'components.forms.autocomplete',
    //       children: [
    //         {
    //           name: 'components.forms.checkbox',
    //           path: '/checkbox',
    //           component: async () =>
    //             (await import(/* webpackChunkName: 'pages-components-checkbox' */ '../pages/components/checkbox'))
    //               .PageCheckbox,
    //         },
    //         {
    //           name: 'components.forms.radio',
    //           path: '/radio',
    //           component: async () =>
    //             (await import(/* webpackChunkName: 'pages-components-radio' */ '../pages/components/radio')).PageRadio,
    //         },
    //         {
    //           name: 'components.forms.switch',
    //           path: '/switch',
    //           component: async () =>
    //             (await import(/* webpackChunkName: 'pages-components-switch' */ '../pages/components/switch')).PageSwitch,
    //         },
    //         {
    //           name: 'components.forms.input',
    //           path: '/input',
    //           component: async () =>
    //             (await import(/* webpackChunkName: 'pages-components-input' */ '../pages/components/input')).PageInput,
    //         },
    //         {
    //           name: 'components.forms.file',
    //           path: '/file',
    //           component: async () =>
    //             (await import(/* webpackChunkName: 'pages-components-file' */ '../pages/components/file')).PageFile,
    //         },
    //         {
    //           name: 'components.forms.chips',
    //           path: '/chips',
    //           component: async () =>
    //             (await import(/* webpackChunkName: 'pages-components-chips' */ '../pages/components/chips')).PageChips,
    //         },
    //         {
    //           name: 'components.forms.autocomplete',
    //           path: '/autocomplete',
    //           component: async () =>
    //             (await import(/* webpackChunkName: 'pages-components-autocomplete' */ '../pages/components/autocomplete'))
    //               .PageAutocomplete,
    //         },
    //         {
    //           name: 'components.forms.select',
    //           path: '/select',
    //           component: async () =>
    //             (await import(/* webpackChunkName: 'pages-components-select' */ '../pages/components/select')).PageSelect,
    //         },
    //       ],
    //     },
    //     {
    //       name: 'components.highlight',
    //       path: '/highlight',
    //       component: async () =>
    //         (await import(/* webpackChunkName: 'pages-components-highlight' */ '../pages/components/highlight'))
    //           .PageHighlight,
    //     },
    //     {
    //       name: 'components.empty-state',
    //       path: '/empty',
    //       component: async () =>
    //         (await import(/* webpackChunkName: 'pages-components-empty' */ '../pages/components/empty')).PageEmptyState,
    //     },
    //     {
    //       name: 'components.datepicker',
    //       path: '/datepicker',
    //       component: async () =>
    //         (await import(/* webpackChunkName: 'pages-components-datepicker' */ '../pages/components/datepicker'))
    //           .PageDatepicker,
    //     },
    //     {
    //       name: 'components.pagination',
    //       path: '/pagination',
    //       component: async () =>
    //         (await import(/* webpackChunkName: 'pages-components-pagination' */ '../pages/components/pagination'))
    //           .PagePagination,
    //     },
    //     {
    //       name: 'components.table',
    //       path: '/table',
    //       component: async () =>
    //         (await import(/* webpackChunkName: 'pages-components-table' */ '../pages/components/table')).PageTable,
    //     },
  ],
};
const uiElementsRoute = {
  name: 'ui',
  path: '/ui',
  redirectTo: 'ui.elevation',
  children: [
    {
      name: 'ui.elevation',
      path: '/elevation',
      component: async () =>
        (await import(/* webpackChunkName: 'pages-ui-elements-elevation' */ '../pages/ui-elements/elevation'))
          .PageElevation,
    },
    {
      name: 'ui.layout',
      path: '/layout',
      component: async () =>
        (await import(/* webpackChunkName: 'pages-ui-elements-layout' */ '../pages/ui-elements/layout')).PageLayout,
    },
    {
      name: 'ui.typography',
      path: '/typography',
      component: async () =>
        (await import(/* webpackChunkName: 'pages-ui-elements-typography' */ '../pages/ui-elements/typography'))
          .PageTypography,
    },
    {
      name: 'ui.states',
      path: '/states',
      component: async () =>
        (await import(/* webpackChunkName: 'pages-ui-elements-states' */ '../pages/ui-elements/states')).PageStates,
    },
  ],
};

export default [
  componentsRoute,
  uiElementsRoute,
  {
    name: 'home',
    path: '/',
    component: () => import(/* webpackChunkName: 'pages-home' */ '../pages/home').then((mod) => mod.PageHome),
  },
  {
    name: 'about',
    path: '/about',
    component: async () => (await import(/* webpackChunkName: 'pages-about' */ '../pages/about')).PageAbout,
  },
  {
    name: 'getting-started',
    path: '/getting-started',
    component: async () => (await import('../pages/getting-started')).PageGettingStarted,
  },
  {
    name: 'i18n',
    path: '/i18n',
    component: async () =>
      (await import(/* webpackChunkName: 'pages-advance-i18n' */ '../pages/advance/i18n')).PageI18N,
  },
  {
    name: 'theme',
    path: '/theme',
    component: async () =>
      (await import(/* webpackChunkName: 'pages-advance-theme' */ '../pages/advance/theme')).PageTheme,
  },
  {
    name: 'use-router',
    path: '/use-router',
    component: async () => (await import('../pages/advance/use-router')).PageUseRouter,
  },
  {
    name: 'license',
    path: '/license',
    component: async () => (await import(/* webpackChunkName: 'pages-license' */ '../pages/license')).PageLicense,
  },
  // {
  //   name: 'debug',
  //   path: '/debug',
  //   component: async () => (await import(/* webpackChunkName: 'pages-debug' */ '../pages/debug')).PageDebug,
  // },
  {
    path: '/(.*)',
    redirect: 'home',
  },
];
