(this.webpackJsonpunfurlreading=this.webpackJsonpunfurlreading||[]).push([[0],{101:function(e,a,t){},103:function(e,a,t){},110:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(10),c=t.n(o),i=(t(101),t(12)),l=t.n(i),s=t(19),m=t(17),u=(t(103),t(74)),p=t(13),d=t(164),f=t(150),g=t(148),h=t(159),b=t(149),v=t(161),E=t(145),y=t(151),x=t(160),k=t(55),j=t.n(k),w=t(75),O=t(146),C=t(147),S=t(163);function N(){return r.a.createElement(w.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(E.a,{color:"inherit",href:"#"},"Unfurl Reading")," ",(new Date).getFullYear(),".")}var W=Object(O.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function B(e){var a=W(),t=Object(n.useState)(""),o=Object(m.a)(t,2),c=o[0],i=o[1],u=Object(n.useState)(""),p=Object(m.a)(u,2),k=p[0],O=p[1],B=Object(n.useState)(""),T=Object(m.a)(B,2),D=T[0],I=T[1],U=function(){var a=Object(s.a)(l.a.mark((function a(t){var n,r;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),a.next=3,fetch("/api/users/signin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:c,password:k})});case 3:return n=a.sent,a.next=6,n.json();case 6:if(r=a.sent,n.ok){a.next=15;break}if(!(n.status>=500)){a.next=11;break}return I("Something went wrong, Please try again."),a.abrupt("return");case 11:if(!(n.status>=400)){a.next=14;break}return I(r.message),a.abrupt("return");case 14:throw new Error(r.message);case 15:e.getUser();case 16:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return r.a.createElement(C.a,{component:"main",maxWidth:"xs"},r.a.createElement(g.a,null),r.a.createElement(S.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:!!D,autoHideDuration:2e3,message:r.a.createElement("span",{id:"message-id"},r.a.createElement(w.a,{color:"error"},D)),onClose:function(){I("")}}),r.a.createElement("div",{className:a.paper},r.a.createElement(d.a,{className:a.avatar},r.a.createElement(j.a,null)),r.a.createElement(w.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:a.form,noValidate:!0,onSubmit:U},r.a.createElement(h.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,value:c,onChange:function(e){i(e.target.value)}}),r.a.createElement(h.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:k,onChange:function(e){O(e.target.value)}}),r.a.createElement(b.a,{control:r.a.createElement(v.a,{value:"remember",color:"primary"}),label:"Remember me"}),r.a.createElement(f.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit},"Sign In"),r.a.createElement(y.a,{container:!0},r.a.createElement(y.a,{item:!0,xs:!0}),r.a.createElement(y.a,{item:!0},r.a.createElement(E.a,{href:"/signup",variant:"body2"},'"Don\'t have an account? Sign Up"'))))),r.a.createElement(x.a,{mt:8},r.a.createElement(N,null)))}var T=t(152),D=t(153),I=t(154),U=t(156),M=t(155),R=Object(O.a)((function(e){return{mainContainer:{display:"flex",flexDirection:"column",alignItems:"center"},root:{paddingTop:10,paddingBottom:10,maxWidth:270,minWidth:270,maxHeight:400,minHeight:400},bookContainer:{maxWidth:280,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},book:{display:"flex",flexDirection:"column"},media:{height:140,width:100},cardMedia:{paddingTop:"56.25%"}}}));var P=function(e){var a=e.book,t=e.getMyBooks,n=R(),o=a||"",c=o._id,i=o.name,m=o.author,u=o.thumbnail,p=function(){var e=Object(s.a)(l.a.mark((function e(a){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,fetch("/api/books/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:c,name:i,author:m,thumbnail:u})});case 3:return n=e.sent,e.next=6,n.json();case 6:if(r=e.sent,n.ok){e.next=9;break}throw new Error(r.message);case 9:t();case 10:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:n.mainContainer},r.a.createElement(T.a,{className:n.root},r.a.createElement(D.a,{className:n.bookContainer},r.a.createElement(I.a,{className:n.book},r.a.createElement(M.a,{className:n.media,image:u,title:"Book Cover"}),r.a.createElement(D.a,null,r.a.createElement(w.a,{gutterBottom:!0,variant:"h6",component:"h3"},i),r.a.createElement(w.a,{variant:"body2",color:"textSecondary",component:"p"},"By ".concat(m)))),r.a.createElement(U.a,{onClick:p},r.a.createElement(f.a,{size:"small",color:"primary"},"Remove From Library")))))},F=Object(O.a)((function(e){return{cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)}}}));function G(e){var a=e.books,t=e.getMyBooks,n=F();return r.a.createElement(C.a,{className:n.cardGrid,maxWidth:"md"},r.a.createElement(y.a,{container:!0,spacing:4,justifyContent:"center",alignItems:"center"},a&&a.length>0?a.map((function(e){return r.a.createElement(y.a,{xs:12,sm:6,md:4,item:!0,key:e._id},r.a.createElement(P,{book:e,getMyBooks:t}))})):"Please add Books to your library"))}var J=Object(O.a)((function(e){return{searchWrapper:{width:"100%",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},searchGrid:{width:"45ch",display:"flex",flexDirection:"row"},searchButton:{marginLeft:10,width:100}}}));var q=function(e){var a=e.handleSubmit,t=J();return r.a.createElement("div",{className:t.searchWrapper},r.a.createElement("form",{className:t.searchGrid,noValidate:!0,autoComplete:"off",onSubmit:a},r.a.createElement(h.a,{id:"search",name:"search",label:"Enter Book or Author Name",defaultValue:"javascript",fullWidth:!0,variant:"outlined",size:"small"}),r.a.createElement(f.a,{className:t.searchButton,variant:"outlined",color:"primary",type:"submit",fullWidth:!1,size:"small"},"Search")))},L=Object(O.a)((function(e){return{mainContainer:{display:"flex",flexDirection:"column",alignItems:"center"},root:{paddingTop:10,paddingBottom:10,maxWidth:270,minWidth:270,maxHeight:400,minHeight:400},bookContainer:{maxWidth:280,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},book:{display:"flex",flexDirection:"column"},media:{height:140,width:100},cardMedia:{paddingTop:"56.25%"}}}));var A=function(e){var a=e.book,t=e.user,n=e.getMyBooks,o=L(),c=(a.volumeInfo.imageLinks||"").thumbnail,i=a.volumeInfo.title,m=a.volumeInfo.authors,u=a.searchInfo,p=u?u.textSnippet||"":"No Summary",d=t.id,g=function(){var e=Object(s.a)(l.a.mark((function e(a){var t,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,fetch("/api/books/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({bookData:{name:i,author:m,summary:p,thumbnail:c,userId:d}})});case 3:return t=e.sent,e.next=6,t.json();case 6:if(r=e.sent,t.ok){e.next=9;break}throw new Error(r.message);case 9:n();case 10:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:o.mainContainer},r.a.createElement(T.a,{className:o.root},r.a.createElement(D.a,{className:o.bookContainer},r.a.createElement(I.a,{className:o.book},r.a.createElement(M.a,{className:o.media,image:c,title:"Book Cover"}),r.a.createElement(D.a,null,r.a.createElement(w.a,{gutterBottom:!0,variant:"h6",component:"h3"},i),r.a.createElement(w.a,{variant:"body2",color:"textSecondary",component:"p"},"By ".concat(m)))),r.a.createElement(U.a,{onClick:g},r.a.createElement(f.a,{size:"small",color:"primary"},"Add To Library")))))},H=Object(O.a)((function(e){return{heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)},heroButtons:{marginTop:e.spacing(4)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)}}}));var z=function(e){var a=e.user,t=e.books,n=e.getMyBooks,o=H();return r.a.createElement("div",null,r.a.createElement(C.a,{className:o.cardGrid,maxWidth:"md"},r.a.createElement(y.a,{container:!0,spacing:4,justifyContent:"center",alignItems:"center"},t&&t.length>0?t.map((function(e){return r.a.createElement(y.a,{xs:12,sm:6,md:4,item:!0,key:e.id},r.a.createElement(A,{user:a,book:e,getMyBooks:n}))})):null)))};function V(){return r.a.createElement(w.a,{variant:"body2",color:"textSecondary"},"Copyright \xa9 ",r.a.createElement(E.a,{color:"inherit",href:"localhost:3000"},"Unfurl Reading")," ",(new Date).getFullYear(),".")}var Y=Object(O.a)((function(e){return{footer:{padding:e.spacing(3,2),marginTop:"auto",backgroundColor:"dark"===e.palette.type?e.palette.grey[800]:e.palette.grey[200]}}}));function _(){var e=Y();return r.a.createElement("footer",{className:e.footer},r.a.createElement(C.a,{maxWidth:"sm"},r.a.createElement(w.a,{variant:"body1"},"Design using Material UI @ Juno College"),r.a.createElement(V,null)))}var $=t(157),K=t(73),Q=t.n(K),X=t(158),Z=Object(O.a)((function(e){return{icon:{marginRight:e.spacing(2)},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)},root:{display:"flex",flexDirection:"column",minHeight:"100vh",flexWrap:"wrap"},main:{marginTop:e.spacing(8),marginBottom:e.spacing(2)},title:{flexGrow:1}}}));var ee=function(e){var a=Z(),t=e.signOut,o=e.user,c=o.id,i=Object(n.useState)(""),u=Object(m.a)(i,2),p=u[0],d=u[1],h=Object(n.useState)([]),b=Object(m.a)(h,2),v=b[0],E=b[1],y=Object(n.useState)([]),x=Object(m.a)(y,2),k=x[0],j=x[1],O=Object(n.useReducer)((function(e){return e+1}),0),C=Object(m.a)(O,2)[1],S=Object(n.useRef)(),N=Object(n.useCallback)(function(){var e=Object(s.a)(l.a.mark((function e(a){var t,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(a||"javascript","&projection=lite&orderby=newest"));case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,r=n.items,E(r),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("Google Books Search"+e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(a){return e.apply(this,arguments)}}(),[]);Object(n.useEffect)((function(){S.current?(N(p),C()):(S.current=!0,N())}),[N,p]);var W=Object(n.useCallback)(Object(s.a)(l.a.mark((function e(){var a,t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/books/".concat(c));case 3:return a=e.sent,e.next=6,a.json();case 6:if(t=e.sent,n=t.data,a.ok){e.next=10;break}throw new Error("Could not get books");case 10:j(n),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])}))),[c]);return Object(n.useEffect)((function(){S.current?(W(),C()):(S.current=!0,W())}),[W]),r.a.createElement("div",{className:a.root},r.a.createElement(g.a,null),r.a.createElement($.a,{position:"relative"},r.a.createElement(X.a,null,r.a.createElement(Q.a,{className:a.icon}),r.a.createElement(w.a,{variant:"h6",color:"inherit",noWrap:!0,className:a.title},o?"Welcome ".concat(o.firstName," to the Unfurl Reading Stage"):"Welcome to the Unfurl Reading Stage"),r.a.createElement(f.a,{color:"inherit",onClick:t},"Logout"))),r.a.createElement("div",null,r.a.createElement("h3",null,"My Library"),r.a.createElement(G,{user:o,books:k,getMyBooks:W}),r.a.createElement("h3",null,"Search For Books"),r.a.createElement(q,{handleSubmit:function(e){e.preventDefault();var a=e.target[0].value;d(a)}}),r.a.createElement(z,{user:o,searchTerm:p,books:v,getMyBooks:W})),r.a.createElement(_,null))};function ae(){return r.a.createElement(w.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(E.a,{color:"inherit",href:"https://material-ui.com/"},"Your Website")," ",(new Date).getFullYear(),".")}var te=Object(O.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function ne(e){var a=te(),t=Object(n.useState)(""),o=Object(m.a)(t,2),c=o[0],i=o[1],u=Object(n.useState)(""),p=Object(m.a)(u,2),b=p[0],v=p[1],k=Object(n.useState)(""),O=Object(m.a)(k,2),S=O[0],N=O[1],W=Object(n.useState)(""),B=Object(m.a)(W,2),T=B[0],D=B[1];function I(){return(I=Object(s.a)(l.a.mark((function a(){var t,n,r;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,t={email:c,password:b,firstName:S,lastName:T},a.next=4,fetch("/api/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 4:return n=a.sent,a.next=7,n.json();case 7:if(r=a.sent,n.ok){a.next=10;break}throw new Error(r.message);case 10:return a.next=12,fetch("/api/users/signin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:c,password:b})});case 12:if(a.sent.ok){a.next=15;break}throw new Error(r.message);case 15:e.getUser(),a.next=23;break;case 18:a.prev=18,a.t0=a.catch(0),console.log(" error? "),e.updateUser(void 0),console.log(a.t0);case 23:case"end":return a.stop()}}),a,null,[[0,18]])})))).apply(this,arguments)}return r.a.createElement(C.a,{component:"main",maxWidth:"xs"},r.a.createElement(g.a,null),r.a.createElement("div",{className:a.paper},r.a.createElement(d.a,{className:a.avatar},r.a.createElement(j.a,null)),r.a.createElement(w.a,{component:"h1",variant:"h5"},"Sign up"),r.a.createElement("form",{className:a.form,noValidate:!0,onSubmit:function(e){e.preventDefault(),function(){I.apply(this,arguments)}()}},r.a.createElement(y.a,{container:!0,spacing:2},r.a.createElement(y.a,{item:!0,xs:12,sm:6},r.a.createElement(h.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0,value:S,onChange:function(e){return N(e.target.value)}})),r.a.createElement(y.a,{item:!0,xs:12,sm:6},r.a.createElement(h.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname",value:T,onChange:function(e){return D(e.target.value)}})),r.a.createElement(y.a,{item:!0,xs:12},r.a.createElement(h.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",value:c,onChange:function(e){return i(e.target.value)}})),r.a.createElement(y.a,{item:!0,xs:12},r.a.createElement(h.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:b,onChange:function(e){return v(e.target.value)}}))),r.a.createElement(f.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit},"Sign Up"),r.a.createElement(y.a,{container:!0,justifyContent:"flex-end"},r.a.createElement(y.a,{item:!0},r.a.createElement(E.a,{href:"/signin",variant:"body2"},"Already have an account? Sign in"))))),r.a.createElement(x.a,{mt:5},r.a.createElement(ae,null)))}var re=function(){var e=Object(n.useState)(void 0),a=Object(m.a)(e,2),t=a[0],o=a[1],c=Object(n.useCallback)(Object(s.a)(l.a.mark((function e(){var a,t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/users/me");case 3:return a=e.sent,e.next=6,a.json();case 6:if(t=e.sent,a.ok){e.next=9;break}throw new Error(t.message);case 9:o(t.data),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0.message+" user not allowed"),o(void 0);case 16:case"end":return e.stop()}}),e,null,[[0,12]])}))),[]);Object(n.useEffect)((function(){c()}),[c]),Object(n.useEffect)((function(){document.title="Unfurl Reading"}),[]);var i=function(){var e=Object(s.a)(l.a.mark((function e(a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,fetch("/api/users/signout").then((function(){o(void 0)}));case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"App"},r.a.createElement(u.a,null,r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/signin",render:function(e){return t?r.a.createElement(p.a,{to:"/"}):r.a.createElement(B,Object.assign({getUser:c},e))}}),r.a.createElement(p.b,{exact:!0,path:"/signup",render:function(e){return t?r.a.createElement(p.a,{to:"/"}):r.a.createElement(ne,Object.assign({getUser:c,updateUser:o},e))}}),r.a.createElement(p.b,{path:"/",render:function(e){return t?r.a.createElement(ee,Object.assign({},e,{signOut:i,user:t})):r.a.createElement(p.a,{to:"/signin"})}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},96:function(e,a,t){e.exports=t(110)}},[[96,1,2]]]);
//# sourceMappingURL=main.60332b28.chunk.js.map