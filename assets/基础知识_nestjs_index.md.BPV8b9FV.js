import{ak as s,h as e,aE as i,f as n}from"./chunks/framework.C-ZmrgQI.js";const k=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"基础知识/nestjs/index.md","filePath":"基础知识/nestjs/index.md","lastUpdated":1716285170000}'),t={name:"基础知识/nestjs/index.md"};function l(r,a,h,d,o,p){return n(),e("div",null,a[0]||(a[0]=[i('<h2 id="基础内容" tabindex="-1">基础内容 <a class="header-anchor" href="#基础内容" aria-label="Permalink to &quot;基础内容&quot;">​</a></h2><h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h3><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @nestjs/cli</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="创建项目" tabindex="-1">创建项目 <a class="header-anchor" href="#创建项目" aria-label="Permalink to &quot;创建项目&quot;">​</a></h3><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nest</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> new</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> project-name</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="创建模块" tabindex="-1">创建模块 <a class="header-anchor" href="#创建模块" aria-label="Permalink to &quot;创建模块&quot;">​</a></h3><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nest</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> module-name</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="创建控制器" tabindex="-1">创建控制器 <a class="header-anchor" href="#创建控制器" aria-label="Permalink to &quot;创建控制器&quot;">​</a></h3><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nest</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> co</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> controller-name</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="创建服务" tabindex="-1">创建服务 <a class="header-anchor" href="#创建服务" aria-label="Permalink to &quot;创建服务&quot;">​</a></h3><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nest</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> service-name</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="创建实体" tabindex="-1">创建实体 <a class="header-anchor" href="#创建实体" aria-label="Permalink to &quot;创建实体&quot;">​</a></h3><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nest</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> model-name</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="创建管道" tabindex="-1">创建管道 <a class="header-anchor" href="#创建管道" aria-label="Permalink to &quot;创建管道&quot;">​</a></h3><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nest</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pipe-name</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="管道" tabindex="-1">管道 <a class="header-anchor" href="#管道" aria-label="Permalink to &quot;管道&quot;">​</a></h2><blockquote><p>转换数据 核验数据</p></blockquote><h2 id="遇到的问题" tabindex="-1">遇到的问题 <a class="header-anchor" href="#遇到的问题" aria-label="Permalink to &quot;遇到的问题&quot;">​</a></h2><h3 id="prisma-downloading-prisma-engines-for-node-api-for-windows-0-error-request-to-https-binaries-prisma-sh-all-commits-b9a39a7ee606c28e3455d0fd60e78c3ba82b1a2b-windows-query-engine-dll-node-gz-sha256-failed-reason-socket-connection-timeout" tabindex="-1">prisma Downloading Prisma engines for Node-API for windows [ ] 0%Error: request to <a href="https://binaries.prisma.sh/all_commits/b9a39a7ee606c28e3455d0fd60e78c3ba82b1a2b/windows/query_engine.dll.node.gz.sha256" target="_blank" rel="noreferrer">https://binaries.prisma.sh/all_commits/b9a39a7ee606c28e3455d0fd60e78c3ba82b1a2b/windows/query_engine.dll.node.gz.sha256</a> failed, reason: Socket connection timeout <a class="header-anchor" href="#prisma-downloading-prisma-engines-for-node-api-for-windows-0-error-request-to-https-binaries-prisma-sh-all-commits-b9a39a7ee606c28e3455d0fd60e78c3ba82b1a2b-windows-query-engine-dll-node-gz-sha256-failed-reason-socket-connection-timeout" aria-label="Permalink to &quot;prisma   Downloading Prisma engines for Node-API for windows [                    ] 0%Error: request to https://binaries.prisma.sh/all_commits/b9a39a7ee606c28e3455d0fd60e78c3ba82b1a2b/windows/query_engine.dll.node.gz.sha256 failed, reason: Socket connection timeout&quot;">​</a></h3><p><a href="https://github.com/prisma/prisma/discussions/22673" target="_blank" rel="noreferrer">Q&amp;A</a></p><h3 id="管道的验证规则" tabindex="-1">管道的验证规则 <a class="header-anchor" href="#管道的验证规则" aria-label="Permalink to &quot;管道的验证规则&quot;">​</a></h3><p>可以使用 class-validator</p>',22)]))}const b=s(t,[["render",l]]);export{k as __pageData,b as default};
