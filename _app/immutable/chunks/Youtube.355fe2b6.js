import{S as j,i as D,s as P,e as q,b as k,v as V,d as y,f as F,g as p,h,V as W,k as T,W as X,l as B,m as v,X as J,n as f,C,Y as I,D as E,F as S,G as A,H as G,I as H,E as L,Z as te,_ as le,a as M,c as O,p as K,o as se,y as U,z as Z,A as z,B as R,q as ie,r as ne,u as ae,$ as re,a0 as ue}from"./index.36c0e6ad.js";function oe(i){let e,s,t,l,n;return{c(){e=T("button"),s=X("svg"),t=X("path"),this.h()},l(a){e=B(a,"BUTTON",{class:!0,"aria-label":!0});var r=v(e);s=J(r,"svg",{xmlns:!0,"aria-hidden":!0,class:!0,viewBox:!0});var u=v(s);t=J(u,"path",{fill:!0,d:!0}),v(t).forEach(h),u.forEach(h),r.forEach(h),this.h()},h(){f(t,"fill","#ff4e45"),f(t,"d","m10 15 5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73Z"),f(s,"xmlns","http://www.w3.org/2000/svg"),f(s,"aria-hidden","true"),f(s,"class","iconify iconify--mdi"),f(s,"viewBox","0 0 24 24"),f(e,"class","play__btn svelte-1srk8gt"),f(e,"aria-label","Play YouTube video")},m(a,r){k(a,e,r),C(e,s),C(s,t),l||(n=I(e,"click",i[4]),l=!0)},p:E,i:E,o:E,d(a){a&&h(e),l=!1,n()}}}function ce(i){let e,s,t,l;const n=i[2].default,a=S(n,i,i[1],null);return{c(){e=T("button"),a&&a.c(),this.h()},l(r){e=B(r,"BUTTON",{class:!0,"aria-label":!0});var u=v(e);a&&a.l(u),u.forEach(h),this.h()},h(){f(e,"class","custom__play__btn svelte-1srk8gt"),f(e,"aria-label","Play YouTube video")},m(r,u){k(r,e,u),a&&a.m(e,null),s=!0,t||(l=I(e,"click",i[3]),t=!0)},p(r,u){a&&a.p&&(!s||u&2)&&A(a,n,r,r[1],s?H(n,r[1],u,null):G(r[1]),null)},i(r){s||(p(a,r),s=!0)},o(r){y(a,r),s=!1},d(r){r&&h(e),a&&a.d(r),t=!1,l()}}}function fe(i){let e,s,t,l;const n=[ce,oe],a=[];function r(u,o){return u[0]?0:1}return e=r(i),s=a[e]=n[e](i),{c(){s.c(),t=q()},l(u){s.l(u),t=q()},m(u,o){a[e].m(u,o),k(u,t,o),l=!0},p(u,[o]){let c=e;e=r(u),e===c?a[e].p(u,o):(V(),y(a[c],1,1,()=>{a[c]=null}),F(),s=a[e],s?s.p(u,o):(s=a[e]=n[e](u),s.c()),p(s,1),s.m(t.parentNode,t))},i(u){l||(p(s),l=!0)},o(u){y(s),l=!1},d(u){a[e].d(u),u&&h(t)}}}function _e(i,e,s){let{$$slots:t={},$$scope:l}=e,{isCustomPlayButton:n}=e;function a(u){W.call(this,i,u)}function r(u){W.call(this,i,u)}return i.$$set=u=>{"isCustomPlayButton"in u&&s(0,n=u.isCustomPlayButton),"$$scope"in u&&s(1,l=u.$$scope)},[n,l,t,a,r]}class me extends j{constructor(e){super(),D(this,e,_e,fe,P,{isCustomPlayButton:0})}}function he(i){const e=i-1;return e*e*e+1}function be(i,{delay:e=0,duration:s=400,easing:t=he,start:l=0,opacity:n=0}={}){const a=getComputedStyle(i),r=+a.opacity,u=a.transform==="none"?"":a.transform,o=1-l,c=r*(1-n);return{delay:e,duration:s,easing:t,css:(m,b)=>`
			transform: ${u} scale(${1-o*b});
			opacity: ${r-c*b}
		`}}function de(i){let e,s,t;return{c(){e=T("iframe"),this.h()},l(l){e=B(l,"IFRAME",{src:!0,title:!0,frameborder:!0,allow:!0,class:!0}),v(e).forEach(h),this.h()},h(){L(e.src,s="https://www.youtube.com/embed/"+i[1]+"?autoplay=1&rel=0")||f(e,"src",s),f(e,"title",i[0]),f(e,"frameborder","0"),f(e,"allow","autoplay; picture-in-picture; clipboard-write"),e.allowFullscreen=!0,f(e,"class","svelte-11gebsu")},m(l,n){k(l,e,n)},p(l,[n]){i=l,n&2&&!L(e.src,s="https://www.youtube.com/embed/"+i[1]+"?autoplay=1&rel=0")&&f(e,"src",s),n&1&&f(e,"title",i[0])},i(l){t||te(()=>{t=le(e,be,i[2]?{delay:500,duration:800}:{}),t.start()})},o:E,d(l){l&&h(e)}}}function pe(i,e,s){let{title:t=""}=e,{id:l=""}=e,{animations:n}=e;return i.$$set=a=>{"title"in a&&s(0,t=a.title),"id"in a&&s(1,l=a.id),"animations"in a&&s(2,n=a.animations)},[t,l,n]}class ye extends j{constructor(e){super(),D(this,e,pe,de,P,{title:0,id:1,animations:2})}}function Q(i){let e,s,t;return{c(){e=T("img"),this.h()},l(l){e=B(l,"IMG",{src:!0,title:!0,alt:!0,referrerpolicy:!0,class:!0}),this.h()},h(){L(e.src,s="https://i.ytimg.com/vi/"+i[0]+"/"+(i[2]?"hqdefault":"maxresdefault")+".jpg")||f(e,"src",s),f(e,"title",i[1]),f(e,"alt",t="Youtube video: "+i[1]),f(e,"referrerpolicy","no-referrer"),f(e,"class","svelte-hw9fhp")},m(l,n){k(l,e,n)},p(l,n){n&5&&!L(e.src,s="https://i.ytimg.com/vi/"+l[0]+"/"+(l[2]?"hqdefault":"maxresdefault")+".jpg")&&f(e,"src",s),n&2&&f(e,"title",l[1]),n&2&&t!==(t="Youtube video: "+l[1])&&f(e,"alt",t)},d(l){l&&h(e)}}}function ke(i){let e=i[3],s,t=Q(i);return{c(){t.c(),s=q()},l(l){t.l(l),s=q()},m(l,n){t.m(l,n),k(l,s,n)},p(l,[n]){n&8&&P(e,e=l[3])?(t.d(1),t=Q(l),t.c(),t.m(s.parentNode,s)):t.p(l,n)},i:E,o:E,d(l){l&&h(s),t.d(l)}}}function ge(i,e,s){let{id:t=""}=e,{title:l=""}=e,{altThumb:n=""}=e,{play:a=!1}=e;return i.$$set=r=>{"id"in r&&s(0,t=r.id),"title"in r&&s(1,l=r.title),"altThumb"in r&&s(2,n=r.altThumb),"play"in r&&s(3,a=r.play)},[t,l,n,a]}class ve extends j{constructor(e){super(),D(this,e,ge,ke,P,{id:0,title:1,altThumb:2,play:3})}}const we=i=>({}),$=i=>({});function Te(i){let e,s,t,l,n,a,r,u,o,c,m;const b=[Ce,Ee],w=[];function N(_,d){return _[8]?0:1}return e=N(i),s=w[e]=b[e](i),{c(){s.c(),t=M(),l=T("div"),n=M(),a=T("div"),r=T("h3"),u=ie(i[3]),this.h()},l(_){s.l(_),t=O(_),l=B(_,"DIV",{class:!0}),v(l).forEach(h),n=O(_),a=B(_,"DIV",{class:!0});var d=v(a);r=B(d,"H3",{class:!0});var Y=v(r);u=ne(Y,i[3]),Y.forEach(h),d.forEach(h),this.h()},h(){f(l,"class","b__overlay svelte-w0t24e"),f(r,"class","svelte-w0t24e"),f(a,"class","v__title svelte-w0t24e")},m(_,d){w[e].m(_,d),k(_,t,d),k(_,l,d),k(_,n,d),k(_,a,d),C(a,r),C(r,u),o=!0,c||(m=[I(l,"click",i[10]),I(l,"keypress",i[11])],c=!0)},p(_,d){s.p(_,d),(!o||d&8)&&ae(u,_[3])},i(_){o||(p(s),o=!0)},o(_){y(s),o=!1},d(_){w[e].d(_),_&&h(t),_&&h(l),_&&h(n),_&&h(a),c=!1,re(m)}}}function Be(i){let e,s;return e=new ye({props:{play:i[6],id:i[0],title:i[3],animations:i[2]}}),{c(){U(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,l){z(e,t,l),s=!0},p(t,l){const n={};l&64&&(n.play=t[6]),l&1&&(n.id=t[0]),l&8&&(n.title=t[3]),l&4&&(n.animations=t[2]),e.$set(n)},i(t){s||(p(e.$$.fragment,t),s=!0)},o(t){y(e.$$.fragment,t),s=!1},d(t){R(e,t)}}}function Ee(i){let e,s;return e=new ve({props:{id:i[0],title:i[3],altThumb:i[1],play:i[6]}}),{c(){U(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,l){z(e,t,l),s=!0},p(t,l){const n={};l&1&&(n.id=t[0]),l&8&&(n.title=t[3]),l&2&&(n.altThumb=t[1]),l&64&&(n.play=t[6]),e.$set(n)},i(t){s||(p(e.$$.fragment,t),s=!0)},o(t){y(e.$$.fragment,t),s=!1},d(t){R(e,t)}}}function Ce(i){let e;const s=i[9].thumbnail,t=S(s,i,i[13],$);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,n){t&&t.m(l,n),e=!0},p(l,n){t&&t.p&&(!e||n&8192)&&A(t,s,l,l[13],e?H(s,l[13],n,we):G(l[13]),$)},i(l){e||(p(t,l),e=!0)},o(l){y(t,l),e=!1},d(l){t&&t.d(l)}}}function x(i){let e,s;return e=new me({props:{isCustomPlayButton:i[7],$$slots:{default:[Pe]},$$scope:{ctx:i}}}),e.$on("click",i[12]),{c(){U(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,l){z(e,t,l),s=!0},p(t,l){const n={};l&8192&&(n.$$scope={dirty:l,ctx:t}),e.$set(n)},i(t){s||(p(e.$$.fragment,t),s=!0)},o(t){y(e.$$.fragment,t),s=!1},d(t){R(e,t)}}}function Pe(i){let e;const s=i[9].default,t=S(s,i,i[13],null);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,n){t&&t.m(l,n),e=!0},p(l,n){t&&t.p&&(!e||n&8192)&&A(t,s,l,l[13],e?H(s,l[13],n,null):G(l[13]),null)},i(l){e||(p(t,l),e=!0)},o(l){y(t,l),e=!1},d(l){t&&t.d(l)}}}function Ye(i){let e,s,t,l,n;const a=[Be,Te],r=[];function u(c,m){return c[6]?0:1}s=u(i),t=r[s]=a[s](i);let o=!i[6]&&x(i);return{c(){e=T("div"),t.c(),l=M(),o&&o.c(),this.h()},l(c){e=B(c,"DIV",{class:!0,style:!0,title:!0});var m=v(e);t.l(m),l=O(m),o&&o.l(m),m.forEach(h),this.h()},h(){f(e,"class","you__tube svelte-w0t24e"),K(e,"--aspect-ratio",i[4]/i[5]||"16/9"),f(e,"title",i[3])},m(c,m){k(c,e,m),r[s].m(e,null),C(e,l),o&&o.m(e,null),n=!0},p(c,[m]){let b=s;s=u(c),s===b?r[s].p(c,m):(V(),y(r[b],1,1,()=>{r[b]=null}),F(),t=r[s],t?t.p(c,m):(t=r[s]=a[s](c),t.c()),p(t,1),t.m(e,l)),c[6]?o&&(V(),y(o,1,1,()=>{o=null}),F()):o?(o.p(c,m),m&64&&p(o,1)):(o=x(c),o.c(),p(o,1),o.m(e,null)),(!n||m&48)&&K(e,"--aspect-ratio",c[4]/c[5]||"16/9"),(!n||m&8)&&f(e,"title",c[3])},i(c){n||(p(t),p(o),n=!0)},o(c){y(t),y(o),n=!1},d(c){c&&h(e),r[s].d(),o&&o.d()}}}function qe(i,e,s){let{$$slots:t={},$$scope:l}=e;const n=ue(t);let{id:a=null}=e,{altThumb:r=!1}=e,{animations:u=!0}=e,o="",c=0,m=0,b={};se(async()=>{b=await(await fetch(`//www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${a}&format=json`)).json(),s(3,o=b==null?void 0:b.title),s(4,c=b==null?void 0:b.width),s(5,m=b==null?void 0:b.height)});let w=!1;const N=n.default,_=n.thumbnail,d=()=>s(6,w=!0),Y=()=>s(6,w=!0),ee=()=>s(6,w=!0);return i.$$set=g=>{"id"in g&&s(0,a=g.id),"altThumb"in g&&s(1,r=g.altThumb),"animations"in g&&s(2,u=g.animations),"$$scope"in g&&s(13,l=g.$$scope)},[a,r,u,o,c,m,w,N,_,t,d,Y,ee,l]}class Le extends j{constructor(e){super(),D(this,e,qe,Ye,P,{id:0,altThumb:1,animations:2})}}export{Le as Y};