import { defineConfig } from 'vitepress'
import mathjax3 from 'markdown-it-mathjax3'

// ==========================================
// 🧩 第一部分：我的文章目录（分类更清爽！）
// ==========================================

// 1. 量化交易文章
const quantArticles = [
  { text: '量化终端 V5.0 复盘', link: '/quant/v5-record' }
]

// 2. 机械 - 基础理论文章
const theoryArticles = [
  { text: '齿轮传动设计基础', link: '/mechanics/gear-design' },
  { text: '应力集中与疲劳分析', link: '/mechanics/stress-concentration' }
]

// 3. 机械 - 加工工艺文章
const processArticles = [
  { text: '钣金加工与工艺槽规范', link: '/mechanics/sheet-metal' },
  { text: '螺栓强度校核与选型', link: '/mechanics/screw-strength' }
]

// ==========================================
// ⚙️ 第二部分：网站底层架构
// ==========================================
export default defineConfig({
  lang: 'zh-CN',
  title: "见素学习笔记",
  description: "记录量化交易、机械设计思路与思维感悟",
  ignoreDeadLinks: true, // 免死金牌

  // 激活数学公式渲染
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

    // 👇 重点看这里：把子标题全部提拔成了独立的大标题！
    sidebar: [
      {
        text: '📈 金融与量化学习',
        collapsed: false, // false 表示默认展开
        items: quantArticles
      },
      {
        text: '⚙️ 基础理论与设计', 
        collapsed: false,
        items: theoryArticles
      },
      {
        text: '🔨 加工工艺与材料', 
        collapsed: false,
        items: processArticles
      }
    ]
  }
})