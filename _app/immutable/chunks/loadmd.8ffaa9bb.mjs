import{S,i as y,s as R,k as _,q as f,a as v,l as d,m,r as b,h as a,c as P,b as u,W as h,G as p}from"./index.9ef489e8.mjs";import{g as A}from"./globToArray.54c2d47d.mjs";function H(r){let o,c,s,t,i;return{c(){o=_("h1"),c=f("Introduction"),s=v(),t=_("p"),i=f("Hello molecule enthusiast. Let’s get you into chARp.")},l(e){o=d(e,"H1",{});var n=m(o);c=b(n,"Introduction"),n.forEach(a),s=P(e),t=d(e,"P",{});var l=m(t);i=b(l,"Hello molecule enthusiast. Let’s get you into chARp."),l.forEach(a)},m(e,n){u(e,o,n),h(o,c),u(e,s,n),u(e,t,n),h(t,i)},p,i:p,o:p,d(e){e&&a(o),e&&a(s),e&&a(t)}}}const k={title:"Introduction"};class W extends S{constructor(o){super(),y(this,o,null,H,R,{})}}const q=Object.freeze(Object.defineProperty({__proto__:null,default:W,metadata:k},Symbol.toStringTag,{value:"Module"}));function C(r){let o,c,s,t,i;return{c(){o=_("h1"),c=f("Interaction"),s=v(),t=_("p"),i=f("blablub")},l(e){o=d(e,"H1",{});var n=m(o);c=b(n,"Interaction"),n.forEach(a),s=P(e),t=d(e,"P",{});var l=m(t);i=b(l,"blablub"),l.forEach(a)},m(e,n){u(e,o,n),h(o,c),u(e,s,n),u(e,t,n),h(t,i)},p,i:p,o:p,d(e){e&&a(o),e&&a(s),e&&a(t)}}}const L={title:"Interaction"};class M extends S{constructor(o){super(),y(this,o,null,C,R,{})}}const $=Object.freeze(Object.defineProperty({__proto__:null,default:M,metadata:L},Symbol.toStringTag,{value:"Module"}));function w(r,o){return r.prio-o.prio}function g(r){return r.split("-")[1].split("_").map(i=>i.charAt(0).toUpperCase()+i.slice(1)).join(" ")}function j(){let o=A(Object.assign({"/src/routes/manual/00-getting_started/00-introduction.md":q,"/src/routes/manual/01-core_concepts/00-interaction.md":$}));o.forEach(t=>{const i=t.path.split("/").slice(-2)[0],e=g(i),n=i.split("-")[0],l=t.key.replace(".md",""),x="/"+l.split("/").slice(-3)[0]+"/"+l.split("/").slice(-2)[0]+"/"+l.split("/").slice(-1)[0],I=l.split("/").slice(-2)[0]+"/"+l.split("/").slice(-1)[0],O=l.split("/").slice(-1)[0],E="/"+l.split("/").slice(-3)[0]+"/"+l.split("/").slice(-2)[0],T=t.path.split("/").slice(-1)[0].split("-")[0],z=n+T;t.section=i,t.sectionTitle=e,t.absRoute=x,t.route=I,t.pageRoute=O,t.absSectionRoute=E,t.prio=z}),o.sort(w);let c=o.reduce(function(t,i){let e=i.section;return e in t||(t[e]=[]),t[e].push(i),t},{});return Object.keys(c).map(function(t){return{name:t,title:g(t),absRoute:"/manual/"+t,dictionaries:c[t]}})}function G(r){return j().filter(s=>s.name===r.section)[0]}function N(r){return j().filter(s=>s.name===r.section)[0].dictionaries.filter(s=>s.pageRoute===r.page)[0]}export{G as a,N as b,j as l};
