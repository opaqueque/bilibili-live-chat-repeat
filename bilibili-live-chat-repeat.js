// ==UserScript==
// @name         Bilibili 直播间快捷 +1
// @namespace    https://github.com/opaqueque/bilibili-live-chat-repeat
// @version      1.0.0
// @description  在B站直播间右侧弹幕列表增加快捷+1复读功能，原生UI风格，极致流畅。
// @author       opaqueque
// @license      MIT
// @match        *://live.bilibili.com/*
// @icon         https://www.bilibili.com/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // === 0. 注入自定义 CSS 样式 ===
    function injectStyles() {
        const style = document.createElement('style');
        style.innerHTML = `
            .bili-plus-one-btn {
                display: inline-block;
                margin-left: 8px;
                padding: 1px 6px;
                background-color: #00a1d6; /* B站主题蓝 */
                color: #ffffff !important;
                border-radius: 4px; /* 圆角 */
                font-size: 10px;
                cursor: pointer;
                transition: background-color 0.2s; /* 平滑过渡效果 */
                line-height: 1.5;
                vertical-align: middle;
            }
            /* 鼠标悬停时的效果：颜色变浅一点 */
            .bili-plus-one-btn:hover {
                background-color: #00b5e5;
            }
            /* 鼠标按下时的效果：颜色变深一点 */
            .bili-plus-one-btn:active {
                background-color: #008ebf;
            }
        `;
        document.head.appendChild(style);
    }

    // === 1. 发送弹幕的核心函数 ===
    function sendDanmakuToBilibili(text) {
        const inputArea = document.querySelector('textarea.chat-input');
        const sendBtn = document.querySelector('button.bl-button--primary');

        if (inputArea && sendBtn) {
            inputArea.value = text;

            const inputEvent = new Event('input', { bubbles: true });
            inputArea.dispatchEvent(inputEvent);

            setTimeout(() => {
                sendBtn.click();
            }, 50);
        }
    }

    // === 2. 注入 +1 按钮的函数 ===
    function injectPlusOneButton(messageNode) {
        if (messageNode.querySelector('.bili-plus-one-btn')) return;

        const text = messageNode.getAttribute('data-danmaku');
        if (!text) return;

        const textContainer = messageNode.querySelector('.danmaku-item-right');
        if (!textContainer) return;

        // 创建更美观的按钮
        const btn = document.createElement('span');
        // 使用我们刚刚注入的 CSS 类名
        btn.className = 'bili-plus-one-btn';
        btn.innerText = '+1'; // 去掉了丑陋的方括号
        btn.title = "快捷复读";

        btn.onclick = (e) => {
            e.stopPropagation();
            sendDanmakuToBilibili(text);
        };

        textContainer.appendChild(btn);
    }

    // === 3. 启动引擎 ===
    function startObserver() {
        const chatList = document.querySelector('#chat-history-list');

        if (!chatList) {
            setTimeout(startObserver, 1000);
            return;
        }

        // 先注入样式
        injectStyles();

        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === 1 && node.classList.contains('chat-item')) {
                        injectPlusOneButton(node);
                    }
                });
            });
        });

        observer.observe(chatList, { childList: true, subtree: true });
        console.log("B站快捷+1插件 (UI优化版) 初始化成功！");
    }

    window.addEventListener('load', startObserver);

})();