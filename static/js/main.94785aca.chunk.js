(this["webpackJsonpdogg-app"]=this["webpackJsonpdogg-app"]||[]).push([[0],{31:function(e,a,t){},32:function(e,a,t){},34:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){"use strict";t.r(a);var s=t(0),c=t.n(s),n=t(21),r=t.n(n),i=t(9),o=(t(27),t(30),t(31),t(18)),l=t(7),d=t(8),j=t(11),b=t(10),u=(t(32),t(1)),h=function(e){Object(j.a)(t,e);var a=Object(b.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"DogList",children:[Object(u.jsx)("h1",{className:"display-1 text-center",children:"Dog List"}),Object(u.jsx)("div",{className:"row",children:this.props.dogs.map((function(e){return Object(u.jsxs)("div",{className:"Dog col-lg-4 text-center",children:[Object(u.jsx)("img",{src:e.src,alt:e.name}),Object(u.jsx)("h3",{children:e.name})]},e.name)}))})]})}}]),t}(s.Component),g=(t(34),function(e){Object(j.a)(t,e);var a=Object(b.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){var e=this.props.dog;return Object(u.jsx)("div",{className:"DogDetails row justify-content-center mt-5",children:Object(u.jsx)("div",{className:"col-11 col-lg-5",children:Object(u.jsxs)("div",{className:"DogDetails-card card",children:[Object(u.jsx)("img",{className:"card-img-top",src:e.src,alt:e.name}),Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsx)("h2",{className:"card-title",children:e.name}),Object(u.jsxs)("h4",{className:"card-subtitle text-muted",children:[e.age,"years old"]})]}),Object(u.jsx)("ul",{className:"list-group list-group-flush",children:e.facts.map((function(e,a){return Object(u.jsx)("li",{className:"list-group-item",children:e},a)}))}),Object(u.jsx)("div",{className:"card-body",children:Object(u.jsx)(i.b,{to:"/dogs",className:"btn btn-info",children:"Go Back"})})]})})})}}]),t}(s.Component)),m=function(e){Object(j.a)(t,e);var a=Object(b.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){var e=this.props.dogs.map((function(e){return Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(i.c,{exact:!0,to:"/dogs/".concat(e.name),className:"nav-link",children:e.name})},e.name)}));return Object(u.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:[Object(u.jsx)("a",{className:"navbar-brand",href:"#",children:"Dog App"}),Object(u.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(u.jsx)("span",{className:"navbar-toggler-icon"})}),Object(u.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(u.jsxs)("ul",{className:"navbar-nav",children:[Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(i.c,{exact:!0,to:"/dogs",className:"nav-link",children:"Home"})}),e]})})]})}}]),t}(s.Component),p=t(2),O=t.p+"static/media/whiskey.7650f3f2.jpg",v=t.p+"static/media/tubby.9c06bf82.jpg",x=t.p+"static/media/hazel.56f12732.jpg",f=(t(39),function(e){Object(j.a)(t,e);var a=Object(b.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){var e=this;return Object(u.jsxs)("div",{children:[Object(u.jsx)(m,{dogs:this.props.dogs}),Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)(p.c,{children:[Object(u.jsx)(p.a,{exact:!0,path:"/dogs",render:function(){return Object(u.jsx)(h,{dogs:e.props.dogs})}}),Object(u.jsx)(p.a,{exact:!0,path:"/dogs/:name",render:function(a){var t=a.match.params.name,s=e.props.dogs.find((function(e){return e.name.toLowerCase()===t.toLowerCase()}));return Object(u.jsx)(g,Object(o.a)(Object(o.a)({},a),{},{dog:s}))}})]})})]})}}]),t}(s.Component));f.defaultProps={dogs:[{name:"Whiskey",age:5,src:O,facts:["Whiskey loves eating popcorn.","Whiskey is a terrible guard dog.","Whiskey wants to cuddle with you!"]},{name:"Hazel",age:3,src:x,facts:["Hazel has soooo much energy!","Hazel is highly intelligent.","Hazel loves people more than dogs."]},{name:"Tubby",age:4,src:v,facts:["Tubby is not the brightest dog","Tubby does not like walks or exercise.","Tubby loves eating food."]}]};var N=f,y=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,41)).then((function(a){var t=a.getCLS,s=a.getFID,c=a.getFCP,n=a.getLCP,r=a.getTTFB;t(e),s(e),c(e),n(e),r(e)}))};r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(i.a,{children:Object(u.jsx)(N,{})})}),document.getElementById("root")),y()}},[[40,1,2]]]);
//# sourceMappingURL=main.94785aca.chunk.js.map