(self.webpackChunk=self.webpackChunk||[]).push([[2704],{2704:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>r});const a={data:function(){return{is_loading:!0,pets:[],paginateData:{},searchText:"",searchMode:!1,petsSearch:[]}},created:function(){this.getPetList()},methods:{getPetList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.is_loading=!0,axios.get("/admin/api/get-pet-list?page="+e).then((function(t){return t.data})).then((function(e){t.paginateData=e,t.pets=e.data,t.is_loading=!1})).catch((function(t){console.error(t.response.data)}))},searchPet:function(){var t=this;""!=this.searchText?(this.is_loading=!0,this.searchMode=!0):(this.is_loading=!1,this.searchMode=!1),axios.get("/admin/api/search-pet-from-list",{params:{searchText:this.searchText}}).then((function(t){return t.data})).then((function(e){t.petsSearch=e,t.is_loading=!1})).catch((function(t){console.error(t.response.data)}))},deletePet:function(t,e,s){var a=this;swal.fire({title:"Are you sure?",text:"Once deleted can't be restored",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(r){r.isConfirmed&&axios.post("/admin/api/delete-pet",{petId:e}).then((function(t){return t.data})).then((function(e){"ok"==e.status&&(swal.fire("Success",e.msg,"success"),"search"==s?a.petsSearch.splice(t,1):"normal"==s&&a.pets.splice(t,1))})).catch((function(t){console.error(t.response.data)}))}))}}};const r=(0,s(1900).Z)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"section"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[s("h6",[s("span",{staticClass:"text-success"},[t._v(t._s(t.pets.length))]),t._v("All Pets")])]),t._v(" "),s("div",{staticClass:"card-body"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("label",{attrs:{for:""}},[t._v("Search Customer")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],staticClass:"form-control",attrs:{type:"search",placeholder:"Search pets by name, or Customer email, phone or any ID"},domProps:{value:t.searchText},on:{input:[function(e){e.target.composing||(t.searchText=e.target.value)},t.searchPet]}})]),t._v(" "),s("div",{staticClass:"col-md-12 mt-3"},[t.is_loading?s("div",{staticClass:"section"},t._l(10,(function(t,e){return s("skeleton",{key:e,staticClass:"mt-2",attrs:{width:"100%",height:"40px"}})})),1):t._e(),t._v(" "),t.searchMode?t._e():s("div",[!t.is_loading&&t.pets.length>0?s("div",{staticClass:"table-responsive-md"},[s("table",{staticClass:"table table-hover table-striped"},[t._m(0),t._v(" "),s("tbody",[0==t.pets.length?s("tr",[s("td",{staticClass:"text-center text-danger",attrs:{colspan:"8"}},[t._v("No records found")])]):t._l(t.pets,(function(e,a){return s("tr",{key:a},[s("td",[null!=e.photo?s("img",{staticClass:"pet-round-thumb",attrs:{src:"/uploads/customer/"+e.customer_id+"/"+e.photo,alt:""}}):s("img",{staticClass:"pet-round-thumb",attrs:{src:"/images/dog-placeholder-tall.svg",alt:""}})]),t._v(" "),s("td",[t._v(t._s(e.name))]),t._v(" "),s("td",[t._v(t._s(e.customer.first_name+" "+e.customer.last_name))]),t._v(" "),s("td",[t._v(t._s(e.color))]),t._v(" "),s("td",[t._v(t._s(e.breed))]),t._v(" "),s("td",[t._v(t._s(e.age))]),t._v(" "),s("td",[t._v(t._s(e.gender))]),t._v(" "),s("td",[t._v(t._s(e.rabies||"N/A"))]),t._v(" "),s("td",[e.vac_record?s("span",{staticClass:"text-muted"},[t._v("Yes "),s("i",{staticClass:"fas fa-check text-success"}),t._v(" "),s("a",{staticClass:"ml-3",attrs:{href:"/uploads/customer/"+e.customer_id+"/"+e.vac_record,target:"_blank",title:"Download"}},[s("i",{staticClass:"fas fa-download"})])]):s("span",{staticClass:"text-muted"},[t._v("No "),s("i",{staticClass:"fas fa-times text-danger"})])]),t._v(" "),s("td",[s("button",{staticClass:"btn btn-sm btn-danger",on:{click:function(s){return t.deletePet(a,e.id,"normal")}}},[s("i",{staticClass:"fas fa-trash"})]),t._v(" "),s("button",{staticClass:"btn btn-sm btn-primary",attrs:{title:"View/Edit"},on:{click:function(s){return t.$router.push({name:"pets.profile",params:{petId:e.id}})}}},[s("i",{staticClass:"fas fa-eye"})])])])}))],2)])]):t._e(),t._v(" "),s("div",{staticClass:"row justify-content-center mt-4"},[s("pagination",{attrs:{data:t.paginateData},on:{"pagination-change-page":t.getPetList}})],1)]),t._v(" "),t.searchMode?s("div",[s("p",{staticClass:"text-muted"},[t._v("Search result")]),t._v(" "),!t.is_loading&&t.petsSearch.length>0?s("div",{staticClass:"table-responsive-md"},[s("table",{staticClass:"table table-hover table-striped"},[t._m(1),t._v(" "),s("tbody",[0==t.pets.length?s("tr",[s("td",{staticClass:"text-center text-danger",attrs:{colspan:"8"}},[t._v("No records found")])]):t._l(t.petsSearch,(function(e,a){return s("tr",{key:a},[s("td",[e.photo?s("img",{staticClass:"pet-round-thumb",attrs:{src:"/uploads/customer/"+e.customer_id+"/"+e.photo,alt:""}}):s("img",{staticClass:"pet-round-thumb",attrs:{src:"/images/dog-placeholder-tall.svg",alt:""}})]),t._v(" "),s("td",[t._v(t._s(e.name))]),t._v(" "),s("td",[t._v(t._s(e.customer.first_name+" "+e.customer.last_name))]),t._v(" "),s("td",[t._v(t._s(e.color))]),t._v(" "),s("td",[t._v(t._s(e.breed))]),t._v(" "),s("td",[t._v(t._s(e.age))]),t._v(" "),s("td",[t._v(t._s(e.gender))]),t._v(" "),s("td",[t._v(t._s(e.rabies||"N/A"))]),t._v(" "),s("td",[e.vac_record?s("span",{staticClass:"text-muted"},[t._v("Yes "),s("i",{staticClass:"fas fa-check text-success"}),t._v(" "),s("a",{staticClass:"ml-3",attrs:{href:"/uploads/customer/"+e.customer_id+"/"+e.vac_record,target:"_blank",title:"Download"}},[s("i",{staticClass:"fas fa-download"})])]):s("span",{staticClass:"text-muted"},[t._v("No "),s("i",{staticClass:"fas fa-times text-danger"})])]),t._v(" "),s("td",[s("button",{staticClass:"btn btn-sm btn-danger",on:{click:function(s){return t.deletePet(a,e.id,"search")}}},[s("i",{staticClass:"fas fa-trash"})]),t._v(" "),s("button",{staticClass:"btn btn-sm btn-primary",attrs:{title:"View/Edit"},on:{click:function(s){return t.$router.push({name:"pets.profile",params:{petId:e.id}})}}},[s("i",{staticClass:"fas fa-eye"})])])])}))],2)])]):s("div",{staticClass:"text-center"},[s("h4",{staticClass:"text-danger"},[t._v("No results found")])])]):t._e()])])])])])])])}),[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",[t._v("#")]),t._v(" "),s("th",[t._v("Pet Name")]),t._v(" "),s("th",[t._v("Owner Name")]),t._v(" "),s("th",[t._v("Color")]),t._v(" "),s("th",[t._v("Breed")]),t._v(" "),s("th",[t._v("Age")]),t._v(" "),s("th",[t._v("Gender")]),t._v(" "),s("th",[t._v("Rabies Exp. Date")]),t._v(" "),s("th",[t._v("Vaccine Record")]),t._v(" "),s("th",[t._v("Action")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",[t._v("#")]),t._v(" "),s("th",[t._v("Pet Name")]),t._v(" "),s("th",[t._v("Owner Name")]),t._v(" "),s("th",[t._v("Color")]),t._v(" "),s("th",[t._v("Breed")]),t._v(" "),s("th",[t._v("Age")]),t._v(" "),s("th",[t._v("Gender")]),t._v(" "),s("th",[t._v("Rabies Exp. Date")]),t._v(" "),s("th",[t._v("Vaccine Record")]),t._v(" "),s("th",[t._v("Action")])])])}],!1,null,null,null).exports}}]);