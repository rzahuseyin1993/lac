"use strict";(self.webpackChunklac=self.webpackChunklac||[]).push([[1960],{12406:(t,e,s)=>{s.d(e,{p:()=>i});var r=s(35143),o=s(46053),p=(s(81806),s(76460),s(47249),s(85842));const i=t=>{let e=class extends t{get apiKey(){var t;return this._isOverridden("apiKey")?this._get("apiKey"):function(t){return"portalItem"in t}(this)?null===(t=this.portalItem)||void 0===t?void 0:t.apiKey:null}set apiKey(t){null!=t?this._override("apiKey",t):(this._clearOverride("apiKey"),this.clear("apiKey","user"))}};return(0,r._)([(0,o.MZ)({type:String})],e.prototype,"apiKey",null),e=(0,r._)([(0,p.$)("esri.layers.mixins.APIKeyMixin")],e),e}},19502:(t,e,s)=>{s.d(e,{b:()=>u});var r=s(35143),o=s(76460),p=s(46053),i=(s(81806),s(47249),s(85842)),n=s(13096);const u=t=>{let e=class extends t{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const t=(0,n.qg)(this.url);if(null!=t&&t.title)return t.title}return this._get("title")||""}set title(t){this._set("title",t)}set url(t){this._set("url",(0,n.Jf)(t,o.A.getLogger(this)))}};return(0,r._)([(0,p.MZ)()],e.prototype,"title",null),(0,r._)([(0,p.MZ)({type:String})],e.prototype,"url",null),e=(0,r._)([(0,i.$)("esri.layers.mixins.ArcGISService")],e),e}},91485:(t,e,s)=>{s.d(e,{A:()=>y});var r=s(35143),o=s(69098),p=s(42553),i=s(46053),n=(s(81806),s(76460),s(47249),s(28379)),u=s(85842),a=s(17707),l=s(90907),d=s(15427);let c=class extends((0,o.O)(p.oY)){constructor(t){super(t),this.id=null,this.name=null,this.domains=null,this.templates=null}readDomains(t){const e={};for(const s of Object.keys(t))e[s]=(0,l.rS)(t[s]);return e}writeDomains(t,e){const s={};for(const o of Object.keys(t)){var r;t[o]&&(s[o]=null===(r=t[o])||void 0===r?void 0:r.toJSON())}e.domains=s}};(0,r._)([(0,i.MZ)({json:{write:!0}})],c.prototype,"id",void 0),(0,r._)([(0,i.MZ)({json:{write:!0}})],c.prototype,"name",void 0),(0,r._)([(0,i.MZ)({json:{write:!0}})],c.prototype,"domains",void 0),(0,r._)([(0,n.w)("domains")],c.prototype,"readDomains",null),(0,r._)([(0,a.K)("domains")],c.prototype,"writeDomains",null),(0,r._)([(0,i.MZ)({type:[d.A],json:{write:!0}})],c.prototype,"templates",void 0),c=(0,r._)([(0,u.$)("esri.layers.support.FeatureType")],c);const y=c},5618:(t,e,s)=>{s.d(e,{A:()=>l});var r,o=s(35143),p=s(94643),i=s(42553),n=s(46053),u=(s(81806),s(76460),s(47249),s(85842));let a=r=class extends i.oY{constructor(t){super(t),this.floorField=null,this.viewAllMode=!1,this.viewAllLevelIds=new p.A}clone(){return new r({floorField:this.floorField,viewAllMode:this.viewAllMode,viewAllLevelIds:this.viewAllLevelIds})}};(0,o._)([(0,n.MZ)({type:String,json:{write:!0}})],a.prototype,"floorField",void 0),(0,o._)([(0,n.MZ)({json:{read:!1,write:!1}})],a.prototype,"viewAllMode",void 0),(0,o._)([(0,n.MZ)({json:{read:!1,write:!1}})],a.prototype,"viewAllLevelIds",void 0),a=r=(0,o._)([(0,u.$)("esri.layers.support.LayerFloorInfo")],a);const l=a},44141:(t,e,s)=>{s.d(e,{S:()=>d});var r=s(81806),o=s(13096);function p(t,e,s){return!!n(t,e,s)}function i(t,e,s){return n(t,e,s)}function n(t,e,s){return t&&t.hasOwnProperty(e)?t[e]:s}const u={name:"supportsName",size:"supportsSize",contentType:"supportsContentType",keywords:"supportsKeywords",exifInfo:"supportsExifInfo"};function a(t){var e;const s=null===t||void 0===t||null===(e=t.supportedSpatialAggregationStatistics)||void 0===e?void 0:e.map((t=>t.toLowerCase()));return{envelope:!(null===s||void 0===s||!s.includes("envelopeaggregate")),centroid:!(null===s||void 0===s||!s.includes("centroidaggregate")),convexHull:!(null===s||void 0===s||!s.includes("convexhullaggregate"))}}function l(t,e){var s;const r=null===t||void 0===t||null===(s=t.supportedOperationsWithCacheHint)||void 0===s?void 0:s.map((t=>t.toLowerCase()));return!(null===r||void 0===r||!r.includes(e.toLowerCase()))}function d(t,e){return{analytics:c(t),attachment:y(t),data:v(t),metadata:h(t),operations:m(t.capabilities,t,e),query:g(t,e),queryRelated:A(t),queryTopFeatures:f(t),editing:C(t)}}function c(t){return{supportsCacheHint:l(t.advancedQueryCapabilities,"queryAnalytics")}}function y(t){const e=t.attachmentProperties,s={supportsName:!1,supportsSize:!1,supportsContentType:!1,supportsKeywords:!1,supportsExifInfo:!1,supportsCacheHint:l(t.advancedQueryCapabilities,"queryAttachments"),supportsResize:p(t,"supportsAttachmentsResizing",!1)};return e&&Array.isArray(e)&&e.forEach((t=>{const e=u[t.name];e&&(s[e]=!!t.isEnabled)})),s}function v(t){return{isVersioned:p(t,"isDataVersioned",!1),supportsAttachment:p(t,"hasAttachments",!1),supportsM:p(t,"hasM",!1),supportsZ:p(t,"hasZ",!1)}}function h(t){return{supportsAdvancedFieldProperties:p(t,"supportsFieldDescriptionProperty",!1)}}function m(t,e,s){const r=t?t.toLowerCase().split(",").map((t=>t.trim())):[],i=s?(0,o.qg)(s):null,n=r.includes(null!=i&&"MapServer"===i.serverType?"data":"query"),u=r.includes("editing")&&!e.datesInUnknownTimezone;let a=u&&r.includes("create"),l=u&&r.includes("delete"),d=u&&r.includes("update");const c=r.includes("changetracking"),y=e.advancedQueryCapabilities;return u&&!(a||l||d)&&(a=l=d=!0),{supportsCalculate:p(e,"supportsCalculate",!1),supportsTruncate:p(e,"supportsTruncate",!1),supportsValidateSql:p(e,"supportsValidateSql",!1),supportsAdd:a,supportsDelete:l,supportsEditing:u,supportsChangeTracking:c,supportsQuery:n,supportsQueryAnalytics:p(y,"supportsQueryAnalytic",!1),supportsQueryAttachments:p(y,"supportsQueryAttachments",!1),supportsQueryTopFeatures:p(y,"supportsTopFeaturesQuery",!1),supportsResizeAttachments:p(e,"supportsAttachmentsResizing",!1),supportsSync:r.includes("sync"),supportsUpdate:d,supportsExceedsLimitStatistics:p(e,"supportsExceedsLimitStatistics",!1),supportsAsyncConvert3D:p(e,"supportsAsyncConvert3D",!1)}}function g(t,e){var s;const n=t.advancedQueryCapabilities,u=t.ownershipBasedAccessControlForFeatures,d=t.archivingInfo,c=t.currentVersion,y=!(null===e||void 0===e?void 0:e.includes("MapServer"))||c>=(0,r.A)("mapserver-pbf-version-support"),v=(0,o.Wo)(e),h=new Set((null!==(s=t.supportedQueryFormats)&&void 0!==s?s:"").split(",").map((t=>t.toLowerCase().trim())));return{supportsStatistics:p(n,"supportsStatistics",t.supportsStatistics),supportsPercentileStatistics:p(n,"supportsPercentileStatistics",!1),supportsSpatialAggregationStatistics:p(n,"supportsSpatialAggregationStatistics",!1),supportedSpatialAggregationStatistics:a(n),supportsCentroid:p(n,"supportsReturningGeometryCentroid",!1),supportsDistance:p(n,"supportsQueryWithDistance",!1),supportsDistinct:p(n,"supportsDistinct",t.supportsAdvancedQueries),supportsExtent:p(n,"supportsReturningQueryExtent",!1),supportsGeometryProperties:p(n,"supportsReturningGeometryProperties",!1),supportsHavingClause:p(n,"supportsHavingClause",!1),supportsOrderBy:p(n,"supportsOrderBy",t.supportsAdvancedQueries),supportsPagination:p(n,"supportsPagination",!1),supportsQuantization:p(t,"supportsCoordinatesQuantization",!1),supportsQuantizationEditMode:p(t,"supportsQuantizationEditMode",!1),supportsQueryGeometry:p(t,"supportsReturningQueryGeometry",!1),supportsResultType:p(n,"supportsQueryWithResultType",!1),supportsMaxRecordCountFactor:p(n,"supportsMaxRecordCountFactor",!1),supportsSqlExpression:p(n,"supportsSqlExpression",!1),supportsStandardizedQueriesOnly:p(t,"useStandardizedQueries",!1),supportsTopFeaturesQuery:p(n,"supportsTopFeaturesQuery",!1),supportsQueryByAnonymous:p(u,"allowAnonymousToQuery",!0),supportsQueryByOthers:p(u,"allowOthersToQuery",!0),supportsHistoricMoment:p(d,"supportsQueryWithHistoricMoment",!1),supportsFormatPBF:y&&h.has("pbf"),supportsDisjointSpatialRelationship:p(n,"supportsDisjointSpatialRel",!1),supportsCacheHint:p(n,"supportsQueryWithCacheHint",!1)||l(n,"query"),supportsDefaultSpatialReference:p(n,"supportsDefaultSR",!1),supportsCompactGeometry:v,supportsFullTextSearch:p(n,"supportsFullTextSearch",!1),maxRecordCountFactor:i(t,"maxRecordCountFactor",void 0),maxRecordCount:i(t,"maxRecordCount",void 0),standardMaxRecordCount:i(t,"standardMaxRecordCount",void 0),tileMaxRecordCount:i(t,"tileMaxRecordCount",void 0)}}function A(t){const e=t.advancedQueryCapabilities,s=p(e,"supportsAdvancedQueryRelated",!1);return{supportsPagination:p(e,"supportsQueryRelatedPagination",!1),supportsCount:s,supportsOrderBy:s,supportsCacheHint:l(e,"queryRelated")}}function f(t){return{supportsCacheHint:l(t.advancedQueryCapabilities,"queryTopFilter")}}function C(t){const e=t.ownershipBasedAccessControlForFeatures,s=t?t.advancedEditingCapabilities:void 0;return{supportsGeometryUpdate:p(t,"allowGeometryUpdates",!0),supportsGlobalId:p(t,"supportsApplyEditsWithGlobalIds",!1),supportsReturnServiceEditsInSourceSpatialReference:p(t,"supportsReturnServiceEditsInSourceSR",!1),supportsRollbackOnFailure:p(t,"supportsRollbackOnFailureParameter",!1),supportsUpdateWithoutM:p(t,"allowUpdateWithoutMValues",!1),supportsUploadWithItemId:p(t,"supportsAttachmentsByUploadId",!1),supportsDeleteByAnonymous:p(e,"allowAnonymousToDelete",!0),supportsDeleteByOthers:p(e,"allowOthersToDelete",!0),supportsUpdateByAnonymous:p(e,"allowAnonymousToUpdate",!0),supportsUpdateByOthers:p(e,"allowOthersToUpdate",!0),supportsAsyncApplyEdits:p(s,"supportsAsyncApplyEdits",!1),zDefault:i(t,"zDefault",void 0)}}}}]);
//# sourceMappingURL=1960.5523b44c.chunk.js.map