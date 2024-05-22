"use strict";(self.webpackChunklac=self.webpackChunklac||[]).push([[8451],{38451:(e,t,i)=>{i.r(t),i.d(t,{default:()=>De});var r=i(35143),o=i(16868),s=(i(63844),i(14873),i(47662),i(72690),i(86946),i(71832),i(5766),i(35039),i(86616)),n=i(31382),a=i(3825),l=i(95444),u=i(69098),d=i(94643),p=i(50076),c=i(53084),y=i(76460),h=i(77717),f=i(48611),m=i(50346),v=i(34154),g=i(90534),b=i(46053),w=i(21403),_=i(28379),S=i(85842),F=i(17707),M=i(80979),T=i(51228),I=i(13312),E=i(25515),j=(i(35238),i(39356)),Z=i(81806),A=i(49304),R=i(91291),O=i(16783),C=i(40565),D=(i(47249),i(29101)),q=i(10290),x=i(57831),P=i(77725),L=i(76797),G=i(65215),N=i(31608);let J=0,k=class extends(A.A.LoadableMixin((0,R.g)(d.A))){constructor(e){super(e),this._idToClientGraphic=null,this.type="memory"}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){var e;null!==(e=this._connection)&&void 0!==e&&e.close(),this._connection=null}get _workerGeometryType(){var e;const t=null===(e=this.layer)||void 0===e?void 0:e.geometryType;return t?this._geometryTypeRequiresClientGraphicMapping(t)?"polygon":t:null}applyEdits(e){return this.load().then((()=>this._applyEdits(e)))}openPorts(){return this.load().then((()=>this._connection.openPorts()))}async queryFeatures(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};await this.load(t);const i=await this._connection.invoke("queryFeatures",e?e.toJSON():null,t);(0,x.q)(e,this.layer.spatialReference,i);const r=P.A.fromJSON(i);if(!this._requiresClientGraphicMapping())return r;const o=this.layer.objectIdField;for(const s of r.features){const e=s.attributes[o],t=this._idToClientGraphic.get(e);t&&(s.geometry=t.geometry)}return r.geometryType=this.layer.geometryType,r}async queryFeaturesJSON(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this._requiresClientGraphicMapping())throw new p.A("query-features-json:unsupported","Cannot query in JSON format for client only geometry types (mesh and extent)");await this.load(t);const i=await this._connection.invoke("queryFeatures",e?e.toJSON():null,t);return(0,x.q)(e,this.layer.spatialReference,i),i}queryFeatureCount(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.load(t).then((()=>this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)))}queryObjectIds(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.load(t).then((()=>this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)))}queryExtent(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.load(t).then((()=>this._connection.invoke("queryExtent",e?e.toJSON():null,t))).then((e=>({count:e.count,extent:L.A.fromJSON(e.extent)})))}querySnapping(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.load(t).then((()=>this._connection.invoke("querySnapping",e,t)))}async _applyEdits(e){if(!this._connection)throw new p.A("feature-layer-source:edit-failure","Memory source not loaded");const t=this.layer.objectIdField;let i=null;const r=[],o=[];await Promise.all([this._prepareClientMapping(e.addFeatures,null),this._prepareClientMapping(e.updateFeatures,null)]);const s=e=>"objectId"in e&&null!=e.objectId?e.objectId:"attributes"in e&&null!=e.attributes[t]?e.attributes[t]:null;if(e.addFeatures&&(i=this._prepareAddFeatures(e.addFeatures)),e.deleteFeatures)for(const u of e.deleteFeatures){const e=s(u);null!=e&&r.push(e)}const n=e.updateFeatures&&this._idToClientGraphic?new Map:null;if(e.updateFeatures)for(const u of e.updateFeatures)if(o.push(this._serializeFeature(u)),n){const e=s(u);null!=e&&n.set(e,u)}(0,q.u)(i?i.features:null,o,this.layer.spatialReference);const{fullExtent:a,featureEditResults:l}=await this._connection.invoke("applyEdits",{adds:i?i.features:[],updates:o,deletes:r});return this.fullExtent=a,i&&i.finish(l.uidToObjectId),this._updateClientGraphicIds(n,l),this._createEditsResult(l)}async _prepareClientMapping(e,t){if("mesh"!==this._layerOrSourceGeometryType||null==e)return;const i=[];for(const{geometry:r}of e)null==r||"mesh"!==r.type||r.hasExtent||r.loaded||i.push(r.load({signal:t}));i.length&&await Promise.all(i)}_updateClientGraphicIds(e,t){if(this._idToClientGraphic){if(e)for(const i of t.updateResults){if(!i.success)continue;const t=e.get(i.objectId);null!=t&&this._addIdToClientGraphic(t)}for(const e of t.deleteResults)e.success&&this._idToClientGraphic.delete(e.objectId)}}_createEditsResult(e){return{addFeatureResults:e.addResults?e.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:e.updateResults?e.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:e.deleteResults?e.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}_createFeatureEditResult(e){const t=!0===e.success?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new p.A("feature-layer-source:edit-failure",t.description,{code:t.code}):null}}_prepareAddFeatures(e){const t=new Map,i=new Array(e.length);let r=null;for(let s=0;s<e.length;s++){const o=e[s],n=this._serializeFeature(o);r||null==o.geometry||(r=o.geometry.type),i[s]=n,t.set("".concat(n.uid),o)}const o=this;return{features:i,inferredGeometryType:r,finish(e){const i=o.sourceJSON.objectIdField;for(const r in e){const s=e[r],n=t.get(r);n&&(n.attributes||(n.attributes={}),-1===s?delete n.attributes[i]:n.attributes[i]=s,o._addIdToClientGraphic(n))}}}}_addIdToClientGraphic(e){var t;if(!this._idToClientGraphic)return;const i=this.sourceJSON.objectIdField,r=null===(t=e.attributes)||void 0===t?void 0:t[i];null!=r&&this._idToClientGraphic.set(r,e)}get _layerOrSourceGeometryType(){var e,t,i;return null!==(e=null===(t=this.layer)||void 0===t?void 0:t.geometryType)&&void 0!==e?e:null===(i=this.sourceJSON)||void 0===i?void 0:i.geometryType}_requiresClientGraphicMapping(){return this._geometryTypeRequiresClientGraphicMapping(this._layerOrSourceGeometryType)}_geometryRequiresClientGraphicMapping(e){return this._geometryTypeRequiresClientGraphicMapping(e.type)}_geometryTypeRequiresClientGraphicMapping(e){return"mesh"===e||"multipatch"===e||"extent"===e}_serializeFeature(e){const{attributes:t}=e,i=this._geometryForSerialization(e),r=(J++).toString();return i?{uid:r,geometry:i.toJSON(),attributes:t}:{uid:r,attributes:t}}_geometryForSerialization(e){const{geometry:t}=e;return null==t?null:this._geometryRequiresClientGraphicMapping(t)?t.extent?G.A.fromExtent(t.extent):null:t}async _startWorker(e){var t,i;this._connection=await(0,O.ho)("MemorySourceWorker",{strategy:(0,Z.A)("feature-layers-workers")?"dedicated":"local",signal:e,registryTarget:this});const{fields:r,spatialReference:o,objectIdField:s,hasM:n,hasZ:a,timeInfo:l,dateFieldsTimeZone:u}=this.layer,d="defaults"===this.layer.originOf("spatialReference");await this._prepareClientMapping(this.items,e);const p=this._prepareAddFeatures(this.items);this.addHandles(this.on("before-changes",(e=>{y.A.getLogger(this).error("Source modifications will not propagate after layer has been loaded. Please use .applyEdits() instead"),e.preventDefault()})));const c={features:p.features,fields:null===r||void 0===r?void 0:r.map((e=>e.toJSON())),geometryType:N.Y.toJSON(this._workerGeometryType),hasM:"mesh"!==this._layerOrSourceGeometryType&&n,hasZ:"mesh"===this._layerOrSourceGeometryType||a,objectIdField:s,spatialReference:d?null:o&&o.toJSON(),timeInfo:null!==(t=null===l||void 0===l?void 0:l.toJSON())&&void 0!==t?t:null,dateFieldsTimeZone:u},h=await this._connection.invoke("load",c,{signal:e});for(const v of h.warnings){var f;y.A.getLogger(this.layer).warn("#load()","".concat(v.message," (title: '").concat(this.layer.title||"no title","', id: '").concat(null!==(f=this.layer.id)&&void 0!==f?f:"no id","')"),{warning:v})}h.featureErrors.length&&y.A.getLogger(this.layer).warn("#load()","Encountered ".concat(h.featureErrors.length," validation errors while loading features. (title: '").concat(this.layer.title||"no title","', id: '").concat(null!==(i=this.layer.id)&&void 0!==i?i:"no id","')"),{errors:h.featureErrors});const m=h.layerDefinition;this._geometryTypeRequiresClientGraphicMapping(p.inferredGeometryType)&&(m.geometryType=N.Y.toJSON(p.inferredGeometryType)),this.sourceJSON=m,this._requiresClientGraphicMapping()&&(this._idToClientGraphic=new Map),p.finish(h.assignedObjectIds)}};(0,r._)([(0,D.u)({Type:j.A,ensureType:(0,C.dp)(j.A)})],k.prototype,"itemType",void 0),(0,r._)([(0,b.MZ)()],k.prototype,"type",void 0),(0,r._)([(0,b.MZ)({constructOnly:!0})],k.prototype,"layer",void 0),(0,r._)([(0,b.MZ)({readOnly:!0})],k.prototype,"_workerGeometryType",null),(0,r._)([(0,b.MZ)()],k.prototype,"sourceJSON",void 0),k=(0,r._)([(0,S.$)("esri.layers.graphics.sources.MemorySource")],k);var V=i(12406),B=i(19502),Q=i(65624),W=i(31362),U=i(61979),z=i(74440),H=i(60693),K=i(71448),X=i(11270),$=i(37534),Y=i(94729),ee=i(91967);let te=class extends ee.A{constructor(){super(...arguments),this.updating=!1,this.status="unknown"}};(0,r._)([(0,b.MZ)()],te.prototype,"updating",void 0),(0,r._)([(0,b.MZ)()],te.prototype,"status",void 0),te=(0,r._)([(0,S.$)("esri.layers.support.PublishingInfo")],te);const ie=te,re="esri.layers.mixins.PublishableLayer",oe=Symbol(re);const se=e=>{var t;let i=class extends e{constructor(){super(...arguments),this[t]=!0}get publishingInfo(){if(this.destroyed)return null;const e=this._get("publishingInfo");if(e)return e;const t=new ie;return this._checkPublishingStatus(t),t}_checkPublishingStatus(e){let i=0;const r=async s=>{let n;e.updating=!0;try{n=await this.fetchPublishingStatus()}catch(t){n="unavailable"}"published"!==n&&"unavailable"!==n||("publishing"===e.status&&this.refresh(),o.remove()),e.status=n,e.updating=!1,o.removed||(i=setTimeout(r,s,s+125))},o={removed:!1,remove(){this.removed=!0,clearTimeout(i)}};this.when().catch((()=>o.remove())),r(250),this.addHandles(o)}};return t=oe,(0,r._)([(0,b.MZ)({readOnly:!0,clonable:!1})],i.prototype,"publishingInfo",null),i=(0,r._)([(0,S.$)(re)],i),i};var ne=i(21617),ae=i(5682),le=i(78817),ue=i(13096),de=i(55053),pe=i(46326),ce=i(15427),ye=i(91485),he=i(76350),fe=i(53430),me=i(71401),ve=i(27937),ge=i(44141),be=i(83982),we=i(38278),_e=i(89551),Se=i(81589),Fe=i(97015),Me=i(58672),Te=i(30973),Ie=i(61701),Ee=i(2183);const je="FeatureLayer";function Ze(e,t){return new p.A("layer:unsupported","Layer (".concat(e.title,", ").concat(e.id,") of type '").concat(e.declaredClass,"' ").concat(t),{layer:e})}function Ae(e){return e&&e instanceof d.A}const Re=(0,he.p)();function Oe(e,t,i){const r=!(null===i||void 0===i||!i.writeLayerSchema);return{enabled:r,ignoreOrigin:r}}let Ce=class extends((0,H.j)((0,K.J)((0,z.F)(se((0,U.w6)((0,Q.d)((0,$.f)((0,le.e)((0,ae.j)((0,ne.J)((0,B.b)((0,X.q)((0,Y.A)((0,h.P)((0,W.d)((0,V.p)((0,u.O)(E.A)))))))))))))))))){constructor(){super(...arguments),this.charts=null,this.copyright=null,this.displayField=null,this.dynamicDataSource=null,this.fields=null,this.fieldsIndex=null,this.formTemplate=null,this.fullExtent=null,this.geometryType=null,this.hasM=void 0,this.hasZ=void 0,this.infoFor3D=null,this.isTable=!1,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.outFields=null,this.path=null,this.popupEnabled=!0,this.popupTemplate=null,this.resourceInfo=null,this.screenSizePerspectiveEnabled=!0,this.spatialReference=I.A.WGS84,this.subtypeCode=null,this.templates=null,this.timeInfo=null,this.title=null,this.sublayerTitleMode="item-title",this.type="feature",this.typeIdField=null,this.types=null,this.visible=!0,this._debouncedSaveOperations=(0,m.sg)((async(e,t,r)=>{const{save:o,saveAs:s}=await i.e(765).then(i.bind(i,10765));switch(e){case Ie.X.SAVE:return o(this,t);case Ie.X.SAVE_AS:return s(this,r,t)}}))}destroy(){var e;null===(e=this.source)||void 0===e||e.destroy()}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){var t;const i=null!=e?e.signal:null;if(null!==(t=this.portalItem)&&void 0!==t&&t.loaded&&this.source)return this.addResolvingPromise(this.createGraphicsSource(i).then((e=>this.initLayerProperties(e)))),Promise.resolve(this);const r=this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"]},e).catch(m.QP).then((async()=>{if(this.url&&null==this.layerId&&/FeatureServer|MapServer\/*$/i.test(this.url)){const e=await this._fetchFirstValidLayerId(i);null!=e&&(this.layerId=e)}if(!this.url&&!this._hasMemorySource())throw new p.A("feature-layer:missing-url-or-source","Feature layer must be created with either a url or a source");return this.initLayerProperties(await this.createGraphicsSource(i))})).then((()=>(0,pe.VA)(this,"load",e)));return this.addResolvingPromise(r),Promise.resolve(this)}readCapabilities(e,t){return t=t.layerDefinition||t,(0,ge.S)(t,this.url)}get createQueryVersion(){var e;return this.commitProperty("definitionExpression"),this.commitProperty("dynamicDataSource"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("gdbVersion"),this.commitProperty("historicMoment"),this.commitProperty("returnZ"),this.commitProperty("capabilities"),this.commitProperty("returnM"),(null!==(e=this._get("createQueryVersion"))&&void 0!==e?e:0)+1}get editingEnabled(){var e;return!(this.loaded&&(null===(e=this.capabilities)||void 0===e||!e.operations.supportsEditing))&&(this._isOverridden("editingEnabled")?this._get("editingEnabled"):this._hasMemorySource()||this.userHasEditingPrivileges)}set editingEnabled(e){this._overrideIfSome("editingEnabled",e)}readEditingEnabled(e,t){return this._readEditingEnabled(t,!1)}readEditingEnabledFromWebMap(e,t,i){return this._readEditingEnabled(t,!0,i)}writeEditingEnabled(e,t){this._writeEditingEnabled(e,t,!1)}writeEditingEnabledToWebMap(e,t,i,r){this._writeEditingEnabled(e,t,!0,r)}get effectiveEditingEnabled(){return(0,pe.C$)(this)}readIsTable(e,t){var i,r;return"Table"===(t=null!==(i=null===(r=t)||void 0===r?void 0:r.layerDefinition)&&void 0!==i?i:t).type||!t.geometryType}writeIsTable(e,t,i,r){(null===r||void 0===r?void 0:r.writeLayerSchema)&&(0,f.sM)(i,e?"Table":"Feature Layer",t)}readGlobalIdField(e,t){return(0,pe.jD)(t.layerDefinition||t)}readObjectIdField(e,t){return(0,pe.Zm)(t.layerDefinition||t)}get parsedUrl(){const e=(0,g.An)(this.url);return null!=e&&(null!=this.dynamicDataSource?e.path=(0,g.fj)(e.path,"dynamicLayer"):null!=this.layerId&&(e.path=(0,g.fj)(e.path,this.layerId.toString()))),e}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){(0,fe.yp)(e,this.fieldsIndex),this._set("renderer",e)}readRenderer(e,t,i){var r;const o=null===(r=(t=t.layerDefinition||t).drawingInfo)||void 0===r?void 0:r.renderer;if(o){var n;const e=null!==(n=(0,s.L)(o,t,i))&&void 0!==n?n:void 0;return e||y.A.getLogger(this).error("Failed to create renderer",{rendererDefinition:t.drawingInfo.renderer,layer:this,context:i}),e}return(0,pe.PD)(t,i)}set source(e){const t=this._get("source");t!==e&&(Ae(t)&&this._resetMemorySource(t),Ae(e)&&this._initMemorySource(e),this._set("source",e))}castSource(e){return e?Array.isArray(e)||e instanceof d.A?new k({layer:this,items:e}):e:null}readSource(e,t){var i;const r=P.A.fromJSON(t.featureSet);return new k({layer:this,items:null!==(i=null===r||void 0===r?void 0:r.features)&&void 0!==i?i:[]})}readTemplates(e,t){var i;const r=t.editFieldsInfo,o=null===r||void 0===r?void 0:r.creatorField,s=null===r||void 0===r?void 0:r.editorField;return e=null===(i=e)||void 0===i?void 0:i.map((e=>ce.A.fromJSON(e))),this._fixTemplates(e,o),this._fixTemplates(e,s),e}readTitle(e,t){var i,r,o;const s=null!==(i=null===(r=t.layerDefinition)||void 0===r?void 0:r.name)&&void 0!==i?i:t.name,n=t.title||(null===(o=t.layerDefinition)||void 0===o?void 0:o.title);if(s){var a;const e=null===(a=this.portalItem)||void 0===a?void 0:a.title;if("item-title"===this.sublayerTitleMode)return this.url?(0,ue.yG)(this.url,s):s;let t=s;if(!t&&this.url){const e=(0,ue.qg)(this.url);null!=e&&(t=e.title)}if(!t)return;return"item-title-and-service-name"===this.sublayerTitleMode&&e&&e!==t&&(t=e+" - "+t),(0,ue.cr)(t)}if("item-title"===this.sublayerTitleMode&&n)return n}readTitleFromWebMap(e,t){var i;return t.title||(null===(i=t.layerDefinition)||void 0===i?void 0:i.name)}readTypeIdField(e,t){let i=(t=t.layerDefinition||t).typeIdField;if(i&&t.fields){i=i.toLowerCase();const e=t.fields.find((e=>e.name.toLowerCase()===i));e&&(i=e.name)}return i}readTypes(e,t){var i;e=(t=t.layerDefinition||t).types;const r=t.editFieldsInfo,o=null===r||void 0===r?void 0:r.creatorField,s=null===r||void 0===r?void 0:r.editorField;return null===(i=e)||void 0===i?void 0:i.map((e=>(e=ye.A.fromJSON(e),this._fixTemplates(e.templates,o),this._fixTemplates(e.templates,s),e)))}readVisible(e,t){var i;return null!=(null===(i=t.layerDefinition)||void 0===i?void 0:i.defaultVisibility)?!!t.layerDefinition.defaultVisibility:null!=t.visibility?!!t.visibility:void 0}async addAttachment(e,t){return(0,pe.Xl)(this,e,t,je)}async updateAttachment(e,t,i){return(0,pe.bt)(this,e,t,i,je)}async applyEdits(e,t){return(0,pe.ct)(this,e,t)}async uploadAssets(e,t){return(0,pe.rn)(this,e,t)}on(e,t){return super.on(e,t)}createPopupTemplate(e){return(0,Te.tn)(this,e)}async createGraphicsSource(e){if(this._hasMemorySource()&&this.source)return this.source.load({signal:e});const{default:t}=await(0,m.qr)(Promise.all([i.e(8618),i.e(9122),i.e(7872),i.e(9078)]).then(i.bind(i,89078)),e);return new t({layer:this}).load({signal:e})}createQuery(){const e=(0,pe.VZ)(this);e.dynamicDataSource=this.dynamicDataSource;const t=null!=this.subtypeCode?"".concat(this.subtypeField," = ").concat(this.subtypeCode):null,i=(0,v.m)(this.definitionExpression,t);return e.where=i||"1=1",e}async deleteAttachments(e,t){return(0,pe.mm)(this,e,t,je)}async fetchRecomputedExtents(e){return(0,pe.WP)(this,e,je)}getFeatureType(e){const{typeIdField:t,types:i}=this;if(!t||!e)return null;const r=e.attributes?e.attributes[t]:void 0;if(null==r)return null;let o=null;return null!==i&&void 0!==i&&i.some((e=>{const{id:t}=e;return null!=t&&(t.toString()===r.toString()&&(o=e),!!o)})),o}getFieldDomain(e,t){const i=null===t||void 0===t?void 0:t.feature,r=this.getFeatureType(i);if(r){const t=r.domains&&r.domains[e];if(t&&"inherited"!==t.type)return t}return this._getLayerDomain(e)}getField(e){return this.fieldsIndex.get(e)}async queryAttachments(e,t){return(0,pe.lV)(this,e,t,je)}async queryFeatures(e,t){var i;const r=await this.load(),o=await r.source.queryFeatures(null!==(i=Fe.A.from(e))&&void 0!==i?i:r.createQuery(),t);if(null!==o&&void 0!==o&&o.features)for(const s of o.features)s.layer=s.sourceLayer=r;return o}async queryObjectIds(e,t){return(0,pe.sg)(this,e,t,je)}async queryFeatureCount(e,t){return(0,pe.Ye)(this,e,t,je)}async queryExtent(e,t){return(0,pe.B5)(this,e,t,je)}async queryRelatedFeatures(e,t){return(0,pe.hM)(this,e,t,je)}async queryRelatedFeaturesCount(e,t){return(0,pe.S2)(this,e,t,je)}async queryTopFeatures(e,t){var i;const{source:r,capabilities:o}=await this.load();if(!r.queryTopFeatures||null===o||void 0===o||null===(i=o.query)||void 0===i||!i.supportsTopFeaturesQuery)throw new p.A(je,"Layer source does not support queryTopFeatures capability");const s=await r.queryTopFeatures(Me.A.from(e),t);if(null!==s&&void 0!==s&&s.features)for(const n of s.features)n.layer=n.sourceLayer=this;return s}async queryTopObjectIds(e,t){const{source:i,capabilities:r}=await this.load();if(!i.queryTopObjectIds||null===r||void 0===r||!r.query.supportsTopFeaturesQuery)throw new p.A(je,"Layer source does not support queryTopObjectIds capability");return i.queryTopObjectIds(Me.A.from(e),t)}async queryTopFeaturesExtent(e,t){var i;const{source:r,capabilities:o}=await this.load();if(!r.queryTopExtents||null===o||void 0===o||null===(i=o.query)||void 0===i||!i.supportsTopFeaturesQuery)throw new p.A(je,"Layer source does not support queryTopExtents capability");return r.queryTopExtents(Me.A.from(e),t)}async queryTopFeatureCount(e,t){var i;const{source:r,capabilities:o}=await this.load();if(!r.queryTopCount||null===o||void 0===o||null===(i=o.query)||void 0===i||!i.supportsTopFeaturesQuery)throw new p.A(je,"Layer source does not support queryFeatureCount capability");return r.queryTopCount(Me.A.from(e),t)}read(e,t){const i=e.featureCollection;if((i||"Feature Collection"===e.type)&&(this.resourceInfo=e),i){const e=i.layers;e&&1===e.length&&(super.read(e[0],t),null!=i.showLegend&&super.read({showLegend:i.showLegend},t))}super.read(e,t),t&&"service"===t.origin&&(this.revert(["objectIdField","fields","timeInfo","dateFieldsTimeZone"],"service"),this.spatialReference||this.revert(["spatialReference"],"service"))}write(e,t){var i,r,o,s;t={...t,origin:null!==(i=null===(r=t)||void 0===r?void 0:r.origin)&&void 0!==i?i:void 0,writeLayerSchema:null!==(o=null===(s=t)||void 0===s?void 0:s.writeLayerSchema)&&void 0!==o?o:this._hasMemorySource()};const{origin:n,layerContainerType:a,messages:l}=t;if(this.dynamicDataSource)return null!==l&&void 0!==l&&l.push(Ze(this,"using a dynamic data source cannot be written to web scenes, web maps and feature service items")),null;if(this.isTable){if(("web-map"===n||"web-scene"===n)&&"tables"!==a)return null!==l&&void 0!==l&&l.push(Ze(this,"a table source can only be written to tables, not ".concat(a))),null;if(this._hasMemorySource())return null!==l&&void 0!==l&&l.push(Ze(this,"using an in-memory table source cannot be written to web scenes and web maps")),null}else if(this.loaded&&("web-map"===n||"web-scene"===n)&&"tables"===a)return null!==l&&void 0!==l&&l.push(Ze(this,"using a non-table source cannot be written to tables in web maps or web scenes")),null;return super.write(e,t)}clone(){if(this._hasMemorySource())throw new p.A(je,"FeatureLayer (title: ".concat(this.title,", id: ").concat(this.id,") created using in-memory source cannot be cloned"));return super.clone()}serviceSupportsSpatialReference(e){var t;return!!this.loaded&&("memory"===(null===(t=this.source)||void 0===t?void 0:t.type)||(0,we.D)(this,e))}async save(e){return this._debouncedSaveOperations(Ie.X.SAVE,e)}async saveAs(e,t){return this._debouncedSaveOperations(Ie.X.SAVE_AS,t,e)}_readEditingEnabled(e,t,i){var r;let o=null===(r=e.layerDefinition)||void 0===r?void 0:r.capabilities;return o?this._hasEditingCapability(o):(o=e.capabilities,t&&"web-map"===(null===i||void 0===i?void 0:i.origin)&&!this._hasMemorySource()&&o?this._hasEditingCapability(o):void 0)}_hasEditingCapability(e){return e.toLowerCase().split(",").map((e=>e.trim())).includes("editing")}_writeEditingEnabled(e,t,i,r){if(!e){var o;const e=null!==(o=this.capabilities)&&void 0!==o&&null!==(o=o.operations)&&void 0!==o&&o.supportsSync?"Query,Sync":"Query";(0,f.sM)("layerDefinition.capabilities",e,t),i&&(null===r||void 0===r||!r.writeLayerSchema)&&(t.capabilities=e)}}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}_fetchFirstValidLayerId(e){return(0,a.A)(this.url,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e}).then((e=>{const t=e.data;if(t)return this.findFirstValidLayerId(t)}))}async initLayerProperties(e){var t;return this._set("source",e),e.sourceJSON&&(this.sourceJSON=e.sourceJSON,this.read(e.sourceJSON,{origin:"service",portalItem:this.portalItem,portal:null===(t=this.portalItem)||void 0===t?void 0:t.portal,url:this.parsedUrl})),this._verifySource(),this._verifyFields(),(0,fe.yp)(this.renderer,this.fieldsIndex),(0,fe.sv)(this.timeInfo,this.fieldsIndex),(0,Se.L)(this,{origin:"service"})}async hasDataChanged(){return(0,pe.jp)(this)}async fetchPublishingStatus(){const e=this.source;return null!==e&&void 0!==e&&e.fetchPublishingStatus?e.fetchPublishingStatus():"unavailable"}_verifyFields(){var e,t,i;const r=null!==(e=null===(t=this.parsedUrl)||void 0===t?void 0:t.path)&&void 0!==e?e:"undefined";this.objectIdField||console.log("FeatureLayer: 'objectIdField' property is not defined (url: "+r+")"),this.isTable||this._hasMemorySource()||-1!==r.search(/\/FeatureServer\//i)||(null===(i=this.fields)||void 0===i?void 0:i.some((e=>"geometry"===e.type)))||console.log("FeatureLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+r+")")}_fixTemplates(e,t){e&&e.forEach((e=>{var i;const r=null===(i=e.prototype)||void 0===i?void 0:i.attributes;r&&t&&delete r[t]}))}_verifySource(){if(this._hasMemorySource()){if(this.url)throw new p.A("feature-layer:mixed-source-and-url","FeatureLayer cannot be created with both an in-memory source and a url")}else if(!this.url)throw new p.A("feature-layer:source-or-url-required","FeatureLayer requires either a url, a valid portal item or a source")}_initMemorySource(e){e.forEach((e=>{e.layer=this,e.sourceLayer=this})),this.addHandles([e.on("after-add",(e=>{e.item.layer=this,e.item.sourceLayer=this})),e.on("after-remove",(e=>{e.item.layer=null,e.item.sourceLayer=null}))],"fl-source")}_resetMemorySource(e){e.forEach((e=>{e.layer=null,e.sourceLayer=null})),this.removeHandles("fl-source")}_hasMemorySource(){return!(this.url||!this.source)}findFirstValidLayerId(e){return Array.isArray(e.layers)&&e.layers.length>0?e.layers[0].id:Array.isArray(e.tables)&&e.tables.length>0?e.tables[0].id:void 0}};(0,r._)([(0,_.w)("service","capabilities")],Ce.prototype,"readCapabilities",null),(0,r._)([(0,b.MZ)({json:{origins:{"web-scene":{write:!1}},write:!0}})],Ce.prototype,"charts",void 0),(0,r._)([(0,b.MZ)({readOnly:!0})],Ce.prototype,"createQueryVersion",null),(0,r._)([(0,b.MZ)({json:{read:{source:"layerDefinition.copyrightText"}}})],Ce.prototype,"copyright",void 0),(0,r._)([(0,b.MZ)({json:{read:{source:"layerDefinition.displayField"}}})],Ce.prototype,"displayField",void 0),(0,r._)([(0,b.MZ)({types:l.Es,readOnly:!0})],Ce.prototype,"defaultSymbol",void 0),(0,r._)([(0,b.MZ)({type:_e.L})],Ce.prototype,"dynamicDataSource",void 0),(0,r._)([(0,b.MZ)({type:Boolean})],Ce.prototype,"editingEnabled",null),(0,r._)([(0,_.w)(["portal-item","web-scene"],"editingEnabled",["layerDefinition.capabilities"])],Ce.prototype,"readEditingEnabled",null),(0,r._)([(0,_.w)("web-map","editingEnabled",["capabilities","layerDefinition.capabilities"])],Ce.prototype,"readEditingEnabledFromWebMap",null),(0,r._)([(0,F.K)(["portal-item","web-scene"],"editingEnabled",{"layerDefinition.capabilities":{type:String}})],Ce.prototype,"writeEditingEnabled",null),(0,r._)([(0,F.K)("web-map","editingEnabled",{capabilities:{type:String},"layerDefinition.capabilities":{type:String}})],Ce.prototype,"writeEditingEnabledToWebMap",null),(0,r._)([(0,b.MZ)({readOnly:!0})],Ce.prototype,"effectiveEditingEnabled",null),(0,r._)([(0,b.MZ)({...Re.fields,json:{read:{source:"layerDefinition.fields"},origins:{service:{name:"fields"},"web-map":{write:{target:"layerDefinition.fields",overridePolicy:Oe}}}}})],Ce.prototype,"fields",void 0),(0,r._)([(0,b.MZ)(Re.fieldsIndex)],Ce.prototype,"fieldsIndex",void 0),(0,r._)([(0,b.MZ)({type:T.A,json:{name:"formInfo",write:!0,origins:{"web-scene":{read:!1,write:!1}}}})],Ce.prototype,"formTemplate",void 0),(0,r._)([(0,b.MZ)({json:{read:{source:"layerDefinition.extent"}}})],Ce.prototype,"fullExtent",void 0),(0,r._)([(0,b.MZ)({json:{origins:{"web-map":{write:{target:"layerDefinition.geometryType",overridePolicy:Oe,writer(e,t,i){const r=e?pe.iX.toJSON(e):null;r&&(0,f.sM)(i,r,t)}}}},read:{source:"layerDefinition.geometryType",reader:pe.iX.read}}})],Ce.prototype,"geometryType",void 0),(0,r._)([(0,b.MZ)({json:{read:{source:"layerDefinition.hasM"}}})],Ce.prototype,"hasM",void 0),(0,r._)([(0,b.MZ)({json:{read:{source:"layerDefinition.hasZ"}}})],Ce.prototype,"hasZ",void 0),(0,r._)([(0,b.MZ)(de.id)],Ce.prototype,"id",void 0),(0,r._)([(0,b.MZ)({readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],Ce.prototype,"infoFor3D",void 0),(0,r._)([(0,b.MZ)({json:{origins:{"web-map":{write:{target:"layerDefinition.type"}}}}})],Ce.prototype,"isTable",void 0),(0,r._)([(0,_.w)("service","isTable",["type","geometryType"]),(0,_.w)("isTable",["layerDefinition.type","layerDefinition.geometryType"])],Ce.prototype,"readIsTable",null),(0,r._)([(0,F.K)("web-map","isTable")],Ce.prototype,"writeIsTable",null),(0,r._)([(0,b.MZ)(de.kF)],Ce.prototype,"labelsVisible",void 0),(0,r._)([(0,b.MZ)({type:[me.A],json:{origins:{service:{name:"drawingInfo.labelingInfo",read:ve.w,write:!1},"web-scene":{name:"layerDefinition.drawingInfo.labelingInfo",read:ve.w,write:{enabled:!0,layerContainerTypes:M.K}}},name:"layerDefinition.drawingInfo.labelingInfo",read:ve.w,write:!0}})],Ce.prototype,"labelingInfo",void 0),(0,r._)([(0,b.MZ)((()=>{const e=(0,c.o8)(de.Ih);return e.json.origins["portal-item"]={write:{target:"layerDefinition.drawingInfo.transparency",writer(e,t,i){(0,f.sM)(i,(0,Ee.p)(e),t)}}},e})())],Ce.prototype,"opacity",void 0),(0,r._)([(0,b.MZ)(de.fV)],Ce.prototype,"legendEnabled",void 0),(0,r._)([(0,b.MZ)({type:["show","hide"],json:(()=>{const e=(0,c.o8)(de.C1.json);return e.origins["portal-item"]={read:!1,write:!1},e})()})],Ce.prototype,"listMode",void 0),(0,r._)([(0,_.w)("globalIdField",["layerDefinition.globalIdField","layerDefinition.fields"])],Ce.prototype,"readGlobalIdField",null),(0,r._)([(0,b.MZ)({json:{origins:{"web-map":{write:{target:"layerDefinition.objectIdField",overridePolicy:Oe}}}}})],Ce.prototype,"objectIdField",void 0),(0,r._)([(0,_.w)("objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"])],Ce.prototype,"readObjectIdField",null),(0,r._)([(0,b.MZ)({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],Ce.prototype,"operationalLayerType",void 0),(0,r._)([(0,b.MZ)(Re.outFields)],Ce.prototype,"outFields",void 0),(0,r._)([(0,b.MZ)({readOnly:!0})],Ce.prototype,"parsedUrl",null),(0,r._)([(0,b.MZ)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],Ce.prototype,"path",void 0),(0,r._)([(0,b.MZ)(de.M6)],Ce.prototype,"popupEnabled",void 0),(0,r._)([(0,b.MZ)({type:o.A,json:{name:"popupInfo",write:!0}})],Ce.prototype,"popupTemplate",void 0),(0,r._)([(0,b.MZ)({readOnly:!0})],Ce.prototype,"defaultPopupTemplate",null),(0,r._)([(0,b.MZ)({types:n.H,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{types:n.X,name:"layerDefinition.drawingInfo.renderer",write:{layerContainerTypes:M.K,overridePolicy:(e,t,i)=>({ignoreOrigin:null===i||void 0===i?void 0:i.writeLayerSchema})}}},write:{target:"layerDefinition.drawingInfo.renderer",overridePolicy:(e,t,i)=>({ignoreOrigin:null===i||void 0===i?void 0:i.writeLayerSchema})}}})],Ce.prototype,"renderer",null),(0,r._)([(0,_.w)("service","renderer",["drawingInfo.renderer","defaultSymbol"]),(0,_.w)("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],Ce.prototype,"readRenderer",null),(0,r._)([(0,b.MZ)()],Ce.prototype,"resourceInfo",void 0),(0,r._)([(0,b.MZ)((()=>{const e=(0,c.o8)(de.PY);return e.json.origins["portal-item"]={read:!1,write:!1},e})())],Ce.prototype,"screenSizePerspectiveEnabled",void 0),(0,r._)([(0,b.MZ)({clonable:!1})],Ce.prototype,"source",null),(0,r._)([(0,w.w)("source")],Ce.prototype,"castSource",null),(0,r._)([(0,_.w)("portal-item","source",["featureSet"]),(0,_.w)("web-map","source",["featureSet"])],Ce.prototype,"readSource",null),(0,r._)([(0,b.MZ)({json:{read:{source:"layerDefinition.extent.spatialReference"}}})],Ce.prototype,"spatialReference",void 0),(0,r._)([(0,b.MZ)({type:Number})],Ce.prototype,"subtypeCode",void 0),(0,r._)([(0,b.MZ)({type:[ce.A]})],Ce.prototype,"templates",void 0),(0,r._)([(0,_.w)("templates",["editFieldsInfo","creatorField","editorField","templates"])],Ce.prototype,"readTemplates",null),(0,r._)([(0,b.MZ)({type:be.A})],Ce.prototype,"timeInfo",void 0),(0,r._)([(0,b.MZ)()],Ce.prototype,"title",void 0),(0,r._)([(0,_.w)("service","title",["name"]),(0,_.w)("portal-item","title",["layerDefinition.title","layerDefinition.name","title"])],Ce.prototype,"readTitle",null),(0,r._)([(0,_.w)("web-map","title",["layerDefinition.name","title"])],Ce.prototype,"readTitleFromWebMap",null),(0,r._)([(0,b.MZ)({type:String})],Ce.prototype,"sublayerTitleMode",void 0),(0,r._)([(0,b.MZ)({json:{read:!1}})],Ce.prototype,"type",void 0),(0,r._)([(0,b.MZ)({type:String})],Ce.prototype,"typeIdField",void 0),(0,r._)([(0,_.w)("service","typeIdField"),(0,_.w)("typeIdField",["layerDefinition.typeIdField"])],Ce.prototype,"readTypeIdField",null),(0,r._)([(0,b.MZ)({type:[ye.A]})],Ce.prototype,"types",void 0),(0,r._)([(0,_.w)("service","types",["types"]),(0,_.w)("types",["layerDefinition.types"])],Ce.prototype,"readTypes",null),(0,r._)([(0,b.MZ)({type:Boolean,json:{origins:{"portal-item":{write:{target:"layerDefinition.defaultVisibility"}}}}})],Ce.prototype,"visible",void 0),(0,r._)([(0,_.w)("portal-item","visible",["visibility","layerDefinition.defaultVisibility"])],Ce.prototype,"readVisible",null),Ce=(0,r._)([(0,S.$)("esri.layers.FeatureLayer")],Ce);const De=Ce},81589:(e,t,i)=>{i.d(t,{L:()=>n});var r=i(98773),o=i(50346),s=i(62754);async function n(e,t,i){const n=e&&e.getAtOrigin&&e.getAtOrigin("renderer",t.origin);if(n&&"unique-value"===n.type&&n.styleOrigin){const a=await(0,r.Ke)(n.populateFromStyle());if((0,o.Te)(i),!1===a.ok){const i=a.error;null!==t&&void 0!==t&&t.messages&&t.messages.push(new s.A("renderer:style-reference","Failed to create unique value renderer from style reference: ".concat(i.message),{error:i,context:t})),e.clear("renderer",null===t||void 0===t?void 0:t.origin)}}}},10290:(e,t,i)=>{i.d(t,{u:()=>n});var r=i(31633),o=i(80963);function s(e,t,i){if(null==e.hasM||e.hasZ)for(const r of t)for(const e of r)e.length>2&&(e[2]*=i)}function n(e,t,i){if(!e&&!t||!i)return;const o=(0,r.G9)(i);a(e,i,o),a(t,i,o)}function a(e,t,i){if(e)for(const r of e)l(r.geometry,t,i)}function l(e,t,i){if(null===e||void 0===e||!e.spatialReference||(0,o.aI)(e.spatialReference,t))return;const n=(0,r.G9)(e.spatialReference)/i;if(1!==n)if("x"in e)null!=e.z&&(e.z*=n);else if("rings"in e)s(e,e.rings,n);else if("paths"in e)s(e,e.paths,n);else if("points"in e&&(null==e.hasM||e.hasZ))for(const r of e.points)r.length>2&&(r[2]*=n)}},58672:(e,t,i)=>{i.d(t,{A:()=>S});var r,o=i(35143),s=i(35238),n=i(82111),a=i(45802),l=i(42553),u=i(53084),d=i(46053),p=i(40565),c=i(85842),y=i(17707),h=i(19902);i(81806),i(76460),i(47249);let f=r=class extends l.oY{constructor(e){super(e),this.groupByFields=void 0,this.topCount=void 0,this.orderByFields=void 0}clone(){return new r({groupByFields:this.groupByFields,topCount:this.topCount,orderByFields:this.orderByFields})}};(0,o._)([(0,d.MZ)({type:[String],json:{write:!0}})],f.prototype,"groupByFields",void 0),(0,o._)([(0,d.MZ)({type:Number,json:{write:!0}})],f.prototype,"topCount",void 0),(0,o._)([(0,d.MZ)({type:[String],json:{write:!0}})],f.prototype,"orderByFields",void 0),f=r=(0,o._)([(0,c.$)("esri.rest.support.TopFilter")],f);const m=f;var v,g=i(13312);const b=new a.J({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),w=new a.J({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let _=v=class extends l.oY{constructor(e){super(e),this.cacheHint=void 0,this.distance=void 0,this.geometry=null,this.geometryPrecision=void 0,this.maxAllowableOffset=void 0,this.num=void 0,this.objectIds=null,this.orderByFields=null,this.outFields=null,this.outSpatialReference=null,this.resultType=null,this.returnGeometry=!1,this.returnM=void 0,this.returnZ=void 0,this.start=void 0,this.spatialRelationship="intersects",this.timeExtent=null,this.topFilter=void 0,this.units=null,this.where="1=1"}writeStart(e,t){t.resultOffset=this.start,t.resultRecordCount=this.num||10}clone(){return new v((0,u.o8)({cacheHint:this.cacheHint,distance:this.distance,geometry:this.geometry,geometryPrecision:this.geometryPrecision,maxAllowableOffset:this.maxAllowableOffset,num:this.num,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,resultType:this.resultType,returnGeometry:this.returnGeometry,returnZ:this.returnZ,returnM:this.returnM,start:this.start,spatialRelationship:this.spatialRelationship,timeExtent:this.timeExtent,topFilter:this.topFilter,units:this.units,where:this.where}))}};(0,o._)([(0,d.MZ)({type:Boolean,json:{write:!0}})],_.prototype,"cacheHint",void 0),(0,o._)([(0,d.MZ)({type:Number,json:{write:{overridePolicy:e=>({enabled:e>0})}}})],_.prototype,"distance",void 0),(0,o._)([(0,d.MZ)({types:s.yR,json:{read:h.rS,write:!0}})],_.prototype,"geometry",void 0),(0,o._)([(0,d.MZ)({type:Number,json:{write:!0}})],_.prototype,"geometryPrecision",void 0),(0,o._)([(0,d.MZ)({type:Number,json:{write:!0}})],_.prototype,"maxAllowableOffset",void 0),(0,o._)([(0,d.MZ)({type:Number,json:{read:{source:"resultRecordCount"}}})],_.prototype,"num",void 0),(0,o._)([(0,d.MZ)({json:{write:!0}})],_.prototype,"objectIds",void 0),(0,o._)([(0,d.MZ)({type:[String],json:{write:!0}})],_.prototype,"orderByFields",void 0),(0,o._)([(0,d.MZ)({type:[String],json:{write:!0}})],_.prototype,"outFields",void 0),(0,o._)([(0,d.MZ)({type:g.A,json:{read:{source:"outSR"},write:{target:"outSR"}}})],_.prototype,"outSpatialReference",void 0),(0,o._)([(0,d.MZ)({type:String,json:{write:!0}})],_.prototype,"resultType",void 0),(0,o._)([(0,d.MZ)({json:{write:!0}})],_.prototype,"returnGeometry",void 0),(0,o._)([(0,d.MZ)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],_.prototype,"returnM",void 0),(0,o._)([(0,d.MZ)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],_.prototype,"returnZ",void 0),(0,o._)([(0,d.MZ)({type:Number,json:{read:{source:"resultOffset"}}})],_.prototype,"start",void 0),(0,o._)([(0,y.K)("start"),(0,y.K)("num")],_.prototype,"writeStart",null),(0,o._)([(0,d.MZ)({type:String,json:{read:{source:"spatialRel",reader:b.read},write:{target:"spatialRel",writer:b.write}}})],_.prototype,"spatialRelationship",void 0),(0,o._)([(0,d.MZ)({type:n.A,json:{write:!0}})],_.prototype,"timeExtent",void 0),(0,o._)([(0,d.MZ)({type:m,json:{write:!0}})],_.prototype,"topFilter",void 0),(0,o._)([(0,d.MZ)({type:String,json:{read:w.read,write:{writer:w.write,overridePolicy(e){return{enabled:null!=e&&null!=this.distance&&this.distance>0}}}}})],_.prototype,"units",void 0),(0,o._)([(0,d.MZ)({type:String,json:{write:!0}})],_.prototype,"where",void 0),_=v=(0,o._)([(0,c.$)("esri.rest.support.TopFeaturesQuery")],_),_.from=(0,p.dp)(_);const S=_}}]);
//# sourceMappingURL=8451.e62fafd2.chunk.js.map