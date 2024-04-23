import{_ as a,c as s,o as n,a5 as e}from"./chunks/framework.CsSpqKUs.js";const v=JSON.parse('{"title":"VueRouter","description":"","frontmatter":{},"headers":[],"relativePath":"基础知识/vue全家桶/vue-router/index.md","filePath":"基础知识/vue全家桶/vue-router/index.md","lastUpdated":1713792803000}'),p={name:"基础知识/vue全家桶/vue-router/index.md"},t=e(`<h1 id="vuerouter" tabindex="-1">VueRouter <a class="header-anchor" href="#vuerouter" aria-label="Permalink to &quot;VueRouter&quot;">​</a></h1><h2 id="router-link" tabindex="-1">router-link <a class="header-anchor" href="#router-link" aria-label="Permalink to &quot;router-link&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;router-link to=&quot;/&quot;&gt;go&lt;router-link&gt;</span></span>
<span class="line"><span>//相当于a标签</span></span>
<span class="line"><span>//to :prams 指定链接，</span></span></code></pre></div><h2 id="router-view" tabindex="-1">router-view <a class="header-anchor" href="#router-view" aria-label="Permalink to &quot;router-view&quot;">​</a></h2><p>将标签放在 任何你想要呈现布局的位置上</p><h2 id="路由的实例创建" tabindex="-1">路由的实例创建 <a class="header-anchor" href="#路由的实例创建" aria-label="Permalink to &quot;路由的实例创建&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const routes=[{path:&#39;/&#39;,component:import(()=&gt;&quot;@/view/home&quot;},{path:&#39;/login&#39;,component:import(()=&gt;&quot;@/viewlogin&quot;}</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span>const router=vueRouter.createRouter({</span></span>
<span class="line"><span>//路由的格式，采用hash方式；</span></span>
<span class="line"><span>history:VueRouter.createWebHashHistory(),</span></span>
<span class="line"><span>routes,   //路由规则</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>//创建并挂载到实例</span></span>
<span class="line"><span>const app =Vuew.createApp({});</span></span>
<span class="line"><span>//注册组件 在全局使用</span></span>
<span class="line"><span>app.use(router);</span></span>
<span class="line"><span>//完成页面的挂载</span></span>
<span class="line"><span>app.mount(&#39;#app&#39;);</span></span></code></pre></div><h2 id="动态路由的匹配" tabindex="-1">动态路由的匹配 <a class="header-anchor" href="#动态路由的匹配" aria-label="Permalink to &quot;动态路由的匹配&quot;">​</a></h2><h3 id="des" tabindex="-1"><strong>des</strong> <a class="header-anchor" href="#des" aria-label="Permalink to &quot;**des**&quot;">​</a></h3><p>由于用户ID 不同，显示页面存在差异，根据id字段来渲染页面；</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const routes=[{path:&#39;/user/:id&#39;,component:()=&gt;import (&quot;@/view/user&quot;))}]</span></span>
<span class="line"><span>//：后面的参数，可以通过this.$route.parms 暴露出来</span></span></code></pre></div><h2 id="嵌套路由" tabindex="-1">嵌套路由 <a class="header-anchor" href="#嵌套路由" aria-label="Permalink to &quot;嵌套路由&quot;">​</a></h2><p><strong>ps</strong>:子路由前不加 /</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/user/router/profile                     /user/router/posts</span></span>
<span class="line"><span>+------------------+                  +-----------------+</span></span>
<span class="line"><span>| User             |                  | User            |</span></span>
<span class="line"><span>| +--------------+ |                  | +-------------+ |</span></span>
<span class="line"><span>| | Profile      | |  +------------&gt;  | | Posts       | |</span></span>
<span class="line"><span>| |              | |                  | |             | |</span></span>
<span class="line"><span>| +--------------+ |                  | +-------------+ |</span></span>
<span class="line"><span>+------------------+                  +-----------------+</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const routes=[{path:&#39;user/router&#39;,name:&#39;profile&#39;,component:Profile,children:[{path:&#39;profile&#39;,component:UserProfile},{path:&#39;posts&#39;,component:UserPosts}]}]</span></span></code></pre></div><h2 id="编程式导航" tabindex="-1">编程式导航 <a class="header-anchor" href="#编程式导航" aria-label="Permalink to &quot;编程式导航&quot;">​</a></h2><p>在Vue实例中，可以通过$router访问路由的实例，</p><h3 id="导航到新的页面" tabindex="-1">导航到新的页面： <a class="header-anchor" href="#导航到新的页面" aria-label="Permalink to &quot;导航到新的页面：&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$router.push(&#39;/user/posts&#39;);</span></span>
<span class="line"><span>  //相当于&lt;router-link :to=&quot;...&quot;&gt;导航到&lt;/router-link&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 字符串路径</span></span>
<span class="line"><span>router.push(&#39;/users/eduardo&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 带有路径的对象</span></span>
<span class="line"><span>router.push({ path: &#39;/users/eduardo&#39; })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 命名的路由，并加上参数，让路由建立 url</span></span>
<span class="line"><span>router.push({ name: &#39;user&#39;, params: { username: &#39;eduardo&#39; } })</span></span>
<span class="line"><span>//或 </span></span>
<span class="line"><span>router.push(&#39;/user/\${username}&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 带查询参数，结果是 /register?plan=private</span></span>
<span class="line"><span>router.push({ path: &#39;/register&#39;, query: { plan: &#39;private&#39; } })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 带 hash，结果是 /about#team</span></span>
<span class="line"><span>router.push({ path: &#39;/about&#39;, hash: &#39;#team&#39; })</span></span></code></pre></div><h3 id="替换当前位置" tabindex="-1">替换当前位置 <a class="header-anchor" href="#替换当前位置" aria-label="Permalink to &quot;替换当前位置&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>router.replace(...)</span></span>
<span class="line"><span>//或者</span></span>
<span class="line"><span>router.push({path:&#39;/home&#39;,replace:true})</span></span></code></pre></div><p><strong>ps</strong>:不会添加history的记录；</p><h3 id="历史跳转" tabindex="-1">历史跳转 <a class="header-anchor" href="#历史跳转" aria-label="Permalink to &quot;历史跳转&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>router.go(1)  //router.forward()相同</span></span>
<span class="line"><span>router.go(-1)  //router.back() 相同</span></span>
<span class="line"><span>router.go(3)//前进三条数据</span></span></code></pre></div><h2 id="命名路由" tabindex="-1">命名路由 <a class="header-anchor" href="#命名路由" aria-label="Permalink to &quot;命名路由&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>router.push({name:&#39;user&#39;,params:{username:&#39;yhx&#39;}})</span></span></code></pre></div>`,27),l=[t];function o(i,r,c,u,h,d){return n(),s("div",null,l)}const b=a(p,[["render",o]]);export{v as __pageData,b as default};
