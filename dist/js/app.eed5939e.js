(function(t){function e(e){for(var n,s,i=e[0],c=e[1],l=e[2],u=0,m=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&m.push(o[s][0]),o[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(m.length)m.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,s=1;s<a.length;s++){var c=a[s];0!==o[c]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},o={app:0},r=[];function s(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-2d0cefa2":"60cfc5f4","chunk-2d0db4a6":"a38f10d9","chunk-2d0f11b2":"5347fc53","chunk-2d2106b9":"b754d27b","chunk-2d21a58a":"85e03e64","chunk-99576daa":"54e81ddd"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a=o[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=n);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=s(t);var l=new Error;r=function(e){c.onerror=c.onload=null,clearTimeout(u);var a=o[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",l.name="ChunkLoadError",l.type=n,l.request=r,a[1](l)}o[t]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},2725:function(t,e,a){},"486b":function(t,e,a){"use strict";a("c2d1")},"561e":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("0cdd");var n=a("2b0e"),o=a("5f5b"),r=a("b1e0"),s=(a("ab8b"),a("2dd8"),a("cbd0"));n["default"].use(s["a"]),n["default"].use(o["a"]),n["default"].use(r["a"]);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("menux"),a("b-container",{attrs:{fluid:"md"}},[a("br"),a("router-view")],1),a("piepagina")],1)},c=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-navbar",{attrs:{toggleable:"lg",variant:"light"}},[a("b-navbar-brand",{attrs:{href:"#",to:"/"}},[a("img",{staticClass:"logo",attrs:{src:"logos/logo.png"}})]),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",t._l(t.menuprincipal.menom,(function(e,n){return a("b-nav-item",{key:n,attrs:{"font-scale":"6",to:t.menuprincipal.menruta[n]}},[t._v(" "+t._s(e)+" ")])})),1),a("b-navbar-nav",{staticClass:"ml-auto"},[a("b-btn",{staticClass:"f1",on:{click:function(e){return t.nuevaruta("https://www.facebook.com/gimnasioguatiquia.edu.co")}}},[a("b-icon",{attrs:{icon:"facebook","font-scale":"1"}})],1),a("b-btn",{staticClass:"y1",on:{click:function(e){return t.nuevaruta("https://www.youtube.com/channel/UCA-uViVcw5eRX70yLo1EgUw")}}},[a("b-icon",{attrs:{icon:"youtube","font-scale":"1"}})],1),a("b-btn",{staticClass:"btn-presentacion",attrs:{to:"/plataformas"}},[a("b-icon",{attrs:{icon:"camera","font-scale":"1"}}),t._v(" Plataformas")],1)],1)],1)],1)],1)},u=[],d={name:"Menux",data:function(){return{menuprincipal:{menom:["El Colegio","Areas del Saber","Elementos Escolares","Sedes","Admisiones & Registro"],menruta:["/colegio","/areas","/escolares","/sedes","/admisiones"]}}},methods:{nuevaruta:function(t){window.open(t,"_blank")}}},m=d,f=(a("486b"),a("2877")),b=Object(f["a"])(m,l,u,!1,null,null,null),p=b.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("mdb-footer",{staticClass:"page-footer font-small pt-4 mt-4 "},[a("hr"),a("div",{staticClass:"stylish"},[a("mdb-container",{staticClass:"text-left "},[a("mdb-row",[a("mdb-col",{attrs:{md:"6"}},[a("h5",{staticClass:"text-uppercase mb-4 mt-3 font-weight-bold"},[t._v(" Nuestra Institucion ")]),a("p",[t._v(" Hacer parte de la comunidad educativa Guatiquia, implica disfrutar y poner en práctica los derechos y deberes que buscan el fortalecimiento de la autoestima y la autorregulación, basados en el respeto, la autonomía, la sana convivencia y el bienestar individual y colectivo; para que nuestro niños, niñas y jóvenes reflejen desde la cotidianidad su identidad con la institución educativa, en donde el eje central es el ser humano integral como agente de cambio y transformador de su entorno. ")])]),a("hr",{staticClass:"clearfix w-100 d-md-none"}),a("mdb-col",{attrs:{md:"3"}},[a("h5",{staticClass:"text-uppercase mb-4 mt-3 font-weight-bold"},[t._v(" Herramientas ")]),a("ul",{staticClass:"list-unstyled"},[a("li",[a("a",{attrs:{href:"#!"}},[t._v("Phet Laboratory")])]),a("li",[a("a",{attrs:{href:"#!"}},[t._v("Red Distrital de Bibliotecas")])]),a("li",[a("a",{attrs:{href:"#!"}},[t._v("Secretaria de Educacion Bogotá")])]),a("li",[a("a",{attrs:{href:"#!"}},[t._v("Ministerio de Tecnologias")])])])]),a("hr",{staticClass:"clearfix w-100 d-md-none"}),a("mdb-col",{attrs:{md:"3",center:""}},[a("h5",{staticClass:"text-uppercase mb-4 mt-3 font-weight-bold"},[t._v(" Informacion ")]),a("b-img",{staticClass:"loder",attrs:{src:"logos/loder.png",alt:"GIG Logo"}}),a("p",[t._v(" Cll 59A Sur N° 45d-02/08"),a("br"),t._v("Horario: 630am A 2:00pm"),a("br"),t._v("Telefono: 715 18 27 ")])],1)],1)],1),a("hr"),a("div",{staticClass:"footer-copyright text-center py-3 data1"},[a("mdb-container",{attrs:{fluid:""}},[t._v(" © 2021 Copyright: Colegio Gimnasio Integral Guatiquia. Desarrollo: Lic. Carlos A. Moreno S. ")])],1)],1)])},g=[],v=a("91c9"),y={name:"FooterPage",components:{mdbFooter:v["mdbFooter"],mdbContainer:v["mdbContainer"],mdbRow:v["mdbRow"],mdbCol:v["mdbCol"]}},w=y,_=(a("70de"),Object(f["a"])(w,h,g,!1,null,"275d9d68",null)),C=_.exports,x={components:{Menux:p,Piepagina:C}},j=x,k=(a("034f"),Object(f["a"])(j,i,c,!1,null,null,null)),O=k.exports,E=(a("d3b7"),a("8c4f")),S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("imgfondo"),a("b-container",{staticClass:"bv-example-row"},[a("b-row",[a("b-col",{attrs:{md:"3"}},[a("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"20rem"},attrs:{title:"Imagenes institucionales","img-src":"/fondos/matriculas.jpg","img-alt":"Image","img-top":"",tag:"article"}},[a("b-card-text",[t._v(" Infromacion general las matriculas se encuentran activas para el año 2021. ")]),a("b-button",{attrs:{to:"/admisiones",href:"#",variant:"success"}},[t._v("Comenzar Registro")])],1)],1),a("b-col",{attrs:{md:"5"}}),a("b-col",{attrs:{md:"4"}},[a("div",[a("div",[a("b-card",{staticClass:"overflow-hidden",staticStyle:{"max-width":"540px"},attrs:{"no-body":""}},[a("b-row",{attrs:{"no-gutters":""}},[a("b-col",{attrs:{md:"6"}},[a("b-card-img",{staticClass:"rounded-0",attrs:{src:"/fondos/plataformas.jpeg",alt:"Image"}})],1),a("b-col",{attrs:{md:"6"}},[a("b-card-body",{attrs:{title:"Plataformas"}},[a("b-card-text",[t._v(" Interactua con Educar, Saberes y Microsft Teams, con el fin de hacer llegar la tecnologia con la comunidad academica. ")]),a("b-button",{attrs:{href:"#",to:"/plataformas",variant:"info"}},[t._v("Iniciar")])],1)],1)],1)],1)],1),a("br"),a("b-card",{attrs:{"img-src":"/fondos/humano.jpeg","img-alt":"Card image","img-top":""}},[a("b-card-text",[t._v(" El colegio Gimnasio Integral Guatiquia ofrece a la comunidad una educación solida basada en principios y valores éticos, morales y culturales. ")])],1),a("br")],1)])],1)],1)],1)},P=[],I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"fondo"},[a("div",[a("b-carousel",{staticStyle:{"text-shadow":"0px 0px 2px #000"},attrs:{id:"carousel-fade",fade:"",indicators:"","img-width":"100%","img-height":"100%"}},[a("b-carousel-slide",{attrs:{"img-src":"/fondos/base1.jpeg"}}),a("b-carousel-slide",{attrs:{"img-src":"/fondos/base2.jpeg"}}),a("b-carousel-slide",{attrs:{"img-src":"/fondos/fondo.jpeg"}})],1)],1)])},M=[],T={},q=T,A=(a("d155"),Object(f["a"])(q,I,M,!1,null,null,null)),G=A.exports,L={name:"Home",components:{Imgfondo:G}},R=L,$=Object(f["a"])(R,S,P,!1,null,"7b0fe40a",null),H=$.exports;n["default"].use(E["a"]);var F=[{path:"/",name:"Home",component:H},{path:"/colegio",name:"colegio",component:function(){return a.e("chunk-2d0cefa2").then(a.bind(null,"626f"))}},{path:"/areas",name:"areas",component:function(){return a.e("chunk-2d21a58a").then(a.bind(null,"bab7"))}},{path:"/escolares",name:"escolares",component:function(){return a.e("chunk-2d2106b9").then(a.bind(null,"b88e"))}},{path:"/sedes",name:"sedes",component:function(){return a.e("chunk-2d0db4a6").then(a.bind(null,"6ede"))}},{path:"/admisiones",name:"admisiones",component:function(){return a.e("chunk-99576daa").then(a.bind(null,"aeec"))}},{path:"/plataformas",name:"plataformas",component:function(){return a.e("chunk-2d0f11b2").then(a.bind(null,"9ee5"))}}],B=new E["a"]({mode:"history",base:"/",routes:F}),D=B,J=a("2f62");n["default"].use(J["a"]);var N=new J["a"].Store({state:{},mutations:{},actions:{},modules:{}});n["default"].config.productionTip=!1,new n["default"]({router:D,store:N,render:function(t){return t(O)}}).$mount("#app")},"70de":function(t,e,a){"use strict";a("561e")},"85ec":function(t,e,a){},c2d1:function(t,e,a){},d155:function(t,e,a){"use strict";a("2725")}});
//# sourceMappingURL=app.eed5939e.js.map