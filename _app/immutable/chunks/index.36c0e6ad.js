function v(){}const ot=t=>t;function lt(t,e){for(const n in e)t[n]=e[n];return t}function K(t){return t()}function F(){return Object.create(null)}function A(t){t.forEach(K)}function q(t){return typeof t=="function"}function Bt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let S;function Ht(t,e){return S||(S=document.createElement("a")),S.href=e,t===S.href}function ut(t){return Object.keys(t).length===0}function at(t,...e){if(t==null)return v;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Lt(t,e,n){t.$$.on_destroy.push(at(e,n))}function Ft(t,e,n,i){if(t){const r=Q(t,e,n,i);return t[0](r)}}function Q(t,e,n,i){return t[1]&&i?lt(n.ctx.slice(),t[1](i(e))):n.ctx}function Wt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const o=[],s=Math.max(e.dirty.length,r.length);for(let l=0;l<s;l+=1)o[l]=e.dirty[l]|r[l];return o}return e.dirty|r}return e.dirty}function Gt(t,e,n,i,r,o){if(r){const s=Q(e,n,i,o);t.p(s,r)}}function It(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Jt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Kt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function Qt(t){const e={};for(const n in t)e[n]=!0;return e}const U=typeof window<"u";let ft=U?()=>window.performance.now():()=>Date.now(),z=U?t=>requestAnimationFrame(t):v;const b=new Set;function V(t){b.forEach(e=>{e.c(t)||(b.delete(e),e.f())}),b.size!==0&&z(V)}function _t(t){let e;return b.size===0&&z(V),{promise:new Promise(n=>{b.add(e={c:t,f:n})}),abort(){b.delete(e)}}}let P=!1;function dt(){P=!0}function ht(){P=!1}function mt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function pt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const f=e[u];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,f=(r>0&&e[n[r]].claim_order<=u?r+1:mt(1,r,_=>e[n[_]].claim_order,u))-1;i[c]=n[f]+1;const a=f+1;n[a]=c,r=Math.max(a,r)}const o=[],s=[];let l=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(o.push(e[c-1]);l>=c;l--)s.push(e[l]);l--}for(;l>=0;l--)s.push(e[l]);o.reverse(),s.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<s.length;c++){for(;u<o.length&&s[c].claim_order>=o[u].claim_order;)u++;const f=u<o.length?o[u]:null;t.insertBefore(s[c],f)}}function yt(t,e){t.appendChild(e)}function X(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function gt(t){const e=Z("style");return $t(X(t),e),e.sheet}function $t(t,e){return yt(t.head||t,e),e.sheet}function xt(t,e){if(P){for(pt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Ut(t,e,n){P&&!n?xt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function Y(t){t.parentNode&&t.parentNode.removeChild(t)}function Vt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function Z(t){return document.createElement(t)}function bt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function B(t){return document.createTextNode(t)}function Xt(){return B(" ")}function Yt(){return B("")}function Zt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function wt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const vt=["width","height"];function te(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&vt.indexOf(i)===-1?t[i]=e[i]:wt(t,i,e[i])}function Et(t){return Array.from(t.childNodes)}function kt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function tt(t,e,n,i,r=!1){kt(t);const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const l=t[s];if(e(l)){const c=n(l);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),l}}for(let s=t.claim_info.last_index-1;s>=0;s--){const l=t[s];if(e(l)){const c=n(l);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,l}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function et(t,e,n,i){return tt(t,r=>r.nodeName===e,r=>{const o=[];for(let s=0;s<r.attributes.length;s++){const l=r.attributes[s];n[l.name]||o.push(l.name)}o.forEach(s=>r.removeAttribute(s))},()=>i(e))}function ee(t,e,n){return et(t,e,n,Z)}function ne(t,e,n){return et(t,e,n,bt)}function Nt(t,e){return tt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>B(e),!0)}function ie(t){return Nt(t," ")}function re(t,e){e=""+e,t.data!==e&&(t.data=e)}function se(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function nt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function ce(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const o=r.textContent.trim();o===`HEAD_${t}_END`?(i-=1,n.push(r)):o===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function oe(t,e){return new t(e)}const C=new Map;let D=0;function At(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function St(t,e){const n={stylesheet:gt(e),rules:{}};return C.set(t,n),n}function jt(t,e,n,i,r,o,s,l=0){const c=16.666/i;let u=`{
`;for(let m=0;m<=1;m+=c){const g=e+(n-e)*o(m);u+=m*100+`%{${s(g,1-g)}}
`}const f=u+`100% {${s(n,1-n)}}
}`,a=`__svelte_${At(f)}_${l}`,_=X(t),{stylesheet:d,rules:h}=C.get(_)||St(_,t);h[a]||(h[a]=!0,d.insertRule(`@keyframes ${a} ${f}`,d.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${a} ${i}ms linear ${r}ms 1 both`,D+=1,a}function W(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),D-=r,D||Ct())}function Ct(){z(()=>{D||(C.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&Y(e)}),C.clear())})}let N;function k(t){N=t}function H(){if(!N)throw new Error("Function called outside component initialization");return N}function le(t){H().$$.on_mount.push(t)}function ue(t){H().$$.after_update.push(t)}function ae(){const t=H();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const o=nt(e,n,{cancelable:i});return r.slice().forEach(s=>{s.call(t,o)}),!o.defaultPrevented}return!0}}function fe(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const x=[],G=[];let w=[];const I=[],it=Promise.resolve();let R=!1;function rt(){R||(R=!0,it.then(st))}function _e(){return rt(),it}function O(t){w.push(t)}const M=new Set;let $=0;function st(){if($!==0)return;const t=N;do{try{for(;$<x.length;){const e=x[$];$++,k(e),Dt(e.$$)}}catch(e){throw x.length=0,$=0,e}for(k(null),x.length=0,$=0;G.length;)G.pop()();for(let e=0;e<w.length;e+=1){const n=w[e];M.has(n)||(M.add(n),n())}w.length=0}while(x.length);for(;I.length;)I.pop()();R=!1,M.clear(),k(t)}function Dt(t){if(t.fragment!==null){t.update(),A(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}function Ot(t){const e=[],n=[];w.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),w=e}let E;function Pt(){return E||(E=Promise.resolve(),E.then(()=>{E=null})),E}function J(t,e,n){t.dispatchEvent(nt(`${e?"intro":"outro"}${n}`))}const j=new Set;let p;function de(){p={r:0,c:[],p}}function he(){p.r||A(p.c),p=p.p}function Tt(t,e){t&&t.i&&(j.delete(t),t.i(e))}function me(t,e,n,i){if(t&&t.o){if(j.has(t))return;j.add(t),p.c.push(()=>{j.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Mt={duration:0};function pe(t,e,n){const i={direction:"in"};let r=e(t,n,i),o=!1,s,l,c=0;function u(){s&&W(t,s)}function f(){const{delay:_=0,duration:d=300,easing:h=ot,tick:y=v,css:m}=r||Mt;m&&(s=jt(t,0,1,d,_,h,m,c++)),y(0,1);const g=ft()+_,ct=g+d;l&&l.abort(),o=!0,O(()=>J(t,!0,"start")),l=_t(T=>{if(o){if(T>=ct)return y(1,0),J(t,!0,"end"),u(),o=!1;if(T>=g){const L=h((T-g)/d);y(L,1-L)}}return o})}let a=!1;return{start(){a||(a=!0,W(t),q(r)?(r=r(i),Pt().then(f)):f())},invalidate(){a=!1},end(){o&&(u(),o=!1)}}}function ye(t,e){const n={},i={},r={$$scope:1};let o=t.length;for(;o--;){const s=t[o],l=e[o];if(l){for(const c in s)c in l||(i[c]=1);for(const c in l)r[c]||(n[c]=l[c],r[c]=1);t[o]=l}else for(const c in s)r[c]=1}for(const s in i)s in n||(n[s]=void 0);return n}function ge(t){return typeof t=="object"&&t!==null?t:{}}function $e(t){t&&t.c()}function xe(t,e){t&&t.l(e)}function Rt(t,e,n,i){const{fragment:r,after_update:o}=t.$$;r&&r.m(e,n),i||O(()=>{const s=t.$$.on_mount.map(K).filter(q);t.$$.on_destroy?t.$$.on_destroy.push(...s):A(s),t.$$.on_mount=[]}),o.forEach(O)}function qt(t,e){const n=t.$$;n.fragment!==null&&(Ot(n.after_update),A(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function zt(t,e){t.$$.dirty[0]===-1&&(x.push(t),rt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function be(t,e,n,i,r,o,s,l=[-1]){const c=N;k(t);const u=t.$$={fragment:null,ctx:[],props:o,update:v,not_equal:r,bound:F(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:F(),dirty:l,skip_bound:!1,root:e.target||c.$$.root};s&&s(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(a,_,...d)=>{const h=d.length?d[0]:_;return u.ctx&&r(u.ctx[a],u.ctx[a]=h)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](h),f&&zt(t,a)),_}):[],u.update(),f=!0,A(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){dt();const a=Et(e.target);u.fragment&&u.fragment.l(a),a.forEach(Y)}else u.fragment&&u.fragment.c();e.intro&&Tt(t.$$.fragment),Rt(t,e.target,e.anchor,e.customElement),ht(),st()}k(c)}class we{$destroy(){qt(this,1),this.$destroy=v}$on(e,n){if(!q(n))return v;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!ut(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{A as $,Rt as A,qt as B,xt as C,v as D,Ht as E,Ft as F,Gt as G,It as H,Wt as I,Lt as J,Vt as K,ce as L,st as M,lt as N,te as O,ye as P,Kt as Q,ae as R,we as S,Jt as T,ge as U,fe as V,bt as W,ne as X,Zt as Y,O as Z,pe as _,Xt as a,Qt as a0,Ut as b,ie as c,me as d,Yt as e,he as f,Tt as g,Y as h,be as i,ue as j,Z as k,ee as l,Et as m,wt as n,le as o,se as p,B as q,Nt as r,Bt as s,_e as t,re as u,de as v,G as w,oe as x,$e as y,xe as z};
