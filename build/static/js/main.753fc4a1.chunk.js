(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var c=t(0),u=t(2),a=t.n(u),o=t(14),i=t.n(o),r=t(3),s=t(4),l=t.n(s),j="/api/persons",d=function(){return l.a.get(j).then((function(e){return e.data}))},b=function(e){return l.a.post(j,e).then((function(e){return e.data}))},f=function(e){return l.a.delete("".concat(j,"/").concat(e))},h=function(e,n){return l.a.put("".concat(j,"/").concat(e),n).then((function(e){return e.data}))},m=(t(38),function(e){var n=e.inputValue,t=e.changeFunction;return Object(c.jsxs)("div",{children:["filter shown with ",Object(c.jsx)("input",{value:n,onChange:t})]})}),O=function(e){var n=e.onSubmit,t=e.nameValue,u=e.nameChange,a=e.numberValue,o=e.numberChange;return Object(c.jsx)("div",{children:Object(c.jsxs)("form",{onSubmit:n,children:[Object(c.jsxs)("div",{children:["name: ",Object(c.jsx)("input",{value:t,onChange:u})]}),Object(c.jsxs)("div",{children:["number: ",Object(c.jsx)("input",{value:a,onChange:o})]}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{type:"submit",children:"add"})})]})})},v=function(e){var n=e.person,t=e.onClickFunction;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("p",{children:[n.name," ",n.number]}),Object(c.jsx)("button",{onClick:t,id:n.id,children:"delete"})]})},p=function(e){var n=e.message;return null===n?null:Object(c.jsx)("div",{className:"success",children:n})},x=function(e){var n=e.message;return null===n?null:Object(c.jsx)("div",{className:"error",children:n})},g=function(){var e=Object(u.useState)([]),n=Object(r.a)(e,2),t=n[0],a=n[1],o=Object(u.useState)([]),i=Object(r.a)(o,2),s=i[0],l=i[1],j=Object(u.useState)(""),g=Object(r.a)(j,2),w=g[0],C=g[1],S=Object(u.useState)(""),k=Object(r.a)(S,2),T=k[0],V=k[1],F=Object(u.useState)(""),y=Object(r.a)(F,2),E=y[0],D=y[1],N=Object(u.useState)(null),I=Object(r.a)(N,2),J=I[0],L=I[1],A=Object(u.useState)(null),B=Object(r.a)(A,2),M=B[0],P=B[1];Object(u.useEffect)((function(){d().then((function(e){a(e)}))}),[]);var U=function(e){var n=function(e){var n;return t.forEach((function(t){t.id.toString()===e&&(n=t.name)})),n}(e.target.id);window.confirm("Delete ".concat(n," ?"))&&f(e.target.id).then((function(e){d().then((function(e){a(e),L("Deleted ".concat(n)),setTimeout((function(){L(null)}),5e3)}))})).catch((function(e){P("Information of ".concat(n," was already removed from the server")),setTimeout((function(){P(null)}),5e3)}))};return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Phonebook"}),Object(c.jsx)(p,{message:J}),Object(c.jsx)(x,{message:M}),Object(c.jsx)(m,{inputValue:E,changeFunction:function(e){D(e.target.value);var n=t.map((function(e){return e.name})).filter((function(e){return e.toLowerCase().includes(E.toLowerCase())}));l(n)}}),Object(c.jsx)("h2",{children:"add a new"}),Object(c.jsx)(O,{onSubmit:function(e){e.preventDefault();var n={name:w,number:T};if(t.map((function(e){return e.name})).includes(w)){if(window.confirm("".concat(w," is already added to phonebook, replace the old number with a new one?"))){var c=function(e){var n;return t.forEach((function(t){t.name===e&&(n=t.id)})),n}(w);h(c,n).then((function(e){a(t.map((function(n){return n.id!==c?n:e}))),L("Updated ".concat(w,"'s number")),setTimeout((function(){L(null)}),5e3)})).catch((function(e){P("unable to update ".concat(w)),setTimeout((function(){P(null)}),5e3)}))}}else b(n).then((function(e){a(t.concat(e)),L("Added ".concat(w)),setTimeout((function(){L(null)}),5e3)})).catch((function(e){P("".concat(e.response.data)),setTimeout((function(){P(null)}),5e3)}));C(""),V("")},nameValue:w,nameChange:function(e){C(e.target.value)},numberValue:T,numberChange:function(e){V(e.target.value)}}),Object(c.jsx)("h2",{children:"Numbers"}),(s.length&&""!==E?t.filter((function(e){return s.includes(e.name)})):t).map((function(e){return Object(c.jsx)(v,{person:e,onClickFunction:U},e.id)}))]})};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(g,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.753fc4a1.chunk.js.map