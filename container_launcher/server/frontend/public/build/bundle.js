var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function s(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}function i(t){let e;return l(t,(t=>e=t))(),e}function u(t,e,n){t.$$.on_destroy.push(l(e,n))}function a(t,e,n,o){if(t){const r=f(t,e,n,o);return t[0](r)}}function f(t,n,o,r){return t[1]&&r?e(o.ctx.slice(),t[1](r(n))):o.ctx}function d(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}function p(t,e,n,o,r,s){if(r){const c=f(e,n,o,s);t.p(c,r)}}function h(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}function m(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function g(t,e){const n={};e=new Set(e);for(const o in t)e.has(o)||"$"===o[0]||(n[o]=t[o]);return n}function $(t,e){t.appendChild(e)}function b(t,e,n){t.insertBefore(e,n||null)}function x(t){t.parentNode.removeChild(t)}function v(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function y(t){return document.createElement(t)}function w(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function k(t){return document.createTextNode(t)}function L(){return k(" ")}function C(){return k("")}function E(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function _(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function A(t,e,n,o){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,o?"important":"")}let R;function S(t){R=t}function P(){if(!R)throw new Error("Function called outside component initialization");return R}function V(t){P().$$.on_destroy.push(t)}function N(t,e){return P().$$.context.set(t,e),e}function O(t){return P().$$.context.get(t)}const M=[],I=[],F=[],j=[],U=Promise.resolve();let T=!1;function Y(){T||(T=!0,U.then(B))}function q(t){F.push(t)}const z=new Set;let H=0;function B(){const t=R;do{for(;H<M.length;){const t=M[H];H++,S(t),Z(t.$$)}for(S(null),M.length=0,H=0;I.length;)I.pop()();for(let t=0;t<F.length;t+=1){const e=F[t];z.has(e)||(z.add(e),e())}F.length=0}while(M.length);for(;j.length;)j.pop()();T=!1,z.clear(),S(t)}function Z(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(q)}}const J=new Set;let W;function D(){W={r:0,c:[],p:W}}function G(){W.r||r(W.c),W=W.p}function K(t,e){t&&t.i&&(J.delete(t),t.i(e))}function Q(t,e,n,o){if(t&&t.o){if(J.has(t))return;J.add(t),W.c.push((()=>{J.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function X(t){return"object"==typeof t&&null!==t?t:{}}function tt(t){t&&t.c()}function et(t,e,o,c){const{fragment:l,on_mount:i,on_destroy:u,after_update:a}=t.$$;l&&l.m(e,o),c||q((()=>{const e=i.map(n).filter(s);u?u.push(...e):r(e),t.$$.on_mount=[]})),a.forEach(q)}function nt(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ot(e,n,s,c,l,i,u,a=[-1]){const f=R;S(e);const d=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:l,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(f?f.$$.context:[])),callbacks:o(),dirty:a,skip_bound:!1,root:n.target||f.$$.root};u&&u(d.root);let p=!1;if(d.ctx=s?s(e,n.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return d.ctx&&l(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),p&&function(t,e){-1===t.$$.dirty[0]&&(M.push(t),Y(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n})):[],d.update(),p=!0,r(d.before_update),d.fragment=!!c&&c(d.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);d.fragment&&d.fragment.l(t),t.forEach(x)}else d.fragment&&d.fragment.c();n.intro&&K(e.$$.fragment),et(e,n.target,n.anchor,n.customElement),B()}S(f)}class rt{$destroy(){nt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const st=[];function ct(e,n=t){let o;const r=new Set;function s(t){if(c(e,t)&&(e=t,o)){const t=!st.length;for(const t of r)t[1](),st.push(t,e);if(t){for(let t=0;t<st.length;t+=2)st[t][0](st[t+1]);st.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(c,l=t){const i=[c,l];return r.add(i),1===r.size&&(o=n(s)||t),c(e),()=>{r.delete(i),0===r.size&&(o(),o=null)}}}}function lt(e,n,o){const c=!Array.isArray(e),i=c?[e]:e,u=n.length<2;return a=e=>{let o=!1;const a=[];let f=0,d=t;const p=()=>{if(f)return;d();const o=n(c?a[0]:a,e);u?e(o):d=s(o)?o:t},h=i.map(((t,e)=>l(t,(t=>{a[e]=t,f&=~(1<<e),o&&p()}),(()=>{f|=1<<e}))));return o=!0,p(),function(){r(h),d()}},{subscribe:ct(o,a).subscribe};var a}const it=ct({}),ut=ct(0);let at=null;function ft(){null===at&&(ut.set(1),at="https:"===window.location.protocol?new WebSocket("wss://"+window.location.hostname+":"+window.location.port+"/api"):new WebSocket("ws://"+window.location.hostname+":"+window.location.port+"/api"),at.addEventListener("open",(()=>{ut.set(2),it.set({type:"connected"})})),at.addEventListener("close",(()=>{6!==i(ut)&&ut.set(5),at=null,it.set({type:"disconnected"})})),at.addEventListener("message",(t=>{t.data&&it.set(JSON.parse(t.data))})))}lt(ut,(t=>1===t)),lt(ut,(t=>2===t));const dt=lt(ut,(t=>5===t));function pt(t){at&&1===at.readyState&&at.send(JSON.stringify(t))}lt(ut,(t=>6===t));const ht=function(){const t=ct(null);return{initialise:function(e){const n={title:e.title,activities:e.activities.map((t=>({id:t.id,title:t.title,svg:t.svg,state:0}))),message:e.message||""};t.set(n)},start:function(e,n){const o=i(t);if(o){let r=!1;for(let t of o.activities)r||t.id===e||0!==t.state&&1!==t.state||(t.state=3),t.id==e&&(r=!0,t.state=1);o.message=n,t.set(o)}},progress:function(){},complete:function(e,n){const o=i(t);if(o){for(let t of o.activities)t.id==e&&(t.state=n?3:2);t.set(o)}},close:function(){t.set(null)},subscribe:t.subscribe}}(),mt=ct({}),gt=ct([]),$t=it.subscribe((t=>{"connected"===t.type?(ht.initialise({title:"Initialising...",activities:[{id:"config",title:"Fetch configuration",svg:"M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"},{id:"user",title:"Fetch user data",svg:"M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"},{id:"container",title:"Fetch available VCEs",svg:"M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"}],message:"Initialising..."}),ht.start("config","Fetching configuration..."),pt({type:"request-config"})):"config"===t.type?(ht.complete("config",!0),mt.set(t.config),document.title=t.config.title):"user"===t.type?(ht.start("container","Fetching available virtual computing environments..."),pt({type:"request-containers"})):"containers"===t.type&&(gt.set(t.containers),ht.complete("container",!0),ht.close())}));const bt=ct({}),xt=ct(!1),vt=ct(!1),yt=it.subscribe((t=>{"config"===t.type?(xt.set(!1),vt.set(!1),ht.start("user","Fetching your details..."),pt({type:"request-user"})):"user"===t.type?(bt.set(t.user),ht.complete("user",!0)):"unauthorised"===t.type?(ht.close(),xt.set(!0)):"logged-out"===t.type&&(ht.close(),vt.set(!0))}));function wt(){ut.set(6),at&&at.close(),yt(),$t()}const kt=t=>void 0===t,Lt=t=>"number"==typeof t;function Ct(){let t=0;return()=>t++}const Et="undefined"==typeof window;function _t(t,e,n){return t.addEventListener(e,n),()=>t.removeEventListener(e,n)}const At=t=>`@@svnav-ctx__${t}`,Rt=At("LOCATION"),St=At("ROUTER"),Pt=At("ROUTE"),Vt=At("ROUTE_PARAMS"),Nt=At("FOCUS_ELEM"),Ot=/^:(.+)/,Mt=(t,e)=>t.substr(0,e.length)===e,It=t=>"*"===t[0],Ft=t=>t.replace(/(^\/+|\/+$)/g,"");function jt(t,e=!1){const n=Ft(t).split("/");return e?n.filter(Boolean):n}const Ut=(t,e)=>t+(e?`?${e}`:""),Tt=t=>`/${Ft(t)}`;function Yt(...t){const e=t.map((t=>jt(t,!0).join("/"))).join("/");return Tt(e)}const qt={1:"Link",2:"Route",3:"Router",4:"useFocus",5:"useLocation",6:"useMatch",7:"useNavigate",8:"useParams",9:"useResolvable",10:"useResolve",11:"navigate"},zt=t=>qt[t];function Ht(t,e,n,o){const r=n&&function(t,e){let n;return 2===t?n=e.path?`path="${e.path}"`:"default":1===t?n=`to="${e.to}"`:3===t&&(n=`basepath="${e.basepath||""}"`),`<${zt(t)} ${n||""} />`}(o||t,n),s=r?`\n\nOccurred in: ${r}`:"",c=zt(t);return`<${c}> ${"function"==typeof e?e(c):e}${s}`}const Bt=t=>(...e)=>t(Ht(...e)),Zt=Bt((t=>{throw new Error(t)})),Jt=Bt(console.warn);function Wt(t,e){return{route:t,score:t.default?0:jt(t.fullPath).reduce(((t,e)=>{let n=t;return n+=4,(t=>""===t)(e)?n+=1:(t=>Ot.test(t))(e)?n+=2:It(e)?n-=5:n+=3,n}),0),index:e}}function Dt(t,e){let n,o;const[r]=e.split("?"),s=jt(r),c=""===s[0],l=function(t){return t.map(Wt).sort(((t,e)=>t.score<e.score?1:t.score>e.score?-1:t.index-e.index))}(t);for(let t=0,r=l.length;t<r;t++){const{route:r}=l[t];let i=!1;const u={},a=t=>({...r,params:u,uri:t});if(r.default){o=a(e);continue}const f=jt(r.fullPath),d=Math.max(s.length,f.length);let p=0;for(;p<d;p++){const t=f[p],e=s[p];if(!kt(t)&&It(t)){const e="*"===t?"*":t.slice(1);u[e]=s.slice(p).map(decodeURIComponent).join("/");break}if(kt(e)){i=!0;break}const n=Ot.exec(t);if(n&&!c){const t=decodeURIComponent(e);u[n[1]]=t}else if(t!==e){i=!0;break}}if(!i){n=a(Yt(...s.slice(0,p)));break}}return n||o||null}function Gt(t,e){return Dt([t],e)}function Kt(t,e){const{pathname:n,hash:o="",search:r="",state:s}=t,c=jt(e,!0),l=jt(n,!0);for(;c.length;)c[0]!==l[0]&&Zt(3,`Invalid state: All locations must begin with the basepath "${e}", found "${n}"`),c.shift(),l.shift();return{pathname:Yt(...l),hash:o,search:r,state:s}}const Qt=t=>1===t.length?"":t;function Xt(t){const e=t.indexOf("?"),n=t.indexOf("#"),o=-1!==e,r=-1!==n,s=r?Qt(t.substr(n)):"",c=r?t.substr(0,n):t,l=o?Qt(c.substr(e)):"";return{pathname:o?c.substr(0,e):c,search:l,hash:s}}function te(t,e,n){return Yt(n,function(t,e){if(Mt(t,"/"))return t;const[n,o]=t.split("?"),[r]=e.split("?"),s=jt(n),c=jt(r);if(""===s[0])return Ut(r,o);if(!Mt(s[0],".")){const t=c.concat(s).join("/");return Ut(("/"===r?"":"/")+t,o)}const l=c.concat(s),i=[];return l.forEach((t=>{".."===t?i.pop():"."!==t&&i.push(t)})),Ut(`/${i.join("/")}`,o)}(t,e))}function ee(t,e){const n=Tt(t.replace(/\*.*$/,""));const o=jt(n,!0),r=Gt({fullPath:n},Yt(...jt(e,!0).slice(0,o.length)));return r&&r.uri}const ne="POP";function oe(t){return{...t.location,pathname:encodeURI(decodeURI(t.location.pathname)),state:t.history.state,_key:t.history.state&&t.history.state._key||"initial"}}function re(t,e){return{...Xt(e),state:t}}const se=!(Et||!window.document||!window.document.createElement),ce=!Et&&"null"===window.location.origin,le=function(t){let e=[],n=oe(t),o=ne;const r=(t=e)=>t.forEach((t=>t({location:n,action:o})));return{get location(){return n},listen(s){e.push(s);r([s]);const c=_t(t,"popstate",(()=>{n=oe(t),o=ne,r([s])}));return()=>{c(),e=e.filter((t=>t!==s))}},navigate(e,s){const{state:c={},replace:l=!1}=s||{};if(o=l?"REPLACE":"PUSH",Lt(e))s&&Jt(11,"Navigation options (state or replace) are not supported, when passing a number as the first argument to navigate. They are ignored."),o=ne,t.history.go(e);else{const n={...c,_key:Math.random().toString(36).substring(2)};try{t.history[l?"replaceState":"pushState"](n,"",e)}catch(n){t.location[l?"replace":"assign"](e)}}n=oe(t),r()}}}(se&&!ce?window:function(t="/"){let e=0,n=[re(null,t)];return{get entries(){return n},get location(){return n[e]},addEventListener(){},removeEventListener(){},history:{get state(){return n[e].state},pushState(t,o,r){e++,n=n.slice(0,e),n.push(re(t,r))},replaceState(t,o,r){n[e]=re(t,r)},go(t){const o=e+t;o<0||o>n.length-1||(e=o)}}}}());let ie=null,ue=!0;function ae(t){(!ie||t.level>ie.level||t.level===ie.level&&function(t,e){const n=document.querySelectorAll("[data-svnav-router]");for(let o=0;o<n.length;o++){const r=n[o],s=Number(r.dataset.svnavRouter);if(s===t)return!0;if(s===e)return!1}return!1}(t.routerId,ie.routerId))&&(ie=t)}function fe(t){if(!t)return!1;const e="tabindex";try{if(!t.hasAttribute(e)){let n;t.setAttribute(e,"-1");const o=()=>{t.removeAttribute(e),n()};n=_t(t,"blur",o)}return t.focus(),document.activeElement===t}catch(t){return!1}}function de(t,e){return Number(t.dataset.svnavRouteEnd)===e}function pe(t,e=document){return e.querySelector(t)}function he(t){Promise.resolve(i(t.focusElement)).then((e=>{const n=e||function(t){let e=pe(`[data-svnav-route-start="${t}"]`).nextElementSibling;for(;!de(e,t);){if(/^H[1-6]$/i.test(e.tagName))return e;const t=pe("h1,h2,h3,h4,h5,h6",e);if(t)return t;e=e.nextElementSibling}return null}(t.id);n||Jt(3,'Could not find an element to focus. You should always render a header for accessibility reasons, or set a custom focus element via the "useFocus" hook. If you don\'t want this Route or Router to manage focus, pass "primary={false}" to it.',t,2);fe(n)||fe(document.documentElement)}))}const me=(t,e,n)=>(o,r)=>(Y(),U).then((()=>{if(ie&&!ue){if(o&&he(ie.route),t.announcements&&r){const{path:o,fullPath:r,meta:s,params:c,uri:l}=ie.route,u=t.createAnnouncement({path:o,fullPath:r,meta:s,params:c,uri:l},i(n));Promise.resolve(u).then((t=>{e.set(t)}))}ie=null}else ue=!1}));function ge(t){let e,n,o,r,s;const c=t[20].default,l=a(c,t,t[19],null);let i=t[2]&&t[4]&&t[1].announcements&&function(t){let e,n;return{c(){e=y("div"),n=k(t[0]),E(e,"role","status"),E(e,"aria-atomic","true"),E(e,"aria-live","polite"),E(e,"style","position:fixed;top:-1px;left:0;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;")},m(t,o){b(t,e,o),$(e,n)},p(t,e){1&e[0]&&_(n,t[0])},d(t){t&&x(e)}}}(t);return{c(){e=y("div"),n=L(),l&&l.c(),o=L(),i&&i.c(),r=C(),A(e,"display","none"),E(e,"aria-hidden","true"),E(e,"data-svnav-router",t[3])},m(t,c){b(t,e,c),b(t,n,c),l&&l.m(t,c),b(t,o,c),i&&i.m(t,c),b(t,r,c),s=!0},p(t,e){l&&l.p&&(!s||524288&e[0])&&p(l,c,t,t[19],s?d(c,t[19],e,null):h(t[19]),null),t[2]&&t[4]&&t[1].announcements&&i.p(t,e)},i(t){s||(K(l,t),s=!0)},o(t){Q(l,t),s=!1},d(t){t&&x(e),t&&x(n),l&&l.d(t),t&&x(o),i&&i.d(t),t&&x(r)}}}const $e=Ct(),be="/";function xe(t,e,n){let o,r,s,c,l,{$$slots:i={},$$scope:a}=e,{basepath:f=be}=e,{url:d=null}=e,{history:p=le}=e,{primary:h=!0}=e,{a11y:m={}}=e;const g={createAnnouncement:t=>`Navigated to ${t.uri}`,announcements:!0,...m},$=f,b=Tt(f),x=O(Rt),v=O(St),y=!x,w=$e(),k=h&&!(v&&!v.manageFocus),L=ct("");u(t,L,(t=>n(0,l=t)));const C=ct([]);u(t,C,(t=>n(18,c=t)));const E=ct(null);u(t,E,(t=>n(16,r=t)));let _=!1;const A=y?0:v.level+1,R=y?ct(Kt(Et?Xt(d):p.location,b)):x;u(t,R,(t=>n(15,o=t)));const S=ct(o);u(t,S,(t=>n(17,s=t)));const V=me(g,L,R),M=t=>e=>e.filter((e=>e.id!==t));var I;return y||f===be||Jt(3,'Only top-level Routers can have a "basepath" prop. It is ignored.',{basepath:f}),y&&(I=()=>p.listen((t=>{const e=Kt(t.location,b);S.set(o),R.set(e)})),P().$$.on_mount.push(I),N(Rt,R)),N(St,{activeRoute:E,registerRoute:function(t){if(Et){if(_)return;const e=Gt(t,o.pathname);if(e)return _=!0,e}else C.update((e=>{const n=M(t.id)(e);return n.push(t),n}))},unregisterRoute:function(t){C.update(M(t))},manageFocus:k,level:A,id:w,history:y?p:v.history,basepath:y?b:v.basepath}),t.$$set=t=>{"basepath"in t&&n(10,f=t.basepath),"url"in t&&n(11,d=t.url),"history"in t&&n(12,p=t.history),"primary"in t&&n(13,h=t.primary),"a11y"in t&&n(14,m=t.a11y),"$$scope"in t&&n(19,a=t.$$scope)},t.$$.update=()=>{if(1024&t.$$.dirty[0]&&f!==$&&Jt(3,'You cannot change the "basepath" prop. It is ignored.'),294912&t.$$.dirty[0]){const t=Dt(c,o.pathname);E.set(t)}if(163840&t.$$.dirty[0]&&y){const t=!!o.hash,e=!t&&k,n=!t||o.pathname!==s.pathname;V(e,n)}65536&t.$$.dirty[0]&&k&&r&&r.primary&&ae({level:A,routerId:w,route:r})},[l,g,y,w,k,L,C,E,R,S,f,d,p,h,m,o,r,s,c,a,i]}var ve=class extends rt{constructor(t){super(),ot(this,t,xe,ge,c,{basepath:10,url:11,history:12,primary:13,a11y:14},null,[-1,-1])}};function ye(t,e,n=St,o=3){O(n)||Zt(t,(t=>`You cannot use ${t} outside of a ${zt(o)}.`),e)}function we(){return ye(5),(t=>{const{subscribe:e}=O(t);return{subscribe:e}})(Rt)}function ke(){const t=O(Pt);return t?lt(t,(t=>t.base)):ct("/")}function Le(){ye(7);const t=function(){ye(10);const t=ke(),{basepath:e}=O(St);return n=>te(n,i(t),e)}(),{navigate:e}=function(){const{history:t}=O(St);return t}();return(n,o)=>{const r=Lt(n)?n:t(n);return e(r,o)}}const Ce=t=>({params:16&t,location:8&t}),Ee=t=>({params:Et?i(t[9]):t[4],location:t[3],navigate:t[10]});function _e(t){let e,n;return e=new ve({props:{primary:t[1],$$slots:{default:[Se]},$$scope:{ctx:t}}}),{c(){tt(e.$$.fragment)},m(t,o){et(e,t,o),n=!0},p(t,n){const o={};2&n&&(o.primary=t[1]),264217&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(K(e.$$.fragment,t),n=!0)},o(t){Q(e.$$.fragment,t),n=!1},d(t){nt(e,t)}}}function Ae(t){let e;const n=t[17].default,o=a(n,t,t[18],Ee);return{c(){o&&o.c()},m(t,n){o&&o.m(t,n),e=!0},p(t,r){o&&o.p&&(!e||262168&r)&&p(o,n,t,t[18],e?d(n,t[18],r,Ce):h(t[18]),Ee)},i(t){e||(K(o,t),e=!0)},o(t){Q(o,t),e=!1},d(t){o&&o.d(t)}}}function Re(t){let n,o,r;const s=[{location:t[3]},{navigate:t[10]},Et?i(t[9]):t[4],t[11]];var c=t[0];function l(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return c&&(n=new c(l())),{c(){n&&tt(n.$$.fragment),o=C()},m(t,e){n&&et(n,t,e),b(t,o,e),r=!0},p(t,e){const r=3608&e?function(t,e){const n={},o={},r={$$scope:1};let s=t.length;for(;s--;){const c=t[s],l=e[s];if(l){for(const t in c)t in l||(o[t]=1);for(const t in l)r[t]||(n[t]=l[t],r[t]=1);t[s]=l}else for(const t in c)r[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}(s,[8&e&&{location:t[3]},1024&e&&{navigate:t[10]},528&e&&X(Et?i(t[9]):t[4]),2048&e&&X(t[11])]):{};if(c!==(c=t[0])){if(n){D();const t=n;Q(t.$$.fragment,1,0,(()=>{nt(t,1)})),G()}c?(n=new c(l()),tt(n.$$.fragment),K(n.$$.fragment,1),et(n,o.parentNode,o)):n=null}else c&&n.$set(r)},i(t){r||(n&&K(n.$$.fragment,t),r=!0)},o(t){n&&Q(n.$$.fragment,t),r=!1},d(t){t&&x(o),n&&nt(n,t)}}}function Se(t){let e,n,o,r;const s=[Re,Ae],c=[];function l(t,e){return null!==t[0]?0:1}return e=l(t),n=c[e]=s[e](t),{c(){n.c(),o=C()},m(t,n){c[e].m(t,n),b(t,o,n),r=!0},p(t,r){let i=e;e=l(t),e===i?c[e].p(t,r):(D(),Q(c[i],1,1,(()=>{c[i]=null})),G(),n=c[e],n?n.p(t,r):(n=c[e]=s[e](t),n.c()),K(n,1),n.m(o.parentNode,o))},i(t){r||(K(n),r=!0)},o(t){Q(n),r=!1},d(t){c[e].d(t),t&&x(o)}}}function Pe(t){let e,n,o,r,s,c=t[2]&&_e(t);return{c(){e=y("div"),n=L(),c&&c.c(),o=L(),r=y("div"),A(e,"display","none"),E(e,"aria-hidden","true"),E(e,"data-svnav-route-start",t[5]),A(r,"display","none"),E(r,"aria-hidden","true"),E(r,"data-svnav-route-end",t[5])},m(t,l){b(t,e,l),b(t,n,l),c&&c.m(t,l),b(t,o,l),b(t,r,l),s=!0},p(t,[e]){t[2]?c?(c.p(t,e),4&e&&K(c,1)):(c=_e(t),c.c(),K(c,1),c.m(o.parentNode,o)):c&&(D(),Q(c,1,1,(()=>{c=null})),G())},i(t){s||(K(c),s=!0)},o(t){Q(c),s=!1},d(t){t&&x(e),t&&x(n),c&&c.d(t),t&&x(o),t&&x(r)}}}const Ve=Ct();function Ne(t,n,o){let r;const s=["path","component","meta","primary"];let c,l,i,a,f=g(n,s),{$$slots:d={},$$scope:p}=n,{path:h=""}=n,{component:$=null}=n,{meta:b={}}=n,{primary:x=!0}=n;ye(2,n);const v=Ve(),{registerRoute:y,unregisterRoute:w,activeRoute:k}=O(St);u(t,k,(t=>o(15,c=t)));const L=ke();u(t,L,(t=>o(16,i=t)));const C=we();u(t,C,(t=>o(3,l=t)));const E=ct(null);let _;const A=ct(),R=ct({});u(t,R,(t=>o(4,a=t))),N(Pt,A),N(Vt,R),N(Nt,E);const S=Le();return Et||V((()=>w(v))),t.$$set=t=>{o(23,n=e(e({},n),m(t))),o(11,f=g(n,s)),"path"in t&&o(12,h=t.path),"component"in t&&o(0,$=t.component),"meta"in t&&o(13,b=t.meta),"primary"in t&&o(1,x=t.primary),"$$scope"in t&&o(18,p=t.$$scope)},t.$$.update=()=>{if(77834&t.$$.dirty){const t=""===h,e=Yt(i,h),n={id:v,path:h,meta:b,default:t,fullPath:t?"":e,base:t?i:ee(e,l.pathname),primary:x,focusElement:E};A.set(n),o(14,_=y(n))}if(49152&t.$$.dirty&&o(2,r=!!(_||c&&c.id===v)),49156&t.$$.dirty&&r){const{params:t}=_||c;R.set(t)}},n=m(n),[$,x,r,l,a,v,k,L,C,R,S,f,h,b,_,c,i,d,p]}var Oe=class extends rt{constructor(t){super(),ot(this,t,Ne,Pe,c,{path:12,component:0,meta:13,primary:1})}};function Me(t,e,n){const o=t.slice();return o[1]=e[n],o}function Ie(t){let e,n,o,r,s,c,l,i,u,a,f,d,p,h,m,g=t[1].title+"",v=t[1].title+"";return{c(){e=y("li"),n=y("button"),o=k("Access"),r=y("span"),s=k("the "),c=k(g),l=k(" VCE"),i=L(),u=y("li"),a=y("button"),f=k("Stop"),d=y("span"),p=k("the "),h=k(v),m=k(" VCE"),E(r,"class","sr-only"),E(n,"class","block w-full py-1 text-blue dark:text-blue-100 hover:bg-blue hover:text-white dark:hover:bg-blue-700 focus:bg-blue focus:text-white dark:focus:bg-blue-700 transition-colors"),E(e,"class","flex-1"),E(e,"role","presentation"),E(d,"class","sr-only"),E(a,"class","block w-full py-1 text-red dark:text-red-300 hover:bg-red hover:text-white dark:hover:bg-red-700 focus:bg-red focus:text-white dark:focus:bg-red-700 dark:focus:text-white transition-colors"),E(u,"class","flex-1"),E(u,"role","presentation")},m(t,g){b(t,e,g),$(e,n),$(n,o),$(n,r),$(r,s),$(r,c),$(r,l),b(t,i,g),b(t,u,g),$(u,a),$(a,f),$(a,d),$(d,p),$(d,h),$(d,m)},p(t,e){1&e&&g!==(g=t[1].title+"")&&_(c,g),1&e&&v!==(v=t[1].title+"")&&_(h,v)},d(t){t&&x(e),t&&x(i),t&&x(u)}}}function Fe(t){let e,n,o,r,s,c,l,i=t[1].title+"";return{c(){e=y("li"),n=y("button"),o=k("Start"),r=y("span"),s=k("the "),c=k(i),l=k(" VCE"),E(r,"class","sr-only"),E(n,"class","block w-full py-1 text-blue dark:text-blue-100 hover:bg-blue hover:text-white dark:hover:bg-blue-700 focus:bg-blue focus:text-white dark:focus:bg-blue-700 transition-colors"),E(e,"class","flex-1"),E(e,"role","presentation")},m(t,i){b(t,e,i),$(e,n),$(n,o),$(n,r),$(r,s),$(r,c),$(r,l)},p(t,e){1&e&&i!==(i=t[1].title+"")&&_(c,i)},d(t){t&&x(e)}}}function je(t){let e,n,o,r,s,c,l,i,u,a,f=t[1].title+"",d=t[1].description+"";function p(t,e){return"paused"===t[1].state?Fe:Ie}let h=p(t),m=h(t);return{c(){e=y("li"),n=y("h2"),o=k(f),r=L(),s=y("p"),c=k(d),l=L(),i=y("nav"),u=y("ul"),m.c(),a=L(),E(n,"class","flex-none py-1 px-2 border-b boder-b-gray font-bold"),E(s,"class","flex-1 py-1 px-2 text-sm"),E(u,"class","flex-none flex flex-row"),E(e,"class","flex flex-col w-full h-full border border-gray hover:border-blue dark:hover:border-blue-100 dark:bg-neutral-900 transition-colors hover:shadow-md dark:hover:shadow-blue-800")},m(t,f){b(t,e,f),$(e,n),$(n,o),$(e,r),$(e,s),$(s,c),$(e,l),$(e,i),$(i,u),m.m(u,null),$(e,a)},p(t,e){1&e&&f!==(f=t[1].title+"")&&_(o,f),1&e&&d!==(d=t[1].description+"")&&_(c,d),h===(h=p(t))&&m?m.p(t,e):(m.d(1),m=h(t),m&&(m.c(),m.m(u,null)))},d(t){t&&x(e),m.d()}}}function Ue(e){let n,o,r,s,c=e[0],l=[];for(let t=0;t<c.length;t+=1)l[t]=je(Me(e,c,t));return{c(){n=y("div"),o=y("h1"),o.textContent="Access your virtual computing environments",r=L(),s=y("ul");for(let t=0;t<l.length;t+=1)l[t].c();E(o,"class","sr-only"),E(s,"class","grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"),E(n,"class","flex-1 max-w-5xl mx-auto px-4 pt-4 overflow-auto")},m(t,e){b(t,n,e),$(n,o),$(n,r),$(n,s);for(let t=0;t<l.length;t+=1)l[t].m(s,null)},p(t,[e]){if(1&e){let n;for(c=t[0],n=0;n<c.length;n+=1){const o=Me(t,c,n);l[n]?l[n].p(o,e):(l[n]=je(o),l[n].c(),l[n].m(s,null))}for(;n<l.length;n+=1)l[n].d(1);l.length=c.length}},i:t,o:t,d(t){t&&x(n),v(l,t)}}}function Te(t,e,n){let o;return u(t,gt,(t=>n(0,o=t))),[o]}class Ye extends rt{constructor(t){super(),ot(this,t,Te,Ue,c,{})}}function qe(t,e,n){const o=t.slice();return o[1]=e[n],o}function ze(t){let e,n,o,r,s,c,l,i,u,a=t[0].title+"",f=t[0].message+"",d=t[0].activities,p=[];for(let e=0;e<d.length;e+=1)p[e]=He(qe(t,d,e));return{c(){e=y("div"),n=y("div"),o=y("h2"),r=k(a),s=L(),c=y("ol");for(let t=0;t<p.length;t+=1)p[t].c();l=L(),i=y("p"),u=k(f),E(o,"class","font-bold px-3 py-2 border-b-2 border-b-gray dark:border-b-gray-900"),E(c,"class","flex flex-row space-x-6 px-4 py-2 justify-center"),E(i,"class","px-3 py-2"),E(n,"role","dialog"),E(n,"class","absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-neutral-800 border-2 border-blue dark:border-blue-300 shadow-xl dark:shadow-blue-900"),E(e,"class","fixed left-0 top-0 w-full h-full z-50 bg-white dark:bg-black bg-opacity-80 dark:bg-opacity-60")},m(t,a){b(t,e,a),$(e,n),$(n,o),$(o,r),$(n,s),$(n,c);for(let t=0;t<p.length;t+=1)p[t].m(c,null);$(n,l),$(n,i),$(i,u)},p(t,e){if(1&e&&a!==(a=t[0].title+"")&&_(r,a),1&e){let n;for(d=t[0].activities,n=0;n<d.length;n+=1){const o=qe(t,d,n);p[n]?p[n].p(o,e):(p[n]=He(o),p[n].c(),p[n].m(c,null))}for(;n<p.length;n+=1)p[n].d(1);p.length=d.length}1&e&&f!==(f=t[0].message+"")&&_(u,f)},d(t){t&&x(e),v(p,t)}}}function He(t){let e,n,o,r,s,c,l,i;return{c(){e=y("li"),n=w("svg"),o=w("path"),c=L(),E(o,"fill","currentColor"),E(o,"d",r=t[1].svg),E(n,"aria-hidden","true"),E(n,"viewBox","0 0 24 24"),E(n,"class",s="w-16 h-16 md:w-32 md:h-32 "+(0===t[1].state?"text-gray dark:text-gray-900":1===t[1].state?"text-blue dark:text-blue-300 animate-pulse":2===t[1].state?"text-red dark:text-red-400":3===t[1].state?"text-green dark:text-green-500":"")),E(e,"aria-label",l=t[1].title),E(e,"title",i=t[1].title)},m(t,r){b(t,e,r),$(e,n),$(n,o),$(e,c)},p(t,c){1&c&&r!==(r=t[1].svg)&&E(o,"d",r),1&c&&s!==(s="w-16 h-16 md:w-32 md:h-32 "+(0===t[1].state?"text-gray dark:text-gray-900":1===t[1].state?"text-blue dark:text-blue-300 animate-pulse":2===t[1].state?"text-red dark:text-red-400":3===t[1].state?"text-green dark:text-green-500":""))&&E(n,"class",s),1&c&&l!==(l=t[1].title)&&E(e,"aria-label",l),1&c&&i!==(i=t[1].title)&&E(e,"title",i)},d(t){t&&x(e)}}}function Be(e){let n,o=e[0]&&ze(e);return{c(){o&&o.c(),n=C()},m(t,e){o&&o.m(t,e),b(t,n,e)},p(t,[e]){t[0]?o?o.p(t,e):(o=ze(t),o.c(),o.m(n.parentNode,n)):o&&(o.d(1),o=null)},i:t,o:t,d(t){o&&o.d(t),t&&x(n)}}}function Ze(t,e,n){let o;return u(t,ht,(t=>n(0,o=t))),[o]}class Je extends rt{constructor(t){super(),ot(this,t,Ze,Be,c,{})}}const We=t=>({}),De=t=>({}),Ge=t=>({}),Ke=t=>({}),Qe=t=>({}),Xe=t=>({});function tn(t){let e,n;const o=t[2].title,r=a(o,t,t[1],Xe);return{c(){e=y("div"),r&&r.c(),E(e,"class","flex-none px-3 py-2 border-b-2 border-b-gray dark:border-b-gray-900 font-bold")},m(t,o){b(t,e,o),r&&r.m(e,null),n=!0},p(t,e){r&&r.p&&(!n||2&e)&&p(r,o,t,t[1],n?d(o,t[1],e,Qe):h(t[1]),Xe)},i(t){n||(K(r,t),n=!0)},o(t){Q(r,t),n=!1},d(t){t&&x(e),r&&r.d(t)}}}function en(t){let e,n;const o=t[2].content,r=a(o,t,t[1],Ke);return{c(){e=y("div"),r&&r.c(),E(e,"class","flex-1 px-3 py-2")},m(t,o){b(t,e,o),r&&r.m(e,null),n=!0},p(t,e){r&&r.p&&(!n||2&e)&&p(r,o,t,t[1],n?d(o,t[1],e,Ge):h(t[1]),Ke)},i(t){n||(K(r,t),n=!0)},o(t){Q(r,t),n=!1},d(t){t&&x(e),r&&r.d(t)}}}function nn(t){let e,n;const o=t[2].buttons,r=a(o,t,t[1],De);return{c(){e=y("div"),r&&r.c(),E(e,"class","flex-none px-3 py-2")},m(t,o){b(t,e,o),r&&r.m(e,null),n=!0},p(t,e){r&&r.p&&(!n||2&e)&&p(r,o,t,t[1],n?d(o,t[1],e,We):h(t[1]),De)},i(t){n||(K(r,t),n=!0)},o(t){Q(r,t),n=!1},d(t){t&&x(e),r&&r.d(t)}}}function on(t){let e,n,o,r,s,c=t[0].title&&tn(t),l=t[0].content&&en(t),i=t[0].buttons&&nn(t);return{c(){e=y("div"),n=y("div"),c&&c.c(),o=L(),l&&l.c(),r=L(),i&&i.c(),E(n,"role","dialog"),E(n,"class","flex flex-col w-72 md:w-96 max-w-screen absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-neutral-800 border-2 border-blue dark:border-blue-300 shadow-xl dark:shadow-blue-900"),E(e,"class","fixed left-0 top-0 w-full h-full z-50 bg-white dark:bg-black bg-opacity-80 dark:bg-opacity-60")},m(t,u){b(t,e,u),$(e,n),c&&c.m(n,null),$(n,o),l&&l.m(n,null),$(n,r),i&&i.m(n,null),s=!0},p(t,[e]){t[0].title?c?(c.p(t,e),1&e&&K(c,1)):(c=tn(t),c.c(),K(c,1),c.m(n,o)):c&&(D(),Q(c,1,1,(()=>{c=null})),G()),t[0].content?l?(l.p(t,e),1&e&&K(l,1)):(l=en(t),l.c(),K(l,1),l.m(n,r)):l&&(D(),Q(l,1,1,(()=>{l=null})),G()),t[0].buttons?i?(i.p(t,e),1&e&&K(i,1)):(i=nn(t),i.c(),K(i,1),i.m(n,null)):i&&(D(),Q(i,1,1,(()=>{i=null})),G())},i(t){s||(K(c),K(l),K(i),s=!0)},o(t){Q(c),Q(l),Q(i),s=!1},d(t){t&&x(e),c&&c.d(),l&&l.d(),i&&i.d()}}}function rn(t,e,n){let{$$slots:o={},$$scope:r}=e;const s=function(t){const e={};for(const n in t)e[n]=!0;return e}(o);return t.$$set=t=>{"$$scope"in t&&n(1,r=t.$$scope)},[s,r,o]}class sn extends rt{constructor(t){super(),ot(this,t,rn,on,c,{})}}function cn(e){let n;return{c(){n=k("Loading... Please wait...")},m(t,e){b(t,n,e)},p:t,d(t){t&&x(n)}}}function ln(t){let e,n=t[0].title+"";return{c(){e=k(n)},m(t,n){b(t,e,n)},p(t,o){1&o&&n!==(n=t[0].title+"")&&_(e,n)},d(t){t&&x(e)}}}function un(t){let e,n,o,r,s=t[1].name+"";return{c(){e=y("span"),n=k(s),o=L(),r=y("a"),r.textContent="Logout",E(e,"class","flex-none"),E(r,"href","/logout"),E(r,"class","flex-none text-blue dark:text-blue-300 hover:underline")},m(t,s){b(t,e,s),$(e,n),b(t,o,s),b(t,r,s)},p(t,e){2&e&&s!==(s=t[1].name+"")&&_(n,s)},d(t){t&&x(e),t&&x(o),t&&x(r)}}}function an(t){let e,n;return e=new Ye({}),{c(){tt(e.$$.fragment)},m(t,o){et(e,t,o),n=!0},i(t){n||(K(e.$$.fragment,t),n=!0)},o(t){Q(e.$$.fragment,t),n=!1},d(t){nt(e,t)}}}function fn(t){let e,n;return e=new Oe({props:{path:"/",$$slots:{default:[an]},$$scope:{ctx:t}}}),{c(){tt(e.$$.fragment)},m(t,o){et(e,t,o),n=!0},p(t,n){const o={};64&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(K(e.$$.fragment,t),n=!0)},o(t){Q(e.$$.fragment,t),n=!1},d(t){nt(e,t)}}}function dn(t){let e,n;return e=new sn({props:{$$slots:{content:[gn],title:[mn]},$$scope:{ctx:t}}}),{c(){tt(e.$$.fragment)},m(t,o){et(e,t,o),n=!0},p(t,n){const o={};65&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(K(e.$$.fragment,t),n=!0)},o(t){Q(e.$$.fragment,t),n=!1},d(t){nt(e,t)}}}function pn(t){let e,n;return e=new sn({props:{$$slots:{content:[wn],title:[$n]},$$scope:{ctx:t}}}),{c(){tt(e.$$.fragment)},m(t,o){et(e,t,o),n=!0},p(t,n){const o={};65&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(K(e.$$.fragment,t),n=!0)},o(t){Q(e.$$.fragment,t),n=!1},d(t){nt(e,t)}}}function hn(t){let e,n;return e=new sn({props:{$$slots:{content:[An],title:[kn]},$$scope:{ctx:t}}}),{c(){tt(e.$$.fragment)},m(t,o){et(e,t,o),n=!0},p(t,n){const o={};65&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(K(e.$$.fragment,t),n=!0)},o(t){Q(e.$$.fragment,t),n=!1},d(t){nt(e,t)}}}function mn(e){let n;return{c(){n=y("h2"),n.textContent="Disconnected",E(n,"slot","title")},m(t,e){b(t,n,e)},p:t,d(t){t&&x(n)}}}function gn(t){let e,n,o,r,s,c,l,i,u=t[0].title+"";return{c(){e=y("div"),n=k("You have been disconnected from the "),o=k(u),r=k(". You can "),s=y("button"),s.textContent="click here to re-connect",c=k("."),E(s,"class","text-blue dark:text-blue-300 hover:underline"),E(e,"slot","content")},m(u,a){var f,d,p,h;b(u,e,a),$(e,n),$(e,o),$(e,r),$(e,s),$(e,c),l||(f=s,d="click",p=t[5],f.addEventListener(d,p,h),i=()=>f.removeEventListener(d,p,h),l=!0)},p(t,e){1&e&&u!==(u=t[0].title+"")&&_(o,u)},d(t){t&&x(e),l=!1,i()}}}function $n(e){let n;return{c(){n=y("h2"),n.textContent="Unauthorised",E(n,"slot","title")},m(t,e){b(t,n,e)},p:t,d(t){t&&x(n)}}}function bn(e){let n;return{c(){n=k("return to the VLE")},m(t,e){b(t,n,e)},p:t,d(t){t&&x(n)}}}function xn(t){let e,n,o;return{c(){e=y("a"),n=k("return to the VLE"),E(e,"href",o=t[0].vle.url),E(e,"class","text-blue dark:text-blue-300 hover:underline")},m(t,o){b(t,e,o),$(e,n)},p(t,n){1&n&&o!==(o=t[0].vle.url)&&E(e,"href",o)},d(t){t&&x(e)}}}function vn(e){let n;return{c(){n=k("log in again")},m(t,e){b(t,n,e)},p:t,d(t){t&&x(n)}}}function yn(t){let e,n,o;return{c(){e=y("a"),n=k("log in again"),E(e,"href",o=t[0].vle.url),E(e,"class","text-blue dark:text-blue-300 hover:underline")},m(t,o){b(t,e,o),$(e,n)},p(t,n){1&n&&o!==(o=t[0].vle.url)&&E(e,"href",o)},d(t){t&&x(e)}}}function wn(t){let e,n,o,r,s,c,l,i,u=t[0].title+"",a=t[0].title+"";function f(t,e){return t[0].vle&&t[0].vle.url?xn:bn}let d=f(t),p=d(t);function h(t,e){return t[0].vle&&t[0].vle.url?yn:vn}let m=h(t),g=m(t);return{c(){e=y("div"),n=k("You are not authorised to access the "),o=k(u),r=k(". Please\n                "),p.c(),s=k("\n                from which you accessed the "),c=k(a),l=k(" and\n                "),g.c(),i=k("."),E(e,"slot","content")},m(t,u){b(t,e,u),$(e,n),$(e,o),$(e,r),p.m(e,null),$(e,s),$(e,c),$(e,l),g.m(e,null),$(e,i)},p(t,n){1&n&&u!==(u=t[0].title+"")&&_(o,u),d===(d=f(t))&&p?p.p(t,n):(p.d(1),p=d(t),p&&(p.c(),p.m(e,s))),1&n&&a!==(a=t[0].title+"")&&_(c,a),m===(m=h(t))&&g?g.p(t,n):(g.d(1),g=m(t),g&&(g.c(),g.m(e,i)))},d(t){t&&x(e),p.d(),g.d()}}}function kn(e){let n;return{c(){n=y("h2"),n.textContent="Logged Out",E(n,"slot","title")},m(t,e){b(t,n,e)},p:t,d(t){t&&x(n)}}}function Ln(e){let n;return{c(){n=k("return to the VLE")},m(t,e){b(t,n,e)},p:t,d(t){t&&x(n)}}}function Cn(t){let e,n,o;return{c(){e=y("a"),n=k("return to the VLE"),E(e,"href",o=t[0].vle.url),E(e,"class","text-blue dark:text-blue-300 hover:underline")},m(t,o){b(t,e,o),$(e,n)},p(t,n){1&n&&o!==(o=t[0].vle.url)&&E(e,"href",o)},d(t){t&&x(e)}}}function En(e){let n;return{c(){n=k("log in again")},m(t,e){b(t,n,e)},p:t,d(t){t&&x(n)}}}function _n(t){let e,n,o;return{c(){e=y("a"),n=k("log in again"),E(e,"href",o=t[0].vle.url),E(e,"class","text-blue dark:text-blue-300 hover:underline")},m(t,o){b(t,e,o),$(e,n)},p(t,n){1&n&&o!==(o=t[0].vle.url)&&E(e,"href",o)},d(t){t&&x(e)}}}function An(t){let e,n,o,r,s,c,l,i,u,a,f=t[0].title+"",d=t[0].title+"",p=t[0].title+"";function h(t,e){return t[0].vle&&t[0].vle.url?Cn:Ln}let m=h(t),g=m(t);function v(t,e){return t[0].vle&&t[0].vle.url?_n:En}let w=v(t),L=w(t);return{c(){e=y("div"),n=k("You have logged out of the "),o=k(f),r=k(". If you want to access the "),s=k(d),c=k(" again, then please\n                "),g.c(),l=k("\n                from which you accessed the "),i=k(p),u=k(" and\n                "),L.c(),a=k("."),E(e,"slot","content")},m(t,f){b(t,e,f),$(e,n),$(e,o),$(e,r),$(e,s),$(e,c),g.m(e,null),$(e,l),$(e,i),$(e,u),L.m(e,null),$(e,a)},p(t,n){1&n&&f!==(f=t[0].title+"")&&_(o,f),1&n&&d!==(d=t[0].title+"")&&_(s,d),m===(m=h(t))&&g?g.p(t,n):(g.d(1),g=m(t),g&&(g.c(),g.m(e,l))),1&n&&p!==(p=t[0].title+"")&&_(i,p),w===(w=v(t))&&L?L.p(t,n):(L.d(1),L=w(t),L&&(L.c(),L.m(e,a)))},d(t){t&&x(e),g.d(),L.d()}}}function Rn(t){let e,n,o,r,s,c,l,i,u,a,f,d;function p(t,e){return t[0]&&t[0].title?ln:cn}let h=p(t),m=h(t),g=t[1]&&t[1].name&&un(t);c=new ve({props:{basepath:"/app",$$slots:{default:[fn]},$$scope:{ctx:t}}}),i=new Je({});const v=[hn,pn,dn],w=[];function k(t,e){return t[2]?0:t[3]?1:t[4]?2:-1}return~(a=k(t))&&(f=w[a]=v[a](t)),{c(){e=y("main"),n=y("header"),o=y("span"),m.c(),r=L(),g&&g.c(),s=L(),tt(c.$$.fragment),l=L(),tt(i.$$.fragment),u=L(),f&&f.c(),E(o,"class","flex-1"),E(n,"class","flex-none flex flex-row space-x-4 px-3 py-2 border-b border-b-blue text-sm shadow-md z-10"),E(e,"class","flex flex-col max-w-5xl h-screen mx-auto bg-white dark:bg-neutral-800 overflow-hidden shadow-lg dark:shadow-neutral-800")},m(t,f){b(t,e,f),$(e,n),$(n,o),m.m(o,null),$(n,r),g&&g.m(n,null),$(e,s),et(c,e,null),$(e,l),et(i,e,null),$(e,u),~a&&w[a].m(e,null),d=!0},p(t,[r]){h===(h=p(t))&&m?m.p(t,r):(m.d(1),m=h(t),m&&(m.c(),m.m(o,null))),t[1]&&t[1].name?g?g.p(t,r):(g=un(t),g.c(),g.m(n,null)):g&&(g.d(1),g=null);const s={};64&r&&(s.$$scope={dirty:r,ctx:t}),c.$set(s);let l=a;a=k(t),a===l?~a&&w[a].p(t,r):(f&&(D(),Q(w[l],1,1,(()=>{w[l]=null})),G()),~a?(f=w[a],f?f.p(t,r):(f=w[a]=v[a](t),f.c()),K(f,1),f.m(e,null)):f=null)},i(t){d||(K(c.$$.fragment,t),K(i.$$.fragment,t),K(f),d=!0)},o(t){Q(c.$$.fragment,t),Q(i.$$.fragment,t),Q(f),d=!1},d(t){t&&x(e),m.d(),g&&g.d(),nt(c),nt(i),~a&&w[a].d()}}}function Sn(t,e,n){let o,r,s,c,l;u(t,mt,(t=>n(0,o=t))),u(t,bt,(t=>n(1,r=t))),u(t,vt,(t=>n(2,s=t))),u(t,xt,(t=>n(3,c=t))),u(t,dt,(t=>n(4,l=t)));return[o,r,s,c,l,()=>{ft()}]}class Pn extends rt{constructor(t){super(),ot(this,t,Sn,Rn,c,{})}}function Vn(e){let n,o,r;return o=new Pn({}),{c(){n=y("div"),tt(o.$$.fragment)},m(t,e){b(t,n,e),et(o,n,null),r=!0},p:t,i(t){r||(K(o.$$.fragment,t),r=!0)},o(t){Q(o.$$.fragment,t),r=!1},d(t){t&&x(n),nt(o)}}}function Nn(t){return ft(),V(wt),[]}return new class extends rt{constructor(t){super(),ot(this,t,Nn,Vn,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
