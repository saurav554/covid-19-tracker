(this["webpackJsonpcovid19-tracker"]=this["webpackJsonpcovid19-tracker"]||[]).push([[0],{11:function(e,c,a){},13:function(e,c,a){},15:function(e,c,a){"use strict";a.r(c);var s=a(1),n=a(4),t=a.n(n),r=(a(11),a(3)),l=a.n(r),d=a(5),i=a(6),j=(a(13),a(0)),_=function(){var e=Object(s.useState)([]),c=Object(i.a)(e,2),a=c[0],n=c[1],t=function(){var e=Object(d.a)(l.a.mark((function e(){var c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.covid19india.org/data.json");case 3:return c=e.sent,e.next=6,c.json();case 6:a=e.sent,console.log(a.statewise[0]),n(a.statewise[0]),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){t()}),[]),Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("section",{children:[Object(j.jsx)("h1",{class:"slider-text1",children:" LIVE "}),Object(j.jsx)("h2",{children:"COVID-19 TRACKER"}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{className:"card",children:Object(j.jsx)("div",{className:"card__main",children:Object(j.jsxs)("div",{className:"card__inner",children:[Object(j.jsxs)("p",{className:"card__name",children:[Object(j.jsx)("span",{children:" OUR "})," COUNTRY "]}),Object(j.jsx)("p",{className:"card__total card__small",children:"INDIA"})]})})}),Object(j.jsx)("li",{className:"card",children:Object(j.jsx)("div",{className:"card__main",children:Object(j.jsxs)("div",{className:"card__inner",children:[Object(j.jsxs)("p",{className:"card__name",children:[Object(j.jsx)("span",{children:"TOTAL "})," RECOVERED "]}),Object(j.jsx)("p",{className:"card__total card__small",children:a.deltarecovered})]})})}),Object(j.jsx)("li",{className:"card",children:Object(j.jsx)("div",{className:"card__main",children:Object(j.jsxs)("div",{className:"card__inner",children:[Object(j.jsxs)("p",{className:"card__name",children:[Object(j.jsx)("span",{children:" TOTAL "})," CONFIRMED "]}),Object(j.jsx)("p",{className:"card__total card__small",children:a.deltaconfirmed})]})})}),Object(j.jsx)("li",{className:"card",children:Object(j.jsx)("div",{className:"card__main",children:Object(j.jsxs)("div",{className:"card__inner",children:[Object(j.jsxs)("p",{className:"card__name",children:[Object(j.jsx)("span",{children:" TOTAL "})," DEATHS "]}),Object(j.jsx)("p",{className:"card__total card__small",children:a.deaths})]})})}),Object(j.jsx)("li",{className:"card",children:Object(j.jsx)("div",{className:"card__main",children:Object(j.jsxs)("div",{className:"card__inner",children:[Object(j.jsxs)("p",{className:"card__name",children:[Object(j.jsx)("span",{children:" TOTAL "})," ACTIVE "]}),Object(j.jsx)("p",{className:"card__total card__small",children:a.active})]})})}),Object(j.jsx)("li",{className:"card",children:Object(j.jsx)("div",{className:"card__main",children:Object(j.jsxs)("div",{className:"card__inner",children:[Object(j.jsxs)("p",{className:"card__name",children:[Object(j.jsx)("span",{children:" LAST "})," UPDATED "]}),Object(j.jsx)("p",{className:"card__total card__small",children:a.lastupdatedtime})]})})})]})]})})};var O=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(_,{})})},h=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then((function(c){var a=c.getCLS,s=c.getFID,n=c.getFCP,t=c.getLCP,r=c.getTTFB;a(e),s(e),n(e),t(e),r(e)}))};t.a.render(Object(j.jsx)(O,{}),document.getElementById("root")),h()}},[[15,1,2]]]);
//# sourceMappingURL=main.3d2ac453.chunk.js.map