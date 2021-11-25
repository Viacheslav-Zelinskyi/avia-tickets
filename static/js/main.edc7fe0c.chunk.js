(this["webpackJsonpavia-tickets"]=this["webpackJsonpavia-tickets"]||[]).push([[0],{160:function(e,t,c){},161:function(e,t,c){},162:function(e,t,c){},171:function(e,t,c){},180:function(e,t,c){},185:function(e,t,c){},251:function(e,t,c){},252:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),a=c(32),s=c.n(a),i=(c(160),c(19)),l=(c(161),c(51)),u="/tickets",o="/mytickets",j="/about",d=c(138),b=c.n(d),p=(c(162),c(163),c(259)),O=c(123),m=c(140),h=c(90),x="en",f="ru";O.a.use(m.a).use(h.e).init({fallbackLng:"en",debug:!1,react:{useSuspense:!1}});O.a;var v,_,k=c(6),y=function(e){var t=e.text,c=e.route,n=Object(i.f)();return Object(k.jsx)(l.a,{type:"primary",shape:"round",size:"large",onClick:function(){return n(c)},children:t})},g=function(){var e=Object(p.a)(),t=e.t,c=e.i18n,n=[{value:x,label:t("header.english")},{value:f,label:t("header.russian")}];return Object(k.jsxs)("div",{className:"header__wrapper",children:[Object(k.jsxs)("div",{className:"header__links",children:[Object(k.jsx)(y,{text:t("header.home"),route:"/"}),Object(k.jsx)(y,{text:t("header.tickets"),route:u}),Object(k.jsx)(y,{text:t("header.myTickets"),route:o}),Object(k.jsx)(y,{text:t("header.about"),route:j})]}),Object(k.jsx)("div",{children:Object(k.jsx)(b.a,{value:c.language,options:n,onChange:function(e){return c.changeLanguage(e.value)}})})]})},N=(c(171),c(258)),T=c.p+"static/media/London.9ae5bae1.jpg",S=c.p+"static/media/Kyiv.55384f49.jpg",C=c.p+"static/media/Minsk.87938b76.jpg",D=c.p+"static/media/NewYork.36da7b1a.jpg",w=function(){var e=[{src:T,country:"Great Britain"},{src:S,country:"Ukraine"},{src:C,country:"Belarus"},{src:D,country:"USA"}];return Object(k.jsx)("div",{className:"home__wrapper",children:Object(k.jsx)(N.a,{className:"home__carousel",autoplay:!0,effect:"fade",children:e.map((function(e){return Object(k.jsx)("div",{className:"home__carouselItem",children:Object(k.jsx)("img",{src:e.src,title:e.country,alt:e.country})})}))})})},E=(c(180),c.p+"static/media/about.4d4a9cbe.jpg"),I=function(){var e=Object(p.a)().t;return Object(k.jsx)("div",{className:"about__wrapper",children:Object(k.jsxs)("div",{className:"about__content",children:[Object(k.jsxs)("div",{className:"about__description",children:[Object(k.jsx)("h1",{children:e("about.title")}),Object(k.jsx)("p",{children:e("about.description")})]}),Object(k.jsx)("div",{className:"about__image",children:Object(k.jsx)("img",{src:E,alt:e("about.belavia")})})]})})},R=c(254),A=c(27),M=c(30),Y=c(68),z=c(35),F=Object(z.b)("ADD_TICKET"),U=Object(z.c)([],Object(M.a)({},F.type,(function(e,t){e.push(Object(Y.a)({id:e.length},t.payload))}))),B=function(e){var t=new Date(1e3*e),c=t.getDate(),n=t.getMonth(),r=t.getFullYear(),a=t.getHours(),s=t.getMinutes();return"".concat(c,".").concat(n,".").concat(r," ").concat(a,":").concat(s)},J=(c(185),function(e){var t=e.text,c=e.onClick;return Object(k.jsx)(l.a,{type:"primary",onClick:c,children:t})}),L=function(e,t){return Object(k.jsx)(J,{text:t("myTickets.saveJSON"),onClick:function(){return function(e){var t=new Blob([JSON.stringify(e)],{type:"text/json"}),c=document.createElement("a");c.download="ticket.json",c.href=window.URL.createObjectURL(t);var n=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!0});c.dispatchEvent(n),c.remove()}(e)}})},P=function(e){return e?B(e):null},H=function(e){return[{title:e("myTickets.id"),dataIndex:"id",key:"id"},{title:e("common.from"),dataIndex:"from",key:"from"},{title:e("common.to"),dataIndex:"to",key:"to"},{title:e("myTickets.departureDate"),dataIndex:"departureDate",key:"departureDate",render:P},{title:e("myTickets.returnDate"),dataIndex:"returnDate",key:"returnDate",render:P},{title:e("myTickets.passengers"),dataIndex:"passengers",key:"passengers",render:function(t){return function(e,t){return"".concat(t("myTickets.adult")+e.adult," ").concat(t("myTickets.childrens")+e.childrens," ").concat(t("myTickets.infants")+e.infants)}(t,e)}},{title:e("myTickets.actions"),dataIndex:"action",key:"action",render:function(t,c){return L(c,e)}}]},G=function(){var e=Object(p.a)().t,t=Object(A.b)(),c=Object(A.c)((function(e){return e.allTickets}));return Object(k.jsxs)("div",{className:"mytickets__wrapper",children:[Object(k.jsx)("div",{className:"mytickets__table",children:Object(k.jsx)(R.a,{dataSource:c,columns:H(e)})}),Object(k.jsx)("div",{className:"mytickets__btnWrapper",children:Object(k.jsx)("div",{className:"mytickets__btnBlock",children:Object(k.jsx)(J,{text:e("myTickets.uploadJSON"),onClick:function(){!function(e){var t=new FileReader,c=document.createElement("input");c.type="file",c.click(),c.onchange=function(c){t.readAsText(c.target.files[0],"UTF-8"),t.onload=function(t){e(JSON.parse(t.target.result))}},c.remove()}((function(e){t(F(e))}))}})})})]})},K=c(41),W=(c(251),c(257)),V=c(256),q=Object(z.b)("SET_FROM"),Q=Object(z.b)("SET_DESTINATION"),X=Object(z.b)("SET_DEPARTURE_DATE"),Z=Object(z.b)("SET_RETURN_DATE"),$=Object(z.b)("SET_PASSENGERS"),ee=Object(z.b)("CLEAR_TICKET"),te=Object(z.c)({},(v={},Object(M.a)(v,q.type,(function(e,t){e.from=t.payload})),Object(M.a)(v,Q.type,(function(e,t){e.to=t.payload})),Object(M.a)(v,X.type,(function(e,t){e.departureDate=t.payload})),Object(M.a)(v,Z.type,(function(e,t){e.returnDate=t.payload})),Object(M.a)(v,$.type,(function(e,t){e.passengers=t.payload})),Object(M.a)(v,ee.type,(function(e,t){delete e.from,delete e.to,delete e.departureDate,delete e.returnDate,delete e.passengers})),v)),ce=(c(81),function(e){var t=e.ticket,c=e.navigate,n=Object(p.a)().t,r=Object(A.b)();return Object(k.jsx)("div",{className:"step__summaryContainer",children:Object(k.jsxs)(V.a,{className:"step__summaryCard",title:n("tickets.summary"),type:"inner",children:[Object(k.jsx)("p",{children:n("common.from")+": "+t.from}),Object(k.jsx)("p",{children:n("common.to")+": "+t.to}),Object(k.jsx)("p",{children:n("tickets.departureAt")+B(t.departureDate)}),Object(k.jsx)("p",{children:t.returnDate?n("tickets.returnAt")+B(t.returnDate):null}),Object(k.jsx)("span",{children:n("tickets.passengers")}),Object(k.jsxs)("ul",{children:[Object(k.jsx)("li",{children:n("tickets.adult")+(null===t||void 0===t?void 0:t.passengers.adult)}),Object(k.jsx)("li",{children:n("tickets.childrens")+(null===t||void 0===t?void 0:t.passengers.childrens)}),Object(k.jsx)("li",{children:n("tickets.infants")+(null===t||void 0===t?void 0:t.passengers.infants)})]}),Object(k.jsx)("div",{className:"step__submitWrapper",children:Object(k.jsx)("div",{className:"step__submit",children:Object(k.jsx)(l.a,{type:"primary",size:"large",onClick:function(){r(F(t)),r(ee()),c(o)},children:n("tickets.buy")})})})]})})}),ne=c(87);!function(e){e.From="From",e.To="To"}(_||(_={}));var re,ae=ne.a.Option,se=function(e){var t=e.values,c=e.countries,n=Object(A.b)();return Object(k.jsx)(k.Fragment,{children:t.map((function(e){return Object(k.jsx)(ne.a,{placeholder:e,size:"large",className:"step__selector",onChange:function(t){return function(e,t){t===_.From?n(q(e)):n(Q(e))}(t,e)},children:c.map((function(e){return Object(k.jsx)(ae,{value:e.name.common,children:e.name.common})}))})}))})},ie=function(e){var t=e.setCurrentStep,c=e.currentStep,n=e.countries,r=e.ticket,a=Object(p.a)().t,s=!r.from||!r.to;return Object(k.jsxs)("div",{className:"step__wrapper",children:[Object(k.jsx)("div",{className:"step__container",children:Object(k.jsx)(se,{values:[_.From,_.To],countries:n})}),Object(k.jsx)("div",{className:"step__submit",children:Object(k.jsx)(l.a,{type:"primary",size:"large",onClick:function(){return t(c+1)},disabled:s,children:a("common.submit")})})]})};!function(e){e[e.adult=0]="adult",e[e.childrens=1]="childrens",e[e.infants=2]="infants"}(re||(re={}));var le=function(e){var t=e.labels,c=e.setPeopleCounter,n=e.peopleCounter;return Object(k.jsx)("div",{children:t.map((function(e,t){return Object(k.jsxs)("div",{className:"step__peopleCounter",children:[Object(k.jsx)("h2",{children:e}),Object(k.jsxs)("div",{className:"step__counterBtn",children:[Object(k.jsx)(l.a,{shape:"circle",onClick:function(){return function(e){c(Object(Y.a)(Object(Y.a)({},n),{},Object(M.a)({},re[e],n[re[e]]<=0?0:n[re[e]]-1)))}(t)},children:"-"}),Object(k.jsx)("span",{children:n[re[t]]}),Object(k.jsx)(l.a,{shape:"circle",onClick:function(){return function(e){return c(Object(Y.a)(Object(Y.a)({},n),{},Object(M.a)({},re[e],n[re[e]]+1)))}(t)},children:"+"})]})]})}))})},ue=function(e){var t=e.setCurrentStep,c=e.currentStep,n=e.setPeopleCounter,r=e.peopleCounter,a=Object(p.a)().t,s=Object(A.b)(),i=0===r.adult&&0===r.childrens&&0===r.infants;return Object(k.jsxs)("div",{className:"step__wrapper",children:[Object(k.jsx)("div",{className:"step__container",children:Object(k.jsx)("div",{children:Object(k.jsx)(le,{labels:[a("tickets.adult"),a("tickets.childrens"),a("tickets.infants")],setPeopleCounter:n,peopleCounter:r})})}),Object(k.jsx)("div",{className:"step__submit",children:Object(k.jsx)(l.a,{type:"primary",size:"large",onClick:function(){t(c+1),s($(r))},disabled:i,children:a("common.submit")})})]})},oe=c(255),je=function(e){var t=e.setCurrentStep,c=e.currentStep,n=e.ticket,r=Object(p.a)().t,a=Object(A.b)(),s=!n.departureDate;return Object(k.jsxs)("div",{className:"step__wrapper",children:[Object(k.jsx)("div",{className:"step__container",children:Object(k.jsx)(oe.a,{showTime:!0,size:"large",format:"DD.MM.YYYY HH:mm",minuteStep:15,className:"step__selector",onChange:function(e){a(X((null===e||void 0===e?void 0:e.unix())||null))}})}),Object(k.jsx)("div",{className:"step__submit",children:Object(k.jsx)(l.a,{type:"primary",size:"large",onClick:function(){return t(c+1)},disabled:s,children:r("common.submit")})})]})},de=c(108),be=[ie,je,function(e){var t=e.setCurrentStep,c=e.currentStep,n=e.setIsRoundTrip,r=e.isRoundTrip,a=e.ticket,s=Object(p.a)().t,i=Object(A.b)(),u=!a.returnDate;return Object(k.jsxs)("div",{className:"step__wrapper",children:[Object(k.jsxs)(de.a.Group,{className:"step__radio",defaultValue:1,onChange:function(e){return n(e.target.value)},children:[Object(k.jsx)(de.a,{value:1,children:s("tickets.roundTrip")}),Object(k.jsx)(de.a,{value:0,children:s("tickets.oneWay")})]}),Object(k.jsx)("div",{className:"step__container",children:r?Object(k.jsxs)("div",{children:[Object(k.jsx)("h2",{className:"step__header",children:s("tickets.selectDate")}),Object(k.jsx)(oe.a,{showTime:!0,size:"large",format:"DD.MM.YYYY HH:mm",minuteStep:15,className:"step__selector",onChange:function(e){i(Z((null===e||void 0===e?void 0:e.unix())||null))}})]}):null}),Object(k.jsx)("div",{className:"step__submit",children:Object(k.jsx)(l.a,{type:"primary",size:"large",onClick:function(){return t(c+1)},disabled:u&&!!r,children:s("common.submit")})})]})},ue,ce],pe=c(127),Oe=c.n(pe),me=c(150),he=function(){var e=Object(me.a)(Oe.a.mark((function e(){var t;return Oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://restcountries.com/v3.1/all");case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),xe=W.a.Step,fe=function(){var e=Object(p.a)().t,t=Object(A.c)((function(e){return e.ticket})),c=Object(i.f)(),r=Object(n.useState)([]),a=Object(K.a)(r,2),s=a[0],l=a[1],u=Object(n.useState)(0),o=Object(K.a)(u,2),j=o[0],d=o[1],b=Object(n.useState)(1),O=Object(K.a)(b,2),m=O[0],h=O[1],x=Object(n.useState)({adult:0,childrens:0,infants:0}),f=Object(K.a)(x,2),v=f[0],_=f[1];Object(n.useEffect)((function(){he().then((function(e){return l(e)})).catch((function(e){return alert(e)}))}),[]);var y={setCurrentStep:d,currentStep:j,setIsRoundTrip:h,isRoundTrip:m,setPeopleCounter:_,peopleCounter:v,countries:s,ticket:t,navigate:c};return Object(k.jsx)("div",{className:"tickets__wrapper",children:Object(k.jsxs)("div",{className:"tickets__container",children:[Object(k.jsxs)(W.a,{current:j,children:[Object(k.jsx)(xe,{title:e("steps.firstStep")}),Object(k.jsx)(xe,{title:e("steps.secondStep")}),Object(k.jsx)(xe,{title:e("steps.thirdStep")}),Object(k.jsx)(xe,{title:e("steps.fourthStep")}),Object(k.jsx)(xe,{title:e("steps.fifthStep")})]}),be[j](y)]})})};var ve=function(){return Object(k.jsxs)("div",{className:"App",children:[Object(k.jsx)(g,{}),Object(k.jsx)("div",{className:"main",children:Object(k.jsxs)(i.c,{children:[Object(k.jsx)(i.a,{path:"/",element:Object(k.jsx)(w,{})}),Object(k.jsx)(i.a,{path:j,element:Object(k.jsx)(I,{})}),Object(k.jsx)(i.a,{path:u,element:Object(k.jsx)(fe,{})}),Object(k.jsx)(i.a,{path:o,element:Object(k.jsx)(G,{})})]})})]})},_e=c(82),ke=c(46),ye=Object(ke.b)({ticket:te,allTickets:U}),ge=Object(z.a)({reducer:ye});s.a.render(Object(k.jsx)(r.a.StrictMode,{children:Object(k.jsx)(A.a,{store:ge,children:Object(k.jsx)(_e.a,{children:Object(k.jsx)(ve,{})})})}),document.getElementById("root"))},81:function(e,t,c){}},[[252,1,2]]]);
//# sourceMappingURL=main.edc7fe0c.chunk.js.map