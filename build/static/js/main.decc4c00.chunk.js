(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{38:function(n,e,t){},39:function(n,e,t){"use strict";t.r(e);var c=t(0),u=t(2),a=t.n(u),o=t(14),i=t.n(o),r=t(3),s=t(4),l=t.n(s),d="/api/persons",j=function(){return l.a.get(d).then((function(n){return n.data}))},b=function(n){return l.a.post(d,n).then((function(n){return n.data}))},f=function(n){return l.a.delete("".concat(d,"/").concat(n))},h=function(n,e){return l.a.put("".concat(d,"/").concat(n),e).then((function(n){return n.data}))},m=(t(38),function(n){var e=n.inputValue,t=n.changeFunction;return Object(c.jsxs)("div",{children:["filter shown with ",Object(c.jsx)("input",{value:e,onChange:t})]})}),O=function(n){var e=n.onSubmit,t=n.nameValue,u=n.nameChange,a=n.numberValue,o=n.numberChange;return Object(c.jsx)("div",{children:Object(c.jsxs)("form",{onSubmit:e,children:[Object(c.jsxs)("div",{children:["name: ",Object(c.jsx)("input",{value:t,onChange:u})]}),Object(c.jsxs)("div",{children:["number: ",Object(c.jsx)("input",{value:a,onChange:o})]}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{type:"submit",children:"add"})})]})})},v=function(n){var e=n.person,t=n.onClickFunction;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("p",{children:[e.name," ",e.number]}),Object(c.jsx)("button",{onClick:t,id:e.id,children:"delete"})]})},p=function(n){var e=n.message;return null===e?null:Object(c.jsx)("div",{className:"success",children:e})},x=function(n){var e=n.message;return null===e?null:Object(c.jsx)("div",{className:"error",children:e})},g=function(){var n=Object(u.useState)([]),e=Object(r.a)(n,2),t=e[0],a=e[1],o=Object(u.useState)([]),i=Object(r.a)(o,2),s=i[0],l=i[1],d=Object(u.useState)(""),g=Object(r.a)(d,2),w=g[0],C=g[1],S=Object(u.useState)(""),k=Object(r.a)(S,2),T=k[0],V=k[1],F=Object(u.useState)(""),y=Object(r.a)(F,2),E=y[0],D=y[1],N=Object(u.useState)(null),I=Object(r.a)(N,2),J=I[0],L=I[1],A=Object(u.useState)(null),B=Object(r.a)(A,2),M=B[0],P=B[1];Object(u.useEffect)((function(){j().then((function(n){a(n)}))}),[]);var U=function(n){var e=function(n){var e;return t.forEach((function(t){t.id.toString()===n&&(e=t.name)})),e}(n.target.id);window.confirm("Delete ".concat(e," ?"))&&f(n.target.id).then((function(n){j().then((function(n){a(n),L("Deleted ".concat(e)),setTimeout((function(){L(null)}),5e3)}))})).catch((function(n){P("Information of ".concat(e," was already removed from the server")),setTimeout((function(){P(null)}),5e3)}))};return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Phonebook"}),Object(c.jsx)(p,{message:J}),Object(c.jsx)(x,{message:M}),Object(c.jsx)(m,{inputValue:E,changeFunction:function(n){D(n.target.value);var e=t.map((function(n){return n.name})).filter((function(n){return n.toLowerCase().includes(E.toLowerCase())}));l(e)}}),Object(c.jsx)("h2",{children:"add a new"}),Object(c.jsx)(O,{onSubmit:function(n){n.preventDefault();var e={name:w,number:T};if(t.map((function(n){return n.name})).includes(w)){if(window.confirm("".concat(w," is already added to phonebook, replace the old number with a new one?"))){var c=function(n){var e;return t.forEach((function(t){t.name===n&&(e=t.id)})),e}(w);h(c,e).then((function(n){a(t.map((function(e){return e.id!==c?e:n}))),L("Updated ".concat(w,"'s number")),setTimeout((function(){L(null)}),5e3)})).catch((function(n){P("unable to update ".concat(w)),setTimeout((function(){P(null)}),5e3)}))}}else b(e).then((function(n){a(t.concat(n)),L("Added ".concat(w)),setTimeout((function(){L(null)}),5e3)})).catch((function(n){P("unable to add ".concat(w," to phonebook")),setTimeout((function(){P(null)}),5e3)}));C(""),V("")},nameValue:w,nameChange:function(n){C(n.target.value)},numberValue:T,numberChange:function(n){V(n.target.value)}}),Object(c.jsx)("h2",{children:"Numbers"}),(s.length&&""!==E?t.filter((function(n){return s.includes(n.name)})):t).map((function(n){return Object(c.jsx)(v,{person:n,onClickFunction:U},n.id)}))]})};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(g,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.decc4c00.chunk.js.map