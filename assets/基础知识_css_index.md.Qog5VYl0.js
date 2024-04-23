import{_ as s,c as i,o as a,a5 as n}from"./chunks/framework.CsSpqKUs.js";const y=JSON.parse('{"title":"CSS详细教程","description":"","frontmatter":{},"headers":[],"relativePath":"基础知识/css/index.md","filePath":"基础知识/css/index.md","lastUpdated":1713792803000}'),l={name:"基础知识/css/index.md"},h=n(`<h1 id="css详细教程" tabindex="-1">CSS详细教程 <a class="header-anchor" href="#css详细教程" aria-label="Permalink to &quot;CSS详细教程&quot;">​</a></h1><h2 id="目录" tabindex="-1">目录 <a class="header-anchor" href="#目录" aria-label="Permalink to &quot;目录&quot;">​</a></h2><ul><li><a href="#权重与继承">权重与继承</a></li><li><a href="#选择器">选择器</a></li><li><a href="#文本样式">文本样式</a></li><li><a href="#背景与边框">背景与边框</a></li><li><a href="#盒模型">盒模型</a></li><li><a href="#定位与浮动">定位与浮动</a></li><li><a href="#css3样式">CSS3样式</a></li><li><a href="#动画">动画</a></li></ul><h2 id="权重与继承" tabindex="-1">权重与继承 <a class="header-anchor" href="#权重与继承" aria-label="Permalink to &quot;权重与继承&quot;">​</a></h2><p>权重由高到低排列：</p><ul><li>!important</li><li>行内样式</li><li>id</li><li>class</li><li>标签</li><li>继承</li><li><ul><li></li></ul></li></ul><h2 id="选择器" tabindex="-1">选择器 <a class="header-anchor" href="#选择器" aria-label="Permalink to &quot;选择器&quot;">​</a></h2><p>选择器用于选取要设置样式的元素。</p><ul><li>元素选择器:直接使用元素名称作为选择器</li><li>id选择器:#id名</li><li>类选择器:.class名</li><li>属性选择器:[attr=value]</li><li>后代选择器:div p</li><li>下一个兄弟选择器 +</li><li>后面的兄弟选择器 ~</li></ul><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 元素选择器 */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">red</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* id选择器 */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">#container</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">960</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 类选择器 */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.box</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  background-color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">#ddd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 属性选择器 */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">target</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">_blank</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">blue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 后代选择器 */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;"> p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  margin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 下一个兄弟选择器 */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;"> p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    border</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> soild </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">blue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 后面的兄弟选择器 */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ~</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;"> p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    border</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> soild </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">blue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 结构为类选择器*/</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:first-child</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 匹配父元素的第一个子元素div。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:last-child</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 匹配父元素的最后一个子元素div。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:nth-child</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">n</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) 匹配父元素的第n个子元素div。注意，盒子的编号是从1开始算起，不是从0开始算起。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:nth-child</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">odd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) 匹配奇数</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:nth-child</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">even</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) 匹配偶数</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:nth-last-child</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">n</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) 匹配父元素的倒数第n个子元素div。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:first-of-type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 匹配同类型中的第一个同级兄弟元素div。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:last-of-type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 匹配同类型中的最后一个同级兄弟元素div。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:nth-of-type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">n</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) 匹配同类型中的第n个同级兄弟元素div。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:nth-last-of-type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">n</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) 匹配同类型中的倒数第n个同级兄弟元素div。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:empty</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 匹配没有任何子节点（包括空格等text节点）的元素div。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:target</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 匹配相关URL指向的div元素。要配合锚点使用。</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*伪元素选择器 */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">::before</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 设置在 元素div 前面（依据对象树的逻辑结构）的内容，配合content属性一起使用。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">::after</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 设置在 元素div 后面（依据对象树的逻辑结构）的内容，配合content属性一起使用。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">::first-letter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 设置div的第一个字符样式</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">fist-line</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 设置div 的第一行元素的样式</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">::selection</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 设置div被鼠标选中的区域样式</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 静态伪类 :link :visited */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 动态伪类 :active :focus :hover*/</span></span></code></pre></div><h2 id="文本样式" tabindex="-1">文本样式 <a class="header-anchor" href="#文本样式" aria-label="Permalink to &quot;文本样式&quot;">​</a></h2><p>设置文字颜色、对齐等样式。</p><ul><li>color</li><li>text-align</li><li>text-decoration</li><li>line-height</li></ul><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">blue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  text-align</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">center</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  text-decoration</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">underline</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  line-height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="背景与边框" tabindex="-1">背景与边框 <a class="header-anchor" href="#背景与边框" aria-label="Permalink to &quot;背景与边框&quot;">​</a></h2><p>设置元素的背景与边框。</p><ul><li>background-color</li><li>background-image</li><li>border-width</li><li>border-style</li><li>border-color</li></ul><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  background-color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">#eee</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  background-image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;bg.png&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  border-width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  border-style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">solid</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  border-color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">red</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="盒模型" tabindex="-1">盒模型 <a class="header-anchor" href="#盒模型" aria-label="Permalink to &quot;盒模型&quot;">​</a></h2><p>控制元素占用空间的方式。</p><ul><li>box-sizing: content-box | border-box</li><li>width/height(content)</li><li>padding 内边距</li><li>margin 外边距</li><li>width:width(content)+padding+border:width(content)</li></ul><h2 id="定位与浮动" tabindex="-1">定位与浮动 <a class="header-anchor" href="#定位与浮动" aria-label="Permalink to &quot;定位与浮动&quot;">​</a></h2><p>控制元素位置。</p><ul><li>position: static | relative | absolute | fixed</li><li>top/left/right/bottom</li><li>float: left | right</li><li>clear: left | right | both</li></ul><h2 id="css3样式" tabindex="-1">CSS3样式 <a class="header-anchor" href="#css3样式" aria-label="Permalink to &quot;CSS3样式&quot;">​</a></h2><p>CSS3带来了圆角、阴影、动画等样式。</p><ul><li>border-radius 创建圆角</li><li>box-shadow 设置阴影</li><li>@keyframes 定义动画</li><li>transform 进行元素转换</li></ul><h2 id="动画" tabindex="-1">动画 <a class="header-anchor" href="#动画" aria-label="Permalink to &quot;动画&quot;">​</a></h2><ul><li>过渡</li></ul><h2 id="更多内容" tabindex="-1">更多内容 <a class="header-anchor" href="#更多内容" aria-label="Permalink to &quot;更多内容&quot;">​</a></h2><p>此处仅列出各大类,每个知识点还有更多属性与详细用法。</p><p>可以继续补充完善这份CSS教程大纲,欢迎提出宝贵意见。</p>`,32),p=[h];function k(t,e,d,E,r,g){return a(),i("div",null,p)}const o=s(l,[["render",k]]);export{y as __pageData,o as default};
