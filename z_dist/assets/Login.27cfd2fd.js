var F=Object.defineProperty,V=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var f=(e,o,s)=>o in e?F(e,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[o]=s,v=(e,o)=>{for(var s in o||(o={}))y.call(o,s)&&f(e,s,o[s]);if(_)for(var s of _(o))C.call(o,s)&&f(e,s,o[s]);return e},g=(e,o)=>V(e,k(o));import{_ as S,l as L,a as $}from"./index.8857c13e.js";import{$ as I,r as M,t as N,d as n,e as U,f as x,g as m,j as a,w as d,b as B,_ as R,a0 as q,p as T,l as j,k as c}from"./vendor.bcf7419b.js";import"./md5.85c9fa83.js";const E={name:"Login",setup(){const e=I(null),o=M({ruleForm:{username:"",password:""},checked:!0,rules:{username:[{required:"true",message:"\u8D26\u6237\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],password:[{required:"true",message:"\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}}),s=async()=>{e.value.validate(p=>{if(p){let u=B.create();u.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded";const l=new URLSearchParams;l.append("username",o.ruleForm.username),l.append("password",o.ruleForm.password),u.post("/mgr/signin",l).then(t=>{console.log(t),t.data.code!=200?R.error(t.data.msg):(L("token",t.data.data.token),window.location.href="/")})}else return console.log("error submit!!"),!1})},i=()=>{e.value.resetFields()};return g(v({},N(o)),{loginForm:e,submitForm:s,resetForm:i})}},P=e=>(T("data-v-26084dc2"),e=e(),j(),e),z={class:"login-body"},A={class:"login-container"},D=q('<div class="head" data-v-26084dc2><img class="logo" src="'+$+'" data-v-26084dc2><div class="name" data-v-26084dc2><div class="title" data-v-26084dc2>CRM</div><div class="tips" data-v-26084dc2>Vue3.0 \u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF</div></div></div>',1),G=P(()=>m("div",{style:{color:"#333"}},[c("\u767B\u5F55\u8868\u793A\u60A8\u5DF2\u540C\u610F"),m("a",null,"\u300A\u670D\u52A1\u6761\u6B3E\u300B")],-1)),H=c("\u7ACB\u5373\u767B\u5F55"),J=c("\u4E0B\u6B21\u81EA\u52A8\u767B\u5F55");function K(e,o,s,i,p,u){const l=n("el-input"),t=n("el-form-item"),w=n("el-button"),h=n("el-checkbox"),b=n("el-form");return U(),x("div",z,[m("div",A,[D,a(b,{"label-position":"top",rules:e.rules,model:e.ruleForm,ref:"loginForm",class:"login-form"},{default:d(()=>[a(t,{label:"\u8D26\u53F7",prop:"username"},{default:d(()=>[a(l,{type:"text",modelValue:e.ruleForm.username,"onUpdate:modelValue":o[0]||(o[0]=r=>e.ruleForm.username=r),modelModifiers:{trim:!0},autocomplete:"off"},null,8,["modelValue"])]),_:1}),a(t,{label:"\u5BC6\u7801",prop:"password"},{default:d(()=>[a(l,{type:"password",modelValue:e.ruleForm.password,"onUpdate:modelValue":o[1]||(o[1]=r=>e.ruleForm.password=r),modelModifiers:{trim:!0},autocomplete:"off"},null,8,["modelValue"])]),_:1}),a(t,null,{default:d(()=>[G,a(w,{style:{width:"100%"},type:"primary",onClick:i.submitForm},{default:d(()=>[H]),_:1},8,["onClick"]),a(h,{modelValue:e.checked,"onUpdate:modelValue":o[2]||(o[2]=r=>e.checked=r),onChange:o[3]||(o[3]=r=>!e.checked)},{default:d(()=>[J]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["rules","model"])])])}var Y=S(E,[["render",K],["__scopeId","data-v-26084dc2"]]);export{Y as default};