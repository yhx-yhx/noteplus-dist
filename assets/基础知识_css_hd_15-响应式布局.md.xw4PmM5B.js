import{ak as l,h as n,aE as a,j as s,f as e}from"./chunks/framework.C-ZmrgQI.js";const c=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"基础知识/css/hd/15-响应式布局.md","filePath":"基础知识/css/hd/15-响应式布局.md","lastUpdated":1731221370000}'),t={name:"基础知识/css/hd/15-响应式布局.md"};function p(h,i,k,r,d,E){return e(),n("div",null,i[0]||(i[0]=[a('<h2 id="style-标签" tabindex="-1">style 标签 <a class="header-anchor" href="#style-标签" aria-label="Permalink to &quot;style 标签&quot;">​</a></h2><ul><li>media 媒体查询属性</li><li>使用区域（范围） 在 <code>link</code> 、<code>style</code> 、<code>source</code> 均可使用</li></ul><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> media=&quot;screen,print&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p>引申问题 想到了 css Modules 模块实现的？</p></blockquote>',4),s("ul",null,[s("li",null,"采用的是 cssModules （Css 模块化）？"),s("li",{hash:""},"原理是 给当前模块 添加一个唯一的 hash 值 data-v-$"),s("li",null,"以此保证了 css 的局部性"),s("li",null,"具体怎么实现 有时间看源码"),s("li",null,[s("strong",null,"官方文档给出的解释"),s("ul",null,[s("li",null,"当 style 标签具有 scoped 属性时，其 CSS 将只会作用于当前组件的元素。"),s("li",null,"这类似于 Shadow DOM 中的样式封装，它带有一些注意事项。但是不需要任何的 polyfill"),s("li",null,"他是使用 postCss 转换的")])])],-1),a(`<div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> scoped</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.example</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">red</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;example&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;hi&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>转换为：</p><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.example</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">data-v-f3f3eg9</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">red</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;example&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> data-v-f3f3eg9</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;hi&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><blockquote><p>子组件的样式不受外部的 css 样式影响 不会产生样式渗透。不过 子组件的根节点会受到父子组件的样式的共同影响 处于 scoped 子组件 想要影响 父组件 需要使用深度选择器（:deep()）。 可以在一个 vue 的单文件组件中使用 多个 style 可以是一个局部样式 一个全局样式 [<a href="https://cn.vuejs.org/api/sfc-css-features.html" target="_blank" rel="noreferrer">https://cn.vuejs.org/api/sfc-css-features.html</a>](::vue 文档解释)</p></blockquote><h2 id="link-标签" tabindex="-1">link 标签 <a class="header-anchor" href="#link-标签" aria-label="Permalink to &quot;link 标签&quot;">​</a></h2><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">link</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> rel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;stylesheet&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;css/index.css&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> media</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;screen&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt; /* 默认是all */</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="import" tabindex="-1">@import <a class="header-anchor" href="#import" aria-label="Permalink to &quot;@import&quot;">​</a></h2><ul><li>@import [url| String]| [list-of-queries] //媒体查询条件</li></ul><h2 id="响应式多列布局" tabindex="-1">响应式多列布局 <a class="header-anchor" href="#响应式多列布局" aria-label="Permalink to &quot;响应式多列布局&quot;">​</a></h2><ul><li>grid 基本上超过 <code>97.56%</code> 浏览器支持该特性</li><li>responsiveLayout</li></ul><h2 id="响应式-demo" tabindex="-1"><a href="/noteplus-dist/static/html/ResponsiveLayout/index.html" target="_blank">响应式 Demo</a> <a class="header-anchor" href="#响应式-demo" aria-label="Permalink to &quot;&lt;a href=&quot;/noteplus-dist/static/html/ResponsiveLayout/index.html&quot; target=&quot;_blank&quot;&gt;响应式 Demo&lt;/a&gt;&quot;">​</a></h2>`,11)]))}const g=l(t,[["render",p]]);export{c as __pageData,g as default};
