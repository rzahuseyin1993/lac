"use strict";(self.webpackChunklac=self.webpackChunklac||[]).push([[5908],{45908:(e,t,n)=>{n.r(t),n.d(t,{registerFunctions:()=>$});var a=n(46405),i=n(26043),r=n(67253),o=n(9861),l=n(48015),s=n(21363),c=n(68772),u=n(98264),f=n(43036),d=n(45018),m=n(63901),y=n(63046),h=n(43097),p=n(8423),w=n(47164),g=n(64509),F=n(35140),D=n(64379),T=n(69127),I=n(83528),A=n(50346),b=n(97216),E=n(38451),v=n(44135),C=n(65308);async function N(e,t,n){const a=e.getVariables();if(a.length>0){const i=[];for(let e=0;e<a.length;e++){const r={name:a[e]};i.push(await t.evaluateIdentifier(n,r))}const r={};for(let e=0;e<a.length;e++)r[a[e]]=i[e];return e.parameters=r,e}return e}function S(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;for(const a in e)if(a.toLowerCase()===t.toLowerCase())return e[a];return n}function x(e){if(null===e)return null;const t={type:S(e,"type",""),name:S(e,"name","")};if("range"===t.type)t.range=S(e,"range",[]);else{t.codedValues=[];for(const n of S(e,"codedValues",[]))t.codedValues.push({name:S(n,"name",""),code:S(n,"code",null)})}return t}function L(e){if(null===e)return null;const t={},n=S(e,"wkt",null);null!==n&&(t.wkt=n);const a=S(e,"wkid",null);return null!==a&&(t.wkid=a),t}function P(e){if(null===e)return null;const t={hasZ:S(e,"hasz",!1),hasM:S(e,"hasm",!1)},n=S(e,"spatialreference",null);n&&(t.spatialReference=L(n));const a=S(e,"x",null);if(null!==a)return t.x=a,t.y=S(e,"y",null),t.hasZ&&(t.z=S(e,"z",null)),t.hasM&&(t.m=S(e,"m",null)),t;const i=S(e,"rings",null);if(null!==i)return t.rings=i,t;const r=S(e,"paths",null);if(null!==r)return t.paths=r,t;const o=S(e,"points",null);if(null!==o)return t.points=o,t;for(const l of["xmin","xmax","ymin","ymax","zmin","zmax","mmin","mmax"]){const n=S(e,l,null);null!==n&&(t[l]=n)}return t}function X(e){return"utc"===(null===e||void 0===e?void 0:e.toLowerCase())?"UTC":"unknown"===(null===e||void 0===e?void 0:e.toLowerCase())?"Unknown":e}function $(e){"async"===e.mode&&(e.functions.timezone=function(t,n){return e.standardFunctionAsync(t,n,(async(e,i,l)=>{var s,c,u,d;if((0,f.H)(l,1,2,t,n),(0,f.n)(l[0]))return"Unknown";if((0,f.m)(l[0]))return"Unknown";if((0,f.u)(l[0])){if(await l[0].load(),1===l.length||null===l[1])return l[0].datesInUnknownTimezone?X("unknown"):X(l[0].dateFieldsTimeZone);if(!(l[1]instanceof r.A)||!1===l[1].hasField("type"))throw new o.D$(t,o.TX.InvalidParameter,n);const e=l[1].field("type");if(!1===(0,f.c)(e))throw new o.D$(t,o.TX.InvalidParameter,n);switch((0,f.j)(e).toLowerCase()){case"preferredtimezone":return X(l[0].preferredTimeZone);case"editfieldsinfo":return X(null!==(s=null===(c=l[0].editFieldsInfo)||void 0===c?void 0:c.timeZone)&&void 0!==s?s:null);case"timeinfo":return X(null!==(u=null===(d=l[0].timeInfo)||void 0===d?void 0:d.timeZone)&&void 0!==u?u:null);case"field":if(l[1].hasField("fieldname")&&(0,f.c)(l[1].field("fieldname")))return X(l[0].fieldTimeZone((0,f.j)(l[1].field("fieldname"))))}throw new o.D$(t,o.TX.InvalidParameter,n)}const m=(0,f.l)(l[0],(0,f.N)(t));if(null===m)return null;const y=m.timeZone;return"system"===y?a.lY.systemTimeZoneCanonicalName:"utc"===y.toLowerCase()?"UTC":"unknown"===y.toLowerCase()?"Unknown":y}))},e.functions.sqltimestamp=function(t,n){return e.standardFunctionAsync(t,n,(async(e,a,i)=>{(0,f.H)(i,1,3,t,n);const r=i[0];if((0,f.k)(r)){if(1===i.length)return r.toSQLWithKeyword();if(2===i.length)return r.changeTimeZone((0,f.j)(i[1])).toSQLWithKeyword();throw new o.D$(t,o.TX.InvalidParameter,n)}if((0,f.m)(r))return r.toSQLWithKeyword();if((0,f.u)(r)){if(3!==i.length)throw new o.D$(t,o.TX.InvalidParameter,n);await r.load();const e=(0,f.j)(i[1]);if((0,f.m)(i[2]))return i[2].toSQLWithKeyword();if(!1===(0,f.k)(i[2]))throw new o.D$(t,o.TX.InvalidParameter,n);const a=r.fieldTimeZone(e);return null===a?i[2].toSQLWithKeyword():i[2].changeTimeZone(a).toSQLWithKeyword()}throw new o.D$(t,o.TX.InvalidParameter,n)}))},e.signatures.push({name:"sqltimestamp",min:2,max:4}),e.functions.featuresetbyid=function(t,n){return e.standardFunctionAsync(t,n,((e,a,i)=>{if((0,f.H)(i,2,4,t,n),i[0]instanceof s.A){const e=(0,f.j)(i[1]);let a=(0,f.K)(i[2],null);const r=(0,f.h)((0,f.K)(i[3],!0));if(null===a&&(a=["*"]),!1===(0,f.o)(a))throw new o.D$(t,o.TX.InvalidParameter,n);return i[0].featureSetById(e,r,a)}throw new o.D$(t,o.TX.InvalidParameter,n)}))},e.signatures.push({name:"featuresetbyid",min:2,max:4}),e.functions.getfeatureset=function(t,n){return e.standardFunctionAsync(t,n,((e,a,i)=>{if((0,f.H)(i,1,2,t,n),(0,f.r)(i[0])){let e=(0,f.K)(i[1],"datasource");return null===e&&(e="datasource"),e=(0,f.j)(e).toLowerCase(),(0,c.convertToFeatureSet)(i[0].fullSchema(),e,t.lrucache,t.interceptor,t.spatialReference)}throw new o.D$(t,o.TX.InvalidParameter,n)}))},e.signatures.push({name:"getfeatureset",min:1,max:2}),e.functions.featuresetbyportalitem=function(t,n){return e.standardFunctionAsync(t,n,((e,a,r)=>{var l,s;if((0,f.H)(r,2,5,t,n),null===r[0])throw new o.D$(t,o.TX.PortalRequired,n);if(r[0]instanceof i.A){var u;const e=(0,f.j)(r[1]),a=(0,f.j)(r[2]);let i=(0,f.K)(r[3],null);const l=(0,f.h)((0,f.K)(r[4],!0));if(null===i&&(i=["*"]),!1===(0,f.o)(i))throw new o.D$(t,o.TX.InvalidParameter,n);let s=null;return s=null!==(u=t.services)&&void 0!==u&&u.portal?t.services.portal:C.A.getDefault(),s=(0,d.R)(r[0],s),(0,c.constructFeatureSetFromPortalItem)(e,a,t.spatialReference,i,l,s,t.lrucache,t.interceptor)}if(!1===(0,f.c)(r[0]))throw new o.D$(t,o.TX.PortalRequired,n);const m=(0,f.j)(r[0]),y=(0,f.j)(r[1]);let h=(0,f.K)(r[2],null);const p=(0,f.h)((0,f.K)(r[3],!0));if(null===h&&(h=["*"]),!1===(0,f.o)(h))throw new o.D$(t,o.TX.InvalidParameter,n);return(0,c.constructFeatureSetFromPortalItem)(m,y,t.spatialReference,h,p,null!==(l=null===(s=t.services)||void 0===s?void 0:s.portal)&&void 0!==l?l:C.A.getDefault(),t.lrucache,t.interceptor)}))},e.signatures.push({name:"featuresetbyportalitem",min:2,max:5}),e.functions.featuresetbyname=function(t,n){return e.standardFunctionAsync(t,n,((e,a,i)=>{if((0,f.H)(i,2,4,t,n),i[0]instanceof s.A){const e=(0,f.j)(i[1]);let a=(0,f.K)(i[2],null);const r=(0,f.h)((0,f.K)(i[3],!0));if(null===a&&(a=["*"]),!1===(0,f.o)(a))throw new o.D$(t,o.TX.InvalidParameter,n);return i[0].featureSetByName(e,r,a)}throw new o.D$(t,o.TX.InvalidParameter,n)}))},e.signatures.push({name:"featuresetbyname",min:2,max:4}),e.functions.featureset=function(t,n){return e.standardFunction(t,n,((e,a,i)=>{var l;(0,f.H)(i,1,1,t,n);let s=i[0];const c={layerDefinition:{geometryType:"",objectIdField:"",hasM:!1,hasZ:!1,globalIdField:"",typeIdField:"",fields:[]},featureSet:{geometryType:"",features:[]}};if((0,f.c)(s))s=JSON.parse(s),void 0!==s.layerDefinition?(c.layerDefinition=s.layerDefinition,c.featureSet=s.featureSet,s.layerDefinition.spatialReference&&(c.layerDefinition.spatialReference=s.layerDefinition.spatialReference)):(c.featureSet.features=s.features,c.featureSet.geometryType=s.geometryType,c.layerDefinition.geometryType=c.featureSet.geometryType,c.layerDefinition.objectIdField=null!==(l=s.objectIdFieldName)&&void 0!==l?l:"",c.layerDefinition.typeIdField=s.typeIdFieldName,c.layerDefinition.globalIdField=s.globalIdFieldName,c.layerDefinition.fields=s.fields,s.spatialReference&&(c.layerDefinition.spatialReference=s.spatialReference));else{if(!(i[0]instanceof r.A))throw new o.D$(t,o.TX.InvalidParameter,n);{s=JSON.parse(i[0].castToText(!0));const e=S(s,"layerdefinition");if(null!==e){c.layerDefinition.geometryType=S(e,"geometrytype",""),c.featureSet.geometryType=c.layerDefinition.geometryType,c.layerDefinition.globalIdField=S(e,"globalidfield",""),c.layerDefinition.objectIdField=S(e,"objectidfield",""),c.layerDefinition.typeIdField=S(e,"typeidfield",""),c.layerDefinition.hasZ=!0===S(e,"hasz",!1),c.layerDefinition.hasM=!0===S(e,"hasm",!1);const t=S(e,"spatialreference",null);t&&(c.layerDefinition.spatialReference=L(t));for(const a of S(e,"fields",[])){const e={name:S(a,"name",""),alias:S(a,"alias",""),type:S(a,"type",""),nullable:S(a,"nullable",!0),editable:S(a,"editable",!0),length:S(a,"length",null),domain:x(S(a,"domain"))};c.layerDefinition.fields.push(e)}const n=S(s,"featureset",null);if(n){const e={};for(const t of c.layerDefinition.fields)e[t.name.toLowerCase()]=t.name;for(const t of S(n,"features",[])){const n={},a=S(t,"attributes",{});for(const t in a)n[e[t.toLowerCase()]]=a[t];c.featureSet.features.push({attributes:n,geometry:P(S(t,"geometry",null))})}}}else{c.layerDefinition.hasZ=!0===S(s,"hasz",!1),c.layerDefinition.hasM=!0===S(s,"hasm",!1),c.layerDefinition.geometryType=S(s,"geometrytype",""),c.featureSet.geometryType=c.layerDefinition.geometryType,c.layerDefinition.objectIdField=S(s,"objectidfieldname",""),c.layerDefinition.typeIdField=S(s,"typeidfieldname","");const e=S(s,"spatialreference",null);e&&(c.layerDefinition.spatialReference=L(e));let t=S(s,"fields",null);if((0,f.o)(t))for(const i of t){const e={name:S(i,"name",""),alias:S(i,"alias",""),type:S(i,"type",""),nullable:S(i,"nullable",!0),editable:S(i,"editable",!0),length:S(i,"length",null),domain:x(S(i,"domain"))};c.layerDefinition.fields.push(e)}else t=null,c.layerDefinition.fields=t;const n={};for(const i of c.layerDefinition.fields)n[i.name.toLowerCase()]=i.name;let a=S(s,"features",null);if((0,f.o)(a))for(const i of a){const e={},t=S(i,"attributes",{});for(const a in t)e[n[a.toLowerCase()]]=t[a];c.featureSet.features.push({attributes:e,geometry:P(S(i,"geometry",null))})}else a=null,c.featureSet.features=a}}}if(!1===function(e){return!!e.layerDefinition&&!!e.featureSet&&!1!==function(e,t){for(const n of t)if(n===e)return!0;return!1}(e.layerDefinition.geometryType,["",null,"esriGeometryNull","esriGeometryPoint","esriGeometryPolyline","esriGeometryPolygon","esriGeometryMultipoint","esriGeometryEnvelope"])&&!1!==(0,f.o)(e.layerDefinition.fields)&&!1!==(0,f.o)(e.featureSet.features)}(c))throw new o.D$(t,o.TX.InvalidParameter,n);return c.layerDefinition.geometryType||(c.layerDefinition.geometryType="esriGeometryNull"),g.A.create(c,t.spatialReference)}))},e.signatures.push({name:"featureset",min:1,max:1}),e.functions.filter=function(t,n){return e.standardFunctionAsync(t,n,(async(a,i,r)=>{if((0,f.H)(r,2,2,t,n),(0,f.o)(r[0])||(0,f.q)(r[0])){const e=[];let a=r[0];a instanceof u.A&&(a=a.toArray());let i=null;if(!(0,f.i)(r[1]))throw new o.D$(t,o.TX.InvalidParameter,n);i=r[1].createFunction(t);for(const t of a){const n=i(t);(0,A.$X)(n)?!0===await n&&e.push(t):!0===n&&e.push(t)}return e}if((0,f.u)(r[0])){const n=await r[0].load(),a=b.WhereClause.create(r[1],n.getFieldsIndex(),n.dateFieldsTimeZoneDefaultUTC),i=a.getVariables();if(i.length>0){const n=[];for(let a=0;a<i.length;a++){const r={name:i[a]};n.push(await e.evaluateIdentifier(t,r))}const o={};for(let e=0;e<i.length;e++)o[i[e]]=n[e];return a.parameters=o,new y.A({parentfeatureset:r[0],whereclause:a})}return new y.A({parentfeatureset:r[0],whereclause:a})}throw new o.D$(t,o.TX.InvalidParameter,n)}))},e.signatures.push({name:"filter",min:2,max:2}),e.functions.orderby=function(t,n){return e.standardFunctionAsync(t,n,(async(e,a,i)=>{if((0,f.H)(i,2,2,t,n),(0,f.u)(i[0])){const e=new F.A(i[1]);return new h.A({parentfeatureset:i[0],orderbyclause:e})}throw new o.D$(t,o.TX.InvalidParameter,n)}))},e.signatures.push({name:"orderby",min:2,max:2}),e.functions.top=function(t,n){return e.standardFunctionAsync(t,n,(async(e,a,i)=>{if((0,f.H)(i,2,2,t,n),(0,f.u)(i[0]))return new p.A({parentfeatureset:i[0],topnum:i[1]});if((0,f.o)(i[0]))return(0,f.g)(i[1])>=i[0].length?i[0].slice(0):i[0].slice(0,(0,f.g)(i[1]));if((0,f.q)(i[0]))return(0,f.g)(i[1])>=i[0].length()?i[0].slice(0):i[0].slice(0,(0,f.g)(i[1]));throw new o.D$(t,o.TX.InvalidParameter,n)}))},e.signatures.push({name:"top",min:2,max:2}),e.functions.first=function(t,n){return e.standardFunctionAsync(t,n,(async(e,a,i)=>{if((0,f.H)(i,1,1,t,n),(0,f.u)(i[0])){const n=await i[0].first(e.abortSignal);if(null!==n){const e=l.A.createFromGraphicLikeObject(n.geometry,n.attributes,i[0],t.timeZone);return e._underlyingGraphic=n,e}return n}return(0,f.o)(i[0])?0===i[0].length?null:i[0][0]:(0,f.q)(i[0])?0===i[0].length()?null:i[0].get(0):null}))},e.signatures.push({name:"first",min:1,max:1}),e.functions.attachments=function(t,n){return e.standardFunctionAsync(t,n,(async(e,a,i)=>{(0,f.H)(i,1,2,t,n);const l={minsize:-1,maxsize:-1,types:null,returnMetadata:!1};if(i.length>1)if(i[1]instanceof r.A){if(i[1].hasField("minsize")&&(l.minsize=(0,f.g)(i[1].field("minsize"))),i[1].hasField("metadata")&&(l.returnMetadata=(0,f.h)(i[1].field("metadata"))),i[1].hasField("maxsize")&&(l.maxsize=(0,f.g)(i[1].field("maxsize"))),i[1].hasField("types")){const e=(0,f.a3)(i[1].field("types"),!1);e.length>0&&(l.types=e)}}else if(null!==i[1])throw new o.D$(t,o.TX.InvalidParameter,n);if((0,f.r)(i[0])){let e=i[0]._layer;return e instanceof E.default&&(e=(0,c.constructFeatureSet)(e,t.spatialReference,["*"],!0,t.lrucache,t.interceptor)),null===e||!1===(0,f.u)(e)?[]:(await e.load(),e.queryAttachments(i[0].field(e.objectIdField),l.minsize,l.maxsize,l.types,l.returnMetadata))}if(null===i[0])return[];throw new o.D$(t,o.TX.InvalidParameter,n)}))},e.signatures.push({name:"attachments",min:1,max:2}),e.functions.featuresetbyrelationshipname=function(t,n){return e.standardFunctionAsync(t,n,(async(e,a,i)=>{(0,f.H)(i,2,4,t,n);const r=i[0],l=(0,f.j)(i[1]);let s=(0,f.K)(i[2],null);const u=(0,f.h)((0,f.K)(i[3],!0));if(null===s&&(s=["*"]),!1===(0,f.o)(s))throw new o.D$(t,o.TX.InvalidParameter,n);if(null===i[0])return null;if(!(0,f.r)(i[0]))throw new o.D$(t,o.TX.InvalidParameter,n);let d=r._layer;if(d instanceof E.default&&(d=(0,c.constructFeatureSet)(d,t.spatialReference,["*"],!0,t.lrucache,t.interceptor)),null===d)return null;if(!1===(0,f.u)(d))return null;d=await d.load();const m=d.relationshipMetaData().filter((e=>e.name===l));if(0===m.length)return null;if(void 0!==m[0].relationshipTableId&&null!==m[0].relationshipTableId&&m[0].relationshipTableId>-1)return(0,c.constructFeatureSetFromRelationship)(d,m[0],r.field(d.objectIdField),d.spatialReference,s,u,t.lrucache,t.interceptor);let y=d.serviceUrl();if(!y)return null;y="/"===y.charAt(y.length-1)?y+m[0].relatedTableId.toString():y+"/"+m[0].relatedTableId.toString();const h=await(0,c.constructFeatureSetFromUrl)(y,d.spatialReference,s,u,t.lrucache,t.interceptor);await h.load();let p=h.relationshipMetaData();if(p=p.filter((e=>e.id===m[0].id)),!1===r.hasField(m[0].keyField)||null===r.field(m[0].keyField)){const e=await d.getFeatureByObjectId(r.field(d.objectIdField),[m[0].keyField]);if(e){const t=b.WhereClause.create(p[0].keyField+"= @id",h.getFieldsIndex(),h.dateFieldsTimeZoneDefaultUTC);return t.parameters={id:e.attributes[m[0].keyField]},h.filter(t)}return new w.A({parentfeatureset:h})}const g=b.WhereClause.create(p[0].keyField+"= @id",h.getFieldsIndex(),h.dateFieldsTimeZoneDefaultUTC);return g.parameters={id:r.field(m[0].keyField)},h.filter(g)}))},e.signatures.push({name:"featuresetbyrelationshipname",min:2,max:4}),e.functions.featuresetbyassociation=function(t,n){return e.standardFunctionAsync(t,n,(async(e,a,i)=>{(0,f.H)(i,2,3,t,n);const r=i[0],l=(0,f.j)((0,f.K)(i[1],"")).toLowerCase(),s=(0,f.c)(i[2])?(0,f.j)(i[2]):null;if(null===i[0])return null;if(!(0,f.r)(i[0]))throw new o.D$(t,o.TX.InvalidParameter,n);let u=r._layer;if(u instanceof E.default&&(u=(0,c.constructFeatureSet)(u,t.spatialReference,["*"],!0,t.lrucache,t.interceptor)),null===u)return null;if(!1===(0,f.u)(u))return null;await u.load();const d=u.serviceUrl(),y=await(0,c.constructAssociationMetaDataFeatureSetFromUrl)(d,t.spatialReference);let h=null,p=null,w=!1;if(null!==s&&""!==s&&void 0!==s){for(const e of y.terminals)e.terminalName===s&&(p=e.terminalId);null===p&&(w=!0)}const g=y.associations.getFieldsIndex(),F=g.get("TOGLOBALID").name,T=g.get("FROMGLOBALID").name,I=g.get("TOTERMINALID").name,A=g.get("FROMTERMINALID").name,C=g.get("FROMNETWORKSOURCEID").name,N=g.get("TONETWORKSOURCEID").name,S=g.get("ASSOCIATIONTYPE").name,x=g.get("ISCONTENTVISIBLE").name,L=g.get("OBJECTID").name;for(const t of u.fields)if("global-id"===t.type){h=r.field(t.name);break}let P=null,X=new m.Gr(new v.A({name:"percentalong",alias:"percentalong",type:"double"}),b.WhereClause.create("0",y.associations.getFieldsIndex(),y.associations.dateFieldsTimeZoneDefaultUTC)),$=new m.Gr(new v.A({name:"side",alias:"side",type:"string"}),b.WhereClause.create("''",y.associations.getFieldsIndex(),y.associations.dateFieldsTimeZoneDefaultUTC));const k="globalid",R="globalId",Z={};for(const t in y.lkp)Z[t]=y.lkp[t].sourceId;const U=new m.bV(new v.A({name:"classname",alias:"classname",type:"string"}),null,Z);let W="";switch(l){case"midspan":{W="((".concat(F,"='").concat(h,"') OR ( ").concat(T,"='").concat(h,"')) AND (").concat(S," IN (5))"),U.codefield=b.WhereClause.create("CASE WHEN (".concat(F,"='").concat(h,"') THEN ").concat(C," ELSE ").concat(N," END"),y.associations.getFieldsIndex(),y.associations.dateFieldsTimeZoneDefaultUTC);const e=(0,D.ke)(m.a.findField(y.associations.fields,T));e.name=k,e.alias=k,P=new m.Gr(e,b.WhereClause.create("CASE WHEN (".concat(T,"='").concat(h,"') THEN ").concat(F," ELSE ").concat(T," END"),y.associations.getFieldsIndex(),y.associations.dateFieldsTimeZoneDefaultUTC)),X=y.unVersion>=4?new m.IO(m.a.findField(y.associations.fields,g.get("PERCENTALONG").name)):new m.Gr(new v.A({name:"percentalong",alias:"percentalong",type:"double"}),b.WhereClause.create("0",y.associations.getFieldsIndex(),y.associations.dateFieldsTimeZoneDefaultUTC));break}case"junctionedge":{W="((".concat(F,"='").concat(h,"') OR ( ").concat(T,"='").concat(h,"')) AND (").concat(S," IN (4,6))"),U.codefield=b.WhereClause.create("CASE WHEN (".concat(F,"='").concat(h,"') THEN ").concat(C," ELSE ").concat(N," END"),y.associations.getFieldsIndex(),y.associations.dateFieldsTimeZoneDefaultUTC);const e=(0,D.ke)(m.a.findField(y.associations.fields,T));e.name=k,e.alias=k,P=new m.Gr(e,b.WhereClause.create("CASE WHEN (".concat(T,"='").concat(h,"') THEN ").concat(F," ELSE ").concat(T," END"),y.associations.getFieldsIndex(),y.associations.dateFieldsTimeZoneDefaultUTC)),$=new m.Gr(new v.A({name:"side",alias:"side",type:"string"}),b.WhereClause.create("CASE WHEN (".concat(S,"=4) THEN 'from' ELSE 'to' END"),y.associations.getFieldsIndex(),y.associations.dateFieldsTimeZoneDefaultUTC));break}case"connected":{var M,j;let e="".concat(F,"='@T'"),t="".concat(T,"='@T'");null!==p&&(e+=" AND ".concat(I,"=@A"),t+=" AND ".concat(A,"=@A")),W="(("+e+") OR ("+t+"))",W=(0,f.T)(W,"@T",null!==(M=h)&&void 0!==M?M:""),e=(0,f.T)(e,"@T",null!==(j=h)&&void 0!==j?j:""),null!==p&&(e=(0,f.T)(e,"@A",p.toString()),W=(0,f.T)(W,"@A",p.toString())),U.codefield=b.WhereClause.create("CASE WHEN "+e+" THEN ".concat(C," ELSE ").concat(N," END"),y.associations.getFieldsIndex(),y.associations.dateFieldsTimeZoneDefaultUTC);const n=(0,D.ke)(m.a.findField(y.associations.fields,T));n.name=k,n.alias=k,P=new m.Gr(n,b.WhereClause.create("CASE WHEN "+e+" THEN ".concat(T," ELSE ").concat(F," END"),y.associations.getFieldsIndex(),y.associations.dateFieldsTimeZoneDefaultUTC));break}case"container":W="".concat(F,"='").concat(h,"' AND ").concat(S," = 2"),null!==p&&(W+=" AND ".concat(I," = ")+p.toString()),U.codefield=C,W="( "+W+" )",P=new m.p8(m.a.findField(y.associations.fields,T),k,k);break;case"content":W="(".concat(T,"='").concat(h,"' AND ").concat(S," = 2)"),null!==p&&(W+=" AND ".concat(A," = ")+p.toString()),U.codefield=N,W="( "+W+" )",P=new m.p8(m.a.findField(y.associations.fields,F),k,k);break;case"structure":W="(".concat(F,"='").concat(h,"' AND ").concat(S," = 3)"),null!==p&&(W+=" AND ".concat(I," = ")+p.toString()),U.codefield=C,W="( "+W+" )",P=new m.p8(m.a.findField(y.associations.fields,T),k,R);break;case"attached":W="(".concat(T,"='").concat(h,"' AND ").concat(S," = 3)"),null!==p&&(W+=" AND ".concat(A," = ")+p.toString()),U.codefield=N,W="( "+W+" )",P=new m.p8(m.a.findField(y.associations.fields,F),k,R);break;default:throw new o.D$(t,o.TX.InvalidParameter,n)}return w&&(W="1 <> 1"),new m.a({parentfeatureset:y.associations,adaptedFields:[new m.IO(m.a.findField(y.associations.fields,L)),new m.IO(m.a.findField(y.associations.fields,x)),P,$,U,X],extraFilter:W?b.WhereClause.create(W,y.associations.getFieldsIndex(),y.associations.dateFieldsTimeZoneDefaultUTC):null})}))},e.signatures.push({name:"featuresetbyassociation",min:2,max:6}),e.functions.groupby=function(t,n){return e.standardFunctionAsync(t,n,(async(a,i,l)=>{if((0,f.H)(l,3,3,t,n),!(0,f.u)(l[0]))throw new o.D$(t,o.TX.InvalidParameter,n);const s=await l[0].load(),c=[],u=[];let d=!1,m=[];if((0,f.c)(l[1]))m.push(l[1]);else if(l[1]instanceof r.A)m.push(l[1]);else if((0,f.o)(l[1]))m=l[1];else{if(!(0,f.q)(l[1]))throw new o.D$(t,o.TX.InvalidParameter,n);m=l[1].toArray()}for(const e of m)if((0,f.c)(e)){const t=b.WhereClause.create((0,f.j)(e),s.getFieldsIndex(),s.dateFieldsTimeZoneDefaultUTC),n=!0===(0,T.DA)(t)?(0,f.j)(e):"%%%%FIELDNAME";c.push({name:n,expression:t}),"%%%%FIELDNAME"===n&&(d=!0)}else{if(!(e instanceof r.A))throw new o.D$(t,o.TX.InvalidParameter,n);{const a=e.hasField("name")?e.field("name"):"%%%%FIELDNAME",i=e.hasField("expression")?e.field("expression"):"";if("%%%%FIELDNAME"===a&&(d=!0),!a)throw new o.D$(t,o.TX.InvalidParameter,n);c.push({name:a,expression:b.WhereClause.create(i||a,s.getFieldsIndex(),s.dateFieldsTimeZoneDefaultUTC)})}}if(m=[],(0,f.c)(l[2]))m.push(l[2]);else if((0,f.o)(l[2]))m=l[2];else if((0,f.q)(l[2]))m=l[2].toArray();else{if(!(l[2]instanceof r.A))throw new o.D$(t,o.TX.InvalidParameter,n);m.push(l[2])}for(const e of m){if(!(e instanceof r.A))throw new o.D$(t,o.TX.InvalidParameter,n);{const a=e.hasField("name")?e.field("name"):"",i=e.hasField("statistic")?e.field("statistic"):"",r=e.hasField("expression")?e.field("expression"):"";if(!a||!i||!r)throw new o.D$(t,o.TX.InvalidParameter,n);u.push({name:a,statistic:i.toLowerCase(),expression:b.WhereClause.create(r,s.getFieldsIndex(),s.dateFieldsTimeZoneDefaultUTC)})}}if(d){const e={};for(const n of s.fields)e[n.name.toLowerCase()]=1;for(const n of c)"%%%%FIELDNAME"!==n.name&&(e[n.name.toLowerCase()]=1);for(const n of u)"%%%%FIELDNAME"!==n.name&&(e[n.name.toLowerCase()]=1);let t=0;for(const n of c)if("%%%%FIELDNAME"===n.name){for(;1===e["field_"+t.toString()];)t++;e["field_"+t.toString()]=1,n.name="FIELD_"+t.toString()}}for(const n of c)await N(n.expression,e,t);for(const n of u)await N(n.expression,e,t);return l[0].groupby(c,u)}))},e.signatures.push({name:"groupby",min:3,max:3}),e.functions.distinct=function(t,n){return e.standardFunctionAsync(t,n,(async(a,i,l)=>{if((0,f.u)(l[0])){(0,f.H)(l,2,2,t,n);const a=await l[0].load(),i=[];let s=[];if((0,f.c)(l[1]))s.push(l[1]);else if(l[1]instanceof r.A)s.push(l[1]);else if((0,f.o)(l[1]))s=l[1];else{if(!(0,f.q)(l[1]))throw new o.D$(t,o.TX.InvalidParameter,n);s=l[1].toArray()}let c=!1;for(const e of s)if((0,f.c)(e)){const t=b.WhereClause.create((0,f.j)(e),a.getFieldsIndex(),a.dateFieldsTimeZoneDefaultUTC),n=!0===(0,T.DA)(t)?(0,f.j)(e):"%%%%FIELDNAME";i.push({name:n,expression:t}),"%%%%FIELDNAME"===n&&(c=!0)}else{if(!(e instanceof r.A))throw new o.D$(t,o.TX.InvalidParameter,n);{const r=e.hasField("name")?e.field("name"):"%%%%FIELDNAME",l=e.hasField("expression")?e.field("expression"):"";if("%%%%FIELDNAME"===r&&(c=!0),!r)throw new o.D$(t,o.TX.InvalidParameter,n);i.push({name:r,expression:b.WhereClause.create(l||r,a.getFieldsIndex(),a.dateFieldsTimeZoneDefaultUTC)})}}if(c){const e={};for(const n of a.fields)e[n.name.toLowerCase()]=1;for(const n of i)"%%%%FIELDNAME"!==n.name&&(e[n.name.toLowerCase()]=1);let t=0;for(const n of i)if("%%%%FIELDNAME"===n.name){for(;1===e["field_"+t.toString()];)t++;e["field_"+t.toString()]=1,n.name="FIELD_"+t.toString()}}for(const n of i)await N(n.expression,e,t);return l[0].groupby(i,[])}return function(e,t,n,a){if(1===a.length){if((0,f.o)(a[0]))return(0,I.t)(e,a[0],-1);if((0,f.q)(a[0]))return(0,I.t)(e,a[0].toArray(),-1)}return(0,I.t)(e,a,-1)}("distinct",0,0,l)}))}),e.functions.getfeaturesetinfo=function(t,n){return e.standardFunctionAsync(t,n,(async(e,a,i)=>{var o,l;if((0,f.H)(i,1,1,t,n),!(0,f.u)(i[0]))return null;const s=await i[0].getFeatureSetInfo();return s?r.A.convertObjectToArcadeDictionary({layerId:s.layerId,layerName:s.layerName,itemId:s.itemId,serviceLayerUrl:s.serviceLayerUrl,webMapLayerId:null!==(o=s.webMapLayerId)&&void 0!==o?o:null,webMapLayerTitle:null!==(l=s.webMapLayerTitle)&&void 0!==l?l:null,className:null,objectClassId:null},(0,f.N)(t),!1,!1):null}))},e.signatures.push({name:"getfeaturesetinfo",min:1,max:1}),e.functions.filterbysubtypecode=function(t,n){return e.standardFunctionAsync(t,n,(async(e,a,i)=>{if((0,f.H)(i,2,2,t,n),(0,f.u)(i[0])){const e=await i[0].load(),a=i[1];if(!(0,f.O)(a))throw new o.D$(t,o.TX.InvalidParameter,n);if(e.subtypeField){const t=b.WhereClause.create("".concat(e.subtypeField,"= ").concat(i[1]),e.getFieldsIndex(),e.dateFieldsTimeZoneDefaultUTC);return new y.A({parentfeatureset:i[0],whereclause:t})}if(null===e.typeIdField||""===e.typeIdField)throw new o.D$(t,o.TX.FeatureSetDoesNotHaveSubtypes,n);const r=b.WhereClause.create("".concat(e.typeIdField,"= ").concat(i[1]),e.getFieldsIndex(),e.dateFieldsTimeZoneDefaultUTC);return new y.A({parentfeatureset:i[0],whereclause:r})}throw new o.D$(t,o.TX.InvalidParameter,n)}))},e.signatures.push({name:"filterbysubtypecode",min:2,max:2})}},45018:(e,t,n)=>{n.d(t,{R:()=>i});var a=n(65308);function i(e,t){return null===e?t:new a.A({url:e.field("url")})}}}]);
//# sourceMappingURL=5908.f09117fe.chunk.js.map