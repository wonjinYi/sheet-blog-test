(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function wl(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function El(t){if(Q(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Fe(s)?Ev(s):El(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(Fe(t))return t;if(Ce(t))return t}}const vv=/;(?![^(]*\))/g,_v=/:([^]+)/,wv=/\/\*.*?\*\//gs;function Ev(t){const e={};return t.replace(wv,"").split(vv).forEach(n=>{if(n){const s=n.split(_v);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Il(t){let e="";if(Fe(t))e=t;else if(Q(t))for(let n=0;n<t.length;n++){const s=Il(t[n]);s&&(e+=s+" ")}else if(Ce(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Iv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Tv=wl(Iv);function Of(t){return!!t||t===""}const Ve=t=>Fe(t)?t:t==null?"":Q(t)||Ce(t)&&(t.toString===Lf||!Z(t.toString))?JSON.stringify(t,Pf,2):String(t),Pf=(t,e)=>e&&e.__v_isRef?Pf(t,e.value):Ms(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:xf(e)?{[`Set(${e.size})`]:[...e.values()]}:Ce(e)&&!Q(e)&&!Uf(e)?String(e):e,Ee={},xs=[],Ut=()=>{},bv=()=>!1,Cv=/^on[^a-z]/,Wo=t=>Cv.test(t),Tl=t=>t.startsWith("onUpdate:"),at=Object.assign,bl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Av=Object.prototype.hasOwnProperty,oe=(t,e)=>Av.call(t,e),Q=Array.isArray,Ms=t=>Go(t)==="[object Map]",xf=t=>Go(t)==="[object Set]",Z=t=>typeof t=="function",Fe=t=>typeof t=="string",Cl=t=>typeof t=="symbol",Ce=t=>t!==null&&typeof t=="object",Mf=t=>Ce(t)&&Z(t.then)&&Z(t.catch),Lf=Object.prototype.toString,Go=t=>Lf.call(t),Sv=t=>Go(t).slice(8,-1),Uf=t=>Go(t)==="[object Object]",Al=t=>Fe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,no=wl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Rv=/-(\w)/g,sn=Qo(t=>t.replace(Rv,(e,n)=>n?n.toUpperCase():"")),kv=/\B([A-Z])/g,ar=Qo(t=>t.replace(kv,"-$1").toLowerCase()),Xo=Qo(t=>t.charAt(0).toUpperCase()+t.slice(1)),za=Qo(t=>t?`on${Xo(t)}`:""),Hr=(t,e)=>!Object.is(t,e),so=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},mo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Tc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let hh;const Dv=()=>hh||(hh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Pt;class Nv{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Pt,!e&&Pt&&(this.index=(Pt.scopes||(Pt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Pt;try{return Pt=this,e()}finally{Pt=n}}}on(){Pt=this}off(){Pt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Ov(t,e=Pt){e&&e.active&&e.effects.push(t)}function Pv(){return Pt}const Sl=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Ff=t=>(t.w&$n)>0,$f=t=>(t.n&$n)>0,xv=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=$n},Mv=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];Ff(r)&&!$f(r)?r.delete(t):e[n++]=r,r.w&=~$n,r.n&=~$n}e.length=n}},yo=new WeakMap;let Ar=0,$n=1;const bc=30;let xt;const is=Symbol(""),Cc=Symbol("");class Rl{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ov(this,s)}run(){if(!this.active)return this.fn();let e=xt,n=xn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=xt,xt=this,xn=!0,$n=1<<++Ar,Ar<=bc?xv(this):dh(this),this.fn()}finally{Ar<=bc&&Mv(this),$n=1<<--Ar,xt=this.parent,xn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){xt===this?this.deferStop=!0:this.active&&(dh(this),this.onStop&&this.onStop(),this.active=!1)}}function dh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let xn=!0;const Vf=[];function cr(){Vf.push(xn),xn=!1}function lr(){const t=Vf.pop();xn=t===void 0?!0:t}function vt(t,e,n){if(xn&&xt){let s=yo.get(t);s||yo.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Sl()),Bf(r)}}function Bf(t,e){let n=!1;Ar<=bc?$f(t)||(t.n|=$n,n=!Ff(t)):n=!t.has(xt),n&&(t.add(xt),xt.deps.push(t))}function mn(t,e,n,s,r,i){const o=yo.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Q(t)){const c=Number(s);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Q(t)?Al(n)&&a.push(o.get("length")):(a.push(o.get(is)),Ms(t)&&a.push(o.get(Cc)));break;case"delete":Q(t)||(a.push(o.get(is)),Ms(t)&&a.push(o.get(Cc)));break;case"set":Ms(t)&&a.push(o.get(is));break}if(a.length===1)a[0]&&Ac(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Ac(Sl(c))}}function Ac(t,e){const n=Q(t)?t:[...t];for(const s of n)s.computed&&fh(s);for(const s of n)s.computed||fh(s)}function fh(t,e){(t!==xt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function Lv(t,e){var n;return(n=yo.get(t))===null||n===void 0?void 0:n.get(e)}const Uv=wl("__proto__,__v_isRef,__isVue"),jf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Cl)),Fv=kl(),$v=kl(!1,!0),Vv=kl(!0),ph=Bv();function Bv(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ce(this);for(let i=0,o=this.length;i<o;i++)vt(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(ce)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){cr();const s=ce(this)[e].apply(this,n);return lr(),s}}),t}function jv(t){const e=ce(this);return vt(e,"has",t),e.hasOwnProperty(t)}function kl(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?r_:Wf:e?Kf:zf).get(s))return s;const o=Q(s);if(!t){if(o&&oe(ph,r))return Reflect.get(ph,r,i);if(r==="hasOwnProperty")return jv}const a=Reflect.get(s,r,i);return(Cl(r)?jf.has(r):Uv(r))||(t||vt(s,"get",r),e)?a:Ge(a)?o&&Al(r)?a:a.value:Ce(a)?t?Gf(a):di(a):a}}const Hv=Hf(),qv=Hf(!0);function Hf(t=!1){return function(n,s,r,i){let o=n[s];if(Gs(o)&&Ge(o)&&!Ge(r))return!1;if(!t&&(!vo(r)&&!Gs(r)&&(o=ce(o),r=ce(r)),!Q(n)&&Ge(o)&&!Ge(r)))return o.value=r,!0;const a=Q(n)&&Al(s)?Number(s)<n.length:oe(n,s),c=Reflect.set(n,s,r,i);return n===ce(i)&&(a?Hr(r,o)&&mn(n,"set",s,r):mn(n,"add",s,r)),c}}function zv(t,e){const n=oe(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&mn(t,"delete",e,void 0),s}function Kv(t,e){const n=Reflect.has(t,e);return(!Cl(e)||!jf.has(e))&&vt(t,"has",e),n}function Wv(t){return vt(t,"iterate",Q(t)?"length":is),Reflect.ownKeys(t)}const qf={get:Fv,set:Hv,deleteProperty:zv,has:Kv,ownKeys:Wv},Gv={get:Vv,set(t,e){return!0},deleteProperty(t,e){return!0}},Qv=at({},qf,{get:$v,set:qv}),Dl=t=>t,Yo=t=>Reflect.getPrototypeOf(t);function Fi(t,e,n=!1,s=!1){t=t.__v_raw;const r=ce(t),i=ce(e);n||(e!==i&&vt(r,"get",e),vt(r,"get",i));const{has:o}=Yo(r),a=s?Dl:n?Pl:qr;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function $i(t,e=!1){const n=this.__v_raw,s=ce(n),r=ce(t);return e||(t!==r&&vt(s,"has",t),vt(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Vi(t,e=!1){return t=t.__v_raw,!e&&vt(ce(t),"iterate",is),Reflect.get(t,"size",t)}function gh(t){t=ce(t);const e=ce(this);return Yo(e).has.call(e,t)||(e.add(t),mn(e,"add",t,t)),this}function mh(t,e){e=ce(e);const n=ce(this),{has:s,get:r}=Yo(n);let i=s.call(n,t);i||(t=ce(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Hr(e,o)&&mn(n,"set",t,e):mn(n,"add",t,e),this}function yh(t){const e=ce(this),{has:n,get:s}=Yo(e);let r=n.call(e,t);r||(t=ce(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&mn(e,"delete",t,void 0),i}function vh(){const t=ce(this),e=t.size!==0,n=t.clear();return e&&mn(t,"clear",void 0,void 0),n}function Bi(t,e){return function(s,r){const i=this,o=i.__v_raw,a=ce(o),c=e?Dl:t?Pl:qr;return!t&&vt(a,"iterate",is),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function ji(t,e,n){return function(...s){const r=this.__v_raw,i=ce(r),o=Ms(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?Dl:e?Pl:qr;return!e&&vt(i,"iterate",c?Cc:is),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function bn(t){return function(...e){return t==="delete"?!1:this}}function Xv(){const t={get(i){return Fi(this,i)},get size(){return Vi(this)},has:$i,add:gh,set:mh,delete:yh,clear:vh,forEach:Bi(!1,!1)},e={get(i){return Fi(this,i,!1,!0)},get size(){return Vi(this)},has:$i,add:gh,set:mh,delete:yh,clear:vh,forEach:Bi(!1,!0)},n={get(i){return Fi(this,i,!0)},get size(){return Vi(this,!0)},has(i){return $i.call(this,i,!0)},add:bn("add"),set:bn("set"),delete:bn("delete"),clear:bn("clear"),forEach:Bi(!0,!1)},s={get(i){return Fi(this,i,!0,!0)},get size(){return Vi(this,!0)},has(i){return $i.call(this,i,!0)},add:bn("add"),set:bn("set"),delete:bn("delete"),clear:bn("clear"),forEach:Bi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=ji(i,!1,!1),n[i]=ji(i,!0,!1),e[i]=ji(i,!1,!0),s[i]=ji(i,!0,!0)}),[t,n,e,s]}const[Yv,Jv,Zv,e_]=Xv();function Nl(t,e){const n=e?t?e_:Zv:t?Jv:Yv;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(oe(n,r)&&r in s?n:s,r,i)}const t_={get:Nl(!1,!1)},n_={get:Nl(!1,!0)},s_={get:Nl(!0,!1)},zf=new WeakMap,Kf=new WeakMap,Wf=new WeakMap,r_=new WeakMap;function i_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function o_(t){return t.__v_skip||!Object.isExtensible(t)?0:i_(Sv(t))}function di(t){return Gs(t)?t:Ol(t,!1,qf,t_,zf)}function a_(t){return Ol(t,!1,Qv,n_,Kf)}function Gf(t){return Ol(t,!0,Gv,s_,Wf)}function Ol(t,e,n,s,r){if(!Ce(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=o_(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function Ls(t){return Gs(t)?Ls(t.__v_raw):!!(t&&t.__v_isReactive)}function Gs(t){return!!(t&&t.__v_isReadonly)}function vo(t){return!!(t&&t.__v_isShallow)}function Qf(t){return Ls(t)||Gs(t)}function ce(t){const e=t&&t.__v_raw;return e?ce(e):t}function Xf(t){return mo(t,"__v_skip",!0),t}const qr=t=>Ce(t)?di(t):t,Pl=t=>Ce(t)?Gf(t):t;function Yf(t){xn&&xt&&(t=ce(t),Bf(t.dep||(t.dep=Sl())))}function Jf(t,e){t=ce(t);const n=t.dep;n&&Ac(n)}function Ge(t){return!!(t&&t.__v_isRef===!0)}function Ft(t){return Zf(t,!1)}function c_(t){return Zf(t,!0)}function Zf(t,e){return Ge(t)?t:new l_(t,e)}class l_{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ce(e),this._value=n?e:qr(e)}get value(){return Yf(this),this._value}set value(e){const n=this.__v_isShallow||vo(e)||Gs(e);e=n?e:ce(e),Hr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:qr(e),Jf(this))}}function $t(t){return Ge(t)?t.value:t}const u_={get:(t,e,n)=>$t(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Ge(r)&&!Ge(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function ep(t){return Ls(t)?t:new Proxy(t,u_)}function tp(t){const e=Q(t)?new Array(t.length):{};for(const n in t)e[n]=d_(t,n);return e}class h_{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Lv(ce(this._object),this._key)}}function d_(t,e,n){const s=t[e];return Ge(s)?s:new h_(t,e,n)}var np;class f_{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[np]=!1,this._dirty=!0,this.effect=new Rl(e,()=>{this._dirty||(this._dirty=!0,Jf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=ce(this);return Yf(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}np="__v_isReadonly";function p_(t,e,n=!1){let s,r;const i=Z(t);return i?(s=t,r=Ut):(s=t.get,r=t.set),new f_(s,r,i||!r,n)}function Mn(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){Jo(i,e,n)}return r}function Rt(t,e,n,s){if(Z(t)){const i=Mn(t,e,n,s);return i&&Mf(i)&&i.catch(o=>{Jo(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(Rt(t[i],e,n,s));return r}function Jo(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Mn(c,null,10,[t,o,a]);return}}g_(t,n,r,s)}function g_(t,e,n,s=!0){console.error(t)}let zr=!1,Sc=!1;const nt=[];let Qt=0;const Us=[];let un=null,Jn=0;const sp=Promise.resolve();let xl=null;function rp(t){const e=xl||sp;return t?e.then(this?t.bind(this):t):e}function m_(t){let e=Qt+1,n=nt.length;for(;e<n;){const s=e+n>>>1;Kr(nt[s])<t?e=s+1:n=s}return e}function Ml(t){(!nt.length||!nt.includes(t,zr&&t.allowRecurse?Qt+1:Qt))&&(t.id==null?nt.push(t):nt.splice(m_(t.id),0,t),ip())}function ip(){!zr&&!Sc&&(Sc=!0,xl=sp.then(ap))}function y_(t){const e=nt.indexOf(t);e>Qt&&nt.splice(e,1)}function v_(t){Q(t)?Us.push(...t):(!un||!un.includes(t,t.allowRecurse?Jn+1:Jn))&&Us.push(t),ip()}function _h(t,e=zr?Qt+1:0){for(;e<nt.length;e++){const n=nt[e];n&&n.pre&&(nt.splice(e,1),e--,n())}}function op(t){if(Us.length){const e=[...new Set(Us)];if(Us.length=0,un){un.push(...e);return}for(un=e,un.sort((n,s)=>Kr(n)-Kr(s)),Jn=0;Jn<un.length;Jn++)un[Jn]();un=null,Jn=0}}const Kr=t=>t.id==null?1/0:t.id,__=(t,e)=>{const n=Kr(t)-Kr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function ap(t){Sc=!1,zr=!0,nt.sort(__);const e=Ut;try{for(Qt=0;Qt<nt.length;Qt++){const n=nt[Qt];n&&n.active!==!1&&Mn(n,null,14)}}finally{Qt=0,nt.length=0,op(),zr=!1,xl=null,(nt.length||Us.length)&&ap()}}function w_(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Ee;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||Ee;d&&(r=n.map(g=>Fe(g)?g.trim():g)),h&&(r=n.map(Tc))}let a,c=s[a=za(e)]||s[a=za(sn(e))];!c&&i&&(c=s[a=za(ar(e))]),c&&Rt(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Rt(l,t,6,r)}}function cp(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!Z(t)){const c=l=>{const u=cp(l,e,!0);u&&(a=!0,at(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Ce(t)&&s.set(t,null),null):(Q(i)?i.forEach(c=>o[c]=null):at(o,i),Ce(t)&&s.set(t,o),o)}function Zo(t,e){return!t||!Wo(e)?!1:(e=e.slice(2).replace(/Once$/,""),oe(t,e[0].toLowerCase()+e.slice(1))||oe(t,ar(e))||oe(t,e))}let wt=null,ea=null;function _o(t){const e=wt;return wt=t,ea=t&&t.type.__scopeId||null,e}function fi(t){ea=t}function pi(){ea=null}function ta(t,e=wt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&kh(-1);const i=_o(e);let o;try{o=t(...r)}finally{_o(i),s._d&&kh(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Ka(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:g,ctx:m,inheritAttrs:v}=t;let b,A;const M=_o(t);try{if(n.shapeFlag&4){const V=r||s;b=Gt(u.call(V,V,h,i,g,d,m)),A=c}else{const V=e;b=Gt(V.length>1?V(i,{attrs:c,slots:a,emit:l}):V(i,null)),A=e.props?c:E_(c)}}catch(V){Mr.length=0,Jo(V,t,1),b=Be(Vt)}let k=b;if(A&&v!==!1){const V=Object.keys(A),{shapeFlag:ee}=k;V.length&&ee&7&&(o&&V.some(Tl)&&(A=I_(A,o)),k=Vn(k,A))}return n.dirs&&(k=Vn(k),k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition&&(k.transition=n.transition),b=k,_o(M),b}const E_=t=>{let e;for(const n in t)(n==="class"||n==="style"||Wo(n))&&((e||(e={}))[n]=t[n]);return e},I_=(t,e)=>{const n={};for(const s in t)(!Tl(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function T_(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?wh(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!Zo(l,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?wh(s,o,l):!0:!!o;return!1}function wh(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Zo(n,i))return!0}return!1}function b_({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const C_=t=>t.__isSuspense;function A_(t,e){e&&e.pendingBranch?Q(t)?e.effects.push(...t):e.effects.push(t):v_(t)}function ro(t,e){if(Ne){let n=Ne.provides;const s=Ne.parent&&Ne.parent.provides;s===n&&(n=Ne.provides=Object.create(s)),n[t]=e}}function Jt(t,e,n=!1){const s=Ne||wt;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Z(e)?e.call(s.proxy):e}}function lp(t,e){return Ll(t,null,e)}const Hi={};function Fs(t,e,n){return Ll(t,e,n)}function Ll(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=Ee){const a=Pv()===(Ne==null?void 0:Ne.scope)?Ne:null;let c,l=!1,u=!1;if(Ge(t)?(c=()=>t.value,l=vo(t)):Ls(t)?(c=()=>t,s=!0):Q(t)?(u=!0,l=t.some(k=>Ls(k)||vo(k)),c=()=>t.map(k=>{if(Ge(k))return k.value;if(Ls(k))return ts(k);if(Z(k))return Mn(k,a,2)})):Z(t)?e?c=()=>Mn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),Rt(t,a,3,[d])}:c=Ut,e&&s){const k=c;c=()=>ts(k())}let h,d=k=>{h=A.onStop=()=>{Mn(k,a,4)}},g;if(Qr)if(d=Ut,e?n&&Rt(e,a,3,[c(),u?[]:void 0,d]):c(),r==="sync"){const k=Iw();g=k.__watcherHandles||(k.__watcherHandles=[])}else return Ut;let m=u?new Array(t.length).fill(Hi):Hi;const v=()=>{if(A.active)if(e){const k=A.run();(s||l||(u?k.some((V,ee)=>Hr(V,m[ee])):Hr(k,m)))&&(h&&h(),Rt(e,a,3,[k,m===Hi?void 0:u&&m[0]===Hi?[]:m,d]),m=k)}else A.run()};v.allowRecurse=!!e;let b;r==="sync"?b=v:r==="post"?b=()=>mt(v,a&&a.suspense):(v.pre=!0,a&&(v.id=a.uid),b=()=>Ml(v));const A=new Rl(c,b);e?n?v():m=A.run():r==="post"?mt(A.run.bind(A),a&&a.suspense):A.run();const M=()=>{A.stop(),a&&a.scope&&bl(a.scope.effects,A)};return g&&g.push(M),M}function S_(t,e,n){const s=this.proxy,r=Fe(t)?t.includes(".")?up(s,t):()=>s[t]:t.bind(s,s);let i;Z(e)?i=e:(i=e.handler,n=e);const o=Ne;Qs(this);const a=Ll(r,i.bind(s),n);return o?Qs(o):os(),a}function up(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function ts(t,e){if(!Ce(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ge(t))ts(t.value,e);else if(Q(t))for(let n=0;n<t.length;n++)ts(t[n],e);else if(xf(t)||Ms(t))t.forEach(n=>{ts(n,e)});else if(Uf(t))for(const n in t)ts(t[n],e);return t}function R_(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ra(()=>{t.isMounted=!0}),gp(()=>{t.isUnmounting=!0}),t}const Tt=[Function,Array],k_={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Tt,onEnter:Tt,onAfterEnter:Tt,onEnterCancelled:Tt,onBeforeLeave:Tt,onLeave:Tt,onAfterLeave:Tt,onLeaveCancelled:Tt,onBeforeAppear:Tt,onAppear:Tt,onAfterAppear:Tt,onAppearCancelled:Tt},setup(t,{slots:e}){const n=pw(),s=R_();let r;return()=>{const i=e.default&&dp(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const v of i)if(v.type!==Vt){o=v;break}}const a=ce(t),{mode:c}=a;if(s.isLeaving)return Wa(o);const l=Eh(o);if(!l)return Wa(o);const u=Rc(l,a,s,n);kc(l,u);const h=n.subTree,d=h&&Eh(h);let g=!1;const{getTransitionKey:m}=l.type;if(m){const v=m();r===void 0?r=v:v!==r&&(r=v,g=!0)}if(d&&d.type!==Vt&&(!Zn(l,d)||g)){const v=Rc(d,a,s,n);if(kc(d,v),c==="out-in")return s.isLeaving=!0,v.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},Wa(o);c==="in-out"&&l.type!==Vt&&(v.delayLeave=(b,A,M)=>{const k=hp(s,d);k[String(d.key)]=d,b._leaveCb=()=>{A(),b._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=M})}return o}}},D_=k_;function hp(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Rc(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:g,onLeaveCancelled:m,onBeforeAppear:v,onAppear:b,onAfterAppear:A,onAppearCancelled:M}=e,k=String(t.key),V=hp(n,t),ee=(z,we)=>{z&&Rt(z,s,9,we)},me=(z,we)=>{const ye=we[1];ee(z,we),Q(z)?z.every(Ye=>Ye.length<=1)&&ye():z.length<=1&&ye()},ke={mode:i,persisted:o,beforeEnter(z){let we=a;if(!n.isMounted)if(r)we=v||a;else return;z._leaveCb&&z._leaveCb(!0);const ye=V[k];ye&&Zn(t,ye)&&ye.el._leaveCb&&ye.el._leaveCb(),ee(we,[z])},enter(z){let we=c,ye=l,Ye=u;if(!n.isMounted)if(r)we=b||c,ye=A||l,Ye=M||u;else return;let Je=!1;const kt=z._enterCb=cn=>{Je||(Je=!0,cn?ee(Ye,[z]):ee(ye,[z]),ke.delayedLeave&&ke.delayedLeave(),z._enterCb=void 0)};we?me(we,[z,kt]):kt()},leave(z,we){const ye=String(t.key);if(z._enterCb&&z._enterCb(!0),n.isUnmounting)return we();ee(h,[z]);let Ye=!1;const Je=z._leaveCb=kt=>{Ye||(Ye=!0,we(),kt?ee(m,[z]):ee(g,[z]),z._leaveCb=void 0,V[ye]===t&&delete V[ye])};V[ye]=t,d?me(d,[z,Je]):Je()},clone(z){return Rc(z,e,n,s)}};return ke}function Wa(t){if(na(t))return t=Vn(t),t.children=null,t}function Eh(t){return na(t)?t.children?t.children[0]:void 0:t}function kc(t,e){t.shapeFlag&6&&t.component?kc(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function dp(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===De?(o.patchFlag&128&&r++,s=s.concat(dp(o.children,e,a))):(e||o.type!==Vt)&&s.push(a!=null?Vn(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function fp(t){return Z(t)?{setup:t,name:t.name}:t}const io=t=>!!t.type.__asyncLoader,na=t=>t.type.__isKeepAlive;function N_(t,e){pp(t,"a",e)}function O_(t,e){pp(t,"da",e)}function pp(t,e,n=Ne){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(sa(e,s,n),n){let r=n.parent;for(;r&&r.parent;)na(r.parent.vnode)&&P_(s,e,n,r),r=r.parent}}function P_(t,e,n,s){const r=sa(e,t,s,!0);mp(()=>{bl(s[e],r)},n)}function sa(t,e,n=Ne,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;cr(),Qs(n);const a=Rt(e,n,t,o);return os(),lr(),a});return s?r.unshift(i):r.push(i),i}}const Tn=t=>(e,n=Ne)=>(!Qr||t==="sp")&&sa(t,(...s)=>e(...s),n),x_=Tn("bm"),ra=Tn("m"),M_=Tn("bu"),L_=Tn("u"),gp=Tn("bum"),mp=Tn("um"),U_=Tn("sp"),F_=Tn("rtg"),$_=Tn("rtc");function V_(t,e=Ne){sa("ec",t,e)}function bt(t,e){const n=wt;if(n===null)return t;const s=ca(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Ee]=e[i];o&&(Z(o)&&(o={mounted:o,updated:o}),o.deep&&ts(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Gn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(cr(),Rt(c,n,8,[t.el,a,t,e]),lr())}}const yp="components";function ia(t,e){return j_(yp,t,!0,e)||t}const B_=Symbol();function j_(t,e,n=!0,s=!1){const r=wt||Ne;if(r){const i=r.type;if(t===yp){const a=_w(i,!1);if(a&&(a===e||a===sn(e)||a===Xo(sn(e))))return i}const o=Ih(r[t]||i[t],e)||Ih(r.appContext[t],e);return!o&&s?i:o}}function Ih(t,e){return t&&(t[e]||t[sn(e)]||t[Xo(sn(e))])}function us(t,e,n,s){let r;const i=n&&n[s];if(Q(t)||Fe(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(Ce(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const Dc=t=>t?Rp(t)?ca(t)||t.proxy:Dc(t.parent):null,xr=at(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Dc(t.parent),$root:t=>Dc(t.root),$emit:t=>t.emit,$options:t=>Ul(t),$forceUpdate:t=>t.f||(t.f=()=>Ml(t.update)),$nextTick:t=>t.n||(t.n=rp.bind(t.proxy)),$watch:t=>S_.bind(t)}),Ga=(t,e)=>t!==Ee&&!t.__isScriptSetup&&oe(t,e),H_={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(Ga(s,e))return o[e]=1,s[e];if(r!==Ee&&oe(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&oe(l,e))return o[e]=3,i[e];if(n!==Ee&&oe(n,e))return o[e]=4,n[e];Nc&&(o[e]=0)}}const u=xr[e];let h,d;if(u)return e==="$attrs"&&vt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ee&&oe(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,oe(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return Ga(r,e)?(r[e]=n,!0):s!==Ee&&oe(s,e)?(s[e]=n,!0):oe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==Ee&&oe(t,o)||Ga(e,o)||(a=i[0])&&oe(a,o)||oe(s,o)||oe(xr,o)||oe(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:oe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Nc=!0;function q_(t){const e=Ul(t),n=t.proxy,s=t.ctx;Nc=!1,e.beforeCreate&&Th(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:g,updated:m,activated:v,deactivated:b,beforeDestroy:A,beforeUnmount:M,destroyed:k,unmounted:V,render:ee,renderTracked:me,renderTriggered:ke,errorCaptured:z,serverPrefetch:we,expose:ye,inheritAttrs:Ye,components:Je,directives:kt,filters:cn}=e;if(l&&z_(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const ve in o){const fe=o[ve];Z(fe)&&(s[ve]=fe.bind(n))}if(r){const ve=r.call(n,n);Ce(ve)&&(t.data=di(ve))}if(Nc=!0,i)for(const ve in i){const fe=i[ve],Dt=Z(fe)?fe.bind(n,n):Z(fe.get)?fe.get.bind(n,n):Ut,Wn=!Z(fe)&&Z(fe.set)?fe.set.bind(n):Ut,Nt=ft({get:Dt,set:Wn});Object.defineProperty(s,ve,{enumerable:!0,configurable:!0,get:()=>Nt.value,set:gt=>Nt.value=gt})}if(a)for(const ve in a)vp(a[ve],s,n,ve);if(c){const ve=Z(c)?c.call(n):c;Reflect.ownKeys(ve).forEach(fe=>{ro(fe,ve[fe])})}u&&Th(u,t,"c");function Oe(ve,fe){Q(fe)?fe.forEach(Dt=>ve(Dt.bind(n))):fe&&ve(fe.bind(n))}if(Oe(x_,h),Oe(ra,d),Oe(M_,g),Oe(L_,m),Oe(N_,v),Oe(O_,b),Oe(V_,z),Oe($_,me),Oe(F_,ke),Oe(gp,M),Oe(mp,V),Oe(U_,we),Q(ye))if(ye.length){const ve=t.exposed||(t.exposed={});ye.forEach(fe=>{Object.defineProperty(ve,fe,{get:()=>n[fe],set:Dt=>n[fe]=Dt})})}else t.exposed||(t.exposed={});ee&&t.render===Ut&&(t.render=ee),Ye!=null&&(t.inheritAttrs=Ye),Je&&(t.components=Je),kt&&(t.directives=kt)}function z_(t,e,n=Ut,s=!1){Q(t)&&(t=Oc(t));for(const r in t){const i=t[r];let o;Ce(i)?"default"in i?o=Jt(i.from||r,i.default,!0):o=Jt(i.from||r):o=Jt(i),Ge(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Th(t,e,n){Rt(Q(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function vp(t,e,n,s){const r=s.includes(".")?up(n,s):()=>n[s];if(Fe(t)){const i=e[t];Z(i)&&Fs(r,i)}else if(Z(t))Fs(r,t.bind(n));else if(Ce(t))if(Q(t))t.forEach(i=>vp(i,e,n,s));else{const i=Z(t.handler)?t.handler.bind(n):e[t.handler];Z(i)&&Fs(r,i,t)}}function Ul(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>wo(c,l,o,!0)),wo(c,e,o)),Ce(e)&&i.set(e,c),c}function wo(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&wo(t,i,n,!0),r&&r.forEach(o=>wo(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=K_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const K_={data:bh,props:Xn,emits:Xn,methods:Xn,computed:Xn,beforeCreate:ht,created:ht,beforeMount:ht,mounted:ht,beforeUpdate:ht,updated:ht,beforeDestroy:ht,beforeUnmount:ht,destroyed:ht,unmounted:ht,activated:ht,deactivated:ht,errorCaptured:ht,serverPrefetch:ht,components:Xn,directives:Xn,watch:G_,provide:bh,inject:W_};function bh(t,e){return e?t?function(){return at(Z(t)?t.call(this,this):t,Z(e)?e.call(this,this):e)}:e:t}function W_(t,e){return Xn(Oc(t),Oc(e))}function Oc(t){if(Q(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ht(t,e){return t?[...new Set([].concat(t,e))]:e}function Xn(t,e){return t?at(at(Object.create(null),t),e):e}function G_(t,e){if(!t)return e;if(!e)return t;const n=at(Object.create(null),t);for(const s in e)n[s]=ht(t[s],e[s]);return n}function Q_(t,e,n,s=!1){const r={},i={};mo(i,aa,1),t.propsDefaults=Object.create(null),_p(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:a_(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function X_(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=ce(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Zo(t.emitsOptions,d))continue;const g=e[d];if(c)if(oe(i,d))g!==i[d]&&(i[d]=g,l=!0);else{const m=sn(d);r[m]=Pc(c,a,m,g,t,!1)}else g!==i[d]&&(i[d]=g,l=!0)}}}else{_p(t,e,r,i)&&(l=!0);let u;for(const h in a)(!e||!oe(e,h)&&((u=ar(h))===h||!oe(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=Pc(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!oe(e,h))&&(delete i[h],l=!0)}l&&mn(t,"set","$attrs")}function _p(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(no(c))continue;const l=e[c];let u;r&&oe(r,u=sn(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Zo(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=ce(n),l=a||Ee;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Pc(r,c,h,l[h],t,!oe(l,h))}}return o}function Pc(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=oe(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&Z(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(Qs(r),s=l[n]=c.call(null,e),os())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===ar(n))&&(s=!0))}return s}function wp(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!Z(t)){const u=h=>{c=!0;const[d,g]=wp(h,e,!0);at(o,d),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return Ce(t)&&s.set(t,xs),xs;if(Q(i))for(let u=0;u<i.length;u++){const h=sn(i[u]);Ch(h)&&(o[h]=Ee)}else if(i)for(const u in i){const h=sn(u);if(Ch(h)){const d=i[u],g=o[h]=Q(d)||Z(d)?{type:d}:Object.assign({},d);if(g){const m=Rh(Boolean,g.type),v=Rh(String,g.type);g[0]=m>-1,g[1]=v<0||m<v,(m>-1||oe(g,"default"))&&a.push(h)}}}const l=[o,a];return Ce(t)&&s.set(t,l),l}function Ch(t){return t[0]!=="$"}function Ah(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Sh(t,e){return Ah(t)===Ah(e)}function Rh(t,e){return Q(e)?e.findIndex(n=>Sh(n,t)):Z(e)&&Sh(e,t)?0:-1}const Ep=t=>t[0]==="_"||t==="$stable",Fl=t=>Q(t)?t.map(Gt):[Gt(t)],Y_=(t,e,n)=>{if(e._n)return e;const s=ta((...r)=>Fl(e(...r)),n);return s._c=!1,s},Ip=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Ep(r))continue;const i=t[r];if(Z(i))e[r]=Y_(r,i,s);else if(i!=null){const o=Fl(i);e[r]=()=>o}}},Tp=(t,e)=>{const n=Fl(e);t.slots.default=()=>n},J_=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ce(e),mo(e,"_",n)):Ip(e,t.slots={})}else t.slots={},e&&Tp(t,e);mo(t.slots,aa,1)},Z_=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=Ee;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(at(r,e),!n&&a===1&&delete r._):(i=!e.$stable,Ip(e,r)),o=e}else e&&(Tp(t,e),o={default:1});if(i)for(const a in r)!Ep(a)&&!(a in o)&&delete r[a]};function bp(){return{app:null,config:{isNativeTag:bv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ew=0;function tw(t,e){return function(s,r=null){Z(s)||(s=Object.assign({},s)),r!=null&&!Ce(r)&&(r=null);const i=bp(),o=new Set;let a=!1;const c=i.app={_uid:ew++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Tw,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&Z(l.install)?(o.add(l),l.install(c,...u)):Z(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=Be(s,r);return d.appContext=i,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,ca(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function xc(t,e,n,s,r=!1){if(Q(t)){t.forEach((d,g)=>xc(d,e&&(Q(e)?e[g]:e),n,s,r));return}if(io(s)&&!r)return;const i=s.shapeFlag&4?ca(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Ee?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Fe(l)?(u[l]=null,oe(h,l)&&(h[l]=null)):Ge(l)&&(l.value=null)),Z(c))Mn(c,a,12,[o,u]);else{const d=Fe(c),g=Ge(c);if(d||g){const m=()=>{if(t.f){const v=d?oe(h,c)?h[c]:u[c]:c.value;r?Q(v)&&bl(v,i):Q(v)?v.includes(i)||v.push(i):d?(u[c]=[i],oe(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,oe(h,c)&&(h[c]=o)):g&&(c.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,mt(m,n)):m()}}}const mt=A_;function nw(t){return sw(t)}function sw(t,e){const n=Dv();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:g=Ut,insertStaticContent:m}=t,v=(f,p,y,_=null,I=null,D=null,x=!1,R=null,N=!!p.dynamicChildren)=>{if(f===p)return;f&&!Zn(f,p)&&(_=O(f),gt(f,I,D,!0),f=null),p.patchFlag===-2&&(N=!1,p.dynamicChildren=null);const{type:T,ref:H,shapeFlag:F}=p;switch(T){case oa:b(f,p,y,_);break;case Vt:A(f,p,y,_);break;case Qa:f==null&&M(p,y,_,x);break;case De:Je(f,p,y,_,I,D,x,R,N);break;default:F&1?ee(f,p,y,_,I,D,x,R,N):F&6?kt(f,p,y,_,I,D,x,R,N):(F&64||F&128)&&T.process(f,p,y,_,I,D,x,R,N,ie)}H!=null&&I&&xc(H,f&&f.ref,D,p||f,!p)},b=(f,p,y,_)=>{if(f==null)s(p.el=a(p.children),y,_);else{const I=p.el=f.el;p.children!==f.children&&l(I,p.children)}},A=(f,p,y,_)=>{f==null?s(p.el=c(p.children||""),y,_):p.el=f.el},M=(f,p,y,_)=>{[f.el,f.anchor]=m(f.children,p,y,_,f.el,f.anchor)},k=({el:f,anchor:p},y,_)=>{let I;for(;f&&f!==p;)I=d(f),s(f,y,_),f=I;s(p,y,_)},V=({el:f,anchor:p})=>{let y;for(;f&&f!==p;)y=d(f),r(f),f=y;r(p)},ee=(f,p,y,_,I,D,x,R,N)=>{x=x||p.type==="svg",f==null?me(p,y,_,I,D,x,R,N):we(f,p,I,D,x,R,N)},me=(f,p,y,_,I,D,x,R)=>{let N,T;const{type:H,props:F,shapeFlag:q,transition:X,dirs:ne}=f;if(N=f.el=o(f.type,D,F&&F.is,F),q&8?u(N,f.children):q&16&&z(f.children,N,null,_,I,D&&H!=="foreignObject",x,R),ne&&Gn(f,null,_,"created"),ke(N,f,f.scopeId,x,_),F){for(const pe in F)pe!=="value"&&!no(pe)&&i(N,pe,null,F[pe],D,f.children,_,I,L);"value"in F&&i(N,"value",null,F.value),(T=F.onVnodeBeforeMount)&&Wt(T,_,f)}ne&&Gn(f,null,_,"beforeMount");const _e=(!I||I&&!I.pendingBranch)&&X&&!X.persisted;_e&&X.beforeEnter(N),s(N,p,y),((T=F&&F.onVnodeMounted)||_e||ne)&&mt(()=>{T&&Wt(T,_,f),_e&&X.enter(N),ne&&Gn(f,null,_,"mounted")},I)},ke=(f,p,y,_,I)=>{if(y&&g(f,y),_)for(let D=0;D<_.length;D++)g(f,_[D]);if(I){let D=I.subTree;if(p===D){const x=I.vnode;ke(f,x,x.scopeId,x.slotScopeIds,I.parent)}}},z=(f,p,y,_,I,D,x,R,N=0)=>{for(let T=N;T<f.length;T++){const H=f[T]=R?Sn(f[T]):Gt(f[T]);v(null,H,p,y,_,I,D,x,R)}},we=(f,p,y,_,I,D,x)=>{const R=p.el=f.el;let{patchFlag:N,dynamicChildren:T,dirs:H}=p;N|=f.patchFlag&16;const F=f.props||Ee,q=p.props||Ee;let X;y&&Qn(y,!1),(X=q.onVnodeBeforeUpdate)&&Wt(X,y,p,f),H&&Gn(p,f,y,"beforeUpdate"),y&&Qn(y,!0);const ne=I&&p.type!=="foreignObject";if(T?ye(f.dynamicChildren,T,R,y,_,ne,D):x||fe(f,p,R,null,y,_,ne,D,!1),N>0){if(N&16)Ye(R,p,F,q,y,_,I);else if(N&2&&F.class!==q.class&&i(R,"class",null,q.class,I),N&4&&i(R,"style",F.style,q.style,I),N&8){const _e=p.dynamicProps;for(let pe=0;pe<_e.length;pe++){const Pe=_e[pe],Ot=F[Pe],Cs=q[Pe];(Cs!==Ot||Pe==="value")&&i(R,Pe,Ot,Cs,I,f.children,y,_,L)}}N&1&&f.children!==p.children&&u(R,p.children)}else!x&&T==null&&Ye(R,p,F,q,y,_,I);((X=q.onVnodeUpdated)||H)&&mt(()=>{X&&Wt(X,y,p,f),H&&Gn(p,f,y,"updated")},_)},ye=(f,p,y,_,I,D,x)=>{for(let R=0;R<p.length;R++){const N=f[R],T=p[R],H=N.el&&(N.type===De||!Zn(N,T)||N.shapeFlag&70)?h(N.el):y;v(N,T,H,null,_,I,D,x,!0)}},Ye=(f,p,y,_,I,D,x)=>{if(y!==_){if(y!==Ee)for(const R in y)!no(R)&&!(R in _)&&i(f,R,y[R],null,x,p.children,I,D,L);for(const R in _){if(no(R))continue;const N=_[R],T=y[R];N!==T&&R!=="value"&&i(f,R,T,N,x,p.children,I,D,L)}"value"in _&&i(f,"value",y.value,_.value)}},Je=(f,p,y,_,I,D,x,R,N)=>{const T=p.el=f?f.el:a(""),H=p.anchor=f?f.anchor:a("");let{patchFlag:F,dynamicChildren:q,slotScopeIds:X}=p;X&&(R=R?R.concat(X):X),f==null?(s(T,y,_),s(H,y,_),z(p.children,y,H,I,D,x,R,N)):F>0&&F&64&&q&&f.dynamicChildren?(ye(f.dynamicChildren,q,y,I,D,x,R),(p.key!=null||I&&p===I.subTree)&&Cp(f,p,!0)):fe(f,p,y,H,I,D,x,R,N)},kt=(f,p,y,_,I,D,x,R,N)=>{p.slotScopeIds=R,f==null?p.shapeFlag&512?I.ctx.activate(p,y,_,x,N):cn(p,y,_,I,D,x,N):wr(f,p,N)},cn=(f,p,y,_,I,D,x)=>{const R=f.component=fw(f,_,I);if(na(f)&&(R.ctx.renderer=ie),gw(R),R.asyncDep){if(I&&I.registerDep(R,Oe),!f.el){const N=R.subTree=Be(Vt);A(null,N,p,y)}return}Oe(R,f,p,y,I,D,x)},wr=(f,p,y)=>{const _=p.component=f.component;if(T_(f,p,y))if(_.asyncDep&&!_.asyncResolved){ve(_,p,y);return}else _.next=p,y_(_.update),_.update();else p.el=f.el,_.vnode=p},Oe=(f,p,y,_,I,D,x)=>{const R=()=>{if(f.isMounted){let{next:H,bu:F,u:q,parent:X,vnode:ne}=f,_e=H,pe;Qn(f,!1),H?(H.el=ne.el,ve(f,H,x)):H=ne,F&&so(F),(pe=H.props&&H.props.onVnodeBeforeUpdate)&&Wt(pe,X,H,ne),Qn(f,!0);const Pe=Ka(f),Ot=f.subTree;f.subTree=Pe,v(Ot,Pe,h(Ot.el),O(Ot),f,I,D),H.el=Pe.el,_e===null&&b_(f,Pe.el),q&&mt(q,I),(pe=H.props&&H.props.onVnodeUpdated)&&mt(()=>Wt(pe,X,H,ne),I)}else{let H;const{el:F,props:q}=p,{bm:X,m:ne,parent:_e}=f,pe=io(p);if(Qn(f,!1),X&&so(X),!pe&&(H=q&&q.onVnodeBeforeMount)&&Wt(H,_e,p),Qn(f,!0),F&&te){const Pe=()=>{f.subTree=Ka(f),te(F,f.subTree,f,I,null)};pe?p.type.__asyncLoader().then(()=>!f.isUnmounted&&Pe()):Pe()}else{const Pe=f.subTree=Ka(f);v(null,Pe,y,_,f,I,D),p.el=Pe.el}if(ne&&mt(ne,I),!pe&&(H=q&&q.onVnodeMounted)){const Pe=p;mt(()=>Wt(H,_e,Pe),I)}(p.shapeFlag&256||_e&&io(_e.vnode)&&_e.vnode.shapeFlag&256)&&f.a&&mt(f.a,I),f.isMounted=!0,p=y=_=null}},N=f.effect=new Rl(R,()=>Ml(T),f.scope),T=f.update=()=>N.run();T.id=f.uid,Qn(f,!0),T()},ve=(f,p,y)=>{p.component=f;const _=f.vnode.props;f.vnode=p,f.next=null,X_(f,p.props,_,y),Z_(f,p.children,y),cr(),_h(),lr()},fe=(f,p,y,_,I,D,x,R,N=!1)=>{const T=f&&f.children,H=f?f.shapeFlag:0,F=p.children,{patchFlag:q,shapeFlag:X}=p;if(q>0){if(q&128){Wn(T,F,y,_,I,D,x,R,N);return}else if(q&256){Dt(T,F,y,_,I,D,x,R,N);return}}X&8?(H&16&&L(T,I,D),F!==T&&u(y,F)):H&16?X&16?Wn(T,F,y,_,I,D,x,R,N):L(T,I,D,!0):(H&8&&u(y,""),X&16&&z(F,y,_,I,D,x,R,N))},Dt=(f,p,y,_,I,D,x,R,N)=>{f=f||xs,p=p||xs;const T=f.length,H=p.length,F=Math.min(T,H);let q;for(q=0;q<F;q++){const X=p[q]=N?Sn(p[q]):Gt(p[q]);v(f[q],X,y,null,I,D,x,R,N)}T>H?L(f,I,D,!0,!1,F):z(p,y,_,I,D,x,R,N,F)},Wn=(f,p,y,_,I,D,x,R,N)=>{let T=0;const H=p.length;let F=f.length-1,q=H-1;for(;T<=F&&T<=q;){const X=f[T],ne=p[T]=N?Sn(p[T]):Gt(p[T]);if(Zn(X,ne))v(X,ne,y,null,I,D,x,R,N);else break;T++}for(;T<=F&&T<=q;){const X=f[F],ne=p[q]=N?Sn(p[q]):Gt(p[q]);if(Zn(X,ne))v(X,ne,y,null,I,D,x,R,N);else break;F--,q--}if(T>F){if(T<=q){const X=q+1,ne=X<H?p[X].el:_;for(;T<=q;)v(null,p[T]=N?Sn(p[T]):Gt(p[T]),y,ne,I,D,x,R,N),T++}}else if(T>q)for(;T<=F;)gt(f[T],I,D,!0),T++;else{const X=T,ne=T,_e=new Map;for(T=ne;T<=q;T++){const _t=p[T]=N?Sn(p[T]):Gt(p[T]);_t.key!=null&&_e.set(_t.key,T)}let pe,Pe=0;const Ot=q-ne+1;let Cs=!1,ch=0;const Er=new Array(Ot);for(T=0;T<Ot;T++)Er[T]=0;for(T=X;T<=F;T++){const _t=f[T];if(Pe>=Ot){gt(_t,I,D,!0);continue}let Kt;if(_t.key!=null)Kt=_e.get(_t.key);else for(pe=ne;pe<=q;pe++)if(Er[pe-ne]===0&&Zn(_t,p[pe])){Kt=pe;break}Kt===void 0?gt(_t,I,D,!0):(Er[Kt-ne]=T+1,Kt>=ch?ch=Kt:Cs=!0,v(_t,p[Kt],y,null,I,D,x,R,N),Pe++)}const lh=Cs?rw(Er):xs;for(pe=lh.length-1,T=Ot-1;T>=0;T--){const _t=ne+T,Kt=p[_t],uh=_t+1<H?p[_t+1].el:_;Er[T]===0?v(null,Kt,y,uh,I,D,x,R,N):Cs&&(pe<0||T!==lh[pe]?Nt(Kt,y,uh,2):pe--)}}},Nt=(f,p,y,_,I=null)=>{const{el:D,type:x,transition:R,children:N,shapeFlag:T}=f;if(T&6){Nt(f.component.subTree,p,y,_);return}if(T&128){f.suspense.move(p,y,_);return}if(T&64){x.move(f,p,y,ie);return}if(x===De){s(D,p,y);for(let F=0;F<N.length;F++)Nt(N[F],p,y,_);s(f.anchor,p,y);return}if(x===Qa){k(f,p,y);return}if(_!==2&&T&1&&R)if(_===0)R.beforeEnter(D),s(D,p,y),mt(()=>R.enter(D),I);else{const{leave:F,delayLeave:q,afterLeave:X}=R,ne=()=>s(D,p,y),_e=()=>{F(D,()=>{ne(),X&&X()})};q?q(D,ne,_e):_e()}else s(D,p,y)},gt=(f,p,y,_=!1,I=!1)=>{const{type:D,props:x,ref:R,children:N,dynamicChildren:T,shapeFlag:H,patchFlag:F,dirs:q}=f;if(R!=null&&xc(R,null,y,f,!0),H&256){p.ctx.deactivate(f);return}const X=H&1&&q,ne=!io(f);let _e;if(ne&&(_e=x&&x.onVnodeBeforeUnmount)&&Wt(_e,p,f),H&6)E(f.component,y,_);else{if(H&128){f.suspense.unmount(y,_);return}X&&Gn(f,null,p,"beforeUnmount"),H&64?f.type.remove(f,p,y,I,ie,_):T&&(D!==De||F>0&&F&64)?L(T,p,y,!1,!0):(D===De&&F&384||!I&&H&16)&&L(N,p,y),_&&bs(f)}(ne&&(_e=x&&x.onVnodeUnmounted)||X)&&mt(()=>{_e&&Wt(_e,p,f),X&&Gn(f,null,p,"unmounted")},y)},bs=f=>{const{type:p,el:y,anchor:_,transition:I}=f;if(p===De){Ui(y,_);return}if(p===Qa){V(f);return}const D=()=>{r(y),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(f.shapeFlag&1&&I&&!I.persisted){const{leave:x,delayLeave:R}=I,N=()=>x(y,D);R?R(f.el,D,N):N()}else D()},Ui=(f,p)=>{let y;for(;f!==p;)y=d(f),r(f),f=y;r(p)},E=(f,p,y)=>{const{bum:_,scope:I,update:D,subTree:x,um:R}=f;_&&so(_),I.stop(),D&&(D.active=!1,gt(x,f,p,y)),R&&mt(R,p),mt(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},L=(f,p,y,_=!1,I=!1,D=0)=>{for(let x=D;x<f.length;x++)gt(f[x],p,y,_,I)},O=f=>f.shapeFlag&6?O(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),B=(f,p,y)=>{f==null?p._vnode&&gt(p._vnode,null,null,!0):v(p._vnode||null,f,p,null,null,null,y),_h(),op(),p._vnode=f},ie={p:v,um:gt,m:Nt,r:bs,mt:cn,mc:z,pc:fe,pbc:ye,n:O,o:t};let Ae,te;return e&&([Ae,te]=e(ie)),{render:B,hydrate:Ae,createApp:tw(B,Ae)}}function Qn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Cp(t,e,n=!1){const s=t.children,r=e.children;if(Q(s)&&Q(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=Sn(r[i]),a.el=o.el),n||Cp(o,a)),a.type===oa&&(a.el=o.el)}}function rw(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const iw=t=>t.__isTeleport,De=Symbol(void 0),oa=Symbol(void 0),Vt=Symbol(void 0),Qa=Symbol(void 0),Mr=[];let Mt=null;function ae(t=!1){Mr.push(Mt=t?null:[])}function ow(){Mr.pop(),Mt=Mr[Mr.length-1]||null}let Wr=1;function kh(t){Wr+=t}function Ap(t){return t.dynamicChildren=Wr>0?Mt||xs:null,ow(),Wr>0&&Mt&&Mt.push(t),t}function ge(t,e,n,s,r,i){return Ap(S(t,e,n,s,r,i,!0))}function Gr(t,e,n,s,r){return Ap(Be(t,e,n,s,r,!0))}function Mc(t){return t?t.__v_isVNode===!0:!1}function Zn(t,e){return t.type===e.type&&t.key===e.key}const aa="__vInternal",Sp=({key:t})=>t??null,oo=({ref:t,ref_key:e,ref_for:n})=>t!=null?Fe(t)||Ge(t)||Z(t)?{i:wt,r:t,k:e,f:!!n}:t:null;function S(t,e=null,n=null,s=0,r=null,i=t===De?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Sp(e),ref:e&&oo(e),scopeId:ea,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:wt};return a?($l(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Fe(n)?8:16),Wr>0&&!o&&Mt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Mt.push(c),c}const Be=aw;function aw(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===B_)&&(t=Vt),Mc(t)){const a=Vn(t,e,!0);return n&&$l(a,n),Wr>0&&!i&&Mt&&(a.shapeFlag&6?Mt[Mt.indexOf(t)]=a:Mt.push(a)),a.patchFlag|=-2,a}if(ww(t)&&(t=t.__vccOpts),e){e=cw(e);let{class:a,style:c}=e;a&&!Fe(a)&&(e.class=Il(a)),Ce(c)&&(Qf(c)&&!Q(c)&&(c=at({},c)),e.style=El(c))}const o=Fe(t)?1:C_(t)?128:iw(t)?64:Ce(t)?4:Z(t)?2:0;return S(t,e,n,s,r,o,i,!0)}function cw(t){return t?Qf(t)||aa in t?at({},t):t:null}function Vn(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?uw(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Sp(a),ref:e&&e.ref?n&&r?Q(r)?r.concat(oo(e)):[r,oo(e)]:oo(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==De?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Vn(t.ssContent),ssFallback:t.ssFallback&&Vn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function dt(t=" ",e=0){return Be(oa,null,t,e)}function lw(t="",e=!1){return e?(ae(),Gr(Vt,null,t)):Be(Vt,null,t)}function Gt(t){return t==null||typeof t=="boolean"?Be(Vt):Q(t)?Be(De,null,t.slice()):typeof t=="object"?Sn(t):Be(oa,null,String(t))}function Sn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Vn(t)}function $l(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(Q(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),$l(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(aa in e)?e._ctx=wt:r===3&&wt&&(wt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Z(e)?(e={default:e,_ctx:wt},n=32):(e=String(e),s&64?(n=16,e=[dt(e)]):n=8);t.children=e,t.shapeFlag|=n}function uw(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Il([e.class,s.class]));else if(r==="style")e.style=El([e.style,s.style]);else if(Wo(r)){const i=e[r],o=s[r];o&&i!==o&&!(Q(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Wt(t,e,n,s=null){Rt(t,e,7,[n,s])}const hw=bp();let dw=0;function fw(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||hw,i={uid:dw++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Nv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:wp(s,r),emitsOptions:cp(s,r),emit:null,emitted:null,propsDefaults:Ee,inheritAttrs:s.inheritAttrs,ctx:Ee,data:Ee,props:Ee,attrs:Ee,slots:Ee,refs:Ee,setupState:Ee,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=w_.bind(null,i),t.ce&&t.ce(i),i}let Ne=null;const pw=()=>Ne||wt,Qs=t=>{Ne=t,t.scope.on()},os=()=>{Ne&&Ne.scope.off(),Ne=null};function Rp(t){return t.vnode.shapeFlag&4}let Qr=!1;function gw(t,e=!1){Qr=e;const{props:n,children:s}=t.vnode,r=Rp(t);Q_(t,n,r,e),J_(t,s);const i=r?mw(t,e):void 0;return Qr=!1,i}function mw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Xf(new Proxy(t.ctx,H_));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?vw(t):null;Qs(t),cr();const i=Mn(s,t,0,[t.props,r]);if(lr(),os(),Mf(i)){if(i.then(os,os),e)return i.then(o=>{Dh(t,o,e)}).catch(o=>{Jo(o,t,0)});t.asyncDep=i}else Dh(t,i,e)}else kp(t,e)}function Dh(t,e,n){Z(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ce(e)&&(t.setupState=ep(e)),kp(t,n)}let Nh;function kp(t,e,n){const s=t.type;if(!t.render){if(!e&&Nh&&!s.render){const r=s.template||Ul(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=at(at({isCustomElement:i,delimiters:a},o),c);s.render=Nh(r,l)}}t.render=s.render||Ut}Qs(t),cr(),q_(t),lr(),os()}function yw(t){return new Proxy(t.attrs,{get(e,n){return vt(t,"get","$attrs"),e[n]}})}function vw(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=yw(t))},slots:t.slots,emit:t.emit,expose:e}}function ca(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(ep(Xf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in xr)return xr[n](t)},has(e,n){return n in e||n in xr}}))}function _w(t,e=!0){return Z(t)?t.displayName||t.name:t.name||e&&t.__name}function ww(t){return Z(t)&&"__vccOpts"in t}const ft=(t,e)=>p_(t,e,Qr);function Dp(t,e,n){const s=arguments.length;return s===2?Ce(e)&&!Q(e)?Mc(e)?Be(t,null,[e]):Be(t,e):Be(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Mc(n)&&(n=[n]),Be(t,e,n))}const Ew=Symbol(""),Iw=()=>Jt(Ew),Tw="3.2.47",bw="http://www.w3.org/2000/svg",es=typeof document<"u"?document:null,Oh=es&&es.createElement("template"),Cw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?es.createElementNS(bw,t):es.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>es.createTextNode(t),createComment:t=>es.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>es.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Oh.innerHTML=s?`<svg>${t}</svg>`:t;const a=Oh.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Aw(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Sw(t,e,n){const s=t.style,r=Fe(n);if(n&&!r){if(e&&!Fe(e))for(const i in e)n[i]==null&&Lc(s,i,"");for(const i in n)Lc(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const Ph=/\s*!important$/;function Lc(t,e,n){if(Q(n))n.forEach(s=>Lc(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Rw(t,e);Ph.test(n)?t.setProperty(ar(s),n.replace(Ph,""),"important"):t[s]=n}}const xh=["Webkit","Moz","ms"],Xa={};function Rw(t,e){const n=Xa[e];if(n)return n;let s=sn(e);if(s!=="filter"&&s in t)return Xa[e]=s;s=Xo(s);for(let r=0;r<xh.length;r++){const i=xh[r]+s;if(i in t)return Xa[e]=i}return e}const Mh="http://www.w3.org/1999/xlink";function kw(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Mh,e.slice(6,e.length)):t.setAttributeNS(Mh,e,n);else{const i=Tv(e);n==null||i&&!Of(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Dw(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Of(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Rs(t,e,n,s){t.addEventListener(e,n,s)}function Nw(t,e,n,s){t.removeEventListener(e,n,s)}function Ow(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=Pw(e);if(s){const l=i[e]=Lw(s,r);Rs(t,a,l,c)}else o&&(Nw(t,a,o,c),i[e]=void 0)}}const Lh=/(?:Once|Passive|Capture)$/;function Pw(t){let e;if(Lh.test(t)){e={};let s;for(;s=t.match(Lh);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ar(t.slice(2)),e]}let Ya=0;const xw=Promise.resolve(),Mw=()=>Ya||(xw.then(()=>Ya=0),Ya=Date.now());function Lw(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Rt(Uw(s,n.value),e,5,[s])};return n.value=t,n.attached=Mw(),n}function Uw(t,e){if(Q(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Uh=/^on[a-z]/,Fw=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?Aw(t,s,r):e==="style"?Sw(t,n,s):Wo(e)?Tl(e)||Ow(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):$w(t,e,s,r))?Dw(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),kw(t,e,s,r))};function $w(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Uh.test(e)&&Z(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Uh.test(e)&&Fe(n)?!1:e in t}const Vw={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};D_.props;const Fh=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Q(e)?n=>so(e,n):e};function Bw(t){t.target.composing=!0}function $h(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ct={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=Fh(r);const i=s||r.props&&r.props.type==="number";Rs(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Tc(a)),t._assign(a)}),n&&Rs(t,"change",()=>{t.value=t.value.trim()}),e||(Rs(t,"compositionstart",Bw),Rs(t,"compositionend",$h),Rs(t,"change",$h))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=Fh(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&Tc(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},jw=["ctrl","shift","alt","meta"],Hw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>jw.some(n=>t[`${n}Key`]&&!e.includes(n))},qw=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=Hw[e[r]];if(i&&i(n,e))return}return t(n,...s)},zw=at({patchProp:Fw},Cw);let Vh;function Kw(){return Vh||(Vh=nw(zw))}const Ww=(...t)=>{const e=Kw().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Gw(s);if(!r)return;const i=e._component;!Z(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Gw(t){return Fe(t)?document.querySelector(t):t}const on=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},Qw={};function Xw(t,e){const n=ia("router-view");return ae(),Gr(n)}const Yw=on(Qw,[["render",Xw]]);/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const ks=typeof window<"u";function Jw(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const he=Object.assign;function Ja(t,e){const n={};for(const s in e){const r=e[s];n[s]=jt(r)?r.map(t):t(r)}return n}const Lr=()=>{},jt=Array.isArray,Zw=/\/$/,eE=t=>t.replace(Zw,"");function Za(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=rE(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function tE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Bh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function nE(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Xs(e.matched[s],n.matched[r])&&Np(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Xs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Np(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!sE(t[n],e[n]))return!1;return!0}function sE(t,e){return jt(t)?jh(t,e):jt(e)?jh(e,t):t===e}function jh(t,e){return jt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function rE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var Xr;(function(t){t.pop="pop",t.push="push"})(Xr||(Xr={}));var Ur;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ur||(Ur={}));function iE(t){if(!t)if(ks){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),eE(t)}const oE=/^[^#]+#/;function aE(t,e){return t.replace(oE,"#")+e}function cE(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const la=()=>({left:window.pageXOffset,top:window.pageYOffset});function lE(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=cE(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Hh(t,e){return(history.state?history.state.position-e:-1)+t}const Uc=new Map;function uE(t,e){Uc.set(t,e)}function hE(t){const e=Uc.get(t);return Uc.delete(t),e}let dE=()=>location.protocol+"//"+location.host;function Op(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),Bh(c,"")}return Bh(n,t)+s+r}function fE(t,e,n,s){let r=[],i=[],o=null;const a=({state:d})=>{const g=Op(t,location),m=n.value,v=e.value;let b=0;if(d){if(n.value=g,e.value=d,o&&o===m){o=null;return}b=v?d.position-v.position:0}else s(g);r.forEach(A=>{A(n.value,m,{delta:b,type:Xr.pop,direction:b?b>0?Ur.forward:Ur.back:Ur.unknown})})};function c(){o=n.value}function l(d){r.push(d);const g=()=>{const m=r.indexOf(d);m>-1&&r.splice(m,1)};return i.push(g),g}function u(){const{history:d}=window;d.state&&d.replaceState(he({},d.state,{scroll:la()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function qh(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?la():null}}function pE(t){const{history:e,location:n}=window,s={value:Op(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:dE()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),r.value=l}catch(g){console.error(g),n[u?"replace":"assign"](d)}}function o(c,l){const u=he({},e.state,qh(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=he({},r.value,e.state,{forward:c,scroll:la()});i(u.current,u,!0);const h=he({},qh(s.value,c,null),{position:u.position+1},l);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function gE(t){t=iE(t);const e=pE(t),n=fE(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=he({location:"",base:t,go:s,createHref:aE.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function mE(t){return typeof t=="string"||t&&typeof t=="object"}function Pp(t){return typeof t=="string"||typeof t=="symbol"}const Cn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},xp=Symbol("");var zh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(zh||(zh={}));function Ys(t,e){return he(new Error,{type:t,[xp]:!0},e)}function ln(t,e){return t instanceof Error&&xp in t&&(e==null||!!(t.type&e))}const Kh="[^/]+?",yE={sensitive:!1,strict:!1,start:!0,end:!0},vE=/[.+*?^${}()[\]/\\]/g;function _E(t,e){const n=he({},yE,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const d=l[h];let g=40+(n.sensitive?.25:0);if(d.type===0)h||(r+="/"),r+=d.value.replace(vE,"\\$&"),g+=40;else if(d.type===1){const{value:m,repeatable:v,optional:b,regexp:A}=d;i.push({name:m,repeatable:v,optional:b});const M=A||Kh;if(M!==Kh){g+=10;try{new RegExp(`(${M})`)}catch(V){throw new Error(`Invalid custom RegExp for param "${m}" (${M}): `+V.message)}}let k=v?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;h||(k=b&&l.length<2?`(?:/${k})`:"/"+k),b&&(k+="?"),r+=k,g+=20,b&&(g+=-8),v&&(g+=-20),M===".*"&&(g+=-50)}u.push(g)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const g=u[d]||"",m=i[d-1];h[m.name]=g&&m.repeatable?g.split("/"):g}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of d)if(g.type===0)u+=g.value;else if(g.type===1){const{value:m,repeatable:v,optional:b}=g,A=m in l?l[m]:"";if(jt(A)&&!v)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const M=jt(A)?A.join("/"):A;if(!M)if(b)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=M}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function wE(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function EE(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=wE(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(Wh(s))return 1;if(Wh(r))return-1}return r.length-s.length}function Wh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const IE={type:0,value:""},TE=/[a-zA-Z0-9_]/;function bE(t){if(!t)return[[]];if(t==="/")return[[IE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:c==="("?n=2:TE.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function CE(t,e,n){const s=_E(bE(t.path),n),r=he(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function AE(t,e){const n=[],s=new Map;e=Xh({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,h,d){const g=!d,m=SE(u);m.aliasOf=d&&d.record;const v=Xh(e,u),b=[m];if("alias"in u){const k=typeof u.alias=="string"?[u.alias]:u.alias;for(const V of k)b.push(he({},m,{components:d?d.record.components:m.components,path:V,aliasOf:d?d.record:m}))}let A,M;for(const k of b){const{path:V}=k;if(h&&V[0]!=="/"){const ee=h.record.path,me=ee[ee.length-1]==="/"?"":"/";k.path=h.record.path+(V&&me+V)}if(A=CE(k,h,v),d?d.alias.push(A):(M=M||A,M!==A&&M.alias.push(A),g&&u.name&&!Qh(A)&&o(u.name)),m.children){const ee=m.children;for(let me=0;me<ee.length;me++)i(ee[me],A,d&&d.children[me])}d=d||A,(A.record.components&&Object.keys(A.record.components).length||A.record.name||A.record.redirect)&&c(A)}return M?()=>{o(M)}:Lr}function o(u){if(Pp(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&EE(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Mp(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Qh(u)&&s.set(u.record.name,u)}function l(u,h){let d,g={},m,v;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw Ys(1,{location:u});v=d.record.name,g=he(Gh(h.params,d.keys.filter(M=>!M.optional).map(M=>M.name)),u.params&&Gh(u.params,d.keys.map(M=>M.name))),m=d.stringify(g)}else if("path"in u)m=u.path,d=n.find(M=>M.re.test(m)),d&&(g=d.parse(m),v=d.record.name);else{if(d=h.name?s.get(h.name):n.find(M=>M.re.test(h.path)),!d)throw Ys(1,{location:u,currentLocation:h});v=d.record.name,g=he({},h.params,u.params),m=d.stringify(g)}const b=[];let A=d;for(;A;)b.unshift(A.record),A=A.parent;return{name:v,path:m,params:g,matched:b,meta:kE(b)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Gh(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function SE(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:RE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function RE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Qh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function kE(t){return t.reduce((e,n)=>he(e,n.meta),{})}function Xh(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Mp(t,e){return e.children.some(n=>n===t||Mp(t,n))}const Lp=/#/g,DE=/&/g,NE=/\//g,OE=/=/g,PE=/\?/g,Up=/\+/g,xE=/%5B/g,ME=/%5D/g,Fp=/%5E/g,LE=/%60/g,$p=/%7B/g,UE=/%7C/g,Vp=/%7D/g,FE=/%20/g;function Vl(t){return encodeURI(""+t).replace(UE,"|").replace(xE,"[").replace(ME,"]")}function $E(t){return Vl(t).replace($p,"{").replace(Vp,"}").replace(Fp,"^")}function Fc(t){return Vl(t).replace(Up,"%2B").replace(FE,"+").replace(Lp,"%23").replace(DE,"%26").replace(LE,"`").replace($p,"{").replace(Vp,"}").replace(Fp,"^")}function VE(t){return Fc(t).replace(OE,"%3D")}function BE(t){return Vl(t).replace(Lp,"%23").replace(PE,"%3F")}function jE(t){return t==null?"":BE(t).replace(NE,"%2F")}function Eo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function HE(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(Up," "),o=i.indexOf("="),a=Eo(o<0?i:i.slice(0,o)),c=o<0?null:Eo(i.slice(o+1));if(a in e){let l=e[a];jt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Yh(t){let e="";for(let n in t){const s=t[n];if(n=VE(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(jt(s)?s.map(i=>i&&Fc(i)):[s&&Fc(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function qE(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=jt(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const zE=Symbol(""),Jh=Symbol(""),ua=Symbol(""),Bp=Symbol(""),$c=Symbol("");function Ir(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Rn(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Ys(4,{from:n,to:e})):h instanceof Error?a(h):mE(h)?a(Ys(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(s&&s.instances[r],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function ec(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(KE(a)){const l=(a.__vccOpts||a)[e];l&&r.push(Rn(l,n,s,i,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=Jw(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Rn(d,n,s,i,o)()}))}}return r}function KE(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Zh(t){const e=Jt(ua),n=Jt(Bp),s=ft(()=>e.resolve($t(t.to))),r=ft(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Xs.bind(null,u));if(d>-1)return d;const g=ed(c[l-2]);return l>1&&ed(u)===g&&h[h.length-1].path!==g?h.findIndex(Xs.bind(null,c[l-2])):d}),i=ft(()=>r.value>-1&&XE(n.params,s.value.params)),o=ft(()=>r.value>-1&&r.value===n.matched.length-1&&Np(n.params,s.value.params));function a(c={}){return QE(c)?e[$t(t.replace)?"replace":"push"]($t(t.to)).catch(Lr):Promise.resolve()}return{route:s,href:ft(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const WE=fp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Zh,setup(t,{slots:e}){const n=di(Zh(t)),{options:s}=Jt(ua),r=ft(()=>({[td(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[td(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Dp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),GE=WE;function QE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function XE(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!jt(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function ed(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const td=(t,e,n)=>t??e??n,YE=fp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Jt($c),r=ft(()=>t.route||s.value),i=Jt(Jh,0),o=ft(()=>{let l=$t(i);const{matched:u}=r.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=ft(()=>r.value.matched[o.value]);ro(Jh,ft(()=>o.value+1)),ro(zE,a),ro($c,r);const c=Ft();return Fs(()=>[c.value,a.value,t.name],([l,u,h],[d,g,m])=>{u&&(u.instances[h]=l,g&&g!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!Xs(u,g)||!d)&&(u.enterCallbacks[h]||[]).forEach(v=>v(l))},{flush:"post"}),()=>{const l=r.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return nd(n.default,{Component:d,route:l});const g=h.props[u],m=g?g===!0?l.params:typeof g=="function"?g(l):g:null,b=Dp(d,he({},m,e,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return nd(n.default,{Component:b,route:l})||b}}});function nd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const JE=YE;function ZE(t){const e=AE(t.routes,t),n=t.parseQuery||HE,s=t.stringifyQuery||Yh,r=t.history,i=Ir(),o=Ir(),a=Ir(),c=c_(Cn);let l=Cn;ks&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ja.bind(null,E=>""+E),h=Ja.bind(null,jE),d=Ja.bind(null,Eo);function g(E,L){let O,B;return Pp(E)?(O=e.getRecordMatcher(E),B=L):B=E,e.addRoute(B,O)}function m(E){const L=e.getRecordMatcher(E);L&&e.removeRoute(L)}function v(){return e.getRoutes().map(E=>E.record)}function b(E){return!!e.getRecordMatcher(E)}function A(E,L){if(L=he({},L||c.value),typeof E=="string"){const f=Za(n,E,L.path),p=e.resolve({path:f.path},L),y=r.createHref(f.fullPath);return he(f,p,{params:d(p.params),hash:Eo(f.hash),redirectedFrom:void 0,href:y})}let O;if("path"in E)O=he({},E,{path:Za(n,E.path,L.path).path});else{const f=he({},E.params);for(const p in f)f[p]==null&&delete f[p];O=he({},E,{params:h(E.params)}),L.params=h(L.params)}const B=e.resolve(O,L),ie=E.hash||"";B.params=u(d(B.params));const Ae=tE(s,he({},E,{hash:$E(ie),path:B.path})),te=r.createHref(Ae);return he({fullPath:Ae,hash:ie,query:s===Yh?qE(E.query):E.query||{}},B,{redirectedFrom:void 0,href:te})}function M(E){return typeof E=="string"?Za(n,E,c.value.path):he({},E)}function k(E,L){if(l!==E)return Ys(8,{from:L,to:E})}function V(E){return ke(E)}function ee(E){return V(he(M(E),{replace:!0}))}function me(E){const L=E.matched[E.matched.length-1];if(L&&L.redirect){const{redirect:O}=L;let B=typeof O=="function"?O(E):O;return typeof B=="string"&&(B=B.includes("?")||B.includes("#")?B=M(B):{path:B},B.params={}),he({query:E.query,hash:E.hash,params:"path"in B?{}:E.params},B)}}function ke(E,L){const O=l=A(E),B=c.value,ie=E.state,Ae=E.force,te=E.replace===!0,f=me(O);if(f)return ke(he(M(f),{state:typeof f=="object"?he({},ie,f.state):ie,force:Ae,replace:te}),L||O);const p=O;p.redirectedFrom=L;let y;return!Ae&&nE(s,B,O)&&(y=Ys(16,{to:p,from:B}),Wn(B,B,!0,!1)),(y?Promise.resolve(y):we(p,B)).catch(_=>ln(_)?ln(_,2)?_:Dt(_):ve(_,p,B)).then(_=>{if(_){if(ln(_,2))return ke(he({replace:te},M(_.to),{state:typeof _.to=="object"?he({},ie,_.to.state):ie,force:Ae}),L||p)}else _=Ye(p,B,!0,te,ie);return ye(p,B,_),_})}function z(E,L){const O=k(E,L);return O?Promise.reject(O):Promise.resolve()}function we(E,L){let O;const[B,ie,Ae]=e0(E,L);O=ec(B.reverse(),"beforeRouteLeave",E,L);for(const f of B)f.leaveGuards.forEach(p=>{O.push(Rn(p,E,L))});const te=z.bind(null,E,L);return O.push(te),As(O).then(()=>{O=[];for(const f of i.list())O.push(Rn(f,E,L));return O.push(te),As(O)}).then(()=>{O=ec(ie,"beforeRouteUpdate",E,L);for(const f of ie)f.updateGuards.forEach(p=>{O.push(Rn(p,E,L))});return O.push(te),As(O)}).then(()=>{O=[];for(const f of E.matched)if(f.beforeEnter&&!L.matched.includes(f))if(jt(f.beforeEnter))for(const p of f.beforeEnter)O.push(Rn(p,E,L));else O.push(Rn(f.beforeEnter,E,L));return O.push(te),As(O)}).then(()=>(E.matched.forEach(f=>f.enterCallbacks={}),O=ec(Ae,"beforeRouteEnter",E,L),O.push(te),As(O))).then(()=>{O=[];for(const f of o.list())O.push(Rn(f,E,L));return O.push(te),As(O)}).catch(f=>ln(f,8)?f:Promise.reject(f))}function ye(E,L,O){for(const B of a.list())B(E,L,O)}function Ye(E,L,O,B,ie){const Ae=k(E,L);if(Ae)return Ae;const te=L===Cn,f=ks?history.state:{};O&&(B||te?r.replace(E.fullPath,he({scroll:te&&f&&f.scroll},ie)):r.push(E.fullPath,ie)),c.value=E,Wn(E,L,O,te),Dt()}let Je;function kt(){Je||(Je=r.listen((E,L,O)=>{if(!Ui.listening)return;const B=A(E),ie=me(B);if(ie){ke(he(ie,{replace:!0}),B).catch(Lr);return}l=B;const Ae=c.value;ks&&uE(Hh(Ae.fullPath,O.delta),la()),we(B,Ae).catch(te=>ln(te,12)?te:ln(te,2)?(ke(te.to,B).then(f=>{ln(f,20)&&!O.delta&&O.type===Xr.pop&&r.go(-1,!1)}).catch(Lr),Promise.reject()):(O.delta&&r.go(-O.delta,!1),ve(te,B,Ae))).then(te=>{te=te||Ye(B,Ae,!1),te&&(O.delta&&!ln(te,8)?r.go(-O.delta,!1):O.type===Xr.pop&&ln(te,20)&&r.go(-1,!1)),ye(B,Ae,te)}).catch(Lr)}))}let cn=Ir(),wr=Ir(),Oe;function ve(E,L,O){Dt(E);const B=wr.list();return B.length?B.forEach(ie=>ie(E,L,O)):console.error(E),Promise.reject(E)}function fe(){return Oe&&c.value!==Cn?Promise.resolve():new Promise((E,L)=>{cn.add([E,L])})}function Dt(E){return Oe||(Oe=!E,kt(),cn.list().forEach(([L,O])=>E?O(E):L()),cn.reset()),E}function Wn(E,L,O,B){const{scrollBehavior:ie}=t;if(!ks||!ie)return Promise.resolve();const Ae=!O&&hE(Hh(E.fullPath,0))||(B||!O)&&history.state&&history.state.scroll||null;return rp().then(()=>ie(E,L,Ae)).then(te=>te&&lE(te)).catch(te=>ve(te,E,L))}const Nt=E=>r.go(E);let gt;const bs=new Set,Ui={currentRoute:c,listening:!0,addRoute:g,removeRoute:m,hasRoute:b,getRoutes:v,resolve:A,options:t,push:V,replace:ee,go:Nt,back:()=>Nt(-1),forward:()=>Nt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:wr.add,isReady:fe,install(E){const L=this;E.component("RouterLink",GE),E.component("RouterView",JE),E.config.globalProperties.$router=L,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>$t(c)}),ks&&!gt&&c.value===Cn&&(gt=!0,V(r.location).catch(ie=>{}));const O={};for(const ie in Cn)O[ie]=ft(()=>c.value[ie]);E.provide(ua,L),E.provide(Bp,di(O)),E.provide($c,c);const B=E.unmount;bs.add(E),E.unmount=function(){bs.delete(E),bs.size<1&&(l=Cn,Je&&Je(),Je=null,c.value=Cn,gt=!1,Oe=!1),B()}}};return Ui}function As(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function e0(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Xs(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Xs(l,c))||r.push(c))}return[n,s,r]}function jp(){return Jt(ua)}const t0={},Hp=t=>(fi("data-v-d64ea7da"),t=t(),pi(),t),n0={class:"not-found-view"},s0=Hp(()=>S("h1",null,"NOT FOUND 404",-1)),r0=Hp(()=>S("p",null,"여기는 아무것도 없습니다.",-1));function i0(t,e){const n=ia("router-link");return ae(),ge("div",n0,[s0,r0,Be(n,{to:"/",style:{color:"red","font-size":"48px","margin-bottom":"64px","font-weight":"bold","background-color":"white"}},{default:ta(()=>[dt(Ve("< 돌아가기"))]),_:1})])}const o0=on(t0,[["render",i0],["__scopeId","data-v-d64ea7da"]]);const a0={class:"profile-viewer"},c0={key:0},l0=["src"],u0={class:"name"},h0={class:"copy"},d0={class:"job"},f0={class:"contact-email"},p0={class:"contact-phone"},g0={__name:"ProfileViewer",props:{profileData:{type:[Object,null],required:!0,default:null}},setup(t){const e=t,n=ft(()=>e.profileData?(console.log(e.profileData.desc.split(`
`)),e.profileData.desc.split(`
`)):[]);return(s,r)=>(ae(),ge("div",a0,[t.profileData?(ae(),ge(De,{key:1},[S("img",{src:t.profileData.imgUrl[0]},null,8,l0),S("article",null,[S("p",u0,Ve(t.profileData.name),1),S("p",h0,'"'+Ve(t.profileData.copy)+'"',1),S("p",d0,Ve(t.profileData.job),1),S("p",f0,Ve(t.profileData.email),1),S("p",p0,Ve(t.profileData.phone),1),(ae(!0),ge(De,null,us($t(n),(i,o)=>(ae(),ge("p",{class:"desc",key:o},[S("span",null,Ve(i),1)]))),128))])],64)):(ae(),ge("span",c0,"불러오는중"))]))}},m0=on(g0,[["__scopeId","data-v-65187d28"]]);const y0={class:"job-viewer"},v0={class:"company"},_0={class:"position"},w0={class:"period"},E0={__name:"JobViewer",props:{jobData:{type:[Object,null],required:!0}},setup(t){const e=t,n=ft(()=>e.jobData?(console.log(e.jobData.desc.split(`
`)),e.jobData.desc.split(`
`)):[]);return(s,r)=>(ae(),ge("article",y0,[S("h2",v0,Ve(t.jobData.company),1),S("p",_0,Ve(t.jobData.position),1),S("p",w0,Ve(t.jobData.period),1),(ae(!0),ge(De,null,us($t(n),(i,o)=>(ae(),ge("p",{class:"desc",key:o},[S("span",null,Ve(i),1)]))),128))]))}},I0=on(E0,[["__scopeId","data-v-af62920f"]]);const T0={class:"works-viewer"},b0={class:"title"},C0={class:"period"},A0={class:"matirial"},S0={class:"imgs"},R0=["src"],k0={__name:"WorksViewer",props:{data:{type:[Object,null],required:!0}},setup(t){const e=t,n=ft(()=>e.data?e.data.desc.split(`
`):[]);return lp(()=>{console.log(e.data)}),(s,r)=>(ae(),ge("article",T0,[S("h2",b0,Ve(t.data.title),1),S("p",C0,Ve(t.data.period),1),S("p",A0,Ve(t.data.matirial),1),(ae(!0),ge(De,null,us($t(n),(i,o)=>(ae(),ge("p",{class:"desc",key:o},[S("span",null,Ve(i),1)]))),128)),S("div",S0,[(ae(!0),ge(De,null,us(t.data.imgUrl,(i,o)=>(ae(),ge("img",{key:o,src:i,alt:"works description"},null,8,R0))),128))])]))}},D0=on(k0,[["__scopeId","data-v-77d790ce"]]);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qp=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},N0=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},zp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(d=64)),s.push(n[u],n[h],n[d],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(qp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):N0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw new O0;const d=i<<2|a>>4;if(s.push(d),l!==64){const g=a<<4&240|l>>2;if(s.push(g),h!==64){const m=l<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class O0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const P0=function(t){const e=qp(t);return zp.encodeByteArray(e,!0)},Io=function(t){return P0(t).replace(/\./g,"")},Kp=function(t){try{return zp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M0=()=>x0().__FIREBASE_DEFAULTS__,L0=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},U0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Kp(t[1]);return e&&JSON.parse(e)},Bl=()=>{try{return M0()||L0()||U0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Wp=t=>{var e,n;return(n=(e=Bl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Gp=t=>{const e=Wp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},F0=()=>{var t;return(t=Bl())===null||t===void 0?void 0:t.config},Qp=t=>{var e;return(e=Bl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xp(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Io(JSON.stringify(n)),Io(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function V0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ct())}function B0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function j0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function H0(){const t=ct();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function q0(){try{return typeof indexedDB=="object"}catch{return!1}}function z0(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K0="FirebaseError";class an extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=K0,Object.setPrototypeOf(this,an.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gi.prototype.create)}}class gi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?W0(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new an(r,a,s)}}function W0(t,e){return t.replace(G0,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const G0=/\{\$([^}]+)}/g;function Q0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function To(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(sd(i)&&sd(o)){if(!To(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function sd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Sr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Rr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function X0(t,e){const n=new Y0(t,e);return n.subscribe.bind(n)}class Y0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");J0(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=tc),r.error===void 0&&(r.error=tc),r.complete===void 0&&(r.complete=tc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function J0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function tc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(t){return t&&t._delegate?t._delegate:t}class Bn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new $0;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(tI(e))try{this.getOrInitializeService({instanceIdentifier:Yn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Yn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yn){return this.instances.has(e)}getOptions(e=Yn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:eI(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Yn){return this.component?this.component.multipleInstances?e:Yn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function eI(t){return t===Yn?void 0:t}function tI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Z0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var le;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(le||(le={}));const sI={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},rI=le.INFO,iI={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},oI=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=iI[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class jl{constructor(e){this.name=e,this._logLevel=rI,this._logHandler=oI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?sI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const aI=(t,e)=>e.some(n=>t instanceof n);let rd,id;function cI(){return rd||(rd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lI(){return id||(id=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Yp=new WeakMap,Vc=new WeakMap,Jp=new WeakMap,nc=new WeakMap,Hl=new WeakMap;function uI(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Ln(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Yp.set(n,t)}).catch(()=>{}),Hl.set(e,t),e}function hI(t){if(Vc.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Vc.set(t,e)}let Bc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Vc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Jp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ln(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function dI(t){Bc=t(Bc)}function fI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(sc(this),e,...n);return Jp.set(s,e.sort?e.sort():[e]),Ln(s)}:lI().includes(t)?function(...e){return t.apply(sc(this),e),Ln(Yp.get(this))}:function(...e){return Ln(t.apply(sc(this),e))}}function pI(t){return typeof t=="function"?fI(t):(t instanceof IDBTransaction&&hI(t),aI(t,cI())?new Proxy(t,Bc):t)}function Ln(t){if(t instanceof IDBRequest)return uI(t);if(nc.has(t))return nc.get(t);const e=pI(t);return e!==t&&(nc.set(t,e),Hl.set(e,t)),e}const sc=t=>Hl.get(t);function gI(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Ln(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Ln(o.result),c.oldVersion,c.newVersion,Ln(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const mI=["get","getKey","getAll","getAllKeys","count"],yI=["put","add","delete","clear"],rc=new Map;function od(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(rc.get(e))return rc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=yI.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||mI.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return rc.set(e,i),i}dI(t=>({...t,get:(e,n,s)=>od(e,n)||t.get(e,n,s),has:(e,n)=>!!od(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(_I(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function _I(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const jc="@firebase/app",ad="0.9.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs=new jl("@firebase/app"),wI="@firebase/app-compat",EI="@firebase/analytics-compat",II="@firebase/analytics",TI="@firebase/app-check-compat",bI="@firebase/app-check",CI="@firebase/auth",AI="@firebase/auth-compat",SI="@firebase/database",RI="@firebase/database-compat",kI="@firebase/functions",DI="@firebase/functions-compat",NI="@firebase/installations",OI="@firebase/installations-compat",PI="@firebase/messaging",xI="@firebase/messaging-compat",MI="@firebase/performance",LI="@firebase/performance-compat",UI="@firebase/remote-config",FI="@firebase/remote-config-compat",$I="@firebase/storage",VI="@firebase/storage-compat",BI="@firebase/firestore",jI="@firebase/firestore-compat",HI="firebase",qI="9.21.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hc="[DEFAULT]",zI={[jc]:"fire-core",[wI]:"fire-core-compat",[II]:"fire-analytics",[EI]:"fire-analytics-compat",[bI]:"fire-app-check",[TI]:"fire-app-check-compat",[CI]:"fire-auth",[AI]:"fire-auth-compat",[SI]:"fire-rtdb",[RI]:"fire-rtdb-compat",[kI]:"fire-fn",[DI]:"fire-fn-compat",[NI]:"fire-iid",[OI]:"fire-iid-compat",[PI]:"fire-fcm",[xI]:"fire-fcm-compat",[MI]:"fire-perf",[LI]:"fire-perf-compat",[UI]:"fire-rc",[FI]:"fire-rc-compat",[$I]:"fire-gcs",[VI]:"fire-gcs-compat",[BI]:"fire-fst",[jI]:"fire-fst-compat","fire-js":"fire-js",[HI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bo=new Map,qc=new Map;function KI(t,e){try{t.container.addComponent(e)}catch(n){hs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ds(t){const e=t.name;if(qc.has(e))return hs.debug(`There were multiple attempts to register component ${e}.`),!1;qc.set(e,t);for(const n of bo.values())KI(n,t);return!0}function ha(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WI={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Un=new gi("app","Firebase",WI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Bn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Un.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs=qI;function Zp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Hc,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Un.create("bad-app-name",{appName:String(r)});if(n||(n=F0()),!n)throw Un.create("no-options");const i=bo.get(r);if(i){if(To(n,i.options)&&To(s,i.config))return i;throw Un.create("duplicate-app",{appName:r})}const o=new nI(r);for(const c of qc.values())o.addComponent(c);const a=new GI(n,s,o);return bo.set(r,a),a}function ql(t=Hc){const e=bo.get(t);if(!e&&t===Hc)return Zp();if(!e)throw Un.create("no-app",{appName:t});return e}function Zt(t,e,n){var s;let r=(s=zI[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),hs.warn(a.join(" "));return}ds(new Bn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QI="firebase-heartbeat-database",XI=1,Yr="firebase-heartbeat-store";let ic=null;function eg(){return ic||(ic=gI(QI,XI,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Yr)}}}).catch(t=>{throw Un.create("idb-open",{originalErrorMessage:t.message})})),ic}async function YI(t){try{return(await eg()).transaction(Yr).objectStore(Yr).get(tg(t))}catch(e){if(e instanceof an)hs.warn(e.message);else{const n=Un.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});hs.warn(n.message)}}}async function cd(t,e){try{const s=(await eg()).transaction(Yr,"readwrite");return await s.objectStore(Yr).put(e,tg(t)),s.done}catch(n){if(n instanceof an)hs.warn(n.message);else{const s=Un.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});hs.warn(s.message)}}}function tg(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI=1024,ZI=30*24*60*60*1e3;class eT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new nT(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ld();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=ZI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ld(),{heartbeatsToSend:n,unsentEntries:s}=tT(this._heartbeatsCache.heartbeats),r=Io(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ld(){return new Date().toISOString().substring(0,10)}function tT(t,e=JI){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),ud(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),ud(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class nT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return q0()?z0().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await YI(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return cd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return cd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ud(t){return Io(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sT(t){ds(new Bn("platform-logger",e=>new vI(e),"PRIVATE")),ds(new Bn("heartbeat",e=>new eT(e),"PRIVATE")),Zt(jc,ad,t),Zt(jc,ad,"esm2017"),Zt("fire-js","")}sT("");var rT="firebase",iT="9.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zt(rT,iT,"app");var oT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},P,zl=zl||{},G=oT||self;function Co(){}function da(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function yi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function aT(t){return Object.prototype.hasOwnProperty.call(t,oc)&&t[oc]||(t[oc]=++cT)}var oc="closure_uid_"+(1e9*Math.random()>>>0),cT=0;function lT(t,e,n){return t.call.apply(t.bind,arguments)}function uT(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function rt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?rt=lT:rt=uT,rt.apply(null,arguments)}function qi(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function qe(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function zn(){this.s=this.s,this.o=this.o}var hT=0;zn.prototype.s=!1;zn.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),hT!=0)&&aT(this)};zn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ng=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Kl(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function hd(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(da(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function it(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}it.prototype.h=function(){this.defaultPrevented=!0};var dT=function(){if(!G.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{G.addEventListener("test",Co,e),G.removeEventListener("test",Co,e)}catch{}return t}();function Ao(t){return/^[\s\xa0]*$/.test(t)}var dd=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function ac(t,e){return t<e?-1:t>e?1:0}function fa(){var t=G.navigator;return t&&(t=t.userAgent)?t:""}function Xt(t){return fa().indexOf(t)!=-1}function Wl(t){return Wl[" "](t),t}Wl[" "]=Co;function sg(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:t[e]=n(e)}var fT=Xt("Opera"),Js=Xt("Trident")||Xt("MSIE"),rg=Xt("Edge"),zc=rg||Js,ig=Xt("Gecko")&&!(fa().toLowerCase().indexOf("webkit")!=-1&&!Xt("Edge"))&&!(Xt("Trident")||Xt("MSIE"))&&!Xt("Edge"),pT=fa().toLowerCase().indexOf("webkit")!=-1&&!Xt("Edge");function og(){var t=G.document;return t?t.documentMode:void 0}var So;e:{var cc="",lc=function(){var t=fa();if(ig)return/rv:([^\);]+)(\)|;)/.exec(t);if(rg)return/Edge\/([\d\.]+)/.exec(t);if(Js)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(pT)return/WebKit\/(\S+)/.exec(t);if(fT)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(lc&&(cc=lc?lc[1]:""),Js){var uc=og();if(uc!=null&&uc>parseFloat(cc)){So=String(uc);break e}}So=cc}var gT={};function mT(){return sg(gT,9,function(){let t=0;const e=dd(String(So)).split("."),n=dd("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=ac(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||ac(r[2].length==0,i[2].length==0)||ac(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var Kc;if(G.document&&Js){var fd=og();Kc=fd||parseInt(So,10)||void 0}else Kc=void 0;var yT=Kc;function Jr(t,e){if(it.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(ig){e:{try{Wl(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:vT[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Jr.$.h.call(this)}}qe(Jr,it);var vT={2:"touch",3:"pen",4:"mouse"};Jr.prototype.h=function(){Jr.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var vi="closure_listenable_"+(1e6*Math.random()|0),_T=0;function wT(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=r,this.key=++_T,this.fa=this.ia=!1}function pa(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Gl(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function ag(t){const e={};for(const n in t)e[n]=t[n];return e}const pd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function cg(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<pd.length;i++)n=pd[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function ga(t){this.src=t,this.g={},this.h=0}ga.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Gc(t,e,s,r);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new wT(e,this.src,i,!!s,r),e.ia=n,t.push(e)),e};function Wc(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=ng(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(pa(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Gc(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==s)return r}return-1}var Ql="closure_lm_"+(1e6*Math.random()|0),hc={};function lg(t,e,n,s,r){if(s&&s.once)return hg(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)lg(t,e[i],n,s,r);return null}return n=Jl(n),t&&t[vi]?t.O(e,n,yi(s)?!!s.capture:!!s,r):ug(t,e,n,!1,s,r)}function ug(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=yi(r)?!!r.capture:!!r,a=Yl(t);if(a||(t[Ql]=a=new ga(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=ET(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)dT||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(fg(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function ET(){function t(n){return e.call(t.src,t.listener,n)}const e=IT;return t}function hg(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)hg(t,e[i],n,s,r);return null}return n=Jl(n),t&&t[vi]?t.P(e,n,yi(s)?!!s.capture:!!s,r):ug(t,e,n,!0,s,r)}function dg(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)dg(t,e[i],n,s,r);else s=yi(s)?!!s.capture:!!s,n=Jl(n),t&&t[vi]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Gc(i,n,s,r),-1<n&&(pa(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Yl(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Gc(e,n,s,r)),(n=-1<t?e[t]:null)&&Xl(n))}function Xl(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[vi])Wc(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(fg(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Yl(e))?(Wc(n,t),n.h==0&&(n.src=null,e[Ql]=null)):pa(t)}}}function fg(t){return t in hc?hc[t]:hc[t]="on"+t}function IT(t,e){if(t.fa)t=!0;else{e=new Jr(e,this);var n=t.listener,s=t.la||t.src;t.ia&&Xl(t),t=n.call(s,e)}return t}function Yl(t){return t=t[Ql],t instanceof ga?t:null}var dc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Jl(t){return typeof t=="function"?t:(t[dc]||(t[dc]=function(e){return t.handleEvent(e)}),t[dc])}function je(){zn.call(this),this.i=new ga(this),this.S=this,this.J=null}qe(je,zn);je.prototype[vi]=!0;je.prototype.removeEventListener=function(t,e,n,s){dg(this,t,e,n,s)};function Qe(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,typeof e=="string")e=new it(e,t);else if(e instanceof it)e.target=e.target||t;else{var r=e;e=new it(s,t),cg(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=zi(o,s,!0,e)&&r}if(o=e.g=t,r=zi(o,s,!0,e)&&r,r=zi(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=zi(o,s,!1,e)&&r}je.prototype.N=function(){if(je.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)pa(n[s]);delete t.g[e],t.h--}}this.J=null};je.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};je.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function zi(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Wc(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Zl=G.JSON.stringify;function TT(){var t=mg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class bT{constructor(){this.h=this.g=null}add(e,n){const s=pg.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var pg=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new CT,t=>t.reset());class CT{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function AT(t){G.setTimeout(()=>{throw t},0)}function gg(t,e){Qc||ST(),Xc||(Qc(),Xc=!0),mg.add(t,e)}var Qc;function ST(){var t=G.Promise.resolve(void 0);Qc=function(){t.then(RT)}}var Xc=!1,mg=new bT;function RT(){for(var t;t=TT();){try{t.h.call(t.g)}catch(n){AT(n)}var e=pg;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Xc=!1}function ma(t,e){je.call(this),this.h=t||1,this.g=e||G,this.j=rt(this.qb,this),this.l=Date.now()}qe(ma,je);P=ma.prototype;P.ga=!1;P.T=null;P.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Qe(this,"tick"),this.ga&&(eu(this),this.start()))}};P.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function eu(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}P.N=function(){ma.$.N.call(this),eu(this),delete this.g};function tu(t,e,n){if(typeof t=="function")n&&(t=rt(t,n));else if(t&&typeof t.handleEvent=="function")t=rt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:G.setTimeout(t,e||0)}function yg(t){t.g=tu(()=>{t.g=null,t.i&&(t.i=!1,yg(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class kT extends zn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:yg(this)}N(){super.N(),this.g&&(G.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Zr(t){zn.call(this),this.h=t,this.g={}}qe(Zr,zn);var gd=[];function vg(t,e,n,s){Array.isArray(n)||(n&&(gd[0]=n.toString()),n=gd);for(var r=0;r<n.length;r++){var i=lg(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function _g(t){Gl(t.g,function(e,n){this.g.hasOwnProperty(n)&&Xl(e)},t),t.g={}}Zr.prototype.N=function(){Zr.$.N.call(this),_g(this)};Zr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ya(){this.g=!0}ya.prototype.Ea=function(){this.g=!1};function DT(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function NT(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function Os(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+PT(t,n)+(s?" "+s:"")})}function OT(t,e){t.info(function(){return"TIMEOUT: "+e})}ya.prototype.info=function(){};function PT(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Zl(n)}catch{return e}}var _s={},md=null;function va(){return md=md||new je}_s.Ta="serverreachability";function wg(t){it.call(this,_s.Ta,t)}qe(wg,it);function ei(t){const e=va();Qe(e,new wg(e))}_s.STAT_EVENT="statevent";function Eg(t,e){it.call(this,_s.STAT_EVENT,t),this.stat=e}qe(Eg,it);function pt(t){const e=va();Qe(e,new Eg(e,t))}_s.Ua="timingevent";function Ig(t,e){it.call(this,_s.Ua,t),this.size=e}qe(Ig,it);function _i(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return G.setTimeout(function(){t()},e)}var _a={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Tg={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function nu(){}nu.prototype.h=null;function yd(t){return t.h||(t.h=t.i())}function bg(){}var wi={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function su(){it.call(this,"d")}qe(su,it);function ru(){it.call(this,"c")}qe(ru,it);var Yc;function wa(){}qe(wa,nu);wa.prototype.g=function(){return new XMLHttpRequest};wa.prototype.i=function(){return{}};Yc=new wa;function Ei(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new Zr(this),this.P=xT,t=zc?125:void 0,this.V=new ma(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new Cg}function Cg(){this.i=null,this.g="",this.h=!1}var xT=45e3,Jc={},Ro={};P=Ei.prototype;P.setTimeout=function(t){this.P=t};function Zc(t,e,n){t.L=1,t.v=Ia(yn(e)),t.s=n,t.S=!0,Ag(t,null)}function Ag(t,e){t.G=Date.now(),Ii(t),t.A=yn(t.v);var n=t.A,s=t.W;Array.isArray(s)||(s=[String(s)]),xg(n.i,"t",s),t.C=0,n=t.l.I,t.h=new Cg,t.g=tm(t.l,n?e:null,!t.s),0<t.O&&(t.M=new kT(rt(t.Pa,t,t.g),t.O)),vg(t.U,t.g,"readystatechange",t.nb),e=t.I?ag(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),ei(),DT(t.j,t.u,t.A,t.m,t.W,t.s)}P.nb=function(t){t=t.target;const e=this.M;e&&hn(t)==3?e.l():this.Pa(t)};P.Pa=function(t){try{if(t==this.g)e:{const u=hn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||zc||this.g&&(this.h.h||this.g.ja()||Ed(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?ei(3):ei(2)),Ea(this);var n=this.g.da();this.aa=n;t:if(Sg(this)){var s=Ed(this.g);t="";var r=s.length,i=hn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ns(this),Fr(this);var o="";break t}this.h.i=new G.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,NT(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ao(a)){var l=a;break t}}l=null}if(n=l)Os(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,el(this,n);else{this.i=!1,this.o=3,pt(12),ns(this),Fr(this);break e}}this.S?(Rg(this,u,o),zc&&this.i&&u==3&&(vg(this.U,this.V,"tick",this.mb),this.V.start())):(Os(this.j,this.m,o,null),el(this,o)),u==4&&ns(this),this.i&&!this.J&&(u==4?Yg(this.l,this):(this.i=!1,Ii(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,pt(12)):(this.o=0,pt(13)),ns(this),Fr(this)}}}catch{}finally{}};function Sg(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function Rg(t,e,n){let s=!0,r;for(;!t.J&&t.C<n.length;)if(r=MT(t,n),r==Ro){e==4&&(t.o=4,pt(14),s=!1),Os(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Jc){t.o=4,pt(15),Os(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Os(t.j,t.m,r,null),el(t,r);Sg(t)&&r!=Ro&&r!=Jc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,pt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ca&&(t.ca=!0,e=t.l,e.g==t&&e.ca&&!e.L&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),hu(e),e.L=!0,pt(11))):(Os(t.j,t.m,n,"[Invalid Chunked Response]"),ns(t),Fr(t))}P.mb=function(){if(this.g){var t=hn(this.g),e=this.g.ja();this.C<e.length&&(Ea(this),Rg(this,t,e),this.i&&t!=4&&Ii(this))}};function MT(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Ro:(n=Number(e.substring(n,s)),isNaN(n)?Jc:(s+=1,s+n>e.length?Ro:(e=e.substr(s,n),t.C=s+n,e)))}P.cancel=function(){this.J=!0,ns(this)};function Ii(t){t.Y=Date.now()+t.P,kg(t,t.P)}function kg(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=_i(rt(t.lb,t),e)}function Ea(t){t.B&&(G.clearTimeout(t.B),t.B=null)}P.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(OT(this.j,this.A),this.L!=2&&(ei(),pt(17)),ns(this),this.o=2,Fr(this)):kg(this,this.Y-t)};function Fr(t){t.l.H==0||t.J||Yg(t.l,t)}function ns(t){Ea(t);var e=t.M;e&&typeof e.ra=="function"&&e.ra(),t.M=null,eu(t.V),_g(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ra())}function el(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||tl(n.h,t))){if(!t.K&&tl(n.h,t)&&n.H==3){try{var s=n.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)No(n),Ca(n);else break e;uu(n),pt(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.M&&n.A==0&&!n.v&&(n.v=_i(rt(n.ib,n),6e3));if(1>=Ug(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else ss(n,11)}else if((t.K||n.g==t)&&No(n),!Ao(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.J=l[1],n.oa=l[2];const u=l[3];u!=null&&(n.qa=u,n.j.info("VER="+n.qa));const h=l[4];h!=null&&(n.Ga=h,n.j.info("SVER="+n.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.K=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const m=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=s.h;i.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(iu(i,i.h),i.h=null))}if(s.F){const v=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(s.Da=v,be(s.G,s.F,v))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-t.G,n.j.info("Handshake RTT: "+n.S+"ms")),s=n;var o=t;if(s.wa=em(s,s.I?s.oa:null,s.Y),o.K){Fg(s.h,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(Ea(a),Ii(a)),s.g=o}else Qg(s);0<n.i.length&&Aa(n)}else l[0]!="stop"&&l[0]!="close"||ss(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?ss(n,7):lu(n):l[0]!="noop"&&n.l&&n.l.Aa(l),n.A=0)}}ei(4)}catch{}}function LT(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(da(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function UT(t){if(t.sa&&typeof t.sa=="function")return t.sa();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(da(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Dg(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(da(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=UT(t),s=LT(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var Ng=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function FT(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function as(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof as){this.h=e!==void 0?e:t.h,ko(this,t.j),this.s=t.s,this.g=t.g,Do(this,t.m),this.l=t.l,e=t.i;var n=new ti;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),vd(this,n),this.o=t.o}else t&&(n=String(t).match(Ng))?(this.h=!!e,ko(this,n[1]||"",!0),this.s=kr(n[2]||""),this.g=kr(n[3]||"",!0),Do(this,n[4]),this.l=kr(n[5]||"",!0),vd(this,n[6]||"",!0),this.o=kr(n[7]||"")):(this.h=!!e,this.i=new ti(null,this.h))}as.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Dr(e,_d,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Dr(e,_d,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Dr(n,n.charAt(0)=="/"?BT:VT,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Dr(n,HT)),t.join("")};function yn(t){return new as(t)}function ko(t,e,n){t.j=n?kr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Do(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function vd(t,e,n){e instanceof ti?(t.i=e,qT(t.i,t.h)):(n||(e=Dr(e,jT)),t.i=new ti(e,t.h))}function be(t,e,n){t.i.set(e,n)}function Ia(t){return be(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function kr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Dr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,$T),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function $T(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var _d=/[#\/\?@]/g,VT=/[#\?:]/g,BT=/[#\?]/g,jT=/[#\?@]/g,HT=/#/g;function ti(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Kn(t){t.g||(t.g=new Map,t.h=0,t.i&&FT(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}P=ti.prototype;P.add=function(t,e){Kn(this),this.i=null,t=ur(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Og(t,e){Kn(t),e=ur(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Pg(t,e){return Kn(t),e=ur(t,e),t.g.has(e)}P.forEach=function(t,e){Kn(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};P.sa=function(){Kn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};P.Z=function(t){Kn(this);let e=[];if(typeof t=="string")Pg(this,t)&&(e=e.concat(this.g.get(ur(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};P.set=function(t,e){return Kn(this),this.i=null,t=ur(this,t),Pg(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};P.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function xg(t,e,n){Og(t,e),0<n.length&&(t.i=null,t.g.set(ur(t,e),Kl(n)),t.h+=n.length)}P.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function ur(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function qT(t,e){e&&!t.j&&(Kn(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Og(this,s),xg(this,r,n))},t)),t.j=e}var zT=class{constructor(t,e){this.h=t,this.g=e}};function Mg(t){this.l=t||KT,G.PerformanceNavigationTiming?(t=G.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(G.g&&G.g.Ka&&G.g.Ka()&&G.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var KT=10;function Lg(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Ug(t){return t.h?1:t.g?t.g.size:0}function tl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function iu(t,e){t.g?t.g.add(e):t.h=e}function Fg(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Mg.prototype.cancel=function(){if(this.i=$g(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function $g(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Kl(t.i)}function ou(){}ou.prototype.stringify=function(t){return G.JSON.stringify(t,void 0)};ou.prototype.parse=function(t){return G.JSON.parse(t,void 0)};function WT(){this.g=new ou}function GT(t,e,n){const s=n||"";try{Dg(t,function(r,i){let o=r;yi(r)&&(o=Zl(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function QT(t,e){const n=new ya;if(G.Image){const s=new Image;s.onload=qi(Ki,n,s,"TestLoadImage: loaded",!0,e),s.onerror=qi(Ki,n,s,"TestLoadImage: error",!1,e),s.onabort=qi(Ki,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=qi(Ki,n,s,"TestLoadImage: timeout",!1,e),G.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Ki(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Ti(t){this.l=t.fc||null,this.j=t.ob||!1}qe(Ti,nu);Ti.prototype.g=function(){return new Ta(this.l,this.j)};Ti.prototype.i=function(t){return function(){return t}}({});function Ta(t,e){je.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=au,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}qe(Ta,je);var au=0;P=Ta.prototype;P.open=function(t,e){if(this.readyState!=au)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ni(this)};P.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||G).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};P.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,bi(this)),this.readyState=au};P.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ni(this)),this.g&&(this.readyState=3,ni(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof G.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Vg(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Vg(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}P.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?bi(this):ni(this),this.readyState==3&&Vg(this)}};P.Za=function(t){this.g&&(this.response=this.responseText=t,bi(this))};P.Ya=function(t){this.g&&(this.response=t,bi(this))};P.ka=function(){this.g&&bi(this)};function bi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ni(t)}P.setRequestHeader=function(t,e){this.v.append(t,e)};P.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};P.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ni(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ta.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var XT=G.JSON.parse;function Re(t){je.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Bg,this.L=this.M=!1}qe(Re,je);var Bg="",YT=/^https?$/i,JT=["POST","PUT"];P=Re.prototype;P.Oa=function(t){this.M=t};P.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Yc.g(),this.C=this.u?yd(this.u):yd(Yc),this.g.onreadystatechange=rt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){wd(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=G.FormData&&t instanceof G.FormData,!(0<=ng(JT,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{qg(this),0<this.B&&((this.L=ZT(this.g))?(this.g.timeout=this.B,this.g.ontimeout=rt(this.ua,this)):this.A=tu(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){wd(this,i)}};function ZT(t){return Js&&mT()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}P.ua=function(){typeof zl<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Qe(this,"timeout"),this.abort(8))};function wd(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,jg(t),ba(t)}function jg(t){t.F||(t.F=!0,Qe(t,"complete"),Qe(t,"error"))}P.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Qe(this,"complete"),Qe(this,"abort"),ba(this))};P.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ba(this,!0)),Re.$.N.call(this)};P.La=function(){this.s||(this.G||this.v||this.l?Hg(this):this.kb())};P.kb=function(){Hg(this)};function Hg(t){if(t.h&&typeof zl<"u"&&(!t.C[1]||hn(t)!=4||t.da()!=2)){if(t.v&&hn(t)==4)tu(t.La,0,t);else if(Qe(t,"readystatechange"),hn(t)==4){t.h=!1;try{const a=t.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.I).match(Ng)[1]||null;if(!r&&G.self&&G.self.location){var i=G.self.location.protocol;r=i.substr(0,i.length-1)}s=!YT.test(r?r.toLowerCase():"")}n=s}if(n)Qe(t,"complete"),Qe(t,"success");else{t.m=6;try{var o=2<hn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.da()+"]",jg(t)}}finally{ba(t)}}}}function ba(t,e){if(t.g){qg(t);const n=t.g,s=t.C[0]?Co:null;t.g=null,t.C=null,e||Qe(t,"ready");try{n.onreadystatechange=s}catch{}}}function qg(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(G.clearTimeout(t.A),t.A=null)}function hn(t){return t.g?t.g.readyState:0}P.da=function(){try{return 2<hn(this)?this.g.status:-1}catch{return-1}};P.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};P.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),XT(e)}};function Ed(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Bg:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}P.Ia=function(){return this.m};P.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function zg(t){let e="";return Gl(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function cu(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=zg(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):be(t,e,n))}function Tr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Kg(t){this.Ga=0,this.i=[],this.j=new ya,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Tr("failFast",!1,t),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Tr("baseRetryDelayMs",5e3,t),this.hb=Tr("retryDelaySeedMs",1e4,t),this.eb=Tr("forwardChannelMaxRetries",2,t),this.xa=Tr("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.K=void 0,this.I=t&&t.supportsCrossDomainXhr||!1,this.J="",this.h=new Mg(t&&t.concurrentRequestLimit),this.Ja=new WT,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.j.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}P=Kg.prototype;P.qa=8;P.H=1;function lu(t){if(Wg(t),t.H==3){var e=t.W++,n=yn(t.G);be(n,"SID",t.J),be(n,"RID",e),be(n,"TYPE","terminate"),Ci(t,n),e=new Ei(t,t.j,e,void 0),e.L=2,e.v=Ia(yn(n)),n=!1,G.navigator&&G.navigator.sendBeacon&&(n=G.navigator.sendBeacon(e.v.toString(),"")),!n&&G.Image&&(new Image().src=e.v,n=!0),n||(e.g=tm(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Ii(e)}Zg(t)}function Ca(t){t.g&&(hu(t),t.g.cancel(),t.g=null)}function Wg(t){Ca(t),t.u&&(G.clearTimeout(t.u),t.u=null),No(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&G.clearTimeout(t.m),t.m=null)}function Aa(t){Lg(t.h)||t.m||(t.m=!0,gg(t.Na,t),t.C=0)}function eb(t,e){return Ug(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.F.concat(t.i),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=_i(rt(t.Na,t,e),Jg(t,t.C)),t.C++,!0)}P.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new Ei(this,this.j,t,void 0);let i=this.s;if(this.U&&(i?(i=ag(i),cg(i,this.U)):i=this.U),this.o!==null||this.O||(r.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Gg(this,r,e),n=yn(this.G),be(n,"RID",t),be(n,"CVER",22),this.F&&be(n,"X-HTTP-Session-Id",this.F),Ci(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(zg(i)))+"&"+e:this.o&&cu(n,this.o,i)),iu(this.h,r),this.bb&&be(n,"TYPE","init"),this.P?(be(n,"$req",e),be(n,"SID","null"),r.ba=!0,Zc(r,n,null)):Zc(r,n,e),this.H=2}}else this.H==3&&(t?Id(this,t):this.i.length==0||Lg(this.h)||Id(this))};function Id(t,e){var n;e?n=e.m:n=t.W++;const s=yn(t.G);be(s,"SID",t.J),be(s,"RID",n),be(s,"AID",t.V),Ci(t,s),t.o&&t.s&&cu(s,t.o,t.s),n=new Ei(t,t.j,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.i=e.F.concat(t.i)),e=Gg(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),iu(t.h,n),Zc(n,s,e)}function Ci(t,e){t.ma&&Gl(t.ma,function(n,s){be(e,s,n)}),t.l&&Dg({},function(n,s){be(e,s,n)})}function Gg(t,e,n){n=Math.min(t.i.length,n);var s=t.l?rt(t.l.Va,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{GT(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.F=t,s}function Qg(t){t.g||t.u||(t.ba=1,gg(t.Ma,t),t.A=0)}function uu(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=_i(rt(t.Ma,t),Jg(t,t.A)),t.A++,!0)}P.Ma=function(){if(this.u=null,Xg(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var t=2*this.S;this.j.info("BP detection timer enabled: "+t),this.B=_i(rt(this.jb,this),t)}};P.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,pt(10),Ca(this),Xg(this))};function hu(t){t.B!=null&&(G.clearTimeout(t.B),t.B=null)}function Xg(t){t.g=new Ei(t,t.j,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=yn(t.wa);be(e,"RID","rpc"),be(e,"SID",t.J),be(e,"CI",t.M?"0":"1"),be(e,"AID",t.V),be(e,"TYPE","xmlhttp"),Ci(t,e),t.o&&t.s&&cu(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.oa,n.L=1,n.v=Ia(yn(e)),n.s=null,n.S=!0,Ag(n,t)}P.ib=function(){this.v!=null&&(this.v=null,Ca(this),uu(this),pt(19))};function No(t){t.v!=null&&(G.clearTimeout(t.v),t.v=null)}function Yg(t,e){var n=null;if(t.g==e){No(t),hu(t),t.g=null;var s=2}else if(tl(t.h,e))n=e.F,Fg(t.h,e),s=1;else return;if(t.H!=0){if(t.ta=e.aa,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var r=t.C;s=va(),Qe(s,new Ig(s,n)),Aa(t)}else Qg(t);else if(r=e.o,r==3||r==0&&0<t.ta||!(s==1&&eb(t,e)||s==2&&uu(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:ss(t,5);break;case 4:ss(t,10);break;case 3:ss(t,6);break;default:ss(t,2)}}}function Jg(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.l||(n*=2),n*e}function ss(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=rt(t.pb,t);n||(n=new as("//www.google.com/images/cleardot.gif"),G.location&&G.location.protocol=="http"||ko(n,"https"),Ia(n)),QT(n.toString(),s)}else pt(2);t.H=0,t.l&&t.l.za(e),Zg(t),Wg(t)}P.pb=function(t){t?(this.j.info("Successfully pinged google.com"),pt(2)):(this.j.info("Failed to ping google.com"),pt(1))};function Zg(t){if(t.H=0,t.pa=[],t.l){const e=$g(t.h);(e.length!=0||t.i.length!=0)&&(hd(t.pa,e),hd(t.pa,t.i),t.h.i.length=0,Kl(t.i),t.i.length=0),t.l.ya()}}function em(t,e,n){var s=n instanceof as?yn(n):new as(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Do(s,s.m);else{var r=G.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new as(null,void 0);s&&ko(i,s),e&&(i.g=e),r&&Do(i,r),n&&(i.l=n),s=i}return n=t.F,e=t.Da,n&&e&&be(s,n,e),be(s,"VER",t.qa),Ci(t,s),s}function tm(t,e,n){if(e&&!t.I)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Re(new Ti({ob:!0})):new Re(t.va),e.Oa(t.I),e}function nm(){}P=nm.prototype;P.Ba=function(){};P.Aa=function(){};P.za=function(){};P.ya=function(){};P.Va=function(){};function Oo(){if(Js&&!(10<=Number(yT)))throw Error("Environmental error: no available transport.")}Oo.prototype.g=function(t,e){return new It(t,e)};function It(t,e){je.call(this),this.g=new Kg(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Ao(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ao(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new hr(this)}qe(It,je);It.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var t=this.g,e=this.l,n=this.h||void 0;pt(0),t.Y=e,t.ma=n||{},t.M=t.aa,t.G=em(t,null,t.Y),Aa(t)};It.prototype.close=function(){lu(this.g)};It.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Zl(t),t=n);e.i.push(new zT(e.fb++,t)),e.H==3&&Aa(e)};It.prototype.N=function(){this.g.l=null,delete this.j,lu(this.g),delete this.g,It.$.N.call(this)};function sm(t){su.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}qe(sm,su);function rm(){ru.call(this),this.status=1}qe(rm,ru);function hr(t){this.g=t}qe(hr,nm);hr.prototype.Ba=function(){Qe(this.g,"a")};hr.prototype.Aa=function(t){Qe(this.g,new sm(t))};hr.prototype.za=function(t){Qe(this.g,new rm)};hr.prototype.ya=function(){Qe(this.g,"b")};function tb(){this.blockSize=-1}function Ht(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}qe(Ht,tb);Ht.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function fc(t,e,n){n||(n=0);var s=Array(16);if(typeof e=="string")for(var r=0;16>r;++r)s[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)s[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var i=t.g[3],o=e+(i^n&(r^i))+s[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[2]+606105819&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[6]+2821735955&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[10]+4294925233&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[14]+2792965006&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(r^i&(n^r))+s[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[11]+643717713&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[15]+3634488961&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[3]+4107603335&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[7]+1735328473&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(n^r^i)+s[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[11]+1839030562&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[7]+4139469664&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[3]+3572445317&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[15]+530742520&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(r^(n|~i))+s[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[14]+2878612391&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[10]+4293915773&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[6]+2734768916&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[2]+718787259&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+i&4294967295}Ht.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,s=this.m,r=this.h,i=0;i<e;){if(r==0)for(;i<=n;)fc(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(s[r++]=t.charCodeAt(i++),r==this.blockSize){fc(this,s),r=0;break}}else for(;i<e;)if(s[r++]=t[i++],r==this.blockSize){fc(this,s),r=0;break}}this.h=r,this.i+=e};Ht.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};function de(t,e){this.h=e;for(var n=[],s=!0,r=t.length-1;0<=r;r--){var i=t[r]|0;s&&i==e||(n[r]=i,s=!1)}this.g=n}var nb={};function du(t){return-128<=t&&128>t?sg(nb,t,function(e){return new de([e|0],0>e?-1:0)}):new de([t|0],0>t?-1:0)}function Yt(t){if(isNaN(t)||!isFinite(t))return $s;if(0>t)return We(Yt(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=nl;return new de(e,0)}function im(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return We(im(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Yt(Math.pow(e,8)),s=$s,r=0;r<t.length;r+=8){var i=Math.min(8,t.length-r),o=parseInt(t.substring(r,r+i),e);8>i?(i=Yt(Math.pow(e,i)),s=s.R(i).add(Yt(o))):(s=s.R(n),s=s.add(Yt(o)))}return s}var nl=4294967296,$s=du(0),sl=du(1),Td=du(16777216);P=de.prototype;P.ea=function(){if(At(this))return-We(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:nl+s)*e,e*=nl}return t};P.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(dn(this))return"0";if(At(this))return"-"+We(this).toString(t);for(var e=Yt(Math.pow(t,6)),n=this,s="";;){var r=xo(n,e).g;n=Po(n,r.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=r,dn(n))return i+s;for(;6>i.length;)i="0"+i;s=i+s}};P.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function dn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function At(t){return t.h==-1}P.X=function(t){return t=Po(this,t),At(t)?-1:dn(t)?0:1};function We(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new de(n,~t.h).add(sl)}P.abs=function(){return At(this)?We(this):this};P.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,r=0;r<=e;r++){var i=s+(this.D(r)&65535)+(t.D(r)&65535),o=(i>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);s=o>>>16,i&=65535,o&=65535,n[r]=o<<16|i}return new de(n,n[n.length-1]&-2147483648?-1:0)};function Po(t,e){return t.add(We(e))}P.R=function(t){if(dn(this)||dn(t))return $s;if(At(this))return At(t)?We(this).R(We(t)):We(We(this).R(t));if(At(t))return We(this.R(We(t)));if(0>this.X(Td)&&0>t.X(Td))return Yt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var r=0;r<t.g.length;r++){var i=this.D(s)>>>16,o=this.D(s)&65535,a=t.D(r)>>>16,c=t.D(r)&65535;n[2*s+2*r]+=o*c,Wi(n,2*s+2*r),n[2*s+2*r+1]+=i*c,Wi(n,2*s+2*r+1),n[2*s+2*r+1]+=o*a,Wi(n,2*s+2*r+1),n[2*s+2*r+2]+=i*a,Wi(n,2*s+2*r+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new de(n,0)};function Wi(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function br(t,e){this.g=t,this.h=e}function xo(t,e){if(dn(e))throw Error("division by zero");if(dn(t))return new br($s,$s);if(At(t))return e=xo(We(t),e),new br(We(e.g),We(e.h));if(At(e))return e=xo(t,We(e)),new br(We(e.g),e.h);if(30<t.g.length){if(At(t)||At(e))throw Error("slowDivide_ only works with positive integers.");for(var n=sl,s=e;0>=s.X(t);)n=bd(n),s=bd(s);var r=Ss(n,1),i=Ss(s,1);for(s=Ss(s,2),n=Ss(n,2);!dn(s);){var o=i.add(s);0>=o.X(t)&&(r=r.add(n),i=o),s=Ss(s,1),n=Ss(n,1)}return e=Po(t,r.R(e)),new br(r,e)}for(r=$s;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),i=Yt(n),o=i.R(e);At(o)||0<o.X(t);)n-=s,i=Yt(n),o=i.R(e);dn(i)&&(i=sl),r=r.add(i),t=Po(t,o)}return new br(r,t)}P.gb=function(t){return xo(this,t).h};P.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new de(n,this.h&t.h)};P.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new de(n,this.h|t.h)};P.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new de(n,this.h^t.h)};function bd(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new de(n,t.h)}function Ss(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,r=[],i=0;i<s;i++)r[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new de(r,t.h)}Oo.prototype.createWebChannel=Oo.prototype.g;It.prototype.send=It.prototype.u;It.prototype.open=It.prototype.m;It.prototype.close=It.prototype.close;_a.NO_ERROR=0;_a.TIMEOUT=8;_a.HTTP_ERROR=6;Tg.COMPLETE="complete";bg.EventType=wi;wi.OPEN="a";wi.CLOSE="b";wi.ERROR="c";wi.MESSAGE="d";je.prototype.listen=je.prototype.O;Re.prototype.listenOnce=Re.prototype.P;Re.prototype.getLastError=Re.prototype.Sa;Re.prototype.getLastErrorCode=Re.prototype.Ia;Re.prototype.getStatus=Re.prototype.da;Re.prototype.getResponseJson=Re.prototype.Wa;Re.prototype.getResponseText=Re.prototype.ja;Re.prototype.send=Re.prototype.ha;Re.prototype.setWithCredentials=Re.prototype.Oa;Ht.prototype.digest=Ht.prototype.l;Ht.prototype.reset=Ht.prototype.reset;Ht.prototype.update=Ht.prototype.j;de.prototype.add=de.prototype.add;de.prototype.multiply=de.prototype.R;de.prototype.modulo=de.prototype.gb;de.prototype.compare=de.prototype.X;de.prototype.toNumber=de.prototype.ea;de.prototype.toString=de.prototype.toString;de.prototype.getBits=de.prototype.D;de.fromNumber=Yt;de.fromString=im;var sb=function(){return new Oo},rb=function(){return va()},pc=_a,ib=Tg,ob=_s,Cd={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},ab=Ti,Gi=bg,cb=Re,lb=Ht,Vs=de;const Ad="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}et.UNAUTHENTICATED=new et(null),et.GOOGLE_CREDENTIALS=new et("google-credentials-uid"),et.FIRST_PARTY=new et("first-party-uid"),et.MOCK_USER=new et("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dr="9.21.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs=new jl("@firebase/firestore");function Sd(){return fs.logLevel}function $(t,...e){if(fs.logLevel<=le.DEBUG){const n=e.map(fu);fs.debug(`Firestore (${dr}): ${t}`,...n)}}function vn(t,...e){if(fs.logLevel<=le.ERROR){const n=e.map(fu);fs.error(`Firestore (${dr}): ${t}`,...n)}}function Zs(t,...e){if(fs.logLevel<=le.WARN){const n=e.map(fu);fs.warn(`Firestore (${dr}): ${t}`,...n)}}function fu(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(t="Unexpected state"){const e=`FIRESTORE (${dr}) INTERNAL ASSERTION FAILED: `+t;throw vn(e),new Error(e)}function Te(t,e){t||W()}function J(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends an{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ub{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(et.UNAUTHENTICATED))}shutdown(){}}class hb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class db{constructor(e){this.t=e,this.currentUser=et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new gn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new gn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new gn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Te(typeof s.accessToken=="string"),new om(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Te(e===null||typeof e=="string"),new et(e)}}class fb{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=et.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class pb{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new fb(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class gb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class mb{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=i=>{i.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?r(i):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Te(typeof n.token=="string"),this.T=n.token,new gb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=yb(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function ue(t,e){return t<e?-1:t>e?1:0}function er(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new U(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new U(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new U(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ue.fromMillis(Date.now())}static fromDate(e){return Ue.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Ue(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Y(e)}static min(){return new Y(new Ue(0,0))}static max(){return new Y(new Ue(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e,n,s){n===void 0?n=0:n>e.length&&W(),s===void 0?s=e.length-n:s>e.length-n&&W(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return si.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof si?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ie extends si{construct(e,n,s){return new Ie(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new U(w.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Ie(n)}static emptyPath(){return new Ie([])}}const vb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class st extends si{construct(e,n,s){return new st(e,n,s)}static isValidIdentifier(e){return vb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),st.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new st(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new U(w.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new U(w.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new U(w.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new U(w.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new st(n)}static emptyPath(){return new st([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(Ie.fromString(e))}static fromName(e){return new j(Ie.fromString(e).popFirst(5))}static empty(){return new j(Ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new Ie(e.slice()))}}function _b(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=Y.fromTimestamp(s===1e9?new Ue(n+1,0):new Ue(n,s));return new jn(r,j.empty(),e)}function wb(t){return new jn(t.readTime,t.key,-1)}class jn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new jn(Y.min(),j.empty(),-1)}static max(){return new jn(Y.max(),j.empty(),-1)}}function Eb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=j.comparator(t.documentKey,e.documentKey),n!==0?n:ue(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ib="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Tb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ai(t){if(t.code!==w.FAILED_PRECONDITION||t.message!==Ib)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&W(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new C((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof C?n:C.resolve(n)}catch(n){return C.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):C.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):C.reject(n)}static resolve(e){return new C((n,s)=>{n(e)})}static reject(e){return new C((n,s)=>{s(e)})}static waitFor(e){return new C((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=C.resolve(!1);for(const s of e)n=n.next(r=>r?C.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new C((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new C((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function Si(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}pu.ct=-1;function Sa(t){return t==null}function Mo(t){return t===0&&1/t==-1/0}function bb(t){return typeof t=="number"&&Number.isInteger(t)&&!Mo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function fr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function cm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,n){this.comparator=e,this.root=n||Ke.EMPTY}insert(e,n){return new Se(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ke.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ke.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Qi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Qi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Qi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Qi(this.root,e,this.comparator,!0)}}class Qi{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ke{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??Ke.RED,this.left=r??Ke.EMPTY,this.right=i??Ke.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Ke(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ke.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Ke.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw W();const e=this.left.check();if(e!==this.right.check())throw W();return e+(this.isRed()?0:1)}}Ke.EMPTY=null,Ke.RED=!0,Ke.BLACK=!1;Ke.EMPTY=new class{constructor(){this.size=0}get key(){throw W()}get value(){throw W()}get color(){throw W()}get left(){throw W()}get right(){throw W()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Ke(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new kd(this.data.getIterator())}getIteratorFrom(e){return new kd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof ot)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ot(this.comparator);return n.data=e,n}}class kd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.fields=e,e.sort(st.comparator)}static empty(){return new Lt([])}unionWith(e){let n=new ot(st.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Lt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return er(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new lm("Invalid base64 string: "+r):r}}(e);return new lt(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new lt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const Cb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Hn(t){if(Te(!!t),typeof t=="string"){let e=0;const n=Cb.exec(t);if(Te(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Me(t.seconds),nanos:Me(t.nanos)}}function Me(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ps(t){return typeof t=="string"?lt.fromBase64String(t):lt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function mu(t){const e=t.mapValue.fields.__previous_value__;return gu(e)?mu(e):e}function ri(t){const e=Hn(t.mapValue.fields.__local_write_time__.timestampValue);return new Ue(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class ii{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ii("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ii&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function gs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?gu(t)?4:Sb(t)?9007199254740991:10:W()}function rn(t,e){if(t===e)return!0;const n=gs(t);if(n!==gs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ri(t).isEqual(ri(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Hn(s.timestampValue),o=Hn(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return ps(s.bytesValue).isEqual(ps(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Me(s.geoPointValue.latitude)===Me(r.geoPointValue.latitude)&&Me(s.geoPointValue.longitude)===Me(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Me(s.integerValue)===Me(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Me(s.doubleValue),o=Me(r.doubleValue);return i===o?Mo(i)===Mo(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return er(t.arrayValue.values||[],e.arrayValue.values||[],rn);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Rd(i)!==Rd(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!rn(i[a],o[a])))return!1;return!0}(t,e);default:return W()}}function oi(t,e){return(t.values||[]).find(n=>rn(n,e))!==void 0}function tr(t,e){if(t===e)return 0;const n=gs(t),s=gs(e);if(n!==s)return ue(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ue(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Me(r.integerValue||r.doubleValue),a=Me(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Dd(t.timestampValue,e.timestampValue);case 4:return Dd(ri(t),ri(e));case 5:return ue(t.stringValue,e.stringValue);case 6:return function(r,i){const o=ps(r),a=ps(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=ue(o[c],a[c]);if(l!==0)return l}return ue(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=ue(Me(r.latitude),Me(i.latitude));return o!==0?o:ue(Me(r.longitude),Me(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=tr(o[c],a[c]);if(l)return l}return ue(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===Xi.mapValue&&i===Xi.mapValue)return 0;if(r===Xi.mapValue)return 1;if(i===Xi.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=ue(a[u],l[u]);if(h!==0)return h;const d=tr(o[a[u]],c[l[u]]);if(d!==0)return d}return ue(a.length,l.length)}(t.mapValue,e.mapValue);default:throw W()}}function Dd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ue(t,e);const n=Hn(t),s=Hn(e),r=ue(n.seconds,s.seconds);return r!==0?r:ue(n.nanos,s.nanos)}function nr(t){return rl(t)}function rl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=Hn(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ps(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,j.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=rl(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${rl(s.fields[a])}`;return i+"}"}(t.mapValue):W();var e,n}function Nd(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function il(t){return!!t&&"integerValue"in t}function yu(t){return!!t&&"arrayValue"in t}function Od(t){return!!t&&"nullValue"in t}function Pd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ao(t){return!!t&&"mapValue"in t}function $r(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return fr(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=$r(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=$r(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Sb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.value=e}static empty(){return new St({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!ao(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=$r(n)}setAll(e){let n=st.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=$r(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());ao(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return rn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];ao(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){fr(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new St($r(this.value))}}function um(t){const e=[];return fr(t.fields,(n,s)=>{const r=new st([n]);if(ao(s)){const i=um(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Lt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new tt(e,0,Y.min(),Y.min(),Y.min(),St.empty(),0)}static newFoundDocument(e,n,s,r){return new tt(e,1,n,Y.min(),s,r,0)}static newNoDocument(e,n){return new tt(e,2,n,Y.min(),Y.min(),St.empty(),0)}static newUnknownDocument(e,n){return new tt(e,3,n,Y.min(),Y.min(),St.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=St.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=St.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,n){this.position=e,this.inclusive=n}}function xd(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=j.comparator(j.fromName(o.referenceValue),n.key):s=tr(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Md(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!rn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e,n="asc"){this.field=e,this.dir=n}}function Rb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{}class Le extends hm{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new Db(e,n,s):n==="array-contains"?new Pb(e,s):n==="in"?new xb(e,s):n==="not-in"?new Mb(e,s):n==="array-contains-any"?new Lb(e,s):new Le(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new Nb(e,s):new Ob(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(tr(n,this.value)):n!==null&&gs(this.value)===gs(n)&&this.matchesComparison(tr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return W()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class qt extends hm{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new qt(e,n)}matches(e){return dm(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function dm(t){return t.op==="and"}function fm(t){return kb(t)&&dm(t)}function kb(t){for(const e of t.filters)if(e instanceof qt)return!1;return!0}function ol(t){if(t instanceof Le)return t.field.canonicalString()+t.op.toString()+nr(t.value);if(fm(t))return t.filters.map(e=>ol(e)).join(",");{const e=t.filters.map(n=>ol(n)).join(",");return`${t.op}(${e})`}}function pm(t,e){return t instanceof Le?function(n,s){return s instanceof Le&&n.op===s.op&&n.field.isEqual(s.field)&&rn(n.value,s.value)}(t,e):t instanceof qt?function(n,s){return s instanceof qt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&pm(i,s.filters[o]),!0):!1}(t,e):void W()}function gm(t){return t instanceof Le?function(e){return`${e.field.canonicalString()} ${e.op} ${nr(e.value)}`}(t):t instanceof qt?function(e){return e.op.toString()+" {"+e.getFilters().map(gm).join(" ,")+"}"}(t):"Filter"}class Db extends Le{constructor(e,n,s){super(e,n,s),this.key=j.fromName(s.referenceValue)}matches(e){const n=j.comparator(e.key,this.key);return this.matchesComparison(n)}}class Nb extends Le{constructor(e,n){super(e,"in",n),this.keys=mm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Ob extends Le{constructor(e,n){super(e,"not-in",n),this.keys=mm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function mm(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>j.fromName(s.referenceValue))}class Pb extends Le{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return yu(n)&&oi(n.arrayValue,this.value)}}class xb extends Le{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&oi(this.value.arrayValue,n)}}class Mb extends Le{constructor(e,n){super(e,"not-in",n)}matches(e){if(oi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!oi(this.value.arrayValue,n)}}class Lb extends Le{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!yu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>oi(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function Ld(t,e=null,n=[],s=[],r=null,i=null,o=null){return new Ub(t,e,n,s,r,i,o)}function vu(t){const e=J(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>ol(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Sa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>nr(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>nr(s)).join(",")),e.ft=n}return e.ft}function _u(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Rb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!pm(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Md(t.startAt,e.startAt)&&Md(t.endAt,e.endAt)}function al(t){return j.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function Fb(t,e,n,s,r,i,o,a){return new pr(t,e,n,s,r,i,o,a)}function wu(t){return new pr(t)}function Ud(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Eu(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Ra(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function ym(t){return t.collectionGroup!==null}function js(t){const e=J(t);if(e.dt===null){e.dt=[];const n=Ra(e),s=Eu(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new Bs(n)),e.dt.push(new Bs(st.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Bs(st.keyField(),i))}}}return e.dt}function _n(t){const e=J(t);if(!e._t)if(e.limitType==="F")e._t=Ld(e.path,e.collectionGroup,js(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of js(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Bs(i.field,o))}const s=e.endAt?new Lo(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Lo(e.startAt.position,e.startAt.inclusive):null;e._t=Ld(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e._t}function cl(t,e){e.getFirstInequalityField(),Ra(t);const n=t.filters.concat([e]);return new pr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function ll(t,e,n){return new pr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ka(t,e){return _u(_n(t),_n(e))&&t.limitType===e.limitType}function vm(t){return`${vu(_n(t))}|lt:${t.limitType}`}function ul(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>gm(s)).join(", ")}]`),Sa(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>nr(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>nr(s)).join(",")),`Target(${n})`}(_n(t))}; limitType=${t.limitType})`}function Da(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):j.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of js(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=xd(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,js(n),s)||n.endAt&&!function(r,i,o){const a=xd(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,js(n),s))}(t,e)}function $b(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function _m(t){return(e,n)=>{let s=!1;for(const r of js(t)){const i=Vb(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function Vb(t,e,n){const s=t.field.isKeyField()?j.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?tr(a,c):W()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return W()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){fr(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return cm(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bb=new Se(j.comparator);function wn(){return Bb}const wm=new Se(j.comparator);function Nr(...t){let e=wm;for(const n of t)e=e.insert(n.key,n);return e}function Em(t){let e=wm;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function rs(){return Vr()}function Im(){return Vr()}function Vr(){return new gr(t=>t.toString(),(t,e)=>t.isEqual(e))}const jb=new Se(j.comparator),Hb=new ot(j.comparator);function se(...t){let e=Hb;for(const n of t)e=e.add(n);return e}const qb=new ot(ue);function zb(){return qb}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Mo(e)?"-0":e}}function bm(t){return{integerValue:""+t}}function Kb(t,e){return bb(e)?bm(e):Tm(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(){this._=void 0}}function Wb(t,e,n){return t instanceof Uo?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&gu(r)&&(r=mu(r)),r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof ai?Am(t,e):t instanceof ci?Sm(t,e):function(s,r){const i=Cm(s,r),o=Fd(i)+Fd(s.wt);return il(i)&&il(s.wt)?bm(o):Tm(s.serializer,o)}(t,e)}function Gb(t,e,n){return t instanceof ai?Am(t,e):t instanceof ci?Sm(t,e):n}function Cm(t,e){return t instanceof Fo?il(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Uo extends Na{}class ai extends Na{constructor(e){super(),this.elements=e}}function Am(t,e){const n=Rm(e);for(const s of t.elements)n.some(r=>rn(r,s))||n.push(s);return{arrayValue:{values:n}}}class ci extends Na{constructor(e){super(),this.elements=e}}function Sm(t,e){let n=Rm(e);for(const s of t.elements)n=n.filter(r=>!rn(r,s));return{arrayValue:{values:n}}}class Fo extends Na{constructor(e,n){super(),this.serializer=e,this.wt=n}}function Fd(t){return Me(t.integerValue||t.doubleValue)}function Rm(t){return yu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Qb(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof ai&&s instanceof ai||n instanceof ci&&s instanceof ci?er(n.elements,s.elements,rn):n instanceof Fo&&s instanceof Fo?rn(n.wt,s.wt):n instanceof Uo&&s instanceof Uo}(t.transform,e.transform)}class Xb{constructor(e,n){this.version=e,this.transformResults=n}}class Bt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Bt}static exists(e){return new Bt(void 0,e)}static updateTime(e){return new Bt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function co(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Oa{}function km(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Iu(t.key,Bt.none()):new Ri(t.key,t.data,Bt.none());{const n=t.data,s=St.empty();let r=new ot(st.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new ws(t.key,s,new Lt(r.toArray()),Bt.none())}}function Yb(t,e,n){t instanceof Ri?function(s,r,i){const o=s.value.clone(),a=Vd(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof ws?function(s,r,i){if(!co(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Vd(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Dm(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Br(t,e,n,s){return t instanceof Ri?function(r,i,o,a){if(!co(r.precondition,i))return o;const c=r.value.clone(),l=Bd(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof ws?function(r,i,o,a){if(!co(r.precondition,i))return o;const c=Bd(r.fieldTransforms,a,i),l=i.data;return l.setAll(Dm(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return co(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function Jb(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Cm(s.transform,r||null);i!=null&&(n===null&&(n=St.empty()),n.set(s.field,i))}return n||null}function $d(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&er(n,s,(r,i)=>Qb(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ri extends Oa{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ws extends Oa{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Dm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Vd(t,e,n){const s=new Map;Te(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,Gb(o,a,n[r]))}return s}function Bd(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,Wb(i,o,e))}return s}class Iu extends Oa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Zb extends Oa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&Yb(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Br(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Br(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Im();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=km(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(Y.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),se())}isEqual(e){return this.batchId===e.batchId&&er(this.mutations,e.mutations,(n,s)=>$d(n,s))&&er(this.baseMutations,e.baseMutations,(n,s)=>$d(n,s))}}class Tu{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){Te(e.mutations.length===s.length);let r=jb;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Tu(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xe,re;function sC(t){switch(t){default:return W();case w.CANCELLED:case w.UNKNOWN:case w.DEADLINE_EXCEEDED:case w.RESOURCE_EXHAUSTED:case w.INTERNAL:case w.UNAVAILABLE:case w.UNAUTHENTICATED:return!1;case w.INVALID_ARGUMENT:case w.NOT_FOUND:case w.ALREADY_EXISTS:case w.PERMISSION_DENIED:case w.FAILED_PRECONDITION:case w.ABORTED:case w.OUT_OF_RANGE:case w.UNIMPLEMENTED:case w.DATA_LOSS:return!0}}function Nm(t){if(t===void 0)return vn("GRPC error has no .code"),w.UNKNOWN;switch(t){case xe.OK:return w.OK;case xe.CANCELLED:return w.CANCELLED;case xe.UNKNOWN:return w.UNKNOWN;case xe.DEADLINE_EXCEEDED:return w.DEADLINE_EXCEEDED;case xe.RESOURCE_EXHAUSTED:return w.RESOURCE_EXHAUSTED;case xe.INTERNAL:return w.INTERNAL;case xe.UNAVAILABLE:return w.UNAVAILABLE;case xe.UNAUTHENTICATED:return w.UNAUTHENTICATED;case xe.INVALID_ARGUMENT:return w.INVALID_ARGUMENT;case xe.NOT_FOUND:return w.NOT_FOUND;case xe.ALREADY_EXISTS:return w.ALREADY_EXISTS;case xe.PERMISSION_DENIED:return w.PERMISSION_DENIED;case xe.FAILED_PRECONDITION:return w.FAILED_PRECONDITION;case xe.ABORTED:return w.ABORTED;case xe.OUT_OF_RANGE:return w.OUT_OF_RANGE;case xe.UNIMPLEMENTED:return w.UNIMPLEMENTED;case xe.DATA_LOSS:return w.DATA_LOSS;default:return W()}}(re=xe||(xe={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Yi}static getOrCreateInstance(){return Yi===null&&(Yi=new bu),Yi}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Yi=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rC(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iC=new Vs([4294967295,4294967295],0);function jd(t){const e=rC().encode(t),n=new lb;return n.update(e),new Uint8Array(n.digest())}function Hd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Vs([n,s],0),new Vs([r,i],0)]}class Cu{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Or(`Invalid padding: ${n}`);if(s<0)throw new Or(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Or(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new Or(`Invalid padding when bitmap length is 0: ${n}`);this.yt=8*e.length-n,this.It=Vs.fromNumber(this.yt)}Tt(e,n,s){let r=e.add(n.multiply(Vs.fromNumber(s)));return r.compare(iC)===1&&(r=new Vs([r.getBits(0),r.getBits(1)],0)),r.modulo(this.It).toNumber()}Et(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}At(e){if(this.yt===0)return!1;const n=jd(e),[s,r]=Hd(n);for(let i=0;i<this.hashCount;i++){const o=this.Tt(s,r,i);if(!this.Et(o))return!1}return!0}static create(e,n,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Cu(i,r,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.yt===0)return;const n=jd(e),[s,r]=Hd(n);for(let i=0;i<this.hashCount;i++){const o=this.Tt(s,r,i);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class Or extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,ki.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Pa(Y.min(),r,new Se(ue),wn(),se())}}class ki{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new ki(s,n,se(),se(),se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e,n,s,r){this.vt=e,this.removedTargetIds=n,this.key=s,this.Pt=r}}class Om{constructor(e,n){this.targetId=e,this.bt=n}}class Pm{constructor(e,n,s=lt.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class qd{constructor(){this.Vt=0,this.St=Kd(),this.Dt=lt.EMPTY_BYTE_STRING,this.Ct=!1,this.xt=!0}get current(){return this.Ct}get resumeToken(){return this.Dt}get Nt(){return this.Vt!==0}get kt(){return this.xt}Mt(e){e.approximateByteSize()>0&&(this.xt=!0,this.Dt=e)}Ot(){let e=se(),n=se(),s=se();return this.St.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:W()}}),new ki(this.Dt,this.Ct,e,n,s)}$t(){this.xt=!1,this.St=Kd()}Ft(e,n){this.xt=!0,this.St=this.St.insert(e,n)}Bt(e){this.xt=!0,this.St=this.St.remove(e)}Lt(){this.Vt+=1}qt(){this.Vt-=1}Ut(){this.xt=!0,this.Ct=!0}}class oC{constructor(e){this.Kt=e,this.Gt=new Map,this.Qt=wn(),this.jt=zd(),this.zt=new Se(ue)}Wt(e){for(const n of e.vt)e.Pt&&e.Pt.isFoundDocument()?this.Ht(n,e.Pt):this.Jt(n,e.key,e.Pt);for(const n of e.removedTargetIds)this.Jt(n,e.key,e.Pt)}Yt(e){this.forEachTarget(e,n=>{const s=this.Xt(n);switch(e.state){case 0:this.Zt(n)&&s.Mt(e.resumeToken);break;case 1:s.qt(),s.Nt||s.$t(),s.Mt(e.resumeToken);break;case 2:s.qt(),s.Nt||this.removeTarget(n);break;case 3:this.Zt(n)&&(s.Ut(),s.Mt(e.resumeToken));break;case 4:this.Zt(n)&&(this.te(n),s.Mt(e.resumeToken));break;default:W()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Gt.forEach((s,r)=>{this.Zt(r)&&n(r)})}ee(e){var n;const s=e.targetId,r=e.bt.count,i=this.ne(s);if(i){const o=i.target;if(al(o))if(r===0){const a=new j(o.path);this.Jt(s,a,tt.newNoDocument(a,Y.min()))}else Te(r===1);else{const a=this.se(s);if(a!==r){const c=this.ie(e,a);if(c!==0){this.te(s);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.zt=this.zt.insert(s,l)}(n=bu.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(l,u,h){var d,g,m,v,b,A;const M={localCacheCount:u,existenceFilterCount:h.count},k=h.unchangedNames;return k&&(M.bloomFilter={applied:l===0,hashCount:(d=k==null?void 0:k.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(v=(m=(g=k==null?void 0:k.bits)===null||g===void 0?void 0:g.bitmap)===null||m===void 0?void 0:m.length)!==null&&v!==void 0?v:0,padding:(A=(b=k==null?void 0:k.bits)===null||b===void 0?void 0:b.padding)!==null&&A!==void 0?A:0}),M}(c,a,e.bt))}}}}ie(e,n){const{unchangedNames:s,count:r}=e.bt;if(!s||!s.bits)return 1;const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=s;let c,l;try{c=ps(i).toUint8Array()}catch(u){if(u instanceof lm)return Zs("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw u}try{l=new Cu(c,o,a)}catch(u){return Zs(u instanceof Or?"BloomFilter error: ":"Applying bloom filter failed: ",u),1}return l.yt===0?1:r!==n-this.re(e.targetId,l)?2:0}re(e,n){const s=this.Kt.getRemoteKeysForTarget(e);let r=0;return s.forEach(i=>{const o=this.Kt.oe(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;n.At(a)||(this.Jt(e,i,null),r++)}),r}ue(e){const n=new Map;this.Gt.forEach((i,o)=>{const a=this.ne(o);if(a){if(i.current&&al(a.target)){const c=new j(a.target.path);this.Qt.get(c)!==null||this.ce(o,c)||this.Jt(o,c,tt.newNoDocument(c,e))}i.kt&&(n.set(o,i.Ot()),i.$t())}});let s=se();this.jt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.ne(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(i))}),this.Qt.forEach((i,o)=>o.setReadTime(e));const r=new Pa(e,n,this.zt,this.Qt,s);return this.Qt=wn(),this.jt=zd(),this.zt=new Se(ue),r}Ht(e,n){if(!this.Zt(e))return;const s=this.ce(e,n.key)?2:0;this.Xt(e).Ft(n.key,s),this.Qt=this.Qt.insert(n.key,n),this.jt=this.jt.insert(n.key,this.ae(n.key).add(e))}Jt(e,n,s){if(!this.Zt(e))return;const r=this.Xt(e);this.ce(e,n)?r.Ft(n,1):r.Bt(n),this.jt=this.jt.insert(n,this.ae(n).delete(e)),s&&(this.Qt=this.Qt.insert(n,s))}removeTarget(e){this.Gt.delete(e)}se(e){const n=this.Xt(e).Ot();return this.Kt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Lt(e){this.Xt(e).Lt()}Xt(e){let n=this.Gt.get(e);return n||(n=new qd,this.Gt.set(e,n)),n}ae(e){let n=this.jt.get(e);return n||(n=new ot(ue),this.jt=this.jt.insert(e,n)),n}Zt(e){const n=this.ne(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}ne(e){const n=this.Gt.get(e);return n&&n.Nt?null:this.Kt.he(e)}te(e){this.Gt.set(e,new qd),this.Kt.getRemoteKeysForTarget(e).forEach(n=>{this.Jt(e,n,null)})}ce(e,n){return this.Kt.getRemoteKeysForTarget(e).has(n)}}function zd(){return new Se(j.comparator)}function Kd(){return new Se(j.comparator)}const aC=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),cC=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),lC=(()=>({and:"AND",or:"OR"}))();class uC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function hl(t,e){return t.useProto3Json||Sa(e)?e:{value:e}}function $o(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function xm(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function hC(t,e){return $o(t,e.toTimestamp())}function en(t){return Te(!!t),Y.fromTimestamp(function(e){const n=Hn(e);return new Ue(n.seconds,n.nanos)}(t))}function Au(t,e){return function(n){return new Ie(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Mm(t){const e=Ie.fromString(t);return Te($m(e)),e}function dl(t,e){return Au(t.databaseId,e.path)}function gc(t,e){const n=Mm(e);if(n.get(1)!==t.databaseId.projectId)throw new U(w.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new U(w.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new j(Lm(n))}function fl(t,e){return Au(t.databaseId,e)}function dC(t){const e=Mm(t);return e.length===4?Ie.emptyPath():Lm(e)}function pl(t){return new Ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Lm(t){return Te(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Wd(t,e,n){return{name:dl(t,e),fields:n.value.mapValue.fields}}function fC(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:W()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.useProto3Json?(Te(l===void 0||typeof l=="string"),lt.fromBase64String(l||"")):(Te(l===void 0||l instanceof Uint8Array),lt.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?w.UNKNOWN:Nm(c.code);return new U(l,c.message||"")}(o);n=new Pm(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=gc(t,s.document.name),i=en(s.document.updateTime),o=s.document.createTime?en(s.document.createTime):Y.min(),a=new St({mapValue:{fields:s.document.fields}}),c=tt.newFoundDocument(r,i,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new lo(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=gc(t,s.document),i=s.readTime?en(s.readTime):Y.min(),o=tt.newNoDocument(r,i),a=s.removedTargetIds||[];n=new lo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=gc(t,s.document),i=s.removedTargetIds||[];n=new lo([],i,r,null)}else{if(!("filter"in e))return W();{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new nC(r,i),a=s.targetId;n=new Om(a,o)}}return n}function pC(t,e){let n;if(e instanceof Ri)n={update:Wd(t,e.key,e.value)};else if(e instanceof Iu)n={delete:dl(t,e.key)};else if(e instanceof ws)n={update:Wd(t,e.key,e.data),updateMask:TC(e.fieldMask)};else{if(!(e instanceof Zb))return W();n={verify:dl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Uo)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ai)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ci)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Fo)return{fieldPath:i.field.canonicalString(),increment:o.wt};throw W()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:hC(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:W()}(t,e.precondition)),n}function gC(t,e){return t&&t.length>0?(Te(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?en(s.updateTime):en(r);return i.isEqual(Y.min())&&(i=en(r)),new Xb(i,s.transformResults||[])}(n,e))):[]}function mC(t,e){return{documents:[fl(t,e.path)]}}function yC(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=fl(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=fl(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return Fm(qt.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Ds(u.field),direction:wC(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=hl(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function vC(t){let e=dC(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Te(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const h=Um(u);return h instanceof qt&&fm(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Bs(Ns(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Sa(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new Lo(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new Lo(d,h)}(n.endAt)),Fb(e,r,o,i,a,"F",c,l)}function _C(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return W()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Um(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Ns(e.unaryFilter.field);return Le.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Ns(e.unaryFilter.field);return Le.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ns(e.unaryFilter.field);return Le.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Ns(e.unaryFilter.field);return Le.create(i,"!=",{nullValue:"NULL_VALUE"});default:return W()}}(t):t.fieldFilter!==void 0?function(e){return Le.create(Ns(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return W()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return qt.create(e.compositeFilter.filters.map(n=>Um(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return W()}}(e.compositeFilter.op))}(t):W()}function wC(t){return aC[t]}function EC(t){return cC[t]}function IC(t){return lC[t]}function Ds(t){return{fieldPath:t.canonicalString()}}function Ns(t){return st.fromServerFormat(t.fieldPath)}function Fm(t){return t instanceof Le?function(e){if(e.op==="=="){if(Pd(e.value))return{unaryFilter:{field:Ds(e.field),op:"IS_NAN"}};if(Od(e.value))return{unaryFilter:{field:Ds(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Pd(e.value))return{unaryFilter:{field:Ds(e.field),op:"IS_NOT_NAN"}};if(Od(e.value))return{unaryFilter:{field:Ds(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ds(e.field),op:EC(e.op),value:e.value}}}(t):t instanceof qt?function(e){const n=e.getFilters().map(s=>Fm(s));return n.length===1?n[0]:{compositeFilter:{op:IC(e.op),filters:n}}}(t):W()}function TC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function $m(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e,n,s,r,i=Y.min(),o=Y.min(),a=lt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Pn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Pn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Pn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Pn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC{constructor(e){this.le=e}}function CC(t){const e=vC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ll(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(){this.sn=new SC}addToCollectionParentIndex(e,n){return this.sn.add(n),C.resolve()}getCollectionParents(e,n){return C.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return C.resolve()}deleteFieldIndex(e,n){return C.resolve()}getDocumentsMatchingTarget(e,n){return C.resolve(null)}getIndexType(e,n){return C.resolve(0)}getFieldIndexes(e,n){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,n){return C.resolve(jn.min())}getMinOffsetFromCollectionGroup(e,n){return C.resolve(jn.min())}updateCollectionGroup(e,n,s){return C.resolve()}updateIndexEntries(e,n){return C.resolve()}}class SC{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new ot(Ie.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new ot(Ie.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static Nn(){return new sr(0)}static kn(){return new sr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(){this.changes=new gr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,tt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?C.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&Br(s.mutation,r,Lt.empty(),Ue.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,se()).next(()=>s))}getLocalViewOfDocuments(e,n,s=se()){const r=rs();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=Nr();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=rs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,se()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=wn();const o=Vr(),a=Vr();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof ws)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Br(u.mutation,l,u.mutation.getFieldMask(),Ue.now())):o.set(l.key,Lt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new kC(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Vr();let r=new Se((o,a)=>o-a),i=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||Lt.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||se()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Im();u.forEach(d=>{if(!i.has(d)){const g=km(n.get(d),s.get(d));g!==null&&h.set(d,g),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return C.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return j.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):ym(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):C.resolve(rs());let a=-1,c=i;return o.next(l=>C.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?C.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,se())).next(u=>({batchId:a,changes:Em(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new j(n)).next(s=>{let r=Nr();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=Nr();return this.indexManager.getCollectionParents(e,r).next(o=>C.forEach(o,a=>{const c=function(l,u){return new pr(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,tt.newInvalidDocument(l)))});let o=Nr();return i.forEach((a,c)=>{const l=r.get(a);l!==void 0&&Br(l.mutation,c,Lt.empty(),Ue.now()),Da(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(e){this.serializer=e,this.us=new Map,this.cs=new Map}getBundleMetadata(e,n){return C.resolve(this.us.get(n))}saveBundleMetadata(e,n){var s;return this.us.set(n.id,{id:(s=n).id,version:s.version,createTime:en(s.createTime)}),C.resolve()}getNamedQuery(e,n){return C.resolve(this.cs.get(n))}saveNamedQuery(e,n){return this.cs.set(n.name,function(s){return{name:s.name,query:CC(s.bundledQuery),readTime:en(s.readTime)}}(n)),C.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{constructor(){this.overlays=new Se(j.comparator),this.hs=new Map}getOverlay(e,n){return C.resolve(this.overlays.get(n))}getOverlays(e,n){const s=rs();return C.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.de(e,n,i)}),C.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.hs.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.hs.delete(s)),C.resolve()}getOverlaysForCollection(e,n,s){const r=rs(),i=n.length+1,o=new j(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return C.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Se((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=rs(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=rs(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return C.resolve(a)}de(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.hs.get(r.largestBatchId).delete(s.key);this.hs.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new tC(n,s));let i=this.hs.get(n);i===void 0&&(i=se(),this.hs.set(n,i)),this.hs.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(){this.ls=new ot($e.fs),this.ds=new ot($e._s)}isEmpty(){return this.ls.isEmpty()}addReference(e,n){const s=new $e(e,n);this.ls=this.ls.add(s),this.ds=this.ds.add(s)}ws(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.gs(new $e(e,n))}ys(e,n){e.forEach(s=>this.removeReference(s,n))}ps(e){const n=new j(new Ie([])),s=new $e(n,e),r=new $e(n,e+1),i=[];return this.ds.forEachInRange([s,r],o=>{this.gs(o),i.push(o.key)}),i}Is(){this.ls.forEach(e=>this.gs(e))}gs(e){this.ls=this.ls.delete(e),this.ds=this.ds.delete(e)}Ts(e){const n=new j(new Ie([])),s=new $e(n,e),r=new $e(n,e+1);let i=se();return this.ds.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new $e(e,0),s=this.ls.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class $e{constructor(e,n){this.key=e,this.Es=n}static fs(e,n){return j.comparator(e.key,n.key)||ue(e.Es,n.Es)}static _s(e,n){return ue(e.Es,n.Es)||j.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.As=1,this.Rs=new ot($e.fs)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.As;this.As++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new eC(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.Rs=this.Rs.add(new $e(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return C.resolve(o)}lookupMutationBatch(e,n){return C.resolve(this.vs(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.Ps(s),i=r<0?0:r;return C.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.As-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new $e(n,0),r=new $e(n,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([s,r],o=>{const a=this.vs(o.Es);i.push(a)}),C.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new ot(ue);return n.forEach(r=>{const i=new $e(r,0),o=new $e(r,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([i,o],a=>{s=s.add(a.Es)})}),C.resolve(this.bs(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;j.isDocumentKey(i)||(i=i.child(""));const o=new $e(new j(i),0);let a=new ot(ue);return this.Rs.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.Es)),!0)},o),C.resolve(this.bs(a))}bs(e){const n=[];return e.forEach(s=>{const r=this.vs(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){Te(this.Vs(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Rs;return C.forEach(n.mutations,r=>{const i=new $e(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Rs=s})}Dn(e){}containsKey(e,n){const s=new $e(n,0),r=this.Rs.firstAfterOrEqual(s);return C.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}Vs(e,n){return this.Ps(e)}Ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}vs(e){const n=this.Ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(e){this.Ss=e,this.docs=new Se(j.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Ss(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return C.resolve(s?s.document.mutableCopy():tt.newInvalidDocument(n))}getEntries(e,n){let s=wn();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():tt.newInvalidDocument(r))}),C.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=wn();const o=n.path,a=new j(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||Eb(wb(u),s)<=0||(r.has(u.key)||Da(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return C.resolve(i)}getAllFromCollectionGroup(e,n,s,r){W()}Ds(e,n){return C.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new MC(this)}getSize(e){return C.resolve(this.size)}}class MC extends RC{constructor(e){super(),this.rs=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.rs.addEntry(e,r)):this.rs.removeEntry(s)}),C.waitFor(n)}getFromCache(e,n){return this.rs.getEntry(e,n)}getAllFromCache(e,n){return this.rs.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(e){this.persistence=e,this.Cs=new gr(n=>vu(n),_u),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.xs=0,this.Ns=new Su,this.targetCount=0,this.ks=sr.Nn()}forEachTarget(e,n){return this.Cs.forEach((s,r)=>n(r)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.xs)}allocateTargetId(e){return this.highestTargetId=this.ks.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.xs&&(this.xs=n),C.resolve()}$n(e){this.Cs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ks=new sr(n),this.highestTargetId=n),e.sequenceNumber>this.xs&&(this.xs=e.sequenceNumber)}addTargetData(e,n){return this.$n(n),this.targetCount+=1,C.resolve()}updateTargetData(e,n){return this.$n(n),C.resolve()}removeTargetData(e,n){return this.Cs.delete(n.target),this.Ns.ps(n.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Cs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Cs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),C.waitFor(i).next(()=>r)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,n){const s=this.Cs.get(n)||null;return C.resolve(s)}addMatchingKeys(e,n,s){return this.Ns.ws(n,s),C.resolve()}removeMatchingKeys(e,n,s){this.Ns.ys(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),C.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ns.ps(n),C.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ns.Ts(n);return C.resolve(s)}containsKey(e,n){return C.resolve(this.Ns.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(e,n){this.Ms={},this.overlays={},this.Os=new pu(0),this.$s=!1,this.$s=!0,this.referenceDelegate=e(this),this.Fs=new LC(this),this.indexManager=new AC,this.remoteDocumentCache=function(s){return new xC(s)}(s=>this.referenceDelegate.Bs(s)),this.serializer=new bC(n),this.Ls=new NC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.$s=!1,Promise.resolve()}get started(){return this.$s}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new OC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ms[e.toKey()];return s||(s=new PC(n,this.referenceDelegate),this.Ms[e.toKey()]=s),s}getTargetCache(){return this.Fs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ls}runTransaction(e,n,s){$("MemoryPersistence","Starting transaction:",e);const r=new FC(this.Os.next());return this.referenceDelegate.qs(),s(r).next(i=>this.referenceDelegate.Us(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ks(e,n){return C.or(Object.values(this.Ms).map(s=>()=>s.containsKey(e,n)))}}class FC extends Tb{constructor(e){super(),this.currentSequenceNumber=e}}class Ru{constructor(e){this.persistence=e,this.Gs=new Su,this.Qs=null}static js(e){return new Ru(e)}get zs(){if(this.Qs)return this.Qs;throw W()}addReference(e,n,s){return this.Gs.addReference(s,n),this.zs.delete(s.toString()),C.resolve()}removeReference(e,n,s){return this.Gs.removeReference(s,n),this.zs.add(s.toString()),C.resolve()}markPotentiallyOrphaned(e,n){return this.zs.add(n.toString()),C.resolve()}removeTarget(e,n){this.Gs.ps(n.targetId).forEach(r=>this.zs.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.zs.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}qs(){this.Qs=new Set}Us(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.zs,s=>{const r=j.fromPath(s);return this.Ws(e,r).next(i=>{i||n.removeEntry(r,Y.min())})}).next(()=>(this.Qs=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ws(e,n).next(s=>{s?this.zs.delete(n.toString()):this.zs.add(n.toString())})}Bs(e){return 0}Ws(e,n){return C.or([()=>C.resolve(this.Gs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ks(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.$i=s,this.Fi=r}static Bi(e,n){let s=se(),r=se();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new ku(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C{constructor(){this.Li=!1}initialize(e,n){this.qi=e,this.indexManager=n,this.Li=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Ui(e,n).next(i=>i||this.Ki(e,n,r,s)).next(i=>i||this.Gi(e,n))}Ui(e,n){if(Ud(n))return C.resolve(null);let s=_n(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=ll(n,null,"F"),s=_n(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=se(...i);return this.qi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Qi(n,a);return this.ji(n,l,o,c.readTime)?this.Ui(e,ll(n,null,"F")):this.zi(e,l,n,c)}))})))}Ki(e,n,s,r){return Ud(n)||r.isEqual(Y.min())?this.Gi(e,n):this.qi.getDocuments(e,s).next(i=>{const o=this.Qi(n,i);return this.ji(n,o,s,r)?this.Gi(e,n):(Sd()<=le.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),ul(n)),this.zi(e,o,n,_b(r,-1)))})}Qi(e,n){let s=new ot(_m(e));return n.forEach((r,i)=>{Da(e,i)&&(s=s.add(i))}),s}ji(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Gi(e,n){return Sd()<=le.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",ul(n)),this.qi.getDocumentsMatchingQuery(e,n,jn.min())}zi(e,n,s,r){return this.qi.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(e,n,s,r){this.persistence=e,this.Wi=n,this.serializer=r,this.Hi=new Se(ue),this.Ji=new gr(i=>vu(i),_u),this.Yi=new Map,this.Xi=e.getRemoteDocumentCache(),this.Fs=e.getTargetCache(),this.Ls=e.getBundleCache(),this.Zi(s)}Zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new DC(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Wi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Hi))}}function BC(t,e,n,s){return new VC(t,e,n,s)}async function Vm(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Zi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=se();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({tr:l,removedBatchIds:o,addedBatchIds:a}))})})}function jC(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Xi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=C.resolve();return h.forEach(g=>{d=d.next(()=>l.getEntry(a,g)).next(m=>{const v=c.docVersions.get(g);Te(v!==null),m.version.compareTo(v)<0&&(u.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),l.addEntry(m)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=se();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function Bm(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Fs.getLastRemoteSnapshotVersion(n))}function HC(t,e){const n=J(t),s=e.snapshotVersion;let r=n.Hi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});r=n.Hi;const a=[];e.targetChanges.forEach((u,h)=>{const d=r.get(h);if(!d)return;a.push(n.Fs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Fs.addMatchingKeys(i,u.addedDocuments,h)));let g=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?g=g.withResumeToken(lt.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):u.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(u.resumeToken,s)),r=r.insert(h,g),function(m,v,b){return m.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(d,g,u)&&a.push(n.Fs.updateTargetData(i,g))});let c=wn(),l=se();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(qC(i,o,e.documentUpdates).next(u=>{c=u.er,l=u.nr})),!s.isEqual(Y.min())){const u=n.Fs.getLastRemoteSnapshotVersion(i).next(h=>n.Fs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return C.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Hi=r,i))}function qC(t,e,n){let s=se(),r=se();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=wn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(Y.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):$("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{er:o,nr:r}})}function zC(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function KC(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Fs.getTargetData(s,e).next(i=>i?(r=i,C.resolve(r)):n.Fs.allocateTargetId(s).next(o=>(r=new Pn(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.Fs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Hi.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Hi=n.Hi.insert(s.targetId,s),n.Ji.set(e,s.targetId)),s})}async function gl(t,e,n){const s=J(t),r=s.Hi.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Si(o))throw o;$("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Hi=s.Hi.remove(e),s.Ji.delete(r.target)}function Gd(t,e,n){const s=J(t);let r=Y.min(),i=se();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=J(a),h=u.Ji.get(l);return h!==void 0?C.resolve(u.Hi.get(h)):u.Fs.getTargetData(c,l)}(s,o,_n(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Fs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Wi.getDocumentsMatchingQuery(o,e,n?r:Y.min(),n?i:se())).next(a=>(WC(s,$b(e),a),{documents:a,sr:i})))}function WC(t,e,n){let s=t.Yi.get(e)||Y.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Yi.set(e,s)}class Qd{constructor(){this.activeTargetIds=zb()}hr(e){this.activeTargetIds=this.activeTargetIds.add(e)}lr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ar(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class GC{constructor(){this.Wr=new Qd,this.Hr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Wr.hr(e),this.Hr[e]||"not-current"}updateQueryState(e,n,s){this.Hr[e]=n}removeLocalQueryTarget(e){this.Wr.lr(e)}isLocalQueryTarget(e){return this.Wr.activeTargetIds.has(e)}clearQueryState(e){delete this.Hr[e]}getAllActiveQueryTargets(){return this.Wr.activeTargetIds}isActiveQueryTarget(e){return this.Wr.activeTargetIds.has(e)}start(){return this.Wr=new Qd,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{Jr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(){this.Yr=()=>this.Xr(),this.Zr=()=>this.eo(),this.no=[],this.so()}Jr(e){this.no.push(e)}shutdown(){window.removeEventListener("online",this.Yr),window.removeEventListener("offline",this.Zr)}so(){window.addEventListener("online",this.Yr),window.addEventListener("offline",this.Zr)}Xr(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.no)e(0)}eo(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.no)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ji=null;function mc(){return Ji===null?Ji=268435456+Math.round(2147483648*Math.random()):Ji++,"0x"+Ji.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{constructor(e){this.io=e.io,this.ro=e.ro}oo(e){this.uo=e}co(e){this.ao=e}onMessage(e){this.ho=e}close(){this.ro()}send(e){this.io(e)}lo(){this.uo()}fo(e){this.ao(e)}_o(e){this.ho(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze="WebChannelConnection";class JC extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.wo=n+"://"+e.host,this.mo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get yo(){return!1}po(e,n,s,r,i){const o=mc(),a=this.Io(e,n);$("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const c={};return this.To(c,r,i),this.Eo(e,a,c,s).then(l=>($("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw Zs("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",s),l})}Ao(e,n,s,r,i,o){return this.po(e,n,s,r,i)}To(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+dr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}Io(e,n){const s=XC[e];return`${this.wo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Eo(e,n,s,r){const i=mc();return new Promise((o,a)=>{const c=new cb;c.setWithCredentials(!0),c.listenOnce(ib.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case pc.NO_ERROR:const u=c.getResponseJson();$(Ze,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case pc.TIMEOUT:$(Ze,`RPC '${e}' ${i} timed out`),a(new U(w.DEADLINE_EXCEEDED,"Request time out"));break;case pc.HTTP_ERROR:const h=c.getStatus();if($(Ze,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const g=d==null?void 0:d.error;if(g&&g.status&&g.message){const m=function(v){const b=v.toLowerCase().replace(/_/g,"-");return Object.values(w).indexOf(b)>=0?b:w.UNKNOWN}(g.status);a(new U(m,g.message))}else a(new U(w.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new U(w.UNAVAILABLE,"Connection failed."));break;default:W()}}finally{$(Ze,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(r);$(Ze,`RPC '${e}' ${i} sending request:`,r),c.send(n,"POST",l,s,15)})}Ro(e,n,s){const r=mc(),i=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=sb(),a=rb(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new ab({})),this.To(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const l=i.join("");$(Ze,`Creating RPC '${e}' stream ${r}: ${l}`,c);const u=o.createWebChannel(l,c);let h=!1,d=!1;const g=new YC({io:v=>{d?$(Ze,`Not sending because RPC '${e}' stream ${r} is closed:`,v):(h||($(Ze,`Opening RPC '${e}' stream ${r} transport.`),u.open(),h=!0),$(Ze,`RPC '${e}' stream ${r} sending:`,v),u.send(v))},ro:()=>u.close()}),m=(v,b,A)=>{v.listen(b,M=>{try{A(M)}catch(k){setTimeout(()=>{throw k},0)}})};return m(u,Gi.EventType.OPEN,()=>{d||$(Ze,`RPC '${e}' stream ${r} transport opened.`)}),m(u,Gi.EventType.CLOSE,()=>{d||(d=!0,$(Ze,`RPC '${e}' stream ${r} transport closed`),g.fo())}),m(u,Gi.EventType.ERROR,v=>{d||(d=!0,Zs(Ze,`RPC '${e}' stream ${r} transport errored:`,v),g.fo(new U(w.UNAVAILABLE,"The operation could not be completed")))}),m(u,Gi.EventType.MESSAGE,v=>{var b;if(!d){const A=v.data[0];Te(!!A);const M=A,k=M.error||((b=M[0])===null||b===void 0?void 0:b.error);if(k){$(Ze,`RPC '${e}' stream ${r} received error:`,k);const V=k.status;let ee=function(ke){const z=xe[ke];if(z!==void 0)return Nm(z)}(V),me=k.message;ee===void 0&&(ee=w.INTERNAL,me="Unknown error status: "+V+" with message "+k.message),d=!0,g.fo(new U(ee,me)),u.close()}else $(Ze,`RPC '${e}' stream ${r} received:`,A),g._o(A)}}),m(a,ob.STAT_EVENT,v=>{v.stat===Cd.PROXY?$(Ze,`RPC '${e}' stream ${r} detected buffering proxy`):v.stat===Cd.NOPROXY&&$(Ze,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{g.lo()},0),g}}function yc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xa(t){return new uC(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e,n,s=1e3,r=1.5,i=6e4){this.si=e,this.timerId=n,this.vo=s,this.Po=r,this.bo=i,this.Vo=0,this.So=null,this.Do=Date.now(),this.reset()}reset(){this.Vo=0}Co(){this.Vo=this.bo}xo(e){this.cancel();const n=Math.floor(this.Vo+this.No()),s=Math.max(0,Date.now()-this.Do),r=Math.max(0,n-s);r>0&&$("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Vo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.So=this.si.enqueueAfterDelay(this.timerId,r,()=>(this.Do=Date.now(),e())),this.Vo*=this.Po,this.Vo<this.vo&&(this.Vo=this.vo),this.Vo>this.bo&&(this.Vo=this.bo)}ko(){this.So!==null&&(this.So.skipDelay(),this.So=null)}cancel(){this.So!==null&&(this.So.cancel(),this.So=null)}No(){return(Math.random()-.5)*this.Vo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(e,n,s,r,i,o,a,c){this.si=e,this.Mo=s,this.Oo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.$o=0,this.Fo=null,this.Bo=null,this.stream=null,this.Lo=new jm(e,n)}qo(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Ko()}async stop(){this.qo()&&await this.close(0)}Go(){this.state=0,this.Lo.reset()}Qo(){this.Uo()&&this.Fo===null&&(this.Fo=this.si.enqueueAfterDelay(this.Mo,6e4,()=>this.jo()))}zo(e){this.Wo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Wo(){this.Fo&&(this.Fo.cancel(),this.Fo=null)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}async close(e,n){this.Wo(),this.Ho(),this.Lo.cancel(),this.$o++,e!==4?this.Lo.reset():n&&n.code===w.RESOURCE_EXHAUSTED?(vn(n.toString()),vn("Using maximum backoff delay to prevent overloading the backend."),this.Lo.Co()):n&&n.code===w.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Jo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.co(n)}Jo(){}auth(){this.state=1;const e=this.Yo(this.$o),n=this.$o;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.$o===n&&this.Xo(s,r)},s=>{e(()=>{const r=new U(w.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Zo(r)})})}Xo(e,n){const s=this.Yo(this.$o);this.stream=this.tu(e,n),this.stream.oo(()=>{s(()=>(this.state=2,this.Bo=this.si.enqueueAfterDelay(this.Oo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener.oo()))}),this.stream.co(r=>{s(()=>this.Zo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Ko(){this.state=5,this.Lo.xo(async()=>{this.state=0,this.start()})}Zo(e){return $("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Yo(e){return n=>{this.si.enqueueAndForget(()=>this.$o===e?n():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ZC extends Hm{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}tu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.Lo.reset();const n=fC(this.serializer,e),s=function(r){if(!("targetChange"in r))return Y.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?Y.min():i.readTime?en(i.readTime):Y.min()}(e);return this.listener.eu(n,s)}nu(e){const n={};n.database=pl(this.serializer),n.addTarget=function(r,i){let o;const a=i.target;if(o=al(a)?{documents:mC(r,a)}:{query:yC(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0){o.resumeToken=xm(r,i.resumeToken);const c=hl(r,i.expectedCount);c!==null&&(o.expectedCount=c)}else if(i.snapshotVersion.compareTo(Y.min())>0){o.readTime=$o(r,i.snapshotVersion.toTimestamp());const c=hl(r,i.expectedCount);c!==null&&(o.expectedCount=c)}return o}(this.serializer,e);const s=_C(this.serializer,e);s&&(n.labels=s),this.zo(n)}su(e){const n={};n.database=pl(this.serializer),n.removeTarget=e,this.zo(n)}}class eA extends Hm{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i,this.iu=!1}get ru(){return this.iu}start(){this.iu=!1,this.lastStreamToken=void 0,super.start()}Jo(){this.iu&&this.ou([])}tu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(Te(!!e.streamToken),this.lastStreamToken=e.streamToken,this.iu){this.Lo.reset();const n=gC(e.writeResults,e.commitTime),s=en(e.commitTime);return this.listener.uu(s,n)}return Te(!e.writeResults||e.writeResults.length===0),this.iu=!0,this.listener.cu()}au(){const e={};e.database=pl(this.serializer),this.zo(e)}ou(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>pC(this.serializer,s))};this.zo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.hu=!1}lu(){if(this.hu)throw new U(w.FAILED_PRECONDITION,"The client has already been terminated.")}po(e,n,s){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.po(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new U(w.UNKNOWN,r.toString())})}Ao(e,n,s,r){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Ao(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new U(w.UNKNOWN,i.toString())})}terminate(){this.hu=!0}}class nA{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.du=0,this._u=null,this.wu=!0}mu(){this.du===0&&(this.gu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.yu("Backend didn't respond within 10 seconds."),this.gu("Offline"),Promise.resolve())))}pu(e){this.state==="Online"?this.gu("Unknown"):(this.du++,this.du>=1&&(this.Iu(),this.yu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.gu("Offline")))}set(e){this.Iu(),this.du=0,e==="Online"&&(this.wu=!1),this.gu(e)}gu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}yu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.wu?(vn(n),this.wu=!1):$("OnlineStateTracker",n)}Iu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Tu=[],this.Eu=new Map,this.Au=new Set,this.Ru=[],this.vu=i,this.vu.Jr(o=>{s.enqueueAndForget(async()=>{Es(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=J(a);c.Au.add(4),await Di(c),c.Pu.set("Unknown"),c.Au.delete(4),await Ma(c)}(this))})}),this.Pu=new nA(s,r)}}async function Ma(t){if(Es(t))for(const e of t.Ru)await e(!0)}async function Di(t){for(const e of t.Ru)await e(!1)}function qm(t,e){const n=J(t);n.Eu.has(e.targetId)||(n.Eu.set(e.targetId,e),Ou(n)?Nu(n):mr(n).Uo()&&Du(n,e))}function zm(t,e){const n=J(t),s=mr(n);n.Eu.delete(e),s.Uo()&&Km(n,e),n.Eu.size===0&&(s.Uo()?s.Qo():Es(n)&&n.Pu.set("Unknown"))}function Du(t,e){if(t.bu.Lt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}mr(t).nu(e)}function Km(t,e){t.bu.Lt(e),mr(t).su(e)}function Nu(t){t.bu=new oC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),he:e=>t.Eu.get(e)||null,oe:()=>t.datastore.serializer.databaseId}),mr(t).start(),t.Pu.mu()}function Ou(t){return Es(t)&&!mr(t).qo()&&t.Eu.size>0}function Es(t){return J(t).Au.size===0}function Wm(t){t.bu=void 0}async function rA(t){t.Eu.forEach((e,n)=>{Du(t,e)})}async function iA(t,e){Wm(t),Ou(t)?(t.Pu.pu(e),Nu(t)):t.Pu.set("Unknown")}async function oA(t,e,n){if(t.Pu.set("Online"),e instanceof Pm&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.Eu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.Eu.delete(o),s.bu.removeTarget(o))}(t,e)}catch(s){$("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Vo(t,s)}else if(e instanceof lo?t.bu.Wt(e):e instanceof Om?t.bu.ee(e):t.bu.Yt(e),!n.isEqual(Y.min()))try{const s=await Bm(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.bu.ue(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.Eu.get(c);l&&r.Eu.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach((a,c)=>{const l=r.Eu.get(a);if(!l)return;r.Eu.set(a,l.withResumeToken(lt.EMPTY_BYTE_STRING,l.snapshotVersion)),Km(r,a);const u=new Pn(l.target,a,c,l.sequenceNumber);Du(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){$("RemoteStore","Failed to raise snapshot:",s),await Vo(t,s)}}async function Vo(t,e,n){if(!Si(e))throw e;t.Au.add(1),await Di(t),t.Pu.set("Offline"),n||(n=()=>Bm(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await n(),t.Au.delete(1),await Ma(t)})}function Gm(t,e){return e().catch(n=>Vo(t,n,e))}async function La(t){const e=J(t),n=qn(e);let s=e.Tu.length>0?e.Tu[e.Tu.length-1].batchId:-1;for(;aA(e);)try{const r=await zC(e.localStore,s);if(r===null){e.Tu.length===0&&n.Qo();break}s=r.batchId,cA(e,r)}catch(r){await Vo(e,r)}Qm(e)&&Xm(e)}function aA(t){return Es(t)&&t.Tu.length<10}function cA(t,e){t.Tu.push(e);const n=qn(t);n.Uo()&&n.ru&&n.ou(e.mutations)}function Qm(t){return Es(t)&&!qn(t).qo()&&t.Tu.length>0}function Xm(t){qn(t).start()}async function lA(t){qn(t).au()}async function uA(t){const e=qn(t);for(const n of t.Tu)e.ou(n.mutations)}async function hA(t,e,n){const s=t.Tu.shift(),r=Tu.from(s,e,n);await Gm(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await La(t)}async function dA(t,e){e&&qn(t).ru&&await async function(n,s){if(r=s.code,sC(r)&&r!==w.ABORTED){const i=n.Tu.shift();qn(n).Go(),await Gm(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await La(n)}var r}(t,e),Qm(t)&&Xm(t)}async function Yd(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const s=Es(n);n.Au.add(3),await Di(n),s&&n.Pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Au.delete(3),await Ma(n)}async function fA(t,e){const n=J(t);e?(n.Au.delete(2),await Ma(n)):e||(n.Au.add(2),await Di(n),n.Pu.set("Unknown"))}function mr(t){return t.Vu||(t.Vu=function(e,n,s){const r=J(e);return r.lu(),new ZC(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{oo:rA.bind(null,t),co:iA.bind(null,t),eu:oA.bind(null,t)}),t.Ru.push(async e=>{e?(t.Vu.Go(),Ou(t)?Nu(t):t.Pu.set("Unknown")):(await t.Vu.stop(),Wm(t))})),t.Vu}function qn(t){return t.Su||(t.Su=function(e,n,s){const r=J(e);return r.lu(),new eA(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{oo:lA.bind(null,t),co:dA.bind(null,t),cu:uA.bind(null,t),uu:hA.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Go(),await La(t)):(await t.Su.stop(),t.Tu.length>0&&($("RemoteStore",`Stopping write stream with ${t.Tu.length} pending writes`),t.Tu=[]))})),t.Su}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new gn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Pu(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(w.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xu(t,e){if(vn("AsyncQueue",`${e}: ${t}`),Si(t))return new U(w.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e){this.comparator=e?(n,s)=>e(n,s)||j.comparator(n.key,s.key):(n,s)=>j.comparator(n.key,s.key),this.keyedMap=Nr(),this.sortedSet=new Se(this.comparator)}static emptySet(e){return new Hs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Hs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Hs;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(){this.Du=new Se(j.comparator)}track(e){const n=e.doc.key,s=this.Du.get(n);s?e.type!==0&&s.type===3?this.Du=this.Du.insert(n,e):e.type===3&&s.type!==1?this.Du=this.Du.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Du=this.Du.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Du=this.Du.remove(n):e.type===1&&s.type===2?this.Du=this.Du.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):W():this.Du=this.Du.insert(n,e)}Cu(){const e=[];return this.Du.inorderTraversal((n,s)=>{e.push(s)}),e}}class rr{constructor(e,n,s,r,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new rr(e,n,Hs.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ka(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA{constructor(){this.xu=void 0,this.listeners=[]}}class gA{constructor(){this.queries=new gr(e=>vm(e),ka),this.onlineState="Unknown",this.Nu=new Set}}async function Ym(t,e){const n=J(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new pA),r)try{i.xu=await n.onListen(s)}catch(o){const a=xu(o,`Initialization of query '${ul(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.ku(n.onlineState),i.xu&&e.Mu(i.xu)&&Mu(n)}async function Jm(t,e){const n=J(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function mA(t,e){const n=J(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Mu(r)&&(s=!0);o.xu=r}}s&&Mu(n)}function yA(t,e,n){const s=J(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Mu(t){t.Nu.forEach(e=>{e.next()})}class Zm{constructor(e,n,s){this.query=e,this.Ou=n,this.$u=!1,this.Fu=null,this.onlineState="Unknown",this.options=s||{}}Mu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new rr(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.$u?this.Bu(e)&&(this.Ou.next(e),n=!0):this.Lu(e,this.onlineState)&&(this.qu(e),n=!0),this.Fu=e,n}onError(e){this.Ou.error(e)}ku(e){this.onlineState=e;let n=!1;return this.Fu&&!this.$u&&this.Lu(this.Fu,e)&&(this.qu(this.Fu),n=!0),n}Lu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Uu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Bu(e){if(e.docChanges.length>0)return!0;const n=this.Fu&&this.Fu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}qu(e){e=rr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.$u=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(e){this.key=e}}class ty{constructor(e){this.key=e}}class vA{constructor(e,n){this.query=e,this.Ju=n,this.Yu=null,this.hasCachedResults=!1,this.current=!1,this.Xu=se(),this.mutatedKeys=se(),this.Zu=_m(e),this.tc=new Hs(this.Zu)}get ec(){return this.Ju}nc(e,n){const s=n?n.sc:new Jd,r=n?n.tc:this.tc;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const d=r.get(u),g=Da(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),v=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let b=!1;d&&g?d.data.isEqual(g.data)?m!==v&&(s.track({type:3,doc:g}),b=!0):this.ic(d,g)||(s.track({type:2,doc:g}),b=!0,(c&&this.Zu(g,c)>0||l&&this.Zu(g,l)<0)&&(a=!0)):!d&&g?(s.track({type:0,doc:g}),b=!0):d&&!g&&(s.track({type:1,doc:d}),b=!0,(c||l)&&(a=!0)),b&&(g?(o=o.add(g),i=v?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{tc:o,sc:s,ji:a,mutatedKeys:i}}ic(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.tc;this.tc=e.tc,this.mutatedKeys=e.mutatedKeys;const i=e.sc.Cu();i.sort((l,u)=>function(h,d){const g=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return W()}};return g(h)-g(d)}(l.type,u.type)||this.Zu(l.doc,u.doc)),this.rc(s);const o=n?this.oc():[],a=this.Xu.size===0&&this.current?1:0,c=a!==this.Yu;return this.Yu=a,i.length!==0||c?{snapshot:new rr(this.query,e.tc,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),uc:o}:{uc:o}}ku(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tc:this.tc,sc:new Jd,mutatedKeys:this.mutatedKeys,ji:!1},!1)):{uc:[]}}cc(e){return!this.Ju.has(e)&&!!this.tc.has(e)&&!this.tc.get(e).hasLocalMutations}rc(e){e&&(e.addedDocuments.forEach(n=>this.Ju=this.Ju.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ju=this.Ju.delete(n)),this.current=e.current)}oc(){if(!this.current)return[];const e=this.Xu;this.Xu=se(),this.tc.forEach(s=>{this.cc(s.key)&&(this.Xu=this.Xu.add(s.key))});const n=[];return e.forEach(s=>{this.Xu.has(s)||n.push(new ty(s))}),this.Xu.forEach(s=>{e.has(s)||n.push(new ey(s))}),n}ac(e){this.Ju=e.sr,this.Xu=se();const n=this.nc(e.documents);return this.applyChanges(n,!0)}hc(){return rr.fromInitialDocuments(this.query,this.tc,this.mutatedKeys,this.Yu===0,this.hasCachedResults)}}class _A{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class wA{constructor(e){this.key=e,this.lc=!1}}class EA{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.fc={},this.dc=new gr(a=>vm(a),ka),this._c=new Map,this.wc=new Set,this.mc=new Se(j.comparator),this.gc=new Map,this.yc=new Su,this.Ic={},this.Tc=new Map,this.Ec=sr.kn(),this.onlineState="Unknown",this.Ac=void 0}get isPrimaryClient(){return this.Ac===!0}}async function IA(t,e){const n=OA(t);let s,r;const i=n.dc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.hc();else{const o=await KC(n.localStore,_n(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await TA(n,e,s,a==="current",o.resumeToken),n.isPrimaryClient&&qm(n.remoteStore,o)}return r}async function TA(t,e,n,s,r){t.Rc=(h,d,g)=>async function(m,v,b,A){let M=v.view.nc(b);M.ji&&(M=await Gd(m.localStore,v.query,!1).then(({documents:ee})=>v.view.nc(ee,M)));const k=A&&A.targetChanges.get(v.targetId),V=v.view.applyChanges(M,m.isPrimaryClient,k);return ef(m,v.targetId,V.uc),V.snapshot}(t,h,d,g);const i=await Gd(t.localStore,e,!0),o=new vA(e,i.sr),a=o.nc(i.documents),c=ki.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);ef(t,n,l.uc);const u=new _A(e,n,o);return t.dc.set(e,u),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),l.snapshot}async function bA(t,e){const n=J(t),s=n.dc.get(e),r=n._c.get(s.targetId);if(r.length>1)return n._c.set(s.targetId,r.filter(i=>!ka(i,e))),void n.dc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await gl(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),zm(n.remoteStore,s.targetId),ml(n,s.targetId)}).catch(Ai)):(ml(n,s.targetId),await gl(n.localStore,s.targetId,!0))}async function CA(t,e,n){const s=PA(t);try{const r=await function(i,o){const a=J(i),c=Ue.now(),l=o.reduce((d,g)=>d.add(g.key),se());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=wn(),m=se();return a.Xi.getEntries(d,l).next(v=>{g=v,g.forEach((b,A)=>{A.isValidDocument()||(m=m.add(b))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,g)).next(v=>{u=v;const b=[];for(const A of o){const M=Jb(A,u.get(A.key).overlayedDocument);M!=null&&b.push(new ws(A.key,M,um(M.value.mapValue),Bt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,b,o)}).next(v=>{h=v;const b=v.applyToLocalDocumentSet(u,m);return a.documentOverlayCache.saveOverlays(d,v.batchId,b)})}).then(()=>({batchId:h.batchId,changes:Em(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.Ic[i.currentUser.toKey()];c||(c=new Se(ue)),c=c.insert(o,a),i.Ic[i.currentUser.toKey()]=c}(s,r.batchId,n),await Ni(s,r.changes),await La(s.remoteStore)}catch(r){const i=xu(r,"Failed to persist write");n.reject(i)}}async function ny(t,e){const n=J(t);try{const s=await HC(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.gc.get(i);o&&(Te(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.lc=!0:r.modifiedDocuments.size>0?Te(o.lc):r.removedDocuments.size>0&&(Te(o.lc),o.lc=!1))}),await Ni(n,s,e)}catch(s){await Ai(s)}}function Zd(t,e,n){const s=J(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.dc.forEach((i,o)=>{const a=o.view.ku(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=J(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.ku(o)&&(c=!0)}),c&&Mu(a)}(s.eventManager,e),r.length&&s.fc.eu(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function AA(t,e,n){const s=J(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.gc.get(e),i=r&&r.key;if(i){let o=new Se(j.comparator);o=o.insert(i,tt.newNoDocument(i,Y.min()));const a=se().add(i),c=new Pa(Y.min(),new Map,new Se(ue),o,a);await ny(s,c),s.mc=s.mc.remove(i),s.gc.delete(e),Lu(s)}else await gl(s.localStore,e,!1).then(()=>ml(s,e,n)).catch(Ai)}async function SA(t,e){const n=J(t),s=e.batch.batchId;try{const r=await jC(n.localStore,e);ry(n,s,null),sy(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Ni(n,r)}catch(r){await Ai(r)}}async function RA(t,e,n){const s=J(t);try{const r=await function(i,o){const a=J(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(Te(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);ry(s,e,n),sy(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Ni(s,r)}catch(r){await Ai(r)}}function sy(t,e){(t.Tc.get(e)||[]).forEach(n=>{n.resolve()}),t.Tc.delete(e)}function ry(t,e,n){const s=J(t);let r=s.Ic[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.Ic[s.currentUser.toKey()]=r}}function ml(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t._c.get(e))t.dc.delete(s),n&&t.fc.vc(s,n);t._c.delete(e),t.isPrimaryClient&&t.yc.ps(e).forEach(s=>{t.yc.containsKey(s)||iy(t,s)})}function iy(t,e){t.wc.delete(e.path.canonicalString());const n=t.mc.get(e);n!==null&&(zm(t.remoteStore,n),t.mc=t.mc.remove(e),t.gc.delete(n),Lu(t))}function ef(t,e,n){for(const s of n)s instanceof ey?(t.yc.addReference(s.key,e),kA(t,s)):s instanceof ty?($("SyncEngine","Document no longer in limbo: "+s.key),t.yc.removeReference(s.key,e),t.yc.containsKey(s.key)||iy(t,s.key)):W()}function kA(t,e){const n=e.key,s=n.path.canonicalString();t.mc.get(n)||t.wc.has(s)||($("SyncEngine","New document in limbo: "+n),t.wc.add(s),Lu(t))}function Lu(t){for(;t.wc.size>0&&t.mc.size<t.maxConcurrentLimboResolutions;){const e=t.wc.values().next().value;t.wc.delete(e);const n=new j(Ie.fromString(e)),s=t.Ec.next();t.gc.set(s,new wA(n)),t.mc=t.mc.insert(n,s),qm(t.remoteStore,new Pn(_n(wu(n.path)),s,"TargetPurposeLimboResolution",pu.ct))}}async function Ni(t,e,n){const s=J(t),r=[],i=[],o=[];s.dc.isEmpty()||(s.dc.forEach((a,c)=>{o.push(s.Rc(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=ku.Bi(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.fc.eu(r),await async function(a,c){const l=J(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>C.forEach(c,h=>C.forEach(h.$i,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>C.forEach(h.Fi,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Si(u))throw u;$("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.Hi.get(h),g=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(g);l.Hi=l.Hi.insert(h,m)}}}(s.localStore,i))}async function DA(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){$("SyncEngine","User change. New user:",e.toKey());const s=await Vm(n.localStore,e);n.currentUser=e,function(r,i){r.Tc.forEach(o=>{o.forEach(a=>{a.reject(new U(w.CANCELLED,i))})}),r.Tc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ni(n,s.tr)}}function NA(t,e){const n=J(t),s=n.gc.get(e);if(s&&s.lc)return se().add(s.key);{let r=se();const i=n._c.get(e);if(!i)return r;for(const o of i){const a=n.dc.get(o);r=r.unionWith(a.view.ec)}return r}}function OA(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ny.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=NA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=AA.bind(null,e),e.fc.eu=mA.bind(null,e.eventManager),e.fc.vc=yA.bind(null,e.eventManager),e}function PA(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=SA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=RA.bind(null,e),e}class tf{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=xa(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return BC(this.persistence,new $C,e.initialUser,this.serializer)}createPersistence(e){return new UC(Ru.js,this.serializer)}createSharedClientState(e){return new GC}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class xA{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Zd(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=DA.bind(null,this.syncEngine),await fA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new gA}createDatastore(e){const n=xa(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new JC(r));var r;return function(i,o,a,c){return new tA(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>Zd(this.syncEngine,a,0),o=Xd.D()?new Xd:new QC,new sA(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new EA(s,r,i,o,a,c);return l&&(u.Ac=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=J(e);$("RemoteStore","RemoteStore shutting down."),n.Au.add(5),await Di(n),n.vu.shutdown(),n.Pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Vc(this.observer.next,e)}error(e){this.observer.error?this.Vc(this.observer.error,e):vn("Uncaught Error in snapshot listener:",e.toString())}Sc(){this.muted=!0}Vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=et.UNAUTHENTICATED,this.clientId=am.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{$("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>($("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new U(w.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new gn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=xu(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function vc(t,e){t.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Vm(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function nf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await UA(t);$("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Yd(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Yd(e.remoteStore,i)),t._onlineComponents=e}function LA(t){return t.name==="FirebaseError"?t.code===w.FAILED_PRECONDITION||t.code===w.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function UA(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){$("FirestoreClient","Using user provided OfflineComponentProvider");try{await vc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!LA(n))throw n;Zs("Error using user provided cache. Falling back to memory cache: "+n),await vc(t,new tf)}}else $("FirestoreClient","Using default OfflineComponentProvider"),await vc(t,new tf);return t._offlineComponents}async function ay(t){return t._onlineComponents||(t._uninitializedComponentsProvider?($("FirestoreClient","Using user provided OnlineComponentProvider"),await nf(t,t._uninitializedComponentsProvider._online)):($("FirestoreClient","Using default OnlineComponentProvider"),await nf(t,new xA))),t._onlineComponents}function FA(t){return ay(t).then(e=>e.syncEngine)}async function cy(t){const e=await ay(t),n=e.eventManager;return n.onListen=IA.bind(null,e.syncEngine),n.onUnlisten=bA.bind(null,e.syncEngine),n}function $A(t,e,n={}){const s=new gn;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new oy({next:h=>{i.enqueueAndForget(()=>Jm(r,u));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new U(w.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new U(w.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new Zm(wu(o.path),l,{includeMetadataChanges:!0,Uu:!0});return Ym(r,u)}(await cy(t),t.asyncQueue,e,n,s)),s.promise}function VA(t,e,n={}){const s=new gn;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new oy({next:h=>{i.enqueueAndForget(()=>Jm(r,u)),h.fromCache&&a.source==="server"?c.reject(new U(w.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new Zm(o,l,{includeMetadataChanges:!0,Uu:!0});return Ym(r,u)}(await cy(t),t.asyncQueue,e,n,s)),s.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sf=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ly(t,e,n){if(!n)throw new U(w.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function BA(t,e,n,s){if(e===!0&&s===!0)throw new U(w.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function rf(t){if(!j.isDocumentKey(t))throw new U(w.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function of(t){if(j.isDocumentKey(t))throw new U(w.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ua(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":W()}function En(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new U(w.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ua(t);throw new U(w.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new U(w.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new U(w.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}BA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!1:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new af({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new U(w.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new U(w.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new af(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new ub;switch(n.type){case"firstParty":return new pb(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new U(w.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=sf.get(e);n&&($("ComponentProvider","Removing Datastore"),sf.delete(e),n.terminate())}(this),Promise.resolve()}}function jA(t,e,n,s={}){var r;const i=(t=En(t,Fa))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Zs("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=et.MOCK_USER;else{o=Xp(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new U(w.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new et(c)}t._authCredentials=new hb(new om(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Fn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new yt(this.firestore,e,this._key)}}class Is{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Is(this.firestore,e,this._query)}}class Fn extends Is{constructor(e,n,s){super(e,n,wu(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new yt(this.firestore,null,new j(e))}withConverter(e){return new Fn(this.firestore,e,this._path)}}function uy(t,e,...n){if(t=Xe(t),ly("collection","path",e),t instanceof Fa){const s=Ie.fromString(e,...n);return of(s),new Fn(t,null,s)}{if(!(t instanceof yt||t instanceof Fn))throw new U(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ie.fromString(e,...n));return of(s),new Fn(t.firestore,null,s)}}function Uu(t,e,...n){if(t=Xe(t),arguments.length===1&&(e=am.A()),ly("doc","path",e),t instanceof Fa){const s=Ie.fromString(e,...n);return rf(s),new yt(t,null,new j(s))}{if(!(t instanceof yt||t instanceof Fn))throw new U(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ie.fromString(e,...n));return rf(s),new yt(t.firestore,t instanceof Fn?t.converter:null,new j(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA{constructor(){this.Kc=Promise.resolve(),this.Gc=[],this.Qc=!1,this.jc=[],this.zc=null,this.Wc=!1,this.Hc=!1,this.Jc=[],this.Lo=new jm(this,"async_queue_retry"),this.Yc=()=>{const n=yc();n&&$("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Lo.ko()};const e=yc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Yc)}get isShuttingDown(){return this.Qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Xc(),this.Zc(e)}enterRestrictedMode(e){if(!this.Qc){this.Qc=!0,this.Hc=e||!1;const n=yc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Yc)}}enqueue(e){if(this.Xc(),this.Qc)return new Promise(()=>{});const n=new gn;return this.Zc(()=>this.Qc&&this.Hc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Gc.push(e),this.ta()))}async ta(){if(this.Gc.length!==0){try{await this.Gc[0](),this.Gc.shift(),this.Lo.reset()}catch(e){if(!Si(e))throw e;$("AsyncQueue","Operation failed with retryable error: "+e)}this.Gc.length>0&&this.Lo.xo(()=>this.ta())}}Zc(e){const n=this.Kc.then(()=>(this.Wc=!0,e().catch(s=>{this.zc=s,this.Wc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw vn("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Wc=!1,s))));return this.Kc=n,n}enqueueAfterDelay(e,n,s){this.Xc(),this.Jc.indexOf(e)>-1&&(n=0);const r=Pu.createAndSchedule(this,e,n,s,i=>this.ea(i));return this.jc.push(r),r}Xc(){this.zc&&W()}verifyOperationInProgress(){}async na(){let e;do e=this.Kc,await e;while(e!==this.Kc)}sa(e){for(const n of this.jc)if(n.timerId===e)return!0;return!1}ia(e){return this.na().then(()=>{this.jc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.jc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.na()})}ra(e){this.Jc.push(e)}ea(e){const n=this.jc.indexOf(e);this.jc.splice(n,1)}}class yr extends Fa{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new HA,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||hy(this),this._firestoreClient.terminate()}}function qA(t,e){const n=typeof t=="object"?t:ql(),s=typeof t=="string"?t:e||"(default)",r=ha(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Gp("firestore");i&&jA(r,...i)}return r}function Fu(t){return t._firestoreClient||hy(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function hy(t){var e,n,s;const r=t._freezeSettings(),i=function(o,a,c,l){return new Ab(o,a,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new MA(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=r.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ir(lt.fromBase64String(e))}catch(n){throw new U(w.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ir(lt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new U(w.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new st(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new U(w.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new U(w.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zA=/^__.*__$/;class KA{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new ws(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ri(e,this.data,n,this.fieldTransforms)}}function fy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw W()}}class Bu{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.oa(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ua(){return this.settings.ua}ca(e){return new Bu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}aa(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ca({path:s,ha:!1});return r.la(e),r}fa(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ca({path:s,ha:!1});return r.oa(),r}da(e){return this.ca({path:void 0,ha:!0})}_a(e){return Bo(e,this.settings.methodName,this.settings.wa||!1,this.path,this.settings.ma)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}oa(){if(this.path)for(let e=0;e<this.path.length;e++)this.la(this.path.get(e))}la(e){if(e.length===0)throw this._a("Document fields must not be empty");if(fy(this.ua)&&zA.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class WA{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||xa(e)}ga(e,n,s,r=!1){return new Bu({ua:e,methodName:n,ma:s,path:st.emptyPath(),ha:!1,wa:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ju(t){const e=t._freezeSettings(),n=xa(t._databaseId);return new WA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function py(t,e,n,s,r,i={}){const o=t.ga(i.merge||i.mergeFields?2:0,e,n,r);yy("Data must be an object, but it was:",o,s);const a=gy(s,o);let c,l;if(i.merge)c=new Lt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=QA(e,h,n);if(!o.contains(d))throw new U(w.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);YA(u,d)||u.push(d)}c=new Lt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new KA(new St(a),c,l)}function GA(t,e,n,s=!1){return Hu(n,t.ga(s?4:3,e))}function Hu(t,e){if(my(t=Xe(t)))return yy("Unsupported field value:",e,t),gy(t,e);if(t instanceof dy)return function(n,s){if(!fy(s.ua))throw s._a(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s._a(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ha&&e.ua!==4)throw e._a("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Hu(o,s.da(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=Xe(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Kb(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Ue.fromDate(n);return{timestampValue:$o(s.serializer,r)}}if(n instanceof Ue){const r=new Ue(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:$o(s.serializer,r)}}if(n instanceof Vu)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ir)return{bytesValue:xm(s.serializer,n._byteString)};if(n instanceof yt){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s._a(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Au(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s._a(`Unsupported field value: ${Ua(n)}`)}(t,e)}function gy(t,e){const n={};return cm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):fr(t,(s,r)=>{const i=Hu(r,e.aa(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function my(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ue||t instanceof Vu||t instanceof ir||t instanceof yt||t instanceof dy)}function yy(t,e,n){if(!my(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Ua(n);throw s==="an object"?e._a(t+" a custom object"):e._a(t+" "+s)}}function QA(t,e,n){if((e=Xe(e))instanceof $u)return e._internalPath;if(typeof e=="string")return vy(t,e);throw Bo("Field path arguments must be of type string or ",t,!1,void 0,n)}const XA=new RegExp("[~\\*/\\[\\]]");function vy(t,e,n){if(e.search(XA)>=0)throw Bo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new $u(...e.split("."))._internalPath}catch{throw Bo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Bo(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new U(w.INVALID_ARGUMENT,a+t+c)}function YA(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new yt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new JA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(qu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class JA extends _y{data(){return super.data()}}function qu(t,e){return typeof e=="string"?vy(t,e):e instanceof $u?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZA(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new U(w.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class zu{}class wy extends zu{}function eS(t,e,...n){let s=[];e instanceof zu&&s.push(e),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof Wu).length,o=r.filter(a=>a instanceof Ku).length;if(i>1||i>0&&o>0)throw new U(w.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class Ku extends wy{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new Ku(e,n,s)}_apply(e){const n=this._parse(e);return Ey(e._query,n),new Is(e.firestore,e.converter,cl(e._query,n))}_parse(e){const n=ju(e.firestore);return function(r,i,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new U(w.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){lf(u,l);const d=[];for(const g of u)d.push(cf(a,r,g));h={arrayValue:{values:d}}}else h=cf(a,r,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||lf(u,l),h=GA(o,i,u,l==="in"||l==="not-in");return Le.create(c,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Wu extends zu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Wu(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:qt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)Ey(i,a),i=cl(i,a)}(e._query,n),new Is(e.firestore,e.converter,cl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Gu extends wy{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Gu(e,n)}_apply(e){const n=function(s,r,i){if(s.startAt!==null)throw new U(w.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new U(w.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Bs(r,i);return function(a,c){if(Eu(a)===null){const l=Ra(a);l!==null&&Iy(a,l,c.field)}}(s,o),o}(e._query,this._field,this._direction);return new Is(e.firestore,e.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new pr(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function tS(t,e="asc"){const n=e,s=qu("orderBy",t);return Gu._create(s,n)}function cf(t,e,n){if(typeof(n=Xe(n))=="string"){if(n==="")throw new U(w.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ym(e)&&n.indexOf("/")!==-1)throw new U(w.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(Ie.fromString(n));if(!j.isDocumentKey(s))throw new U(w.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Nd(t,new j(s))}if(n instanceof yt)return Nd(t,n._key);throw new U(w.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ua(n)}.`)}function lf(t,e){if(!Array.isArray(t)||t.length===0)throw new U(w.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ey(t,e){if(e.isInequality()){const s=Ra(t),r=e.field;if(s!==null&&!s.isEqual(r))throw new U(w.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=Eu(t);i!==null&&Iy(t,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new U(w.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new U(w.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Iy(t,e,n){if(!n.isEqual(e))throw new U(w.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class nS{convertValue(e,n="none"){switch(gs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ps(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw W()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return fr(e,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Vu(Me(e.latitude),Me(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=mu(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(ri(e));default:return null}}convertTimestamp(e){const n=Hn(e);return new Ue(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Ie.fromString(e);Te($m(s));const r=new ii(s.get(1),s.get(3)),i=new j(s.popFirst(5));return r.isEqual(n)||vn(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ty(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class by extends _y{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new uo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(qu("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class uo extends by{data(e={}){return super.data(e)}}class sS{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Pr(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new uo(this._firestore,this._userDataWriter,s.key,s,new Pr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new U(w.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new uo(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Pr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new uo(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Pr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:rS(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function rS(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return W()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iS(t){t=En(t,yt);const e=En(t.firestore,yr);return $A(Fu(e),t._key).then(n=>uS(e,t,n))}class Cy extends nS{constructor(e){super(),this.firestore=e}convertBytes(e){return new ir(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new yt(this.firestore,null,n)}}function oS(t){t=En(t,Is);const e=En(t.firestore,yr),n=Fu(e),s=new Cy(e);return ZA(t._query),VA(n,t._query).then(r=>new sS(e,s,t,r))}function aS(t,e,n){t=En(t,yt);const s=En(t.firestore,yr),r=Ty(t.converter,e,n);return Qu(s,[py(ju(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,Bt.none())])}function cS(t){return Qu(En(t.firestore,yr),[new Iu(t._key,Bt.none())])}function lS(t,e){const n=En(t.firestore,yr),s=Uu(t),r=Ty(t.converter,e);return Qu(n,[py(ju(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,Bt.exists(!1))]).then(()=>s)}function Qu(t,e){return function(n,s){const r=new gn;return n.asyncQueue.enqueueAndForget(async()=>CA(await FA(n),s,r)),r.promise}(Fu(t),e)}function uS(t,e,n){const s=n.docs.get(e._key),r=new Cy(t);return new by(t,r,e._key,s,new Pr(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){dr=n})(vs),ds(new Bn("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new yr(new db(n.getProvider("auth-internal")),new mb(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new U(w.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ii(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Zt(Ad,"3.11.0",t),Zt(Ad,"3.11.0","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay="firebasestorage.googleapis.com",Sy="storageBucket",hS=2*60*1e3,dS=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze extends an{constructor(e,n,s=0){super(_c(e),`Firebase Storage: ${n} (${_c(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ze.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return _c(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var He;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(He||(He={}));function _c(t){return"storage/"+t}function Ry(){const t="An unknown error occurred, please check the error payload for server response.";return new ze(He.UNKNOWN,t)}function fS(t){return new ze(He.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function pS(t){return new ze(He.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function gS(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ze(He.UNAUTHENTICATED,t)}function mS(){return new ze(He.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function yS(t){return new ze(He.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function vS(){return new ze(He.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function _S(){return new ze(He.CANCELED,"User canceled the upload/download.")}function wS(t){return new ze(He.INVALID_URL,"Invalid URL '"+t+"'.")}function ES(t){return new ze(He.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function IS(){return new ze(He.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Sy+"' property when initializing the app?")}function TS(){return new ze(He.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function yl(t){return new ze(He.INVALID_ARGUMENT,t)}function ky(){return new ze(He.APP_DELETED,"The Firebase app was deleted.")}function bS(t){return new ze(He.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Cr(t){throw new ze(He.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=Et.makeFromUrl(e,n)}catch{return new Et(e,"")}if(s.path==="")return s;throw ES(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(V){V.path.charAt(V.path.length-1)==="/"&&(V.path_=V.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function l(V){V.path_=decodeURIComponent(V.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",g=new RegExp(`^https?://${h}/${u}/b/${r}/o${d}`,"i"),m={bucket:1,path:3},v=n===Ay?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",A=new RegExp(`^https?://${v}/${r}/${b}`,"i"),k=[{regex:a,indices:c,postModify:i},{regex:g,indices:m,postModify:l},{regex:A,indices:{bucket:1,path:2},postModify:l}];for(let V=0;V<k.length;V++){const ee=k[V],me=ee.regex.exec(e);if(me){const ke=me[ee.indices.bucket];let z=me[ee.indices.path];z||(z=""),s=new Et(ke,z),ee.postModify(s);break}}if(s==null)throw wS(e);return s}}class CS{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AS(t,e,n){let s=1,r=null,i=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...b){l||(l=!0,e.apply(null,b))}function h(b){r=setTimeout(()=>{r=null,t(g,c())},b)}function d(){i&&clearTimeout(i)}function g(b,...A){if(l){d();return}if(b){d(),u.call(null,b,...A);return}if(c()||o){d(),u.call(null,b,...A);return}s<64&&(s*=2);let k;a===1?(a=2,k=0):k=(s+Math.random())*1e3,h(k)}let m=!1;function v(b){m||(m=!0,d(),!l&&(r!==null?(b||(a=2),clearTimeout(r),h(0)):b||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,v(!0)},n),v}function SS(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RS(t){return t!==void 0}function kS(t){return typeof t=="object"&&!Array.isArray(t)}function Dy(t){return typeof t=="string"||t instanceof String}function uf(t,e,n,s){if(s<e)throw yl(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw yl(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ny(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function Oy(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var cs;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(cs||(cs={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DS(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||r||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NS{constructor(e,n,s,r,i,o,a,c,l,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,m)=>{this.resolve_=g,this.reject_=m,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new Zi(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===cs.NO_ERROR,c=i.getStatus();if(!a||DS(c,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===cs.ABORT;s(!1,new Zi(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;s(!0,new Zi(l,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());RS(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=Ry();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(r.canceled){const c=this.appDelete_?ky():_S();o(c)}else{const c=vS();o(c)}};this.canceled_?n(!1,new Zi(!1,null,!0)):this.backoffId_=AS(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&SS(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Zi{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function OS(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function PS(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function xS(t,e){e&&(t["X-Firebase-GMPID"]=e)}function MS(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function LS(t,e,n,s,r,i,o=!0){const a=Oy(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return xS(l,e),OS(l,n),PS(l,i),MS(l,s),new NS(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Py(t){let e;try{e=JSON.parse(t)}catch{return null}return kS(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function US(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function FS(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function xy(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $S(t,e){return e}class ut{constructor(e,n,s,r){this.server=e,this.local=n||e,this.writable=!!s,this.xform=r||$S}}let eo=null;function VS(t){return!Dy(t)||t.length<2?t:xy(t)}function BS(){if(eo)return eo;const t=[];t.push(new ut("bucket")),t.push(new ut("generation")),t.push(new ut("metageneration")),t.push(new ut("name","fullPath",!0));function e(i,o){return VS(o)}const n=new ut("name");n.xform=e,t.push(n);function s(i,o){return o!==void 0?Number(o):o}const r=new ut("size");return r.xform=s,t.push(r),t.push(new ut("timeCreated")),t.push(new ut("updated")),t.push(new ut("md5Hash",null,!0)),t.push(new ut("cacheControl",null,!0)),t.push(new ut("contentDisposition",null,!0)),t.push(new ut("contentEncoding",null,!0)),t.push(new ut("contentLanguage",null,!0)),t.push(new ut("contentType",null,!0)),t.push(new ut("metadata","customMetadata",!0)),eo=t,eo}function jS(t,e){function n(){const s=t.bucket,r=t.fullPath,i=new Et(s,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function HS(t,e,n){const s={};s.type="file";const r=n.length;for(let i=0;i<r;i++){const o=n[i];s[o.local]=o.xform(s,e[o.server])}return jS(s,t),s}function qS(t,e,n){const s=Py(e);return s===null?null:HS(t,s,n)}function zS(t,e,n,s){const r=Py(e);if(r===null||!Dy(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(l=>{const u=t.bucket,h=t.fullPath,d="/b/"+o(u)+"/o/"+o(h),g=Ny(d,n,s),m=Oy({alt:"media",token:l});return g+m})[0]}class KS{constructor(e,n,s,r){this.url=e,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WS(t){if(!t)throw Ry()}function GS(t,e){function n(s,r){const i=qS(t,r,e);return WS(i!==null),zS(i,r,t.host,t._protocol)}return n}function QS(t){function e(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=mS():r=gS():n.getStatus()===402?r=pS(t.bucket):n.getStatus()===403?r=yS(t.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return e}function XS(t){const e=QS(t);function n(s,r){let i=e(s,r);return s.getStatus()===404&&(i=fS(t.path)),i.serverResponse=r.serverResponse,i}return n}function YS(t,e,n){const s=e.fullServerUrl(),r=Ny(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new KS(r,i,GS(t,n),o);return a.errorHandler=XS(e),a}class JS{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=cs.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=cs.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=cs.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,r){if(this.sent_)throw Cr("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Cr("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Cr("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Cr("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Cr("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class ZS extends JS{initXhr(){this.xhr_.responseType="text"}}function e1(){return new ZS}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,n){this._service=e,n instanceof Et?this._location=n:this._location=Et.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ms(e,n)}get root(){const e=new Et(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return xy(this._location.path)}get storage(){return this._service}get parent(){const e=US(this._location.path);if(e===null)return null;const n=new Et(this._location.bucket,e);return new ms(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw bS(e)}}function t1(t){t._throwIfRoot("getDownloadURL");const e=YS(t.storage,t._location,BS());return t.storage.makeRequestWithTokens(e,e1).then(n=>{if(n===null)throw TS();return n})}function n1(t,e){const n=FS(t._location.path,e),s=new Et(t._location.bucket,n);return new ms(t.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s1(t){return/^[A-Za-z]+:\/\//.test(t)}function r1(t,e){return new ms(t,e)}function My(t,e){if(t instanceof Xu){const n=t;if(n._bucket==null)throw IS();const s=new ms(n,n._bucket);return e!=null?My(s,e):s}else return e!==void 0?n1(t,e):t}function i1(t,e){if(e&&s1(e)){if(t instanceof Xu)return r1(t,e);throw yl("To use ref(service, url), the first argument must be a Storage instance.")}else return My(t,e)}function hf(t,e){const n=e==null?void 0:e[Sy];return n==null?null:Et.makeFromBucketSpec(n,t)}function o1(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=s;r&&(t._overrideAuthToken=typeof r=="string"?r:Xp(r,t.app.options.projectId))}class Xu{constructor(e,n,s,r,i){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=Ay,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=hS,this._maxUploadRetryTime=dS,this._requests=new Set,r!=null?this._bucket=Et.makeFromBucketSpec(r,this._host):this._bucket=hf(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Et.makeFromBucketSpec(this._url,e):this._bucket=hf(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){uf("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){uf("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ms(this,e)}_makeRequest(e,n,s,r,i=!0){if(this._deleted)return new CS(ky());{const o=LS(e,this._appId,s,r,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const df="@firebase/storage",ff="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ly="storage";function a1(t){return t=Xe(t),t1(t)}function c1(t,e){return t=Xe(t),i1(t,e)}function l1(t=ql(),e){t=Xe(t);const s=ha(t,Ly).getImmediate({identifier:e}),r=Gp("storage");return r&&u1(s,...r),s}function u1(t,e,n,s={}){o1(t,e,n,s)}function h1(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new Xu(n,s,r,e,vs)}function d1(){ds(new Bn(Ly,h1,"PUBLIC").setMultipleInstances(!0)),Zt(df,ff,""),Zt(df,ff,"esm2017")}d1();function Yu(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Uy(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const f1=Uy,Fy=new gi("auth","Firebase",Uy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jo=new jl("@firebase/auth");function p1(t,...e){jo.logLevel<=le.WARN&&jo.warn(`Auth (${vs}): ${t}`,...e)}function ho(t,...e){jo.logLevel<=le.ERROR&&jo.error(`Auth (${vs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(t,...e){throw Ju(t,...e)}function tn(t,...e){return Ju(t,...e)}function g1(t,e,n){const s=Object.assign(Object.assign({},f1()),{[e]:n});return new gi("auth","Firebase",s).create(e,{appName:t.name})}function Ju(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Fy.create(t,...e)}function K(t,e,...n){if(!t)throw Ju(e,...n)}function fn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ho(e),new Error(e)}function In(t,e){t||fn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function m1(){return pf()==="http:"||pf()==="https:"}function pf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(m1()||B0()||"connection"in navigator)?navigator.onLine:!0}function v1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e,n){this.shortDelay=e,this.longDelay=n,In(n>e,"Short delay should be less than long delay!"),this.isMobile=V0()||j0()}get(){return y1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zu(t,e){In(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;fn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;fn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;fn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w1=new Oi(3e4,6e4);function Pi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function vr(t,e,n,s,r={}){return Vy(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=mi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),$y.fetch()(By(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Vy(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},_1),e);try{const r=new E1(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw to(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw to(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw to(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw to(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw g1(t,u,l);zt(t,u)}}catch(r){if(r instanceof an)throw r;zt(t,"network-request-failed",{message:String(r)})}}async function $a(t,e,n,s,r={}){const i=await vr(t,e,n,s,r);return"mfaPendingCredential"in i&&zt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function By(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Zu(t.config,r):`${t.config.apiScheme}://${r}`}class E1{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(tn(this.auth,"network-request-failed")),w1.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function to(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=tn(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I1(t,e){return vr(t,"POST","/v1/accounts:delete",e)}async function T1(t,e){return vr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function b1(t,e=!1){const n=Xe(t),s=await n.getIdToken(e),r=eh(s);K(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:jr(wc(r.auth_time)),issuedAtTime:jr(wc(r.iat)),expirationTime:jr(wc(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function wc(t){return Number(t)*1e3}function eh(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return ho("JWT malformed, contained fewer than 3 sections"),null;try{const r=Kp(n);return r?JSON.parse(r):(ho("Failed to decode base64 JWT payload"),null)}catch(r){return ho("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function C1(t){const e=eh(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function li(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof an&&A1(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function A1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=jr(this.lastLoginAt),this.creationTime=jr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ho(t){var e;const n=t.auth,s=await t.getIdToken(),r=await li(t,T1(n,{idToken:s}));K(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?D1(i.providerUserInfo):[],a=k1(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new jy(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function R1(t){const e=Xe(t);await Ho(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function k1(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function D1(t){return t.map(e=>{var{providerId:n}=e,s=Yu(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N1(t,e){const n=await Vy(t,{},async()=>{const s=mi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=By(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",$y.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):C1(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return K(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await N1(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new ui;return s&&(K(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(K(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(K(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ui,this.toJSON())}_performRefresh(){return fn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ls{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Yu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new S1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new jy(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await li(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return b1(this,e)}reload(){return R1(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ls(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Ho(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await li(this,I1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,A=(l=n.createdAt)!==null&&l!==void 0?l:void 0,M=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:k,emailVerified:V,isAnonymous:ee,providerData:me,stsTokenManager:ke}=n;K(k&&ke,e,"internal-error");const z=ui.fromJSON(this.name,ke);K(typeof k=="string",e,"internal-error"),An(h,e.name),An(d,e.name),K(typeof V=="boolean",e,"internal-error"),K(typeof ee=="boolean",e,"internal-error"),An(g,e.name),An(m,e.name),An(v,e.name),An(b,e.name),An(A,e.name),An(M,e.name);const we=new ls({uid:k,auth:e,email:d,emailVerified:V,displayName:h,isAnonymous:ee,photoURL:m,phoneNumber:g,tenantId:v,stsTokenManager:z,createdAt:A,lastLoginAt:M});return me&&Array.isArray(me)&&(we.providerData=me.map(ye=>Object.assign({},ye))),b&&(we._redirectEventId=b),we}static async _fromIdTokenResponse(e,n,s=!1){const r=new ui;r.updateFromServerResponse(n);const i=new ls({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Ho(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gf=new Map;function pn(t){In(t instanceof Function,"Expected a class definition");let e=gf.get(t);return e?(In(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,gf.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Hy.type="NONE";const mf=Hy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fo(t,e,n){return`firebase:${t}:${e}:${n}`}class qs{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=fo(this.userKey,r.apiKey,i),this.fullPersistenceKey=fo("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ls._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new qs(pn(mf),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||pn(mf);const o=fo(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=ls._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new qs(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new qs(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ky(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(qy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Gy(e))return"Blackberry";if(Qy(e))return"Webos";if(th(e))return"Safari";if((e.includes("chrome/")||zy(e))&&!e.includes("edge/"))return"Chrome";if(Wy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function qy(t=ct()){return/firefox\//i.test(t)}function th(t=ct()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function zy(t=ct()){return/crios\//i.test(t)}function Ky(t=ct()){return/iemobile/i.test(t)}function Wy(t=ct()){return/android/i.test(t)}function Gy(t=ct()){return/blackberry/i.test(t)}function Qy(t=ct()){return/webos/i.test(t)}function Va(t=ct()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function O1(t=ct()){var e;return Va(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function P1(){return H0()&&document.documentMode===10}function Xy(t=ct()){return Va(t)||Wy(t)||Qy(t)||Gy(t)||/windows phone/i.test(t)||Ky(t)}function x1(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yy(t,e=[]){let n;switch(t){case"Browser":n=yf(ct());break;case"Worker":n=`${yf(ct())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${vs}/${s}`}async function Jy(t,e){return vr(t,"GET","/v2/recaptchaConfig",Pi(t,e))}function vf(t){return t!==void 0&&t.enterprise!==void 0}class Zy{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M1(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function ev(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=tn("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",M1().appendChild(s)})}function L1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const U1="https://www.google.com/recaptcha/enterprise.js?render=",F1="recaptcha-enterprise",$1="NO_RECAPTCHA";class tv{constructor(e){this.type=F1,this.auth=xi(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Jy(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Zy(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function r(i,o,a){const c=window.grecaptcha;vf(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o($1)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{s(this.auth).then(a=>{if(!n&&vf(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}ev(U1+a).then(()=>{r(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function _f(t,e,n,s=!1){const r=new tv(t);let i;try{i=await r.verify(n)}catch{i=await r.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B1{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new wf(this),this.idTokenSubscription=new wf(this),this.beforeStateQueue=new V1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Fy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=pn(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await qs.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ho(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=v1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Xe(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(pn(e))})}async initializeRecaptchaConfig(){const e=await Jy(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Zy(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new tv(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new gi("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&pn(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await qs.create(this,[pn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return K(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Yy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&p1(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function xi(t){return Xe(t)}class wf{constructor(e){this.auth=e,this.observer=null,this.addObserver=X0(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j1(t,e){const n=ha(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(To(i,e??{}))return r;zt(r,"already-initialized")}return n.initialize({options:e})}function H1(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(pn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function q1(t,e,n){const s=xi(t);K(s._canInitEmulator,s,"emulator-config-failed"),K(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=nv(e),{host:o,port:a}=z1(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||K1()}function nv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function z1(t){const e=nv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Ef(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Ef(o)}}}function Ef(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function K1(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return fn("not implemented")}_getIdTokenResponse(e){return fn("not implemented")}_linkToIdToken(e,n){return fn("not implemented")}_getReauthenticationResolver(e){return fn("not implemented")}}async function W1(t,e){return vr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ec(t,e){return $a(t,"POST","/v1/accounts:signInWithPassword",Pi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G1(t,e){return $a(t,"POST","/v1/accounts:signInWithEmailLink",Pi(t,e))}async function Q1(t,e){return $a(t,"POST","/v1/accounts:signInWithEmailLink",Pi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi extends nh{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new hi(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new hi(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const s={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const r=await _f(e,s,"signInWithPassword");return Ec(e,r)}else return Ec(e,s).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await _f(e,s,"signInWithPassword");return Ec(e,i)}else return Promise.reject(r)});case"emailLink":return G1(e,{email:this._email,oobCode:this._password});default:zt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return W1(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Q1(e,{idToken:n,email:this._email,oobCode:this._password});default:zt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zs(t,e){return $a(t,"POST","/v1/accounts:signInWithIdp",Pi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X1="http://localhost";class ys extends nh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ys(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):zt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Yu(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new ys(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return zs(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,zs(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,zs(e,n)}buildRequest(){const e={requestUri:X1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=mi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y1(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function J1(t){const e=Sr(Rr(t)).link,n=e?Sr(Rr(e)).deep_link_id:null,s=Sr(Rr(t)).deep_link_id;return(s?Sr(Rr(s)).link:null)||s||n||e||t}class sh{constructor(e){var n,s,r,i,o,a;const c=Sr(Rr(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=Y1((r=c.mode)!==null&&r!==void 0?r:null);K(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=J1(e);try{return new sh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(){this.providerId=_r.PROVIDER_ID}static credential(e,n){return hi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=sh.parseLink(n);return K(s,"argument-error"),hi._fromEmailAndCode(e,s.code,s.tenantId)}}_r.PROVIDER_ID="password";_r.EMAIL_PASSWORD_SIGN_IN_METHOD="password";_r.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi extends sv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn extends Mi{constructor(){super("facebook.com")}static credential(e){return ys._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kn.credential(e.oauthAccessToken)}catch{return null}}}kn.FACEBOOK_SIGN_IN_METHOD="facebook.com";kn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends Mi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ys._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Dn.credential(n,s)}catch{return null}}}Dn.GOOGLE_SIGN_IN_METHOD="google.com";Dn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends Mi{constructor(){super("github.com")}static credential(e){return ys._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nn.credential(e.oauthAccessToken)}catch{return null}}}Nn.GITHUB_SIGN_IN_METHOD="github.com";Nn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends Mi{constructor(){super("twitter.com")}static credential(e,n){return ys._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return On.credential(n,s)}catch{return null}}}On.TWITTER_SIGN_IN_METHOD="twitter.com";On.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await ls._fromIdTokenResponse(e,s,r),o=If(s);return new or({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=If(s);return new or({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function If(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo extends an{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,qo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new qo(e,n,s,r)}}function rv(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?qo._fromErrorAndOperation(t,i,e,s):i})}async function Z1(t,e,n=!1){const s=await li(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return or._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eR(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await li(t,rv(s,r,e,t),n);K(i.idToken,s,"internal-error");const o=eh(i.idToken);K(o,s,"internal-error");const{sub:a}=o;return K(t.uid===a,s,"user-mismatch"),or._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&zt(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iv(t,e,n=!1){const s="signIn",r=await rv(t,s,e),i=await or._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function tR(t,e){return iv(xi(t),e)}function nR(t,e,n){return tR(Xe(t),_r.credential(e,n))}function sR(t,e,n,s){return Xe(t).onIdTokenChanged(e,n,s)}function rR(t,e,n){return Xe(t).beforeAuthStateChanged(e,n)}function iR(t){return Xe(t).signOut()}const zo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(zo,"1"),this.storage.removeItem(zo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oR(){const t=ct();return th(t)||Va(t)}const aR=1e3,cR=10;class av extends ov{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=oR()&&x1(),this.fallbackToPolling=Xy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);P1()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,cR):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},aR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}av.type="LOCAL";const lR=av;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv extends ov{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}cv.type="SESSION";const lv=cv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Ba(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await uR(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ba.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rh(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=rh("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(){return window}function dR(t){nn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uv(){return typeof nn().WorkerGlobalScope<"u"&&typeof nn().importScripts=="function"}async function fR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function pR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function gR(){return uv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hv="firebaseLocalStorageDb",mR=1,Ko="firebaseLocalStorage",dv="fbase_key";class Li{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ja(t,e){return t.transaction([Ko],e?"readwrite":"readonly").objectStore(Ko)}function yR(){const t=indexedDB.deleteDatabase(hv);return new Li(t).toPromise()}function _l(){const t=indexedDB.open(hv,mR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Ko,{keyPath:dv})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Ko)?e(s):(s.close(),await yR(),e(await _l()))})})}async function Tf(t,e,n){const s=ja(t,!0).put({[dv]:e,value:n});return new Li(s).toPromise()}async function vR(t,e){const n=ja(t,!1).get(e),s=await new Li(n).toPromise();return s===void 0?null:s.value}function bf(t,e){const n=ja(t,!0).delete(e);return new Li(n).toPromise()}const _R=800,wR=3;class fv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _l(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>wR)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return uv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ba._getInstance(gR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await fR(),!this.activeServiceWorker)return;this.sender=new hR(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||pR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _l();return await Tf(e,zo,"1"),await bf(e,zo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Tf(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>vR(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>bf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=ja(r,!1).getAll();return new Li(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_R)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fv.type="LOCAL";const ER=fv;new Oi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IR(t,e){return e?pn(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih extends nh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return zs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return zs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function TR(t){return iv(t.auth,new ih(t),t.bypassAuthState)}function bR(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),eR(n,new ih(t),t.bypassAuthState)}async function CR(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),Z1(n,new ih(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return TR;case"linkViaPopup":case"linkViaRedirect":return CR;case"reauthViaPopup":case"reauthViaRedirect":return bR;default:zt(this.auth,"internal-error")}}resolve(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AR=new Oi(2e3,1e4);class Ps extends pv{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Ps.currentPopupAction&&Ps.currentPopupAction.cancel(),Ps.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){In(this.filter.length===1,"Popup operations only handle one event");const e=rh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(tn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(tn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ps.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,AR.get())};e()}}Ps.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SR="pendingRedirect",po=new Map;class RR extends pv{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=po.get(this.auth._key());if(!e){try{const s=await kR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}po.set(this.auth._key(),e)}return this.bypassAuthState||po.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kR(t,e){const n=OR(e),s=NR(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function DR(t,e){po.set(t._key(),e)}function NR(t){return pn(t._redirectPersistence)}function OR(t){return fo(SR,t.config.apiKey,t.name)}async function PR(t,e,n=!1){const s=xi(t),r=IR(s,e),o=await new RR(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xR=10*60*1e3;class MR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!LR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!gv(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(tn(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=xR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Cf(e))}saveEventToCache(e){this.cachedEventUids.add(Cf(e)),this.lastProcessedEventTime=Date.now()}}function Cf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function gv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function LR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UR(t,e={}){return vr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$R=/^https?/;async function VR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await UR(t);for(const n of e)try{if(BR(n))return}catch{}zt(t,"unauthorized-domain")}function BR(t){const e=vl(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!$R.test(n))return!1;if(FR.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jR=new Oi(3e4,6e4);function Af(){const t=nn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function HR(t){return new Promise((e,n)=>{var s,r,i;function o(){Af(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Af(),n(tn(t,"network-request-failed"))},timeout:jR.get()})}if(!((r=(s=nn().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=nn().gapi)===null||i===void 0)&&i.load)o();else{const a=L1("iframefcb");return nn()[a]=()=>{gapi.load?o():n(tn(t,"network-request-failed"))},ev(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw go=null,e})}let go=null;function qR(t){return go=go||HR(t),go}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zR=new Oi(5e3,15e3),KR="__/auth/iframe",WR="emulator/auth/iframe",GR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},QR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function XR(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Zu(e,WR):`https://${t.config.authDomain}/${KR}`,s={apiKey:e.apiKey,appName:t.name,v:vs},r=QR.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${mi(s).slice(1)}`}async function YR(t){const e=await qR(t),n=nn().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:XR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:GR,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=tn(t,"network-request-failed"),a=nn().setTimeout(()=>{i(o)},zR.get());function c(){nn().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ZR=500,ek=600,tk="_blank",nk="http://localhost";class Sf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function sk(t,e,n,s=ZR,r=ek){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},JR),{width:s.toString(),height:r.toString(),top:i,left:o}),l=ct().toLowerCase();n&&(a=zy(l)?tk:n),qy(l)&&(e=e||nk,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[g,m])=>`${d}${g}=${m},`,"");if(O1(l)&&a!=="_self")return rk(e||"",a),new Sf(null);const h=window.open(e||"",a,u);K(h,t,"popup-blocked");try{h.focus()}catch{}return new Sf(h)}function rk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ik="__/auth/handler",ok="emulator/auth/handler",ak=encodeURIComponent("fac");async function Rf(t,e,n,s,r,i){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:vs,eventId:r};if(e instanceof sv){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Q0(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof Mi){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${ak}=${encodeURIComponent(c)}`:"";return`${ck(t)}?${mi(a).slice(1)}${l}`}function ck({config:t}){return t.emulator?Zu(t,ok):`https://${t.authDomain}/${ik}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic="webStorageSupport";class lk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=lv,this._completeRedirectFn=PR,this._overrideRedirectResult=DR}async _openPopup(e,n,s,r){var i;In((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Rf(e,n,s,vl(),r);return sk(e,o,rh())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await Rf(e,n,s,vl(),r);return dR(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(In(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await YR(e),s=new MR(e);return n.register("authEvent",r=>(K(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ic,{type:Ic},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Ic];o!==void 0&&n(!!o),zt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=VR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Xy()||th()||Va()}}const uk=lk;var kf="@firebase/auth",Df="0.23.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function fk(t){ds(new Bn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:s.name}),K(!(a!=null&&a.includes(":")),"argument-error",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Yy(t)},l=new B1(s,r,i,c);return H1(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),ds(new Bn("auth-internal",e=>{const n=xi(e.getProvider("auth").getImmediate());return(s=>new hk(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Zt(kf,Df,dk(t)),Zt(kf,Df,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pk=5*60,gk=Qp("authIdTokenMaxAge")||pk;let Nf=null;const mk=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>gk)return;const r=n==null?void 0:n.token;Nf!==r&&(Nf=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function oh(t=ql()){const e=ha(t,"auth");if(e.isInitialized())return e.getImmediate();const n=j1(t,{popupRedirectResolver:uk,persistence:[ER,lR,lv]}),s=Qp("authTokenSyncURL");if(s){const i=mk(s);rR(n,i,()=>i(n.currentUser)),sR(n,o=>i(o))}const r=Wp("auth");return r&&q1(n,`http://${r}`),n}fk("Browser");const yk={apiKey:"AIzaSyD6Lvy4322wkJJs7ehqNgVWta0wH4dorSE",authDomain:"editable-web-test.firebaseapp.com",projectId:"editable-web-test",storageBucket:"editable-web-test.appspot.com",messagingSenderId:"1071536890931",appId:"1:1071536890931:web:811e165904d5a70e602f46"},vk=Zp(yk),Ha=qA(vk),_k=l1(),wk=oh();async function Ks(t){const e=uy(Ha,t),n=eS(e,tS("order")),s=await oS(n),r=[];s.forEach(o=>{const a=o.data();r.push({...a,docid:o.id,imgUrl:[]})});let i=[];for(let o=0;o<r.length;o++){const a=r[o];if(Object.keys(a).includes("img")){if(a.img.length===0)continue}else break;i=i.concat(a.img.map(async(c,l)=>{a.imgUrl[l]=await a1(c1(_k,c))}))}return await Promise.all(i),r}async function Ek(t,e){try{const n=await cS(Uu(Ha,t,e));return console.log("removedoc ",n),alert("지웠습니다.",e),n}catch(n){return alert(n.code,n.message),null}}async function mv(t,e,n){try{const s=await aS(Uu(Ha,t,e),n);return console.log("updatedoc ",s),alert("반영했습니다.",e),s}catch(s){return alert(s.code,s.message),null}}async function Ik(t,e){try{const n=await lS(uy(Ha,t),e);return console.log("createDoc ",n),alert("만들었습니다."),n}catch(n){return alert(n.code,n.message),null}}async function Tk(t,e){try{const n=await iS(e);if(n.exists())return{...n.data(),docid:e.id};throw console.log("No such document!"),new Error("no such document")}catch(n){return alert(n.code,n.message),null}}async function bk(t){try{const n=(await nR(wk,t.id,t.pw)).user;return console.log("firebase",n),n}catch(e){const n=e.code,s=e.message;return alert(n,s),null}}async function Ck(){try{const t=oh(),e=await iR(t);return console.log("logout",e),!0}catch(t){const e=t.code,n=t.message;return alert(e,n),null}}function Ws(){const e=oh().currentUser;return e||null}const Ts=t=>(fi("data-v-b1c97f63"),t=t(),pi(),t),Ak={class:"viewer-view"},Sk=Ts(()=>S("a",{href:"#profile"},"사람정보",-1)),Rk=Ts(()=>S("a",{href:"#job"},"경력",-1)),kk=Ts(()=>S("a",{href:"#works"},"작품",-1)),Dk={id:"profile"},Nk=Ts(()=>S("h1",null,"사람정보",-1)),Ok={id:"job"},Pk=Ts(()=>S("h1",null,"경력",-1)),xk={id:"works"},Mk=Ts(()=>S("h1",null,"작품",-1)),Lk=Ts(()=>S("footer",null,"lee@wonj.in",-1)),Uk={__name:"ViewerView",setup(t){const e=Ft(null),n=Ft(null),s=Ft(null);async function r(){const i=Ks("profile").then(l=>{e.value=l[0]}),o=Ks("job").then(l=>{n.value=l}),a=Ks("works").then(l=>{s.value=l}),c=[i,o,a];await Promise.all(c)}return r(),(i,o)=>{const a=ia("router-link");return ae(),ge("div",Ak,[S("header",null,[Sk,Rk,kk,Be(a,{class:"admin",to:"/login"},{default:ta(()=>[dt("관리자")]),_:1})]),S("main",null,[S("article",Dk,[Nk,Be(m0,{"profile-data":e.value},null,8,["profile-data"])]),S("article",Ok,[Pk,(ae(!0),ge(De,null,us(n.value,c=>(ae(),Gr(I0,{key:c.docid,"job-data":c},null,8,["job-data"]))),128))]),S("article",xk,[Mk,(ae(!0),ge(De,null,us(s.value,c=>(ae(),Gr(D0,{key:c.docid,data:c},null,8,["data"]))),128))])]),Lk])}}},Fk=on(Uk,[["__scopeId","data-v-b1c97f63"]]),$k="/assets/admin-4c7ed200.png";const Vk=t=>(fi("data-v-e48e3337"),t=t(),pi(),t),Bk={class:"profile-editor"},jk={key:0},Hk={class:"img-container"},qk=["src"],zk=Vk(()=>S("span",null,"사진 삭제/변경/추가 기능 생략",-1)),Kk={__name:"ProfileEditor",props:{data:{type:[Object,null],required:!0}},setup(t){const e=t,n=tp(e),s=Ft(null);Fs(n.data,o=>{s.value=o});async function r(){if(confirm("진짜 삭제?")){if(!await Ws()){alert("로그인정보가 없습니다. 삭제 실패.");return}alert("하나라서 삭제못하게 막았음")}else return}async function i(){if(confirm("진짜 변경내용 적용?")){if(!await Ws()){alert("로그인정보가 없습니다. 변경 실패.");return}const a=await mv("profile",e.data.docid,{img:s.value.img,name:s.value.name,copy:s.value.copy,job:s.value.job,email:s.value.email,phone:s.value.phone,desc:s.value.desc,order:s.value.order});console.log(a)}else return}return(o,a)=>(ae(),ge("div",Bk,[s.value?(ae(),ge(De,{key:1},[S("p",null,"(순서 : "+Ve(s.value.order)+")",1),S("div",Hk,[S("img",{src:t.data.imgUrl[0]},null,8,qk),zk]),S("section",null,[S("label",null,[dt(" 이름 "),bt(S("input",{"onUpdate:modelValue":a[0]||(a[0]=c=>s.value.name=c),type:"text",class:"name"},null,512),[[Ct,s.value.name]])]),S("label",null,[dt(" 한 줄 소개 "),bt(S("input",{"onUpdate:modelValue":a[1]||(a[1]=c=>s.value.copy=c),type:"text",class:"copy"},null,512),[[Ct,s.value.copy]])]),S("label",null,[dt(" 직업 "),bt(S("input",{"onUpdate:modelValue":a[2]||(a[2]=c=>s.value.job=c),type:"text",class:"job"},null,512),[[Ct,s.value.job]])]),S("label",null,[dt(" 이메일 "),bt(S("input",{"onUpdate:modelValue":a[3]||(a[3]=c=>s.value.email=c),type:"text",class:"contact-email"},null,512),[[Ct,s.value.email]])]),S("label",null,[dt(" 전화번호 "),bt(S("input",{"onUpdate:modelValue":a[4]||(a[4]=c=>s.value.phone=c),type:"text",class:"contact-phone"},null,512),[[Ct,s.value.phone]])]),S("label",null,[dt(" 긴 소개 "),bt(S("textarea",{"onUpdate:modelValue":a[5]||(a[5]=c=>s.value.desc=c),class:"description"},null,512),[[Ct,s.value.desc]])])]),S("section",{class:"submit-container"},[S("button",{class:"remove-doc-btn",onClick:r}," 삭제하기 "),S("button",{class:"update-doc-btn",onClick:i}," 변경내용 적용 ")])],64)):(ae(),ge("span",jk,"불러오는중"))]))}},Wk=on(Kk,[["__scopeId","data-v-e48e3337"]]);const Gk={class:"job-editor"},Qk={key:0},Xk={class:"submit-container"},Yk={__name:"JobEditor",props:{data:{type:[Object,null],required:!0},mode:{type:String,required:!1,default:"update"}},emits:["job-created","job-removed"],setup(t,{emit:e}){const n=t,s=tp(n),r=Ft(null);ra(()=>{console.log(s.data.value),r.value=s.data.value}),Fs(s.data,c=>{console.log(c),r.value=c});async function i(){if(confirm("진짜 삭제?")){if(!await Ws()){alert("로그인정보가 없습니다. 삭제 실패.");return}const l=await Ek("job",n.data.docid);console.log(l),e("job-removed",r.value.order)}else return}async function o(){if(confirm("진짜 변경내용 적용?")){if(!await Ws()){alert("로그인정보가 없습니다. 변경 실패.");return}const l=await mv("job",n.data.docid,{company:r.value.company,position:r.value.position,period:r.value.period,desc:r.value.desc,order:r.value.order});console.log(l)}else return}async function a(){if(confirm("진짜 생성?")){if(!await Ws()){alert("로그인정보가 없습니다. 생성 실패.");return}const l=await Ik("job",{company:r.value.company,position:r.value.position,period:r.value.period,desc:r.value.desc,order:r.value.order});console.log("생성",l);const u=await Tk("job",l);e("job-created",r.value.order,u)}else return}return(c,l)=>(ae(),ge("div",Gk,[r.value?(ae(),ge(De,{key:1},[S("section",null,[S("p",null,"(순서 : "+Ve(r.value.order)+")",1),S("label",null,[dt(" 근무처 "),bt(S("input",{"onUpdate:modelValue":l[0]||(l[0]=u=>r.value.company=u),type:"text",class:"company"},null,512),[[Ct,r.value.company]])]),S("label",null,[dt(" 직무 "),bt(S("input",{"onUpdate:modelValue":l[1]||(l[1]=u=>r.value.position=u),type:"text",class:"position"},null,512),[[Ct,r.value.position]])]),S("label",null,[dt(" 근무기간 "),bt(S("input",{"onUpdate:modelValue":l[2]||(l[2]=u=>r.value.period=u),type:"text",class:"period"},null,512),[[Ct,r.value.period]])]),S("label",null,[dt(" 세부내용 "),bt(S("textarea",{"onUpdate:modelValue":l[3]||(l[3]=u=>r.value.desc=u),class:"description"},null,512),[[Ct,r.value.desc]])])]),S("section",Xk,[t.mode==="update"?(ae(),ge(De,{key:0},[S("button",{class:"remove-doc-btn",onClick:i}," 삭제하기 "),S("button",{class:"update-doc-btn",onClick:o}," 변경내용 적용 ")],64)):t.mode==="create"?(ae(),ge("button",{key:1,class:"create-doc-btn",onClick:a}," 만들기 ")):lw("",!0)])],64)):(ae(),ge("span",Qk,"불러오는중"))]))}},Jk=on(Yk,[["__scopeId","data-v-a82b80ae"]]);const ah=t=>(fi("data-v-02888519"),t=t(),pi(),t),Zk={class:"editor-view"},eD=["src"],tD={id:"profile"},nD=ah(()=>S("h1",null,"사람정보",-1)),sD={id:"job"},rD=ah(()=>S("h1",null,"경력",-1)),iD=ah(()=>S("article",{id:"works"},[S("h1",null,"작품"),dt(" 구현 생략 ")],-1)),oD={__name:"EditorView",setup(t){const e=jp();async function n(){await Ck()?(alert("로그아웃되었습니다."),e.push("/")):alert("엥 뭔가이상함")}const s=Ft(null),r=Ft(null),i=Ft(null);async function o(){const u=Ks("profile").then(m=>{s.value=m[0]}),h=Ks("job").then(m=>{r.value=m}),d=Ks("works").then(m=>{i.value=m}),g=[u,h,d];await Promise.all(g)}o();function a(){const u={docid:null,company:"",position:"",period:"",desc:"",order:r.value[r.value.length-1].order+1};console.log(u),r.value.push(u)}function c(u){for(let h=0;h<r.value.length;h++)if(r.value[h].order===u){r.value.splice(h,1);break}}function l(u,h){for(let d=0;d<r.value.length;d++)if(r.value[d].order===u){r.value[d]=h;break}}return(u,h)=>(ae(),ge("div",Zk,[S("button",{onClick:n,style:{"font-size":"32px"}}," 로그아웃하고 처음으로 "),S("img",{src:$t($k),style:{"max-width":"90%"}},null,8,eD),S("main",null,[S("article",tD,[nD,Be(Wk,{data:s.value},null,8,["data"])]),S("article",sD,[rD,(ae(!0),ge(De,null,us(r.value,d=>(ae(),Gr(Jk,{key:d.docid,data:d,mode:d.docid?"update":"create",onJobRemoved:c,onJobCreated:l},null,8,["data","mode"]))),128)),S("button",{onClick:a,style:{"font-size":"24px",width:"256px"}}," 새로운 경력 추가 ")]),iD])]))}},aD=on(oD,[["__scopeId","data-v-02888519"]]),cD="/assets/login-545cd19c.png";const qa=t=>(fi("data-v-594d3efe"),t=t(),pi(),t),lD={class:"login-view"},uD=["src"],hD=qa(()=>S("h2",null,"아이디 admin@wonj.in / 비밀번호 admin@입니다. 입력돼있습니다.",-1)),dD=["onSubmit"],fD=qa(()=>S("br",null,null,-1)),pD=qa(()=>S("br",null,null,-1)),gD=qa(()=>S("input",{type:"submit",value:"로그인",style:{width:"100%"}},null,-1)),mD={__name:"LoginView",setup(t){const e=Ft({id:"admin@wonj.in",pw:"admin@"}),n=Ft(null);async function s(){n.value=await bk({...e.value}),alert("로그인 잘됐음"),console.log(n.value)}function r(){const o=Ws();console.log(o),n.value=o}let i;return ra(()=>{i=jp(),r()}),lp(()=>{n.value&&(console.log(i),i.push("/edit"))}),(o,a)=>{const c=ia("router-link");return ae(),ge("div",lD,[Be(c,{to:"/",style:{color:"red","font-size":"48px","margin-bottom":"64px","font-weight":"bold","background-color":"white"}},{default:ta(()=>[dt(Ve("< 돌아가기"))]),_:1}),S("img",{src:$t(cD),style:{"max-width":"90%"}},null,8,uD),hD,S("form",{onSubmit:qw(s,["prevent"])},[bt(S("input",{"onUpdate:modelValue":a[0]||(a[0]=l=>e.value.id=l),type:"text",placeholder:"아이디"},null,512),[[Ct,e.value.id]]),fD,bt(S("input",{"onUpdate:modelValue":a[1]||(a[1]=l=>e.value.pw=l),type:"password",placeholder:"비밀번호"},null,512),[[Ct,e.value.pw]]),pD,gD],40,dD),S("button",{onClick:r},"로그인확인")])}}},yD=on(mD,[["__scopeId","data-v-594d3efe"]]),vD=[{path:"/:pathMatch(.*)*",name:"NotFound",component:o0},{path:"/",name:"Viewer",component:Fk},{path:"/login",name:"Login",component:yD},{path:"/edit",name:"Editor",component:aD}],_D=ZE({history:gE(),routes:vD}),yv=Ww(Yw);yv.use(_D);yv.mount("#app");
