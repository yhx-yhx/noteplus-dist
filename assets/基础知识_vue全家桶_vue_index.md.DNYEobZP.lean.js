import{an as i,l,m as s,S as a,aH as p,k as e}from"./chunks/framework.8wObz1dk.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"基础知识/vue全家桶/vue/index.md","filePath":"基础知识/vue全家桶/vue/index.md","lastUpdated":1713792803000}'),t={name:"基础知识/vue全家桶/vue/index.md"};function h(o,n,d,c,k,r){return e(),l("div",null,n[0]||(n[0]=[s("h3",{id:"learn-vue-3文档",tabindex:"-1"},[a("learn vue 3文档 "),s("a",{class:"header-anchor",href:"#learn-vue-3文档","aria-label":'Permalink to "learn vue 3文档"'},"​")],-1),s("h3",{id:"组件注册",tabindex:"-1"},[a("组件注册 "),s("a",{class:"header-anchor",href:"#组件注册","aria-label":'Permalink to "组件注册"'},"​")],-1),s("ul",null,[s("li",null,[s("code",null,"全局注册"),a(" app.component(’组件名‘，组件的实现 )；")]),s("li",{ComponentA:""},[s("code",null,"局部注册"),a(" components :")]),s("li",null,"组件名命名格式 双驼峰命名")],-1),p(`<h3 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;props&quot;">​</a></h3><ul><li><code>setup语法糖</code>显式的声明</li><li><code>setup(props)</code>来接受 props</li><li><code>defineProps([&#39;foo&#39;])</code>数组</li><li><code>defineProps({foo:{type:String},likes:Number})</code></li><li>props 不传值 <code>隐式转换</code> true</li><li>单项数据流</li></ul><h3 id="组件的事件" tabindex="-1">组件的事件 <a class="header-anchor" href="#组件的事件" aria-label="Permalink to &quot;组件的事件&quot;">​</a></h3><ul><li>组件的触发事件 没有冒泡机制</li><li>父组件 绑定事件 @cs=“（n）=&gt;cs+=n”</li><li>子组件 $emit(&#39;cs&#39;,&#39;2&#39;) <code>参数一事件名 参数2 传参</code></li><li>原生事件 作为 自定义事件 将不会触发原生事件 仅会出发自定义事件</li></ul><h3 id="事件的校验" tabindex="-1">事件的校验 <a class="header-anchor" href="#事件的校验" aria-label="Permalink to &quot;事件的校验&quot;">​</a></h3><h3 id="组件v-model" tabindex="-1">组件v-model <a class="header-anchor" href="#组件v-model" aria-label="Permalink to &quot;组件v-model&quot;">​</a></h3><ul><li>父组件 v-model=“value”</li><li>子组件 $emit(&#39;update:modelValue&#39;) $props.modelValue</li><li>父组件 v-model:titile=&quot;value&quot;</li><li>子组件 $emit(&#39;update:title&#39;) $props.titile</li><li>修饰符 父组件v-model.capitalize = &quot;text&quot;</li><li>子组件 $props.modelModifers.capitalize</li><li>父组件 v-model:title.capitalize = &quot;text&quot;</li><li>子组件 $props.titleModifers.capitlize</li><li><code>怎么自定义修饰符呢</code></li></ul><h3 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-label="Permalink to &quot;插槽&quot;">​</a></h3><ul><li><p>动态指令插槽 <code>#[name]</code></p></li><li><p>作用域插槽</p></li><li><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">MyComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    &lt;!-- 使用显式的默认插槽 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> #</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{ message }</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;{{ message }}&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> #</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">footer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	&lt;!-- 此处 使用 {{message}} 会报错--&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Here&#39;s some contact info&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">MyComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="依赖注入" tabindex="-1">依赖注入 <a class="header-anchor" href="#依赖注入" aria-label="Permalink to &quot;依赖注入&quot;">​</a></h3></li><li><p>provide provide(/<em>注入名</em>/，‘值’) <code>可以放在组件内部 也可放在全局</code></p></li><li><p>inject（‘注入名’，‘默认值’） 来获取 <code>接受</code></p></li><li><p><code>没提供有接收 会警告</code></p></li><li><p>为了确保数据单向 不被修改 可以 使用 <code>readonly包装</code> API</p></li><li><p>建议使用Symbol 来作为注入名以避免潜在的冲突。</p></li></ul><h4 id="穿透-attr" tabindex="-1">穿透$attr <a class="header-anchor" href="#穿透-attr" aria-label="Permalink to &quot;穿透$attr&quot;">​</a></h4><ul><li>继承 <code>例如class style id @等</code></li><li>对 class style 进行合并 <code>子组件单一根节点</code></li><li>事件 @监听 <code>相当于事件冒泡</code></li><li>不包含 props emit</li><li>禁用继承 <code>子组件声明inheritAttrs：false；注意使用script 来声明</code></li></ul><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 使用普通的 &lt;script&gt; 来声明选项</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  inheritAttrs: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><ul><li><p><code>$attrs</code> 对象包含了除组件所声明的 <code>props</code> 和 <code>emits</code> 之外的所有其他 attribute</p></li><li><p><code>tips</code>子组件 内部 解构方法</p></li><li><p>子组件<code>多个节点</code> 必须显式绑定 <code>$attrs</code> ； 否则 <code>抛出警告</code></p></li><li><p><code>setup语法糖 </code>使用 <code>useAttrs()</code> API 来访问 attribtue</p></li><li><p>setup 则在 上下文中解构出来</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">setup(props,ctx){ //被暴露为 ctx.$attrs}</span></span></code></pre></div></li><li><p>attrs不具备响应式 attrs总是反应当前对象的最新值；<code>可以使用 props 或者配合onUpdated()使用</code></p></li></ul><h4 id="插槽-1" tabindex="-1">插槽 <a class="header-anchor" href="#插槽-1" aria-label="Permalink to &quot;插槽&quot;">​</a></h4><ul><li><p><code>slot</code>可以是<code>文本、html、组件</code></p></li><li><p>插槽内容<strong>无法访问</strong>子组件的数据</p></li><li><p>默认插槽</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">//Slot.vue 子组件 </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;submit&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;slot&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Submit &lt;!-- 默认内容 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/slot&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">//父组件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Slot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Click&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Slot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div></li><li><p>具名插槽</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">//Slot.vue 子组件 </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;submit&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;slot name=&quot;text&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Submit &lt;!-- 默认内容 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/slot&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">//父组件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Slot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Click&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Slot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div></li></ul><h4 id="异步组件" tabindex="-1">异步组件 <a class="header-anchor" href="#异步组件" aria-label="Permalink to &quot;异步组件&quot;">​</a></h4><ul><li><p><code>大型项目</code> 将应用分割成若干 小组件 需要时像<code>服务器</code>请求加载相关组件</p></li><li><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">import {defineAsyncComponent} from &quot;vue&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">const AsyncCom = defineAsyncComponent(()=&gt;{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	return new Promise(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		(resovle,reject)=&gt;{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		//在服务器获取组件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			resovle(&#39;获取到的组件&#39;)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div></li><li><p>由于 import 动态加载<code>import()</code>;导入 同样是返回的 promise <code>可以在嵌套使用 仅在页面渲染时加载组件</code></p></li><li><p>与懒加载区别？</p></li><li><p>虽然被套壳 但<code>props slot 均被直接传给内部组件</code> ==&gt; <em>实现了延迟加载</em></p></li><li><p>🎺可以 <code>全局注册</code></p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app.component(&#39;componentname&#39;,defineAsyncComponent(()=&gt;{import( &#39;xx/xx.vue&#39;)}))</span></span></code></pre></div></li><li><p>🎺可以 <code>局部注册</code></p><blockquote><p>用变量接收 直接使用即可</p></blockquote></li><li><p>加载错误 <code>可以配置加载 成功前的组件（loadeing）加载错误时组件 延迟响应时间</code></p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">const AsyncComp = defineAsyncComponent({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	// 加载函数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	loader: () =&gt; import(&#39;./Foo.vue&#39;),</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	// 加载异步组件时使用的组件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	loadingComponent: LoadingComponent,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	// 展示加载组件前的延迟时间，默认为 200ms 提升用户体验 避免页面闪烁</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	delay: 200,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	// 加载失败后展示的组件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	errorComponent: ErrorComponent,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	// 如果提供了一个 timeout 时间限制，并超时了</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	// 也会显示这里配置的报错组件，默认值是：Infinity</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	timeout: 3000</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div></li></ul><h4 id="组合式函数hooks" tabindex="-1">组合式函数<code>hooks</code> <a class="header-anchor" href="#组合式函数hooks" aria-label="Permalink to &quot;组合式函数\`hooks\`&quot;">​</a></h4><ul><li><p>封装<strong>无状态</strong>的逻辑 单例模式（状态管理）</p></li><li><p><strong>命名</strong> 按照惯例 组合式函数约定用驼峰命名法命名，并以“<strong>use</strong>”作为开头。</p></li><li><p>内部管理状态 做出更新 返回给外部</p></li><li><p>外部直接使用 反馈给 <code>视图</code> or <code>页面</code></p></li><li><p>主张函数复用 逻辑复用 逻辑抽离</p></li><li><p>可以多层嵌套</p></li><li><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">// fetch.js</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">import { ref } from &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">export function useFetch(url) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  const data = ref(null)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  const error = ref(null)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  fetch(url)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    .then((res) =&gt; res.json())</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    .then((json) =&gt; (data.value = json))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    .catch((err) =&gt; (error.value = err))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  return { data, error }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></li><li><p><strong>unref</strong> <strong>解包</strong> ref值 ；传入非响应式的值 会直接返回该值；</p></li><li><p><code>isRef</code> 检测是否是一个 动态的ref</p></li><li><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">// fetch.js</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">import { ref, isRef, unref, watchEffect } from &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">export function useFetch(url) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  const data = ref(null)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  const error = ref(null)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  function doFetch() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    // 在请求之前重设状态...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    data.value = null</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    error.value = null</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    // unref() 解包可能为 ref 的值</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    fetch(unref(url))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      .then((res) =&gt; res.json())</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      .then((json) =&gt; (data.value = json))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      .catch((err) =&gt; (error.value = err))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  if (isRef(url)) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    // 若输入的 URL 是一个 ref，那么启动一个响应式的请求</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    watchEffect(doFetch)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  } else {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    // 否则只请求一次</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    // 避免监听器的额外开销</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    doFetch()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  return { data, error }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></li><li><p>返回值 使用 <strong>reactive</strong>接收 内部会<strong>自动解包</strong></p></li></ul><h4 id="自定义指令" tabindex="-1">自定义指令 <a class="header-anchor" href="#自定义指令" aria-label="Permalink to &quot;自定义指令&quot;">​</a></h4><ul><li><p>重用主要涉及 普通元素的底层dom访问的逻辑</p></li><li><p>局部实现 <code>在 directives:{focus:{/*具体实现*/}}</code></p></li><li><p>全局实现 <code>app.direcruve(&#39;focus&#39;,/*具体实现*/)</code></p></li><li><p>指令钩子：<strong>created</strong> 、<strong>beforeMount</strong>、 <strong>mounted</strong> 、<strong>beforeUpdate</strong>、<strong>updated</strong>、<strong>beforeUnmount</strong>、<strong>unmounted</strong></p></li><li><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">const myDirective = {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  // 在绑定元素的 attribute 前</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  // 或事件监听器应用前调用</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  created(el, binding, vnode, prevVnode) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    // 下面会介绍各个参数的细节</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  // 在元素被插入到 DOM 前调用</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  beforeMount(el, binding, vnode, prevVnode) {},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  // 在绑定元素的父组件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  // 及他自己的所有子节点都挂载完成后调用</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  mounted(el, binding, vnode, prevVnode) {},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  // 绑定元素的父组件更新前调用</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  beforeUpdate(el, binding, vnode, prevVnode) {},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  // 在绑定元素的父组件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  // 及他自己的所有子节点都更新后调用</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  updated(el, binding, vnode, prevVnode) {},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  // 绑定元素的父组件卸载前调用</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  beforeUnmount(el, binding, vnode, prevVnode) {},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  // 绑定元素的父组件卸载后调用</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  unmounted(el, binding, vnode, prevVnode) {}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></li><li><p>钩子参数 <strong>el, binding, vnode, prevVnode</strong></p></li><li><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">el：指令绑定到的元素。这可以用于直接操作 DOM。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">binding：一个对象，包含以下属性。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">value：传递给指令的值。例如在 v-my-directive=&quot;1 + 1&quot; 中，值是 2。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">oldValue：之前的值，仅在 beforeUpdate 和 updated 中可用。无论值是否更改，它都可用。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">arg：传递给指令的参数 (如果有的话)。例如在 v-my-directive:foo 中，参数是 &quot;foo&quot;。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">modifiers：一个包含修饰符的对象 (如果有的话)。例如在 v-my-directive.foo.bar 中，修饰符对象是 { foo: true, bar: true }。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">instance：使用该指令的组件实例。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">dir：指令的定义对象。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">vnode：代表绑定元素的底层 VNode。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">prevNode：之前的渲染中代表指令所绑定元素的 VNode。仅在 beforeUpdate 和 updated 钩子中可用。</span></span></code></pre></div></li><li><p><strong>tips</strong>：除了el 其他都是只读的 ；需要共享 钩子之间的数据信息 可以通过 dataset 实现</p></li><li><p><strong>简化形式</strong></p></li><li><p><strong>des</strong>: 常见的情况 只需要 mounted 与 updated 时使用 仅在这两个周期会被触发</p></li><li><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app.directive(&#39;color&#39;,((el,binding)=&gt;{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	/*这里 会在mounted 和 updated 时调用*/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	el.style.color = binding.value</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}))</span></span></code></pre></div></li><li><p><strong>组件上的自定义指令</strong></p></li><li><p><strong>不推荐</strong></p></li><li><p>始终会将指令 应用于 <strong>组件根节点</strong></p></li><li><p>组件多节点 时 warn <code>似乎无解 避免使用</code></p></li></ul><h4 id="插件" tabindex="-1">插件 <a class="header-anchor" href="#插件" aria-label="Permalink to &quot;插件&quot;">​</a></h4><ul><li><p>安装</p><ul><li><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">const myPlugin = {install(app,options)=&gt;{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	//配置应用</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}} </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app.use(myPlugin,{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	/*可选的选项*/	</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div></li></ul></li><li><p>常见场景</p><ul><li><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>通过 app.component() 和 app.directive() 注册一到多个全局组件或自定义指令。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>通过 app.provide() 使一个资源可被注入进整个应用。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>向 app.config.globalProperties 中添加一些全局实例属性或方法</span></span>
<span class="line"><span></span></span>
<span class="line"><span>一个可能上述三种都包含了的功能库 (例如 vue-router)。</span></span></code></pre></div></li></ul></li><li><p><strong>Start</strong></p><ul><li><p>创建一个单文件 并导入它。例如（i18n国际化）：</p></li><li><p>全局事件</p></li><li><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//plugins/i18n.js</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>	install:(app,options)=&gt;{</span></span>
<span class="line"><span>        //options 用户传递配置项	</span></span>
<span class="line"><span>		//全局注入$translate()方法</span></span>
<span class="line"><span>		app.config.globalProperties.$translate = (key)=&gt;{</span></span>
<span class="line"><span>			//获取 options对象的深层属性</span></span>
<span class="line"><span>			//获取 key 作为索引</span></span>
<span class="line"><span>			return key.split(&#39;.&#39;).reduce((o,i)=&gt;{</span></span>
<span class="line"><span>			if(o)return o[i]</span></span>
<span class="line"><span>			},options)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre></div></li><li><p>使用 provide、inject实现</p></li><li><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>export default = {</span></span>
<span class="line"><span>	//使用 provide 提供一个选项对象</span></span>
<span class="line"><span>	install:(app,options)=&gt;{</span></span>
<span class="line"><span>		app.provide(&#39;i18n&#39;,options)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre></div></li></ul></li></ul><h3 id="内置组件" tabindex="-1">内置组件 <a class="header-anchor" href="#内置组件" aria-label="Permalink to &quot;内置组件&quot;">​</a></h3><h4 id="transition" tabindex="-1">Transition <a class="header-anchor" href="#transition" aria-label="Permalink to &quot;Transition&quot;">​</a></h4><ul><li><p>内置组件 基于状态变化的过渡与动画</p></li><li><p>会在元素或组件 进入或离开时 应用动画</p></li><li><p>无需注册</p></li><li><p>触发条件</p><ul><li>v-if 触发切换</li><li>v-show 触发切换</li><li>特殊元素component 动态切换组件</li><li>改变 特殊的key属性？？？特殊？</li></ul></li><li><p>仅支持单个元素 换言之 <strong>必须有根组件</strong></p></li><li><p>基本用法</p><ul><li><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;--! template--&gt;</span></span>
<span class="line"><span>&lt;button @click=&quot;show=!show&quot;&gt;toggle&lt;/button&gt;</span></span>
<span class="line"><span>&lt;transition&gt;</span></span>
<span class="line"><span>    &lt;p v-if=&quot;show&quot;&gt;show&lt;/p&gt;</span></span>
<span class="line"><span>&lt;/transition&gt;</span></span>
<span class="line"><span>/* style*/</span></span>
<span class="line"><span>.v-enter-active,</span></span>
<span class="line"><span>.v-leave-active {</span></span>
<span class="line"><span>  transition: opacity 0.5s ease;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.v-enter-from,</span></span>
<span class="line"><span>.v-leave-to {</span></span>
<span class="line"><span>  opacity: 0;</span></span>
<span class="line"><span>}</span></span></code></pre></div></li></ul></li><li><p>基于css的动画效果</p><ul><li>css Class <strong>v-enter-from 、v-enter-active 、 v-enter-to 、v-leave-from、 v-leave-active、 v-leave-to</strong></li></ul></li><li><p>动画效果命名</p><ul><li><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;--! template--&gt;</span></span>
<span class="line"><span>&lt;button @click=&quot;show=!show&quot;&gt;toggle&lt;/button&gt;</span></span>
<span class="line"><span>&lt;transition name=&quot;name&quot;&gt;</span></span>
<span class="line"><span>    &lt;p v-if=&quot;show&quot;&gt;show&lt;/p&gt;</span></span>
<span class="line"><span>&lt;/transition&gt;</span></span>
<span class="line"><span>/* style*/</span></span>
<span class="line"><span>.name-enter-active,</span></span>
<span class="line"><span>.name-leave-active {</span></span>
<span class="line"><span>  transition: opacity 0.5s ease;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.name-enter-from,</span></span>
<span class="line"><span>.name-leave-to {</span></span>
<span class="line"><span>  opacity: 0;</span></span>
<span class="line"><span>}</span></span></code></pre></div></li><li><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-timing-function" target="_blank" rel="noreferrer"><strong>transition-timing-function</strong></a> css transition</p></li><li><p>animation</p></li><li><p>使用第三方 动画库 可以使用 props 例如 ：‘enter-form-class：’xxxx‘</p></li></ul></li><li><p>props <strong>type</strong> 可选<code>animation</code> <code>tansition</code> ；若只是二者取其一 会自动探测 类型 无需配置？怎么做到的</p></li><li><p><strong>深层级过渡</strong></p><ul><li><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;Transition name=&quot;nested&quot;&gt;</span></span>
<span class="line"><span>  &lt;div v-if=&quot;show&quot; class=&quot;outer&quot;&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;inner&quot;&gt;</span></span>
<span class="line"><span>      Hello</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/Transition&gt;</span></span></code></pre></div></li><li><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/* 应用于嵌套元素的规则 */</span></span>
<span class="line"><span>.nested-enter-active .inner,</span></span>
<span class="line"><span>.nested-leave-active .inner {</span></span>
<span class="line"><span>  transition: all 0.3s ease-in-out;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.nested-enter-from .inner,</span></span>
<span class="line"><span>.nested-leave-to .inner {</span></span>
<span class="line"><span>  transform: translateX(30px);</span></span>
<span class="line"><span>  opacity: 0;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* ... 省略了其他必要的 CSS */</span></span></code></pre></div></li></ul></li></ul><h3 id="keepalive" tabindex="-1">keepalive <a class="header-anchor" href="#keepalive" aria-label="Permalink to &quot;keepalive&quot;">​</a></h3><ul><li><p>内部缓存怎么实现的？</p></li><li><p>include</p><ul><li><code>String</code> include=&quot;a,b&quot;</li><li><code>正则</code> :include=&quot;/a|b/&quot;</li><li><code>数组</code> :include=&quot;[&#39;a&#39;,&#39;b&#39;]&quot;</li></ul></li><li><p>最大的缓存实例数</p></li><li><p><code>max</code> prop</p></li><li><p>缓存实例生命周期</p><ul><li><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { onActivated, onDeactivated } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>onActivated(() =&gt; {</span></span>
<span class="line"><span>  // 调用时机为首次挂载</span></span>
<span class="line"><span>  // 以及每次从缓存中被重新插入时</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>onDeactivated(() =&gt; {</span></span>
<span class="line"><span>  // 在从 DOM 上移除、进入缓存</span></span>
<span class="line"><span>  // 以及组件卸载时调用</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div></li></ul></li></ul><h3 id="mixins" tabindex="-1">mixins <a class="header-anchor" href="#mixins" aria-label="Permalink to &quot;mixins&quot;">​</a></h3><ul><li><p>全局注册</p><ul><li><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>cosnt gloablMixins = ()=&gt;{consloe.log(&#39;mixins&#39;)}</span></span>
<span class="line"><span>app.mixin(gloablMixins)</span></span></code></pre></div></li></ul></li><li><p>局部注册</p><ul><li><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span></code></pre></div></li></ul></li></ul><h3 id="extends" tabindex="-1">extends <a class="header-anchor" href="#extends" aria-label="Permalink to &quot;extends&quot;">​</a></h3><ul><li>优先级高于 mixins</li><li>继承组件的方法属性 专注与继承 <code>提高代码复用</code></li><li>很少用 一般习惯使用 v-if 来实现 组件多样性 或者slot</li></ul>`,32)]))}const u=i(t,[["render",h]]);export{g as __pageData,u as default};
