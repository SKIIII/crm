var $=Object.defineProperty,k=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var y=(e,o,s)=>o in e?$(e,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[o]=s,h=(e,o)=>{for(var s in o||(o={}))A.call(o,s)&&y(e,s,o[s]);if(b)for(var s of b(o))C.call(o,s)&&y(e,s,o[s]);return e},v=(e,o)=>k(e,w(o));import{_ as R,b as O}from"./index.8857c13e.js";import{a2 as q,$ as B,a3 as U,u as I,r as M,o as N,b as g,a4 as j,t as D,d as n,e as E,f as G,j as u,w as a,_ as S,k as c,i as l}from"./vendor.bcf7419b.js";const T={name:"AddOrder",setup(){q();const e=B(null),o=U(),s=I(),{id:m,product_id:i}=o.query,t=M({token:O("token")||"",id:m,productForm:{name:"",spec:"",image:"",customer:"",price:"",num:"",money:"",product_id:"",customer_id:""},rules:{price:[{required:"true",message:"\u8BF7\u586B\u5199\u4EA7\u54C1\u540D\u79F0",trigger:["change"]}],num:[{required:"true",message:"\u8BF7\u586B\u5199\u5C3A\u5BF8\u89C4\u683C",trigger:["change"]}]}});N(()=>{i&&g.post("/mgr/products",{action:"get_product",id:i}).then(d=>{const{product:r}=d;t.productForm={product_id:i,name:r.name,spec:r.spec,image:r.image,price:r.price,sn:r.sn,customer_id:r.customer,customer:r.customer__r},console.log(t.productForm)}),m&&g.post("/mgr/products",{action:"get_product",id:m}).then(d=>{const{product:r}=d;t.productForm={id:m,name:r.name,spec:r.spec,image:r.image,price:r.price,customer_id:r.customer},t.customer_id=r.customer,t.defaultCate=`${r.customer}`,console.log(t.productForm)})}),j(()=>{});const F=()=>{e.value.validate(d=>{if(d){let r=g.post,_="add_order",p={customer_id:t.productForm.customer_id,product_id:t.productForm.product_id,price:t.productForm.price,num:t.productForm.num,money:t.productForm.num*t.productForm.price};console.log("params",p),m&&(p.id=m,_="modify_order",r=g.put),r("/mgr/orders",{action:_,data:p}).then(()=>{S.success(m?"\u4FEE\u6539\u6210\u529F":"\u6DFB\u52A0\u6210\u529F"),s.push({path:"/order"})})}})};return v(h({},D(t)),{productRef:e,submitAdd:F})}},z={class:"add"};function H(e,o,s,m,i,t){const F=n("el-image"),d=n("el-form-item"),r=n("el-input"),_=n("el-button"),p=n("el-form"),V=n("el-card");return E(),G("div",z,[u(V,{class:"add-container"},{default:a(()=>[u(p,{model:e.productForm,rules:e.rules,ref:"productRef","label-width":"100px",class:"goodForm"},{default:a(()=>[u(d,{label:"\u4EA7\u54C1\u56FE\u7247"},{default:a(()=>[u(F,{style:{width:"100px",height:"100px"},src:e.$filters.prefix(e.productForm.image),fit:"cover"},null,8,["src"])]),_:1}),u(d,{label:"\u5BA2\u6237\u540D\u79F0"},{default:a(()=>[c(l(e.productForm.customer.name),1)]),_:1}),u(d,{label:"\u4EA7\u54C1\u540D\u79F0"},{default:a(()=>[c(l(e.productForm.name),1)]),_:1}),u(d,{label:"\u5C3A\u5BF8\u89C4\u683C"},{default:a(()=>[c(l(e.productForm.spec),1)]),_:1}),u(d,{label:"\u4EA7\u54C1\u4EF7\u683C",prop:"price"},{default:a(()=>[u(r,{type:"number",min:"0",style:{width:"200px"},modelValue:e.productForm.price,"onUpdate:modelValue":o[0]||(o[0]=f=>e.productForm.price=f),placeholder:"\u8BF7\u8F93\u5165\u4EA7\u54C1\u4EF7\u683C"},null,8,["modelValue"])]),_:1}),u(d,{label:"\u6570\u91CF",prop:"num"},{default:a(()=>[u(r,{type:"number",min:"0",style:{width:"200px"},modelValue:e.productForm.num,"onUpdate:modelValue":o[1]||(o[1]=f=>e.productForm.num=f),placeholder:"\u8BF7\u8F93\u5165\u6570\u91CF"},null,8,["modelValue"])]),_:1}),u(d,{label:"\u603B\u4EF7",prop:"money"},{default:a(()=>[c(l(e.$filters.numFilter(e.productForm.price*e.productForm.num)),1)]),_:1}),u(d,null,{default:a(()=>[u(_,{type:"primary",onClick:o[2]||(o[2]=f=>m.submitAdd())},{default:a(()=>[c(l(e.id?"\u7ACB\u5373\u4FEE\u6539":"\u7ACB\u5373\u521B\u5EFA"),1)]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1})])}var P=R(T,[["render",H],["__scopeId","data-v-14638ee7"]]);export{P as default};
