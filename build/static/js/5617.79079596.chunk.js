"use strict";(self.webpackChunklac=self.webpackChunklac||[]).push([[5617],{35617:(e,n,t)=>{t.r(n),t.d(n,{hydratedAdapter:()=>r});var a=t(76797),o=t(66388),s=t(13904),c=t(65215),i=t(23701);const r={convertToGEGeometry:function(e,n){if(null==n)return null;let t="cache"in n?n.cache._geVersion:void 0;return null==t&&(t=e.convertJSONToGeometry(n),"cache"in n&&(n.cache._geVersion=t)),t},exportPoint:function(e,n,t){const a=e.hasZ(n),o=e.hasM(n),c=new s.A({x:e.getPointX(n),y:e.getPointY(n),spatialReference:t});return a&&(c.z=e.getPointZ(n)),o&&(c.m=e.getPointM(n)),c.cache._geVersion=n,c},exportPolygon:function(e,n,t){const a=new c.A({rings:e.exportPaths(n),hasZ:e.hasZ(n),hasM:e.hasM(n),spatialReference:t});return a.cache._geVersion=n,a},exportPolyline:function(e,n,t){const a=new i.A({paths:e.exportPaths(n),hasZ:e.hasZ(n),hasM:e.hasM(n),spatialReference:t});return a.cache._geVersion=n,a},exportMultipoint:function(e,n,t){const a=new o.A({hasZ:e.hasZ(n),hasM:e.hasM(n),points:e.exportPoints(n),spatialReference:t});return a.cache._geVersion=n,a},exportExtent:function(e,n,t){const o=e.hasZ(n),s=e.hasM(n),c=new a.A({xmin:e.getXMin(n),ymin:e.getYMin(n),xmax:e.getXMax(n),ymax:e.getYMax(n),spatialReference:t});if(o){const t=e.getZExtent(n);c.zmin=t.vmin,c.zmax=t.vmax}if(s){const t=e.getMExtent(n);c.mmin=t.vmin,c.mmax=t.vmax}return c.cache._geVersion=n,c}}}}]);
//# sourceMappingURL=5617.79079596.chunk.js.map