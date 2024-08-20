import{_ as s,c as a,o as n,a5 as i}from"./chunks/framework.DcGi6Jq3.js";const o=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"插件扩展/开发部署/nginx.md","filePath":"插件扩展/开发部署/nginx.md","lastUpdated":1724169331000}'),p={name:"插件扩展/开发部署/nginx.md"},l=i(`<h2 id="nginx-配置代理" tabindex="-1">nginx 配置代理 <a class="header-anchor" href="#nginx-配置代理" aria-label="Permalink to &quot;nginx 配置代理&quot;">​</a></h2><div class="language-details vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">details</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>server {</span></span>
<span class="line"><span>    listen 80; // listen</span></span>
<span class="line"><span>    server_name 127.0.0.1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location /api {</span></span>
<span class="line"><span>        proxy_pass http://127.0.0.1:8080; # 8080端口 代理 到80</span></span>
<span class="line"><span>        proxy_set_header Host $host; # 设置Host</span></span>
<span class="line"><span>        proxy_set_header X-Real-IP $remote_addr; # 设置 客户端的真实 IP 地址</span></span>
<span class="line"><span>        # 设置 代理经过的状态的IP地址</span></span>
<span class="line"><span>        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="nginx-配置" tabindex="-1">nginx 配置 <a class="header-anchor" href="#nginx-配置" aria-label="Permalink to &quot;nginx 配置&quot;">​</a></h2><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">user </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nginx;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">worker_process</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#启动4个worker进程</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">error_log </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/var/log/nginx/error.log</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pid /var/run/nginx.pid</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 事件处理段</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">events {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    worker_connections </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1024</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;每个worker进程最大连接数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">http</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    include </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/etc/nginx/mime.types; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 配置文件类型</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    listen </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">80</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    server_name </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">www.example.com;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    root </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/var/www/html;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 根目录</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    index </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">index.html index.htm;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> / </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        try_files </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$uri $uri/ /index.html;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 尝试查找文件 否则访问index.html</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 静态文件缓存</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ~*\\.(jpg|png|gif|ico|jpeg|css|js) </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        expires </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">1y;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 缓存静态文件时间</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,4),e=[l];function t(h,k,r,d,E,c){return n(),a("div",null,e)}const y=s(p,[["render",t]]);export{o as __pageData,y as default};
