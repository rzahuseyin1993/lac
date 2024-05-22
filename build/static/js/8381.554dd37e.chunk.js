"use strict";(self.webpackChunklac=self.webpackChunklac||[]).push([[8381],{45136:(t,e,n)=>{n.d(e,{a:()=>o,b:()=>a,c:()=>s,d:()=>i,e:()=>u,f:()=>l,n:()=>f,s:()=>c,t:()=>h});n(81806);var r=n(80066);function i(t,e,n){o(t.typedBuffer,e.typedBuffer,n,t.typedBufferStride,e.typedBufferStride)}function o(t,e,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:r;if(t.length/r!==Math.ceil(e.length/i))return t;const o=t.length/r,s=n[0],a=n[1],l=n[2],c=n[4],h=n[5],u=n[6],f=n[8],d=n[9],m=n[10],p=n[12],_=n[13],M=n[14];let x=0,g=0;for(let y=0;y<o;y++){const n=e[x],o=e[x+1],y=e[x+2];t[g]=s*n+c*o+f*y+p,t[g+1]=a*n+h*o+d*y+_,t[g+2]=l*n+u*o+m*y+M,x+=i,g+=r}return t}function s(t,e,n){a(t.typedBuffer,e.typedBuffer,n,t.typedBufferStride,e.typedBufferStride)}function a(t,e,n){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:i;if(t.length/i!==Math.ceil(e.length/o))return void(0,r.j)().error("source and destination buffers need to have the same number of elements");const s=t.length/i,a=n[0],l=n[1],c=n[2],h=n[3],u=n[4],f=n[5],d=n[6],m=n[7],p=n[8];let _=0,M=0;for(let r=0;r<s;r++){const n=e[_],r=e[_+1],s=e[_+2];t[M]=a*n+h*r+d*s,t[M+1]=l*n+u*r+m*s,t[M+2]=c*n+f*r+p*s,_+=o,M+=i}}function l(t,e,n){c(t.typedBuffer,e,n,t.typedBufferStride)}function c(t,e,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3;const i=Math.min(t.length/r,e.count),o=e.typedBuffer,s=e.typedBufferStride;let a=0,l=0;for(let c=0;c<i;c++)t[l]=n*o[a],t[l+1]=n*o[a+1],t[l+2]=n*o[a+2],a+=s,l+=r}function h(t,e,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:r;const o=t.length/r;if(o!==Math.ceil(e.length/i))return t;let s=0,a=0;for(let l=0;l<o;l++)t[a]=e[s]+n[0],t[a+1]=e[s+1]+n[1],t[a+2]=e[s+2]+n[2],s+=i,a+=r;return t}function u(t,e){f(t.typedBuffer,e.typedBuffer,t.typedBufferStride,e.typedBufferStride)}function f(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:n;const i=Math.min(t.length/n,e.length/r);let o=0,s=0;for(let a=0;a<i;a++){const i=e[o],a=e[o+1],l=e[o+2],c=i*i+a*a+l*l;if(c>0){const e=1/Math.sqrt(c);t[s]=e*i,t[s+1]=e*a,t[s+2]=e*l}o+=r,s+=n}}Object.freeze(Object.defineProperty({__proto__:null,normalize:f,normalizeView:u,scale:c,scaleView:l,shiftRight:function(t,e,n){const r=Math.min(t.count,e.count),i=t.typedBuffer,o=t.typedBufferStride,s=e.typedBuffer,a=e.typedBufferStride;let l=0,c=0;for(let h=0;h<r;h++)i[c]=s[l]>>n,i[c+1]=s[l+1]>>n,i[c+2]=s[l+2]>>n,l+=a,c+=o},transformMat3:a,transformMat3View:s,transformMat4:o,transformMat4View:i,translate:h},Symbol.toStringTag,{value:"Module"}))},44680:(t,e,n)=>{function r(){return[1,0,0,0,1,0,0,0,1]}function i(t,e,n,r,i,o,s,a,l){return[t,e,n,r,i,o,s,a,l]}n.d(e,{fA:()=>i,vt:()=>r,zK:()=>o});const o=[1,0,0,0,1,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:o,clone:function(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8]]},create:r,createView:function(t,e){return new Float64Array(t,e,9)},fromValues:i},Symbol.toStringTag,{value:"Module"}))},13191:(t,e,n)=>{function r(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function i(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15]]}n.d(e,{o8:()=>i,vt:()=>r,zK:()=>o});const o=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:o,clone:i,create:r,createView:function(t,e){return new Float64Array(t,e,16)},fromValues:function(t,e,n,r,i,o,s,a,l,c,h,u,f,d,m,p){return[t,e,n,r,i,o,s,a,l,c,h,u,f,d,m,p]}},Symbol.toStringTag,{value:"Module"}))},4336:(t,e,n)=>{function r(){return[0,0,0,1]}function i(t){return[t[0],t[1],t[2],t[3]]}n.d(e,{o8:()=>i,vt:()=>r,zK:()=>o});const o=[0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:o,clone:i,create:r,createView:function(t,e){return new Float64Array(t,e,4)},fromValues:function(t,e,n,r){return[t,e,n,r]}},Symbol.toStringTag,{value:"Module"}))},60008:(t,e,n)=>{n.d(e,{A6:()=>p,Xd:()=>h,Xr:()=>d,hZ:()=>M,lw:()=>u,t2:()=>S,x8:()=>c});var r=n(44680),i=n(4336),o=n(9392),s=n(53494),a=n(20664),l=n(43047);function c(t,e,n){n*=.5;const r=Math.sin(n);return t[0]=r*e[0],t[1]=r*e[1],t[2]=r*e[2],t[3]=Math.cos(n),t}function h(t,e){const n=2*Math.acos(e[3]),r=Math.sin(n/2);return r>(0,s.FD)()?(t[0]=e[0]/r,t[1]=e[1]/r,t[2]=e[2]/r):(t[0]=1,t[1]=0,t[2]=0),n}function u(t,e,n){const r=e[0],i=e[1],o=e[2],s=e[3],a=n[0],l=n[1],c=n[2],h=n[3];return t[0]=r*h+s*a+i*c-o*l,t[1]=i*h+s*l+o*a-r*c,t[2]=o*h+s*c+r*l-i*a,t[3]=s*h-r*a-i*l-o*c,t}function f(t,e,n,r){const i=e[0],o=e[1],a=e[2],l=e[3];let c,h,u,f,d,m=n[0],p=n[1],_=n[2],M=n[3];return h=i*m+o*p+a*_+l*M,h<0&&(h=-h,m=-m,p=-p,_=-_,M=-M),1-h>(0,s.FD)()?(c=Math.acos(h),u=Math.sin(c),f=Math.sin((1-r)*c)/u,d=Math.sin(r*c)/u):(f=1-r,d=r),t[0]=f*i+d*m,t[1]=f*o+d*p,t[2]=f*a+d*_,t[3]=f*l+d*M,t}function d(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=e[3],t}function m(t,e){const n=e[0]+e[4]+e[8];let r;if(n>0)r=Math.sqrt(n+1),t[3]=.5*r,r=.5/r,t[0]=(e[5]-e[7])*r,t[1]=(e[6]-e[2])*r,t[2]=(e[1]-e[3])*r;else{let n=0;e[4]>e[0]&&(n=1),e[8]>e[3*n+n]&&(n=2);const i=(n+1)%3,o=(n+2)%3;r=Math.sqrt(e[3*n+n]-e[3*i+i]-e[3*o+o]+1),t[n]=.5*r,r=.5/r,t[3]=(e[3*i+o]-e[3*o+i])*r,t[i]=(e[3*i+n]+e[3*n+i])*r,t[o]=(e[3*o+n]+e[3*n+o])*r}return t}function p(t,e,n,r){const i=.5*Math.PI/180;e*=i,n*=i,r*=i;const o=Math.sin(e),s=Math.cos(e),a=Math.sin(n),l=Math.cos(n),c=Math.sin(r),h=Math.cos(r);return t[0]=o*l*h-s*a*c,t[1]=s*a*h+o*l*c,t[2]=s*l*c-o*a*h,t[3]=s*l*h+o*a*c,t}const _=l.c,M=l.s,x=l.f,g=u,y=l.b,v=l.g,A=l.l,B=l.i,w=B,Y=l.j,b=Y,X=l.n,S=l.a,E=l.e;const O=(0,o.vt)(),z=(0,o.fA)(1,0,0),I=(0,o.fA)(0,1,0);const P=(0,i.vt)(),T=(0,i.vt)();const L=(0,r.vt)();Object.freeze(Object.defineProperty({__proto__:null,add:x,calculateW:function(t,e){const n=e[0],r=e[1],i=e[2];return t[0]=n,t[1]=r,t[2]=i,t[3]=Math.sqrt(Math.abs(1-n*n-r*r-i*i)),t},conjugate:d,copy:_,dot:v,equals:E,exactEquals:S,fromEuler:p,fromMat3:m,getAxisAngle:h,identity:function(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t},invert:function(t,e){const n=e[0],r=e[1],i=e[2],o=e[3],s=n*n+r*r+i*i+o*o,a=s?1/s:0;return t[0]=-n*a,t[1]=-r*a,t[2]=-i*a,t[3]=o*a,t},len:w,length:B,lerp:A,mul:g,multiply:u,normalize:X,random:function(t){const e=s.Ov,n=e(),r=e(),i=e(),o=Math.sqrt(1-n),a=Math.sqrt(n);return t[0]=o*Math.sin(2*Math.PI*r),t[1]=o*Math.cos(2*Math.PI*r),t[2]=a*Math.sin(2*Math.PI*i),t[3]=a*Math.cos(2*Math.PI*i),t},rotateX:function(t,e,n){n*=.5;const r=e[0],i=e[1],o=e[2],s=e[3],a=Math.sin(n),l=Math.cos(n);return t[0]=r*l+s*a,t[1]=i*l+o*a,t[2]=o*l-i*a,t[3]=s*l-r*a,t},rotateY:function(t,e,n){n*=.5;const r=e[0],i=e[1],o=e[2],s=e[3],a=Math.sin(n),l=Math.cos(n);return t[0]=r*l-o*a,t[1]=i*l+s*a,t[2]=o*l+r*a,t[3]=s*l-i*a,t},rotateZ:function(t,e,n){n*=.5;const r=e[0],i=e[1],o=e[2],s=e[3],a=Math.sin(n),l=Math.cos(n);return t[0]=r*l+i*a,t[1]=i*l-r*a,t[2]=o*l+s*a,t[3]=s*l-o*a,t},rotationTo:function(t,e,n){const r=(0,a.k)(e,n);return r<-.999999?((0,a.b)(O,z,e),(0,a.H)(O)<1e-6&&(0,a.b)(O,I,e),(0,a.n)(O,O),c(t,O,Math.PI),t):r>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):((0,a.b)(O,e,n),t[0]=O[0],t[1]=O[1],t[2]=O[2],t[3]=1+r,X(t,t))},scale:y,set:M,setAxes:function(t,e,n,r){const i=L;return i[0]=n[0],i[3]=n[1],i[6]=n[2],i[1]=r[0],i[4]=r[1],i[7]=r[2],i[2]=-e[0],i[5]=-e[1],i[8]=-e[2],X(t,m(t,i))},setAxisAngle:c,slerp:f,sqlerp:function(t,e,n,r,i,o){return f(P,e,i,o),f(T,n,r,o),f(t,P,T,2*o*(1-o)),t},sqrLen:b,squaredLength:Y,str:function(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}},Symbol.toStringTag,{value:"Module"}))},70373:(t,e,n)=>{n.d(e,{w:()=>s});var r=n(18690),i=n(30015),o=n(61196);class s{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9,e=arguments.length>1?arguments[1]:void 0;this._compareMinX=h,this._compareMinY=u,this._toBBox=t=>t,this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),e&&("function"==typeof e?this._toBBox=e:this._initFormat(e)),this.clear()}destroy(){this.clear(),g.prune(),y.prune(),v.prune(),A.prune()}all(t){this._all(this._data,t)}search(t,e){let n=this._data;const r=this._toBBox;if(M(t,n))for(g.clear();n;){for(let i=0,o=n.children.length;i<o;i++){const o=n.children[i],s=n.leaf?r(o):o;M(t,s)&&(n.leaf?e(o):_(t,s)?this._all(o,e):g.push(o))}n=g.pop()}}collides(t){let e=this._data;const n=this._toBBox;if(!M(t,e))return!1;for(g.clear();e;){for(let r=0,i=e.children.length;r<i;r++){const i=e.children[r],o=e.leaf?n(i):i;if(M(t,o)){if(e.leaf||_(t,o))return!0;g.push(i)}}e=g.pop()}return!1}load(t){if(!t.length)return this;if(t.length<this._minEntries){for(let e=0,n=t.length;e<n;e++)this.insert(t[e]);return this}let e=this._build(t.slice(0,t.length),0,t.length-1,0);if(this._data.children.length)if(this._data.height===e.height)this._splitRoot(this._data,e);else{if(this._data.height<e.height){const t=this._data;this._data=e,e=t}this._insert(e,this._data.height-e.height-1,!0)}else this._data=e;return this}insert(t){return t&&this._insert(t,this._data.height-1),this}clear(){return this._data=new Y([]),this}remove(t){if(!t)return this;let e,n=this._data,i=null,o=0,s=!1;const a=this._toBBox(t);for(v.clear(),A.clear();n||v.length>0;){var l;if(n||(n=v.pop(),i=v.data[v.length-1],o=null!==(l=A.pop())&&void 0!==l?l:0,s=!0),n.leaf&&(e=(0,r.qh)(n.children,t,n.children.length,n.indexHint),-1!==e))return n.children.splice(e,1),v.push(n),this._condense(v),this;s||n.leaf||!_(n,a)?i?(o++,n=i.children[o],s=!1):n=null:(v.push(n),A.push(o),o=0,i=n,n=n.children[0])}return this}toJSON(){return this._data}fromJSON(t){return this._data=t,this}_all(t,e){let n=t;for(y.clear();n;){var r;if(!0===n.leaf)for(const t of n.children)e(t);else y.pushArray(n.children);n=null!==(r=y.pop())&&void 0!==r?r:null}}_build(t,e,n,r){const i=n-e+1;let o=this._maxEntries;if(i<=o){const r=new Y(t.slice(e,n+1));return a(r,this._toBBox),r}r||(r=Math.ceil(Math.log(i)/Math.log(o)),o=Math.ceil(i/o**(r-1)));const s=new b([]);s.height=r;const l=Math.ceil(i/o),c=l*Math.ceil(Math.sqrt(o));x(t,e,n,c,this._compareMinX);for(let a=e;a<=n;a+=c){const e=Math.min(a+c-1,n);x(t,a,e,l,this._compareMinY);for(let n=a;n<=e;n+=l){const i=Math.min(n+l-1,e);s.children.push(this._build(t,n,i,r-1))}}return a(s,this._toBBox),s}_chooseSubtree(t,e,n,r){for(;r.push(e),!0!==e.leaf&&r.length-1!==n;){let n,r=1/0,i=1/0;for(let o=0,s=e.children.length;o<s;o++){const s=e.children[o],a=f(s),l=m(t,s)-a;l<i?(i=l,r=a<r?a:r,n=s):l===i&&a<r&&(r=a,n=s)}e=n||e.children[0]}return e}_insert(t,e,n){const r=this._toBBox,i=n?t:r(t);v.clear();const o=this._chooseSubtree(i,this._data,e,v);for(o.children.push(t),c(o,i);e>=0&&v.data[e].children.length>this._maxEntries;)this._split(v,e),e--;this._adjustParentBBoxes(i,v,e)}_split(t,e){const n=t.data[e],r=n.children.length,i=this._minEntries;this._chooseSplitAxis(n,i,r);const o=this._chooseSplitIndex(n,i,r);if(!o)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const s=n.children.splice(o,n.children.length-o),l=n.leaf?new Y(s):new b(s);l.height=n.height,a(n,this._toBBox),a(l,this._toBBox),e?t.data[e-1].children.push(l):this._splitRoot(n,l)}_splitRoot(t,e){this._data=new b([t,e]),this._data.height=t.height+1,a(this._data,this._toBBox)}_chooseSplitIndex(t,e,n){let r,i,o;r=i=1/0;for(let s=e;s<=n-e;s++){const e=l(t,0,s,this._toBBox),a=l(t,s,n,this._toBBox),c=p(e,a),h=f(e)+f(a);c<r?(r=c,o=s,i=h<i?h:i):c===r&&h<i&&(i=h,o=s)}return o}_chooseSplitAxis(t,e,n){const r=t.leaf?this._compareMinX:h,i=t.leaf?this._compareMinY:u;this._allDistMargin(t,e,n,r)<this._allDistMargin(t,e,n,i)&&t.children.sort(r)}_allDistMargin(t,e,n,r){t.children.sort(r);const i=this._toBBox,o=l(t,0,e,i),s=l(t,n-e,n,i);let a=d(o)+d(s);for(let l=e;l<n-e;l++){const e=t.children[l];c(o,t.leaf?i(e):e),a+=d(o)}for(let l=n-e-1;l>=e;l--){const e=t.children[l];c(s,t.leaf?i(e):e),a+=d(s)}return a}_adjustParentBBoxes(t,e,n){for(let r=n;r>=0;r--)c(e.data[r],t)}_condense(t){for(let e=t.length-1;e>=0;e--){const n=t.data[e];if(0===n.children.length)if(e>0){const i=t.data[e-1],o=i.children;o.splice((0,r.qh)(o,n,o.length,i.indexHint),1)}else this.clear();else a(n,this._toBBox)}}_initFormat(t){const e=["return a"," - b",";"];this._compareMinX=new Function("a","b",e.join(t[0])),this._compareMinY=new Function("a","b",e.join(t[1])),this._toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}function a(t,e){l(t,0,t.children.length,e,t)}function l(t,e,n,r,i){i||(i=new Y([])),i.minX=1/0,i.minY=1/0,i.maxX=-1/0,i.maxY=-1/0;for(let o,s=e;s<n;s++)o=t.children[s],c(i,t.leaf?r(o):o);return i}function c(t,e){t.minX=Math.min(t.minX,e.minX),t.minY=Math.min(t.minY,e.minY),t.maxX=Math.max(t.maxX,e.maxX),t.maxY=Math.max(t.maxY,e.maxY)}function h(t,e){return t.minX-e.minX}function u(t,e){return t.minY-e.minY}function f(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function d(t){return t.maxX-t.minX+(t.maxY-t.minY)}function m(t,e){return(Math.max(e.maxX,t.maxX)-Math.min(e.minX,t.minX))*(Math.max(e.maxY,t.maxY)-Math.min(e.minY,t.minY))}function p(t,e){const n=Math.max(t.minX,e.minX),r=Math.max(t.minY,e.minY),i=Math.min(t.maxX,e.maxX),o=Math.min(t.maxY,e.maxY);return Math.max(0,i-n)*Math.max(0,o-r)}function _(t,e){return t.minX<=e.minX&&t.minY<=e.minY&&e.maxX<=t.maxX&&e.maxY<=t.maxY}function M(t,e){return e.minX<=t.maxX&&e.minY<=t.maxY&&e.maxX>=t.minX&&e.maxY>=t.minY}function x(t,e,n,r,i){const s=[e,n];for(;s.length;){const e=s.pop(),n=s.pop();if(e-n<=r)continue;const a=n+Math.ceil((e-n)/r/2)*r;(0,o.q)(t,a,n,e,i),s.push(n,a,a,e)}}const g=new i.A,y=new i.A,v=new i.A,A=new i.A({deallocator:void 0});class B{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class w extends B{constructor(){super(...arguments),this.height=1,this.indexHint=new r.vW}}class Y extends w{constructor(t){super(),this.children=t,this.leaf=!0}}class b extends w{constructor(t){super(),this.children=t,this.leaf=!1}}},90707:(t,e,n)=>{n.d(e,{l:()=>c});var r=n(15941),i=n(34761),o=n(9392);function s(t,e,n){const r=Math.sin(t),i=Math.cos(t),o=Math.sin(e),s=Math.cos(e),a=n;return a[0]=-r,a[4]=-o*i,a[8]=s*i,a[12]=0,a[1]=i,a[5]=-o*r,a[9]=s*r,a[13]=0,a[2]=0,a[6]=s,a[10]=o,a[14]=0,a[3]=0,a[7]=0,a[11]=0,a[15]=1,a}var a=n(43955),l=n(80963);function c(t,e,n,r){if(null==t||null==r)return!1;const o=(0,a.Qk)(t,a.Wv),c=(0,a.Qk)(r,a.zp);if(o===c&&!h(c)&&(o!==a.rz.UNKNOWN||(0,l.aI)(t,r)))return(0,i.kN)(n,e),!0;if(h(c)){const t=a.w5[o][a.rz.LON_LAT],r=a.w5[a.rz.LON_LAT][c];return null!=t&&null!=r&&(t(e,0,f,0),r(f,0,d,0),s(u*f[0],u*f[1],n),n[12]=d[0],n[13]=d[1],n[14]=d[2],!0)}if((c===a.rz.WEB_MERCATOR||c===a.rz.PLATE_CARREE||c===a.rz.WGS84)&&(o===a.rz.WGS84||o===a.rz.CGCS2000&&c===a.rz.PLATE_CARREE||o===a.rz.SPHERICAL_ECEF||o===a.rz.WEB_MERCATOR)){const t=a.w5[o][a.rz.LON_LAT],r=a.w5[a.rz.LON_LAT][c];return null!=t&&null!=r&&(t(e,0,f,0),r(f,0,d,0),o===a.rz.SPHERICAL_ECEF?function(t,e,n){s(t,e,n),(0,i.mg)(n,n)}(u*f[0],u*f[1],n):(0,i.D_)(n),n[12]=d[0],n[13]=d[1],n[14]=d[2],!0)}return!1}function h(t){return t===a.rz.SPHERICAL_ECEF||t===a.rz.SPHERICAL_MARS_PCPF||t===a.rz.SPHERICAL_MOON_PCPF}const u=(0,r.kU)(1),f=(0,o.vt)(),d=(0,o.vt)()},98510:(t,e,n)=>{n.d(e,{lO:()=>c});var r=n(34111),i=n(13312),o=n(80963);const s=new i.A(r.fv),a=new i.A(r.FY),l=new i.A(r.LJ);new i.A(r.Ro);function c(t){const e=h.get(t);if(e)return e;let n=s;if(t)if(t===a)n=a;else if(t===l)n=l;else{const e=t.wkid,i=t.latestWkid;if(null!=e||null!=i)(0,o.tl)(e)||(0,o.tl)(i)?n=a:((0,o.ZL)(e)||(0,o.ZL)(i))&&(n=l);else{var r;const e=null!==(r=t.wkt2)&&void 0!==r?r:t.wkt;if(e){const t=e.toUpperCase();t===u?n=a:t===f&&(n=l)}}}return h.set(t,n),n}const h=new Map,u=a.wkt.toUpperCase(),f=l.wkt.toUpperCase()},44815:(t,e,n)=>{n.d(e,{Ns:()=>l,jh:()=>i,l5:()=>s,s:()=>a,xm:()=>o});var r=n(78393);function i(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t<=r.y9?e?new Array(t).fill(0):new Array(t):new Float64Array(t)}function o(t){return((0,r.cy)(t)?t.length:t.byteLength/8)<=r.y9?Array.from(t):new Float64Array(t)}function s(t,e,n){return Array.isArray(t)?t.slice(e,e+n):t.subarray(e,e+n)}function a(t,e){for(let n=0;n<e.length;++n)t[n]=e[n];return t}function l(t){return Array.isArray(t)?new Float64Array(t):t}},14894:(t,e,n)=>{n.d(e,{A:()=>h});var r=n(35143),i=n(69098),o=n(42553),s=n(46053),a=(n(81806),n(76460),n(47249),n(6409)),l=n(85842);let c=class extends((0,i.O)(o.oY)){constructor(t){super(t),this.type="georeferenced",this.origin=null}};(0,r._)([(0,a.e)({georeferenced:"georeferenced"},{readOnly:!0})],c.prototype,"type",void 0),(0,r._)([(0,s.MZ)({type:[Number],nonNullable:!1,json:{write:!0}})],c.prototype,"origin",void 0),c=(0,r._)([(0,l.$)("esri.geometry.support.MeshGeoreferencedVertexSpace")],c);const h=c},5845:(t,e,n)=>{n.d(e,{A:()=>u});var r=n(35143),i=n(69098),o=n(42553),s=n(46053),a=(n(81806),n(76460),n(47249),n(6409)),l=n(85842),c=n(9392);let h=class extends((0,i.O)(o.oY)){constructor(t){super(t),this.type="local",this.origin=(0,c.vt)()}};(0,r._)([(0,a.e)({local:"local"},{readOnly:!0})],h.prototype,"type",void 0),(0,r._)([(0,s.MZ)({type:[Number],nonNullable:!0,json:{write:!0}})],h.prototype,"origin",void 0),h=(0,r._)([(0,l.$)("esri.geometry.support.MeshLocalVertexSpace")],h);const u=h},80066:(t,e,n)=>{n.d(e,{j:()=>i});var r=n(76460);const i=()=>r.A.getLogger("esri.views.3d.support.buffer.math")},98357:(t,e,n)=>{n.r(e),n.d(e,{default:()=>a});var r=n(81806),i=n(70373),o=n(99773),s=n(48620);class a{async createIndex(t,e){var n;const r=new Array;if(null===(n=t.vertexAttributes)||void 0===n||!n.position)return new i.w;const o=this._createMeshData(t),s=null!=e?await e.invoke("createIndexThread",o,{transferList:r}):this.createIndexThread(o).result;return this._createPooledRBush().fromJSON(s)}createIndexThread(t){const e=new Float64Array(t.position),n=this._createPooledRBush();return t.components?this._createIndexComponentsThread(n,e,t.components.map((t=>new Uint32Array(t)))):this._createIndexAllThread(n,e)}_createIndexAllThread(t,e){const n=new Array(e.length/9);let r=0;for(let i=0;i<e.length;i+=9)n[r++]=l(e,i,i+3,i+6);return t.load(n),{result:t.toJSON()}}_createIndexComponentsThread(t,e,n){let r=0;for(const s of n)r+=s.length/3;const i=new Array(r);let o=0;for(const s of n)for(let t=0;t<s.length;t+=3)i[o++]=l(e,3*s[t],3*s[t+1],3*s[t+2]);return t.load(i),{result:t.toJSON()}}_createMeshData(t){const e=((0,o.Hq)(t.vertexSpace)?(0,s.bA)({position:t.vertexAttributes.position,normal:null,tangent:null},t.vertexSpace,t.transform,t.spatialReference).position:t.vertexAttributes.position).buffer;return!t.components||t.components.some((t=>!t.faces))?{position:e}:{position:e,components:t.components.map((t=>t.faces))}}_createPooledRBush(){return new i.w(9,(0,r.A)("esri-csp-restrictions")?t=>t:[".minX",".minY",".maxX",".maxY"])}}function l(t,e,n,r){return{minX:Math.min(t[e],t[n],t[r]),maxX:Math.max(t[e],t[n],t[r]),minY:Math.min(t[e+1],t[n+1],t[r+1]),maxY:Math.max(t[e+1],t[n+1],t[r+1]),p0:[t[e],t[e+1],t[e+2]],p1:[t[n],t[n+1],t[n+2]],p2:[t[r],t[r+1],t[r+2]]}}}}]);
//# sourceMappingURL=8381.554dd37e.chunk.js.map