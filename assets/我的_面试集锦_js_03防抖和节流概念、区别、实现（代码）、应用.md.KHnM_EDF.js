import{an as t,l as h,m as a,S as e,K as n,aH as l,ae as k,k as p}from"./chunks/framework.8wObz1dk.js";const u=JSON.parse('{"title":"防抖","description":"","frontmatter":{},"headers":[],"relativePath":"我的/面试集锦/js/03防抖和节流概念、区别、实现（代码）、应用.md","filePath":"我的/面试集锦/js/03防抖和节流概念、区别、实现（代码）、应用.md","lastUpdated":1726197821000}'),r={name:"我的/面试集锦/js/03防抖和节流概念、区别、实现（代码）、应用.md"};function E(d,s,g,o,y,c){const i=k("ArticleMetadata");return p(),h("div",null,[s[0]||(s[0]=a("h1",{id:"防抖",tabindex:"-1"},[e("防抖 "),a("a",{class:"header-anchor",href:"#防抖","aria-label":'Permalink to "防抖"'},"​")],-1)),n(i),s[1]||(s[1]=l(`<h2 id="概念" tabindex="-1">概念 <a class="header-anchor" href="#概念" aria-label="Permalink to &quot;概念&quot;">​</a></h2><pre><code>1. 函数防抖，是指在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。
</code></pre><h2 id="防抖实现" tabindex="-1">防抖实现 <a class="header-anchor" href="#防抖实现" aria-label="Permalink to &quot;防抖实现&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> debounce</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">fn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">delay</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> timer </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">args</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    clearTimeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(timer);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    timer </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setTimeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      fn.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apply</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, args);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }, delay);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  };</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="防抖应用场景" tabindex="-1">防抖应用场景 <a class="header-anchor" href="#防抖应用场景" aria-label="Permalink to &quot;防抖应用场景&quot;">​</a></h2><ul><li>滚动事件处理</li><li>窗口变化 resize 事件</li><li>输入框 Input 事件</li><li>鼠标移动事件</li></ul><h1 id="节-截-流" tabindex="-1">节（截）流 <a class="header-anchor" href="#节-截-流" aria-label="Permalink to &quot;节（截）流&quot;">​</a></h1>`,7)),n(i),s[2]||(s[2]=l(`<h2 id="概念-1" tabindex="-1">概念 <a class="header-anchor" href="#概念-1" aria-label="Permalink to &quot;概念&quot;">​</a></h2><pre><code>1. 函数节流，是指规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效。
&gt; 技能，首次立即触发，在在规定时间内频繁触发，不会执行，等待单位时间后，再次触发立即执行；
</code></pre><h2 id="节流实现" tabindex="-1">节流实现 <a class="header-anchor" href="#节流实现" aria-label="Permalink to &quot;节流实现&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> throttle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">fn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">delay</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> timer;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">args</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">timer) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      timer </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setTimeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        fn.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apply</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, args);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        clearTimeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(timer);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        timer </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }, delay);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  };</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="节流应用场景" tabindex="-1">节流应用场景 <a class="header-anchor" href="#节流应用场景" aria-label="Permalink to &quot;节流应用场景&quot;">​</a></h2><blockquote><p>节流函数常用于控制函数的执行频率</p></blockquote><ul><li>用户做验证码验证时，使用节流函数，防止用户的频繁触发验证码的获取请求，减少带宽，当然做严格的验证码防御机制，紧靠前端是无法实现的，需要服务端配合。（防盗刷限制请求频率 过于频繁 限制请求返回 用户适当采取阶梯封禁 原则等）</li><li>游戏中的技能</li></ul><h2 id="选择依据-区别" tabindex="-1">选择依据(区别) <a class="header-anchor" href="#选择依据-区别" aria-label="Permalink to &quot;选择依据(区别)&quot;">​</a></h2><ul><li>如果事件是一次性的（例如用户完成输入触发的动作），更合适使用防抖；如果是持续性的（例如滚动事件），更合适使用节流。</li><li>解决触发频率 频繁的问题 使用节流</li></ul><blockquote><p>这个问题理解的并不是很清晰</p></blockquote>`,10))])}const m=t(r,[["render",E]]);export{u as __pageData,m as default};
