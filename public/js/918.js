(self.webpackChunk=self.webpackChunk||[]).push([[918],{1918:(t,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>r});const e={data:function(){return{is_loading:!0,boardingData:{}}},methods:{getBoardingData:function(){var t=this;axios.get("/admin/api/get-utils-boarding").then((function(t){return t.data})).then((function(a){t.boardingData=a,t.is_loading=!1})).catch((function(t){console.error(t.response.data)}))}},created:function(){this.getBoardingData()}};const r=(0,s(1900).Z)(e,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"section mt-5"},[t.is_loading?s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("skeleton",{staticClass:"shadow",attrs:{width:"100%",height:"400px"}})],1)]):t._e(),t._v(" "),t.is_loading?t._e():s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"card"},[t._m(0),t._v(" "),s("div",{staticClass:"card-body"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[t._m(1),t._v(" "),s("table",{staticClass:"table mt-4"},[t._m(2),t._v(" "),t.boardingData.arrivalPets.length>0?s("tbody",t._l(t.boardingData.arrivalPets,(function(a,e){return s("tr",{key:e},[s("td",[a.photo?s("img",{staticClass:"pet-round-thumb",attrs:{src:"/uploads/customer/"+a.customer_id+"/"+a.photo,alt:""}}):s("img",{staticClass:"pet-round-thumb",attrs:{src:"/images/dog-placeholder-tall.svg",alt:""}})]),t._v(" "),s("td",[s("strong",[t._v(t._s(a.name))])]),t._v(" "),s("td",[t._v(t._s(a.customer.first_name+" "+a.customer.last_name))])])})),0):s("tbody",[t._m(3)])])]),t._v(" "),s("div",{staticClass:"col-md-6"},[t._m(4),t._v(" "),s("table",{staticClass:"table mt-4"},[t._m(5),t._v(" "),t.boardingData.leavingPets.length>0?s("tbody",t._l(t.boardingData.leavingPets,(function(a,e){return s("tr",{key:e},[s("td",[a.photo?s("img",{staticClass:"pet-round-thumb",attrs:{src:"/uploads/customer/"+a.customer_id+"/"+a.photo,alt:""}}):s("img",{staticClass:"pet-round-thumb",attrs:{src:"/images/dog-placeholder-tall.svg",alt:""}})]),t._v(" "),s("td",[s("strong",[t._v(t._s(a.name))])]),t._v(" "),s("td",[t._v(t._s(a.customer.first_name+" "+a.customer.last_name))])])})),0):s("tbody",[t._m(6)])])])])])])])])])}),[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"card-header"},[s("h4",[t._v("Boardings")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("h6",{staticClass:"text-muted"},[s("strong",[t._v("Dogs Arrived Today")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("thead",{staticStyle:{"background-color":"lightblue"}},[s("tr",[s("th",[t._v("#")]),t._v(" "),s("th",[t._v("Pet Name")]),t._v(" "),s("th",[t._v("Owner")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("tr",[s("td",{staticClass:"text-center text-danger",attrs:{colspan:"3"}},[t._v("No records found")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("h6",{staticClass:"text-warning"},[s("strong",[t._v("Dogs Leaving Today")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("thead",{staticStyle:{"background-color":"antiquewhite"}},[s("tr",[s("th",[t._v("#")]),t._v(" "),s("th",[t._v("Pet Name")]),t._v(" "),s("th",[t._v("Owner")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("tr",[s("td",{staticClass:"text-center text-danger",attrs:{colspan:"3"}},[t._v("No records found")])])}],!1,null,null,null).exports}}]);