"use strict";(self.webpackChunklac=self.webpackChunklac||[]).push([[4504],{44504:(e,r,t)=>{t.r(r),t.d(r,{default:()=>v});t(35238);var s=t(64681),o=t(4081),i=t(37267),l=t(52494),n=t(96997),a=t(59844),c=t(86866),m=t(99846),u=t(31650),f=t(20118),d=t(46533),p=t(76797),S=t(13904);class v{convertVectorFieldData(e){const r=o.A.fromJSON(e.pixelBlock),t=(0,m.FI)(r,e.type);return Promise.resolve(null!=t?t.toJSON():null)}computeStatisticsHistograms(e){const r=o.A.fromJSON(e.pixelBlock),t=(0,c.eH)(r);return Promise.resolve(t)}async decode(e){const r=await(0,i.D)(e.data,e.options);return r&&r.toJSON()}symbolize(e){e.pixelBlock=o.A.fromJSON(e.pixelBlock),e.extent=e.extent?p.A.fromJSON(e.extent):null;const r=this.symbolizer.symbolize(e);return Promise.resolve(null!=r?r.toJSON():null)}async updateSymbolizer(e){var r;this.symbolizer=f.A.fromJSON(e.symbolizerJSON),e.histograms&&"rasterStretch"===(null===(r=this.symbolizer)||void 0===r?void 0:r.rendererJSON.type)&&(this.symbolizer.rendererJSON.histograms=e.histograms)}async updateRasterFunction(e){this.rasterFunction=(0,n.vt)(e.rasterFunctionJSON)}async process(e){var r;const t=this.rasterFunction.process({extent:p.A.fromJSON(e.extent),primaryPixelBlocks:e.primaryPixelBlocks.map((e=>null!=e?o.A.fromJSON(e):null)),primaryPixelSizes:null===(r=e.primaryPixelSizes)||void 0===r?void 0:r.map((e=>null!=e?S.A.fromJSON(e):null)),primaryRasterIds:e.primaryRasterIds});return null!=t?t.toJSON():null}stretch(e){const r=this.symbolizer.simpleStretch(o.A.fromJSON(e.srcPixelBlock),e.stretchParams);return Promise.resolve(null===r||void 0===r?void 0:r.toJSON())}estimateStatisticsHistograms(e){const r=(0,c.f4)(o.A.fromJSON(e.srcPixelBlock));return Promise.resolve(r)}split(e){var r;const t=(0,l.lD)(o.A.fromJSON(e.srcPixelBlock),e.tileSize,null!==(r=e.maximumPyramidLevel)&&void 0!==r?r:0,!1===e.useBilinear);return t&&t.forEach(((e,r)=>{t.set(r,null===e||void 0===e?void 0:e.toJSON())})),Promise.resolve(t)}clipTile(e){const r=o.A.fromJSON(e.pixelBlock),t=(0,l.J$)({...e,pixelBlock:r});return Promise.resolve(null===t||void 0===t?void 0:t.toJSON())}async mosaicAndTransform(e){var r;const t=e.srcPixelBlocks.map((e=>e?new o.A(e):null)),s=(0,l.z7)(t,e.srcMosaicSize,{blockWidths:e.blockWidths,alignmentInfo:e.alignmentInfo,clipOffset:e.clipOffset,clipSize:e.clipSize});let i,n=s;return e.coefs&&(n=(0,l.$i)(s,e.destDimension,e.coefs,e.sampleSpacing,e.interpolation)),e.projectDirections&&e.gcsGrid&&(i=(0,l.QF)(e.destDimension,e.gcsGrid),n=(0,m.Y2)(n,e.isUV?"vector-uv":"vector-magdir",i)),{pixelBlock:null===(r=n)||void 0===r?void 0:r.toJSON(),localNorthDirections:i}}async createFlowMesh(e,r){const t={data:new Float32Array(e.flowData.buffer),mask:new Uint8Array(e.flowData.maskBuffer),width:e.flowData.width,height:e.flowData.height},{vertexData:s,indexData:o}=await(0,d.CW)(e.meshType,e.simulationSettings,t,r.signal);return{result:{vertexBuffer:s.buffer,indexBuffer:o.buffer},transferList:[s.buffer,o.buffer]}}async getProjectionOffsetGrid(e){const r=p.A.fromJSON(e.projectedExtent),t=p.A.fromJSON(e.srcBufferExtent);let o=null;e.datumTransformationSteps&&(o=new s.A({steps:e.datumTransformationSteps})),(e.includeGCSGrid||(0,a.xh)(r.spatialReference,t.spatialReference,o))&&await(0,a.Hh)();const i=e.rasterTransform?(0,u.l)(e.rasterTransform):null;return(0,a.l0)({...e,projectedExtent:r,srcBufferExtent:t,datumTransformation:o,rasterTransform:i})}}}}]);
//# sourceMappingURL=4504.587ca1bb.chunk.js.map