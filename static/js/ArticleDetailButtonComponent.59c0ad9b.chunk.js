(this["webpackJsonpblog-admin"]=this["webpackJsonpblog-admin"]||[]).push([[8],{390:function(e,t,r){"use strict";var a=r(0),n=r.n(a);t.a=function(e){var t=0;switch(e.size){case"sm":t=8;break;case"md":t=12;break;case"lg":t=16;break;case"xl":t=24;break;default:t=8}return n.a.createElement("aside",{style:{height:t,width:"100%",clear:"both"}})}},403:function(e,t,r){"use strict";function a(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}r.d(t,"a",(function(){return a}))},876:function(e,t,r){"use strict";r.r(t);r(401);var a,n=r(402),i=(r(404),r(405)),c=(r(204),r(66)),o=r(11),l=r(12),u=r(33),s=r(31),h=r(32),p=(r(206),r(132)),m=(r(428),r(430)),d=r(0),b=r.n(d),f=r(70),g=r(130),v=r(390),y=r(68),k=r(23),E=r(403),w=r(101),j=r(58),S=m.a.Text,x=p.a.error,O=Object(g.b)((function(e){return{articleDetailStore:e.articleDetailStore,homepageStore:e.homepageStore}}))(a=Object(g.c)(a=function(e){function t(){var e,r;Object(o.a)(this,t);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(r=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(n)))).handleCancel=function(){r.props.history.replace(j.e.article.home)},r.handleSubmitContent=function(){var e=r.props.articleDetailStore,t=e.detail,a=e.changeDetail,n=e.validError,i=r.props.homepageStore.articleAlias;if(t){var c=[],o=t.draftDetail,l=t.title,u=t.intro,s=t.tags,h=t.markdown,p=t.renderType;if(l.trim()||(c.push("".concat(i,"\u6807\u9898")),n({key:y.b.titleError,value:!0})),u.trim()||(c.push("".concat(i,"\u7b80\u4ecb")),n({key:y.b.introError,value:!0})),s.length||(c.push("".concat(i,"\u6807\u7b7e")),n({key:y.b.tagError,value:!0})),(p===y.c.markdown&&!h.trim()||p===y.c.richText&&!o.toText())&&(c.push("".concat(i,"\u5185\u5bb9")),n({key:y.b.contentError,value:!0})),c.length){var m=c.join("\uff0c");return void x({title:"\u63d0\u793a",content:"".concat(m,"\u4e0d\u80fd\u4e3a\u7a7a")})}if(p===y.c.richText){var d=o.toHTML(),b=o.toRAW();a({key:y.a.richTextHtml,value:d}),a({key:y.a.richTextRaw,value:b})}y.c.markdown,w.a.remove(k.b)}},r}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.articleDetailStore.error.contentError,t=this.props.homepageStore.articleAlias;return b.a.createElement(b.a.Fragment,null,e&&b.a.createElement(S,{type:"danger"},t,"\u5185\u5bb9\u4e0d\u80fd\u4e3a\u7a7a"),b.a.createElement(v.a,{size:"lg"}),b.a.createElement(n.a,{span:24},b.a.createElement(i.a,{type:"flex",align:"middle",justify:"end"},b.a.createElement(c.a,{size:"large",onClick:this.handleCancel},"\u53d6\u6d88"),"\xa0 \xa0 \xa0",b.a.createElement(c.a,{type:"primary",size:"large",onClick:this.handleSubmitContent},"\u63d0\u4ea4"))),b.a.createElement(v.a,{size:"lg"}))}}]),t}(d.Component))||a)||a;t.default=Object(E.a)(f.withRouter)(O)}}]);