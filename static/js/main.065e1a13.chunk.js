(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{127:function(e,t,n){e.exports=n(203)},203:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(3),a=n.n(i),c=n(107),l=n(121),u=n(64),f=n(81),d=n.n(f),s=n(207),m=s.a.Header,p=s.a.Footer,g=s.a.Content,b=function(e){var t=e.children;return o.a.createElement(s.a,{style:{minHeight:"100vh"}},o.a.createElement(m,null,o.a.createElement("h1",{style:{color:"white",textAlign:"center"}},"Todo List App")),o.a.createElement(g,{style:{padding:"3rem 2rem"}},o.a.createElement("div",{style:{maxWidth:608,margin:"0 auto",backgroundColor:"white"}},t)),o.a.createElement(p,{style:{textAlign:"center"}},"Made with \u2764 by Thomas Chappel"))},v=n(65),O=n(204),h=n(28),y=n(29);function E(){var e=Object(h.a)(["\n    margin-left: 1rem;\n    &:hover {\n        cursor: pointer;\n    }\n"]);return E=function(){return e},e}function j(){var e=Object(h.a)(["\n    color: red;\n    margin-left: 1rem;\n"]);return j=function(){return e},e}function w(){var e=Object(h.a)(["\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: flex-start;\n    align-items: center;\n    margin-right: auto;\n"]);return w=function(){return e},e}function C(){var e=Object(h.a)(["\n    margin-right: 1rem;\n    &:hover {\n        cursor: pointer;\n    }\n"]);return C=function(){return e},e}function x(){var e=Object(h.a)(["\n    width: 100%;\n    height: 100%\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: start;\n    align-items: center;\n"]);return x=function(){return e},e}var k=y.a.div(x()),T=y.a.span(C()),B=y.a.div(w()),S=y.a.span(j()),I=y.a.span(E()),P=n(112),D=n(113),F=n(41),A={"circle-filled":F.a,"circle-outlined":D.a,edit:F.b,delete:F.c},R=function(e){var t=e.type,n=Object(v.a)(e,["type"]);return o.a.createElement(P.a,Object.assign({icon:A[t]},n))},L=Object(r.forwardRef)((function(e,t){var n=e.originalValue,i=void 0===n?"":n,a=e.placeholder,c=void 0===a?"":a,l=e.onBlur,f=e.onSubmit,d=e.onChange,s=Object(r.useState)(i),m=Object(u.a)(s,2),p=m[0],g=m[1];return o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),f(p)}},o.a.createElement("input",{type:"text",name:"edit-text",placeholder:c,ref:t,value:p,onChange:function(e){g(e.target.value),d()},onBlur:function(e){return l()}}))})),H=Object(r.forwardRef)((function(e,t){var n=e.todo,r=e.onBtnSelectionClick,i=e.onBtnEditClick,a=e.onBtnDeleteClick,c=e.onInputTextBlur,l=e.onInputTextOnChange,u=e.onInputTextSubmit,f=n.title,d=n.selected,s=n.id,m=n.editing,p=n.error;return o.a.createElement(k,null,o.a.createElement(T,null,o.a.createElement(R,{type:d?"circle-filled":"circle-outlined",onClick:function(){return r(s)}})),o.a.createElement(B,null,m?o.a.createElement(L,{originalValue:f,placeholder:"Enter new todo title",onBlur:function(){return c(n)},onSubmit:u(s),ref:t,onChange:function(){return l(s)}}):f,p&&o.a.createElement(S,null,p.message)),m?null:o.a.createElement(o.a.Fragment,null,o.a.createElement(I,null,o.a.createElement(R,{type:"edit",onClick:function(){return i(s)}})),o.a.createElement(I,null,o.a.createElement(R,{type:"delete",onClick:a(s)}))))}));function J(){var e=Object(h.a)(["\n    &:hover {\n        background-color: #F7F9F9\n    }\n"]);return J=function(){return e},e}var N=Object(y.a)(O.a.Item)(J()),V=Object(r.forwardRef)((function(e,t){var n=e.todos,r=void 0===n?[]:n,i=Object(v.a)(e,["todos"]);return o.a.createElement("div",null,o.a.createElement(O.a,{bordered:!0,dataSource:r,renderItem:function(e){return o.a.createElement(N,null,o.a.createElement(H,Object.assign({todo:e,ref:t},i)))}}))})),z=n(47),M=n(7),W=n(205).a.confirm,Y=function(e){return function(t){return function(){W({title:"Are you sure you want to delete this todo?",content:"Press yes to confirm deletion",okText:"Yes",okType:"danger",cancelText:"No",onOk:function(){e(t)}})}}};function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(n,!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var K=[{id:d()("todo"),title:"first todo",selected:!0,editing:!1,error:null}],Q=function(){var e=Object(r.useState)(K),t=Object(u.a)(e,2),n=t[0],i=t[1],a=Object(r.useRef)(null),c=function(){var e={id:d()("todo"),title:"",selected:!1,editing:!0,error:null};i([].concat(Object(l.a)(n),[G({},e)]))},f=function(e,t){var r=n.map((function(n){return n.id===e?G({},n,{error:t}):n}));i(r)},s=n.find((function(e){return!0===e.editing})),m=function(e){return n.find((function(t){return t.title.toLowerCase()===e.toLowerCase()}))};return Object(r.useEffect)((function(){a&&a.current&&a.current.focus()}),[n]),o.a.createElement(b,null,o.a.createElement(V,{todos:n,ref:a,onBtnSelectionClick:function(e){var t=n.map((function(t){return t.id===e?G({},t,{selected:!t.selected}):t}));i(t)},onBtnEditClick:function(e){s||function(e){var t=n.map((function(t){return t.id===e?G({},t,{editing:!t.editing}):t}));i(t)}(e)},onBtnDeleteClick:Y((function(e){var t=n.filter((function(t){return t.id!==e}));i(t)})),onInputTextBlur:function(e){if(e.title){var t=n.map((function(t){return t.id===e.id?G({},t,{editing:!t.editing,error:null}):t}));i(t)}else a.current.focus(),f(e.id,{message:"Please enter new todo title"})},onInputTextOnChange:function(e){f(e,null)},onInputTextSubmit:function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(0===t.length)f(e,{message:"Cannot submit an empty value!"});else{var r=m(t);if(r&&r.id!==e)f(e,{message:"This Todo already exists!"});else{var o=n.map((function(n){return n.id===e?G({},n,{editing:!1,title:t,error:null}):n}));i(o)}}}}}),o.a.createElement(z.a,{style:{float:"right",marginTop:"1rem"},type:"primary",size:"large",onClick:function(){s||c()}},"New Item",o.a.createElement(M.a,{type:"plus"})))};n(202);a.a.render(o.a.createElement(Q,null),document.getElementById("root"))}},[[127,1,2]]]);
//# sourceMappingURL=main.065e1a13.chunk.js.map