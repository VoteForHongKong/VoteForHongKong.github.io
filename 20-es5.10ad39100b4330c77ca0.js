function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,n,e){return n&&_defineProperties(t.prototype,n),e&&_defineProperties(t,e),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{WsNE:function(t,n,e){"use strict";e.r(n),e.d(n,"FunctionalConstituencyPageModule",(function(){return I}));var i=e("ofXK"),s=e("3Pt+"),c=e("TEn/"),o=e("tyNb"),a=e("mrSG"),r=e("JnHU"),u=e("fXoL"),l=e("2Rin"),h=e("sYmb"),f=e("LmEr"),b=e("2MiI"),d=e("gstJ"),p=e("gY5R");function v(t,n){1&t&&(u.Kb(0,"app-header",7),u.Zb(1,"translate")),2&t&&u.ec("title",u.ac(1,1,"funct.title1"))}function g(t,n){1&t&&(u.Kb(0,"app-header",7),u.Zb(1,"translate")),2&t&&u.ec("title",u.ac(1,1,"funct.title2"))}function m(t,n){if(1&t){var e=u.Nb();u.Mb(0,"div"),u.Mb(1,"app-options",8),u.Ub("ngModelChange",(function(t){return u.hc(e),u.Yb().constituency=t}))("votesChange",(function(){return u.hc(e),u.Yb().voteChange()})),u.Lb(),u.Lb()}if(2&t){var i=u.Yb();u.zb(1),u.ec("options",i.constituencies)("ngModel",i.constituency)("lang",i.trans.currentLang)}}function y(t,n){if(1&t){var e=u.Nb();u.Mb(0,"div"),u.Mb(1,"ion-row"),u.Mb(2,"ion-col",9),u.Mb(3,"h3",10),u.mc(4),u.Lb(),u.Mb(5,"app-vote",11),u.Ub("ngModelChange",(function(t){return u.hc(e),u.Yb().electeds=t})),u.Lb(),u.Lb(),u.Lb(),u.Lb()}if(2&t){var i=u.Yb();u.zb(4),u.nc(i.constituency[i.trans.currentLang]),u.zb(1),u.ec("candidates",i.candidates)("ngModel",i.electeds)("num",i.num)}}var C,k,M,w=[{path:"",component:(C=function(){function t(n,e,i,s){_classCallCheck(this,t),this.nav=n,this.voting=e,this.util=i,this.trans=s,this.constituencies=[],this.candidates=[],this.electeds=[],this.num=1,this.step=0}return _createClass(t,[{key:"ngOnInit",value:function(){return Object(a.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=this.util.validation(this.nav,!1,!0),e=n.manifest,this.polling=e.polling,this.constituencies=this.voting.findPollingsByType(r.a.FCY,this.polling.districts),0===this.constituencies.length?(this.util.notice("errors.manifest.constituenciesless"),this.util.reset(this.nav)):1===this.constituencies.length&&(this.constituency=this.constituencies[0],this.next());case 2:case"end":return t.stop()}}),t,this)})))}},{key:"ngAfterViewInit",value:function(){this.util.checkVotes(this.nav,1)}},{key:"next",value:function(){this.validate1()&&(this.candidates=this.voting.findCansByDis(this.constituency.id,this.polling.candidates),0===this.candidates.length?(this.util.notice("errors.manifest.candidatesless"),this.util.reset(this.nav)):this.step++)}},{key:"confirm",value:function(){return Object(a.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,e=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.validate2()){t.next=7;break}return t.next=3,this.util.voteConfirm("funct.title2");case 3:return n=t.sent,t.next=6,n.present();case 6:n.onDidDismiss().then((function(t){t&&"confirm"===t.role&&(e.voting.packVotes(e.electeds,e.constituency),e.nav.navigateRoot("gen-qrcode"))}));case 7:case"end":return t.stop()}}),t,this)})))}},{key:"validate1",value:function(){return null!=this.constituency}},{key:"validate2",value:function(){return this.electeds.length===this.num}},{key:"voteChange",value:function(){this.content.scrollToTop(500)}}]),t}(),C.\u0275fac=function(t){return new(t||C)(u.Jb(c.y),u.Jb(r.b),u.Jb(l.a),u.Jb(h.d))},C.\u0275cmp=u.Db({type:C,selectors:[["app-functional-constituency"]],viewQuery:function(t,n){var e;1&t&&u.qc(c.i,!0),2&t&&u.gc(e=u.Vb())&&(n.content=e.first)},decls:12,vars:8,consts:[[3,"title",4,"ngIf"],[1,"panel"],[1,"box","left"],[1,"corner"],[1,"box","right"],[4,"ngIf"],[3,"main","mainDisabled","mainClick"],[3,"title"],[3,"options","ngModel","lang","ngModelChange","votesChange"],[1,"content","ion-text-center"],[1,"sub-title","bottom-line"],[3,"candidates","ngModel","num","ngModelChange"]],template:function(t,n){1&t&&(u.lc(0,v,2,3,"app-header",0),u.lc(1,g,2,3,"app-header",0),u.Mb(2,"ion-content",1),u.Mb(3,"div",2),u.Kb(4,"div",3),u.Lb(),u.Mb(5,"div",4),u.Kb(6,"div",3),u.Lb(),u.Kb(7,"br"),u.lc(8,m,2,3,"div",5),u.lc(9,y,6,4,"div",5),u.Lb(),u.Mb(10,"app-footer",6),u.Ub("mainClick",(function(){return 0===n.step?n.next():n.confirm()})),u.Zb(11,"translate"),u.Lb()),2&t&&(u.ec("ngIf",0===n.step),u.zb(1),u.ec("ngIf",1===n.step),u.zb(7),u.ec("ngIf",0===n.step),u.zb(1),u.ec("ngIf",1===n.step),u.zb(1),u.ec("main",u.ac(11,6,0===n.step?"common.next":"common.confirm"))("mainDisabled",0===n.step?null==n.constituency:n.electeds.length!==n.num))},directives:[i.j,c.i,f.a,b.a,d.a,s.c,s.d,c.q,c.h,p.a],pipes:[h.c],styles:[""]}),C)}],L=((k=function t(){_classCallCheck(this,t)}).\u0275mod=u.Hb({type:k}),k.\u0275inj=u.Gb({factory:function(t){return new(t||k)},imports:[[o.i.forChild(w)],o.i]}),k),x=e("j1ZV"),I=((M=function t(){_classCallCheck(this,t)}).\u0275mod=u.Hb({type:M}),M.\u0275inj=u.Gb({factory:function(t){return new(t||M)},imports:[[i.b,s.a,c.v,h.b,x.a,L]]}),M)}}]);