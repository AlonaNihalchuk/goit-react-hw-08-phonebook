(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{86:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n(36);function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],a=!0,r=!1,o=void 0;try{for(var c,s=t[Symbol.iterator]();!(a=(c=s.next()).done)&&(n.push(c.value),!e||n.length!==e);a=!0);}catch(i){r=!0,o=i}finally{try{a||null==s.return||s.return()}finally{if(r)throw o}}return n}}(t,e)||Object(a.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},89:function(t,e,n){t.exports={formSection:"Form_formSection__2VlV-",formLabel:"Form_formLabel__2yd-z",formBtn:"Form_formBtn__1M7TF"}},90:function(t,e,n){t.exports={contactsHead:"Filter_contactsHead__35n14"}},91:function(t,e,n){t.exports={contactsList:"Contacts_contactsList__DExdM"}},92:function(t,e,n){t.exports={contactsButton:"ContactItem_contactsButton__2-fNe",personName:"ContactItem_personName__FtXJZ"}},93:function(t,e,n){t.exports={contactsHead:"ContactsView_contactsHead__OdwLC",phonebook:"ContactsView_phonebook__26dPi",phonebookHeader:"ContactsView_phonebookHeader__LSwey",noContacts:"ContactsView_noContacts__zJ9MZ"}},99:function(t,e,n){"use strict";n.r(e);var a,r=n(86),o=n(0),c=new Uint8Array(16);function s(){if(!a&&!(a="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(c)}var i=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var u=function(t){return"string"===typeof t&&i.test(t)},b=[],l=0;l<256;++l)b.push((l+256).toString(16).substr(1));var d=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(b[t[e+0]]+b[t[e+1]]+b[t[e+2]]+b[t[e+3]]+"-"+b[t[e+4]]+b[t[e+5]]+"-"+b[t[e+6]]+b[t[e+7]]+"-"+b[t[e+8]]+b[t[e+9]]+"-"+b[t[e+10]]+b[t[e+11]]+b[t[e+12]]+b[t[e+13]]+b[t[e+14]]+b[t[e+15]]).toLowerCase();if(!u(n))throw TypeError("Stringified UUID is invalid");return n};var f=function(t,e,n){var a=(t=t||{}).random||(t.rng||s)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,e){n=n||0;for(var r=0;r<16;++r)e[n+r]=a[r];return e}return d(a)},m=n(89),j=n.n(m),p=n(6),h=n(28),O=function(t){return t.contacts.items},v=function(t){return t.contacts.filter},y=Object(h.a)([O,v],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),_=n(17),x=n(1);var C=function(){var t=Object(o.useState)(""),e=Object(r.a)(t,2),n=e[0],a=e[1],c=Object(o.useState)(""),s=Object(r.a)(c,2),i=s[0],u=s[1],b=Object(p.c)(O),l=Object(p.b)(),d=function(t){switch(t.target.name){case"name":a(t.target.value);break;case"number":u(t.target.value);break;default:return}};return Object(x.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e=f();b.find((function(t){return t.name===n}))?alert("".concat(n," is already in contacts.")):(l(Object(_.a)({name:n,number:i,id:e})),a(""),u(""))},className:j.a.formSection,children:[Object(x.jsxs)("label",{className:j.a.formLabel,children:["Name"," ",Object(x.jsx)("input",{onChange:d,value:n,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(x.jsxs)("label",{className:j.a.formLabel,children:["Phone"," ",Object(x.jsx)("input",{onChange:d,value:i,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u0446\u0438\u0444\u0435\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(x.jsx)("button",{type:"submit",className:j.a.formBtn,children:"Save"})]})},g=n(90),w=n.n(g),N=n(46);var S=function(){var t=Object(p.c)(v),e=Object(p.b)();return Object(x.jsxs)("label",{className:w.a.filter,children:["Find contact by name"," ",Object(x.jsx)("input",{type:"text",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",value:t,onChange:function(t){return e(N.a(t.target.value))}})]})},k=n(91),A=n.n(k),L=n(92),V=n.n(L);var z=function(t){var e=t.name,n=t.id,a=t.number,r=Object(p.b)();return Object(x.jsxs)("li",{className:V.a.personName,children:[Object(x.jsxs)("p",{className:"",children:[e,":"]}),Object(x.jsx)("p",{children:a}),Object(x.jsx)("button",{className:V.a.contactsButton,onClick:function(){return r(Object(_.b)(n))},children:"delete"})]})};var B=function(){var t=Object(p.c)(y),e=Object(p.b)();return Object(o.useEffect)((function(){e(Object(_.c)())}),[e]),Object(x.jsx)("section",{className:A.a.contacts,children:Object(x.jsx)("ul",{className:A.a.contactsList,children:t.length>0&&t.map((function(t){var e=t.name,n=t.number,a=t.id;return Object(x.jsx)(z,{name:e,number:n,id:a},a)}))})})},H=n(93),Z=n.n(H);e.default=function(){return Object(x.jsxs)("section",{className:Z.a.phonebook,children:[Object(x.jsx)("h1",{className:Z.a.phonebookHeader,children:"Phonebook"}),Object(x.jsx)(C,{}),Object(x.jsx)("h2",{className:Z.a.contactsHead,children:"Contacts "}),Object(x.jsx)(S,{}),Object(x.jsx)(B,{})]})}}}]);
//# sourceMappingURL=ContactsView.2b238f10.chunk.js.map