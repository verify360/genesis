"use strict";(self.webpackChunkverify360_react=self.webpackChunkverify360_react||[]).push([[86],{49086:(e,a,t)=>{t.r(a),t.d(a,{default:()=>M});var o=t(72791),i=t(66934),l=t(12065),r=t(64554),d=t(30439),s=t(42419),n=t(41286),c=t(90503),m=t(53329),h=t(29823),u=t(5936),f=t(34265),p=t(61731),y=t(41973),g=t(94515),N=t(96846),x=t(43212),w=(t(16579),t(25180)),b=t(80184);const k=[{id:"9s41rp",firstName:"Kelvin",lastName:"Langosh",email:"Jerod14@hotmail.com",age:19,state:"Ohio"},{id:"08m6rx",firstName:"Molly",lastName:"Purdy",email:"Hugh.Dach79@hotmail.com",age:37,state:"Rhode Island"},{id:"5ymtrc",firstName:"Henry",lastName:"Lynch",email:"Camden.Macejkovic@yahoo.com",age:20,state:"California"},{id:"ek5b97",firstName:"Glenda",lastName:"Douglas",email:"Eric0@yahoo.com",age:38,state:"Montana"},{id:"xxtydd",firstName:"Leone",lastName:"Williamson",email:"Ericka_Mueller52@yahoo.com",age:19,state:"Colorado"},{id:"wzxj9m",firstName:"Mckenna",lastName:"Friesen",email:"Veda_Feeney@yahoo.com",age:34,state:"New York"},{id:"21dwtz",firstName:"Wyman",lastName:"Jast",email:"Melvin.Pacocha@yahoo.com",age:23,state:"Montana"},{id:"o8oe4k",firstName:"Janick",lastName:"Willms",email:"Delfina12@gmail.com",age:25,state:"Nebraska"}];function v(e){const{setRows:a,setRowModesModel:t}=e;return(0,b.jsxs)(f.D,{children:[(0,b.jsx)(d.Z,{color:"primary",startIcon:(0,b.jsx)(s.Z,{}),onClick:()=>{const e=Math.random();a((a=>[{id:e,firstName:"",lastName:"",email:"",age:"",state:""},...a])),t((a=>({[e]:{mode:u.se.Edit,fieldToFocus:"name"},...a})))},style:{float:"right"},children:"Add Employee"}),(0,b.jsx)(p.n,{})]})}function M(){const[e,a]=o.useState(k),[t,d]=o.useState({}),s=e=>()=>{d({...t,[e]:{mode:u.se.Edit}})},f=e=>()=>{d({...t,[e]:{mode:u.se.View}})},p=t=>()=>{a(e.filter((e=>e.id!==t)))},M=o=>()=>{d({...t,[o]:{mode:u.se.View,ignoreModifications:!0}});e.find((e=>e.id===o)).isNew&&a(e.filter((e=>e.id!==o)))},C=[{field:"firstName",headerName:"First Name",width:180,editable:!0},{field:"lastName",headerName:"Last Name",width:180,editable:!0},{field:"email",headerName:"Email",type:"email",width:180,editable:!0},{field:"age",headerName:"Age",type:"number",width:80,align:"left",headerAlign:"left",editable:!0},{field:"state",headerName:"State",width:220,editable:!0,type:"singleSelect",valueOptions:w.uX},{field:"actions",type:"actions",headerName:"Actions",width:100,cellClassName:"actions",getActions:e=>{var a;let{id:o}=e;return(null===(a=t[o])||void 0===a?void 0:a.mode)===u.se.Edit?[(0,b.jsx)(g.u,{icon:(0,b.jsx)(m.Z,{}),label:"Save",sx:{color:"primary.main"},onClick:f(o)}),(0,b.jsx)(g.u,{icon:(0,b.jsx)(h.default,{}),label:"Cancel",className:"textPrimary",onClick:M(o),color:"inherit"})]:[(0,b.jsx)(g.u,{icon:(0,b.jsx)(n.Z,{}),label:"Edit",className:"textPrimary",onClick:s(o),color:"inherit"}),(0,b.jsx)(g.u,{icon:(0,b.jsx)(c.Z,{}),label:"Delete",onClick:p(o),color:"inherit"})]}}];(0,i.ZP)(N._$)((e=>{let{theme:a}=e;return{["& .".concat(x._.main)]:{backgroundColor:"#e3f2fd"},["& .".concat(x._.columnHeader)]:{backgroundColor:"#a8d6f8"},["& .".concat(x._.columnHeaders)]:{backgroundColor:"#a8d6f8"},["& .".concat(x._.row,".even")]:{backgroundColor:"white","&:hover, &.Mui-hovered":{backgroundColor:"#e3f2fd","@media (hover: none)":{backgroundColor:a.palette.grey[500]}},"&.Mui-selected":{backgroundColor:(0,l.Fq)(a.palette.primary.main,.2+a.palette.action.selectedOpacity),"&:hover, &.Mui-hovered":{backgroundColor:(0,l.Fq)(a.palette.primary.main,.2+a.palette.action.selectedOpacity+a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(0,l.Fq)(a.palette.primary.main,.2+a.palette.action.selectedOpacity)}}}}}}));return(0,b.jsx)(r.Z,{sx:{width:"100%","& .actions":{color:"text.secondary"},"& .textPrimary":{color:"text.primary",fontSize:"10px"},"& .MuiDataGrid-cellContent":{color:"text.primary",fontSize:"10px"},"& .MuiDataGrid-columnHeaderTitle":{color:"text.primary",fontSize:"10px",fontWeight:"bold"},"& .MuiDataGrid-columnHeaders":{bgcolor:"#a8d6f8"}},children:(0,b.jsx)(N._$,{rows:e,columns:C,checkboxSelection:!0,disableRowSelectionOnClick:!0,editMode:"row",rowModesModel:t,onRowModesModelChange:e=>{d(e)},onRowEditStop:(e,a)=>{e.reason===y.U.rowFocusOut&&(a.defaultMuiPrevented=!0)},processRowUpdate:t=>{const o={...t,isNew:!1};return a(e.map((e=>e.id===t.id?o:e))),o},slots:{toolbar:v},slotProps:{toolbar:{setRows:a,setRowModesModel:d}},getRowClassName:e=>e.indexRelativeToCurrentPage%2===0?"even":"odd"})})}},90503:(e,a,t)=>{var o=t(64836);a.Z=void 0;var i=o(t(45649)),l=t(80184),r=(0,i.default)((0,l.jsx)("path",{d:"M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"}),"DeleteOutlined");a.Z=r}}]);
//# sourceMappingURL=86.817818ac.chunk.js.map