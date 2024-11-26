import{u as x,T as L,E as A,D as B,B as M,a as _}from"./index.min.BUsuw6CR.js";function P(a,r){var i=Object.keys(a);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(a);r&&(e=e.filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})),i.push.apply(i,e)}return i}function C(a){for(var r=1;r<arguments.length;r++){var i=arguments[r]!=null?arguments[r]:{};r%2?P(Object(i),!0).forEach(function(e){v(a,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(i)):P(Object(i)).forEach(function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(i,e))})}return a}function y(a,r){if(!(a instanceof r))throw new TypeError("Cannot call a class as a function")}function T(a,r){for(var i=0;i<r.length;i++){var e=r[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(a,R(e.key),e)}}function m(a,r,i){return r&&T(a.prototype,r),i&&T(a,i),Object.defineProperty(a,"prototype",{writable:!1}),a}function v(a,r,i){return r=R(r),r in a?Object.defineProperty(a,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):a[r]=i,a}function b(a,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(r&&r.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),Object.defineProperty(a,"prototype",{writable:!1}),r&&I(a,r)}function S(a){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(i){return i.__proto__||Object.getPrototypeOf(i)},S(a)}function I(a,r){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},I(a,r)}function N(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function g(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function j(a,r){if(r&&(typeof r=="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return g(a)}function w(a){var r=N();return function(){var e=S(a),t;if(r){var n=S(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return j(this,t)}}function z(a,r){if(typeof a!="object"||a===null)return a;var i=a[Symbol.toPrimitive];if(i!==void 0){var e=i.call(a,r||"default");if(typeof e!="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(a)}function R(a){var r=z(a,"string");return typeof r=="symbol"?r:String(r)}var F=function(){function a(r,i){y(this,a),this.url=r;var e=new window.XMLHttpRequest;e.target=this,e.responseType="arraybuffer",e.open("get",r),e.onload=function(){(e.status===200||e.status===206)&&i&&i instanceof Function&&i(e.response)},e.onerror=function(t){},this.xhr=e,this.run()}return m(a,[{key:"cancel",value:function(){this.xhr.abort()}},{key:"run",value:function(){this.xhr.readyState===1&&this.xhr.send()}}]),a}(),d={ORDER:"order",SLOOP:"sloop",LOOP:"loop",RANDOM:"random"},D="xgplayer-music";function O(a,r,i){var e=Math.floor(Math.random()*(r-a)+a);return e===i?(e>r/2?r=r/2:a=r/2,r-a>2?O(a,r,i):e):e}var H=function(a){b(i,a);var r=w(i);function i(){var e;y(this,i);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return e=r.call.apply(r,[this].concat(n)),v(g(e),"_onEnded",function(){if(e.mode==="order"&&e.index+1>=e.list.length){e.player.pause(),e.player.currentTime=0;return}switch(e.mode){case d.SLOOP:e.change();break;case d.ORDER:case d.LOOP:default:e.next();break}}),v(g(e),"_onDurationChange",function(){var s=e.config.abCycle;e._initABCycle(s,e.player)}),v(g(e),"_onTimeUpdate",function(){var s=g(e),l=s.config,c=s.player;if(!e.halfPass&&c.currentTime>c.duration/2&&e.confirmOrder(),l.abCycle){var u=l.abCycle,f=u.end>c.duration?c.duration:u.end;c.currentTime>=f?(u.loop||(c.pause(),e.emit("abCycle_ended")),c.currentTime=u.start||0):c.currentTime<u.start&&(c.currentTime=u.start||0)}}),e}return m(i,[{key:"afterCreate",value:function(){var t=this.player,n=this.playerConfig;x.addClass(t.root,D),this.halfPass=!1,this.list=this.config.list||[],this.nextIndex=-1,this.prevIndex=-1,this.history=[],this.disable=!(this.list.length>0),this.list.length!==0&&(!n.url&&this.list.length>0&&(n.url=this.list[0].src),n.poster||(n.poster=this.list[0].poster),n.title||(n.title=this.list[0].title||""),n.vid||(n.vid=this.list[0].vid||""),this._curInfo={src:n.url,poster:n.poster,title:n.title,vid:n.vid},this.index=0,this.on(L,this._onTimeUpdate),this.on(A,this._onEnded),this.on(B,this._onDurationChange),this.config.offline&&this.checkOffline(this._curInfo.src,this._curInfo.vid).then(function(o){o.code===0&&(n.url=o.url,t.state>=4&&(t.src=o.url))}).catch(function(o){}))}},{key:"destroy",value:function(){x.removeClass(this.player.root,D)}},{key:"_nextCompute",value:function(){if(!this.disable)switch(this.mode){case d.SLOOP:case d.ORDER:case d.LOOP:this.index+1<this.list.length?this.nextIndex=this.index+1:this.nextIndex=0;break;default:this.nextIndex=O(0,this.list.length,this.index);break}}},{key:"_prevCompute",value:function(){if(!this.disable)switch(this.mode){case d.SLOOP:case d.ORDER:case d.LOOP:this.index-1>=0?this.prevIndex=this.index-1:this.prevIndex=this.list.length-1;break;default:this.prevIndex=O(0,this.list.length,this.index);break}}},{key:"_emitChange",value:function(){this.emit("change",this._curInfo)}},{key:"_initABCycle",value:function(t,n){var o=n.plugins.progresspreview;if(t&&n){var s=t.end>this.player.duration?this.player.duration:t.end,l=t.start>this.player.duration?0:t.start,c={id:n.playerId,time:t.start,duration:s-l,text:t.text,color:t.color};o.findDot(c.id)?o.updateDot(c):o.createDot(c)}else o.findDot(n.playerId)&&o.deleteDot(n.playerId)}},{key:"random",value:function(){if(this.list.length<0)return null;var t=O(0,this.list.length,this.index);return this.list[t]}},{key:"next",value:function(){this.disable||(this.halfPass||(this.halfPass=!0,this._nextCompute()),this.index=this.nextIndex,this.change())}},{key:"prev",value:function(){this.disable||(this.halfPass||(this.halfPass=!0,this._prevCompute()),this.index=this.prevIndex,this.change())}},{key:"forward",value:function(){var t=this.player,n=this.config.timeScale;t.currentTime=t.currentTime+n<t.duration?t.currentTime+n:t.duration-.1}},{key:"backward",value:function(){var t=this.player,n=this.config.timeScale;t.currentTime=t.currentTime-n>0?t.currentTime-n:0}},{key:"add",value:function(t){this.list.push({src:t.src,title:t.title,vid:t.vid,poster:t.poster})}},{key:"remove",value:function(t){var n=-1;this.list.every(function(o,s){return o.vid===t?(n=s,!1):!0}),n>-1&&this.list.splice(n,1)}},{key:"setAbCycle",value:function(t,n,o){var s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};t&&x.typeof(t)==="Object"?this.config.abCycle=C({},t):this.config.abCycle=C({start:t||0,end:n||this.player.duration,loop:o},s),this._initABCycle(this.config.abCycle,this.player)}},{key:"removeAbCycle",value:function(){this.config.abCycle=null,this._initABCycle(null,this.player)}},{key:"updateList",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];this.removeAbCycle(),this.player.pause(),this.player.currentTime=0,this.list=t,this.nextIndex=0,this.index=0,this.change()}},{key:"setIndex",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;t<0||t>=this.list.length||(this.nextIndex=t,this.index=t,this.change())}},{key:"change",value:function(){var t=this;if(!this.disable){var n=this.player,o=this.list,s=this.index,l=o[s].vid;this.halfPass=!1,this.checkOffline(o[s].src,l).then(function(c){t._curInfo={title:t.list[t.index].title||"",vid:t.list[t.index].vid,poster:t.list[t.index].poster||"",src:c.url},n.playNext({url:c.url,vid:t.list[t.index].vid||0,poster:t.list[t.index].poster||"",autoplay:!0}),n.off("timeupdate",t._emitChange),n.once("timeupdate",t._emitChange),n.play()})}}},{key:"checkOffline",value:function(t,n){var o=this;return new Promise(function(s,l){(!o.config.offline||o.disable)&&s({url:t,code:-1,vid:n});var c=o.player.database;c.openDB(function(){c.getDataByKey(c.myDB.ojstore.name,n,function(u){setTimeout(function(){c.closeDB()},5e3),s(u?{url:URL.createObjectURL(u.blob),code:0,vid:u.vid}:{url:t,code:-2,vid:n})})})})}},{key:"confirmOrder",value:function(){this.halfPass=!0,this._nextCompute(),this._prevCompute(),this.config.preloadNext&&this.preload(this.nextIndex)}},{key:"preload",value:function(t){if(!(t<0||t>=this.list.length)){var n=this.list[t],o=this.player;this.checkOffline(n.src,n.vid).then(function(s){if(s.code===-2){var l=n.vid;new F(n.src,function(c){o.database.openDB(function(){o.database.addData(o.database.myDB.ojstore.name,[{vid:l,blob:new Blob([c],{type:'audio/mp4; codecs="mp4a.40.5"'})}]),setTimeout(function(){o.database.closeDB()},5e3)})})}})}}},{key:"timeScale",get:function(){return this.config.timeScale||15},set:function(t){this.config.timeScale=t}},{key:"mode",get:function(){return this.config.mode||d.RANDOM},set:function(t){this.config.mode=t}}],[{key:"pluginName",get:function(){return"music"}},{key:"defaultConfig",get:function(){return{offline:!1,preloadNext:!0,abCycle:null,timeScale:15,mode:d.ORDER,list:[]}}},{key:"ModeType",get:function(){return Object.keys(d).map(function(t){return d[t]})}}]),i}(M),q=function(a){b(i,a);var r=w(i);function i(){return y(this,i),r.apply(this,arguments)}return m(i,[{key:"afterCreate",value:function(){var t=this;if(this.on("change",function(o){if(o&&o.poster){if(t.find("img"))t.find("img").src=o.poster;else{var s=new Image;s.src=o.poster,t.appendChild(s)}t.find("img").src=o.poster,t.show()}else t.hide()}),this.playerConfig.poster){var n=new Image;n.src=this.playerConfig.poster,this.appendChild(n)}}},{key:"render",value:function(){return'<xg-icon class="xgplayer-cover"></xg-icon>'}}],[{key:"pluginName",get:function(){return"musiccover"}},{key:"defaultConfig",get:function(){return{index:6,position:_.POSITIONS.CONTROLS_LEFT}}}]),i}(_),U=function(a){b(i,a);var r=w(i);function i(){var e;y(this,i);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return e=r.call.apply(r,[this].concat(n)),v(g(e),"onClick",function(s){var l=g(e),c=l.player;s.preventDefault(),s.stopPropagation(),c.plugins.music.backward()}),e}return m(i,[{key:"afterCreate",value:function(){var t=this;this.initIcons();var n=["click","touchstart"];n.forEach(function(o){t.bind(o,t.onClick)})}},{key:"registerIcons",value:function(){return{musicBackward:{icon:`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-2 0 21 15">
      <path d="m 14,2.99996 0,10 -7,-5 7,-5 z m -7,5 0,5 -7,-5 7,-5 0,5 z m -7,0 0,0 z"></path>
  </svg>`,class:"xg-icon-mbackward"}}}},{key:"initIcons",value:function(){var t=this.icons;this.appendChild(".xgplayer-icon",t.musicBackward)}},{key:"destroy",value:function(){var t=this,n=["click","touchstart"];n.forEach(function(o){t.unbind(o,t.onClick)})}},{key:"render",value:function(){return`<xg-icon class="xgplayer-backward">
            <div class="xgplayer-icon">
            </div>
          </xg-icon>`}}],[{key:"pluginName",get:function(){return"musicbackward"}},{key:"defaultConfig",get:function(){return{index:1,position:_.POSITIONS.CONTROLS_LEFT}}}]),i}(_),W=function(a){b(i,a);var r=w(i);function i(){var e;y(this,i);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return e=r.call.apply(r,[this].concat(n)),v(g(e),"onClick",function(s){var l=g(e),c=l.player;s.preventDefault(),s.stopPropagation(),c.plugins.music.prev()}),e}return m(i,[{key:"afterCreate",value:function(){var t=this;this.initIcons();var n=["click","touchstart"];n.forEach(function(o){t.bind(o,t.onClick)})}},{key:"registerIcons",value:function(){return{musicPrev:{icon:` <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" viewBox="300 200 1024 1024">
        <path d="M600 1140v-768h128v352l320-320v704l-320-320v352zz"></path>
    </svg>`,class:"xg-icon-mprev"}}}},{key:"initIcons",value:function(){var t=this.icons;this.appendChild(".xgplayer-icon",t.musicPrev)}},{key:"destroy",value:function(){var t=this,n=["click","touchstart"];n.forEach(function(o){t.unbind(o,t.onClick)})}},{key:"render",value:function(){return`<xg-icon class="xgplayer-next">
            <div class="xgplayer-icon">
            </div>
          </xg-icon>`}}],[{key:"pluginName",get:function(){return"musicprev"}},{key:"defaultConfig",get:function(){return{index:2,position:_.POSITIONS.CONTROLS_LEFT}}}]),i}(_),G=function(a){b(i,a);var r=w(i);function i(){var e;y(this,i);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return e=r.call.apply(r,[this].concat(n)),v(g(e),"onClick",function(s){var l=g(e),c=l.player;s.preventDefault(),s.stopPropagation(),c.plugins.music.forward()}),e}return m(i,[{key:"afterCreate",value:function(){var t=this;this.initIcons();var n=["click","touchstart"];n.forEach(function(o){t.bind(o,t.onClick)})}},{key:"registerIcons",value:function(){return{musicForward:{icon:`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-2 0 21 15">
        <path d="m 2,2.99996 0,10 7,-5 -7,-5 z m 7,5 0,5 7,-5 -7,-5 0,5 z m 7,0 0,0 z"></path>
      </svg>`,class:"xg-icon-mforward"}}}},{key:"initIcons",value:function(){var t=this.icons;this.appendChild(".xgplayer-icon",t.musicForward)}},{key:"destroy",value:function(){var t=this,n=["click","touchstart"];n.forEach(function(o){t.unbind(o,t.onClick)})}},{key:"render",value:function(){return`<xg-icon class="xgplayer-forward">
            <div class="xgplayer-icon">
            </div>
          </xg-icon>`}}],[{key:"pluginName",get:function(){return"musicforward"}},{key:"defaultConfig",get:function(){return{index:5,position:_.POSITIONS.CONTROLS_LEFT}}}]),i}(_),V=function(a){b(i,a);var r=w(i);function i(){var e;y(this,i);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return e=r.call.apply(r,[this].concat(n)),v(g(e),"onClick",function(s){var l=g(e),c=l.player;s.preventDefault(),s.stopPropagation(),c.plugins.music.next()}),e}return m(i,[{key:"afterCreate",value:function(){var t=this;this.initIcons();var n=["click","touchstart"];n.forEach(function(o){t.bind(o,t.onClick)})}},{key:"registerIcons",value:function(){return{musicNext:{icon:` <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" viewBox="100 200 1024 1024">
        <path d="M800 380v768h-128v-352l-320 320v-704l320 320v-352z">
      </svg>`,class:"xg-icon-mnext"}}}},{key:"initIcons",value:function(){var t=this.icons;this.appendChild(".xgplayer-icon",t.musicNext)}},{key:"destroy",value:function(){var t=this,n=["click","touchstart"];n.forEach(function(o){t.unbind(o,t.onClick)})}},{key:"render",value:function(){return`<xg-icon class="xgplayer-next">
            <div class="xgplayer-icon">
            </div>
          </xg-icon>`}}],[{key:"pluginName",get:function(){return"musicnext"}},{key:"defaultConfig",get:function(){return{index:4,position:_.POSITIONS.CONTROLS_LEFT}}}]),i}(_),$=function(a){b(i,a);var r=w(i);function i(){return y(this,i),r.apply(this,arguments)}return m(i,[{key:"beforeCreate",value:function(t){var n=t.player.plugins.progress;n&&(t.root=n.root)}},{key:"afterCreate",value:function(){var t=this;this.on("change",function(n){n&&n.title?t.root.innerHTML="".concat(n.title):t.root.innerHTML=""})}},{key:"render",value:function(){var t=this.playerConfig;return`<xg-title class="xgplayer-name">
          `.concat(t.title||"",`
       </xg-title>`)}}],[{key:"pluginName",get:function(){return"musicmeta"}},{key:"defaultConfig",get:function(){return{index:0}}}]),i}(_);function K(a){if(x.typeOf(a.controls)!=="Object")a.controls={mode:"flex",initShow:!0};else{var r=a.controls;a.controls=C({mode:"flex",initShow:!0},r)}var i=a.play||{};a.play=C({index:3},i),a.marginControls=!0,a.mediaType="audio"}var fe=m(function a(r,i){y(this,a),console.log("config",r,i),console.log("playerConfig",x.typeOf(i.controls)!=="Object"),K(i),this.plugins=[H,U,W,G,V,q,$],this.ignores=["start","cssFullScreen","fullscreen","pip","enter","replay","pc","loading","poster"]}),X=function(a){var r=a.data,i=a.options,e=a.ctx,t=a.h,n=a.w,o=r.length>i.count?i.count:r.length,s=parseInt(t/255*2,10);e.clearRect(0,0,n,t),e.fillStyle=i.bgColor,e.fillRect(0,0,n,t);for(var l=n/o,c=l-l/4,u,f=0,h=i.linear,p=0;p<o;p++)u=r[p],e.fillStyle=h,e.fillRect(f,t-u,c,u*s+t/2),f+=l},Y=function(a){var r=a.data,i=a.options,e=a.ctx,t=a.h,n=a.w,o=i.count||128;r.length<o&&(o=r.length);var s=t/255,l=n/o,c=i.linear;e.clearRect(0,0,n,t),e.fillStyle=i.bgColor,e.fillRect(0,0,n,t);for(var u=1;u<=o;u++){var f=r[u];f*=s;var h=l*u;e.moveTo(h,t),e.lineTo(h,t-f),e.strokeStyle=c,e.stroke(),e.beginPath()}},J=function(a){var r=a.data,i=a.options,e=a.ctx,t=a.h,n=a.w,o=r.length>i.count?i.count:r.length;e.clearRect(0,0,n,t),e.fillStyle=i.bgColor,e.fillRect(0,0,n,t),e.beginPath();var s=i.linear;e.strokeStyle=s;for(var l=n/o,c=0,u=0;u<o;u++){var f=r[u]/128,h=f*t/2;u===0?e.moveTo(c,h):e.lineTo(c,h),c+=l}e.lineTo(n,t/2),e.stroke()},Q=function(a){var r=a.data,i=a.options,e=a.ctx,t=a.h,n=a.w,o=t/255,s=n/128,l=i.count||128,c=5;e.clearRect(0,0,n,t),e.fillStyle=i.bgColor,e.fillRect(0,0,n,t);for(var u=i.linear,f=1;f<=l;f++){var h=r[f];h+=c,h*=o;var p=s*f,k=t/2+h/2;e.moveTo(p,k),e.lineTo(p,k-h),e.strokeStyle=u,e.stroke(),e.beginPath()}},Z=function(a){var r=a.data,i=a.options,e=a.ctx,t=a.h,n=a.w,o=r.length>i.count?i.count:r.length,s=t/255;e.clearRect(0,0,n,t),e.fillStyle=i.bgColor,e.fillRect(0,0,n,t);for(var l=n/o,c=l-l/4,u,f=0,h=i.linear,p=0;p<o;p++)u=r[p]*s,e.fillStyle=h,e.fillRect(f,t/2+u/2,c,-u),f+=l};function ee(a,r,i){for(var e=a.createLinearGradient(0,0,r,0),t=i.length,n=100/t,o=0;o<i.length;o++)e.addColorStop(n*o/100,i[o]);return e}function te(a,r){for(var i=[],e=Math.floor(a.length/r),t=1;t<=r;t++){var n=a.slice(t*e,t*e+e),o=n[Math.floor(n.length/2)];i.push(o)}return i}function ie(a,r){var i=r/255;r<=3&&r>=0&&(i=r);var e=a.map(function(t){return t*i});return e}function ne(a,r){for(var i=Math.floor(a.length/r),e=[],t=[],n=0,o=0;o<=i*r;o++)n===i&&(e.push(t),t=[],n=0),t.push(a[o]),n++;return e}function E(a,r,i,e){var t=i.w,n=i.linear,o=i.reverse,s=i.offset;a.save(),a.beginPath();var l=t*1/e;a.strokeStyle=n;for(var c=0,u=0,f=0;f<e;f++)u=o?0-r[f]:r[f],u=s-u,f===0?a.moveTo(c,u):a.lineTo(c,u),c+=l;a.lineTo(t,u),a.stroke()}var re=function(a){var r=a.options,i=a.ctx,e=a.h,t=a.w,n=a.data,o=r.colors;n=te(n,2048),n=ie(n,e/2),n=ne(n,4).slice(0,3),i.clearRect(0,0,t,e),i.fillStyle=r.bgColor,i.fillRect(0,0,t,e);for(var s=0;s<n.length;s++)E(i,n[s],{linear:o[s],w:t,h:e,offset:e/2,reverse:!1},n[s].length),E(i,n[s],{linear:o[s],w:t,h:e,offset:e/2,reverse:!0},n[s].length)},ae={bars:X,vertLines:Y,lightning:J,doubleLine:Q,doubleBars:Z,waves:re},oe={bars:2,vertLines:1,lightning:2,doubleLine:1,doubleBars:2,waves:2},se={BARS:"bars",VERT_LINES:"vertLines",LIGHTNING:"lightning",DOUBLE_LINE:"doubleLine",DOUBLE_BARS:"doubleBars",WAVES:"waves"};function ce(a,r){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=arguments.length>3?arguments[3]:void 0;if(r){i=C({},i),i.stroke||(i.stroke=1),i.colors||(i.colors=["#ff8177","#cf556c","#f99185","#b12a5b"]);var t=r.getContext("2d"),n=r.height,o=r.width;t.strokeStyle=i.colors[0],t.lineWidth=i.stroke;var s={data:a,options:i,ctx:t,h:n,w:o};typeof i.mode=="string"&&(i.mode=[i.mode]),i.mode.forEach(function(l){e%oe[l]===0&&(t.clearRect(0,0,o,n),t.beginPath(),ae[l](s))})}}var he=function(){function a(r,i){var e=this,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};y(this,a),v(this,"start",function(){e.reqId||e._renderFrame()}),v(this,"stop",function(){cancelAnimationFrame(e.reqId),e.reqId=null}),v(this,"_onDestroy",function(){e._audioCtx.close()}),v(this,"_onoVolumechange",function(){console.log("onoVolumechange"),e.gainNode.gain.setValueAtTime(e.player.volume,e.player.currentTime)}),v(this,"_renderFrame",function(){e.reqId&&cancelAnimationFrame(e.reqId),e.reqId=requestAnimationFrame(e._renderFrame),e.frameCount++,e.mode==="lightning"?e.analyser.getByteTimeDomainData(e.dataArray):e.analyser.getByteFrequencyData(e.dataArray),ce.call(e,e.dataArray,e.canvas,e.options,e.frameCount)}),this.canvas=i;var n=this.canvas.getBoundingClientRect(),o=n.width,s=n.height;if(this.canvas.width=o*2,this.canvas.height=s*2,this.player=r,this.options=a.defaultConfig,Object.keys(t).map(function(c){e.options[c]=t[c]}),!!a.AudioCtx){r.audioCtx?this._audioCtx=r.audioCtx:this._audioCtx=new a.AudioCtx,this.analyser=this._audioCtx.createAnalyser();var l=this._audioCtx.createGain();l.gain.setValueAtTime(r.volume,r.currentTime),this.gainNode=l,this.source=this._audioCtx.createMediaElementSource(r.video),this.ctx=i.getContext("2d"),this.source.connect(this.analyser),this.analyser.connect(l),this.fftSize=this.options.fftSize,this.frameCount=0,this.options.isGradient&&(this.options.linear=ee(this.ctx,i.width,this.options.colors)),l.connect(this._audioCtx.destination),this._initPlayerEvents()}}return m(a,[{key:"_initPlayerEvents",value:function(){var i=this;["play","playing","seeked"].forEach(function(e){i.player.on(e,i.start)}),this.player.on("volumechange",this._onoVolumechange),this.player.on("destroy",this._onDestroy)}},{key:"destroy",value:function(){var i=this;this.stop(),["play","playing","seeked"].forEach(function(e){i.player.off(e,i.start)}),this.player.off("volumechange",this._onoVolumechange),this.player.off("destroy",this._onDestroy),this._audioCtx.close()}},{key:"mode",get:function(){return this.options.mode},set:function(i){this.options.mode=i}},{key:"fftSize",get:function(){return this.analyser.frequencyBinCount*2},set:function(i){this.analyser.fftSize=i;var e=this.analyser.frequencyBinCount;this.dataArray=new Uint8Array(e)}}],[{key:"defaultConfig",get:function(){return{fftSize:16384,count:1024,mode:"bars",colors:["#ff8177","#cf556c","#f99185","#b12a5b"],stroke:2,bgColor:"#000",isGradient:!0,linear:null}}},{key:"MODES",get:function(){return se}},{key:"AudioCtx",get:function(){return window.AudioContext||window.webkitAudioContext}}]),a}(),le=m(function a(r){y(this,a),this.regRule=/(\d{2}(?=:)):(\d{2}(?=\.))\.(\d{2,3})/g,this.regRule.test(r)?this.time=RegExp.$1*60+RegExp.$2*1+("0."+RegExp.$3)*1:this.time=-1}),de=function(){function a(r,i){var e=this;y(this,a),this.rawTxts=r,this.txts=r.map(function(t){return t.replace(/^[\r\n]|[\r\n]$/g,"").match(/(\[.*\])[^[]+/g)}),this.isDynamics=r.map(function(t,n){return[].concat(t.match(/\[\d{2}:\d{2}\.\d{2,3}\]/g)).length===e.txts[n].length&&e.txts[n].length===e.txts[0].length&&e.txts[n].length>1}),this.isDynamic=this.isDynamics.some(function(t){return t}),this.__ainimateInterval__=0,this.__offset__=0,this.__offsetScale__=.5,this.dom=i,this.lists=[],this.isDynamics.map(function(t,n){t&&e.lists.push(e.txts[n].map(function(o,s){var l=/(\[[\d:\S]+\])([^[]+)/g.test(o),c=RegExp.$1,u=RegExp.$2;return{time:l?new le(c).time:-1,lyric:u,idx:s}}))}),this.list=this.lists.reduce(function(t,n){return t.map(function(o,s){return{time:o.time,lyric:o.lyric===`
`?"".concat(o.lyric).concat(n[s].lyric):"".concat(o.lyric,"<br/>").concat(n[s].lyric),idx:s}})}),this.line=0}return m(a,[{key:"interval",get:function(){return this.__ainimateInterval__},set:function(i){this.__ainimateInterval__=i}},{key:"offset",get:function(){return this.__offset__},set:function(i){this.__offset__=i}},{key:"offsetScale",get:function(){return this.__offsetScale__},set:function(i){this.__offsetScale__=i}},{key:"adjust",value:function(){for(var i=this.list,e=0,t,n,o=i.length;e<o;e++){for(t=e+1;t<o&&!(i[t].time>i[e].time);t++);if(t<o){var s=(i[t].time-i[e].time)/(t-e);for(n=e+1;n<t;n++)i[n].time=i[n-1].time+s}}}},{key:"find",value:function(i){var e=this.list,t=this.__ainimateInterval__,n=this.__offset__;return i=i+n>0?i+n:0,e.filter(function(o,s){var l=o.time,c=s+1;return i>=l&&(e[c]&&i*1+t*1<=e[c].time||c>=e.length)})}},{key:"bind",value:function(i){var e=this,t=this;return this.__player__=i,t.isDynamic?(t.__handle__=(function(){var n=e.find(i.currentTime)[0];n&&n.idx!==e.line&&(e.line=n.idx,i.emit("lyricUpdate",n))}).bind(t,i),i.on("timeupdate",t.__handle__),t.__startHandle__=(function(){i.emit("lyricUpdate",t.list[0])}).bind(t,i),i.once("playing",t.__startHandle__),!0):!1}},{key:"unbind",value:function(i){delete this.__player__,this.__handle__&&(i.off("lyricUpdate",this.__handle__),delete this.__handle__)}},{key:"show",value:function(){var i=this,e=this.dom,t=[],n=this,o=["click","touchstart"];if(e&&e.nodeType===1){var s=x.createDom("div","<div></div>",{},"xgplayer-lrcWrap");e.appendChild(s),this.list.forEach(function(u){t.push('<xg-lyric-item class="xgplayer-lyric-item" data-idx="'.concat(u.idx,'">').concat(u.lyric.replace(/[\r\n]/g,""),"</xg-lyric-item>"))}),s.innerHTML=t.join("");var l=x.createDom("xg-lrcForward","<div></div>",{},"xgplayer-lrcForward");e.appendChild(l),o.forEach(function(u){l.addEventListener(u,function(f){f.preventDefault(),f.stopPropagation(),n.offset-=n.offsetScale,console.log("lyric go forward ".concat(n.offsetScale,"s"))},!1)});var c=x.createDom("xg-lrcBack","<div></div>",{},"xgplayer-lrcBack");e.appendChild(c),o.forEach(function(u){c.addEventListener(u,function(f){f.preventDefault(),f.stopPropagation(),n.offset+=n.offsetScale,console.log("lyric go back ".concat(n.offsetScale,"s"))},!1)}),this.__updateHandle__=function(u){var f=i.dom.querySelector(".xgplayer-lrcWrap"),h=f.querySelector(".xgplayer-lyric-item-active"),p=f.offsetHeight,k;h&&(h.className="xgplayer-lyric-item"),h=f.querySelector('.xgplayer-lyric-item[data-idx="'.concat(u.idx,'"]')),h&&(h.className="xgplayer-lyric-item xgplayer-lyric-item-active",k=h.getBoundingClientRect().top-f.getBoundingClientRect().top+f.scrollTop-p/2,k&&(f.scrollTop=k))},this.__player__.on("lyricUpdate",this.__updateHandle__)}else this.__player__.emit("error","lyric container can not be empty")}},{key:"hide",value:function(){this.__updateHandle__.off("lyricUpdate",this.__updateHandle__)}}]),a}();export{he as A,de as L,fe as M};
