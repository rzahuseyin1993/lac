"use strict";(self.webpackChunklac=self.webpackChunklac||[]).push([[9483],{39483:(e,t,r)=>{r.r(t),r.d(t,{getGeometryServiceURL:()=>l,projectGeometry:()=>c});var o=r(86560),n=r(50076),i=r(65308),a=r(71334),s=r(70414);async function l(){var e;let t,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=arguments.length>1?arguments[1]:void 0;if(o.A.geometryServiceUrl)return o.A.geometryServiceUrl;if(!r)throw new n.A("internal:geometry-service-url-not-configured");t="portal"in r?r.portal||i.A.getDefault():r,await t.load({signal:a});const s=null===(e=t.helperServices)||void 0===e||null===(e=e.geometry)||void 0===e?void 0:e.url;if(!s)throw new n.A("internal:geometry-service-url-not-configured");return s}async function c(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments.length>3?arguments[3]:void 0;const i=await l(r,o),c=new s.A;c.geometries=[e],c.outSpatialReference=t;const u=await(0,a.C)(i,c,{signal:o});if(u&&Array.isArray(u)&&1===u.length)return u[0];throw new n.A("internal:geometry-service-projection-failed")}},71334:(e,t,r)=>{r.d(t,{C:()=>u});var o=r(3825),n=r(40565),i=r(19902),a=r(54994),s=r(71838),l=r(70414);const c=(0,n.dp)(l.A);async function u(e,t,r){t=c(t);const n=(0,a.Dl)(e),l={...n.query,f:"json",...t.toJSON()},u=t.outSpatialReference,f=(0,i.$B)(t.geometries[0]),m=(0,a.jV)(l,r);return(0,o.A)(n.path+"/project",m).then((e=>{let{data:{geometries:t}}=e;return(0,s.V)(t,f,u)}))}},70414:(e,t,r)=>{r.d(t,{A:()=>u});var o=r(35143),n=r(42553),i=r(46053),a=(r(81806),r(76460),r(47249),r(85842)),s=r(19902),l=r(80963);let c=class extends n.oY{constructor(e){super(e),this.geometries=[],this.outSpatialReference=null,this.transformation=null,this.transformForward=null}toJSON(){const e=this.geometries.map((e=>e.toJSON())),t=this.geometries[0],r={};return r.outSR=(0,l.YX)(this.outSpatialReference),r.inSR=(0,l.YX)(t.spatialReference),r.geometries=JSON.stringify({geometryType:(0,s.$B)(t),geometries:e}),this.transformation&&(r.transformation=this.transformation.wkid||JSON.stringify(this.transformation)),null!=this.transformForward&&(r.transformForward=this.transformForward),r}};(0,o._)([(0,i.MZ)()],c.prototype,"geometries",void 0),(0,o._)([(0,i.MZ)({json:{read:{source:"outSR"}}})],c.prototype,"outSpatialReference",void 0),(0,o._)([(0,i.MZ)()],c.prototype,"transformation",void 0),(0,o._)([(0,i.MZ)()],c.prototype,"transformForward",void 0),c=(0,o._)([(0,a.$)("esri.rest.support.ProjectParameters")],c);const u=c}}]);
//# sourceMappingURL=9483.62bdbb4f.chunk.js.map