"use strict";(self.webpackChunklac=self.webpackChunklac||[]).push([[109,6064],{84397:(e,t,r)=>{r.r(t),r.d(t,{default:()=>te});var s=r(35143),o=r(3825),i=r(69098),a=r(94643),n=r(50076),p=r(77717),l=r(50346),u=r(90534),d=r(46053),c=(r(81806),r(76460)),y=(r(47249),r(85842)),h=r(25515),f=r(54901),v=r(53521),m=r(87663),g=r(65624),_=r(5682),A=r(55053),w=r(62487),S=r(51162),I=r(65308),M=r(70652),b=r(72003);class C{constructor(e,t){this.objectId=e,this.itemSource=t,this.count=0,this.layer=null,this.sortValue=void 0}}const F=new v.q(20,(e=>e.destroy()));let R=class extends((0,_.j)((0,g.d)((0,p.P)(h.A)))){constructor(e){super(e),this._oidToReference=new Map,this._layerToReference=new Map,this._portals=new Map,this.layers=new a.A,this.maximumVisibleSublayers=10,this.opacity=1,this.title="Layers In View",this.type="catalog-dynamic-group",this.visible=!0}load(e){return this.addResolvingPromise(this.parent.load()),Promise.resolve(this)}get _orderBy(){var e,t;return null!==(e=null===(t=this.parent.orderBy)||void 0===t?void 0:t.find((e=>!e.valueExpression&&e.field)))&&void 0!==e?e:new S.A({field:this.parent.objectIdField})}get _referenceComparator(){const e=this._orderBy,t=this.parent.fieldsIndex.get(e.field),r=(0,b.FM)(null===t||void 0===t?void 0:t.toJSON().type,"descending"===e.order);return(e,t)=>r(e.sortValue,t.sortValue)||e.objectId-e.objectId}acquireLayer(e){const t=e.getObjectId(),r=(0,m.tE)(this._oidToReference,t,(()=>this._createLayerReference(e)));return r.count++,(0,f.hA)((()=>{r.count--,r.count||this._disposeLayerReference(r)}))}_createLayerReference(e){const t=e.getObjectId(),r=e.getAttribute(this.parent.itemSourceField),s=new C(t,r);if(F.get(r))return this._addLayer(F.pop(r),s,e),s;let o;try{o=JSON.parse(r)}catch(i){return c.A.getLogger(this).error(i),s}return this._createLayer(o).then((t=>{this.destroyed||0===s.count?(F.get(r)||F.put(s.itemSource,t),s.layer=null):this._addLayer(t,s,e)})).catch((()=>{})),s}_addLayer(e,t,r){this._layerToReference.set(e,t),t.sortValue=r.getAttribute(this._orderBy.field),t.layer=e,e.parent=this,this.layers.add(e),this.layers.sort(((e,t)=>this._referenceComparator(this._layerToReference.get(e),this._layerToReference.get(t))))}_disposeLayerReference(e){e.layer&&(this._layerToReference.delete(e.layer),this.layers.remove(e.layer),F.put(e.itemSource,e.layer)),this._oidToReference.delete(e.objectId)}async _createLayer(e){if(!function(e){return"object"==typeof e&&null!=e&&"itemId"in e&&"portalUrl"in e}(e))return new(await w.S.UnsupportedLayer());const{itemId:t,portalUrl:r}=e,s=(0,m.tE)(this._portals,r,(()=>new I.A({url:r})));return h.A.fromPortalItem(new M.default({id:t,portal:s}))}};(0,s._)([(0,d.MZ)()],R.prototype,"_orderBy",null),(0,s._)([(0,d.MZ)()],R.prototype,"_referenceComparator",null),(0,s._)([(0,d.MZ)({readOnly:!0})],R.prototype,"layers",void 0),(0,s._)([(0,d.MZ)()],R.prototype,"maximumVisibleSublayers",void 0),(0,s._)([(0,d.MZ)(A.ke)],R.prototype,"opacity",void 0),(0,s._)([(0,d.MZ)({type:String,json:{name:"title",write:!0}})],R.prototype,"title",void 0),(0,s._)([(0,d.MZ)({json:{read:!1}})],R.prototype,"type",void 0),(0,s._)([(0,d.MZ)({type:Boolean,json:{name:"visibility",write:!0}})],R.prototype,"visible",void 0),R=(0,s._)([(0,y.$)("esri.layers.catalog.CatalogDynamicGroupLayer")],R);const x=R;var T=r(16868),Q=(r(63844),r(14873),r(47662),r(72690),r(86946),r(71832),r(5766),r(35039),r(86616),r(31382)),L=r(74440),Z=r(71401),j=r(27937),P=r(30973);let E=class extends((0,_.j)((0,L.F)((0,g.d)((0,p.P)(h.A))))){constructor(e){super(e),this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.opacity=1,this.popupEnabled=!0,this.popupTemplate=null,this.renderer=null,this.type="catalog-footprint",this.visible=!0}load(e){return this.addResolvingPromise(this.parent.load()),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}get fields(){return this.parent.fields}get fieldsIndex(){return this.parent.fieldsIndex}get geometryType(){return this.parent.geometryType}get objectIdField(){return this.parent.objectIdField}get orderBy(){return this.parent.orderBy}createPopupTemplate(e){const t={fields:this.parent.fields,objectIdField:this.parent.objectIdField,title:this.title};return(0,P.tn)(t,e)}createQuery(){return this.parent.createQuery()}queryFeatures(e,t){return this.parent.queryFeatures(e,t)}};(0,s._)([(0,d.MZ)({readOnly:!0})],E.prototype,"defaultPopupTemplate",null),(0,s._)([(0,d.MZ)({type:[Z.A],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:j.w,write:!0}})],E.prototype,"labelingInfo",void 0),(0,s._)([(0,d.MZ)(A.kF)],E.prototype,"labelsVisible",void 0),(0,s._)([(0,d.MZ)(A.fV)],E.prototype,"legendEnabled",void 0),(0,s._)([(0,d.MZ)(A.ke)],E.prototype,"opacity",void 0),(0,s._)([(0,d.MZ)(A.M6)],E.prototype,"popupEnabled",void 0),(0,s._)([(0,d.MZ)({type:T.A,json:{name:"popupInfo",write:!0}})],E.prototype,"popupTemplate",void 0),(0,s._)([(0,d.MZ)({types:Q.H,json:{name:"layerDefinition.drawingInfo.renderer"}})],E.prototype,"renderer",void 0),(0,s._)([(0,d.MZ)({json:{read:!1}})],E.prototype,"type",void 0),(0,s._)([(0,d.MZ)({type:Boolean,json:{name:"visibility",write:!0}})],E.prototype,"visible",void 0),E=(0,s._)([(0,y.$)("esri.layers.catalog.CatalogFootprintLayer")],E);const O=E;var q=r(89078),D=r(40296),B=r(12406),V=r(19502),G=r(31362),z=r(60693),U=r(11270),k=r(37534),H=r(94729),K=r(21617),W=r(78817),N=r(46326),J=r(76350),$=r(38278),Y=r(97015);const X=(0,J.p)();let ee=class extends((0,z.j)((0,g.d)((0,k.f)((0,W.e)((0,_.j)((0,K.J)((0,V.b)((0,U.q)((0,H.A)((0,p.P)((0,G.d)((0,B.p)((0,i.O)(h.A)))))))))))))){constructor(e){super(e),this.dynamicGroupLayer=new x({parent:this}),this.fields=null,this.fieldsIndex=null,this.footprintLayer=new O({parent:this}),this.itemSourceField="cd_itemsource",this.itemTypeField="cd_itemtype",this.layers=new a.A([this.dynamicGroupLayer,this.footprintLayer]),this.source=new q.default({layer:this}),this.type="catalog"}load(e){const t=null!=e?e.signal:null,r=this.loadFromPortal({supportedTypes:["Feature Service"]},e).catch(l.QP).then((async()=>{var e;if(!this.url)throw new n.A("catalog-layer:missing-url","Catalog layer must be created with a url");if(this.url&&null==this.layerId){const e=await this._fetchFirstValidLayerId(t);if(null==e)throw new n.A("catalog-layer:missing-layerId","There is no Catalog Layer in the service",{service:this.url});this.layerId=e}await this.source.load(),this.source.sourceJSON&&(this.sourceJSON=this.source.sourceJSON,this.read(this.source.sourceJSON,{origin:"service",portalItem:this.portalItem,portal:null===(e=this.portalItem)||void 0===e?void 0:e.portal,url:this.parsedUrl}))})).then((()=>(0,N.VA)(this,"load",e)));return this.addResolvingPromise(r),Promise.resolve(this)}get createQueryVersion(){var e;return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(null!==(e=this._get("createQueryVersion"))&&void 0!==e?e:0)+1}get parsedUrl(){const e=(0,u.An)(this.url);return null!=e&&null!=this.layerId&&(e.path=(0,u.fj)(e.path,this.layerId.toString())),e}createQuery(){var e;const t=new Y.A,r=null===(e=this.capabilities)||void 0===e?void 0:e.query;t.returnGeometry=!0,r&&(t.compactGeometryEnabled=r.supportsCompactGeometry,t.defaultSpatialReferenceEnabled=r.supportsDefaultSpatialReference),t.outFields=["*"];const{timeOffset:s,timeExtent:o}=this;return t.timeExtent=null!=s&&null!=o?o.offset(-s.value,s.unit):o||null,t}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){var r;return null===(r=this.fieldsIndex.get(e))||void 0===r?void 0:r.domain}async queryFeatures(e,t){var r;const s=await this.load(),o=await s.source.queryFeatures(null!==(r=Y.A.from(e))&&void 0!==r?r:s.createQuery(),t);if(null!==o&&void 0!==o&&o.features)for(const i of o.features)i.layer=i.sourceLayer=s.footprintLayer;return o}async queryObjectIds(e,t){var r;return(await this.load()).source.queryObjectIds(null!==(r=Y.A.from(e))&&void 0!==r?r:this.createQuery(),t)}async queryFeatureCount(e,t){var r;return(await this.load()).source.queryFeatureCount(null!==(r=Y.A.from(e))&&void 0!==r?r:this.createQuery(),t)}async queryExtent(e,t){var r;return(await this.load()).source.queryExtent(null!==(r=Y.A.from(e))&&void 0!==r?r:this.createQuery(),t)}serviceSupportsSpatialReference(e){return this.loaded&&(0,$.D)(this,e)}read(e,t){super.read(e,t);let r=e.footprintLayer;r||"service"!==(null===t||void 0===t?void 0:t.origin)||(r={layerDefinition:{drawingInfo:(0,D.F0)(e.geometryType)}}),this.footprintLayer.read(r,t)}_fetchFirstValidLayerId(e){return(0,o.A)(this.url,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e}).then((e=>{var t;const r=e.data;if(r)return Array.isArray(r.layers)?null===(t=r.layers.find((e=>"Catalog Layer"===e.type)))||void 0===t?void 0:t.id:void 0}))}};(0,s._)([(0,d.MZ)({readOnly:!0})],ee.prototype,"createQueryVersion",null),(0,s._)([(0,d.MZ)({...X.fields,json:{origins:{service:{name:"fields"}}}})],ee.prototype,"fields",void 0),(0,s._)([(0,d.MZ)(X.fieldsIndex)],ee.prototype,"fieldsIndex",void 0),(0,s._)([(0,d.MZ)({json:{read:!1,write:!1}})],ee.prototype,"footprintLayer",void 0),(0,s._)([(0,d.MZ)()],ee.prototype,"itemSourceField",void 0),(0,s._)([(0,d.MZ)()],ee.prototype,"itemTypeField",void 0),(0,s._)([(0,d.MZ)()],ee.prototype,"layers",void 0),(0,s._)([(0,d.MZ)({value:"CatalogLayer",type:["CatalogLayer"]})],ee.prototype,"operationalLayerType",void 0),(0,s._)([(0,d.MZ)()],ee.prototype,"outFields",void 0),(0,s._)([(0,d.MZ)({readOnly:!0})],ee.prototype,"parsedUrl",null),(0,s._)([(0,d.MZ)()],ee.prototype,"source",void 0),(0,s._)([(0,d.MZ)({json:{read:!1}})],ee.prototype,"type",void 0),ee=(0,s._)([(0,y.$)("esri.layers.CatalogLayer")],ee);const te=ee},12406:(e,t,r)=>{r.d(t,{p:()=>a});var s=r(35143),o=r(46053),i=(r(81806),r(76460),r(47249),r(85842));const a=e=>{let t=class extends e{get apiKey(){var e;return this._isOverridden("apiKey")?this._get("apiKey"):function(e){return"portalItem"in e}(this)?null===(e=this.portalItem)||void 0===e?void 0:e.apiKey:null}set apiKey(e){null!=e?this._override("apiKey",e):(this._clearOverride("apiKey"),this.clear("apiKey","user"))}};return(0,s._)([(0,o.MZ)({type:String})],t.prototype,"apiKey",null),t=(0,s._)([(0,i.$)("esri.layers.mixins.APIKeyMixin")],t),t}},19502:(e,t,r)=>{r.d(t,{b:()=>p});var s=r(35143),o=r(76460),i=r(46053),a=(r(81806),r(47249),r(85842)),n=r(13096);const p=e=>{let t=class extends e{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const e=(0,n.qg)(this.url);if(null!=e&&e.title)return e.title}return this._get("title")||""}set title(e){this._set("title",e)}set url(e){this._set("url",(0,n.Jf)(e,o.A.getLogger(this)))}};return(0,s._)([(0,i.MZ)()],t.prototype,"title",null),(0,s._)([(0,i.MZ)({type:String})],t.prototype,"url",null),t=(0,s._)([(0,a.$)("esri.layers.mixins.ArcGISService")],t),t}},5618:(e,t,r)=>{r.d(t,{A:()=>u});var s,o=r(35143),i=r(94643),a=r(42553),n=r(46053),p=(r(81806),r(76460),r(47249),r(85842));let l=s=class extends a.oY{constructor(e){super(e),this.floorField=null,this.viewAllMode=!1,this.viewAllLevelIds=new i.A}clone(){return new s({floorField:this.floorField,viewAllMode:this.viewAllMode,viewAllLevelIds:this.viewAllLevelIds})}};(0,o._)([(0,n.MZ)({type:String,json:{write:!0}})],l.prototype,"floorField",void 0),(0,o._)([(0,n.MZ)({json:{read:!1,write:!1}})],l.prototype,"viewAllMode",void 0),(0,o._)([(0,n.MZ)({json:{read:!1,write:!1}})],l.prototype,"viewAllLevelIds",void 0),l=s=(0,o._)([(0,p.$)("esri.layers.support.LayerFloorInfo")],l);const u=l},44141:(e,t,r)=>{r.d(t,{S:()=>d});var s=r(81806),o=r(13096);function i(e,t,r){return!!n(e,t,r)}function a(e,t,r){return n(e,t,r)}function n(e,t,r){return e&&e.hasOwnProperty(t)?e[t]:r}const p={name:"supportsName",size:"supportsSize",contentType:"supportsContentType",keywords:"supportsKeywords",exifInfo:"supportsExifInfo"};function l(e){var t;const r=null===e||void 0===e||null===(t=e.supportedSpatialAggregationStatistics)||void 0===t?void 0:t.map((e=>e.toLowerCase()));return{envelope:!(null===r||void 0===r||!r.includes("envelopeaggregate")),centroid:!(null===r||void 0===r||!r.includes("centroidaggregate")),convexHull:!(null===r||void 0===r||!r.includes("convexhullaggregate"))}}function u(e,t){var r;const s=null===e||void 0===e||null===(r=e.supportedOperationsWithCacheHint)||void 0===r?void 0:r.map((e=>e.toLowerCase()));return!(null===s||void 0===s||!s.includes(t.toLowerCase()))}function d(e,t){return{analytics:c(e),attachment:y(e),data:h(e),metadata:f(e),operations:v(e.capabilities,e,t),query:m(e,t),queryRelated:g(e),queryTopFeatures:_(e),editing:A(e)}}function c(e){return{supportsCacheHint:u(e.advancedQueryCapabilities,"queryAnalytics")}}function y(e){const t=e.attachmentProperties,r={supportsName:!1,supportsSize:!1,supportsContentType:!1,supportsKeywords:!1,supportsExifInfo:!1,supportsCacheHint:u(e.advancedQueryCapabilities,"queryAttachments"),supportsResize:i(e,"supportsAttachmentsResizing",!1)};return t&&Array.isArray(t)&&t.forEach((e=>{const t=p[e.name];t&&(r[t]=!!e.isEnabled)})),r}function h(e){return{isVersioned:i(e,"isDataVersioned",!1),supportsAttachment:i(e,"hasAttachments",!1),supportsM:i(e,"hasM",!1),supportsZ:i(e,"hasZ",!1)}}function f(e){return{supportsAdvancedFieldProperties:i(e,"supportsFieldDescriptionProperty",!1)}}function v(e,t,r){const s=e?e.toLowerCase().split(",").map((e=>e.trim())):[],a=r?(0,o.qg)(r):null,n=s.includes(null!=a&&"MapServer"===a.serverType?"data":"query"),p=s.includes("editing")&&!t.datesInUnknownTimezone;let l=p&&s.includes("create"),u=p&&s.includes("delete"),d=p&&s.includes("update");const c=s.includes("changetracking"),y=t.advancedQueryCapabilities;return p&&!(l||u||d)&&(l=u=d=!0),{supportsCalculate:i(t,"supportsCalculate",!1),supportsTruncate:i(t,"supportsTruncate",!1),supportsValidateSql:i(t,"supportsValidateSql",!1),supportsAdd:l,supportsDelete:u,supportsEditing:p,supportsChangeTracking:c,supportsQuery:n,supportsQueryAnalytics:i(y,"supportsQueryAnalytic",!1),supportsQueryAttachments:i(y,"supportsQueryAttachments",!1),supportsQueryTopFeatures:i(y,"supportsTopFeaturesQuery",!1),supportsResizeAttachments:i(t,"supportsAttachmentsResizing",!1),supportsSync:s.includes("sync"),supportsUpdate:d,supportsExceedsLimitStatistics:i(t,"supportsExceedsLimitStatistics",!1),supportsAsyncConvert3D:i(t,"supportsAsyncConvert3D",!1)}}function m(e,t){var r;const n=e.advancedQueryCapabilities,p=e.ownershipBasedAccessControlForFeatures,d=e.archivingInfo,c=e.currentVersion,y=!(null===t||void 0===t?void 0:t.includes("MapServer"))||c>=(0,s.A)("mapserver-pbf-version-support"),h=(0,o.Wo)(t),f=new Set((null!==(r=e.supportedQueryFormats)&&void 0!==r?r:"").split(",").map((e=>e.toLowerCase().trim())));return{supportsStatistics:i(n,"supportsStatistics",e.supportsStatistics),supportsPercentileStatistics:i(n,"supportsPercentileStatistics",!1),supportsSpatialAggregationStatistics:i(n,"supportsSpatialAggregationStatistics",!1),supportedSpatialAggregationStatistics:l(n),supportsCentroid:i(n,"supportsReturningGeometryCentroid",!1),supportsDistance:i(n,"supportsQueryWithDistance",!1),supportsDistinct:i(n,"supportsDistinct",e.supportsAdvancedQueries),supportsExtent:i(n,"supportsReturningQueryExtent",!1),supportsGeometryProperties:i(n,"supportsReturningGeometryProperties",!1),supportsHavingClause:i(n,"supportsHavingClause",!1),supportsOrderBy:i(n,"supportsOrderBy",e.supportsAdvancedQueries),supportsPagination:i(n,"supportsPagination",!1),supportsQuantization:i(e,"supportsCoordinatesQuantization",!1),supportsQuantizationEditMode:i(e,"supportsQuantizationEditMode",!1),supportsQueryGeometry:i(e,"supportsReturningQueryGeometry",!1),supportsResultType:i(n,"supportsQueryWithResultType",!1),supportsMaxRecordCountFactor:i(n,"supportsMaxRecordCountFactor",!1),supportsSqlExpression:i(n,"supportsSqlExpression",!1),supportsStandardizedQueriesOnly:i(e,"useStandardizedQueries",!1),supportsTopFeaturesQuery:i(n,"supportsTopFeaturesQuery",!1),supportsQueryByAnonymous:i(p,"allowAnonymousToQuery",!0),supportsQueryByOthers:i(p,"allowOthersToQuery",!0),supportsHistoricMoment:i(d,"supportsQueryWithHistoricMoment",!1),supportsFormatPBF:y&&f.has("pbf"),supportsDisjointSpatialRelationship:i(n,"supportsDisjointSpatialRel",!1),supportsCacheHint:i(n,"supportsQueryWithCacheHint",!1)||u(n,"query"),supportsDefaultSpatialReference:i(n,"supportsDefaultSR",!1),supportsCompactGeometry:h,supportsFullTextSearch:i(n,"supportsFullTextSearch",!1),maxRecordCountFactor:a(e,"maxRecordCountFactor",void 0),maxRecordCount:a(e,"maxRecordCount",void 0),standardMaxRecordCount:a(e,"standardMaxRecordCount",void 0),tileMaxRecordCount:a(e,"tileMaxRecordCount",void 0)}}function g(e){const t=e.advancedQueryCapabilities,r=i(t,"supportsAdvancedQueryRelated",!1);return{supportsPagination:i(t,"supportsQueryRelatedPagination",!1),supportsCount:r,supportsOrderBy:r,supportsCacheHint:u(t,"queryRelated")}}function _(e){return{supportsCacheHint:u(e.advancedQueryCapabilities,"queryTopFilter")}}function A(e){const t=e.ownershipBasedAccessControlForFeatures,r=e?e.advancedEditingCapabilities:void 0;return{supportsGeometryUpdate:i(e,"allowGeometryUpdates",!0),supportsGlobalId:i(e,"supportsApplyEditsWithGlobalIds",!1),supportsReturnServiceEditsInSourceSpatialReference:i(e,"supportsReturnServiceEditsInSourceSR",!1),supportsRollbackOnFailure:i(e,"supportsRollbackOnFailureParameter",!1),supportsUpdateWithoutM:i(e,"allowUpdateWithoutMValues",!1),supportsUploadWithItemId:i(e,"supportsAttachmentsByUploadId",!1),supportsDeleteByAnonymous:i(t,"allowAnonymousToDelete",!0),supportsDeleteByOthers:i(t,"allowOthersToDelete",!0),supportsUpdateByAnonymous:i(t,"allowAnonymousToUpdate",!0),supportsUpdateByOthers:i(t,"allowOthersToUpdate",!0),supportsAsyncApplyEdits:i(r,"supportsAsyncApplyEdits",!1),zDefault:a(e,"zDefault",void 0)}}},10290:(e,t,r)=>{r.d(t,{u:()=>a});var s=r(31633),o=r(80963);function i(e,t,r){if(null==e.hasM||e.hasZ)for(const s of t)for(const e of s)e.length>2&&(e[2]*=r)}function a(e,t,r){if(!e&&!t||!r)return;const o=(0,s.G9)(r);n(e,r,o),n(t,r,o)}function n(e,t,r){if(e)for(const s of e)p(s.geometry,t,r)}function p(e,t,r){if(null===e||void 0===e||!e.spatialReference||(0,o.aI)(e.spatialReference,t))return;const a=(0,s.G9)(e.spatialReference)/r;if(1!==a)if("x"in e)null!=e.z&&(e.z*=a);else if("rings"in e)i(e,e.rings,a);else if("paths"in e)i(e,e.paths,a);else if("points"in e&&(null==e.hasM||e.hasZ))for(const s of e.points)s.length>2&&(s[2]*=a)}},57831:(e,t,r)=>{r.d(t,{q:()=>o});var s=r(86729);function o(e,t,r){if(null===r||void 0===r||!r.features||!r.hasZ)return;const o=(0,s.N)(r.geometryType,t,e.outSpatialReference);if(null!=o)for(const s of r.features)o(s.geometry)}}}]);
//# sourceMappingURL=109.665e530a.chunk.js.map