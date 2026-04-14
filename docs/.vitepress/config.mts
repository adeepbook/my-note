import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: "见素学习笔记",
  description: "记录量化交易、机械设计与思维感悟",

  themeConfig: {
    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '量化交易', link: '/quant/v5-record' },
      { text: '机械设计', link: '/mechanics/gear-design' }
    ],

    // 侧边栏（你的多级目录完好无损保留）
    sidebar: [
      {
        text: '📈 金融与量化学习',
        collapsed: false,
        items: [
          { text: '量化终端 V5.0 复盘', link: '/quant/v5-record' }
        ]
      },
      {
        text: '⚙️ 机械工程学习',
        collapsed: false,
        items: [
          {
            text: '基础理论与设计',
            items: [{ text: '齿轮传动设计基础', link: '/mechanics/gear-design' }]
          },
          {
            text: '加工工艺与材料',
            items: [
              { text: '钣金加工与工艺槽规范', link: '/mechanics/sheet-metal' },
              { text: '螺栓强度校核与选型', link: '/mechanics/screw-strength' }
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/你的用户名/你的仓库名' }
    ]
  }
})