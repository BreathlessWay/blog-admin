(this["webpackJsonpblog-admin"]=this["webpackJsonpblog-admin"]||[]).push([[10],{512:function(e,t,a){"use strict";var r=a(396),n=a.n(r),o=(a(452),a(453)),i=a(397),c=a(83),l=a.n(c),u=function(e){return l.a.post("/upload",e,{headers:{"Content-Type":"multipart/form-data"}})},s=a(19);a.d(t,"a",(function(){return d}));var d=function(){var e=Object(i.a)(n.a.mark((function e(t){var a,r,i,c,l,d,p,h,f,v,m,b,g,w;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o.a.destroy(),a=t.file,r=t.size,i=void 0===r?s.j:r,c=t.accept,l=void 0===c?s.z:c,d=o.a.loading("\u6587\u4ef6\u4e0a\u4f20\u4e2d...",0),e.prev=3,h=new FormData,!(a.size>1024*i)){e.next=7;break}throw new Error("\u6587\u4ef6\u8d85\u8fc7".concat(i,"k, \u8bf7\u91cd\u65b0\u9009\u62e9\uff01"));case 7:if(!l){e.next=12;break}if(f=l.split(","),f.some((function(e){return a.name.endsWith(e)}))){e.next=12;break}throw new Error("\u6587\u4ef6\u7c7b\u578b\u4e3a".concat(a.type,",\u53ea\u652f\u6301\u4e0a\u4f20").concat(l,"\u7c7b\u578b\u6587\u4ef6, \u8bf7\u91cd\u65b0\u9009\u62e9\uff01"));case 12:return h.append("file",a),e.next=15,u(h);case 15:if(v=e.sent,!(null===(p=v.data)||void 0===p?void 0:p.success)){e.next=20;break}return e.abrupt("return",Promise.resolve({url:null===(m=v.data)||void 0===m||null===(b=m.data)||void 0===b?void 0:b.url,title:null===(g=v.data)||void 0===g||null===(w=g.data)||void 0===w?void 0:w.name}));case 20:throw new Error;case 21:e.next=27;break;case 23:return e.prev=23,e.t0=e.catch(3),o.a.error(e.t0.message||"".concat(a.name,"\u6587\u4ef6\u4e0a\u4f20\u5931\u8d25")),e.abrupt("return",Promise.reject());case 27:return e.prev=27,d(),e.finish(27);case 30:case"end":return e.stop()}}),e,null,[[3,23,27,30]])})));return function(t){return e.apply(this,arguments)}}()},905:function(e,t,a){},927:function(e,t,a){"use strict";a.r(t);a(452);var r=a(453),n=a(11),o=a(12),i=a(35),c=a(36),l=a(37),u=a(0),s=a.n(u),d=a(132),p=a(104),h=a.n(p),f=a(62),v=a(19),m=a(512),b=(a(905),a(906),a(907)),g=a.n(b),w=(a(908),a(909)),k=a.n(w);a(910);h.a.use(g()({defaultColumns:3,defaultRows:3,withDropdown:!0,exportAttrString:""}));var y;h.a.use(k()({theme:"light"}));var j=Object(d.b)((function(e){return{articleDetailStore:e.articleDetailStore,homepageStore:e.homepageStore}}))(y=Object(d.c)(y=function(e){function t(){var e,a;Object(n.a)(this,t);for(var o=arguments.length,l=new Array(o),u=0;u<o;u++)l[u]=arguments[u];return(a=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).submitContent=function(){},a.handleEditorChange=function(e){var t=a.props.articleDetailStore,r=t.validError,n=t.changeDetail,o=t.detail;r({key:f.b.contentError,value:!e.toText()&&(null===o||void 0===o?void 0:o.renderType)===f.c.richText}),n({key:f.a.draftDetail,value:e})},a.handleUploadFile=function(e){/^(image)/g.test(e.file.type)?Object(m.a)({file:e.file,size:v.d}).then((function(t){var a=t.url,r=t.title;e.success({url:a,meta:{id:a,title:r,alt:r,loop:!0,autoPlay:!0,controls:!0,poster:""}})})).catch((function(t){e.error({msg:t})})):r.a.error("\u76ee\u524d\u53ea\u652f\u6301\u4e0a\u4f20\u56fe\u7247")},a}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.articleDetailStore.detail,t=this.props.homepageStore.articleAlias;return s.a.createElement(h.a,{className:"rich-text",placeholder:"\u8bf7\u8f93\u5165".concat(t,"\u5185\u5bb9..."),value:null===e||void 0===e?void 0:e.draftDetail,onChange:this.handleEditorChange,onSave:this.submitContent,media:{uploadFn:this.handleUploadFile}})}}]),t}(u.Component))||y)||y;t.default=j}}]);