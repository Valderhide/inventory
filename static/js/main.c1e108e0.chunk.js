(this.webpackJsonpinventory=this.webpackJsonpinventory||[]).push([[0],{55:function(e){e.exports=JSON.parse('[{"title":"Fabrics","items":[{"titles":"Colors","subCategories":["Red","Green","Blue"]},{"titles":"Themes","subCategories":["Christmas","Easter","Haloween"]},{"titles":"Type","subCategories":["Nylon","Polyester","Cotton"]}]},{"title":"Patterns","items":[{"titles":"Dropdown 1","subCategories":["Chevron","Paisley"]},{"titles":"Dropdown 2","subCategories":["Chevron","Paisley"]},{"titles":"Dropdown 3","subCategories":["Chevron","Paisley"]}]},{"title":"Buttons","items":[{"titles":"Type","subCategories":["Plastic","Metal","Acrylic"]},{"titles":"Size","subCategories":["10mm","15mm","20mm"]},{"titles":"Color","subCategories":["Red","Green","Blue"]}]}]')},66:function(e,t,r){},69:function(e,t,r){},73:function(e,t,r){"use strict";r.r(t);var c=r(0),n=r.n(c),s=r(16),a=r.n(s),i=(r(66),r(51)),o=r.n(i),l=r(54),j=r(6),d=r(58),b=r(83),u=(r(68),r(69),r(8)),h=r(2),O=r(56),x=r(85),m=r(79),p=r(80),f=r(60),g=r(84),C=r(81),v=r(55),y=r(1);function S(e){var t=e.title,r=e.items,c=(e.selectedCategory,e.setSelectedCategory),n=function(e){c((function(r){return Object(h.a)(Object(h.a)({},r),{},Object(u.a)({},t,e))}))};return Object(y.jsx)(O.a,{children:Object(y.jsx)(x.a,{className:"categories-container",children:Object(y.jsxs)(x.a.Item,{eventKey:"0",children:[Object(y.jsx)(x.a.Header,{children:t}),r.map((function(e){var t=e.titles,r=e.subCategories;return Object(y.jsx)(x.a.Body,{children:Object(y.jsx)(m.a,{as:p.a,variant:"primary",onSelect:n,title:t,children:r.map((function(e){return Object(y.jsx)(f.a.Item,{eventKey:e,children:e},e)}))})},t)}))]})})})}function I(e){var t=e.makeHandleSubmit,r=Object(c.useState)({}),n=Object(j.a)(r,2),s=n[0],a=n[1];return Object(y.jsxs)(y.Fragment,{children:[v.map((function(e){var t=e.title,r=e.items;return Object(y.jsx)(S,{title:t,selectedCategory:s,setSelectedCategory:a,items:r},t)})),Object(y.jsxs)(g.a,{onSubmit:t(s),id:"submitForm",children:[Object(y.jsxs)(g.a.Group,{controlId:"formFile",className:"mb-3",children:[Object(y.jsx)(g.a.Label,{children:"Item Picture"}),Object(y.jsx)(g.a.Control,{type:"file"})]}),Object(y.jsxs)(C.a,{children:[Object(y.jsx)(O.a,{md:!0,children:Object(y.jsxs)(g.a.Group,{controlId:"formName",children:[Object(y.jsx)(g.a.Label,{children:"Name"}),Object(y.jsx)(g.a.Control,{placeholder:"Name of Material"})]})}),Object(y.jsx)(O.a,{md:!0,children:Object(y.jsxs)(g.a.Group,{controlId:"formColor",children:[Object(y.jsx)(g.a.Label,{children:"Color"}),Object(y.jsx)(g.a.Control,{placeholder:"Color"})]})})]}),Object(y.jsxs)(C.a,{children:[Object(y.jsx)(O.a,{md:!0,children:Object(y.jsxs)(g.a.Group,{controlId:"formLength",children:[Object(y.jsx)(g.a.Label,{children:"Amount"}),Object(y.jsx)(g.a.Control,{placeholder:"Length"})]})}),Object(y.jsx)(O.a,{md:!0,children:Object(y.jsxs)(g.a.Group,{controlId:"formPrice",children:[Object(y.jsx)(g.a.Label,{children:"Price"}),Object(y.jsx)(g.a.Control,{placeholder:"Price"})]})})]}),Object(y.jsxs)(g.a.Group,{controlId:"formDescription",children:[Object(y.jsx)(g.a.Label,{children:"Item Description"}),Object(y.jsx)(g.a.Control,{placeholder:"Item Description",style:{height:"100px"}})]}),Object(y.jsxs)(g.a.Group,{controlId:"formLocation",children:[Object(y.jsx)(g.a.Label,{children:"Store Location"}),Object(y.jsx)(g.a.Control,{placeholder:"Store Location"})]})]})]})}var N=r(82);function L(e){var t=e.data,r=e.onRowDelete;return Object(y.jsxs)(N.a,{striped:!0,borderless:!0,hover:!0,variant:"dark",size:"sm",children:[Object(y.jsx)("thead",{children:Object(y.jsxs)("tr",{children:[Object(y.jsx)("th",{children:"#"}),Object(y.jsx)("th",{children:"picture"}),Object(y.jsx)("th",{children:"Product Name"}),Object(y.jsx)("th",{children:" color "}),Object(y.jsx)("th",{children:" amount "}),Object(y.jsx)("th",{children:"price"}),Object(y.jsx)("th",{children:"description"}),Object(y.jsx)("th",{children:"store"}),Object(y.jsx)("th",{})]})}),Object(y.jsx)("tbody",{children:t.map((function(e){var t=e.base64,c=e.name,n=e.color,s=e.amount,a=e.price,i=e.description,o=e.store;return Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{}),Object(y.jsxs)("td",{children:[" ",Object(y.jsx)("img",{src:t,alt:""})," "]}),Object(y.jsx)("td",{children:c}),Object(y.jsx)("td",{children:n}),Object(y.jsx)("td",{children:s}),Object(y.jsx)("td",{children:a}),Object(y.jsx)("td",{children:i}),Object(y.jsx)("td",{children:o}),Object(y.jsx)("td",{children:Object(y.jsx)(d.a,{onClick:function(){return r(c)},children:" Delete "})})]})}))})]})}var P=function(){var e=Object(c.useState)(!1),t=Object(j.a)(e,2),r=t[0],n=t[1],s=function(){return n(!1)},a=Object(c.useState)(JSON.parse(localStorage.getItem("properties"))||(localStorage.setItem("properties",JSON.stringify([])),[])),i=Object(j.a)(a,2),u=i[0],h=i[1];return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)("div",{className:"App",children:Object(y.jsxs)("header",{className:"App-header",children:[Object(y.jsx)(d.a,{variant:"primary",onClick:function(){return n(!0)},children:"Add Item"}),Object(y.jsxs)(b.a,{show:r,onHide:s,children:[Object(y.jsx)(b.a.Header,{closeButton:!0,children:Object(y.jsx)(b.a.Title,{children:"Add Item"})}),Object(y.jsxs)(b.a.Body,{children:[" ",Object(y.jsx)(I,{makeHandleSubmit:function(e){return function(){var t=Object(l.a)(o.a.mark((function t(r){var c,n,s,a,i,l,j,d,b,u,O,x;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=function(e){return new Promise((function(t,r){var c=new FileReader;c.readAsDataURL(e),c.onload=function(){t(c.result)},c.onerror=function(e){r(e)}}))},s=r.target[1].value,a=r.target[2].value,i=r.target[3].value,l=r.target[4].value,j=r.target[5].value,d=r.target[6].value,b=localStorage.getItem("properties"),u=null!==(c=JSON.parse(b))&&void 0!==c?c:[],O="",!r.target[0].files[0]){t.next=14;break}return t.next=13,n(r.target[0].files[0]);case 13:O=t.sent;case 14:x={categories:e,base64:O,name:s,color:a,amount:i,price:l,description:j,store:d},u.push(x),localStorage.setItem("properties",JSON.stringify(u)),h(u),r.preventDefault();case 19:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})," "]}),Object(y.jsxs)(b.a.Footer,{children:[Object(y.jsx)(d.a,{variant:"secondary",onClick:s,children:"Close"}),Object(y.jsx)(d.a,{variant:"primary",onClick:s,type:"submit",form:"submitForm",children:"Save Changes"})]})]}),Object(y.jsx)(L,{data:u,onRowDelete:function(e){var t=JSON.parse(localStorage.getItem("properties")).filter((function(t){return t.name!==e}));localStorage.setItem("properties",JSON.stringify(t)),h(t)}})]})})})},w=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,86)).then((function(t){var r=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,a=t.getTTFB;r(e),c(e),n(e),s(e),a(e)}))};a.a.render(Object(y.jsx)(n.a.StrictMode,{children:Object(y.jsx)(P,{})}),document.getElementById("root")),w()}},[[73,1,2]]]);
//# sourceMappingURL=main.c1e108e0.chunk.js.map