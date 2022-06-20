(self.webpackChunk=self.webpackChunk||[]).push([[6405],{6405:(t,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>o});const i={data:function(){return{isLoading:!0,boardingStatus:!1,groomingStatus:!1}},methods:{getStatus:function(){var t=this;axios.get("/admin/api/get-all-booking-statuses").then((function(t){return t.data})).then((function(s){"ok"==s.status&&(t.isLoading=!1,t.boardingStatus="true"==s.data.boarding_status,t.groomingStatus="true"==s.data.grooming_status)})).catch((function(t){console.error(t.response.data)}))},updateBoardingStatus:function(){var t=this;axios.post("/admin/api/update-boarding-status",{status:this.boardingStatus}).then((function(t){return t.data})).then((function(s){"ok"==s.status&&("service_online"==s.type?t.$toast.success(s.msg):t.$toast.error(s.msg))})).catch((function(t){console.error(t.response.data)}))},updateGroomingStatus:function(){var t=this;axios.post("/admin/api/update-grooming-status",{status:this.groomingStatus}).then((function(t){return t.data})).then((function(s){"ok"==s.status&&("service_online"==s.type?t.$toast.success(s.msg):t.$toast.error(s.msg))})).catch((function(t){console.error(t.response.data)}))}},mounted:function(){this.getStatus()}};const o=(0,a(1900).Z)(i,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"section"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[t.isLoading?a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("skeleton",{attrs:{width:"100%",height:"20px"}}),t._v(" "),a("skeleton",{attrs:{width:"100%",height:"20px"}})],1)]):a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 mb-4"},[a("div",{staticClass:"form-group"},[a("h6",[t._v("Boarding Bookings \n                                  "),t.boardingStatus?a("span",{staticClass:"text-success"},[a("small",[t._v("(online)")])]):a("span",{staticClass:"text-danger"},[a("small",[t._v("(ofline)")])])]),t._v(" "),a("label",{staticClass:"custom-switch mt-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.boardingStatus,expression:"boardingStatus"}],staticClass:"custom-switch-input",attrs:{type:"checkbox",name:"custom-switch-checkbox"},domProps:{checked:Array.isArray(t.boardingStatus)?t._i(t.boardingStatus,null)>-1:t.boardingStatus},on:{change:[function(s){var a=t.boardingStatus,i=s.target,o=!!i.checked;if(Array.isArray(a)){var n=t._i(a,null);i.checked?n<0&&(t.boardingStatus=a.concat([null])):n>-1&&(t.boardingStatus=a.slice(0,n).concat(a.slice(n+1)))}else t.boardingStatus=o},t.updateBoardingStatus]}}),t._v(" "),a("span",{staticClass:"custom-switch-indicator"}),t._v(" "),a("span",{staticClass:"custom-switch-description"},[t._v(t._s(1==t.boardingStatus?"Trun Off":"Trun On"))])])])]),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"col-12 mb-4"},[a("div",{staticClass:"form-group"},[a("h6",[t._v("Grooming Bookings \n                                  "),t.groomingStatus?a("span",{staticClass:"text-success"},[a("small",[t._v("(online)")])]):a("span",{staticClass:"text-danger"},[a("small",[t._v("(ofline)")])])]),t._v(" "),a("label",{staticClass:"custom-switch mt-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.groomingStatus,expression:"groomingStatus"}],staticClass:"custom-switch-input",attrs:{type:"checkbox",name:"custom-switch-checkbox"},domProps:{checked:Array.isArray(t.groomingStatus)?t._i(t.groomingStatus,null)>-1:t.groomingStatus},on:{change:[function(s){var a=t.groomingStatus,i=s.target,o=!!i.checked;if(Array.isArray(a)){var n=t._i(a,null);i.checked?n<0&&(t.groomingStatus=a.concat([null])):n>-1&&(t.groomingStatus=a.slice(0,n).concat(a.slice(n+1)))}else t.groomingStatus=o},t.updateGroomingStatus]}}),t._v(" "),a("span",{staticClass:"custom-switch-indicator"}),t._v(" "),a("span",{staticClass:"custom-switch-description"},[t._v(t._s(1==t.groomingStatus?"Trun Off":"Trun On"))])])])])])])])])])])}),[],!1,null,null,null).exports}}]);