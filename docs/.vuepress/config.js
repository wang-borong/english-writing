import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',

  title: '英文写作',
  description: '本网页用于记录英文写作相关的知识',

  theme: defaultTheme({

    displayAllHeaders: true,
    smoothScroll: true,

    navbar: ['/'],
    sidebar: [
        '/',
        '/grammar.md',
        '/punc.md',
    ],

  }),

  bundler: viteBundler(),
})
