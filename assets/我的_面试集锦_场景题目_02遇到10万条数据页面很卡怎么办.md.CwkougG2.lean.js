import{ak as a,h as t,aE as l,f as i}from"./chunks/framework.C-ZmrgQI.js";const p=JSON.parse('{"title":"遇到 10w 条数据页面卡了怎么办？","description":"","frontmatter":{},"headers":[],"relativePath":"我的/面试集锦/场景题目/02遇到10万条数据页面很卡怎么办.md","filePath":"我的/面试集锦/场景题目/02遇到10万条数据页面很卡怎么办.md","lastUpdated":1728719965000}'),o={name:"我的/面试集锦/场景题目/02遇到10万条数据页面很卡怎么办.md"};function r(n,e,s,_,c,d){return i(),t("div",null,e[0]||(e[0]=[l('<h1 id="遇到-10w-条数据页面卡了怎么办" tabindex="-1">遇到 10w 条数据页面卡了怎么办？ <a class="header-anchor" href="#遇到-10w-条数据页面卡了怎么办" aria-label="Permalink to &quot;遇到 10w 条数据页面卡了怎么办？&quot;">​</a></h1><ul><li>首先要确定的事情是哪里比较慢呢，这里可能接口返回数据因为数据量级较大请求比较耗时，当然也可能是渲染数据导致的页面卡顿。 <ul><li>这里是怎么判断的呢，看控制台 nextworker 接口请求花费时间 当然也可以监听返回数据作为耗时依据（测算）方式很多， 这里 performance、now Date、console.time、console.timeEnd 等来计算 计算页面渲染花费的时间。</li><li>可以利用 devtools performance 来查看页面渲染时间 （main 主要任务渲染帧卡顿 或渲染比较耗时 呈现红色（特殊颜色））</li></ul></li><li>一般来说 两者都会存在的 ，渲染慢了，（可以采用 减小数据量）具体形式可以是 分页 加载更多 虚拟滚动 等。</li><li>服务端需要优化接口返回数据，接口分页 + 缓存处理；</li><li>当然也可能存在网络请求 多跳传输 造成 接口耗时的问题</li><li>可能是由于达到了浏览器最大请求数量上限，导致浏览器卡顿；合并请求 ，曾经遇到过项目中某些数据无法直接连源头数据库，直属管理甲部门写了个接口，然后呢乙部门 写了个接口。我们当前的业务需要拿到两者的数据 之后进行融合统计，由后台统一处理，而不是前台来直接访问 代理接口。这样可以减少网络请求。</li></ul>',2)]))}const f=a(o,[["render",r]]);export{p as __pageData,f as default};
