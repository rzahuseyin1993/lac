"use strict";(self.webpackChunklac=self.webpackChunklac||[]).push([[3196],{37546:(e,t,o)=>{o.d(t,{P:()=>y});var r=o(50076),i=o(53514),n=o(24387),s=o(90534),a=o(49723),p=o(19258),l=o(49140),c=o(46053),d=o(95474),u=o(79453);function y(e){var t;const o=null!==(t=null===e||void 0===e?void 0:e.origins)&&void 0!==t?t:[void 0];return(t,r)=>{const i=function(e,t,o){var r;if("resource"===(null===e||void 0===e?void 0:e.type))return function(e,t,o){const r=(0,p.z4)(t,o);return{type:String,read:(e,t,o)=>{const i=(0,u.r)(e,t,o);return r.type===String?i:"function"==typeof r.type?new r.type({url:i}):void 0},write:{writer(t,i,a,p){if(null===p||void 0===p||!p.resources)return"string"==typeof t?void(i[a]=(0,u.t)(t,p)):void(i[a]=t.write({},p));const c=function(e){return null==e?null:"string"==typeof e?e:e.url}(t),y=(0,u.t)(c,{...p,verifyItemRelativeUrls:null!==p&&void 0!==p&&p.verifyItemRelativeUrls?{writtenUrls:p.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},u.M.NO),h=r.type!==String&&(!(0,n.H)(this)||(null===p||void 0===p?void 0:p.origin)&&this.originIdOf(o)>(0,l.aB)(p.origin)),g={object:this,propertyName:o,value:t,targetUrl:y,dest:i,targetPropertyName:a,context:p,params:e};null!==p&&void 0!==p&&p.portalItem&&y&&!(0,s.oP)(y)?h&&null!==e&&void 0!==e&&e.contentAddressed?v(g):h?function(e){var t;const{context:o,targetUrl:r,params:i,value:n,dest:a,targetPropertyName:p}=e;if(!o.portalItem)return;const l=o.portalItem.resourceFromPath(r),c=f(n,r,o),u=(0,d.n)(c),y=(0,s.Zo)(l.path),h=null!==(t=null===i||void 0===i?void 0:i.compress)&&void 0!==t&&t;u===y?(o.resources&&m({...e,resource:l,content:c,compress:h,updates:o.resources.toUpdate}),a[p]=r):v(e)}(g):function(e){let{context:t,targetUrl:o,dest:r,targetPropertyName:i}=e;t.portalItem&&t.resources&&(t.resources.toKeep.push({resource:t.portalItem.resourceFromPath(o),compress:!1}),r[i]=o)}(g):null!==p&&void 0!==p&&p.portalItem&&(null==y||null!=(0,u.i)(y)||(0,s.w8)(y)||h)?v(g):i[a]=y}}}}(e,t,o);switch(null!==(r=null===e||void 0===e?void 0:e.type)&&void 0!==r?r:"other"){case"other":return{read:!0,write:!0};case"url":{const{read:e,write:t}=u.b;return{read:e,write:t}}}}(e,t,r);for(const e of o){const o=(0,c.rM)(t,e,r);for(const e in i)o[e]=i[e]}}}function v(e){var t,o,n,p;const{targetUrl:l,params:c,value:y,context:v,dest:h,targetPropertyName:g}=e;if(!v.portalItem)return;const _=(0,u.p)(l),M=f(y,l,v);if(null!==c&&void 0!==c&&c.contentAddressed&&"json"!==M.type)return void(null===(t=v.messages)||void 0===t||t.push(new r.A("persistable:contentAddressingUnsupported",'Property "'.concat(g,'" is trying to serializing a resource with content of type ').concat(M.type," with content addressing. Content addressing is only supported for json resources."),{content:M})));const S=null!==c&&void 0!==c&&c.contentAddressed&&"json"===M.type?(0,i.d)(M.jsonString):null!==(o=null===_||void 0===_?void 0:_.filename)&&void 0!==o?o:(0,a.lk)(),x=(0,s.fj)(null!==(n=null===c||void 0===c?void 0:c.prefix)&&void 0!==n?n:null===_||void 0===_?void 0:_.prefix,S),b="".concat(x,".").concat((0,d.n)(M));if(null!==c&&void 0!==c&&c.contentAddressed&&v.resources&&"json"===M.type){var w;const e=null!==(w=v.resources.toKeep.find((e=>{let{resource:t}=e;return t.path===b})))&&void 0!==w?w:v.resources.toAdd.find((e=>{let{resource:t}=e;return t.path===b}));if(e)return void(h[g]=e.resource.itemRelativeUrl)}const I=v.portalItem.resourceFromPath(b);(0,s.w8)(l)&&v.resources&&v.resources.pendingOperations.push((0,s.tk)(l).then((e=>{I.path="".concat(x,".").concat((0,d.n)({type:"blob",blob:e})),h[g]=I.itemRelativeUrl})).catch((()=>{})));const Z=null!==(p=null===c||void 0===c?void 0:c.compress)&&void 0!==p&&p;v.resources&&m({...e,resource:I,content:M,compress:Z,updates:v.resources.toAdd}),h[g]=I.itemRelativeUrl}function m(e){let{object:t,propertyName:o,updates:r,resource:i,content:n,compress:s}=e;r.push({resource:i,content:n,compress:s,finish:e=>{!function(e,t,o){"string"==typeof e[t]?e[t]=o.url:e[t].url=o.url}(t,o,e)}})}function f(e,t,o){return"string"==typeof e?{type:"url",url:t}:{type:"json",jsonString:JSON.stringify(e.toJSON(o))}}},3196:(e,t,o)=>{o.r(t),o.d(t,{default:()=>D});var r,i=o(35143),n=o(50076),s=o(76460),a=o(77717),p=o(50346),l=o(68134),c=o(46053),d=(o(81806),o(47249),o(28379)),u=o(85842),y=o(37546),v=o(25515),m=o(12406),f=o(19502),h=o(31362),g=o(11270),_=o(94729),M=o(5682),S=o(90260),x=o(55053),b=o(2395),w=o(3825),I=o(94643),Z=o(42553),T=o(90534),N=(o(35238),o(53084)),A=o(62754),j=o(17707),P=o(26346),U=o(65215);let O=r=class extends Z.oY{constructor(e){super(e),this.geometry=null,this.type="clip"}writeGeometry(e,t,o,r){var i;if(null!==(i=r.layer)&&void 0!==i&&i.spatialReference&&!r.layer.spatialReference.equals(this.geometry.spatialReference)){if(!(0,P.canProjectWithoutEngine)(e.spatialReference,r.layer.spatialReference))return void((null===r||void 0===r?void 0:r.messages)&&r.messages.push(new A.A("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:r.layer.spatialReference,context:r})));const i=new U.A;(0,P.projectPolygon)(e,i,r.layer.spatialReference),t[o]=i.toJSON(r)}else t[o]=e.toJSON(r);delete t[o].spatialReference}clone(){return new r({geometry:(0,N.o8)(this.geometry),type:this.type})}};(0,i._)([(0,c.MZ)({type:U.A}),(0,y.P)()],O.prototype,"geometry",void 0),(0,i._)([(0,j.K)(["web-scene","portal-item"],"geometry")],O.prototype,"writeGeometry",null),(0,i._)([(0,c.MZ)({type:["clip","mask","replace"],nonNullable:!0}),(0,y.P)()],O.prototype,"type",void 0),O=r=(0,i._)([(0,u.$)("esri.layers.support.SceneModification")],O);const R=O;var F;let L=F=class extends((0,Z.Te)(I.A.ofType(R))){constructor(e){super(e),this.url=null}clone(){return new F({url:this.url,items:this.items.map((e=>e.clone()))})}toJSON(e){return this.toArray().map((t=>t.toJSON(e))).filter((e=>!!e.geometry))}static fromJSON(e,t){const o=new F;for(const r of e)o.add(R.fromJSON(r,t));return o}static async fromUrl(e,t,o){const r={url:(0,T.An)(e),origin:"service"},i=await(0,w.A)(e,{responseType:"json",signal:null===o||void 0===o?void 0:o.signal}),n=t.toJSON(),s=[];for(const a of i.data)s.push(R.fromJSON({...a,geometry:{...a.geometry,spatialReference:n}},r));return new F({url:e,items:s})}};(0,i._)([(0,c.MZ)({type:String})],L.prototype,"url",void 0),L=F=(0,i._)([(0,u.$)("esri.layers.support.SceneModifications")],L);const k=L;var $=o(12482),Y=o(79453);let C=class extends((0,S.w6)((0,f.b)((0,g.q)((0,_.A)((0,M.j)((0,a.P)((0,h.d)((0,m.p)(v.A))))))))){constructor(){super(...arguments),this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.path=null}initialize(){this.addHandles((0,l.on)((()=>this.modifications),"after-changes",(()=>this.modifications=this.modifications),l.OH))}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}readModifications(e,t,o){this._modificationsSource={url:(0,Y.f)(e,o),context:o}}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=null===e||void 0===e?void 0:e.signal;try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(o){(0,p.QP)(o)}if(await this._fetchService(t),null!=this._modificationsSource){const t=await k.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",t,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,t)}beforeSave(){if(null!=this._modificationsSource)return this.load().then((()=>{}),(()=>{}))}async saveAs(e,t){return this._debouncedSaveOperations(S.Xh.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(S.Xh.SAVE,e)}validateLayer(e){if(e.layerType&&"IntegratedMesh"!==e.layerType)throw new n.A("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new n.A("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new n.A("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}_validateElevationInfo(){const e=this.elevationInfo,t="Integrated mesh layers";(0,$.XF)(s.A.getLogger(this),(0,$.B)(t,"absolute-height",e)),(0,$.XF)(s.A.getLogger(this),(0,$.tW)(t,e))}};(0,i._)([(0,c.MZ)({type:String,readOnly:!0})],C.prototype,"geometryType",void 0),(0,i._)([(0,c.MZ)({type:["show","hide"]})],C.prototype,"listMode",void 0),(0,i._)([(0,c.MZ)({type:["IntegratedMeshLayer"]})],C.prototype,"operationalLayerType",void 0),(0,i._)([(0,c.MZ)({json:{read:!1},readOnly:!0})],C.prototype,"type",void 0),(0,i._)([(0,c.MZ)({type:b.W4,readOnly:!0})],C.prototype,"nodePages",void 0),(0,i._)([(0,c.MZ)({type:[b.uV],readOnly:!0})],C.prototype,"materialDefinitions",void 0),(0,i._)([(0,c.MZ)({type:[b.Ot],readOnly:!0})],C.prototype,"textureSetDefinitions",void 0),(0,i._)([(0,c.MZ)({type:[b.L0],readOnly:!0})],C.prototype,"geometryDefinitions",void 0),(0,i._)([(0,c.MZ)({readOnly:!0})],C.prototype,"serviceUpdateTimeStamp",void 0),(0,i._)([(0,c.MZ)({type:k}),(0,y.P)({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],C.prototype,"modifications",void 0),(0,i._)([(0,d.w)(["web-scene","portal-item"],"modifications")],C.prototype,"readModifications",null),(0,i._)([(0,c.MZ)(x.Yj)],C.prototype,"elevationInfo",null),(0,i._)([(0,c.MZ)({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],C.prototype,"path",void 0),C=(0,i._)([(0,u.$)("esri.layers.IntegratedMeshLayer")],C);const D=C},2395:(e,t,o)=>{o.d(t,{L0:()=>h,Ot:()=>y,W4:()=>p,uV:()=>d});var r=o(35143),i=o(42553),n=o(46053),s=(o(81806),o(76460),o(47249),o(6409)),a=o(85842);let p=class extends i.oY{constructor(){super(...arguments),this.nodesPerPage=null,this.rootIndex=0,this.lodSelectionMetricType=null}};(0,r._)([(0,n.MZ)({type:Number})],p.prototype,"nodesPerPage",void 0),(0,r._)([(0,n.MZ)({type:Number})],p.prototype,"rootIndex",void 0),(0,r._)([(0,n.MZ)({type:String})],p.prototype,"lodSelectionMetricType",void 0),p=(0,r._)([(0,a.$)("esri.layer.support.I3SNodePageDefinition")],p);let l=class extends i.oY{constructor(){super(...arguments),this.factor=1}};(0,r._)([(0,n.MZ)({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],l.prototype,"id",void 0),(0,r._)([(0,n.MZ)({type:Number})],l.prototype,"factor",void 0),l=(0,r._)([(0,a.$)("esri.layer.support.I3SMaterialTexture")],l);let c=class extends i.oY{constructor(){super(...arguments),this.baseColorFactor=[1,1,1,1],this.baseColorTexture=null,this.metallicRoughnessTexture=null,this.metallicFactor=1,this.roughnessFactor=1}};(0,r._)([(0,n.MZ)({type:[Number]})],c.prototype,"baseColorFactor",void 0),(0,r._)([(0,n.MZ)({type:l})],c.prototype,"baseColorTexture",void 0),(0,r._)([(0,n.MZ)({type:l})],c.prototype,"metallicRoughnessTexture",void 0),(0,r._)([(0,n.MZ)({type:Number})],c.prototype,"metallicFactor",void 0),(0,r._)([(0,n.MZ)({type:Number})],c.prototype,"roughnessFactor",void 0),c=(0,r._)([(0,a.$)("esri.layer.support.I3SMaterialPBRMetallicRoughness")],c);let d=class extends i.oY{constructor(){super(...arguments),this.alphaMode="opaque",this.alphaCutoff=.25,this.doubleSided=!1,this.cullFace="none",this.normalTexture=null,this.occlusionTexture=null,this.emissiveTexture=null,this.emissiveFactor=null,this.pbrMetallicRoughness=null}};(0,r._)([(0,s.e)({opaque:"opaque",mask:"mask",blend:"blend"})],d.prototype,"alphaMode",void 0),(0,r._)([(0,n.MZ)({type:Number})],d.prototype,"alphaCutoff",void 0),(0,r._)([(0,n.MZ)({type:Boolean})],d.prototype,"doubleSided",void 0),(0,r._)([(0,s.e)({none:"none",back:"back",front:"front"})],d.prototype,"cullFace",void 0),(0,r._)([(0,n.MZ)({type:l})],d.prototype,"normalTexture",void 0),(0,r._)([(0,n.MZ)({type:l})],d.prototype,"occlusionTexture",void 0),(0,r._)([(0,n.MZ)({type:l})],d.prototype,"emissiveTexture",void 0),(0,r._)([(0,n.MZ)({type:[Number]})],d.prototype,"emissiveFactor",void 0),(0,r._)([(0,n.MZ)({type:c})],d.prototype,"pbrMetallicRoughness",void 0),d=(0,r._)([(0,a.$)("esri.layer.support.I3SMaterialDefinition")],d);let u=class extends i.oY{};(0,r._)([(0,n.MZ)({type:String,json:{read:{source:["name","index"],reader:(e,t)=>null!=e?e:"".concat(t.index)}}})],u.prototype,"name",void 0),(0,r._)([(0,s.e)({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2",ktx2:"ktx2",basis:"basis"})],u.prototype,"format",void 0),u=(0,r._)([(0,a.$)("esri.layer.support.I3STextureFormat")],u);let y=class extends i.oY{constructor(){super(...arguments),this.atlas=!1}};(0,r._)([(0,n.MZ)({type:[u]})],y.prototype,"formats",void 0),(0,r._)([(0,n.MZ)({type:Boolean})],y.prototype,"atlas",void 0),y=(0,r._)([(0,a.$)("esri.layer.support.I3STextureSetDefinition")],y);let v=class extends i.oY{};(0,r._)([(0,s.e)({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],v.prototype,"type",void 0),(0,r._)([(0,n.MZ)({type:Number})],v.prototype,"component",void 0),v=(0,r._)([(0,a.$)("esri.layer.support.I3SGeometryAttribute")],v);let m=class extends i.oY{};(0,r._)([(0,s.e)({draco:"draco"})],m.prototype,"encoding",void 0),(0,r._)([(0,n.MZ)({type:[String]})],m.prototype,"attributes",void 0),m=(0,r._)([(0,a.$)("esri.layer.support.I3SGeometryCompressedAttributes")],m);let f=class extends i.oY{constructor(){super(...arguments),this.offset=0}};(0,r._)([(0,n.MZ)({type:Number})],f.prototype,"offset",void 0),(0,r._)([(0,n.MZ)({type:v})],f.prototype,"position",void 0),(0,r._)([(0,n.MZ)({type:v})],f.prototype,"normal",void 0),(0,r._)([(0,n.MZ)({type:v})],f.prototype,"uv0",void 0),(0,r._)([(0,n.MZ)({type:v})],f.prototype,"color",void 0),(0,r._)([(0,n.MZ)({type:v})],f.prototype,"uvRegion",void 0),(0,r._)([(0,n.MZ)({type:v})],f.prototype,"featureId",void 0),(0,r._)([(0,n.MZ)({type:v})],f.prototype,"faceRange",void 0),(0,r._)([(0,n.MZ)({type:m})],f.prototype,"compressedAttributes",void 0),f=(0,r._)([(0,a.$)("esri.layer.support.I3SGeometryBuffer")],f);let h=class extends i.oY{};(0,r._)([(0,s.e)({triangle:"triangle"})],h.prototype,"topology",void 0),(0,r._)([(0,n.MZ)()],h.prototype,"geometryBuffers",void 0),h=(0,r._)([(0,a.$)("esri.layer.support.I3SGeometryDefinition")],h)},95474:(e,t,o)=>{o.d(t,{n:()=>i});var r=o(90534);function i(e){return n[function(e){return"json"===e.type?"application/json":"blob"===e.type?e.blob.type:function(e){const t=(0,r.Zo)(e);return p[t]||s}(e.url)}(e)]||a}const n={},s="text/plain",a=n[s],p={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip","bin.gz":"application/octet-stream"};for(const l in p)n[p[l]]=l},12482:(e,t,o)=>{o.d(t,{$7:()=>s,B:()=>n,XF:()=>p,tW:()=>a,w7:()=>i});o(31633),o(59097);function r(e){return e?l:c}function i(e,t){return function(e,t){return null!==t&&void 0!==t&&t.mode?t.mode:r(e).mode}(null!=e&&e.hasZ,t)}function n(e,t,o){return o&&o.mode!==t?"".concat(e," only support ").concat(t," elevation mode"):null}function s(e,t,o){return(null===o||void 0===o?void 0:o.mode)===t?"".concat(e," do not support ").concat(t," elevation mode"):null}function a(e,t){return null!=(null===t||void 0===t?void 0:t.featureExpressionInfo)&&"0"!==t.featureExpressionInfo.expression?"".concat(e," do not support featureExpressionInfo"):null}function p(e,t){t&&e.warn(".elevationInfo=",t)}const l={mode:"absolute-height",offset:0},c={mode:"on-the-ground",offset:null}}}]);
//# sourceMappingURL=3196.14184bbb.chunk.js.map