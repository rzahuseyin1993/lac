"use strict";(self.webpackChunklac=self.webpackChunklac||[]).push([[6314],{93795:(e,t,l)=>{function n(e){return e=e||globalThis.location.hostname,c.some((t=>{var l;return null!=(null===(l=e)||void 0===l?void 0:l.match(t))}))}function a(e,t){return e&&(t=t||globalThis.location.hostname)?null!=t.match(o)||null!=t.match(s)?e.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(r)||null!=t.match(i)?e.replace("static.arcgis.com","staticqa.arcgis.com"):e:e}l.d(t,{EM:()=>a,b5:()=>n});const o=/^devext.arcgis.com$/,r=/^qaext.arcgis.com$/,s=/^[\w-]*\.mapsdevext.arcgis.com$/,i=/^[\w-]*\.mapsqa.arcgis.com$/,c=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,o,r,/^jsapps.esri.com$/,s,i]},26314:(e,t,l)=>{l.d(t,{resolveWebStyleSymbol:()=>b});var n=l(95444),a=l(93795),o=l(50076),r=l(90534),s=l(65308),i=l(79453),c=l(9192),m=l(24141),u=l(8446),y=l(25158);function b(e,t,l,b){const d=e.name;return null==d?Promise.reject(new o.A("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference")):e.styleName&&"Esri2DPointSymbolsStyle"===e.styleName?function(e,t,l){const n=u.jg.replaceAll(/\{SymbolName\}/gi,e),a=null!=t.portal?t.portal:s.A.getDefault();return(0,u.yA)(n,l).then((e=>{const t=(0,u.bo)(e.data);return(0,c.rS)(t,{portal:a,url:(0,r.An)((0,r.nM)(n)),origin:"portal-item"})}))}(d,t,b):(0,u.cF)(e,t,b).then((e=>function(e,t,l,b,d,p){var g,f,h,v;const w=null!=(null===l||void 0===l?void 0:l.portal)?l.portal:s.A.getDefault(),A={portal:w,url:(0,r.An)(e.baseUrl),origin:"portal-item"},N=function(e,t){return t.items.find((t=>t.name===e))}(t,e.data);if(!N){const e="The symbol name '".concat(t,"' could not be found");return Promise.reject(new o.A("symbolstyleutils:symbol-name-not-found",e,{symbolName:t}))}let S=(0,i.f)(d(N,b),A),M=null!==(g=null===(f=N.thumbnail)||void 0===f?void 0:f.href)&&void 0!==g?g:null;const $=null===(h=N.thumbnail)||void 0===h?void 0:h.imageData;(0,a.b5)()&&(S=null!==(v=(0,a.EM)(S))&&void 0!==v?v:"",M=(0,a.EM)(M));const k={portal:w,url:(0,r.An)((0,r.nM)(S)),origin:"portal-item"};return(0,u.yA)(S,p).then((a=>{const o="cimRef"===b?(0,u.bo)(a.data):a.data,r=(0,c.rS)(o,k);if(r&&(0,n.wk)(r)){if(M){const e=(0,i.f)(M,A);r.thumbnail=new y.V({url:e})}else $&&(r.thumbnail=new y.V({url:"data:image/png;base64,".concat($)}));e.styleUrl?r.styleOrigin=new m.A({portal:l.portal,styleUrl:e.styleUrl,name:t}):e.styleName&&(r.styleOrigin=new m.A({portal:l.portal,styleName:e.styleName,name:t}))}return r}))}(e,d,t,l,u.o5,b)))}}}]);
//# sourceMappingURL=6314.036f0fb6.chunk.js.map