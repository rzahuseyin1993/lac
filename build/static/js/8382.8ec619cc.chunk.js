"use strict";(self.webpackChunklac=self.webpackChunklac||[]).push([[8382],{1420:(e,t,i)=>{i.d(t,{g:()=>u});var s=i(35143),r=i(91967),a=i(34154),o=i(46053),n=(i(81806),i(76460),i(47249),i(85842)),h=i(68002),l=i(55053),p=i(46530),d=i(65419);const c={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};let u=class extends r.A{constructor(e){super(e),this.floors=null,this.scale=0}destroy(){this.layer=null}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const e=this.visibleSublayers.map((e=>{const t=(0,p.f)(this.floors,e);return e.toExportImageJSON(t)}));return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&(0,d.Sk)(this.visibleSublayers,this.layer.serviceSublayers,this.layer.gdbVersion)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.removeHandles("layer"),e&&this.addHandles([e.allSublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("sublayer-update",(e=>this.notifyChange(c[e.propertyName])))],"layer"))}get layers(){const e=this.visibleSublayers;return e?e.length?"show:"+e.map((e=>e.id)).join(","):"show:-1":null}get layerDefs(){var e;const t=!(null===(e=this.floors)||void 0===e||!e.length),i=this.visibleSublayers.filter((e=>null!=e.definitionExpression||t&&null!=e.floorInfo));return i.length?JSON.stringify(i.reduce(((e,t)=>{const i=(0,p.f)(this.floors,t),s=(0,a.m)(i,t.definitionExpression);return null!=s&&(e[t.id]=s),e}),{})):null}get version(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers"),this.commitProperty("timeExtent");const e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}get visibleSublayers(){const e=[];if(!this.layer)return e;const t=this.layer.sublayers,i=this.scale,s=t=>{t.visible&&(0===i||(0,h.zx)(i,t.minScale,t.maxScale))&&(t.sublayers?t.sublayers.forEach(s):e.unshift(t))};t&&t.forEach(s);const r=this._get("visibleSublayers");return!r||r.length!==e.length||r.some(((t,i)=>e[i]!==t))?e:r}toJSON(){const e=this.layer;let t={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?t.dynamicLayers=this.dynamicLayers:t={...t,layers:this.layers,layerDefs:this.layerDefs},t}};(0,s._)([(0,o.MZ)({readOnly:!0})],u.prototype,"dynamicLayers",null),(0,s._)([(0,o.MZ)()],u.prototype,"floors",void 0),(0,s._)([(0,o.MZ)({readOnly:!0})],u.prototype,"hasDynamicLayers",null),(0,s._)([(0,o.MZ)()],u.prototype,"layer",null),(0,s._)([(0,o.MZ)({readOnly:!0})],u.prototype,"layers",null),(0,s._)([(0,o.MZ)({readOnly:!0})],u.prototype,"layerDefs",null),(0,s._)([(0,o.MZ)({type:Number})],u.prototype,"scale",void 0),(0,s._)([(0,o.MZ)(l.ui)],u.prototype,"timeExtent",void 0),(0,s._)([(0,o.MZ)({readOnly:!0})],u.prototype,"version",null),(0,s._)([(0,o.MZ)({readOnly:!0})],u.prototype,"visibleSublayers",null),u=(0,s._)([(0,n.$)("esri.layers.mixins.ExportImageParameters")],u)},14509:(e,t,i)=>{i.d(t,{l:()=>o});var s=i(69139),r=i(61551),a=i(36201);class o extends a.A{constructor(){super(...arguments),this._hasCrossfade=!1}get requiresDedicatedFBO(){return super.requiresDedicatedFBO||this._hasCrossfade}beforeRender(e){super.beforeRender(e),this._manageFade()}prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap",brushes:[s.d.bitmap],target:()=>this.children,drawPhase:r.S5.MAP});return[...super.prepareRenderPasses(e),t]}_manageFade(){this.children.reduce(((e,t)=>e+(t.inFadeTransition?1:0)),0)>=2?(this.children.forEach((e=>e.blendFunction="additive")),this._hasCrossfade=!0):(this.children.forEach((e=>e.blendFunction="standard")),this._hasCrossfade=!1)}}},18382:(e,t,i)=>{i.r(t),i.d(t,{default:()=>S});var s=i(35143),r=i(76460),a=i(50346),o=i(68134),n=i(46053),h=(i(81806),i(47249),i(85842)),l=i(64519),p=i(14509),d=i(90104),c=i(45992),u=i(70822),y=i(4176),m=i(91196),g=i(55053),f=i(1420);const _=e=>{let t=class extends e{initialize(){this.exportImageParameters=new f.g({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get floors(){var e,t;return null!==(e=null===(t=this.view)||void 0===t?void 0:t.floors)&&void 0!==e?e:null}get exportImageVersion(){var e;return null!==(e=this.exportImageParameters)&&void 0!==e&&e.commitProperty("version"),this.commitProperty("timeExtent"),this.commitProperty("floors"),(this._get("exportImageVersion")||0)+1}canResume(){var e;return!!super.canResume()&&!(null!==(e=this.timeExtent)&&void 0!==e&&e.isEmpty)}};return(0,s._)([(0,n.MZ)()],t.prototype,"exportImageParameters",void 0),(0,s._)([(0,n.MZ)({readOnly:!0})],t.prototype,"floors",null),(0,s._)([(0,n.MZ)({readOnly:!0})],t.prototype,"exportImageVersion",null),(0,s._)([(0,n.MZ)()],t.prototype,"layer",void 0),(0,s._)([(0,n.MZ)()],t.prototype,"suspended",void 0),(0,s._)([(0,n.MZ)(g.ui)],t.prototype,"timeExtent",void 0),t=(0,s._)([(0,h.$)("esri.views.layers.MapImageLayerView")],t),t};var v=i(771),x=i(93080),b=i(55754);let M=class extends(_((0,v.A)((0,d.e)(m.A)))){constructor(){super(...arguments),this._highlightGraphics=new l.Y,this._updateHash=""}fetchPopupFeaturesAtLocation(e,t){return this._popupHighlightHelper.fetchPopupFeaturesAtLocation(e,t)}update(e){const t="".concat(this.exportImageVersion,"/").concat(e.state.id,"/").concat(e.pixelRatio,"/").concat(e.stationary);this._updateHash!==t&&(this._updateHash=t,this.strategy.update(e).catch((e=>{(0,a.zf)(e)||r.A.getLogger(this).error(e)})),e.stationary&&this._popupHighlightHelper.updateHighlightedFeatures(e.state.resolution)),this._highlightView.processUpdate(e)}attach(){const{imageMaxWidth:e,imageMaxHeight:t,version:i}=this.layer,s=i>=10.3,r=i>=10;this._bitmapContainer=new p.l,this.container.addChild(this._bitmapContainer),this._highlightView=new c.A({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new u.A(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1}),this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new x.Uh({createFetchPopupFeaturesQueryGeometry:(e,t)=>(0,b.V)(e,t,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(e,t)=>{this._highlightView.graphicUpdateHandler({graphic:e,property:t})},layerView:this,updatingHandles:this._updatingHandles}),this.strategy=new y.A({container:this._bitmapContainer,fetchSource:this.fetchImageBitmap.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:e,imageMaxHeight:t,imageRotationSupported:s,imageNormalizationSupported:r,hidpi:!0}),this.addAttachHandles((0,o.wB)((()=>this.exportImageVersion),(()=>this.requestUpdate()))),this.requestUpdate()}detach(){this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren(),this._highlightView.destroy(),this._popupHighlightHelper.destroy()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}supportsSpatialReference(e){return this.layer.serviceSupportsSpatialReference(e)}async doRefresh(){this._updateHash="",this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,i,s){return this.layer.fetchImage(e,t,i,{timeExtent:this.timeExtent,floors:this.floors,...s})}fetchImageBitmap(e,t,i,s){return this.layer.fetchImageBitmap(e,t,i,{timeExtent:this.timeExtent,floors:this.floors,...s})}highlight(e){return this._popupHighlightHelper.highlight(e)}};(0,s._)([(0,n.MZ)()],M.prototype,"strategy",void 0),(0,s._)([(0,n.MZ)()],M.prototype,"updating",void 0),M=(0,s._)([(0,h.$)("esri.views.2d.layers.MapImageLayerView2D")],M);const S=M},4176:(e,t,i)=>{i.d(t,{A:()=>E});var s=i(35143),r=i(91967),a=(i(81806),i(50346)),o=i(46053),n=(i(76460),i(47249),i(85842)),h=i(2413),l=i(80963),p=i(88235);const d=Math.PI/180;function c(e){return e*d}function u(e,t){const i=c(t.rotation),s=Math.abs(Math.cos(i)),r=Math.abs(Math.sin(i)),[a,o]=t.size;return e[0]=Math.round(o*r+a*s),e[1]=Math.round(o*s+a*r),e}var y=i(16060),m=i(40181),g=i(93453);const f=(0,h.vt)(),_=[0,0],v=new g.A(0,0,0,0),x=2048,b=2048,M=!1,S=!1,w=!1;let P=class extends r.A{constructor(e){super(e),this._imagePromise=null,this.bitmaps=[],this.hidpi=w,this.imageMaxWidth=x,this.imageMaxHeight=b,this.imageRotationSupported=M,this.imageNormalizationSupported=S,this.update=(0,a.sg)((async(e,t)=>{var i,s;if((0,a.Te)(t),!e.stationary||this.destroyed)return;const r=e.state,o=(0,l.Vp)(r.spatialReference),n=this.hidpi?e.pixelRatio:1,h=this.imageNormalizationSupported&&r.worldScreenWidth&&r.worldScreenWidth<r.size[0],p=null!==(i=this.imageMaxWidth)&&void 0!==i?i:0,d=null!==(s=this.imageMaxHeight)&&void 0!==s?s:0;h?(_[0]=r.worldScreenWidth,_[1]=r.size[1]):this.imageRotationSupported?(_[0]=r.size[0],_[1]=r.size[1]):u(_,r);const c=Math.floor(_[0]*n)>p||Math.floor(_[1]*n)>d,y=o&&(r.extent.xmin<o.valid[0]||r.extent.xmax>o.valid[1]),m=!this.imageNormalizationSupported&&y,g=!c&&!m,f=this.imageRotationSupported?r.rotation:0,x=this.container.children.slice();if(g){const e=h?r.paddedViewState.center:r.center;this._imagePromise&&console.error("Image promise was not defined!"),this._imagePromise=this._singleExport(r,_,e,r.resolution,f,n,t)}else{let e=Math.min(p,d);m&&(e=Math.min(r.worldScreenWidth,e)),this._imagePromise=this._tiledExport(r,e,n,t)}try{var b;const e=null!==(b=await this._imagePromise)&&void 0!==b?b:[];(0,a.Te)(t);const i=[];if(this._imagePromise=null,this.destroyed)return;this.bitmaps=e;for(const t of x)e.includes(t)||i.push(t.fadeOut().then((()=>{t.remove(),t.destroy()})));for(const t of e)i.push(t.fadeIn());await Promise.all(i)}catch(v){this._imagePromise=null,(0,a.QP)(v)}}),5e3),this.updateExports=(0,a.sg)((async e=>{const t=[];for(const i of this.container.children){if(!i.visible||!i.stage)return;t.push(e(i).then((()=>{i.invalidateTexture(),i.requestRender()})))}this._imagePromise=(0,a.Lx)(t).then((()=>this._imagePromise=null)),await this._imagePromise}))}destroy(){this.bitmaps.forEach((e=>e.destroy())),this.bitmaps=[]}get updating(){return!this.destroyed&&null!==this._imagePromise}async _export(e,t,i,s,r,o){const n=await this.fetchSource(e,Math.floor(t*r),Math.floor(i*r),{rotation:s,pixelRatio:r,signal:o});(0,a.Te)(o);const h=new y.mb(null,!0);return h.x=e.xmin,h.y=e.ymax,h.resolution=e.width/t,h.rotation=s,h.pixelRatio=r,h.opacity=0,this.container.addChild(h),await h.setSourceAsync(n,o),(0,a.Te)(o),h}async _singleExport(e,t,i,s,r,a,o){!function(e,t,i,s){const[r,a]=t,[o,n]=s,h=.5*i;e[0]=r-h*o,e[1]=a-h*n,e[2]=r+h*o,e[3]=a+h*n}(f,i,s,t);const n=(0,h.w1)(f,e.spatialReference);return[await this._export(n,t[0],t[1],r,a,o)]}_tiledExport(e,t,i,s){const r=p.A.create({size:t,spatialReference:e.spatialReference,scales:[e.scale]}),a=new m.A(r),o=a.getTileCoverage(e);if(!o)return null;const n=[];return o.forEach(((r,o,l,p)=>{v.set(r,o,l,0),a.getTileBounds(f,v);const d=(0,h.w1)(f,e.spatialReference);n.push(this._export(d,t,t,0,i,s).then((e=>(0!==p&&(v.set(r,o,l,p),a.getTileBounds(f,v),e.x=f[0],e.y=f[3]),e))))})),Promise.all(n)}};(0,s._)([(0,o.MZ)()],P.prototype,"_imagePromise",void 0),(0,s._)([(0,o.MZ)()],P.prototype,"bitmaps",void 0),(0,s._)([(0,o.MZ)()],P.prototype,"container",void 0),(0,s._)([(0,o.MZ)()],P.prototype,"fetchSource",void 0),(0,s._)([(0,o.MZ)()],P.prototype,"hidpi",void 0),(0,s._)([(0,o.MZ)()],P.prototype,"imageMaxWidth",void 0),(0,s._)([(0,o.MZ)()],P.prototype,"imageMaxHeight",void 0),(0,s._)([(0,o.MZ)()],P.prototype,"imageRotationSupported",void 0),(0,s._)([(0,o.MZ)()],P.prototype,"imageNormalizationSupported",void 0),(0,s._)([(0,o.MZ)()],P.prototype,"requestUpdate",void 0),(0,s._)([(0,o.MZ)()],P.prototype,"updating",null),P=(0,s._)([(0,n.$)("esri.views.2d.layers.support.ExportStrategy")],P);const E=P}}]);
//# sourceMappingURL=8382.8ec619cc.chunk.js.map