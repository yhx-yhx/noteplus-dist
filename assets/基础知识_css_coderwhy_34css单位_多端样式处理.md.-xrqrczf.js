import{_ as s,c as i,o as a,a5 as e}from"./chunks/framework.CsSpqKUs.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"基础知识/css/coderwhy/34css单位/多端样式处理.md","filePath":"基础知识/css/coderwhy/34css单位/多端样式处理.md","lastUpdated":1713792803000}'),l={name:"基础知识/css/coderwhy/34css单位/多端样式处理.md"},t=e(`<h3 id="rem-媒体查询-font-size" tabindex="-1">rem + 媒体查询 + font-size <a class="header-anchor" href="#rem-媒体查询-font-size" aria-label="Permalink to &quot;rem + 媒体查询 + font-size&quot;">​</a></h3><blockquote><p>rem 参照 是 html 根元素的大小</p></blockquote><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@media</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> screen</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> and</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">min-width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">375</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ){</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    font-size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:16px</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@media</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> screen</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> and</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">min-width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">750</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    font-size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:18px</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@media</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> screen</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> and</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">min-width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1080</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    font-size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:19px</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><ul><li>缺陷 <ul><li>需要写大量的媒体查询</li><li>不够动态的实时的 变化css</li></ul></li></ul><h3 id="jsresize-动态修改-根元素的-font-size" tabindex="-1">jsresize 动态修改 根元素的 font-size <a class="header-anchor" href="#jsresize-动态修改-根元素的-font-size" aria-label="Permalink to &quot;jsresize 动态修改 根元素的 font-size&quot;">​</a></h3><h3 id="lib-flexible-引入-resize" tabindex="-1">lib-flexible 引入 resize <a class="header-anchor" href="#lib-flexible-引入-resize" aria-label="Permalink to &quot;lib-flexible 引入 resize&quot;">​</a></h3><h3 id="pxtorem" tabindex="-1">pxtorem <a class="header-anchor" href="#pxtorem" aria-label="Permalink to &quot;pxtorem&quot;">​</a></h3><ul><li>手动计算</li><li>less 混入</li></ul><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    .pxtoRem(@px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        result</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">rem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> * @px / </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">37.5</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span></code></pre></div><ul><li><p>postcss pxtorem 插件</p></li><li><p>vscode 插件</p></li></ul><h3 id="视口宽度高度" tabindex="-1">视口宽度高度 <a class="header-anchor" href="#视口宽度高度" aria-label="Permalink to &quot;视口宽度高度&quot;">​</a></h3><h3 id="pxtovw" tabindex="-1">pxtovw <a class="header-anchor" href="#pxtovw" aria-label="Permalink to &quot;pxtovw&quot;">​</a></h3><ul><li><p>手动计算</p></li><li><p>less、scss混入传参数</p></li><li><p>webpack postcss-px-viewport-8-plugin</p></li><li><p>vscode 插件</p></li></ul>`,13),n=[t];function h(p,k,r,d,o,c){return a(),i("div",null,n)}const y=s(l,[["render",h]]);export{g as __pageData,y as default};
