(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{13:function(t,e,n){t.exports={contactItem:"ContactList_contactItem__1fFRC"}},18:function(t,e,n){},19:function(t,e,n){},3:function(t,e,n){t.exports={contactsForm:"ContactsForm_contactsForm__1dqkd",formLabel:"ContactsForm_formLabel__cOfUB"}},30:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(11),o=n.n(r),s=(n(18),n(10)),i=n(5),l=n(6),u=n(8),m=n(7),b=(n(19),n(12)),h=n(2),d=n.n(h),j=n(3),f=n.n(j),O=n(0),p=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.nameInputId=d.a.generate(),t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(b.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number,r={id:d.a.generate(),name:a,number:c};t.props.onSubmit(r),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("form",{onSubmit:this.handleSubmit,className:f.a.contactsForm,children:[Object(O.jsx)("label",{htmlFor:d.a.generate(),className:f.a.formLabel,children:"Name"}),Object(O.jsx)("input",{className:f.a.formLabel,id:d.a.generate(),type:"text",name:"name",value:this.state.name,onChange:this.handleChange}),Object(O.jsx)("label",{htmlFor:d.a.generate(),className:f.a.formLabel,children:"Number"}),Object(O.jsx)("input",{className:f.a.formLabel,id:d.a.generate(),type:"tel",name:"number",value:this.state.number,onChange:this.handleChange}),Object(O.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(a.Component),g=n(13),x=n.n(g),C=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("ul",{children:e.map((function(t){var e=t.name,a=t.id,c=t.number;return Object(O.jsxs)("li",{className:x.a.contactItem,children:[Object(O.jsxs)("p",{children:[Object(O.jsxs)("span",{children:[e,":"]})," ",c]}),Object(O.jsx)("button",{type:"button",onClick:function(){return n(a)},children:"Delete"})]},a)}))})})},v=function(t){var e=t.value,n=t.onChange;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("p",{children:"Find contacts by name"}),Object(O.jsx)("label",{htmlFor:"",children:Object(O.jsx)("input",{type:"text",value:e,onChange:n})})]})},S=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t.formSubmitHandler=function(e){if(t.state.contacts.some((function(t){return t.name.toLowerCase()===e.name.toLowerCase()})))return alert("".concat(e.name," is already in contacts"));t.setState((function(t){return{contacts:[].concat(Object(s.a)(t.contacts),[e])}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("contacts"));t&&this.setState((function(){return{contacts:Object(s.a)(t)}}))}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h1",{children:"Phonebook"}),Object(O.jsx)(p,{onSubmit:this.formSubmitHandler}),Object(O.jsx)("h2",{children:"Contacts"}),Object(O.jsx)(v,{value:t,onChange:this.changeFilter}),Object(O.jsx)(C,{contacts:e,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component);n(29);o.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(S,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.7a0bdbc9.chunk.js.map