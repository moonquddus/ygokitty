(this.webpackJsonpygokitty=this.webpackJsonpygokitty||[]).push([[0],{126:function(e,t,a){e.exports=a.p+"static/media/logo.d92a0af0.svg"},127:function(e,t,a){e.exports=a.p+"static/media/table.67f40f2a.svg"},128:function(e,t,a){e.exports=a.p+"static/media/file.2f900671.svg"},129:function(e,t,a){e.exports=a.p+"static/media/undo.99d9a08d.svg"},130:function(e,t,a){e.exports=a.p+"static/media/redo.31578b8c.svg"},131:function(e,t,a){e.exports=a.p+"static/media/folder.a0d8a896.svg"},132:function(e,t,a){e.exports=a.p+"static/media/save.79ba08d9.svg"},133:function(e,t,a){e.exports=a(268)},142:function(e,t,a){},150:function(e,t){},152:function(e,t){},163:function(e,t){},165:function(e,t){},192:function(e,t){},194:function(e,t){},195:function(e,t){},200:function(e,t){},202:function(e,t){},209:function(e,t){},211:function(e,t){},229:function(e,t){},232:function(e,t){},248:function(e,t){},251:function(e,t){},260:function(e,t,a){},261:function(e,t,a){},262:function(e,t,a){},263:function(e,t,a){},264:function(e,t,a){},265:function(e,t,a){},266:function(e,t,a){},267:function(e,t,a){},268:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(124),i=a.n(l),o=a(5),c=a(8),u=a(19),s=a(126),m=a.n(s);a(142),a(143);function d(e){return JSON.parse(e)}function p(e){return{type:"UPDATE_GRID",payload:e}}function g(e){return{type:"INIT_ALBUM",payload:e}}function f(e){return{type:"UPDATE_ALBUM",payload:e}}var h=Object(c.b)()((function(e){var t=e.history,a=e.dispatch;return r.a.createElement("div",{className:"Menu"},r.a.createElement("header",{className:"Menu-header"},r.a.createElement("img",{src:m.a,className:"Menu-logo",alt:"logo"}),r.a.createElement("p",null,"TCG Card Organizer"),r.a.createElement("p",null,r.a.createElement(u.b,{to:"/tgc-organizer/new-game/"},"New")),r.a.createElement("p",null,r.a.createElement("label",{htmlFor:"load-file"},"Load Saved File",r.a.createElement("input",{type:"file",id:"load-file",name:"load-file",onChange:function(e){var n=e.target.files[0],r=new FileReader;r.addEventListener("load",(function(e){var n=d(e.target.result);a(p({grid:n.grid})),a(g({album:n.album,pile:n.pile})),t.push("/tgc-organizer/editor/1")})),r.readAsText(n)}}))),r.a.createElement("div",null,"Icons made by ",r.a.createElement("a",{href:"https://www.flaticon.com/authors/freepik",title:"Freepik"},"Freepik")," from ",r.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon"}," www.flaticon.com"))))})),b=a(11),E=(a(260),Object(c.b)((function(e){return{grid:e.grid}}))((function(e){var t=e.grid,a=e.history,l=e.dispatch,i=Object(n.useState)(t.x),o=Object(b.a)(i,2),c=o[0],u=o[1],s=Object(n.useState)(t.y),m=Object(b.a)(s,2),d=m[0],f=m[1],h=Object(n.useState)(t.pages),E=Object(b.a)(h,2),y=E[0],v=E[1];return r.a.createElement("div",{className:"newgame"},r.a.createElement("header",{className:"newgame-header"},r.a.createElement("h2",null,"Configure New Album"),r.a.createElement("p",null,"These settings can be changed later")),r.a.createElement("main",null,r.a.createElement("form",{onSubmit:function(e){l(p({grid:{x:c,y:d,pages:y}}));for(var t=[],n=0;n<y;n++){for(var r=[],i=0;i<c*d;i++)r.push({});t.push(r)}l(g({album:t,pile:[]})),a.push("/tgc-organizer/editor/1")}.bind(void 0)},r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"grid_x"},"Width: ",r.a.createElement("input",{type:"number",name:"grid_x",value:c,onChange:function(e){return u(e.target.value)}}))),r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"grid_y"},"Height: ",r.a.createElement("input",{type:"number",name:"grid_y",value:d,onChange:function(e){return f(e.target.value)}}))),r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"grid_pages"},"Pages: ",r.a.createElement("input",{type:"number",name:"grid_pages",value:y,onChange:function(e){return v(e.target.value)}}))),r.a.createElement("div",{className:"form-control"},r.a.createElement("button",{type:"submit"},"Create New Album")))))}))),y=a(6),v=(a(261),a(127)),O=a.n(v),j=a(128),w=a.n(j),N=a(129),k=a.n(N),A=a(130),S=a.n(A),C=a(131),D=a.n(C),I=a(132),R=a.n(I),P=(a(262),a(263),function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"modal-screen"}),r.a.createElement("div",{className:"modal-container"},e.children))}),_=Object(c.b)()((function(e){var t=e.open,a=e.setOpen,l=e.dispatch,i=Object(n.useState)(""),o=Object(b.a)(i,2),c=o[0],u=o[1],s=Object(n.useState)([]),m=Object(b.a)(s,2),d=m[0],p=m[1],g=Object(n.useState)(!1),f=Object(b.a)(g,2),h=f[0],E=f[1],y=Object(n.useState)(!1),v=Object(b.a)(y,2),O=v[0],j=v[1],w=Object(n.useState)(!1),N=Object(b.a)(w,2),k=N[0],A=N[1],S=function(e){e.preventDefault(),E(!0),j(!1),A(!1),p([]),fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?fname="+c).then((function(e){return e.json()})).then((function(e){E(!1),Array.isArray(e.data)?(p(e.data),e.data.length?j(!0):A("No results found :(")):(A("Failure processing search results. Ask Moon to sort this mess out"),console.error("ERROR",e))})).catch((function(e){console.error("oh noes :(",e),A("Failure loading search results. Ask Moon to sort this mess out"),E(!1)}))},C=function(e){var t,n="https://storage.googleapis.com/ygoprodeck.com/pics/"+e.id+".jpg";(t=n,fetch(t).then((function(e){return e.blob()})).then((function(e){return new Promise((function(t,a){var n=new FileReader;n.onloadend=function(){return t(n.result)},n.onerror=a,n.readAsDataURL(e)}))}))).then((function(t){l({type:"ADD_CARD",payload:{name:e.name,img:t}}),a(!1)}))},D=d.map((function(e,t){return r.a.createElement("li",{key:e.id,onClick:function(){return C(e)}},r.a.createElement("img",{src:"".concat("https://storage.googleapis.com/ygoprodeck.com/pics_small/").concat(e.id,".jpg")}))}));return t?r.a.createElement(P,null,r.a.createElement("h2",null,"Search for New Card"),r.a.createElement("form",{onSubmit:S},r.a.createElement("input",{id:"cardSearch",name:"cardSearch",type:"text",value:c,onChange:function(e){return u(e.target.value)}}),r.a.createElement("button",{type:"submit",disabled:!c},"SEARCH")),!!h&&r.a.createElement("p",null,"Loading..."),!(h||!O)&&r.a.createElement("h2",null,"Search Results"),r.a.createElement("ul",{id:"card-search-results"},D),!(h||!k)&&r.a.createElement("p",null,k)):""})),x=Object(c.b)((function(e){return{grid:e.grid,album:e.album,pile:e.pile,historyPosition:e.historyPosition,historyLength:e.history.length}}))((function(e){var t=e.grid,a=e.album,l=e.pile,i=e.historyPosition,c=e.historyLength,u=e.dispatch,s=Object(n.useState)(!1),m=Object(b.a)(s,2),f=m[0],h=m[1],E=!!c,y=Object(o.f)(),v=E&&i<c-1,j=i,N=Object(n.createRef)();return r.a.createElement("div",{className:"editor-navbar"},r.a.createElement(_,{open:f,setOpen:h}),r.a.createElement("ul",null,r.a.createElement("li",{onClick:function(){window.confirm("Warning: you will lose any unsaved changes.")&&y.push("/new-game")}},r.a.createElement("img",{src:O.a,alt:"New Album"})),r.a.createElement("li",{onClick:function(){window.confirm("Warning: you will lose any unsaved changes.")&&N.current.click()}},r.a.createElement("img",{src:D.a,alt:"Open"})),r.a.createElement("li",{onClick:function(){var e;!function(e,t){var a=document.createElement("a");if(a.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(t)),a.setAttribute("download",e),document.createEvent){var n=document.createEvent("MouseEvents");n.initEvent("click",!0,!0),a.dispatchEvent(n)}else a.click()}("savedalbum.json",(e={grid:t,album:a,pile:l},JSON.stringify(e)))}},r.a.createElement("img",{src:R.a,alt:"Save"})),r.a.createElement("li",{className:"divider"}),r.a.createElement("li",{onClick:function(){return h(!f)}},r.a.createElement("img",{src:w.a,alt:"New Card"})),r.a.createElement("li",{onClick:function(){return v?u({type:"UNDO_HISTORY"}):console.log("NO UNDO FOR YOU")}},r.a.createElement("img",{src:k.a,alt:"Undo"})),r.a.createElement("li",{onClick:function(){return j?u({type:"REDO_HISTORY"}):console.log("NO REDO FOR YOU")}},r.a.createElement("img",{src:S.a,alt:"Redo"}))),r.a.createElement("input",{type:"file",id:"load-file",name:"load-file",ref:N,onChange:function(e){var t=e.target.files[0],a=new FileReader;a.addEventListener("load",(function(e){var t=d(e.target.result);u(p({grid:t.grid})),u(g({album:t.album,pile:t.pile}))})),a.readAsText(t),y.push("/editor/1")}}))})),U=(a(264),Object(c.b)((function(e){return{pageCount:e.grid.pages}}))((function(e){e.page;var t=e.pageCount;return r.a.createElement("ul",{id:"editor-pagination"},function(){if(!t||t<=1)return"";for(var e=[],a=1;a<=t;a++)e.push(r.a.createElement("li",{key:"page-".concat(a)},r.a.createElement(u.b,{to:"/tgc-organizer/editor/".concat(a)},a)));return e.push(r.a.createElement("li",{key:"page-all"},r.a.createElement(u.b,{to:"/tgc-organizer/editor/all"},"All"))),e}())}))),F=(a(265),Object(c.b)((function(e){return{pageCount:e.grid.pages,pile:e.pile}}))((function(e){var t=e.pageCount,a=e.pile,n=e.dragStartHandler,l=e.dragOverHandler,i=e.dragEndHandler;return r.a.createElement("div",{className:"editor-pile ".concat(t?"above-pagination":"no-pagination")},r.a.createElement("ul",{"data-pile-id":"0",onDragOver:l,onDrop:i},function(){var e=[];return a.map((function(t,a){return e.push(r.a.createElement("li",{key:"pile-".concat(a),"data-pile-id":a,onDragStart:n,onDragOver:l,onDrop:i},r.a.createElement("img",{"data-pile-id":a,src:t.img,alt:t.name})))})),e}()))}))),T=function(e){return JSON.parse(JSON.stringify(e))},L=(a(266),Object(c.b)((function(e){return{width:e.grid.x,height:e.grid.y,pageCount:e.grid.pages,album:e.album,pile:e.pile}}))((function(e){var t=e.width,a=e.height,l=e.pageCount,i=e.album,c=e.pile,u=e.dispatch,s=Object(o.g)().page,m=parseInt(s),d=Object(n.useState)(null),p=Object(b.a)(d,2),g=p[0],h=p[1],E=Object(n.useState)(null),v=Object(b.a)(E,2),O=v[0],j=v[1],w=function(e){var t,a,n=e.target.dataset.albumId,r=e.target.dataset.pileId;n?(t=n.split("-"),a=[parseInt(t[0]),parseInt(t[1])],h(a)):r&&(a=parseInt(r),h(a))},N=function(e){e.preventDefault()},k=function(e){var t,a,n=e.target.dataset.albumId,r=e.target.dataset.pileId;n?(t=n.split("-"),a=[parseInt(t[0]),parseInt(t[1])],j(a)):r&&(a=parseInt(r),j(a))};Object(n.useEffect)((function(){null!==g&&null!==O&&(Array.isArray(g)?2===O.length?A():S():Array.isArray(g)||2===O.length&&C())}),[O]);var A=function(){var e=T(i),t=i[g[0]][g[1]]?Object(y.a)({},i[g[0]][g[1]]):null,a=i[O[0]][O[1]]?Object(y.a)({},i[O[0]][O[1]]):null;e[O[0]][O[1]]=t,e[g[0]][g[1]]=a,u(f({album:e,pile:c})),D()},S=function(){var e=T(i),t=T(c),a=Object(y.a)({},i[g[0]][g[1]]);e[g[0]][g[1]]=null,t.push(a),u(f({album:e,pile:t})),D()},C=function(){var e=T(i),t=T(c),a=Object(y.a)({},c[g]),n=i[O[0]][O[1]]?Object(y.a)({},i[O[0]][O[1]]):null;e[O[0]][O[1]]=a,t.splice(g,1),null!==n&&t.push(n),u(f({album:e,pile:t})),D()},D=function(){h(null),j(null)},I=function(e){for(var n=[],l=0;l<a;l++){for(var o=[],c=0;c<t;c++){var u=e*t*a+(l*t+(c+1)),s=l*t+c,m=["CARD ".concat(u)];i[e][s]&&i[e][s].img&&m.push(r.a.createElement("img",{"data-album-id":"".concat(e,"-").concat(s),key:"img-"+u,className:"cell-image",src:i[e][s].img,alt:i[e][s].name})),o.push(r.a.createElement("div",{"data-album-id":"".concat(e,"-").concat(s),onDragStart:w,onDragOver:N,onDrop:k,className:"grid-cell",key:e+"-"+l+"-"+c,onClick:R.bind(u)},m))}n.push(r.a.createElement("div",{className:"grid-row",key:e+"-"+l},o))}return n},R=function(){};return r.a.createElement("div",{className:"Editor"},r.a.createElement("header",{className:"editor-header"},r.a.createElement(x,null)),r.a.createElement("main",null,function(){var e=[];if(Number.isInteger(m)&&m&&m<=l){var t=m-1;e.push(r.a.createElement("h2",{key:"h2-"+t},"Page ".concat(t+1))),e.push(r.a.createElement("div",{className:"grid",key:t},I(t)))}else for(var a=0;a<l;a++)e.push(r.a.createElement("h2",{key:"h2-"+a},"Page ".concat(a+1))),e.push(r.a.createElement("div",{className:"grid",key:a},I(a)));return e}()),r.a.createElement("footer",{className:"editor-footer"},r.a.createElement(F,{dragStartHandler:w,dragOverHandler:N,dragEndHandler:k}),r.a.createElement(U,{page:m})))}))),H=(a(267),Object(c.b)((function(e){return{isLoggedIn:e.isLoggedIn}}))((function(){return r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/tgc-organizer",component:h}),r.a.createElement(o.a,{path:"/tgc-organizer/new-game",component:E}),r.a.createElement(o.a,{path:"/tgc-organizer/editor/:page",component:L}),r.a.createElement(o.a,{path:"/tgc-organizer/editor",component:L}))}))),M=a(49),z=a(42),B={grid:{x:3,y:3,pages:2},album:[[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null]],pile:[],history:[{album:[[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null]],pile:[]}],historyPosition:0};var J=function(){var e,t,a,n,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,l=arguments.length>1?arguments[1]:void 0;switch(l.type){case"UPDATE_GRID":return Object(y.a)(Object(y.a)({},r),{},{grid:l.payload.grid});case"INIT_ALBUM":return Object(y.a)(Object(y.a)({},r),{},{album:l.payload.album,pile:l.payload.pile,history:[{album:l.payload.album,pile:l.payload.pile}],historyPosition:0});case"UPDATE_ALBUM":return e=r.historyPosition?r.history.slice(r.historyPosition):r.history,t={album:l.payload.album,pile:l.payload.pile},Object(y.a)(Object(y.a)({},r),{},{history:[t].concat(Object(z.a)(e)),historyPosition:0,album:l.payload.album,pile:l.payload.pile});case"GET_HISTORICAL_ALBUM":return a=r.history[l.payload.historyPosition],Object(y.a)(Object(y.a)({},r),{},{historyPosition:l.payload.historyPosition,album:a.album,pile:a.pile});case"ADD_CARD":return e=r.historyPosition?r.history.slice(r.historyPosition):r.history,t={album:r.album,pile:[].concat(Object(z.a)(r.pile),[l.payload])},Object(y.a)(Object(y.a)({},r),{},{history:[t].concat(Object(z.a)(e)),historyPosition:0,pile:[].concat(Object(z.a)(r.pile),[l.payload])});case"UNDO_HISTORY":return n=r.historyPosition+1,a=r.history[n],Object(y.a)(Object(y.a)({},r),{},{historyPosition:n,album:a.album,pile:a.pile});case"REDO_HISTORY":return n=r.historyPosition-1,a=r.history[n],Object(y.a)(Object(y.a)({},r),{},{historyPosition:n,album:a.album,pile:a.pile});default:return r}},Y=Object(M.b)(J);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(c.a,{store:Y},r.a.createElement(u.a,null,r.a.createElement(H,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[133,1,2]]]);
//# sourceMappingURL=main.f5640383.chunk.js.map