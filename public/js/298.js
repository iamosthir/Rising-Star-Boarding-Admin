(self.webpackChunk=self.webpackChunk||[]).push([[298],{9298:(t,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>n});const e={data:function(){return{is_loading:!0,groomings:[],paginateData:{},moment}},created:function(){this.getGroomingData()},methods:{getGroomingData:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.is_loading=!0;var s=$('input[name="radio1"]:checked').val();axios.get("/admin/api/get-all-grooming-booking?page="+a,{params:{type:s}}).then((function(t){return t.data})).then((function(a){t.groomings=a.data,t.paginateData=a,t.is_loading=!1})).catch((function(t){t.response.data}))},appointmentStatus:function(t,a,s){var e=this;axios.post("/admin/api/change-grooming-status",{id:a,status:t}).then((function(t){return t.data})).then((function(t){"ok"==t.status&&(swal.fire("Success",t.msg,"success"),e.groomings.splice(s,1))})).catch((function(t){console.error(t.response.data)}))}}};const n=(0,s(1900).Z)(e,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"row mt-4"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"card"},[t._m(0),t._v(" "),s("div",{staticClass:"card-body"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-8 col-md-6 col-12"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"form-label"},[t._v("Filter By")]),t._v(" "),s("div",{staticClass:"selectgroup w-100"},[s("label",{staticClass:"selectgroup-item"},[s("input",{staticClass:"selectgroup-input-radio",attrs:{type:"radio",name:"radio1",value:"ongoing",checked:""},on:{change:t.getGroomingData}}),t._v(" "),s("span",{staticClass:"selectgroup-button"},[t._v("On Going")])]),t._v(" "),s("label",{staticClass:"selectgroup-item"},[s("input",{staticClass:"selectgroup-input-radio",attrs:{type:"radio",name:"radio1",value:"canceled"},on:{change:t.getGroomingData}}),t._v(" "),s("span",{staticClass:"selectgroup-button"},[t._v("Canceled")])]),t._v(" "),s("label",{staticClass:"selectgroup-item"},[s("input",{staticClass:"selectgroup-input-radio",attrs:{type:"radio",name:"radio1",value:"completed"},on:{change:t.getGroomingData}}),t._v(" "),s("span",{staticClass:"selectgroup-button"},[t._v("Completed")])])])])]),t._v(" "),t.is_loading?s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"section"},t._l(10,(function(t,a){return s("skeleton",{key:a,staticClass:"mt-2",attrs:{width:"100%",height:"40px"}})})),1)]):t._e(),t._v(" "),!t.is_loading&&t.groomings.length>0?s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table table-hover table-striped"},[t._m(1),t._v(" "),s("tbody",t._l(t.groomings,(function(a,e){return s("tr",{key:e},[s("td",[s("strong",[t._v(t._s(a.id))])]),t._v(" "),s("td",[s("b",{staticClass:"text-muted"},[t._v(t._s(a.customer.first_name+" "+a.customer.last_name))])]),t._v(" "),s("td",[s("ul",{staticClass:"text-success"},t._l(a.pets,(function(a,e){return s("li",{key:e},[t._v(t._s(a.name+" - "+a.color))])})),0)]),t._v(" "),s("td",[t._v(t._s(a.price)+" USD")]),t._v(" "),s("td",[t._v(t._s(t.moment(a.appointment_date).format("MMMM Do YYYY, h:mm:ss a")))]),t._v(" "),s("td",[t._v(t._s(t.moment(a.end_time).format("MMMM Do YYYY, h:mm:ss a")))]),t._v(" "),s("td",["ongoing"==a.status?s("span",{staticClass:"badge badge-pill badge-warning"},[t._v("On Going")]):"completed"==a.status?s("span",{staticClass:"badge badge-pill badge-success"},[t._v("Completed")]):t._e(),t._v(" "),"canceled"==a.status?s("span",{staticClass:"badge badge-pill badge-danger"},[t._v("Canceled")]):t._e()]),t._v(" "),s("td",["ongoing"==a.status?s("button",{staticClass:"btn btn-sm btn-success",on:{click:function(s){return t.appointmentStatus("finish",a.id,e)}}},[t._v("Finish")]):t._e(),t._v(" "),"ongoing"==a.status?s("button",{staticClass:"btn btn-danger btn-sm",on:{click:function(s){return t.appointmentStatus("cancel",a.id,e)}}},[t._v("Cancel")]):t._e()])])})),0)])])]):t._e(),t._v(" "),s("div",{staticClass:"col-md-12 mt-3"},[s("div",{staticClass:"row justify-content-center"},[s("pagination",{attrs:{data:t.paginateData},on:{"pagination-change-page":t.getGroomingData}})],1)]),t._v(" "),t.is_loading||0!=t.groomings.length?t._e():s("div",{staticClass:"col-md-12"},[s("h5",{staticClass:"text-center text-danger"},[t._v("No Booking Records")])])])])])])])}),[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"card-header"},[s("h4",[t._v("Grooming - List View")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("thead",[s("tr",[s("th",[t._v("Booking ID")]),t._v(" "),s("th",[t._v("Customer Name")]),t._v(" "),s("th",[t._v("Pets")]),t._v(" "),s("th",[t._v("Price")]),t._v(" "),s("th",[t._v("Appointment Date & Time")]),t._v(" "),s("th",[t._v("End Time")]),t._v(" "),s("th",[t._v("Status")]),t._v(" "),s("th",[t._v("Action")])])])}],!1,null,null,null).exports}}]);