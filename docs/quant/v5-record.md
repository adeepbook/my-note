# 专业量化终端 Pro (V5.0) 开发复盘

## 1. 核心架构说明
本次 V5.0 版本最大的突破是接入了 AI 智囊团。为了保证系统的稳定性，我采用了严格的 **MVC 模块化架构**：
* `ui/main_window.py`: 负责前台界面渲染。
* `core/data_engine.py`: 负责后台 BaoStock 数据抓取。
* `core/ai_agent.py`: 负责直连大模型 API。

![这是图片的描述文字](/ui-v5.png)

## 2. 关键代码片段
这是呼叫 Gemini 大模型的核心逻辑。只要配置好 API Key，就能实时生成分析报告。

```python
import google.generativeai as genai

def generate_report(pe, pb):
    api_key = "你的_API_KEY"
    genai.configure(api_key=api_key)
    model = genai.GenerativeModel(model_name='gemini-1.5-flash')
    # ... 发送请求逻辑 ...