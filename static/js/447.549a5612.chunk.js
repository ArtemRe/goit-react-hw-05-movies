"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[447],{1443:function(e,t,r){r.d(t,{Hg:function(){return s},TP:function(){return o},V0:function(){return i},tx:function(){return p},zv:function(){return f}});var n=r(5861),a=r(4687),u=r.n(a),c=r(1044).ZP.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"683f79efee803f8e5fd116c9dfdb48e1"}}),s=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/trending/movie/day");case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/search/movie",{params:{query:t}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t,"/credits"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t,"/reviews"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},2447:function(e,t,r){r.r(t),r.d(t,{default:function(){return v}});var n=r(5861),a=r(885),u=r(4687),c=r.n(u),s=r(2791),i=r(470),o=r(1443),f=r(184),p=function(e){var t=e.items.map((function(e){var t=e.author,r=e.content,n=e.id;return(0,f.jsxs)("li",{children:[(0,f.jsxs)("b",{children:["Author: ",t]}),(0,f.jsx)("p",{children:r})]},n)}));return(0,f.jsx)("ul",{children:t})};function v(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),r=t[0],u=t[1],v=(0,s.useState)(null),h=(0,a.Z)(v,2),d=h[0],l=h[1],m=(0,i.UO)().movieId;return(0,s.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(null),e.prev=1,e.next=4,(0,o.tx)(m);case 4:t=e.sent,r=t.results,u(r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),l(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[m]),(0,f.jsxs)("div",{children:[d&&(0,f.jsx)("h2",{children:"Oops, something went wrong. Please try to reload the page"}),r.length>0&&(0,f.jsx)(p,{items:r}),!r.length&&(0,f.jsx)("b",{children:"There are no reviews for this movie yet"})]})}}}]);
//# sourceMappingURL=447.549a5612.chunk.js.map