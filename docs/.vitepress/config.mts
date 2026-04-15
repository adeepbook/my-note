import { defineConfig } from 'vitepress'
import mathjax3 from 'markdown-it-mathjax3' // 👈 导入刚才安装的数学翻译官

// ==========================================
// 🧩 第一部分：我的文章目录（以后只在这里修改！）
// ==========================================

// 1. 量化交易的目录积木
const quantArticles = [
  { text: '量化终端 V5.0 复盘', link: '/quant/v5-record' }
]

// 2. 机械工程的目录积木
const mechanicsArticles = [
  {
    text: '基础理论与设计',
    items: [
      { text: '齿轮传动设计基础', link: '/mechanics/gear-design' },
      { text: '应力集中与疲劳分析', link: '/mechanics/stress-concentration' } // 👈 你的新文章已经完美加在这里了
    ]
  },
  {
    text: '加工工艺与材料',
    items: [
      { text: '钣金加工与工艺槽规范', link: '/mechanics/sheet-metal' },
      { text: '螺栓强度校核与选型', link: '/mechanics/screw-strength' }
    ]
  }
]

// ==========================================
// ⚙️ 第二部分：网站底层架构（拼装积木，以后不用管它）
// ==========================================
export default defineConfig({
  lang: 'zh-CN',
  title: "见素学习笔记",
  description: "记录量化交易、机械设计思路与代码笔记",
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

    sidebar: [
      {
        text: '📈 金融与量化学习',
        collapsed: false,
        items: quantArticles // 👈 自动调用上面的量化积木
      },
      {
        text: '⚙️ 机械工程学习',
        collapsed: false,
        items: mechanicsArticles // 👈 自动调用上面的机械积木
      }
    ]
  }
})