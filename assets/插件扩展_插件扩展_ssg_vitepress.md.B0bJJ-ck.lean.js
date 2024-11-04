import{ak as a,h as i,aE as e,f as n}from"./chunks/framework.C-ZmrgQI.js";const k=JSON.parse('{"title":"VitePress","description":"","frontmatter":{},"headers":[],"relativePath":"插件扩展/插件扩展/ssg/vitepress.md","filePath":"插件扩展/插件扩展/ssg/vitepress.md","lastUpdated":1721226544000}'),p={name:"插件扩展/插件扩展/ssg/vitepress.md"};function l(t,s,r,h,d,c){return n(),i("div",null,s[0]||(s[0]=[e(`<h1 id="vitepress" tabindex="-1">VitePress <a class="header-anchor" href="#vitepress" aria-label="Permalink to &quot;VitePress&quot;">​</a></h1><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-label="Permalink to &quot;&quot;">​</a></h2><p>👀 <a href="https://vitepress.dev/zh/guide/getting-started" target="_blank" rel="noreferrer">VitePress</a> 看看官网 实在不行看看 <a href="https://github.com/vuejs/vitepress/issues" target="_blank" rel="noreferrer">issues</a></p><h2 id="vitepress-介绍" tabindex="-1">VitePress 介绍 <a class="header-anchor" href="#vitepress-介绍" aria-label="Permalink to &quot;VitePress 介绍&quot;">​</a></h2><p>VitePress 是一个基于 Vue.js 和 Vite 的静态网站生成器，它提供了一种简单的方式来创建文档网站。在本篇回答中，我将为您提供从入门到高级的 VitePress 使用指南，并介绍如何将您的项目部署到 Gitee 和 Github 上。</p><h2 id="入门" tabindex="-1">入门 <a class="header-anchor" href="#入门" aria-label="Permalink to &quot;入门&quot;">​</a></h2><h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h3><p>首先，您需要安装 Node.js 和 npm。然后，在您的终端中运行以下命令来全局安装 VitePress：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm install -g vitepress</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="创建项目" tabindex="-1">创建项目 <a class="header-anchor" href="#创建项目" aria-label="Permalink to &quot;创建项目&quot;">​</a></h3><p>使用以下命令创建一个新的 VitePress 项目：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mkdir my-docs</span></span>
<span class="line"><span>cd my-docs</span></span>
<span class="line"><span>npm init vitepress</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>这将创建一个新的 VitePress 项目，并在当前目录中生成一个名为 <code>docs</code> 的文件夹。在 <code>docs</code> 文件夹中，您可以编写您的文档。</p><h3 id="编写文档" tabindex="-1">编写文档 <a class="header-anchor" href="#编写文档" aria-label="Permalink to &quot;编写文档&quot;">​</a></h3><p>在 <code>docs</code> 文件夹中，您可以创建一个名为 <code>README.md</code> 的 Markdown 文件，作为您的主页。您还可以创建其他 Markdown 文件来组织您的文档。</p><p>在您的 Markdown 文件中，您可以使用 Vue.js 的组件和指令，以及 VitePress 提供的一些特殊的 Markdown 扩展，来创建丰富的文档页面。例如，您可以使用以下语法来创建一个可折叠的代码块：</p><details class="details custom-block"><summary>点击查看代码</summary><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Hello, world!&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></details><h3 id="本地预览" tabindex="-1">本地预览 <a class="header-anchor" href="#本地预览" aria-label="Permalink to &quot;本地预览&quot;">​</a></h3><p>在您的项目根目录中，运行以下命令来启动本地服务器：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm run dev</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>然后，在您的浏览器中访问 <code>http://localhost:5173</code>，您将看到您的文档网站。</p><h3 id="构建" tabindex="-1">构建 <a class="header-anchor" href="#构建" aria-label="Permalink to &quot;构建&quot;">​</a></h3><p>当您完成编写文档后，可以使用以下命令构建静态网站：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm run build</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>这将生成一个名为 <code>dist</code> 的文件夹，其中包含您的静态网站的所有文件。</p><h2 id="高级" tabindex="-1">高级 <a class="header-anchor" href="#高级" aria-label="Permalink to &quot;高级&quot;">​</a></h2><h3 id="部署到-gitee" tabindex="-1">部署到 Gitee <a class="header-anchor" href="#部署到-gitee" aria-label="Permalink to &quot;部署到 Gitee&quot;">​</a></h3><p>要将您的 VitePress 项目部署到 Gitee Pages 上，您需要执行以下步骤：</p><ol><li><p>在 Gitee 上创建一个新的仓库，并将您的 VitePress 项目推送到该仓库中。</p></li><li><p>在您的项目根目录中，创建一个名为 <code>.gitee.yml</code> 的文件，其中包含以下内容：</p></li></ol><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>build:</span></span>
<span class="line"><span>  script:</span></span>
<span class="line"><span>    - npm run build</span></span>
<span class="line"><span>  artifacts:</span></span>
<span class="line"><span>    - dist/**</span></span>
<span class="line"><span>  only:</span></span>
<span class="line"><span>    - master</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>这将告诉 Gitee 在 <code>master</code> 分支上构建您的项目，并将生成的 <code>dist</code> 文件夹作为静态资源。</p><ol start="3"><li><p>在 Gitee 仓库的设置页面中，启用 Pages 服务，并选择 <code>gh-pages</code> 分支和 <code>dist</code> 文件夹作为页面源。</p></li><li><p>提交代码并等待构建完成。完成后，您可以访问 <code>https://&lt;username&gt;.gitee.io/&lt;repository&gt;</code> 来查看您的文档网站。</p></li></ol><h3 id="部署到-github" tabindex="-1">部署到 Github <a class="header-anchor" href="#部署到-github" aria-label="Permalink to &quot;部署到 Github&quot;">​</a></h3><p>要将您的 VitePress 项目部署到 Github Pages 上，您需要执行以下步骤：</p><ol><li><p>在 Github 上创建一个新的仓库，并将您的 VitePress 项目推送到该仓库中。</p></li><li><p>在您的项目根目录中，创建一个名为 <code>.github/workflows/deploy.yml</code> 的文件，其中包含以下内容：</p></li></ol><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Deploy</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">on:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  push:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    branches:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> master</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">jobs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  deploy:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    runs-on:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ubuntu-latest</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    steps:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> uses:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> actions/checkout@v2</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dependencies</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        run:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Build</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        run:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Deploy</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> GitHub</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Pages</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        uses:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> peaceiris/actions-gh-pages@v3</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        with:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          personal_token:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> \${{ secrets.ACCESS_TOKEN }</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          publish_dir:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./dist</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>这将创建一个 Github Actions 工作流，用于在 <code>master</code> 分支上构建您的项目，并将生成的 <code>dist</code> 文件夹部署到 Github Pages 上。</p><ol start="3"><li><p>在 Github 仓库的设置页面中，启用 Github Pages 服务，并选择 <code>gh-pages</code> 分支和 <code>dist</code> 文件夹作为页面源。</p></li><li><p>在您的 Github 仓库的设置页面中，创建一个名为 <code>ACCESS_TOKEN</code> 的新的 Secrets，并将您的个人访问令牌作为值。</p></li><li><p>提交代码并等待构建完成。完成后，您可以访问 <code>https://&lt;username&gt;.github.io/&lt;repository&gt;</code> 来查看您的文档网站。</p></li></ol>`,38)]))}const b=a(p,[["render",l]]);export{k as __pageData,b as default};
