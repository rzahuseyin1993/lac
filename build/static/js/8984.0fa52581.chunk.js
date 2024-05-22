"use strict";(self.webpackChunklac=self.webpackChunklac||[]).push([[8984,3106],{37888:(e,t,r)=>{r.d(t,{v:()=>a});var o=r(24387);function a(e){(null===e||void 0===e?void 0:e.writtenProperties)&&e.writtenProperties.forEach((e=>{let{target:t,propName:r,newOrigin:a}=e;(0,o.H)(t)&&a&&t.originOf(r)!==a&&t.updateOrigin(r,a)}))}},24387:(e,t,r)=>{function o(e){return e&&"getAtOrigin"in e&&"originOf"in e}r.d(t,{H:()=>o})},98984:(e,t,r)=>{r.d(t,{save:()=>v,saveAs:()=>w});var o=r(97924),a=r(79942),n=r(72945),s=r(79880);const i="Group Layer",c="group-layer-save",l="group-layer-save-as",u=n.mm.GROUP_LAYER_MAP;function p(e){return{isValid:"group"===e.type,errorMessage:"Layer.type should be 'group'"}}function d(e){return{isValid:(0,n.Y)(e,u),errorMessage:"Layer.portalItem.typeKeywords should have '".concat(u,"'")}}function f(e,t){return{...(0,a.m)(e,"web-map",!0),initiator:t}}function m(e){const t=e.layerJSON;return Promise.resolve(t&&Object.keys(t).length?t:null)}async function h(e,t){t.title||(t.title=e.title),(0,n.OM)(t,n.mm.METADATA),(0,n.LG)(t,u)}async function v(e,t){return(0,o.UN)({layer:e,itemType:i,validateLayer:p,validateItem:d,createJSONContext:t=>f(t,e),createItemData:m,errorNamePrefix:c,saveResources:async(t,r)=>(e.sourceIsPortalItem||await t.removeAllResources().catch((()=>{})),(0,s.r)(e.resourceReferences,r))},t)}async function w(e,t,r){return(0,o.Uh)({layer:e,itemType:i,validateLayer:p,createJSONContext:t=>f(t,e),createItemData:m,errorNamePrefix:l,newItem:t,setItemProperties:h,saveResources:(t,r)=>(0,s.r)(e.resourceReferences,r)},r)}},97924:(e,t,r)=>{r.d(t,{UN:()=>g,Uh:()=>I});var o=r(50076),a=r(37888),n=r(65308),s=r(70652),i=r(79942),c=r(72945),l=r(65526),u=r(24907);async function p(e){const{layer:t,errorNamePrefix:r,validateLayer:a}=e;await t.load(),function(e,t,r){const a=r(e);if(!a.isValid)throw new o.A("".concat(t,":invalid-parameters"),a.errorMessage,{layer:e})}(t,r,a)}function d(e,t){return"Layer (title: ".concat(e.title,", id: ").concat(e.id,") of type '").concat(e.declaredClass,"' ").concat(t)}function f(e){const{item:t,errorNamePrefix:r,layer:a,validateItem:n}=e;if((0,l.X)(t),function(e){const{item:t,itemType:r,additionalItemType:a,errorNamePrefix:n,layer:s}=e,i=[r];if(a&&i.push(a),!i.includes(t.type)){const e=i.map((e=>"'".concat(e,"'"))).join(", ");throw new o.A("".concat(n,":portal-item-wrong-type"),'Portal item type should be one of: "'.concat(e,'"'),{item:t,layer:s})}}(e),n){const e=n(t);if(!e.isValid)throw new o.A("".concat(r,":invalid-parameters"),e.errorMessage,{layer:a})}}function m(e){const{layer:t,errorNamePrefix:r}=e,{portalItem:a}=t;if(!a)throw new o.A("".concat(r,":portal-item-not-set"),d(t,"requires the portalItem property to be set"));if(!a.loaded)throw new o.A("".concat(r,":portal-item-not-loaded"),d(t,"cannot be saved to a portal item that does not exist or is inaccessible"));f({...e,item:a})}function h(e){var t,r,o,a;const{newItem:i,itemType:c}=e;let l=s.default.from(i);return l.id&&(l=l.clone(),l.id=null),null!==(r=(t=l).type)&&void 0!==r||(t.type=c),null!==(a=(o=l).portal)&&void 0!==a||(o.portal=n.A.getDefault()),f({...e,item:l}),l}function v(e){return(0,i.m)(e,"portal-item")}async function w(e,t,r){var o,a;"beforeSave"in e&&"function"==typeof e.beforeSave&&await e.beforeSave();const n=e.write({},t);return await Promise.all(null!==(o=null===(a=t.resources)||void 0===a?void 0:a.pendingOperations)&&void 0!==o?o:[]),(0,u.c)(t,{errorName:"layer-write:unsupported"},r),n}function y(e){(0,c.LG)(e,c.mm.JSAPI),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)))}async function g(e,t){const{layer:r,createItemData:o,createJSONContext:n,saveResources:s,supplementalUnsupportedErrors:i}=e;await p(e),m(e);const c=r.portalItem,l=n?n(c):v(c),u=await w(r,l,{...t,supplementalUnsupportedErrors:i}),d=await o({layer:r,layerJSON:u},c);return y(c),await c.update({data:d}),(0,a.v)(l),await(null===s||void 0===s?void 0:s(c,l)),c}async function I(e,t){const{layer:r,createItemData:o,createJSONContext:n,setItemProperties:s,saveResources:i,supplementalUnsupportedErrors:c}=e;await p(e);const l=h(e),u=n?n(l):v(l),d=await w(r,u,{...t,supplementalUnsupportedErrors:c}),f=await o({layer:r,layerJSON:d},l);return await s(r,l),y(l),await async function(e,t,r){var o;const a=e.portal;await a.signIn(),await(null===(o=a.user)||void 0===o?void 0:o.addItem({item:e,data:t,folder:null===r||void 0===r?void 0:r.folder}))}(l,f,t),r.portalItem=l,(0,a.v)(u),await(null===i||void 0===i?void 0:i(l,u)),l}},79942:(e,t,r)=>{r.d(t,{m:()=>s,v:()=>n});var o=r(90534),a=r(65308);function n(e,t){return{...i(e,t),readResourcePaths:[]}}function s(e,t,r){const a=(0,o.An)(e.itemUrl);return{...i(e,t),messages:[],writtenProperties:[],blockedRelativeUrls:[],verifyItemRelativeUrls:a?{rootPath:a.path,writtenUrls:[]}:null,resources:r?{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}:null}}function i(e,t){return{origin:t,url:(0,o.An)(e.itemUrl),portal:e.portal||a.A.getDefault(),portalItem:e}}},33106:(e,t,r)=>{r.d(t,{addOrUpdateResources:()=>i,bg:()=>f,cL:()=>d,fetchResources:()=>s,removeAllResources:()=>l,removeResource:()=>c});var o=r(3825),a=r(50076),n=r(90534);async function s(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0;await e.load(r);const o=(0,n.fj)(e.itemUrl,"resources"),{start:a=1,num:s=10,sortOrder:i="asc",sortField:c="resource"}=t,l={query:{start:a,num:s,sortOrder:i,sortField:c,token:e.apiKey},signal:null===r||void 0===r?void 0:r.signal},u=await e.portal.request(o,l);return{total:u.total,nextStart:u.nextStart,resources:u.resources.map((t=>{let{created:r,size:o,resource:a}=t;return{created:new Date(r),size:o,resource:e.resourceFromPath(a)}}))}}async function i(e,t,r,o){const s=new Map;for(const{resource:n,content:c,compress:l,access:p}of t){if(!n.hasPath())throw new a.A("portal-item-resource-".concat(r,":invalid-path"),"Resource does not have a valid path");const[e,t]=u(n.path),o="".concat(e,"/").concat(null!==l&&void 0!==l?l:"","/").concat(null!==p&&void 0!==p?p:"");s.has(o)||s.set(o,{prefix:e,compress:l,access:p,files:[]}),s.get(o).files.push({fileName:t,content:c})}await e.load(o);const i=(0,n.fj)(e.userItemUrl,"add"===r?"addResources":"updateResources");for(const{prefix:a,compress:n,access:c,files:l}of s.values()){const t=25;for(let r=0;r<l.length;r+=t){const s=l.slice(r,r+t),u=new FormData;a&&"."!==a&&u.append("resourcesPrefix",a),n&&u.append("compress","true"),c&&u.append("access",c);let p=0;for(const{fileName:e,content:t}of s)u.append("file"+ ++p,t,e);u.append("f","json"),await e.portal.request(i,{method:"post",body:u,signal:null===o||void 0===o?void 0:o.signal})}}}async function c(e,t,r){if(!t.hasPath())throw new a.A("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(r);const o=(0,n.fj)(e.userItemUrl,"removeResources");await e.portal.request(o,{method:"post",query:{resource:t.path},signal:null===r||void 0===r?void 0:r.signal}),t.portalItem=null}async function l(e,t){await e.load(t);const r=(0,n.fj)(e.userItemUrl,"removeResources");return e.portal.request(r,{method:"post",query:{deleteAll:!0},signal:null===t||void 0===t?void 0:t.signal})}function u(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function p(e){const[t,r]=function(e){const t=(0,n.Zo)(e);return null==t?[e,""]:[e.slice(0,e.length-t.length-1),".".concat(t)]}(e),[o,a]=u(t);return[o,a,r]}async function d(e){return"blob"===e.type?e.blob:"json"===e.type?new Blob([e.jsonString],{type:"application/json"}):(await(0,o.A)(e.url,{responseType:"blob"})).data}function f(e,t){if(!e.hasPath())return null;const[r,,o]=p(e.path);return e.portalItem.resourceFromPath((0,n.fj)(r,t+o))}},79880:(e,t,r)=>{r.d(t,{S:()=>c,r:()=>i});var o=r(50076),a=r(50346),n=r(49723),s=r(33106);async function i(e,t,r){const o=await l(e,t,r);await u(o,t,r)}async function c(e,t,r,o,a){const n=await l(r,o,a);await e.update({data:t}),await u(n,o,a)}async function l(e,t,i){if(null===t||void 0===t||!t.resources)return;const c=t.portalItem===e.portalItem?new Set(e.paths):new Set;e.paths.length=0,e.portalItem=t.portalItem;const l=new Set(t.resources.toKeep.map((e=>e.resource.path))),u=new Set,p=[];l.forEach((t=>{c.delete(t),e.paths.push(t)}));const d=[],f=[],m=[];for(const r of t.resources.toUpdate)if(c.delete(r.resource.path),l.has(r.resource.path)||u.has(r.resource.path)){const{resource:t,content:o,finish:a}=r,i=(0,s.bg)(t,(0,n.lk)());e.paths.push(i.path),d.push({resource:i,content:await(0,s.cL)(o),compress:r.compress}),a&&m.push((()=>a(i)))}else{e.paths.push(r.resource.path),f.push({resource:r.resource,content:await(0,s.cL)(r.content),compress:r.compress});const t=r.finish;t&&m.push((()=>t(r.resource))),u.add(r.resource.path)}for(const r of t.resources.toAdd)if(e.paths.push(r.resource.path),c.has(r.resource.path))c.delete(r.resource.path);else{d.push({resource:r.resource,content:await(0,s.cL)(r.content),compress:r.compress});const e=r.finish;e&&m.push((()=>e(r.resource)))}if(d.length||f.length){const{addOrUpdateResources:e}=await Promise.resolve().then(r.bind(r,33106));await e(t.portalItem,d,"add",i),await e(t.portalItem,f,"update",i)}if(m.forEach((e=>e())),0===p.length)return c;const h=await(0,a.Ol)(p);if((0,a.Te)(i),h.length>0)throw new o.A("save:resources","Failed to save one or more resources",{errors:h});return c}async function u(e,t,r){if(!e||!t.portalItem)return;const o=[];for(const a of e){const e=t.portalItem.resourceFromPath(a);o.push(e.portalItem.removeResource(e,r))}await(0,a.Lx)(o)}},65526:(e,t,r)=>{r.d(t,{X:()=>s});var o=r(86560),a=r(50076),n=r(90924);function s(e){if(o.A.apiKey&&(0,n.Q)(e.portal.url))throw new a.A("save-api-key-utils:api-key-not-supported","Saving is not supported on ".concat(e.portal.url," when using an api key"))}}}]);
//# sourceMappingURL=8984.0fa52581.chunk.js.map