(this.webpackJsonpinventory=this.webpackJsonpinventory||[]).push([[0],{78:function(e){e.exports=JSON.parse('[{"title":"Fabrics","items":[{"titles":"Colors","subCategories":["Red","Green","Blue"]},{"titles":"Themes","subCategories":["Christmas","Easter","Haloween"]},{"titles":"Type","subCategories":["Nylon","Polyester","Cotton"]}]},{"title":"Patterns","items":[{"titles":"Dropdown 1","subCategories":["Chevron","Paisley"]},{"titles":"Dropdown 2","subCategories":["Chevron","Paisley"]},{"titles":"Dropdown 3","subCategories":["Chevron","Paisley"]}]},{"title":"Buttons","items":[{"titles":"Type","subCategories":["Plastic","Metal","Acrylic"]},{"titles":"Size","subCategories":["10mm","15mm","20mm"]},{"titles":"Color","subCategories":["Red","Green","Blue"]}]}]')},88:function(e,t,r){},96:function(e,t,r){},97:function(e,t,r){"use strict";r.r(t);var n=r(6),c=r(2),a=r(26),s=r(30),i=r(7),o=r(0),l=(r(88),r(109)),j=r(103),d=r(110),h=r(1);function b(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(l.a,{children:Object(h.jsxs)(j.a,{children:[Object(h.jsx)(l.a.Brand,{href:"/",children:"Quilting Inventory"}),Object(h.jsx)(l.a.Collapse,{id:"basic-navbar-nav",children:Object(h.jsx)(d.a,{className:"me-auto",children:Object(h.jsx)(d.a.Link,{href:"/inventory",children:"Inventory"})})})]})}),Object(h.jsx)(i.a,{})]})}var u=r(74),O=r.n(u),x=r(77),p=r(81),m=r(112),f=(r(95),r(96),r(8)),g=r(79),v=r(111),y=r(104),C=r(105),w=r(82),S=r(108),I=r(106),L=r(78);function k(e){var t=e.title,r=e.items,n=(e.selectedCategory,e.setSelectedCategory),c=function(e){n((function(r){return Object(f.a)({},t,e)}))};return Object(h.jsx)(g.a,{children:Object(h.jsx)(v.a,{className:"categories-container",children:Object(h.jsxs)(v.a.Item,{eventKey:"0",children:[Object(h.jsx)(v.a.Header,{children:t}),r.map((function(e){var t=e.titles,r=e.subCategories;return Object(h.jsx)(v.a.Body,{children:Object(h.jsx)(y.a,{as:C.a,variant:"primary",onSelect:c,title:t,children:r.map((function(e){return Object(h.jsx)(w.a.Item,{eventKey:e,children:e},e)}))})},t)}))]})})})}function D(e){var t=e.makeHandleSubmit,r=Object(o.useState)({}),c=Object(n.a)(r,2),a=c[0],s=c[1];return Object(h.jsxs)(h.Fragment,{children:[L.map((function(e){var t=e.title,r=e.items;return Object(h.jsx)(k,{title:t,selectedCategory:a,setSelectedCategory:s,items:r},t)})),Object(h.jsx)("p",{children:T(a)}),Object(h.jsxs)(S.a,{onSubmit:t(a),id:"submitForm",children:[Object(h.jsxs)(S.a.Group,{controlId:"formFile",className:"mb-3",children:[Object(h.jsx)(S.a.Label,{children:"Item Picture"}),Object(h.jsx)(S.a.Control,{type:"file"})]}),Object(h.jsxs)(I.a,{children:[Object(h.jsx)(g.a,{md:!0,children:Object(h.jsxs)(S.a.Group,{controlId:"formName",children:[Object(h.jsx)(S.a.Label,{children:"Name"}),Object(h.jsx)(S.a.Control,{placeholder:"Name of Material"})]})}),Object(h.jsx)(g.a,{md:!0,children:Object(h.jsxs)(S.a.Group,{controlId:"formColor",children:[Object(h.jsx)(S.a.Label,{children:"Color"}),Object(h.jsx)(S.a.Control,{placeholder:"Color"})]})})]}),Object(h.jsxs)(I.a,{children:[Object(h.jsx)(g.a,{md:!0,children:Object(h.jsxs)(S.a.Group,{controlId:"formLength",children:[Object(h.jsx)(S.a.Label,{children:"Amount"}),Object(h.jsx)(S.a.Control,{placeholder:"Length"})]})}),Object(h.jsx)(g.a,{md:!0,children:Object(h.jsxs)(S.a.Group,{controlId:"formPrice",children:[Object(h.jsx)(S.a.Label,{children:"Price"}),Object(h.jsx)(S.a.Control,{placeholder:"Price"})]})})]}),Object(h.jsxs)(S.a.Group,{controlId:"formDescription",children:[Object(h.jsx)(S.a.Label,{children:"Item Description"}),Object(h.jsx)(S.a.Control,{placeholder:"Item Description",style:{height:"100px"}})]}),Object(h.jsxs)(S.a.Group,{controlId:"formLocation",children:[Object(h.jsx)(S.a.Label,{children:"Store Location"}),Object(h.jsx)(S.a.Control,{placeholder:"Store Location"})]})]})]})}var N=r(107);function P(e){var t=e.state,r=e.dispatch,n=e.onRowDelete,c=e.tableData,a=e.sum;return Object(h.jsxs)(N.a,{id:"myTable",striped:!0,borderless:!0,hover:!0,variant:"dark",size:"sm",className:"inv-table",children:[Object(h.jsxs)("thead",{children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Picture"}),Object(h.jsx)("th",{children:"Category"}),Object(h.jsx)("th",{children:"Product Name"}),Object(h.jsx)("th",{children:"Color"}),Object(h.jsx)("th",{children:"Amount"}),Object(h.jsx)("th",{children:"Price"}),Object(h.jsx)("th",{children:"Description"}),Object(h.jsx)("th",{children:"Store"}),Object(h.jsx)("th",{})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{}),Object(h.jsx)("th",{children:Object(h.jsx)("form",{children:Object(h.jsx)("input",{type:"text",value:t.category,onChange:function(e){return r({category:e.target.value})},placeholder:"Search",size:5})})}),Object(h.jsx)("th",{children:Object(h.jsx)("form",{children:Object(h.jsx)("input",{type:"text",value:t.name,onChange:function(e){return r({name:e.target.value})},placeholder:"Search",size:5})})}),Object(h.jsx)("th",{children:Object(h.jsx)("form",{children:Object(h.jsx)("input",{type:"text",value:t.color,onChange:function(e){return r({color:e.target.value})},placeholder:"Search",size:5})})}),Object(h.jsx)("th",{children:Object(h.jsx)("form",{children:Object(h.jsx)("input",{type:"text",value:t.amount,onChange:function(e){return r({amount:e.target.value})},placeholder:"Search",size:5})})}),Object(h.jsx)("th",{children:Object(h.jsx)("form",{children:Object(h.jsx)("input",{type:"text",value:t.price,onChange:function(e){return r({price:e.target.value})},placeholder:"Search",size:5})})}),Object(h.jsx)("th",{children:Object(h.jsx)("form",{children:Object(h.jsx)("input",{type:"text",value:t.description,onChange:function(e){return r({description:e.target.value})},placeholder:"Search",size:5})})}),Object(h.jsx)("th",{children:Object(h.jsx)("form",{children:Object(h.jsx)("input",{type:"text",value:t.store,onChange:function(e){return r({store:e.target.value})},placeholder:"Search",size:5})})}),Object(h.jsx)("th",{children:Object(h.jsxs)(p.a,{onClick:function(e){return r({category:"",name:"",color:"",amount:"",price:"",description:"",store:""})},children:[" ","Reset"," "]})})]})]}),Object(h.jsx)("tbody",{children:c.map((function(e){var t=e.categories,r=e.base64,c=e.name,a=e.color,s=e.amount,i=e.price,o=e.description,l=e.store;return Object(h.jsxs)("tr",{children:[Object(h.jsxs)("td",{children:[" ",Object(h.jsx)("img",{src:r,alt:""})," "]},r),Object(h.jsx)("td",{children:T(t)},T(t)),Object(h.jsx)("td",{children:c},c),Object(h.jsx)("td",{children:a},a),Object(h.jsx)("td",{children:s},s),Object(h.jsx)("td",{children:i},i),Object(h.jsx)("td",{children:o},o),Object(h.jsx)("td",{children:l},l),Object(h.jsx)("td",{children:Object(h.jsx)(p.a,{onClick:function(){return n(c)},children:" Delete "})})]},"_"+Math.random().toString(36).substr(2,9))}))}),Object(h.jsx)("tfoot",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:" Total Value"}),Object(h.jsxs)("td",{children:[" $",a," "]})]})})]})}var T=function(e){var t=Object.entries(e);return 0===t.length?"No Category Selected ":t.map((function(e){return e.join(":")})).join("/n")};var F=function(e){var t=e.state,r=e.dispatch,c=e.tableData,a=e.data,i=e.setData,l=Object(o.useState)(!1),j=Object(n.a)(l,2),d=j[0],b=j[1],u=function(){return b(!1)},f=a.reduce((function(e,t){return e+parseFloat(t.amount)*parseFloat(t.price)}),0).toFixed(2);return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("header",{className:"App-header",children:[Object(h.jsx)(p.a,{variant:"primary",onClick:function(){return b(!0)},children:"Add Item"}),Object(h.jsx)(s.b,{to:{pathname:"/shoppingList",state:c},children:Object(h.jsx)(p.a,{variant:"primary",children:"Shopping List"})}),Object(h.jsxs)(m.a,{show:d,onHide:u,children:[Object(h.jsx)(m.a.Header,{closeButton:!0,children:Object(h.jsx)(m.a.Title,{children:"Add Item"})}),Object(h.jsxs)(m.a.Body,{children:[" ",Object(h.jsx)(D,{makeHandleSubmit:function(e){return function(){var t=Object(x.a)(O.a.mark((function t(r){var n,c,a,s,o,l,j,d,h,b,u,x;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=function(e){return new Promise((function(t,r){var n=new FileReader;n.readAsDataURL(e),n.onload=function(){t(n.result)},n.onerror=function(e){r(e)}}))},a=r.target[1].value,s=r.target[2].value,o=r.target[3].value,l=r.target[4].value,j=r.target[5].value,d=r.target[6].value,h=localStorage.getItem("properties"),b=null!==(n=JSON.parse(h))&&void 0!==n?n:[],u="",!r.target[0].files[0]){t.next=14;break}return t.next=13,c(r.target[0].files[0]);case 13:u=t.sent;case 14:x={categories:e,base64:u,name:a,color:s,amount:o,price:l,description:j,store:d},b.push(x),localStorage.setItem("properties",JSON.stringify(b)),i(b),r.preventDefault();case 19:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})," "]}),Object(h.jsxs)(m.a.Footer,{children:[Object(h.jsx)(p.a,{variant:"secondary",onClick:u,children:"Close"}),Object(h.jsx)(p.a,{variant:"primary",onClick:u,type:"submit",form:"submitForm",children:"Save Changes"})]})]})]}),Object(h.jsx)(P,{data:a,onRowDelete:function(e){var t=JSON.parse(localStorage.getItem("properties")).filter((function(t){return t.name!==e}));localStorage.setItem("properties",JSON.stringify(t)),i(t)},tableData:c,sum:f,dispatch:r,state:t})]})})};function A(e){var t=e.tableData,r=t.reduce((function(e,t){var r=t.amount,n=t.price;return e+parseFloat(r)*parseFloat(n)}),0).toFixed(2);return Object(h.jsxs)("div",{children:[Object(h.jsxs)(N.a,{children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Name"}),Object(h.jsx)("th",{children:"Amount"}),Object(h.jsx)("th",{children:"Price"}),Object(h.jsx)("th",{children:"Store"})]})}),Object(h.jsx)("tbody",{children:t.map((function(e){var t=e.name,r=e.price,n=e.amount,c=e.store;return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:t},t),Object(h.jsx)("td",{children:n},n),Object(h.jsx)("td",{children:r},r),Object(h.jsx)("td",{children:c},c)]},"_"+Math.random().toString(36).substr(2,9))}))}),Object(h.jsxs)("tfoot",{children:[Object(h.jsx)("td",{children:" Total"}),Object(h.jsx)("td",{}),Object(h.jsxs)("td",{children:[" ",r," "]})]})]}),Object(h.jsx)("button",{class:"no-print",onClick:window.print,children:"Print"})]})}function G(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Introduction"}),Object(h.jsx)("p",{children:Object(h.jsx)("a",{href:"https://github.com/Valderhide/inventory",children:"Github Page"})}),Object(h.jsx)("p",{children:"Welcome to my Inventory management app. The reason for making this app is because my mother suggested this idea while I was brainstorming ideas for what I wanted my first React app to be. She has A LOT of fabrics, sewing, and quilting material and I was looking to move in a different direction than my previous Javascript Snake Game."}),Object(h.jsx)("h2",{children:"How to use the App"}),Object(h.jsx)("p",{children:'The bulk of the work is done with the "Add Item" button found at the top of the table, below the Navigation bar. Click the "Add Item" button and a new menu will open with all the options you can assign the item being made.'}),Object(h.jsx)("p",{children:"The first option is the Category you want to assign the item to, Fabrics, Patterns, or Buttons (If you see this, more will be added in the future). Only one Category can be assigned to the item, and each category reveals a dropdown with subcategories, which further reveals a list of properties."}),Object(h.jsx)("p",{children:"After that you can choose to upload an image of the item from your computer. The last remaining options, name, color, amount, price, item description and store location are filled in manually. Once done, click save changes and the item will be saved and displayed in the table."}),Object(h.jsx)("p",{children:"You will also see a little search box at the top of each column. These are used to filter the properties below them. Type in the box what you are looking for, and the rest will be removed from the table. Repeat this for each search box and the the more items that will be filtered out."}),Object(h.jsx)("p",{children:"Click the link bellow or at the top of the page to access the Inventory system itself"}),Object(h.jsx)(s.b,{to:"/inventory",children:Object(h.jsx)(p.a,{variant:"primary",children:"Inventory Page"})})]})}var J=document.getElementById("root"),R=function(e,t){return Object(c.a)(Object(c.a)({},e),t)},z=function(){var e=Object(o.useState)(JSON.parse(localStorage.getItem("properties"))||(localStorage.setItem("properties",JSON.stringify([])),[])),t=Object(n.a)(e,2),r=t[0],c=t[1],a=Object(o.useReducer)(R,{category:"",name:"",color:"",amount:"",price:"",description:"",store:""}),l=Object(n.a)(a,2),j=l[0],d=l[1],u=Object(o.useState)(r),O=Object(n.a)(u,2),x=O[0],p=O[1];return Object(o.useEffect)((function(){var e=r.filter((function(e){return T(e.categories).toLowerCase().includes(j.category.toLowerCase())&&e.name.toLowerCase().includes(j.name.toLowerCase())&&e.color.toLowerCase().includes(j.color.toLowerCase())&&e.amount.toLowerCase().includes(j.amount.toLowerCase())&&e.price.toLowerCase().includes(j.price.toLowerCase())&&e.description.toLowerCase().includes(j.description.toLowerCase())&&e.store.toLowerCase().includes(j.store.toLowerCase())}));p(e)}),[j,r]),Object(h.jsxs)(s.a,{children:[Object(h.jsxs)(i.d,{children:[Object(h.jsxs)(i.b,{path:"/",element:Object(h.jsx)(b,{}),children:[Object(h.jsx)(i.b,{index:!0,element:Object(h.jsx)(G,{})}),Object(h.jsx)(i.b,{path:"inventory",element:Object(h.jsx)(F,{tableData:x,setTableData:p,data:r,setData:c,dispatch:d,state:j})})]}),Object(h.jsx)(i.b,{path:"shoppingList",element:Object(h.jsx)(A,{tableData:x,setTableData:p})})]}),console.log(j)]})};Object(a.render)(Object(h.jsx)(z,{}),J)}},[[97,1,2]]]);
//# sourceMappingURL=main.0ebff490.chunk.js.map