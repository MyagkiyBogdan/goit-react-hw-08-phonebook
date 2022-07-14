"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[198],{6198:function(n,e,r){r.r(e),r.d(e,{default:function(){return l}});var t=r(885),i=r(2791),o=r(5048),a=r(5154),c=r(4197),x=r(9515),d=r(3673),u=r(184);function l(){var n=(0,o.I0)(),e=(0,i.useState)(""),r=(0,t.Z)(e,2),l=r[0],p=r[1],s=(0,i.useState)(""),f=(0,t.Z)(s,2),m=f[0],g=f[1],h=(0,i.useState)(""),b=(0,t.Z)(h,2),Z=b[0],v=b[1],w=function(n){switch(n.currentTarget.name){case"name":return p(n.currentTarget.value);case"email":return g(n.currentTarget.value);case"password":return v(n.currentTarget.value);default:return}};return(0,u.jsxs)(d.$e,{children:[(0,u.jsx)(d.S3,{children:(0,u.jsx)("h1",{children:"Phonebook"})}),(0,u.jsxs)(d.SB,{children:[(0,u.jsx)(d.Dx,{children:"Create your Phonebook Account"}),(0,u.jsxs)(d.l0,{onSubmit:function(e){e.preventDefault(),n(a.Z.register({name:l,email:m,password:Z})),p(""),g(""),v("")},children:[(0,u.jsx)(c.Z,{required:!0,name:"name",label:"Name",variant:"outlined",value:l,onChange:w,sx:{width:"300px",mb:"15px"}}),(0,u.jsx)(c.Z,{required:!0,name:"email",label:"Email",variant:"outlined",value:m,onChange:w,sx:{width:"300px",mb:"15px"}}),(0,u.jsx)(c.Z,{required:!0,type:"password",name:"password",label:"Password",variant:"outlined",value:Z,onChange:w,sx:{width:"300px",mb:"15px"}}),(0,u.jsx)(d.Fg,{to:"/login",children:"Already registered? Sign in instead"}),(0,u.jsx)(x.Z,{variant:"contained",type:"submit",sx:{display:"block",width:"200px",height:"50px",backgroundImage:"linear-gradient(#323ff1, #1f2df8)",fontSize:"16px",fontWeight:"700"},children:"Register"})]})]})]})}},3673:function(n,e,r){r.d(e,{$e:function(){return Z},Ct:function(){return C},Dx:function(){return k},Fg:function(){return j},Oq:function(){return T},S3:function(){return v},SB:function(){return S},YK:function(){return _},bn:function(){return z},l0:function(){return w},u0:function(){return q},v0:function(){return P},xv:function(){return y}});var t,i,o,a,c,x,d,u,l,p,s,f,m,g=r(168),h=r(7939),b=r(3504),Z=h.ZP.div(t||(t=(0,g.Z)(["\n  margin: 30px 10px;\n  border: 1px solid #000;\n  border-radius: 14px;\n  max-width: 500px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow: hidden;\n  box-shadow: 0.5rem 0.5rem 2rem #464545, -0.5rem -0.5rem 2rem #acabab;\n  @media screen and (min-width: 510px) {\n    margin: 30px auto;\n  }\n"]))),v=h.ZP.div(i||(i=(0,g.Z)(["\n  background-color: #445daf;\n  color: #fff;\n  width: 100%;\n  text-align: center;\n"]))),w=h.ZP.form(o||(o=(0,g.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin: 0 auto;\n"]))),k=h.ZP.h2(a||(a=(0,g.Z)(["\n  max-width: 300px;\n  text-align: center;\n  font-size: 28px;\n  margin: 0 0 15px;\n"]))),y=h.ZP.p(c||(c=(0,g.Z)(["\n  margin: 0 0 15px;\n  font-size: 18px;\n  font-style: italic;\n"]))),P=h.ZP.p(x||(x=(0,g.Z)(["\n  margin: 0 0 15px;\n  font-size: 22px;\n  max-width: 300px;\n  text-align: center;\n  line-height: 1.34;\n"]))),j=(0,h.ZP)(b.rU)(d||(d=(0,g.Z)(["\n  text-decoration: none;\n  margin-bottom: 15px;\n  color: #0000ff;\n\n  &:hover {\n    color: tomato;\n  }\n"]))),z=h.ZP.a(u||(u=(0,g.Z)(["\n  text-decoration: none;\n  margin-bottom: 15px;\n  color: #0000ff;\n\n  &:hover {\n    color: tomato;\n  }\n"]))),S=h.ZP.div(l||(l=(0,g.Z)(["\n  padding: 30px 0;\n  background-color: #c5d3fc;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),_=h.ZP.div(p||(p=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  margin: 20px auto 50px;\n"]))),C=h.ZP.h2(s||(s=(0,g.Z)(["\n  font-size: 30px;\n  margin: 10px auto 30px;\n"]))),q=(0,h.ZP)(b.rU)(f||(f=(0,g.Z)(["\n  display: flex;\n  align-items: center;\n\n  justify-content: center;\n  position: relative;\n  box-sizing: border-box;\n\n  background-color: transparent;\n  outline: 0;\n  border: 0;\n  margin: 0;\n  border-radius: 0;\n  padding: 0;\n  cursor: pointer;\n  text-decoration: none;\n  color: inherit;\n  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;\n  font-weight: 500;\n  font-size: 0.875rem;\n  line-height: 1.75;\n  letter-spacing: 0.02857em;\n  text-transform: uppercase;\n  min-width: 64px;\n  padding: 6px 16px;\n  border-radius: 4px;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,\n    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,\n    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,\n    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n  color: #fff;\n  background-color: #1976d2;\n  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),\n    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);\n\n  width: 150px;\n  height: 50px;\n  background-image: linear-gradient(#323ff1, #1f2df8);\n\n  &:hover,\n  &:active {\n    background-image: linear-gradient(#1221f5, #0818f5);\n    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),\n      0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n  }\n  &:not(:last-child) {\n    margin-right: 20px;\n  }\n"]))),T=h.ZP.div(m||(m=(0,g.Z)(["\n  margin-top: 30px;\n  display: flex;\n"])))}}]);
//# sourceMappingURL=198.27c40125.chunk.js.map