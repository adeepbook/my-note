import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN', // 核心：声明网站语言为简体中文
  title: "我的数字花园",
  description: "个人知识库、机械设计与量化交易笔记",
  
  themeConfig: {
    // 1. 修改顶部导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '量化交易', link: '/quant/v5-record' },      // 👈 新增的量化导航
      { text: '机械设计', link: '/mechanics/gear-design' } // 👈 新增的机械导航
    ],

    // 2. 修改左侧目录树
    sidebar: [
      {
        text: '📈 量化交易笔记',
        items: [
          { text: 'V5.0 AI接入复盘', link: '/quant/v5-record' } // 👈 关联你刚才写的文章
        ]
      },
      {
        text: '⚙️ 机械设计手稿',
        items: [
          { text: '齿轮传动设计 (待写)', link: '/mechanics/gear-design' } // 👈 给未来预留的空房间
        ]
      }
    ],

    // 右上角的社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})