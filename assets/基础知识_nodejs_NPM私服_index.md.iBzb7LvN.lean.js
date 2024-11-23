import{an as a,l as i,aH as e,k as t}from"./chunks/framework.8wObz1dk.js";const c=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"基础知识/nodejs/NPM私服/index.md","filePath":"基础知识/nodejs/NPM私服/index.md","lastUpdated":1714289834000}'),l={name:"基础知识/nodejs/NPM私服/index.md"};function n(h,s,p,d,o,r){return t(),i("div",null,s[0]||(s[0]=[e(`<h2 id="npm-私有部署" tabindex="-1">NPM 私有部署 <a class="header-anchor" href="#npm-私有部署" aria-label="Permalink to &quot;NPM 私有部署&quot;">​</a></h2><h3 id="如何创建私服" tabindex="-1">如何创建私服 <a class="header-anchor" href="#如何创建私服" aria-label="Permalink to &quot;如何创建私服&quot;">​</a></h3><p><a href="https://verdaccio.org/docs/6.x" target="_blank" rel="noreferrer">verdaccio</a></p><blockquote><p>Verdaccio 可以帮我们快速创建一个本地的私有npm仓库</p></blockquote><h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm install -g verdaccio</span></span></code></pre></div><h3 id="基本命令" tabindex="-1">基本命令 <a class="header-anchor" href="#基本命令" aria-label="Permalink to &quot;基本命令&quot;">​</a></h3><ul><li>创建账号</li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> adduser</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --registry</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http://localhost:4873/</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 账号 密码 邮箱</span></span></code></pre></div><ul><li>发布npm</li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> publish</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --registry</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http://localhost:4873/</span></span></code></pre></div><ul><li>指定开启端口 默认 4873</li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">verdaccio</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --listen</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 9999</span></span></code></pre></div><ul><li>指定安装源</li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --registry</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http://localhost:4873</span></span></code></pre></div><ul><li>从本地仓库删除包</li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> unpublish</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">package-nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --registry</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http://localhost:4873</span></span></code></pre></div>`,17)]))}const g=a(l,[["render",n]]);export{c as __pageData,g as default};
