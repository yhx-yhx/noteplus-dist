import{ak as i,k as a,aE as n,j as l}from"./chunks/framework.BkvF_ogn.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"插件扩展/开发部署/github/私有仓库打包到公有仓库.md","filePath":"插件扩展/开发部署/github/私有仓库打包到公有仓库.md","lastUpdated":1713864848000}'),p={name:"插件扩展/开发部署/github/私有仓库打包到公有仓库.md"};function h(t,s,k,e,F,r){return l(),a("div",null,s[0]||(s[0]=[n(`<h2 id="私有仓库打包到公有仓库" tabindex="-1">私有仓库打包到公有仓库 <a class="header-anchor" href="#私有仓库打包到公有仓库" aria-label="Permalink to &quot;私有仓库打包到公有仓库&quot;">​</a></h2><p>☕ 写在前面</p><blockquote><p>关于这个问题，起初是在github看到很多官方文档的仓库 大多是不公开的，仅将打包文件作为公开的部署资源，放在github 中； 因此便出现了今天的话题;</p></blockquote><h2 id="私有部署" tabindex="-1">私有部署 <a class="header-anchor" href="#私有部署" aria-label="Permalink to &quot;私有部署&quot;">​</a></h2><blockquote><p>首先，在github中创建一个私有仓库，并将打包文件上传到该仓库中； 然后，在github中创建一个公开仓库，并将打包文件上传到该仓库中； 最后，在github中创建一个项目，并将私有仓库和公开仓库作为项目的依赖仓库； 这样，在项目部署时，便可以拉取私有仓库和公开仓库中的打包文件；</p></blockquote><h2 id="整体工作" tabindex="-1">整体工作 <a class="header-anchor" href="#整体工作" aria-label="Permalink to &quot;整体工作&quot;">​</a></h2><blockquote><p>首先，我们创建好一个私有的仓库，同时创建一个共有仓库来放置我们的打包结果， 接着，我们将项目代码上传到私有仓库； 然后，actions 将会进行 intall、build等操作，将打包的结果，推送到一个公开的仓库； 最后，我们将当公开仓库内容发生变动时执行action 这样，我们就可以在互联网上看到我们的页面了</p></blockquote><details class="details custom-block"><summary>私有仓库workflow</summary><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Deploy</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Public</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Repo</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">on:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  push:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    branches:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">jobs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  build-and-deploy:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    runs-on:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ubuntu-latest</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    steps:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Checkout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> private</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> repo</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        uses:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> actions/checkout@v2</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        with:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          fetch-depth:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dependencies</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        run:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> copy</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        run:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> copy</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Build</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> project</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        run:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Deploy</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> public</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> repo</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        run:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">          # Clone the public repo  </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/yhx-yhx/yhx825-pdf-search-demo-dist.git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yhx825-pdf-search-demo-dist</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">          cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yhx825-pdf-search-demo-dist</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">          # Copy built files to public repo  </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          cp</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dist</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">          # Add, commit, and push changes to public repo  </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> user.name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;yhx&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> user.email</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;2045399856@qq.com&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Deploy from private repo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        env:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          GITHUB_TOKEN:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> \${{ secrets.PERSONAL_ACCESS_TOKEN }</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 这里值得注意我们需要配置好github的token 名称可以是任意的</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 首先，我们需要点击用户找到·setings ·</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 接着，我们来到最有一个option ·Developer settings·</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 然后，我们点击左侧的·Personal access tokens·</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 接着，我们点击右侧的·Generate new token·</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 接着，我们输入token的名称，并勾选上repo的权限</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 最后，我们点击·Generate token·</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 这样，我们就可以在github中找到我们刚刚创建的token了</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 值得注意的是，我们创建的token是有有效期的，我们需要在有效期内使用它</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 因此，我们可以在每次使用时，重新生成一个token </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 当然我们可以直接选择长期有效，这个token仅会出现一次，我们需要保存好</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 接下来，我们配置各个仓库的 GIthubToken</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 首先，点击最右侧settings ·</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 接着，我们来到最下面找到·Secrets ·</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 接着，我们点击右侧的·New repository secret·</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 接着，我们输入token的名称，并输入token的值</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 最后，我们点击·Add secret·</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 这样，我们一切准备就绪！！！</span></span></code></pre></div></details><details class="details custom-block"><summary>共有仓库workflow</summary><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Simple workflow for deploying static content to GitHub Pages</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Deploy</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> static</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> content</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Pages</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">on:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Runs on pushes targeting the default branch</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  push:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    branches:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;master&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Allows you to run this workflow manually from the Actions tab</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  workflow_dispatch:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">permissions:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  contents:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> read</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  pages:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> write</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  id-token:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> write</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Allow only one concurrent deployment, skipping runs queued between the run in-progress and latest queued.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># However, do NOT cancel in-progress runs as we want to allow these production deployments to complete.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">concurrency:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  group:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;pages&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  cancel-in-progress:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">jobs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Single deploy job since we&#39;re just deploying</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  deploy:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    environment:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> github-pages</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      url:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> \${{ steps.deployment.outputs.page_url }</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    runs-on:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ubuntu-latest</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    steps:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Checkout</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        uses:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> actions/checkout@v4</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Setup</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Pages</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        uses:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> actions/configure-pages@v5</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Upload</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artifact</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        uses:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> actions/upload-pages-artifact@v3</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        with:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">          # Upload entire repository</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          path:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;.&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Deploy</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> GitHub</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Pages</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        id:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> deployment</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        uses:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> actions/deploy-pages@v4</span></span></code></pre></div></details><h3 id="结语" tabindex="-1">结语 <a class="header-anchor" href="#结语" aria-label="Permalink to &quot;结语&quot;">​</a></h3><blockquote><p>至此，我们便可以实现私有仓库打包到共有仓库了。 🎊 🎊 🎊 🎊🎊🎊</p></blockquote>`,11)]))}const y=i(p,[["render",h]]);export{g as __pageData,y as default};
