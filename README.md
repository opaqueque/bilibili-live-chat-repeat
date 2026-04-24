# Bilibili 直播间快捷 +1

在 B 站直播间右侧聊天列表增加快捷 [+1] 复读功能的 Tampermonkey（油猴）脚本。原生 UI 风格，交互流畅，不遮挡视频画面。

## ✨ 核心功能

* **无缝融入**：采用 B 站原生主题色与圆角设计，按键交互（Hover/Active）丝滑流畅。
* **精准提取**：直接从 DOM 属性安全提取弹幕纯文本，避免表情包或特殊字符导致的解析乱码。
* **底层突破**：完美兼容 Vue 框架的数据双向绑定机制，通过触发原生 Input 事件实现真正的自动化发送。
* **极致轻量**：使用原生 JavaScript 编写，仅监听右侧聊天列表增量更新，不涉及 Canvas 重绘或视频流操作，对直播播放零性能影响。

## 🚀 安装指南

### 1. 安装脚本管理器
你需要先在浏览器中安装 **Tampermonkey** 扩展程序：
- [Chrome 商店链接](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
- [Edge 商店链接](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)

### 2. 安装本脚本
点击下方链接即可一键安装（推荐使用 GreasyFork 安装以保持后续自动更新）：
- **[从 GreasyFork 一键安装](https://greasyfork.org/zh-CN/scripts/575243)**
- [查看脚本源码](./bilibili-plus-one.user.js)

## 🛠️ 使用说明

1. 进入任意 [Bilibili 直播间](https://live.bilibili.com/)。
2. 等待右侧聊天列表加载完毕。
3. 当其他观众发送文字弹幕时，该弹幕末尾会自动出现一个蓝色的 `+1` 按钮。
4. 点击 `+1`，你的账号会自动将该弹幕填入输入框并瞬间发送！

## 📝 贡献与反馈

本插件由Gemini辅助完成，本人水平差还有望谅解。如有问题，反馈即可。

## 📄 开源协议

本项目基于 [MIT License](LICENSE) 开源。