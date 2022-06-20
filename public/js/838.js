(self.webpackChunk=self.webpackChunk||[]).push([[838],{6838:(t,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>e});const n={data:function(){return{is_loading:!0,groomings:[],paginateData:{},moment}},created:function(){this.getGroomingData()},methods:{getGroomingData:function(){var t=this,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.is_loading=!0;var a=$('input[name="radio1"]:checked').val();axios.get("/admin/api/get-pending-grooming-booking?page="+s,{params:{type:a}}).then((function(t){return t.data})).then((function(s){t.groomings=s.data,t.paginateData=s,t.is_loading=!1})).catch((function(t){t.response.data}))},appointmentStatus:function(t,s,a,n){var e=this;$(n.target).find("span").show(),$(n.target).attr("disabled",!0),axios.post("/admin/api/change-grooming-status",{id:s,status:t}).then((function(t){return t.data})).then((function(t){"ok"==t.status&&(swal.fire("Success",t.msg,"success"),e.groomings.splice(a,1),$(n.target).find("span").hide(),$(n.target).attr("disabled",!1))})).catch((function(t){console.error(t.response.data)}))}}};const e=(0,a(1900).Z)(n,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row mt-4"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"card"},[t._m(0),t._v(" "),a("div",{staticClass:"card-body"},[a("div",{staticClass:"row"},[t.is_loading?a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"section"},t._l(10,(function(t,s){return a("skeleton",{key:s,staticClass:"mt-2",attrs:{width:"100%",height:"40px"}})})),1)]):t._e(),t._v(" "),!t.is_loading&&t.groomings.length>0?a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-hover table-striped"},[t._m(1),t._v(" "),a("tbody",t._l(t.groomings,(function(s,n){return a("tr",{key:n},[a("td",[a("strong",[t._v(t._s(s.id))])]),t._v(" "),a("td",[a("b",{staticClass:"text-muted"},[t._v(t._s(s.customer.first_name+" "+s.customer.last_name))])]),t._v(" "),a("td",[a("ul",{staticClass:"text-success"},t._l(s.pets,(function(s,n){return a("li",{key:n},[t._v(t._s(s.name+" - "+s.color))])})),0)]),t._v(" "),a("td",[t._v(t._s(s.price||0)+" USD")]),t._v(" "),a("td",[t._v(t._s(t.moment(s.appointment_date).format("MMMM Do YYYY, h:mm:ss a")))]),t._v(" "),a("td",[t._v(t._s(t.moment(s.end_time).format("MMMM Do YYYY, h:mm a")))]),t._v(" "),a("td",[t._v(t._s(t.moment(s.created_at).format("Do MMM YYYY h:mm a")))]),t._v(" "),a("td",["ongoing"==s.status?a("span",{staticClass:"badge badge-pill badge-warning"},[t._v("On Going")]):"completed"==s.status?a("span",{staticClass:"badge badge-pill badge-success"},[t._v("Completed")]):t._e(),t._v(" "),"canceled"==s.status?a("span",{staticClass:"badge badge-pill badge-danger"},[t._v("Canceled")]):t._e(),t._v(" "),"pending"==s.status?a("span",{staticClass:"badge badge-pill badge-warning"},[t._v("Pending")]):t._e()]),t._v(" "),a("td",["ongoing"==s.status?a("button",{staticClass:"btn btn-sm btn-success",on:{click:function(a){return t.appointmentStatus("finish",s.id,n,a)}}},[a("span",{staticClass:"spinner-border spinner-border-sm",staticStyle:{display:"none"},attrs:{role:"status","aria-hidden":"true"}}),t._v("\n                                                Finish")]):t._e(),t._v(" "),a("router-link",{staticClass:"btn btn-sm btn-primary",attrs:{to:{name:"grooming.edit",params:{id:s.id}}}},[t._v("View")]),t._v(" "),"pending"==s.status?a("button",{staticClass:"btn btn-sm btn-success",on:{click:function(a){return t.appointmentStatus("ongoing",s.id,n,a)}}},[a("span",{staticClass:"spinner-border spinner-border-sm",staticStyle:{display:"none"},attrs:{role:"status","aria-hidden":"true"}}),t._v("\n                                                Approve")]):t._e(),t._v(" "),"ongoing"==s.status||"pending"==s.status?a("button",{staticClass:"btn btn-danger btn-sm",on:{click:function(a){return t.appointmentStatus("cancel",s.id,n,a)}}},[a("span",{staticClass:"spinner-border spinner-border-sm",staticStyle:{display:"none"},attrs:{role:"status","aria-hidden":"true"}}),t._v("\n                                             Cancel")]):t._e()],1)])})),0)])])]):t._e(),t._v(" "),a("div",{staticClass:"col-md-12 mt-3"},[a("div",{staticClass:"row justify-content-center"},[a("pagination",{attrs:{data:t.paginateData},on:{"pagination-change-page":t.getGroomingData}})],1)]),t._v(" "),t.is_loading||0!=t.groomings.length?t._e():a("div",{staticClass:"col-md-12"},[a("h5",{staticClass:"text-center text-danger"},[t._v("No Booking Records")])])])])])])])}),[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"card-header"},[a("h4",[t._v("Grooming - Pending List")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("thead",[a("tr",[a("th",[t._v("Booking ID")]),t._v(" "),a("th",[t._v("Customer Name")]),t._v(" "),a("th",[t._v("Pets")]),t._v(" "),a("th",[t._v("Price")]),t._v(" "),a("th",[t._v("Appointment Date & Time")]),t._v(" "),a("th",[t._v("End Time")]),t._v(" "),a("th",[t._v("Booking Created At")]),t._v(" "),a("th",[t._v("Status")]),t._v(" "),a("th",[t._v("Action")])])])}],!1,null,null,null).exports}}]);