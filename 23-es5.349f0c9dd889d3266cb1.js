function _classCallCheck(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,i){for(var t=0;t<i.length;t++){var n=i[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,i,t){return i&&_defineProperties(e.prototype,i),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"90oJ":function(e,i,t){"use strict";t.r(i),t.d(i,"PersonalInfoPageModule",(function(){return Z}));var n=t("ofXK"),r=t("3Pt+"),s=t("TEn/"),o=t("tyNb"),a=t("mrSG"),b=t("fXoL"),c=t("JnHU"),d=t("2Rin"),l=t("2MiI"),h=t("qybP"),u=t("LmEr"),m=t("sYmb"),g=function(e){return{field:e}};function f(e,i){if(1&e&&(b.Mb(0,"small",17),b.mc(1),b.Zb(2,"translate"),b.Zb(3,"translate"),b.Lb()),2&e){var t=b.Yb();b.zb(1),b.nc(b.bc(2,1,"errors."+t.hkidErrMsg,b.fc(6,g,b.ac(3,4,t.hkidErrField))))}}function p(e,i){1&e&&(b.Mb(0,"small",17),b.mc(1,"\xa0"),b.Lb())}function M(e,i){if(1&e&&(b.Mb(0,"small",17),b.mc(1),b.Zb(2,"translate"),b.Zb(3,"translate"),b.Lb()),2&e){var t=b.Yb();b.zb(1),b.nc(b.bc(2,1,"errors."+t.issueErrMsg,b.fc(6,g,b.ac(3,4,t.issueErrField))))}}function k(e,i){1&e&&(b.Mb(0,"small",17),b.mc(1,"\xa0"),b.Lb())}function v(e,i){if(1&e&&(b.Mb(0,"small",17),b.mc(1),b.Zb(2,"translate"),b.Zb(3,"translate"),b.Lb()),2&e){var t=b.Yb();b.zb(1),b.nc(b.bc(2,1,"errors."+t.birthErrMsg,b.fc(6,g,b.ac(3,4,t.birthErrField))))}}function L(e,i){1&e&&(b.Mb(0,"small",17),b.mc(1,"\xa0"),b.Lb())}var E,C,w,y=function(e){return{warning:e}},x=[{path:"",component:(E=function(){function e(i,t,n){_classCallCheck(this,e),this.nav=i,this.voting=t,this.util=n,this.hkidErrMsg="",this.hkidErrField="",this.issueErrMsg="",this.issueErrField="",this.birthErrMsg="",this.birthErrField="",this.hkid="    ",this.issue="      ",this.birth="  ",this.keyboard=!1}return _createClass(e,[{key:"ngOnInit",value:function(){return Object(a.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var i=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.util.validation(this.nav),window.addEventListener("keyboardWillHide",(function(){i.keyboard=!1})),window.addEventListener("keyboardWillShow",(function(){i.keyboard=!0}));case 1:case"end":return e.stop()}}),e,this)})))}},{key:"ngAfterViewInit",value:function(){this.util.checkVotes(this.nav,0)}},{key:"back",value:function(){this.nav.pop()}},{key:"confirm",value:function(){this.validate()&&(this.voting.cacheVoter(this.hkid,this.issue,this.birth),this.nav.navigateForward("geo-constituency"))}},{key:"validate",value:function(){if(this.hkidErrMsg="",this.hkidErrField="",this.issueErrMsg="",this.issueErrField="",this.birthErrMsg="",this.birthErrField="",(this.hkid.length<4||this.hkid.includes(" "))&&(this.hkidErrMsg="complete",this.hkidErrField="personal.hkid.id.digit"),"0000"===this.hkid&&(this.hkidErrMsg="pattern",this.hkidErrField="personal.hkid.id.digit"),this.issue.length<6||this.issue.includes(" "))this.issueErrMsg="complete",this.issueErrField="personal.hkid.issue.title";else{var e=Number(this.issue[0]+this.issue[1]),i=Number(this.issue[2]+this.issue[3]),t=Number(this.issue[4]+this.issue[5]);this.isValidDate(e,i,t)||(this.issueErrMsg="pattern",this.issueErrField="personal.hkid.issue.title")}if(this.birth.length<2||this.birth.includes(" "))this.birthErrMsg="complete",this.birthErrField="personal.hkid.birth.title";else{var n=Number(this.birth[0]+this.birth[1]);(n<1||n>31)&&(this.birthErrMsg="pattern",this.birthErrField="personal.hkid.birth.title")}return""===this.hkidErrMsg&&""===this.issueErrMsg&&""===this.birthErrMsg}},{key:"isValidDate",value:function(e,i,t){var n=Number(t)<=Number(20)?"20"+t:"19"+t;return(i=parseInt(i,10)-1)>=0&&i<12&&e>0&&e<=this.daysInMonth(i,n)}},{key:"daysInMonth",value:function(e,i){switch(e){case 1:return i%4==0&&i%100||i%400==0?29:28;case 8:case 3:case 5:case 10:return 30;default:return 31}}}]),e}(),E.\u0275fac=function(e){return new(e||E)(b.Jb(s.x),b.Jb(c.b),b.Jb(d.a))},E.\u0275cmp=b.Db({type:E,selectors:[["app-personal-info"]],decls:75,vars:53,consts:[[3,"title"],[1,"panel"],[1,"box","left"],[1,"corner"],[1,"box","right"],[1,"block",3,"ngClass"],[1,"segment"],[1,"ion-text-center"],[1,"ion-no-margin"],[1,"ion-no-margin","sub-text"],[1,"highlight"],[1,"id-pins",3,"isCodeHidden","isNonDigitsCode","codeLength","prefill","codeChanged"],["class","warning-text",4,"ngIf"],[1,"sub-text"],[1,"id-issue",3,"isCodeHidden","isNonDigitsCode","codeLength","prefill","divide","codeChanged"],[1,"id-birth",3,"isCodeHidden","isNonDigitsCode","codeLength","prefill","codeChanged"],[3,"hidden","main","vice","mainClick","viceClick"],[1,"warning-text"]],template:function(e,i){1&e&&(b.Kb(0,"app-header",0),b.Zb(1,"translate"),b.Mb(2,"ion-content",1),b.Mb(3,"div",2),b.Kb(4,"div",3),b.Lb(),b.Mb(5,"div",4),b.Kb(6,"div",3),b.Lb(),b.Kb(7,"br"),b.Kb(8,"br"),b.Kb(9,"br"),b.Mb(10,"ion-row",5),b.Mb(11,"span",6),b.mc(12,"1"),b.Lb(),b.Mb(13,"ion-col",7),b.Mb(14,"p",8),b.Mb(15,"b"),b.mc(16),b.Zb(17,"translate"),b.Lb(),b.Lb(),b.Mb(18,"p",9),b.mc(19,"Z\xa06\xa08\xa0"),b.Mb(20,"mark",10),b.mc(21,"3\xa03\xa06\xa05"),b.Lb(),b.mc(22,"\xa0(\xa05\xa0)"),b.Lb(),b.Mb(23,"app-code-pins",11),b.Ub("codeChanged",(function(e){return i.hkid=e})),b.Lb(),b.lc(24,f,4,8,"small",12),b.lc(25,p,2,0,"small",12),b.Lb(),b.Lb(),b.Kb(26,"br"),b.Mb(27,"ion-row",5),b.Mb(28,"span",6),b.mc(29,"2"),b.Lb(),b.Mb(30,"ion-col",7),b.Mb(31,"p",8),b.Mb(32,"b"),b.mc(33),b.Zb(34,"translate"),b.Lb(),b.Lb(),b.Mb(35,"p",9),b.Mb(36,"mark",10),b.mc(37,"2\xa06"),b.Lb(),b.mc(38,"\xa0-\xa0"),b.Mb(39,"mark",10),b.mc(40,"1\xa01"),b.Lb(),b.mc(41,"\xa0-\xa0"),b.Mb(42,"mark",10),b.mc(43,"1\xa08"),b.Lb(),b.Lb(),b.Mb(44,"small",13),b.mc(45),b.Zb(46,"translate"),b.Lb(),b.Mb(47,"app-code-pins",14),b.Ub("codeChanged",(function(e){return i.issue=e})),b.Lb(),b.lc(48,M,4,8,"small",12),b.lc(49,k,2,0,"small",12),b.Lb(),b.Lb(),b.Kb(50,"br"),b.Mb(51,"ion-row",5),b.Mb(52,"span",6),b.mc(53,"3"),b.Lb(),b.Mb(54,"ion-col",7),b.Mb(55,"p",8),b.Mb(56,"b"),b.mc(57),b.Zb(58,"translate"),b.Lb(),b.Lb(),b.Mb(59,"p",9),b.Mb(60,"mark",10),b.mc(61,"0\xa03"),b.Lb(),b.mc(62,"\xa0-\xa00\xa06\xa0-\xa01\xa09\xa08\xa05"),b.Lb(),b.Mb(63,"small",13),b.mc(64),b.Zb(65,"translate"),b.Lb(),b.Mb(66,"app-code-pins",15),b.Ub("codeChanged",(function(e){return i.birth=e})),b.Lb(),b.lc(67,v,4,8,"small",12),b.lc(68,L,2,0,"small",12),b.Lb(),b.Lb(),b.Kb(69,"br"),b.Kb(70,"br"),b.Kb(71,"br"),b.Lb(),b.Mb(72,"app-footer",16),b.Ub("mainClick",(function(){return i.confirm()}))("viceClick",(function(){return i.back()})),b.Zb(73,"translate"),b.Zb(74,"translate"),b.Lb()),2&e&&(b.ec("title",b.ac(1,31,"personal.title")),b.zb(10),b.ec("ngClass",b.fc(47,y,i.hkidErrMsg)),b.zb(6),b.nc(b.ac(17,33,"personal.hkid.id.digit")),b.zb(7),b.ec("isCodeHidden",!1)("isNonDigitsCode",!1)("codeLength",4)("prefill"," "),b.zb(1),b.ec("ngIf",i.hkidErrMsg),b.zb(1),b.ec("ngIf",""===i.hkidErrMsg),b.zb(2),b.ec("ngClass",b.fc(49,y,i.issueErrMsg)),b.zb(6),b.nc(b.ac(34,35,"personal.hkid.issue.title")),b.zb(12),b.nc(b.ac(46,37,"personal.hkid.issue.format")),b.zb(2),b.ec("isCodeHidden",!1)("isNonDigitsCode",!1)("codeLength",6)("prefill"," ")("divide",2),b.zb(1),b.ec("ngIf",i.issueErrMsg),b.zb(1),b.ec("ngIf",""===i.issueErrMsg),b.zb(2),b.ec("ngClass",b.fc(51,y,i.birthErrMsg)),b.zb(6),b.nc(b.ac(58,39,"personal.hkid.birth.title")),b.zb(7),b.nc(b.ac(65,41,"personal.hkid.birth.format")),b.zb(2),b.ec("isCodeHidden",!1)("isNonDigitsCode",!1)("codeLength",2)("prefill"," "),b.zb(1),b.ec("ngIf",i.birthErrMsg),b.zb(1),b.ec("ngIf",""===i.birthErrMsg),b.zb(4),b.ec("hidden",i.keyboard)("main",b.ac(73,43,"common.confirm"))("vice",b.ac(74,45,"common.back")))},directives:[l.a,s.i,s.p,n.h,s.h,h.a,n.j,u.a],pipes:[m.c],styles:[".id-card-demo[_ngcontent-%COMP%]{max-width:320px;margin:auto}.id-pins[_ngcontent-%COMP%]{max-width:248px;--item-spacing:18px;--item-font-size:20px;--item-background:var(--ion-color-btn-gray);--item-border:none;--item-border-bottom:none;--item-border-has-value:none;--item-border-bottom-has-value:none;--item-border-focused:none;--item-border-bottom-focused:none;--item-shadow-focused:none}.id-issue[_ngcontent-%COMP%], .id-pins[_ngcontent-%COMP%]{margin:24px auto auto;--item-height:2.5em}.id-issue[_ngcontent-%COMP%]{max-width:300px;--item-spacing:9px;--item-font-size:20px;--item-background:var(--ion-color-btn-gray);--item-border:none;--item-border-bottom:none;--item-border-has-value:none;--item-border-bottom-has-value:none;--item-border-focused:none;--item-border-bottom-focused:none;--item-shadow-focused:none}.id-birth[_ngcontent-%COMP%]{max-width:185px;margin:24px auto auto;--item-spacing:32px;--item-height:2.5em;--item-font-size:20px;--item-background:var(--ion-color-btn-gray);--item-border:none;--item-border-bottom:none;--item-border-has-value:none;--item-border-bottom-has-value:none;--item-border-focused:none;--item-border-bottom-focused:none;--item-shadow-focused:none}"]}),E)}],z=((C=function e(){_classCallCheck(this,e)}).\u0275mod=b.Hb({type:C}),C.\u0275inj=b.Gb({factory:function(e){return new(e||C)},imports:[[o.i.forChild(x)],o.i]}),C),F=t("j1ZV"),Z=((w=function e(){_classCallCheck(this,e)}).\u0275mod=b.Hb({type:w}),w.\u0275inj=b.Gb({factory:function(e){return new(e||w)},imports:[[n.b,r.a,s.u,m.b,F.a,z]]}),w)}}]);