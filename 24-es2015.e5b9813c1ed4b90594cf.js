(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{L7Uo:function(n,t,i){"use strict";i.r(t),i.d(t,"OnboardingPageModule",(function(){return L}));var o=i("ofXK"),e=i("3Pt+"),c=i("TEn/"),r=i("tyNb"),a=i("mrSG"),b=i("fXoL"),s=i("S64H"),l=i("2Rin"),d=i("JnHU"),g=i("kwrG"),h=i("sYmb");function u(n,t){1&n&&b.Kb(0,"ion-spinner",7)}function p(n,t){1&n&&b.Kb(0,"ion-spinner",7)}const f=[{path:"",component:(()=>{class n{constructor(n,t,i,o,e){this.nav=n,this.trans=t,this.util=i,this.voting=o,this.network=e,this.loading=!1}ngOnInit(){return Object(a.a)(this,void 0,void 0,(function*(){yield this.trans.initLang()}))}chooseLang(n){return Object(a.a)(this,void 0,void 0,(function*(){try{if(this.loading=!0,"none"===this.network.type)throw"errors.network.connection";yield this.voting.verify(),this.trans.setLanguage(n),this.nav.navigateForward("agreement")}catch(t){yield this.util.notice(t)}finally{this.loading=!1}}))}}return n.\u0275fac=function(t){return new(t||n)(b.Jb(c.y),b.Jb(s.a),b.Jb(l.a),b.Jb(d.b),b.Jb(g.a))},n.\u0275cmp=b.Db({type:n,selectors:[["app-onboarding"]],decls:20,vars:16,consts:[[1,"ion-padding"],[1,"vertical-middle"],["src","assets/imgs/icon-white.png",1,"logo"],[1,"title",3,"innerHTML"],["size","9"],["shape","round","expand","block","color","btn-light",1,"btn",3,"disabled","click"],["color","dark",4,"ngIf"],["color","dark"]],template:function(n,t){1&n&&(b.Mb(0,"ion-content",0),b.Mb(1,"ion-row",1),b.Mb(2,"ion-col"),b.Kb(3,"ion-img",2),b.Kb(4,"h3",3),b.Zb(5,"translate"),b.Kb(6,"h4",3),b.Zb(7,"translate"),b.Mb(8,"ion-row"),b.Mb(9,"ion-col",4),b.Mb(10,"ion-button",5),b.Ub("click",(function(){return t.chooseLang("zh")})),b.mc(11),b.Zb(12,"translate"),b.lc(13,u,1,0,"ion-spinner",6),b.Lb(),b.Lb(),b.Lb(),b.Mb(14,"ion-row"),b.Mb(15,"ion-col",4),b.Mb(16,"ion-button",5),b.Ub("click",(function(){return t.chooseLang("en")})),b.mc(17),b.Zb(18,"translate"),b.lc(19,p,1,0,"ion-spinner",6),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb()),2&n&&(b.zb(4),b.ec("innerHTML",b.ac(5,8,"onborading.title.zh"),b.ic),b.zb(2),b.ec("innerHTML",b.ac(7,10,"onborading.title.en"),b.ic),b.zb(4),b.ec("disabled",t.loading),b.zb(1),b.oc(" ",b.ac(12,12,"lang.zh"),"\xa0\xa0 "),b.zb(2),b.ec("ngIf",t.loading),b.zb(3),b.ec("disabled",t.loading),b.zb(1),b.oc(" ",b.ac(18,14,"lang.en"),"\xa0\xa0 "),b.zb(2),b.ec("ngIf",t.loading))},directives:[c.i,c.q,c.h,c.m,c.e,o.j,c.r],pipes:[h.c],styles:["ion-content[_ngcontent-%COMP%]{--background:url(background.9c3e4fb78e34b34e5127.png) no-repeat fixed center/cover!important}.vertical-middle[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:100%}.logo[_ngcontent-%COMP%]{width:96px}.btn[_ngcontent-%COMP%]{max-width:282px}"]}),n})()}];let w=(()=>{class n{}return n.\u0275mod=b.Hb({type:n}),n.\u0275inj=b.Gb({factory:function(t){return new(t||n)},imports:[[r.i.forChild(f)],r.i]}),n})();var m=i("j1ZV");let L=(()=>{class n{}return n.\u0275mod=b.Hb({type:n}),n.\u0275inj=b.Gb({factory:function(t){return new(t||n)},imports:[[o.b,e.a,c.v,h.b,m.a,w]]}),n})()}}]);