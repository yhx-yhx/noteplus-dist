import{ak as t,h as o,aE as r,f as l}from"./chunks/framework.DMTyxyBf.js";const n="/noteplus-dist/assets/image-20241015123254136.DYWS-9Gm.png",h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"我的/分享/BUG/index.md","filePath":"我的/分享/BUG/index.md","lastUpdated":1728973031000}'),a={name:"我的/分享/BUG/index.md"};function i(s,e,c,d,p,m){return l(),o("div",null,e[0]||(e[0]=[r('<h2 id="日常-bug-问题-内容分享" tabindex="-1">日常 BUG 问题 内容分享 <a class="header-anchor" href="#日常-bug-问题-内容分享" aria-label="Permalink to &quot;日常 BUG 问题 内容分享&quot;">​</a></h2><blockquote><p>希望大家能能少的遇见问题，少走弯路。</p></blockquote><h3 id="【2024-10-15】-electron-打包应用页面显示空白" tabindex="-1">【2024-10-15】 electron 打包应用页面显示空白 <a class="header-anchor" href="#【2024-10-15】-electron-打包应用页面显示空白" aria-label="Permalink to &quot;【2024-10-15】 electron 打包应用页面显示空白&quot;">​</a></h3><p><strong>原因：</strong> 目前未知 <strong>解决办法：</strong></p><ul><li>router 无法跳转到 <code>/</code> 路由</li><li>强制 router.push(&#39;/&#39;)</li><li>或 使用 createWebHashHistory</li></ul><h3 id="【2024-10-15】-electron-应用安装时提示" tabindex="-1">【2024-10-15】 electron 应用安装时提示 <a class="header-anchor" href="#【2024-10-15】-electron-应用安装时提示" aria-label="Permalink to &quot;【2024-10-15】 electron 应用安装时提示&quot;">​</a></h3><br><img src="'+n+'" alt="image-20241015123254136" style="zoom:33%;text-align:center;"><p><strong>解决办法：</strong></p><ul><li>退出<code>正在运行</code>的 electron-timer 应用</li><li>具体方法 <ol><li><code>Ctrl + Shift + Esc</code> 打开任务管理器</li><li>找到应用 <code>electron-timer</code> 结束进程即可</li></ol></li></ul><div class="warning custom-block"><p class="custom-block-title">注意</p><p>也可能是相同的 appId 引起的问题，可以自行更换 appid 或 使用以上的方案</p></div><h3 id="【2024-10-13】nrm-无法加载文件-d-development-nodejs-nrm-ps1-因为在此系统上禁止运行脚本" tabindex="-1">【2024-10-13】nrm : 无法加载文件 D:\\Development\\nodejs\\nrm.ps1,因为在此系统上禁止运行脚本 <a class="header-anchor" href="#【2024-10-13】nrm-无法加载文件-d-development-nodejs-nrm-ps1-因为在此系统上禁止运行脚本" aria-label="Permalink to &quot;【2024-10-13】nrm : 无法加载文件 D:\\Development\\nodejs\\nrm.ps1,因为在此系统上禁止运行脚本&quot;">​</a></h3><p><strong>解决办法</strong>：</p><p>（1）以管理员身份运行 powershell</p><p>（2）在终端执行：get-ExecutionPolicy，显示 Restricted（表示状态是禁止的）</p><p>（3）在终端执行：set-ExecutionPolicy RemoteSigned</p><p>（4）在终端执行：get-ExecutionPolicy，显示 RemoteSigned</p><h3 id="【2023-08-11】信创系统-无法识别配置文件" tabindex="-1">【2023-08-11】信创系统 无法识别配置文件 <a class="header-anchor" href="#【2023-08-11】信创系统-无法识别配置文件" aria-label="Permalink to &quot;【2023-08-11】信创系统 无法识别配置文件&quot;">​</a></h3><ul><li><strong>问题背景</strong>：搭建项目用到配置信息，配置文件名称<code>click.json</code> 死活拿不到该文件。</li><li><strong>解决办法</strong>：修改文件名称，click.json -&gt; dianji.json 最终可以拿到配置信息。</li><li><strong>原因</strong>：推测内部做了关键字处理，导致无法识别。</li></ul>',19)]))}const g=t(a,[["render",i]]);export{h as __pageData,g as default};
