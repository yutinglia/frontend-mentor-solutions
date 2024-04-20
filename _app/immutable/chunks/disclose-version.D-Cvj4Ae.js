import{A as N,W as B,g as x,X as O,y as C,x as U,Y as I,Z as W,_ as F,$ as R,D as G,q as X,p as Z,j as z,a0 as J,n as K,a1 as L,a2 as Q}from"./runtime.CbZ13QQ-.js";let u=!1;function E(n){u=n}let s=null;function k(n){s=n}function w(n){if(n.nodeType!==8)return n;var e=n;if((e==null?void 0:e.data)!==N)return n;for(var t=[],r=0;(e=e.nextSibling)!==null;){if(e.nodeType===8){var o=e.data;if(o===N)r+=1;else if(o[0]===B){if(r===0)return s=t,e;r-=1}}t.push(e)}throw new Error("Expected a closing hydration marker")}var f,b,D,P,A,$,H,Y,ee;function ne(){f===void 0&&(f=Node.prototype,b=Element.prototype,D=Text.prototype,f.appendChild,P=f.cloneNode,ee=document,b.__click=void 0,D.__nodeValue=" ",b.__className="",b.__attributes=null,A=x(f,"firstChild").get,$=x(f,"nextSibling").get,H=x(f,"textContent").set,Y=x(b,"className").set)}function te(n,e){return P.call(n,e)}function _(){return document.createTextNode("")}function le(n){const e=A.call(n);return u?e===null?n.appendChild(_()):w(e):e}function fe(n,e){if(!u)return A.call(n);const t=n[0];if(e&&(t==null?void 0:t.nodeType)!==3){const r=_();return s.unshift(r),t==null||t.before(r),r}return w(t)}function _e(n,e=!1){const t=$.call(n);if(!u)return t;if(e&&(t==null?void 0:t.nodeType)!==3){const r=_();if(t){const o=s.indexOf(t);s.splice(o,0,r),t.before(r)}else s.push(r);return r}return w(t)}function pe(n,e){Y.call(n,e)}function re(n){H.call(n,"")}function M(n,e){var c;var t=n.ownerDocument,r=e.type,o=((c=e.composedPath)==null?void 0:c.call(e))||[],a=o[0]||e.target;e.target!==a&&O(e,"target",{configurable:!0,value:a});var y=0,d=e.__root;if(d){var p=o.indexOf(d);if(p!==-1&&(n===document||n===window)){e.__root=n;return}var T=o.indexOf(n);if(T===-1)return;p<=T&&(y=p+1)}for(a=o[y]||e.target,O(e,"currentTarget",{configurable:!0,get(){return a||t}});a!==null;){var h=a.parentNode||a.host||null,m="__"+r,v=a[m];if(v!==void 0&&!a.disabled)if(C(v)){var[l,...g]=v;l.apply(a,[e,...g])}else v.call(a,e);if(e.cancelBubble||h===n||a===n)break;a=h}e.__root=n,a=n}let i;function ae(){i=void 0}function he(n){let e=null,t=u;var r;if(u){for(e=s,i===void 0&&(i=document.head.firstChild);i.nodeType!==8||i.data!==N;)i=i.nextSibling;i=w(i),i=i.nextSibling}else r=document.head.appendChild(_());try{U(()=>n(r))}finally{t&&k(e)}}const oe=new Set,V=new Set;function ve(n,e){const t=n.__nodeValue,r=ie(e);u&&n.nodeValue===r?n.__nodeValue=r:t!==r&&(n.nodeValue=r,n.__nodeValue=r)}function ye(n,e,t,r){e===void 0?r!==null&&r(n):e(n,t)}function ie(n){return typeof n=="string"?n:n==null?"":n+""}function se(n,e){const t=e.anchor??e.target.appendChild(_());return I(()=>j(n,{...e,anchor:t}),!1)}function me(n,e){const t=e.target,r=s;let o=!1;try{return I(()=>{E(!0);for(var a=t.firstChild;a&&(a.nodeType!==8||a.data!==N);)a=a.nextSibling;if(!a)throw new Error("Missing hydration marker");const y=w(a),d=j(n,{...e,anchor:y});return E(!1),o=!0,d},!1)}catch(a){if(!o&&e.recover!==!1)return console.error("ERR_SVELTE_HYDRATION_MISMATCH",a),re(t),E(!1),se(n,e);throw a}finally{E(!!r),k(r),ae()}}function j(n,{target:e,anchor:t,props:r={},events:o,context:a,intro:y=!1}){ne();const d=new Set,p=M.bind(null,e),T=M.bind(null,document),h=l=>{for(let g=0;g<l.length;g++){const c=l[g];d.has(c)||(d.add(c),e.addEventListener(c,p,R.includes(c)?{passive:!0}:void 0),document.addEventListener(c,T,R.includes(c)?{passive:!0}:void 0))}};h(W(oe)),V.add(h);let m;const v=F(()=>(G(()=>{if(a){X({});var l=z;l.c=a}o&&(r.$$events=o),m=n(t,r)||{},a&&Z()}),()=>{for(const l of d)e.removeEventListener(l,p);V.delete(h)}));return q.set(m,v),m}let q=new WeakMap;function ge(n){const e=q.get(n);e==null||e()}function S(n,e=K){var t=e.dom;return t===null?e.dom=n:(C(t)||(t=e.dom=[t]),C(n)?t.push(...n):t.push(n)),n}function ue(n,e){var t=(e&L)!==0,r=(e&Q)!==0,o;return()=>{if(u)return S(t?s:s[0]);o||(o=J(n),t||(o=o.firstChild));var a=r?document.importNode(o,!0):te(o,!0);return S(t?[...a.childNodes]:a),a}}function be(n){if(!u)return S(_());var e=s[0];return e||n.before(e=_()),S(e)}const we=ue("<!>",L);function Te(n,e){u||n.before(e)}const ce="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ce);export{ee as $,he as a,Te as b,le as c,ve as d,_e as e,fe as f,w as g,u as h,_ as i,E as j,s as k,pe as l,we as m,me as n,se as o,S as p,be as q,ie as r,ye as s,ue as t,ge as u};