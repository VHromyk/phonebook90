(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{17:function(t,e,n){},2:function(t,e,n){t.exports={form:"ContactForm_form__2LUMH",label:"ContactForm_label__5NB9B",input:"ContactForm_input__2XJGZ",button:"ContactForm_button__3b6Sj"}},20:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(10),o=n.n(r),i=n(12),s=n(3),l=n(4),u=n(6),m=n(5),b=n(22),d=(n(17),n(7)),j=n.n(d),h=n(0),p=function(t){var e=t.list,n=t.deleteContact;return Object(h.jsx)("ul",{className:j.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(h.jsxs)("li",{className:j.a.item,children:[Object(h.jsx)("span",{children:a}),Object(h.jsx)("span",{children:c}),Object(h.jsx)("button",{type:"button",onClick:function(){return n(e)},className:j.a.button,children:"X"})]},e)}))})},f=n(11),O=n(2),C=n.n(O),_=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.onChangeInput=function(e){t.setState(Object(f.a)({},e.currentTarget.name,e.currentTarget.value))},t.onSubmitForm=function(e){var n=t.state,a=n.name,c=n.number,r=t.props,o=r.contacts,i=r.addContact;e.preventDefault(),o.find((function(t){return t.name===a}))?alert("".concat(a," is already in the contact")):0!==c.length&&(i(a,c),t.onResetForm())},t.onResetForm=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("form",{className:C.a.form,onSubmit:this.onSubmitForm,children:[Object(h.jsxs)("label",{className:C.a.label,children:["Name",Object(h.jsx)("input",{className:C.a.input,name:"name",value:this.state.name,onChange:this.onChangeInput})]}),Object(h.jsxs)("label",{className:C.a.label,children:["Number",Object(h.jsx)("input",{className:C.a.input,name:"number",value:this.state.number,onChange:this.onChangeInput})]}),Object(h.jsx)("button",{className:C.a.button,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),x=n(9),v=n.n(x),g=function(t){var e=t.value,n=t.changeFilter;return Object(h.jsxs)("label",{className:v.a.label,children:["Find contacts by name:",Object(h.jsx)("input",{type:"text",value:e,onChange:n,className:v.a.input})]})},F=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e,n){var a={id:Object(b.a)(),name:e,number:n};t.setState({contacts:[a].concat(Object(i.a)(t.state.contacts))})},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.normalizedList=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e})),filter:""}}))},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"phoneBook",children:[Object(h.jsx)("h1",{className:"main-title",children:"Phonebook"}),Object(h.jsx)(_,{contacts:this.state.contacts,addContact:this.addContact}),Object(h.jsx)("h2",{className:"second-title",children:"Contacts"}),Object(h.jsx)(g,{value:this.state.filter,changeFilter:this.changeFilter}),Object(h.jsx)(p,{list:this.normalizedList(),deleteContact:this.deleteContact})]})}}]),n}(a.Component);n(19);o.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(F,{})}),document.getElementById("root"))},7:function(t,e,n){t.exports={list:"Filter_list__1rujm",item:"Filter_item__wg7ap",button:"Filter_button__16IIm"}},9:function(t,e,n){t.exports={label:"ContactList_label__3S6Mc",input:"ContactList_input__1tBFu"}}},[[20,1,2]]]);
//# sourceMappingURL=main.956718c0.chunk.js.map