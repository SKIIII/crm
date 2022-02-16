var P=Object.defineProperty,F=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var h=(t,a,e)=>a in t?P(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e,f=(t,a)=>{for(var e in a||(a={}))V.call(a,e)&&h(t,e,a[e]);if(g)for(var e of g(a))x.call(a,e)&&h(t,e,a[e]);return t},b=(t,a)=>F(t,N(a));import{_ as B}from"./index.8857c13e.js";import{u as E,$ as T,r as A,o as M,b as C,t as R,d as i,a6 as $,e as k,n as v,w as s,_ as w,g as y,j as n,a8 as j,h as S,i as q,k as u}from"./vendor.bcf7419b.js";const G={name:"Customer",setup(){const t=E(),a=T(null),e=A({loading:!1,tableData:[],multipleSelection:[],total:0,currentPage:1,pageSize:10});M(()=>{l()});const l=()=>{e.loading=!0,C.get("/mgr/customers",{params:{action:"list_customer",page:e.currentPage,limit:e.pageSize}}).then(o=>{e.tableData=o.list,e.total=o.totalCount,e.currentPage=o.currentPage,e.loading=!1})},m=o=>{e.multipleSelection=o},_=o=>{e.currentPage=o,l()},c=()=>{t.push({path:"/add_customer"})},r=o=>{t.push({path:"/add_customer",query:{id:o}})},d=()=>{if(!e.multipleSelection.length){w.error("\u8BF7\u9009\u62E9\u9879");return}C.put("/mgr/customers",{action:"del_customer",ids:e.multipleSelection.map(o=>o.id)}).then(()=>{w.success("\u5220\u9664\u6210\u529F"),l()})};return b(f({},R(e)),{multipleTable:a,handleSelectionChange:m,getGuestList:l,changePage:_,handleAdd:c,handleEdit:r,handleDel:d})}},I={class:"header"},L=u("\u6DFB\u52A0\u5BA2\u6237"),H=u("\u5220\u9664\u8D26\u6237"),J=u("\u7F16\u8F91");function K(t,a,e,l,m,_){const c=i("el-button"),r=i("el-table-column"),d=i("el-table"),o=i("el-pagination"),D=i("el-card"),z=$("loading");return k(),v(D,{class:"guest-container"},{header:s(()=>[y("div",I,[n(c,{type:"primary",size:"small",icon:"el-icon-plus",onClick:l.handleAdd},{default:s(()=>[L]),_:1},8,["onClick"]),n(c,{type:"danger",size:"small",icon:"el-icon-delete",onClick:l.handleDel},{default:s(()=>[H]),_:1},8,["onClick"])])]),default:s(()=>[j((k(),v(d,{ref:"multipleTable",data:t.tableData,"tooltip-effect":"dark",style:{width:"100%"},onSelectionChange:l.handleSelectionChange},{default:s(()=>[n(r,{type:"selection",width:"55"}),n(r,{prop:"name",label:"\u59D3\u540D"}),n(r,{prop:"phonenumber",label:"\u624B\u673A\u53F7"}),n(r,{prop:"address",label:"\u5730\u5740"}),S(` <el-table-column label="\u8EAB\u4EFD\u72B6\u6001">\r
				<template #default="scope">\r
					<span :style="scope.row.lockedFlag == 0 ? 'color: green;' : 'color: red;'">\r
						{{ scope.row.lockedFlag == 0 ? '\u6B63\u5E38' : '\u7981\u7528' }}\r
					</span>\r
				</template>\r
			</el-table-column>\r
			<el-table-column label="\u662F\u5426\u6CE8\u9500">\r
				<template #default="scope">\r
					<span :style="scope.row.lockedFlag == 0 ? 'color: green;' : 'color: red;'">\r
						{{ scope.row.isDeleted == 0 ? '\u6B63\u5E38' : '\u6CE8\u9500' }}\r
					</span>\r
				</template>\r
			</el-table-column> `),n(r,{label:"\u521B\u5EFA\u65F6\u95F4"},{default:s(p=>[y("span",null,q(t.$filters.FormatDate(p.row.create_time)),1)]),_:1}),n(r,{label:"\u64CD\u4F5C",width:"100"},{default:s(p=>[n(c,{size:"small",onClick:O=>l.handleEdit(p.row.id)},{default:s(()=>[J]),_:2},1032,["onClick"]),S(' <a style="cursor: pointer; margin-right: 10px" @confirm="handleEdit(scope.row)">\u7F16\u8F91</a> ')]),_:1})]),_:1},8,["data","onSelectionChange"])),[[z,t.loading]]),n(o,{background:"",layout:"prev, pager, next",total:t.total,"page-size":t.pageSize,"current-page":t.currentPage,onCurrentChange:l.changePage},null,8,["total","page-size","current-page","onCurrentChange"])]),_:1})}var X=B(G,[["render",K],["__scopeId","data-v-699cf318"]]);export{X as default};
