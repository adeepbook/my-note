import { defineConfig } from 'vitepress'
import mathjax3 from 'markdown-it-mathjax3'

// ==========================================
// 🗄️ 第一部分：内容抽屉（以后只在这里加文章！）
// ==========================================

// 📂 抽屉 1：金融领域
const financeDrawer = [
  // 金融目前没有分小类，直接放文章
  { text: '量化终端 V5.0 复盘', link: '/quant/v5-record' }
]

// 📂 抽屉 2：机械领域（极致扁平，直接放文章）
const mechanicsDrawer = [
  { text: '齿轮传动设计基础', link: '/mechanics/gear-design' },
  { text: '应力集中与疲劳分析', link: '/mechanics/stress-concentration' },
  { text: '钣金加工与工艺槽规范', link: '/mechanics/sheet-metal' },
  { text: '螺栓强度校核与选型', link: '/mechanics/screw-strength' }
]

// ==========================================
// ⚙️ 第二部分：底层框架（永远不需要改动）
// ==========================================
export default defineConfig({
  lang: 'zh-CN',
  title: "见素学习笔记",
  description: "记录量化交易、机械设计思路与思维感悟",
  ignoreDeadLinks: true,

  markdown: {
    config: (md) => {
      md.use(mathjax3)
    }
  },

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '量化交易', link: '/quant/v5-record' },
      { text: '机械设计', link: '/mechanics/gear-design' }
    ],

    // 将上面的抽屉装进侧边栏
    sidebar: [
      {
        text: '📈 金融与量化', // 大类标题
        collapsed: false,
        items: financeDrawer
      },
      {
        text: '⚙️ 机械工程',    // 大类标题
        collapsed: false,
        items: mechanicsDrawer
      }
    ]
  }
})