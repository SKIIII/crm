var $=Object.defineProperty,N=Object.defineProperties;var V=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var k=(t,a,e)=>a in t?$(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e,S=(t,a)=>{for(var e in a||(a={}))B.call(a,e)&&k(t,e,a[e]);if(y)for(var e of y(a))T.call(a,e)&&k(t,e,a[e]);return t},D=(t,a)=>N(t,V(a));import{_ as q}from"./index.8857c13e.js";import{$ as A,u as E,r as G,o as M,b as m,t as O,d,a6 as R,e as f,n as b,w as s,_ as w,g as x,j as l,a8 as j,h as z,i as F,k as u}from"./vendor.bcf7419b.js";const I={name:"Good",setup(){const t=A(null),a=E(),e=G({loading:!1,tableData:[],multipleSelection:[],total:0,currentPage:1,pageSize:10});M(()=>{n()});const n=()=>{e.loading=!0,m.get("/mgr/products",{params:{action:"list_product",page:e.currentPage,limit:e.pageSize}}).then(o=>{e.tableData=o.list,e.total=o.totalCount,e.currentPage=o.currentPage,e.loading=!1})},C=()=>{a.push({path:"/add_product"})},v=o=>{a.push({path:"/add_product",query:{id:o}})},c=o=>{e.multipleSelection=o},i=o=>{e.currentPage=o,n()},_=(o,p)=>{m.post("/mgr/products",{action:"del_product",ids:o?[o]:[]}).then(()=>{w.success("\u5220\u9664\u6210\u529F"),n()})},g=(o,p)=>{if(!e.multipleSelection.length){w.error("\u8BF7\u9009\u62E9\u9879");return}m.post("/mgr/products",{action:"del_product",ids:e.multipleSelection.map(r=>r.id)}).then(()=>{w.success("\u5220\u9664\u6210\u529F"),n()})},h=(o,p)=>{a.push({path:"/add_order",query:{product_id:o}})};return D(S({},O(e)),{multipleTable:t,handleSelectionChange:c,handleAdd:C,handleEdit:v,getGoodList:n,changePage:i,handleDel:_,handleDels:g,handleOrder:h})}},L={class:"header"},H=u("\u65B0\u589E\u4EA7\u54C1"),J=u("\u5220\u9664\u4EA7\u54C1"),K=u("\u7F16\u8F91"),Q=u("\u4E0B\u5355");function U(t,a,e,n,C,v){const c=d("el-button"),i=d("el-table-column"),_=d("el-image"),g=d("el-table"),h=d("el-pagination"),o=d("el-card"),p=R("loading");return f(),b(o,{class:"good-container"},{header:s(()=>[x("div",L,[l(c,{type:"primary",size:"small",icon:"el-icon-plus",onClick:n.handleAdd},{default:s(()=>[H]),_:1},8,["onClick"]),l(c,{type:"danger",size:"small",icon:"el-icon-delete",onClick:n.handleDels},{default:s(()=>[J]),_:1},8,["onClick"])])]),default:s(()=>[j((f(),b(g,{ref:"multipleTable",data:t.tableData,"tooltip-effect":"dark",style:{width:"100%"},onSelectionChange:n.handleSelectionChange},{default:s(()=>[l(i,{type:"selection",width:"55"}),l(i,{prop:"id",label:"\u7F16\u53F7"}),l(i,{prop:"customer__name",label:"\u5BA2\u6237"}),l(i,{label:"\u4EA7\u54C1\u56FE\u7247",width:"150px"},{default:s(r=>[(f(),b(_,{style:{width:"100px",height:"100px"},key:r.row.id,src:t.$filters.prefix(r.row.image),fit:"cover","preview-src-list":[t.$filters.prefix(r.row.image)],"initial-index":r.row.id},null,8,["src","preview-src-list","initial-index"])),z(` 	<img style="width: 100px; height: 100px;" :key="scope.row.id"\r
						:src="$filters.prefix(scope.row.image)" alt=""> `)]),_:1}),l(i,{prop:"name",label:"\u4EA7\u54C1\u540D"}),l(i,{prop:"spec",label:"\u5C3A\u5BF8\u89C4\u683C"}),l(i,{prop:"price",label:"\u4EA7\u54C1\u4EF7\u683C"}),l(i,{label:"\u66F4\u65B0\u65F6\u95F4",width:"100"},{default:s(r=>[x("span",null,F(t.$filters.FormatDate(r.row.update_time)),1)]),_:1}),l(i,{label:"\u64CD\u4F5C",width:"180"},{default:s(r=>[l(c,{size:"small",onClick:P=>n.handleEdit(r.row.id)},{default:s(()=>[K]),_:2},1032,["onClick"]),l(c,{size:"small",type:"success",onClick:P=>n.handleOrder(r.row.id)},{default:s(()=>[Q]),_:2},1032,["onClick"]),z(' <el-button size="small" type="danger" @click="handleDel(scope.row.id, 1)">\u5220\u9664</el-button> ')]),_:1})]),_:1},8,["data","onSelectionChange"])),[[p,t.loading]]),l(h,{background:"",layout:"prev, pager, next",total:t.total,"page-size":t.pageSize,"current-page":t.currentPage,onCurrentChange:n.changePage},null,8,["total","page-size","current-page","onCurrentChange"])]),_:1})}var Z=q(I,[["render",U],["__scopeId","data-v-35171425"]]);export{Z as default};