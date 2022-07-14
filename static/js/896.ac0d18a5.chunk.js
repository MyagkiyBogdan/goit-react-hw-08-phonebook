"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[896],{4896:function(e,n,t){t.r(n),t.d(n,{default:function(){return ce}});var r=t(885),a="ContactForm_form__dhl+T",o="ContactForm_wrapper__-Umw-",i="ContactForm_label__-cVXI",c="ContactForm_inputName__a8jFO",s="ContactForm_inputNumber__DBiVZ",l="ContactForm_addBtn__CACuJ",d=t(8989),u=t(6831),m=t(2791),p=t(5206),h=t(184);var x,f,b,g=function(){var e=(0,m.useState)(""),n=(0,r.Z)(e,2),t=n[0],x=n[1],f=(0,m.useState)(""),b=(0,r.Z)(f,2),g=b[0],v=b[1],_=(0,d.wY)().data,w=(0,d.Tn)(),j=(0,r.Z)(w,2),y=j[0],N=j[1].isLoading,Z=function(e){switch(e.currentTarget.name){case"name":x(e.currentTarget.value);break;case"number":v(e.currentTarget.value);break;default:throw new Error("Worng state type!")}};return(0,h.jsxs)("form",{className:a,onSubmit:function(e){e.preventDefault(),(_&&_.reduce((function(e,n){return e.push(n.name.toLocaleLowerCase()),e}),[])).includes(t.toLocaleLowerCase())?p.Am.error("".concat(t," already in contacts.")):(y({name:t,number:g}),p.Am.success("\ud83d\ude38 ".concat(t," contact successfully added")),x(""),v(""))},children:[(0,h.jsxs)("div",{className:o,children:[(0,h.jsx)("label",{htmlFor:"name",className:i,children:"Name:"}),(0,h.jsx)("input",{className:c,onChange:Z,value:t,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f0-9]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash, numbers and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,maxLength:"14",minLength:"1"})]}),(0,h.jsxs)("div",{className:o,children:[(0,h.jsx)("label",{htmlFor:"number",className:i,children:"Number:"}),(0,h.jsx)("input",{className:s,onChange:Z,value:g,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,maxLength:"14"})]}),(0,h.jsx)("button",{type:"submit",className:l,children:N?(0,h.jsx)(u.Z,{width:18,height:18,color:"#fff"}):(0,h.jsx)("span",{children:"Add contact"})})]})},v=t(2982),_="ContactList_list__csErn",w="ContactList_item__EZYHO",j="ContactList_emptyFilter__JruHq",y="ContactListItem_text__fHzb4",N="ContactListItem_text__name__nzWRA",Z="ContactListItem_buttonsWrapper__HgNjB",C="ContactListItem_contactsBtn__d9HDO",z="ContactListItem_contactsBtnIcon__kQ-tp",k="ContactListItem_wrapper__HB+tC",O="Modal_Overlay__yoxbg",F="Modal_Modal__I1UYJ",L="Modal_form__FEIVf",M="Modal_wrapper__TlE5n",E="Modal_label__A0H75",A="Modal_inputName__V8BNc",P="Modal_inputNumber__4pNdq",I="Modal_addBtn__yvZfC",S=t(4164),B=document.querySelector("#modal-root"),T=function(e){var n=e.id,t=e.name,a=e.number,o=e.toggleModal,i=(0,d.Cq)(),c=(0,r.Z)(i,1)[0];(0,m.useEffect)((function(){return window.addEventListener("keydown",s),function(){return window.removeEventListener("keydown",s)}}));var s=function(e){"Escape"===e.code&&o()},l=(0,m.useState)(t),u=(0,r.Z)(l,2),p=u[0],x=u[1],f=(0,m.useState)(a),b=(0,r.Z)(f,2),g=b[0],v=b[1],_=function(e){switch(e.currentTarget.name){case"name":x(e.currentTarget.value);break;case"number":v(e.currentTarget.value);break;default:throw new Error("Worng state type!")}};return(0,S.createPortal)((0,h.jsx)("div",{className:O,onClick:function(e){e.target===e.currentTarget&&o()},children:(0,h.jsxs)("div",{className:F,children:[" ",(0,h.jsxs)("form",{className:L,onSubmit:function(e){e.preventDefault(),c({contactId:n,newName:p,newNumber:g}),x(""),v(""),o()},children:[(0,h.jsxs)("div",{className:M,children:[(0,h.jsx)("label",{htmlFor:"name",className:E,children:"Name:"}),(0,h.jsx)("input",{className:A,onChange:_,value:p,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,h.jsxs)("div",{className:M,children:[(0,h.jsx)("label",{htmlFor:"number",className:E,children:"Number:"}),(0,h.jsx)("input",{className:P,onChange:_,value:g,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,h.jsx)("button",{type:"submit",className:I,children:(0,h.jsx)("span",{children:"Change contact"})})]})]})}),B)},q=["title","titleId"];function Y(){return Y=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Y.apply(this,arguments)}function H(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function J(e,n){var t=e.title,r=e.titleId,a=H(e,q);return m.createElement("svg",Y({xmlns:"http://www.w3.org/2000/svg",width:512,height:512,viewBox:"0 0 512 512",ref:n,"aria-labelledby":r},a),t?m.createElement("title",{id:r},t):null,x||(x=m.createElement("g",{id:"icomoon-ignore"})),f||(f=m.createElement("path",{d:"M64 160v320c0 17.6 14.4 32 32 32h288c17.6 0 32-14.4 32-32v-320h-352zM160 448h-32v-224h32v224zM224 448h-32v-224h32v224zM288 448h-32v-224h32v224zM352 448h-32v-224h32v224z"})),b||(b=m.createElement("path",{d:"M424 64h-104v-40c0-13.2-10.8-24-24-24h-112c-13.2 0-24 10.8-24 24v40h-104c-13.2 0-24 10.8-24 24v40h416v-40c0-13.2-10.8-24-24-24zM288 64h-96v-31.599h96v31.599z"})))}var D,$=m.forwardRef(J),K=(t.p,["title","titleId"]);function R(){return R=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},R.apply(this,arguments)}function U(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function V(e,n){var t=e.title,r=e.titleId,a=U(e,K);return m.createElement("svg",R({xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",ref:n,"aria-labelledby":r},a),void 0===t?m.createElement("title",{id:r},"pencil"):t?m.createElement("title",{id:r},t):null,D||(D=m.createElement("path",{d:"M27 0c2.761 0 5 2.239 5 5 0 1.126-0.372 2.164-1 3l-2 2-7-7 2-2c0.836-0.628 1.874-1 3-1zM2 23l-2 9 9-2 18.5-18.5-7-7-18.5 18.5zM22.362 11.362l-14 14-1.724-1.724 14-14 1.724 1.724z"})))}var W=m.forwardRef(V),Q=(t.p,function(e){var n=e.id,t=e.name,a=e.number,o=(0,d.Nt)(),i=(0,r.Z)(o,2),c=i[0],s=i[1].isLoading,l=(0,m.useState)(!1),p=(0,r.Z)(l,2),x=p[0],f=p[1],b=function(){f((function(e){return!e}))};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("p",{className:y,children:[(0,h.jsxs)("span",{className:N,children:[t,":"]})," ",a]}),(0,h.jsxs)("div",{className:Z,children:[(0,h.jsx)("button",{className:C,onClick:b,type:"button",children:(0,h.jsx)(W,{className:z})}),(0,h.jsx)("button",{className:C,onClick:function(){return c(n)},type:"button",children:s?(0,h.jsx)("div",{className:k,children:(0,h.jsx)(u.Z,{width:16,height:16,color:"white"})}):(0,h.jsx)(h.Fragment,{children:(0,h.jsx)($,{className:z})})})]}),x&&(0,h.jsx)(T,{id:n,name:t,number:a,toggleModal:b})]})}),X=t(6895),G=t(5048),ee=function(){var e=(0,G.v9)(X.zK),n=(0,d.wY)().data,t=function(){var t=e.toLocaleLowerCase();return n&&(0,v.Z)(n).filter((function(e){return e.name.toLocaleLowerCase().includes(t)}))}();return 0===t.length?(0,h.jsx)("p",{className:j,children:"No contact with this name"}):(0,h.jsx)("ul",{className:_,children:t.map((function(e){var n=e.id,t=e.name,r=e.number;return(0,h.jsx)("li",{className:w,children:(0,h.jsx)(Q,{id:n,name:t,number:r})},n)}))})},ne="EmptyMessage_text__m5k0w",te=function(){return(0,h.jsx)("p",{className:ne,children:"Your contacts list is empty"})},re="Filter_label__vEd1E",ae="Filter_input__N7T3z",oe=function(){var e=(0,G.v9)(X.zK),n=(0,G.I0)();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("label",{htmlFor:"name",className:re,children:"Find contact by name:"}),(0,h.jsx)("input",{className:ae,onChange:function(e){return n((0,X.a8)(e.target.value))},value:e,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]})},ie=t(3673);function ce(){var e=(0,d.wY)(),n=e.data,t=e.isLoading;return(0,h.jsxs)(ie.$e,{children:[(0,h.jsx)(ie.S3,{children:(0,h.jsx)("h1",{children:"Phonebook"})}),(0,h.jsxs)(ie.SB,{children:[(0,h.jsx)(ie.Ct,{children:"Add new contact"}),(0,h.jsx)(g,{}),(0,h.jsxs)(ie.YK,{children:[(0,h.jsx)(ie.Ct,{children:"Your contacts"}),t&&(0,h.jsx)(u.Z,{width:50,height:50,color:"blue"}),n&&n.length>0?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(oe,{}),(0,h.jsx)(ee,{})]}):!t&&(0,h.jsx)(te,{})]})]})]})}},3673:function(e,n,t){t.d(n,{$e:function(){return v},Ct:function(){return O},Dx:function(){return j},Fg:function(){return Z},Oq:function(){return L},S3:function(){return _},SB:function(){return z},YK:function(){return k},bn:function(){return C},l0:function(){return w},u0:function(){return F},v0:function(){return N},xv:function(){return y}});var r,a,o,i,c,s,l,d,u,m,p,h,x,f=t(168),b=t(7939),g=t(3504),v=b.ZP.div(r||(r=(0,f.Z)(["\n  margin: 30px 10px;\n  border: 1px solid #000;\n  border-radius: 14px;\n  max-width: 500px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow: hidden;\n  box-shadow: 0.5rem 0.5rem 2rem #464545, -0.5rem -0.5rem 2rem #acabab;\n  @media screen and (min-width: 510px) {\n    margin: 30px auto;\n  }\n"]))),_=b.ZP.div(a||(a=(0,f.Z)(["\n  background-color: #445daf;\n  color: #fff;\n  width: 100%;\n  text-align: center;\n"]))),w=b.ZP.form(o||(o=(0,f.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin: 0 auto;\n"]))),j=b.ZP.h2(i||(i=(0,f.Z)(["\n  max-width: 300px;\n  text-align: center;\n  font-size: 28px;\n  margin: 0 0 15px;\n"]))),y=b.ZP.p(c||(c=(0,f.Z)(["\n  margin: 0 0 15px;\n  font-size: 18px;\n  font-style: italic;\n"]))),N=b.ZP.p(s||(s=(0,f.Z)(["\n  margin: 0 0 15px;\n  font-size: 22px;\n  max-width: 300px;\n  text-align: center;\n  line-height: 1.34;\n"]))),Z=(0,b.ZP)(g.rU)(l||(l=(0,f.Z)(["\n  text-decoration: none;\n  margin-bottom: 15px;\n  color: #0000ff;\n\n  &:hover {\n    color: tomato;\n  }\n"]))),C=b.ZP.a(d||(d=(0,f.Z)(["\n  text-decoration: none;\n  margin-bottom: 15px;\n  color: #0000ff;\n\n  &:hover {\n    color: tomato;\n  }\n"]))),z=b.ZP.div(u||(u=(0,f.Z)(["\n  padding: 30px 0;\n  background-color: #c5d3fc;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),k=b.ZP.div(m||(m=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  margin: 20px auto 50px;\n"]))),O=b.ZP.h2(p||(p=(0,f.Z)(["\n  font-size: 30px;\n  margin: 10px auto 30px;\n"]))),F=(0,b.ZP)(g.rU)(h||(h=(0,f.Z)(["\n  display: flex;\n  align-items: center;\n\n  justify-content: center;\n  position: relative;\n  box-sizing: border-box;\n\n  background-color: transparent;\n  outline: 0;\n  border: 0;\n  margin: 0;\n  border-radius: 0;\n  padding: 0;\n  cursor: pointer;\n  text-decoration: none;\n  color: inherit;\n  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;\n  font-weight: 500;\n  font-size: 0.875rem;\n  line-height: 1.75;\n  letter-spacing: 0.02857em;\n  text-transform: uppercase;\n  min-width: 64px;\n  padding: 6px 16px;\n  border-radius: 4px;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,\n    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,\n    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,\n    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n  color: #fff;\n  background-color: #1976d2;\n  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),\n    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);\n\n  width: 150px;\n  height: 50px;\n  background-image: linear-gradient(#323ff1, #1f2df8);\n\n  &:hover,\n  &:active {\n    background-image: linear-gradient(#1221f5, #0818f5);\n    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),\n      0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n  }\n  &:not(:last-child) {\n    margin-right: 20px;\n  }\n"]))),L=b.ZP.div(x||(x=(0,f.Z)(["\n  margin-top: 30px;\n  display: flex;\n"])))}}]);
//# sourceMappingURL=896.ac0d18a5.chunk.js.map