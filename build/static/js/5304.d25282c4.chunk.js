"use strict";(self.webpackChunklac=self.webpackChunklac||[]).push([[5304,5810,1960],{63733:(e,t,r)=>{r.d(t,{A:()=>c});var o=r(35143),s=r(46053),i=(r(81806),r(76460),r(47249),r(85842)),n=r(5364),a=r(25515),l=r(65624),p=r(5682),u=r(64519),y=r(731);let d=class extends((0,l.d)((0,p.j)(a.A))){constructor(e){super(e),this.elevationInfo=null,this.graphics=new u.Y,this.screenSizePerspectiveEnabled=!0,this.type="graphics",this.internal=!1}destroy(){this.removeAll(),this.graphics.destroy()}add(e){return this.graphics.add(e),this}addMany(e){return this.graphics.addMany(e),this}removeAll(){return this.graphics.removeAll(),this}remove(e){this.graphics.remove(e)}removeMany(e){this.graphics.removeMany(e)}on(e,t){return super.on(e,t)}graphicChanged(e){this.emit("graphic-update",e)}};(0,o._)([(0,s.MZ)({type:y.A})],d.prototype,"elevationInfo",void 0),(0,o._)([(0,s.MZ)((0,n.C)(u.Y,"graphics"))],d.prototype,"graphics",void 0),(0,o._)([(0,s.MZ)({type:["show","hide"]})],d.prototype,"listMode",void 0),(0,o._)([(0,s.MZ)()],d.prototype,"screenSizePerspectiveEnabled",void 0),(0,o._)([(0,s.MZ)({readOnly:!0})],d.prototype,"type",void 0),(0,o._)([(0,s.MZ)({constructOnly:!0})],d.prototype,"internal",void 0),d=(0,o._)([(0,i.$)("esri.layers.GraphicsLayer")],d);const c=d},43311:(e,t,r)=>{r.r(t),r.d(t,{default:()=>z});var o=r(35143),s=(r(35238),r(39356)),i=(r(95444),r(94643)),n=r(50076),a=r(53084),l=r(77717),p=r(48611),u=r(62754),y=r(46053),d=(r(81806),r(76460),r(28379)),c=r(85842),m=r(17707),h=r(26346),f=r(2413),g=r(1438),v=r(80963),S=r(38451),b=r(63733),w=r(25515),M=r(33754),A=r(65624),O=r(11270),_=r(94729),C=r(5682),x=r(44135),T=r(86875),L=r(7246),R=r(76940),I=r(86659),N=r(13312),Z=r(76797);function D(e){return"markup"===e.featureCollectionType||e.layers.some((e=>null!=e.layerDefinition.visibilityField||!E(e)))}function E(e){var t;let{layerDefinition:r,featureSet:o}=e;const s=null!==(t=r.geometryType)&&void 0!==t?t:o.geometryType;return P.find((e=>{var t;return s===e.geometryTypeJSON&&(null===(t=r.drawingInfo)||void 0===t||null===(t=t.renderer)||void 0===t||null===(t=t.symbol)||void 0===t?void 0:t.type)===e.identifyingSymbol.type}))}function F(){return new Z.A({xmin:-180,ymin:-90,xmax:180,ymax:90})}const Q=new x.A({name:"OBJECTID",alias:"OBJECTID",type:"oid",nullable:!1,editable:!1}),J=new x.A({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0,length:255});let j=class extends b.A{constructor(e){super(e),this.visibilityMode="inherited"}initialize(){for(const e of this.graphics)e.sourceLayer=this.layer;this.graphics.on("after-add",(e=>{e.item.sourceLayer=this.layer})),this.graphics.on("after-remove",(e=>{e.item.sourceLayer=null}))}get fullExtent(){var e;const t=null===(e=this.layer)||void 0===e?void 0:e.spatialReference,r=this.fullBounds;return t?null==r?(0,h.projectOrLoad)(F(),t).geometry:(0,f.w1)(r,t):null}get fullBounds(){var e;const t=null===(e=this.layer)||void 0===e?void 0:e.spatialReference;if(!t)return null;const r=(0,f.Ie)();return this.graphics.forEach((e=>{const o=null!=e.geometry?(0,h.projectOrLoad)(e.geometry,t).geometry:null;null!=o&&(0,f.fT)(r,"point"===o.type?o:o.extent,r)})),(0,f.aI)(r,f.qv)?null:r}get sublayers(){return this.graphics}};(0,o._)([(0,y.MZ)({readOnly:!0})],j.prototype,"fullExtent",null),(0,o._)([(0,y.MZ)({readOnly:!0})],j.prototype,"fullBounds",null),(0,o._)([(0,y.MZ)({readOnly:!0})],j.prototype,"sublayers",null),(0,o._)([(0,y.MZ)()],j.prototype,"layer",void 0),(0,o._)([(0,y.MZ)()],j.prototype,"layerId",void 0),(0,o._)([(0,y.MZ)({readOnly:!0})],j.prototype,"visibilityMode",void 0),j=(0,o._)([(0,c.$)("esri.layers.MapNotesLayer.MapNotesSublayer")],j);const P=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",id:"polygonLayer",layerId:0,title:"Polygons",identifyingSymbol:(new T.A).toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",id:"polylineLayer",layerId:1,title:"Polylines",identifyingSymbol:(new L.A).toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",id:"multipointLayer",layerId:2,title:"Multipoints",identifyingSymbol:(new R.A).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"pointLayer",layerId:3,title:"Points",identifyingSymbol:(new R.A).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"textLayer",layerId:4,title:"Text",identifyingSymbol:(new I.A).toJSON()}];let G=class extends((0,A.d)((0,C.j)((0,O.q)((0,_.A)((0,l.P)(w.A)))))){constructor(e){super(e),this.capabilities={operations:{supportsMapNotesEditing:!0}},this.featureCollections=null,this.featureCollectionJSON=null,this.featureCollectionType="notes",this.legendEnabled=!1,this.listMode="hide-children",this.minScale=0,this.maxScale=0,this.spatialReference=N.A.WGS84,this.sublayers=new i.A(P.map((e=>new j({id:e.id,layerId:e.layerId,title:e.title,layer:this})))),this.title="Map Notes",this.type="map-notes",this.visibilityMode="inherited"}readCapabilities(e,t,r){return{operations:{supportsMapNotesEditing:!D(t)&&"portal-item"!==(null===r||void 0===r?void 0:r.origin)}}}readFeatureCollections(e,t,r){if(!D(t))return null;const o=t.layers.map((e=>{const t=new S.default;return t.read(e,r),t}));return new i.A({items:o})}readLegacyfeatureCollectionJSON(e,t){return D(t)?(0,a.o8)(t.featureCollection):null}get fullExtent(){var e;const t=this.spatialReference,r=(0,f.Ie)();return null!=this.sublayers?this.sublayers.forEach((e=>{let{fullBounds:t}=e;return null!=t?(0,f.fT)(r,t,r):r}),r):null!==(e=this.featureCollectionJSON)&&void 0!==e&&e.layers.some((e=>e.layerDefinition.extent))&&this.featureCollectionJSON.layers.forEach((e=>{const o=(0,h.projectOrLoad)(e.layerDefinition.extent,t).geometry;null!=o&&(0,f.fT)(r,o,r)})),(0,f.aI)(r,f.qv)?(0,h.projectOrLoad)(F(),t).geometry:(0,f.w1)(r,t)}readMinScale(e,t){for(const r of t.layers)if(null!=r.layerDefinition.minScale)return r.layerDefinition.minScale;return 0}readMaxScale(e,t){for(const r of t.layers)if(null!=r.layerDefinition.maxScale)return r.layerDefinition.maxScale;return 0}get multipointLayer(){return this._findSublayer("multipointLayer")}get pointLayer(){return this._findSublayer("pointLayer")}get polygonLayer(){return this._findSublayer("polygonLayer")}get polylineLayer(){return this._findSublayer("polylineLayer")}readSpatialReference(e,t){return t.layers.length?N.A.fromJSON(t.layers[0].layerDefinition.spatialReference):N.A.WGS84}readSublayers(e,t,r){if(D(t))return null;const o=[];let n=t.layers.reduce(((e,t)=>{var r;return Math.max(e,null!==(r=t.layerDefinition.id)&&void 0!==r?r:-1)}),-1)+1;for(const i of t.layers){var a;const{layerDefinition:e,featureSet:t}=i,r=null!==(a=e.id)&&void 0!==a?a:n++,l=E(i);if(null!=l){const i=new j({id:l.id,title:e.name,layerId:r,layer:this,graphics:t.features.map((e=>{let{geometry:t,symbol:r,attributes:o,popupInfo:i}=e;return s.A.fromJSON({attributes:o,geometry:t,symbol:r,popupTemplate:i})}))});o.push(i)}}return new i.A(o)}writeSublayers(e,t,r,o){var s;const{minScale:i,maxScale:a}=this;if(null==e)return;const l=e.some((e=>e.graphics.length>0));if(!this.capabilities.operations.supportsMapNotesEditing)return void(l&&(null===o||void 0===o||null===(s=o.messages)||void 0===s||s.push(new n.A("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer"))));const u=[];let y=this.spatialReference.toJSON();e:for(const n of e)for(const e of n.graphics)if(null!=e.geometry){y=e.geometry.spatialReference.toJSON();break e}for(const n of P){const t=e.find((e=>n.id===e.id));this._writeMapNoteSublayer(u,t,n,i,a,y,o)}(0,p.sM)("featureCollection.layers",u,t)}get textLayer(){return this._findSublayer("textLayer")}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Promise.resolve(this)}read(e,t){"featureCollection"in e&&(e=(0,a.o8)(e),Object.assign(e,e.featureCollection)),super.read(e,t)}async beforeSave(){if(null==this.sublayers)return;let e=null;const t=[];for(const o of this.sublayers)for(const r of o.graphics)if(null!=r.geometry){const o=r.geometry;e?(0,v.aI)(o.spatialReference,e)||((0,h.canProjectWithoutEngine)(o.spatialReference,e)||(0,h.isLoaded)()||await(0,h.load)(),r.geometry=(0,h.project)(o,e)):e=o.spatialReference,t.push(r)}const r=await(0,g.el)(t.map((e=>e.geometry)));t.forEach(((e,t)=>e.geometry=r[t]))}_findSublayer(e){var t,r;return null==this.sublayers?null:null!==(t=null===(r=this.sublayers)||void 0===r?void 0:r.find((t=>t.id===e)))&&void 0!==t?t:null}_writeMapNoteSublayer(e,t,r,o,s,i,n){const l=[];if(null!=t){for(const e of t.graphics)this._writeMapNote(l,e,r.geometryType,n);this._normalizeObjectIds(l,Q),e.push({layerDefinition:{name:t.title,drawingInfo:{renderer:{type:"simple",symbol:(0,a.o8)(r.identifyingSymbol)}},id:t.layerId,geometryType:r.geometryTypeJSON,minScale:o,maxScale:s,objectIdField:"OBJECTID",fields:[Q.toJSON(),J.toJSON()],spatialReference:i},featureSet:{features:l,geometryType:r.geometryTypeJSON}})}}_writeMapNote(e,t,r,o){var s,i;if(null==t)return;const{geometry:n,symbol:a,popupTemplate:l}=t;if(null==n)return;if(n.type!==r)return void(null===o||void 0===o||null===(s=o.messages)||void 0===s||s.push(new u.A("map-notes-layer:invalid-geometry-type",'Geometry "'.concat(n.type,'" cannot be saved in "').concat(r,'" layer'),{graphic:t})));if(null==a)return void(null===o||void 0===o||null===(i=o.messages)||void 0===i||i.push(new u.A("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:t})));const p={attributes:{...t.attributes},geometry:n.toJSON(),symbol:a.toJSON()};null!=l&&(p.popupInfo=l.toJSON()),e.push(p)}_normalizeObjectIds(e,t){const r=t.name;let o=(0,M.H)(r,e)+1;const s=new Set;for(const i of e){i.attributes||(i.attributes={});const{attributes:e}=i;(null==e[r]||s.has(e[r]))&&(e[r]=o++),s.add(e[r])}}};(0,o._)([(0,y.MZ)({readOnly:!0})],G.prototype,"capabilities",void 0),(0,o._)([(0,d.w)(["portal-item","web-map"],"capabilities",["layers"])],G.prototype,"readCapabilities",null),(0,o._)([(0,y.MZ)({readOnly:!0})],G.prototype,"featureCollections",void 0),(0,o._)([(0,d.w)(["web-map","portal-item"],"featureCollections",["layers"])],G.prototype,"readFeatureCollections",null),(0,o._)([(0,y.MZ)({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],G.prototype,"featureCollectionJSON",void 0),(0,o._)([(0,d.w)(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],G.prototype,"readLegacyfeatureCollectionJSON",null),(0,o._)([(0,y.MZ)({readOnly:!0,json:{read:!0,write:{enabled:!0,ignoreOrigin:!0}}})],G.prototype,"featureCollectionType",void 0),(0,o._)([(0,y.MZ)({readOnly:!0})],G.prototype,"fullExtent",null),(0,o._)([(0,y.MZ)({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy(){return{enabled:null!=this.featureCollectionJSON}}}}}}})],G.prototype,"legendEnabled",void 0),(0,o._)([(0,y.MZ)({type:["show","hide","hide-children"]})],G.prototype,"listMode",void 0),(0,o._)([(0,y.MZ)({type:Number,nonNullable:!0,json:{write:!1}})],G.prototype,"minScale",void 0),(0,o._)([(0,d.w)(["web-map","portal-item"],"minScale",["layers"])],G.prototype,"readMinScale",null),(0,o._)([(0,y.MZ)({type:Number,nonNullable:!0,json:{write:!1}})],G.prototype,"maxScale",void 0),(0,o._)([(0,d.w)(["web-map","portal-item"],"maxScale",["layers"])],G.prototype,"readMaxScale",null),(0,o._)([(0,y.MZ)({readOnly:!0})],G.prototype,"multipointLayer",null),(0,o._)([(0,y.MZ)({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],G.prototype,"operationalLayerType",void 0),(0,o._)([(0,y.MZ)({readOnly:!0})],G.prototype,"pointLayer",null),(0,o._)([(0,y.MZ)({readOnly:!0})],G.prototype,"polygonLayer",null),(0,o._)([(0,y.MZ)({readOnly:!0})],G.prototype,"polylineLayer",null),(0,o._)([(0,y.MZ)({type:N.A})],G.prototype,"spatialReference",void 0),(0,o._)([(0,d.w)(["web-map","portal-item"],"spatialReference",["layers"])],G.prototype,"readSpatialReference",null),(0,o._)([(0,y.MZ)({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],G.prototype,"sublayers",void 0),(0,o._)([(0,d.w)("web-map","sublayers",["layers"])],G.prototype,"readSublayers",null),(0,o._)([(0,m.K)("web-map","sublayers")],G.prototype,"writeSublayers",null),(0,o._)([(0,y.MZ)({readOnly:!0})],G.prototype,"textLayer",null),(0,o._)([(0,y.MZ)()],G.prototype,"title",void 0),(0,o._)([(0,y.MZ)({readOnly:!0,json:{read:!1}})],G.prototype,"type",void 0),G=(0,o._)([(0,c.$)("esri.layers.MapNotesLayer")],G);const z=G},33754:(e,t,r)=>{r.d(t,{H:()=>s,L:()=>o});const o=1;function s(e,t){let r=0;for(const s of t){var o;const t=null===(o=s.attributes)||void 0===o?void 0:o[e];"number"==typeof t&&isFinite(t)&&(r=Math.max(r,t))}return r}},12406:(e,t,r)=>{r.d(t,{p:()=>n});var o=r(35143),s=r(46053),i=(r(81806),r(76460),r(47249),r(85842));const n=e=>{let t=class extends e{get apiKey(){var e;return this._isOverridden("apiKey")?this._get("apiKey"):function(e){return"portalItem"in e}(this)?null===(e=this.portalItem)||void 0===e?void 0:e.apiKey:null}set apiKey(e){null!=e?this._override("apiKey",e):(this._clearOverride("apiKey"),this.clear("apiKey","user"))}};return(0,o._)([(0,s.MZ)({type:String})],t.prototype,"apiKey",null),t=(0,o._)([(0,i.$)("esri.layers.mixins.APIKeyMixin")],t),t}},19502:(e,t,r)=>{r.d(t,{b:()=>l});var o=r(35143),s=r(76460),i=r(46053),n=(r(81806),r(47249),r(85842)),a=r(13096);const l=e=>{let t=class extends e{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const e=(0,a.qg)(this.url);if(null!=e&&e.title)return e.title}return this._get("title")||""}set title(e){this._set("title",e)}set url(e){this._set("url",(0,a.Jf)(e,s.A.getLogger(this)))}};return(0,o._)([(0,i.MZ)()],t.prototype,"title",null),(0,o._)([(0,i.MZ)({type:String})],t.prototype,"url",null),t=(0,o._)([(0,n.$)("esri.layers.mixins.ArcGISService")],t),t}},91485:(e,t,r)=>{r.d(t,{A:()=>c});var o=r(35143),s=r(69098),i=r(42553),n=r(46053),a=(r(81806),r(76460),r(47249),r(28379)),l=r(85842),p=r(17707),u=r(90907),y=r(15427);let d=class extends((0,s.O)(i.oY)){constructor(e){super(e),this.id=null,this.name=null,this.domains=null,this.templates=null}readDomains(e){const t={};for(const r of Object.keys(e))t[r]=(0,u.rS)(e[r]);return t}writeDomains(e,t){const r={};for(const s of Object.keys(e)){var o;e[s]&&(r[s]=null===(o=e[s])||void 0===o?void 0:o.toJSON())}t.domains=r}};(0,o._)([(0,n.MZ)({json:{write:!0}})],d.prototype,"id",void 0),(0,o._)([(0,n.MZ)({json:{write:!0}})],d.prototype,"name",void 0),(0,o._)([(0,n.MZ)({json:{write:!0}})],d.prototype,"domains",void 0),(0,o._)([(0,a.w)("domains")],d.prototype,"readDomains",null),(0,o._)([(0,p.K)("domains")],d.prototype,"writeDomains",null),(0,o._)([(0,n.MZ)({type:[y.A],json:{write:!0}})],d.prototype,"templates",void 0),d=(0,o._)([(0,l.$)("esri.layers.support.FeatureType")],d);const c=d},5618:(e,t,r)=>{r.d(t,{A:()=>u});var o,s=r(35143),i=r(94643),n=r(42553),a=r(46053),l=(r(81806),r(76460),r(47249),r(85842));let p=o=class extends n.oY{constructor(e){super(e),this.floorField=null,this.viewAllMode=!1,this.viewAllLevelIds=new i.A}clone(){return new o({floorField:this.floorField,viewAllMode:this.viewAllMode,viewAllLevelIds:this.viewAllLevelIds})}};(0,s._)([(0,a.MZ)({type:String,json:{write:!0}})],p.prototype,"floorField",void 0),(0,s._)([(0,a.MZ)({json:{read:!1,write:!1}})],p.prototype,"viewAllMode",void 0),(0,s._)([(0,a.MZ)({json:{read:!1,write:!1}})],p.prototype,"viewAllLevelIds",void 0),p=o=(0,s._)([(0,l.$)("esri.layers.support.LayerFloorInfo")],p);const u=p},44141:(e,t,r)=>{r.d(t,{S:()=>y});var o=r(81806),s=r(13096);function i(e,t,r){return!!a(e,t,r)}function n(e,t,r){return a(e,t,r)}function a(e,t,r){return e&&e.hasOwnProperty(t)?e[t]:r}const l={name:"supportsName",size:"supportsSize",contentType:"supportsContentType",keywords:"supportsKeywords",exifInfo:"supportsExifInfo"};function p(e){var t;const r=null===e||void 0===e||null===(t=e.supportedSpatialAggregationStatistics)||void 0===t?void 0:t.map((e=>e.toLowerCase()));return{envelope:!(null===r||void 0===r||!r.includes("envelopeaggregate")),centroid:!(null===r||void 0===r||!r.includes("centroidaggregate")),convexHull:!(null===r||void 0===r||!r.includes("convexhullaggregate"))}}function u(e,t){var r;const o=null===e||void 0===e||null===(r=e.supportedOperationsWithCacheHint)||void 0===r?void 0:r.map((e=>e.toLowerCase()));return!(null===o||void 0===o||!o.includes(t.toLowerCase()))}function y(e,t){return{analytics:d(e),attachment:c(e),data:m(e),metadata:h(e),operations:f(e.capabilities,e,t),query:g(e,t),queryRelated:v(e),queryTopFeatures:S(e),editing:b(e)}}function d(e){return{supportsCacheHint:u(e.advancedQueryCapabilities,"queryAnalytics")}}function c(e){const t=e.attachmentProperties,r={supportsName:!1,supportsSize:!1,supportsContentType:!1,supportsKeywords:!1,supportsExifInfo:!1,supportsCacheHint:u(e.advancedQueryCapabilities,"queryAttachments"),supportsResize:i(e,"supportsAttachmentsResizing",!1)};return t&&Array.isArray(t)&&t.forEach((e=>{const t=l[e.name];t&&(r[t]=!!e.isEnabled)})),r}function m(e){return{isVersioned:i(e,"isDataVersioned",!1),supportsAttachment:i(e,"hasAttachments",!1),supportsM:i(e,"hasM",!1),supportsZ:i(e,"hasZ",!1)}}function h(e){return{supportsAdvancedFieldProperties:i(e,"supportsFieldDescriptionProperty",!1)}}function f(e,t,r){const o=e?e.toLowerCase().split(",").map((e=>e.trim())):[],n=r?(0,s.qg)(r):null,a=o.includes(null!=n&&"MapServer"===n.serverType?"data":"query"),l=o.includes("editing")&&!t.datesInUnknownTimezone;let p=l&&o.includes("create"),u=l&&o.includes("delete"),y=l&&o.includes("update");const d=o.includes("changetracking"),c=t.advancedQueryCapabilities;return l&&!(p||u||y)&&(p=u=y=!0),{supportsCalculate:i(t,"supportsCalculate",!1),supportsTruncate:i(t,"supportsTruncate",!1),supportsValidateSql:i(t,"supportsValidateSql",!1),supportsAdd:p,supportsDelete:u,supportsEditing:l,supportsChangeTracking:d,supportsQuery:a,supportsQueryAnalytics:i(c,"supportsQueryAnalytic",!1),supportsQueryAttachments:i(c,"supportsQueryAttachments",!1),supportsQueryTopFeatures:i(c,"supportsTopFeaturesQuery",!1),supportsResizeAttachments:i(t,"supportsAttachmentsResizing",!1),supportsSync:o.includes("sync"),supportsUpdate:y,supportsExceedsLimitStatistics:i(t,"supportsExceedsLimitStatistics",!1),supportsAsyncConvert3D:i(t,"supportsAsyncConvert3D",!1)}}function g(e,t){var r;const a=e.advancedQueryCapabilities,l=e.ownershipBasedAccessControlForFeatures,y=e.archivingInfo,d=e.currentVersion,c=!(null===t||void 0===t?void 0:t.includes("MapServer"))||d>=(0,o.A)("mapserver-pbf-version-support"),m=(0,s.Wo)(t),h=new Set((null!==(r=e.supportedQueryFormats)&&void 0!==r?r:"").split(",").map((e=>e.toLowerCase().trim())));return{supportsStatistics:i(a,"supportsStatistics",e.supportsStatistics),supportsPercentileStatistics:i(a,"supportsPercentileStatistics",!1),supportsSpatialAggregationStatistics:i(a,"supportsSpatialAggregationStatistics",!1),supportedSpatialAggregationStatistics:p(a),supportsCentroid:i(a,"supportsReturningGeometryCentroid",!1),supportsDistance:i(a,"supportsQueryWithDistance",!1),supportsDistinct:i(a,"supportsDistinct",e.supportsAdvancedQueries),supportsExtent:i(a,"supportsReturningQueryExtent",!1),supportsGeometryProperties:i(a,"supportsReturningGeometryProperties",!1),supportsHavingClause:i(a,"supportsHavingClause",!1),supportsOrderBy:i(a,"supportsOrderBy",e.supportsAdvancedQueries),supportsPagination:i(a,"supportsPagination",!1),supportsQuantization:i(e,"supportsCoordinatesQuantization",!1),supportsQuantizationEditMode:i(e,"supportsQuantizationEditMode",!1),supportsQueryGeometry:i(e,"supportsReturningQueryGeometry",!1),supportsResultType:i(a,"supportsQueryWithResultType",!1),supportsMaxRecordCountFactor:i(a,"supportsMaxRecordCountFactor",!1),supportsSqlExpression:i(a,"supportsSqlExpression",!1),supportsStandardizedQueriesOnly:i(e,"useStandardizedQueries",!1),supportsTopFeaturesQuery:i(a,"supportsTopFeaturesQuery",!1),supportsQueryByAnonymous:i(l,"allowAnonymousToQuery",!0),supportsQueryByOthers:i(l,"allowOthersToQuery",!0),supportsHistoricMoment:i(y,"supportsQueryWithHistoricMoment",!1),supportsFormatPBF:c&&h.has("pbf"),supportsDisjointSpatialRelationship:i(a,"supportsDisjointSpatialRel",!1),supportsCacheHint:i(a,"supportsQueryWithCacheHint",!1)||u(a,"query"),supportsDefaultSpatialReference:i(a,"supportsDefaultSR",!1),supportsCompactGeometry:m,supportsFullTextSearch:i(a,"supportsFullTextSearch",!1),maxRecordCountFactor:n(e,"maxRecordCountFactor",void 0),maxRecordCount:n(e,"maxRecordCount",void 0),standardMaxRecordCount:n(e,"standardMaxRecordCount",void 0),tileMaxRecordCount:n(e,"tileMaxRecordCount",void 0)}}function v(e){const t=e.advancedQueryCapabilities,r=i(t,"supportsAdvancedQueryRelated",!1);return{supportsPagination:i(t,"supportsQueryRelatedPagination",!1),supportsCount:r,supportsOrderBy:r,supportsCacheHint:u(t,"queryRelated")}}function S(e){return{supportsCacheHint:u(e.advancedQueryCapabilities,"queryTopFilter")}}function b(e){const t=e.ownershipBasedAccessControlForFeatures,r=e?e.advancedEditingCapabilities:void 0;return{supportsGeometryUpdate:i(e,"allowGeometryUpdates",!0),supportsGlobalId:i(e,"supportsApplyEditsWithGlobalIds",!1),supportsReturnServiceEditsInSourceSpatialReference:i(e,"supportsReturnServiceEditsInSourceSR",!1),supportsRollbackOnFailure:i(e,"supportsRollbackOnFailureParameter",!1),supportsUpdateWithoutM:i(e,"allowUpdateWithoutMValues",!1),supportsUploadWithItemId:i(e,"supportsAttachmentsByUploadId",!1),supportsDeleteByAnonymous:i(t,"allowAnonymousToDelete",!0),supportsDeleteByOthers:i(t,"allowOthersToDelete",!0),supportsUpdateByAnonymous:i(t,"allowAnonymousToUpdate",!0),supportsUpdateByOthers:i(t,"allowOthersToUpdate",!0),supportsAsyncApplyEdits:i(r,"supportsAsyncApplyEdits",!1),zDefault:n(e,"zDefault",void 0)}}},57831:(e,t,r)=>{r.d(t,{q:()=>s});var o=r(86729);function s(e,t,r){if(null===r||void 0===r||!r.features||!r.hasZ)return;const s=(0,o.N)(r.geometryType,t,e.outSpatialReference);if(null!=s)for(const o of r.features)s(o.geometry)}}}]);
//# sourceMappingURL=5304.d25282c4.chunk.js.map