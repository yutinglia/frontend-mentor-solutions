import{g as R,P as h,s as E,a as v,b,c as w,d as x,u as A,m as L,e as g,f as O}from"./runtime.CbZ13QQ-.js";const D={get(r,e){if(!r.exclude.includes(e))return r.props[e]},set(r,e){return!1},getOwnPropertyDescriptor(r,e){if(!r.exclude.includes(e)&&e in r.props)return{enumerable:!0,configurable:!0,value:r.props[e]}},has(r,e){return r.exclude.includes(e)?!1:e in r.props},ownKeys(r){return Reflect.ownKeys(r.props).filter(e=>!r.exclude.includes(e))}};function T(r,e,u){return new Proxy({props:r,exclude:e},D)}function q(r,e,u,f){var m;var I=(u&w)!==0,p=(u&x)!==0,S=(u&O)!==0,a=r[e],t=(m=R(r,e))==null?void 0:m.set,s=f,l=!0,P=()=>(S&&l&&(l=!1,s=A(f)),s);if(a===void 0&&f!==void 0){if(t&&p)throw new Error("ERR_SVELTE_BINDING_FALLBACK");a=P(),t&&t(a)}var d=p?()=>{var n=r[e];return n===void 0?P():(l=!0,n)}:()=>{var n=r[e];return n!==void 0&&(s=void 0),n===void 0?s:n};if(!(u&h))return d;if(t)return function(n){return arguments.length===1?(t(n),n):d()};var _=!1,c=L(a),i=g(()=>{var n=d(),o=v(c);return _?(_=!1,o):c.v=n});return I||(i.equals=E),function(n){var o=v(i);return arguments.length>0?(i.equals(n)||(_=!0,b(c,n),v(i)),n):o}}export{q as p,T as r};