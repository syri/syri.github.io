(this["webpackJsonpvinyl-personalwebsite"]=this["webpackJsonpvinyl-personalwebsite"]||[]).push([[0],{16:function(t,e,r){t.exports=r(27)},25:function(t,e,r){},26:function(t,e,r){},27:function(t,e,r){"use strict";r.r(e);var n=r(3),i=r.n(n),o=r(8),s=r.n(o),a=r(6),h=r.n(a),l=r(9),u=r(1),g=r(2),f=r(5),c=r(11),m=r(10),x=r(0),d=r(4),p=r.n(d),v=function(){function t(e){Object(u.a)(this,t),this.glContext=e,this.buffer=this.glContext.createBuffer()}return Object(g.a)(t,[{key:"bind",value:function(){this.glContext.bindBuffer(this.glContext.ARRAY_BUFFER,this.buffer)}},{key:"set",value:function(t){this.bind(),this.glContext.bufferData(this.glContext.ARRAY_BUFFER,t,this.glContext.STATIC_DRAW)}}]),t}(),C=function(){function t(e,r,n,i){Object(u.a)(this,t),this.glContext=e,this.program=r,this.buffers=n,this.primitiveCount=i}return Object(g.a)(t,[{key:"render",value:function(){for(var t in this.program.use(),this.buffers){var e=this.buffers[t].buffer,r=this.buffers[t].size,n=void 0;try{n=this.program.attributes[t].location}catch(o){throw console.error("Could not find location for",t),o}e.bind(),this.glContext.enableVertexAttribArray(n),this.glContext.vertexAttribPointer(n,r,this.glContext.FLOAT,!1,0,0)}for(var i in this.glContext.drawArrays(this.glContext.TRIANGLES,0,3*this.primitiveCount),this.buffers)this.glContext.disableVertexAttribArray(this.program.attributes[i].location)}}]),t}();function b(t,e){var r={};for(var n in e)r[n]={buffer:new v(t),size:e[n]};return r}function y(t,e,r,n){for(var i,o=Math.pow(n.random(),4),s=[o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o],a=[[-t,-t,0],[t,-t,0],[t,t,0],[-t,-t,0],[t,t,0],[-t,t,0]],h=[],l=0;l<6;l++){var u=(i=e,function(t,e){var r=Math.acos(x.c.dot(t,e)),n=x.c.create();x.c.cross(n,t,e),x.c.normalize(n,n);var i=x.b.create();return x.b.setAxisAngle(i,n,r),i}(x.c.fromValues(0,0,-1),i));x.c.transformQuat(a[l],a[l],u),a[l][0]+=e[0]*r,a[l][1]+=e[1]*r,a[l][2]+=e[2]*r,h.push.apply(h,a[l])}return{position:h,color:s}}function P(t,e){var r=[-1,-1,-1,1,-1,-1,1,1,-1,-1,-1,-1,1,1,-1,-1,1,-1,1,-1,1,-1,-1,1,-1,1,1,1,-1,1,-1,1,1,1,1,1,1,-1,-1,1,-1,1,1,1,1,1,-1,-1,1,1,1,1,1,-1,-1,-1,1,-1,-1,-1,-1,1,-1,-1,-1,1,-1,1,-1,-1,1,1,-1,1,-1,1,1,-1,1,1,1,-1,1,-1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,-1,-1,-1,-1,1,1,-1,-1,-1,-1,-1],n=b(t,{aPosition:3});return n.aPosition.buffer.set(new Float32Array(r)),new C(t,e,n,r.length/9)}function w(t){var e=x.a.create();return x.a.rotateX(e,e,t.random()*Math.PI*2),x.a.rotateY(e,e,t.random()*Math.PI*2),x.a.rotateZ(e,e,t.random()*Math.PI*2),e}function E(t){var e=[0,0,1],r=w(t);return x.c.transformMat4(e,e,r),x.c.normalize(e,e),e}function k(t){for(var e=0,r=0;r<t.length;r++){e+=(r+1)*t.charCodeAt(r)}return e}var M=function(){function t(e,r){Object(u.a)(this,t),this.glContext=e,this.source=r,this.source=this.source.split("__split__"),this.program=this.compileProgram(this.source[0],this.source[1]),this.attributes=this.gatherAttribs(),this.uniforms=this.gatherUniforms()}return Object(g.a)(t,[{key:"use",value:function(){this.glContext.useProgram(this.program)}},{key:"compileProgram",value:function(t,e){var r=this.compileShader(t,this.glContext.VERTEX_SHADER),n=this.compileShader(e,this.glContext.FRAGMENT_SHADER),i=this.glContext.createProgram();if(this.glContext.attachShader(i,r),this.glContext.attachShader(i,n),this.glContext.linkProgram(i),!this.glContext.getProgramParameter(i,this.glContext.LINK_STATUS))throw console.error(this.glContext.getProgramInfoLog(i)),new Error("Failed to compile program.");return i}},{key:"compileShader",value:function(t,e){var r=this.glContext.createShader(e);if(this.glContext.shaderSource(r,t),this.glContext.compileShader(r),!this.glContext.getShaderParameter(r,this.glContext.COMPILE_STATUS)){var n=this.glContext.getShaderInfoLog(r),i=parseInt(n.split(":")[2]),o=t.split("\n");for(var s in o){var a=parseInt(s);console.error(a+"  "+o[s]),s===i-1&&console.error(n)}var h=e===this.glContext.VERTEX_SHADER?"vertex":"fragment";throw Error("Failed to compile "+h+" shader.")}return r}},{key:"setUniform",value:function(t,e,r){var n,i=Array.prototype.slice.call(arguments,2);this.use();try{n=this.uniforms[t].location}catch(o){throw console.error(t),o}this.glContext["uniform"+e].apply(this.glContext,[n].concat(i))}},{key:"gatherUniforms",value:function(){for(var t={},e=this.glContext.getProgramParameter(this.program,this.glContext.ACTIVE_UNIFORMS),r=0;r<e;r++){var n=this.glContext.getActiveUniform(this.program,r);t[n.name]={name:n.name,location:this.glContext.getUniformLocation(this.program,n.name),type:n.type,size:n.size}}return t}},{key:"gatherAttribs",value:function(){for(var t={},e=this.glContext.getProgramParameter(this.program,this.glContext.ACTIVE_ATTRIBUTES),r=0;r<e;r++){var n=this.glContext.getActiveAttrib(this.program,r);t[n.name]={name:n.name,location:this.glContext.getAttribLocation(this.program,n.name),type:n.type,size:n.size}}return t}}]),t}(),S=function(){function t(e,r,n,i){Object(u.a)(this,t),this.starCount=1e5,this.canvas=document.createElement("canvas"),this.glContext=this.canvas.getContext("webgl"),this.glContext.enable(this.glContext.BLEND),this.glContext.blendFuncSeparate(this.glContext.SRC_ALPHA,this.glContext.ONE_MINUS_SRC_ALPHA,this.glContext.ZERO,this.glContext.ONE),e=e.toString("utf-8"),r=r.toString("utf-8"),n=n.toString("utf-8"),i=i.toString("utf-8"),this.nebulaProgram=new M(this.glContext,e),this.pointStarsProgram=new M(this.glContext,r),this.starProgram=new M(this.glContext,n),this.sunProgram=new M(this.glContext,i);for(var o=new p.a.MT(k("best seed ever")+5e3),s=new Float32Array(18*this.starCount),a=new Float32Array(18*this.starCount),h=0;h<this.starCount;h++){n=y(.05,x.c.random(x.c.create(),1),128,o),s.set(n.position,18*h),a.set(n.color,18*h)}var l=b(this.glContext,{aPosition:3,aColor:3});l.aPosition.buffer.set(s),l.aColor.buffer.set(a);var g=s.length/9;this.pointStarsRenderable=new C(this.glContext,this.pointStarsProgram,l,g),this.nebulaRenderable=P(this.glContext,this.nebulaProgram),this.sunRenderable=P(this.glContext,this.sunProgram),this.starRenderable=P(this.glContext,this.starProgram)}return Object(g.a)(t,[{key:"render",value:function(t){var e={};this.canvas.width=this.canvas.height=t.resolution,this.glContext.viewport(0,0,t.resolution,t.resolution);for(var r=new p.a.MT(k(t.seed)+1e3),n=[];t.pointStars&&(n.push({rotation:w(r)}),!(r.random()<.2)););r=new p.a.MT(k(t.seed)+3e3);for(var i=[];t.stars&&(i.push({pos:E(r),color:[1,1,1],size:0,falloff:r.random()*Math.pow(2,20)+Math.pow(2,20)}),!(r.random()<.01)););r=new p.a.MT(k(t.seed)+2e3);for(var o=[];t.nebulae&&(o.push({scale:.5*r.random()+.25,color:[r.random(),r.random(),r.random()],intensity:.2*r.random()+.9,falloff:3*r.random()+3,offset:[2e3*r.random()-1e3,2e3*r.random()-1e3,2e3*r.random()-1e3]}),!(r.random()<.5)););r=new p.a.MT(k(t.seed)+4e3);var s=[];t.sun&&s.push({pos:E(r),color:[r.random(),r.random(),r.random()],size:1e-4*r.random()+1e-4,falloff:16*r.random()+8});var a={front:{target:[0,0,-1],up:[0,1,0]},back:{target:[0,0,1],up:[0,1,0]},left:{target:[-1,0,0],up:[0,1,0]},right:{target:[1,0,0],up:[0,1,0]},top:{target:[0,1,0],up:[0,0,1]},bottom:{target:[0,-1,0],up:[0,0,-1]}},h=x.a.create(),l=x.a.create(),u=x.a.create();x.a.perspective(u,Math.PI/2,1,.1,256);for(var g=Object.keys(a),f=0;f<g.length;f++){this.glContext.clearColor(0,0,0,1),this.glContext.clear(this.glContext.COLOR_BUFFER_BIT);var c=a[g[f]];x.a.lookAt(l,[0,0,0],c.target,c.up),this.pointStarsProgram.use(),h=x.a.create(),this.pointStarsProgram.setUniform("uView","Matrix4fv",!1,l),this.pointStarsProgram.setUniform("uProjection","Matrix4fv",!1,u);for(var m=0;m<n.length;m++){var d=n[m];x.a.mul(h,d.rotation,h),this.pointStarsProgram.setUniform("uModel","Matrix4fv",!1,h),this.pointStarsRenderable.render()}this.starProgram.use(),this.starProgram.setUniform("uView","Matrix4fv",!1,l),this.starProgram.setUniform("uProjection","Matrix4fv",!1,u),this.starProgram.setUniform("uModel","Matrix4fv",!1,h);for(var v=0;v<i.length;v++){var C=i[v];this.starProgram.setUniform("uPosition","3fv",C.pos),this.starProgram.setUniform("uColor","3fv",C.color),this.starProgram.setUniform("uSize","1f",C.size),this.starProgram.setUniform("uFalloff","1f",C.falloff),this.starRenderable.render()}this.nebulaProgram.use(),h=x.a.create();for(var b=0;b<o.length;b++){var y=o[b];this.nebulaProgram.setUniform("uModel","Matrix4fv",!1,h),this.nebulaProgram.setUniform("uView","Matrix4fv",!1,l),this.nebulaProgram.setUniform("uProjection","Matrix4fv",!1,u),this.nebulaProgram.setUniform("uScale","1f",y.scale),this.nebulaProgram.setUniform("uColor","3fv",y.color),this.nebulaProgram.setUniform("uIntensity","1f",y.intensity),this.nebulaProgram.setUniform("uFalloff","1f",y.falloff),this.nebulaProgram.setUniform("uOffset","3fv",y.offset),this.nebulaRenderable.render()}this.sunProgram.use(),this.sunProgram.setUniform("uView","Matrix4fv",!1,l),this.sunProgram.setUniform("uProjection","Matrix4fv",!1,u),this.sunProgram.setUniform("uModel","Matrix4fv",!1,h);for(var P=0;P<s.length;P++){var M=s[P];this.sunProgram.setUniform("uPosition","3fv",M.pos),this.sunProgram.setUniform("uColor","3fv",M.color),this.sunProgram.setUniform("uSize","1f",M.size),this.sunProgram.setUniform("uFalloff","1f",M.falloff),this.sunRenderable.render()}var S=document.createElement("canvas");S.width=S.height=t.resolution,S.getContext("2d").drawImage(this.canvas,0,0),e[g[f]]=S}return e}}]),t}(),A=function(){function t(e,r,n,i,o,s){Object(u.a)(this,t),this.glContext=e,this.index=r,this.data=n,this.width=i,this.height=o,this.options=s||{},this.options.target=s.target||this.glContext.TEXTURE_2D,this.options.mag=s.mag||this.glContext.NEAREST,this.options.min=s.min||this.glContext.NEAREST,this.options.wraps=s.wraps||this.glContext.CLAMP_TO_EDGE,this.options.wrapt=s.wrapt||this.glContext.CLAMP_TO_EDGE,this.options.internalFormat=s.internalFormat||this.glContext.RGBA,this.options.format=s.format||this.glContext.RGBA,this.options.type=s.type||this.glContext.UNSIGNED_BYTE,this.activate(),this.texture=this.glContext.createTexture(),this.bind(),this.glContext.texImage2D(this.options.target,0,this.options.internalFormat,this.options.format,this.options.type,n),this.glContext.texParameteri(this.options.target,this.glContext.TEXTURE_MAG_FILTER,this.options.mag),this.glContext.texParameteri(this.options.target,this.glContext.TEXTURE_MIN_FILTER,this.options.min),this.glContext.texParameteri(this.options.target,this.glContext.TEXTURE_WRAP_S,this.options.wraps),this.glContext.texParameteri(this.options.target,this.glContext.TEXTURE_WRAP_T,this.options.wrapt),this.options.mag===this.glContext.NEAREST&&this.options.min===this.glContext.NEAREST||this.glContext.generateMipmap(this.options.target)}return Object(g.a)(t,[{key:"activate",value:function(){this.glContext.activeTexture(this.glContext.TEXTURE0+this.index)}},{key:"bind",value:function(){this.glContext.bindTexture(this.options.target,this.texture)}},{key:"reset",value:function(){this.activate(),this.bind(),this.glContext=this.glContext.texImage2D(this.options.target,0,this.options.internalFormat,this.width,this.height,0,this.options.format,this.options.type,this.data)}}]),t}(),U=function(){function t(e,r){Object(u.a)(this,t),this.renderCanvas=r,this.glContext=this.renderCanvas.getContext("webgl"),this.glContext.pixelStorei(this.glContext.UNPACK_FLIP_Y_WEBGL,!0),e=e.toString("utf-8"),this.skyboxProgram=new M(this.glContext,e),this.skybox=function(t,e){var r=[-1,-1,-1,1,-1,-1,1,1,-1,-1,-1,-1,1,1,-1,-1,1,-1],n=b(t,{aPosition:3,aUV:2});return n.aPosition.buffer.set(new Float32Array(r)),n.aUV.buffer.set(new Float32Array([0,0,1,0,1,1,0,0,1,1,0,1])),new C(t,e,n,r.length/9)}(this.glContext,this.skyboxProgram),this.textures={}}return Object(g.a)(t,[{key:"setTextures",value:function(t){this.textures={};for(var e=Object.keys(t),r=0;r<e.length;r++){var n=t[e[r]];this.textures[e[r]]=new A(this.glContext,0,n,n.width,n.height,{min:this.glContext.LINEAR_MIPMAP_LINEAR,mag:this.glContext.LINEAR})}}},{key:"render",value:function(t,e){this.glContext.viewport(0,0,this.renderCanvas.width,this.renderCanvas.height);var r=x.a.create();this.skyboxProgram.use(),this.skyboxProgram.setUniform("uView","Matrix4fv",!1,t),this.skyboxProgram.setUniform("uProjection","Matrix4fv",!1,e),this.textures.front.bind(),this.skyboxProgram.setUniform("uModel","Matrix4fv",!1,r),this.skybox.render(),this.textures.back.bind(),x.a.rotateY(r,x.a.create(),Math.PI),this.skyboxProgram.setUniform("uModel","Matrix4fv",!1,r),this.skybox.render(),this.textures.left.bind(),x.a.rotateY(r,x.a.create(),Math.PI/2),this.skyboxProgram.setUniform("uModel","Matrix4fv",!1,r),this.skybox.render(),this.textures.right.bind(),x.a.rotateY(r,x.a.create(),-Math.PI/2),this.skyboxProgram.setUniform("uModel","Matrix4fv",!1,r),this.skybox.render(),this.textures.top.bind(),x.a.rotateX(r,x.a.create(),Math.PI/2),this.skyboxProgram.setUniform("uModel","Matrix4fv",!1,r),this.skybox.render(),this.textures.bottom.bind(),x.a.rotateX(r,x.a.create(),-Math.PI/2),this.skyboxProgram.setUniform("uModel","Matrix4fv",!1,r),this.skybox.render()}}]),t}(),I=function(t){Object(c.a)(r,t);var e=Object(m.a)(r);function r(t){var n;return Object(u.a)(this,r),(n=e.call(this,t)).fov=60,n.fov=n.fov/360*Math.PI*2,n.pointStars=!0,n.seed=(1e18*Math.random()).toString(36),n.stars=!0,n.sun=!0,n.nebulae=!0,n.resolution=1024,n.animationSpeed=.015,n.unifiedTexture=!0,n.renderCanvas=document.getElementById("render-canvas"),n.renderCanvas.width=window.innerWidth,n.renderCanvas.height=window.innerHeight,n.tick=0,n.renderSpace=n.renderSpace.bind(Object(f.a)(n)),n.state={pageData:{}},n}return Object(g.a)(r,[{key:"componentDidMount",value:function(){var t=this,e=function(){var e=Object(l.a)(h.a.mark((function e(){var r,n,i,o,s,a,l,u,g,f;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("glsl/nebula.glsl");case 2:return r=e.sent,e.next=5,r.text();case 5:return n=e.sent,e.next=8,fetch("glsl/point-stars.glsl");case 8:return i=e.sent,e.next=11,i.text();case 11:return o=e.sent,e.next=14,fetch("glsl/skybox.glsl");case 14:return s=e.sent,e.next=17,s.text();case 17:return a=e.sent,e.next=20,fetch("glsl/star.glsl");case 20:return l=e.sent,e.next=23,l.text();case 23:return u=e.sent,e.next=26,fetch("glsl/sun.glsl");case 26:return g=e.sent,e.next=29,g.text();case 29:f=e.sent,t.skybox=new U(a,t.renderCanvas),t.space=new S(n,o,u,f,t.resolution),t.renderTextures(),t.renderSpace();case 34:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();fetch("pageData.json").then((function(t){return t.text()})).then((function(e){t.setState({pageData:JSON.parse(e)})})),e()}},{key:"hideUnified",value:function(){document.getElementById("texture-canvas").style.display="none"}},{key:"hideSplit",value:function(){document.getElementById("texture-left").style.display="none",document.getElementById("texture-right").style.display="none",document.getElementById("texture-top").style.display="none",document.getElementById("texture-bottom").style.display="none",document.getElementById("texture-front").style.display="none",document.getElementById("texture-back").style.display="none"}},{key:"renderTextures",value:function(){var t=this,e=function(e,r){var n=document.getElementById(r);n.width=n.height=t.resolution,n.getContext("2d").drawImage(e,0,0)},r=this.space.render({seed:this.seed,pointStars:this.pointStars,stars:this.stars,sun:this.sun,nebulae:this.nebulae,unifiedTexture:this.unifiedTexture,resolution:this.resolution});this.skybox.setTextures(r);var n=document.getElementById("texture-canvas");n.width=4*this.resolution,n.height=3*this.resolution;var i=n.getContext("2d");i.drawImage(r.left,0*this.resolution,1*this.resolution),i.drawImage(r.right,2*this.resolution,1*this.resolution),i.drawImage(r.front,1*this.resolution,1*this.resolution),i.drawImage(r.back,3*this.resolution,1*this.resolution),i.drawImage(r.top,1*this.resolution,0*this.resolution),i.drawImage(r.bottom,1*this.resolution,2*this.resolution),e(r.left,"texture-left"),e(r.right,"texture-right"),e(r.front,"texture-front"),e(r.back,"texture-back"),e(r.top,"texture-top"),e(r.bottom,"texture-bottom")}},{key:"renderSpace",value:function(){this.hideUnified(),this.hideSplit(),this.tick+=.0025*this.animationSpeed;var t=x.a.create(),e=x.a.create();this.renderCanvas.width=window.innerWidth,this.renderCanvas.height=window.innerHeight,x.a.lookAt(t,[0,0,0],[Math.cos(this.tick),Math.sin(.555*this.tick),Math.sin(this.tick)],[0,1,0]),x.a.perspective(e,this.fov,this.renderCanvas.width/this.renderCanvas.height,.1,8),this.skybox.render(t,e),requestAnimationFrame(this.renderSpace)}},{key:"getLinks",value:function(){var t=[];for(var e in this.state.pageData.socialLinks)t.push(i.a.createElement("a",{key:this.state.pageData.socialLinks[e].name,href:this.state.pageData.socialLinks[e].url,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{src:"images/"+this.state.pageData.socialLinks[e].logo,alt:this.state.pageData.socialLinks[e].name})));return t}},{key:"render",value:function(){return i.a.createElement("div",{id:"App"},i.a.createElement("div",{id:"information"},i.a.createElement("p",null,this.state.pageData.pageTitle),i.a.createElement("div",{id:"links"},this.getLinks())))}}]),r}(n.Component);r(25),r(26);s.a.render(i.a.createElement(I,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.94d7741c.chunk.js.map