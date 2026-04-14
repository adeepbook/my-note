import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN', // 核心：声明网站语言为简体中文
  title: "见素学习笔记",
  description: "见素抱朴，记录成长",
  
  themeConfig: {
    // 1. 修改顶部导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '量化交易', link: '/quant/v5-record' },      // 👈 新增的量化导航
      { text: '机械设计', link: '/mechanics/gear-design' } // 👈 新增的机械导航
    ],

   // 2. 修改左侧目录树（多级嵌套版）
    sidebar: [
      {
        text: '📈 金融与量化学习',
        collapsed: false, // 添加这个属性，允许折叠/展开，false代表默认展开
        items: [
          { text: '量化终端 V5.0 复盘', link: '/quant/v5-record' },
          { text: '宏观经济与周期研判 (待写)', link: '/quant/macro' } // 预留新房间
        ]
      },
      {
        text: '⚙️ 机械工程学习',
        collapsed: false,
        items: [
          // 下面开始建“小类”
          {
            text: '基础理论与设计', 
            collapsed: false, 
            items: [
              { text: '齿轮传动设计基础', link: '/mechanics/gear-design' }
            ]
          },
          {
            text: '加工工艺与材料', // 这是你想要的板材、螺丝小类
            collapsed: false,
            items: [
              { text: '钣金加工与工艺槽规范', link: '/mechanics/sheet-metal' },
              { text: '螺栓强度校核与选型', link: '/mechanics/screw-strength' }
            ]
          }
        ]
      }
    ],

    // 右上角的社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})