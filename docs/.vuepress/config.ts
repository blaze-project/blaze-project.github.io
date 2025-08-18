import { NavbarOptions, defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from '@vuepress/cli'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { viteBundler } from '@vuepress/bundler-vite'
import { path } from '@vuepress/utils'
import { SidebarOptions } from '@vuepress/theme-default'

const sidebar: SidebarOptions = [
  { text: 'Introduction', link: '/introduction' },
  {
    text: 'Documents',
    prefix: 'documents',
    children: [
      '/documents/getting-started',
      '/documents/configuration',
      '/documents/benchmarks'
    ]
  },
  {
    text: 'Archives',
    prefix: 'archives',
    children: [
      '/archives/v5.0.0',
      '/archives/v4.0.1',
      '/archives/v4.0.0',
      '/archives/all-releases',
    ]
  },
  { text: 'Blogs', link: '/references' },
];

const navbar: NavbarOptions = [
  { text: 'Introduction', link: '/introduction' },
  { text: 'Documentations', children: [
    { text: 'Getting Started', link: '/documents/getting-started' },
    { text: 'Configuration', link: '/documents/configuration' },
    { text: 'Benchmarks', link: '/documents/benchmarks' },
  ]},
  { text: 'Archives', children: [
    { text: 'v5.0.0', link: '/archives/v5.0.0' },
    { text: 'v4.0.1', link: '/archives/v4.0.1' },
    { text: 'v4.0.0', link: '/archives/v4.0.0' },
    { text: 'All Archived Releases', link: '/archives/all-releases' },
  ]},
  { text: 'Blogs', link: '/references' },
];

export default defineUserConfig({
  base: '/',
  title: 'Auron',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/logo-mini.png' }],
  ],

  theme: defaultTheme({
    logo: '/logo-mini.png',
    home: '/',
    colorMode: 'light',
    colorModeSwitch: false,
    repo: 'kwai/blaze',
    sidebarDepth: 1,
    lastUpdated: false,
    contributors: false,
    editLink: false,
    sidebar,
    navbar,
  }),
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
  ],
  bundler: viteBundler(),
})
