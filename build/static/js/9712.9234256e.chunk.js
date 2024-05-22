"use strict";(self.webpackChunklac=self.webpackChunklac||[]).push([[9712],{19502:(e,t,n)=>{n.d(t,{b:()=>c});var o=n(35143),l=n(76460),r=n(46053),i=(n(81806),n(47249),n(85842)),s=n(13096);const c=e=>{let t=class extends e{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const e=(0,s.qg)(this.url);if(null!=e&&e.title)return e.title}return this._get("title")||""}set title(e){this._set("title",e)}set url(e){this._set("url",(0,s.Jf)(e,l.A.getLogger(this)))}};return(0,o._)([(0,r.MZ)()],t.prototype,"title",null),(0,o._)([(0,r.MZ)({type:String})],t.prototype,"url",null),t=(0,o._)([(0,i.$)("esri.layers.mixins.ArcGISService")],t),t}},29632:(e,t,n)=>{n.d(t,{Fe:()=>c,Nk:()=>r});var o=n(69539),l=n(97763);function r(e){const t=[];return i((0,l.lW)(e),t),t.length?new o.A((0,l.e6)(t[0])):null}function i(e,t){var n,o;if(!e)return;let r;r="CIMTextSymbol"===e.type?e.symbol:e;const c="CIMPolygonSymbol"===e.type;if(null!==(n=r)&&void 0!==n&&n.symbolLayers)for(const a of r.symbolLayers)if(!(a.colorLocked||c&&((0,l.mA)(a)||(0,l.MM)(a)&&a.markerPlacement&&(0,l.zr)(a.markerPlacement))))switch(a.type){case"CIMPictureMarker":case"CIMPictureStroke":case"CIMPictureFill":a.tintColor&&s(t,a.tintColor);break;case"CIMVectorMarker":null===(o=a.markerGraphics)||void 0===o||o.forEach((e=>{i(e.symbol,t)}));break;case"CIMSolidStroke":case"CIMSolidFill":s(t,a.color);break;case"CIMHatchFill":i(a.lineSymbol,t)}}function s(e,t){for(const n of e)if(n.join(".")===t.join("."))return;e.push(t)}function c(e,t,n){t instanceof o.A||(t=new o.A(t));const r=(0,l.lW)(e);r&&a(r,t,n)}function a(e,t,n){var o,r,i;if(!e)return;let s;s="CIMTextSymbol"===e.type?e.symbol:e;const c="CIMPolygonSymbol"===(null===(o=s)||void 0===o?void 0:o.type);if(null!==(r=s)&&void 0!==r&&r.symbolLayers)for(const u of s.symbolLayers){if(u.colorLocked)continue;if(c)if(n){const{layersToColor:e}=n;if(((0,l.mA)(u)||(0,l.MM)(u)&&u.markerPlacement&&(0,l.zr)(u.markerPlacement))&&"fill"===e||(0,l.jn)(u)&&"outline"===e)continue}else if((0,l.mA)(u)||(0,l.MM)(u)&&u.markerPlacement&&(0,l.zr)(u.markerPlacement))continue;const e=t.toArray();switch(u.type){case"CIMPictureMarker":case"CIMPictureStroke":case"CIMPictureFill":u.tintColor=e;break;case"CIMVectorMarker":null===(i=u.markerGraphics)||void 0===i||i.forEach((e=>{a(e.symbol,t,n)}));break;case"CIMSolidStroke":case"CIMSolidFill":u.color=e;break;case"CIMHatchFill":a(u.lineSymbol,t,n)}}}},87840:(e,t,n)=>{n.d(t,{$4:()=>w,O0:()=>v,O1:()=>g,Sw:()=>M,eH:()=>b,rc:()=>k});var o=n(28899),l=n(69539),r=n(3825),i=n(53521),s=n(76931),c=n(29632);const a="picture-fill",u="simple-fill",f="simple-line",y="simple-marker",d="text",h="cim",m=new Map([["dash",[4,3]],["dashdot",[4,3,1,3]],["dot",[1,3]],["longdash",[8,3]],["longdashdot",[8,3,1,3]],["longdashdotdot",[8,3,1,3,1,3]],["shortdash",[4,1]],["shortdashdot",[4,1,1,1]],["shortdashdotdot",[4,1,1,1,1,1]],["shortdot",[1,1]],["solid",[]]]),p=new i.q(1e3);function b(e){const t=e.style;let n=null;if(e)switch(e.type){case y:"cross"!==t&&"x"!==t&&(n=e.color);break;case u:t&&"solid"!==t?"none"!==t&&(n={type:"pattern",x:0,y:0,src:(0,o.s)("esri/symbols/patterns/".concat(t,".png")),width:5,height:5}):n=e.color;break;case a:n={type:"pattern",src:e.url,width:(0,s.Lz)(e.width)*e.xscale,height:(0,s.Lz)(e.height)*e.yscale,x:(0,s.Lz)(e.xoffset),y:(0,s.Lz)(e.yoffset)};break;case d:n=e.color;break;case h:n=(0,c.Nk)(e)}return n}function k(e,t){const n=e+"-"+t;return void 0!==p.get(n)?Promise.resolve(p.get(n)):(0,r.A)(e,{responseType:"image"}).then((e=>{const o=e.data,l=o.naturalWidth,r=o.naturalHeight,i=document.createElement("canvas");i.width=l,i.height=r;const s=i.getContext("2d");s.fillStyle=t,s.fillRect(0,0,l,r),s.globalCompositeOperation="destination-in",s.drawImage(o,0,0);const c=i.toDataURL();return p.put(n,c),c}))}function w(e){if(!e)return null;let t=null;switch(e.type){case u:case a:case y:t=w(e.outline);break;case f:{const n=(0,s.Lz)(e.width);null!=e.style&&"none"!==e.style&&0!==n&&(t={color:e.color,style:g(e.style),width:n,cap:e.cap,join:"miter"===e.join?(0,s.Lz)(e.miterLimit):e.join},t.dashArray=v(t).join(",")||"none");break}default:t=null}return t}function v(e){if(null===e||void 0===e||!e.style)return[];const{dashArray:t,style:n,width:o}=e;if("string"==typeof t&&"none"!==t)return t.split(",").map((e=>Number(e)));const l=null!==o&&void 0!==o?o:0,r=m.has(n)?m.get(n).map((e=>e*l)):[];if("butt"!==e.cap)for(const[i,s]of r.entries())r[i]=i%2==1?s+l:Math.max(s-l,1);return r}const g=(()=>{const e={};return t=>{if(e[t])return e[t];const n=t.replaceAll("-","");return e[t]=n,n}})(),M=new l.A([128,128,128])},94439:(e,t,n)=>{n.d(t,{$d:()=>h,GG:()=>C,N7:()=>m,Sx:()=>p,UQ:()=>S,di:()=>L,dt:()=>k,k_:()=>d,yG:()=>I});var o=n(69539),l=n(95444),r=n(98773),i=(n(81806),n(76931)),s=n(9392),c=n(44081),a=n(29632),u=n(87840),f=n(9994);const y=new o.A("white");function d(e){var t;if(!e)return 0;if((0,l.wk)(e)){const t=function(e){var t,n;const o=null===(t=e.symbolLayers)||void 0===t?void 0:t.at(-1);if(o&&"outline"in o)return null===o||void 0===o||null===(n=o.outline)||void 0===n?void 0:n.size}(e);return null!=t?t:0}return(0,i.PN)(null===(t=(0,u.$4)(e))||void 0===t?void 0:t.width)}function h(e){if(null==e||!("symbolLayers"in e)||null==e.symbolLayers)return!1;switch(e.type){case"point-3d":return e.symbolLayers.some((e=>"object"===e.type));case"line-3d":return e.symbolLayers.some((e=>"path"===e.type));case"polygon-3d":return e.symbolLayers.some((e=>"object"===e.type||"extrude"===e.type));default:return!1}}function m(e){var t,n;return null!==(t=null===(n=e.resource)||void 0===n?void 0:n.href)&&void 0!==t?t:""}function p(e,t){if(!e)return null;let n=null;return(0,l.wk)(e)?n=function(e){const t=e.symbolLayers;if(!t)return null;let n=null;return t.forEach((e=>{var t;"object"===e.type&&(null===(t=e.resource)||void 0===t?void 0:t.href)||(n="water"===e.type?e.color:e.material?e.material.color:null)})),n?new o.A(n):null}(e):(0,l.$y)(e)&&(n="cim"===e.type?(0,a.Nk)(e):e.color?new o.A(e.color):null),n?b(n,t):null}function b(e,t){if(null==t||null==e)return e;const n=e.toRgba();return n[3]=n[3]*t,new o.A(n)}function k(e,t,n){e&&(t||null!=n)&&(t&&(t=new o.A(t)),(0,l.wk)(e)?function(e,t,n){const o=e.symbolLayers;if(!o)return;const l=e=>{var o,l;return b(t=null!==(o=null!==(l=t)&&void 0!==l?l:e)&&void 0!==o?o:null!=n?y:null,n)};o.forEach((e=>{var o;if("object"!==e.type||null===(o=e.resource)||void 0===o||!o.href||t)if("water"===e.type)e.color=l(e.color);else{var r;const t=null!=e.material?e.material.color:null,o=l(t);null==e.material?e.material=new f.N({color:o}):e.material.color=o,null!=n&&"outline"in e&&null!=(null===(r=e.outline)||void 0===r?void 0:r.color)&&(e.outline.color=b(e.outline.color,n))}}))}(e,t,n):(0,l.$y)(e)&&function(e,t,n){var o,l;(t=null!==(o=t)&&void 0!==o?o:e.color)&&(e.color=b(t,n)),null!=n&&"outline"in e&&(null===(l=e.outline)||void 0===l?void 0:l.color)&&(e.outline.color=b(e.outline.color,n))}(e,t,n))}async function w(e,t){const o=e.symbolLayers;o&&await(0,r.jJ)(o,(async e=>async function(e,t){switch(e.type){case"extrude":!function(e,t){e.size="number"==typeof t[2]?t[2]:0}(e,t);break;case"icon":case"line":case"text":!function(e,t){const n=v(t);null!=n&&(e.size=n)}(e,t);break;case"path":!function(e,t){const n=g(t,s.Un,[e.width,void 0,e.height]);e.width=M(t[0],e.width,1,n),e.height=M(t[2],e.height,1,n)}(e,t);break;case"object":await async function(e,t){const{resourceSize:o,symbolSize:l}=await async function(e){const{computeObjectLayerResourceSize:t}=await n.e(4374).then(n.bind(n,44374)),o=await t(e,10),{width:l,height:r,depth:i}=e,s=[l,i,r];let c=1;for(let n=0;n<3;n++){const e=s[n];if(null!=e){c=e/o[n];break}}for(let n=0;n<3;n++)null==s[n]&&(s[n]=o[n]*c);return{resourceSize:o,symbolSize:s}}(e),r=g(t,o,l);e.width=M(t[0],l[0],o[0],r),e.depth=M(t[1],l[1],o[1],r),e.height=M(t[2],l[2],o[2],r)}(e,t)}}(e,t)))}function v(e){for(const t of e)if("number"==typeof t)return t;return null}function g(e,t,n){for(let o=0;o<3;o++){const l=e[o];switch(l){case"symbol-value":{const e=n[o];return null!=e?e/t[o]:1}case"proportional":break;default:if(l&&t[o])return l/t[o]}}return 1}function M(e,t,n,o){switch(e){case"proportional":return n*o;case"symbol-value":return null!=t?t:n;default:return e}}async function S(e,t){if(e&&t)return(0,l.wk)(e)?w(e,t):void((0,l.$y)(e)&&function(e,t){const n=v(t);if(null!=n)switch(e.type){case"simple-marker":e.size=n;break;case"picture-marker":{const t=e.width/e.height;t>1?(e.width=n,e.height=n*t):(e.width=n*t,e.height=n);break}case"simple-line":e.width=n;break;case"text":e.font.size=n}}(e,t))}function C(e,t,n){if(e&&null!=t)if((0,l.wk)(e)){const o=e.symbolLayers;o&&o.forEach((e=>{var o,l,r;if(e&&"object"===e.type)switch(n){case"tilt":e.tilt=(null!==(o=e.tilt)&&void 0!==o?o:0)+t;break;case"roll":e.roll=(null!==(l=e.roll)&&void 0!==l?l:0)+t;break;default:e.heading=(null!==(r=e.heading)&&void 0!==r?r:0)+t}}))}else(0,l.$y)(e)&&("simple-marker"!==e.type&&"picture-marker"!==e.type&&"text"!==e.type||(e.angle+=t))}function L(e){if(!e)return null;const t=e.effects.filter((e=>"bloom"!==e.type)).map((e=>e.toJSON()));return(0,c.zu)(t)}async function I(e,t){return await e.fetchSymbol(t)||e.fetchCIMSymbol(t)}}}]);
//# sourceMappingURL=9712.9234256e.chunk.js.map