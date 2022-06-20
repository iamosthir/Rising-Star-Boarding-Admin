(self.webpackChunk=self.webpackChunk||[]).push([[140],{8140:(t,a,e)=>{"use strict";e.r(a),e.d(a,{default:()=>s});const n={data:function(){return{boarding:{},moment,is_loading:!0,checkOut:new Form({date:"",checkOutForm:!1,bookingId:this.$route.params.id}),kennelData:new Form({boardingId:this.$route.params.id,price:"",assignedKennels:[]}),kennelError:!1,priceError:!1,kennels:[],emailError:!1,emailErrorText:""}},methods:{getBoardingData:function(){var t=this;axios.get("/admin/api/get-boarding-data",{params:{bookingId:this.$route.params.id}}).then((function(t){return t.data})).then((function(a){"ok"==a.status?(t.boarding=a.main_data,t.boarding.pet_data.forEach((function(a,e){t.kennelData.assignedKennels.push({boardingPetId:a.id,kennel_id:""})})),t.is_loading=!1):t.$router.go(-1)})).catch((function(a){console.error(a.response.data),t.$router.go(-1)}))},printData:function(t,a){window.open("/admin/api/print-pet-info?petId="+a+"&bookingId="+t).focus()},changeStatus:function(t,a,e){var n=this;axios.post("/admin/api/change-boarding-status",{bookingId:t,status:a}).then((function(t){return t.data})).then((function(t){"ok"==t.status&&(swal.fire("success",t.msg,"success"),n.boarding.booking_data.status=t.action)})).catch((function(t){console.error(t.response.data)}))},checkIn:function(){var t=this;axios.post("/admin/api/boarding-check-in",{bookingId:this.$route.params.id}).then((function(t){return t.data})).then((function(a){"ok"==a.status&&(t.boarding.booking_data.checkIn=a.checkIn)})).catch((function(t){console.error(t.response.data)}))},checkOutData:function(){var t=this;this.checkOut.post("/admin/api/boarding-check-out").then((function(t){return t.data})).then((function(a){"ok"==a.status&&(t.checkOut.reset(),t.checkOut.checkOutForm=!1,t.boarding.booking_data.checkOut=a.checkOut)})).catch((function(t){console.error(t.response.data)}))},approveBoarding:function(){var t=this;this.kennelData.assignedKennels.forEach((function(a,e){""==a.kennel_id?t.kennelError=!0:t.kennelError=!1})),""==this.kennelData.price?this.priceError=!0:this.priceError=!1,this.kennelError||this.priceError||this.kennelData.post("/admin/api/approve-boarding").then((function(t){return t.data})).then((function(a){console.log(a),"ok"==a.status&&(swal.fire("Booking Approved",a.msg,"success"),t.boarding.pet_data.forEach((function(a,e){a.kennel_id=t.kennelData.assignedKennels[e].kennel_id})),t.boarding.booking_data.status="onprogress")})).catch((function(a){console.error(a.response.data),swal.fire("Booking Approved","Booking is now approved","success"),t.boarding.pet_data.forEach((function(a,e){a.kennel_id=t.kennelData.assignedKennels[e].kennel_id})),t.boarding.booking_data.status="onprogress",t.emailError=!0,t.emailErrorText=a.response.data.message}))},getKennels:function(){var t=this;axios.get("/admin/api/list-all-kennels").then((function(t){return t.data})).then((function(a){t.kennels=a})).catch((function(t){console.error(t.response.data)}))}},created:function(){this.getBoardingData(),this.getKennels()}};const s=(0,e(1900).Z)(n,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"section"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[t.is_loading?e("div",{staticClass:"card"},[e("div",{staticClass:"card-header d-flex justify-content-between"},[e("skeleton",{attrs:{width:"10%",height:"20px"}}),t._v(" "),e("skeleton",{attrs:{width:"30%",height:"20px"}})],1),t._v(" "),e("div",{staticClass:"card-body"},[e("div",{staticClass:"mt-3 d-flex justify-content-between"},[e("skeleton",{attrs:{width:"40%",height:"20px"}}),t._v(" "),e("skeleton",{attrs:{width:"40%",height:"20px"}})],1),t._v(" "),e("div",{staticClass:"mt-3 d-flex justify-content-between"},[e("skeleton",{attrs:{width:"40%",height:"20px"}}),t._v(" "),e("skeleton",{attrs:{width:"40%",height:"20px"}})],1),t._v(" "),e("div",{staticClass:"mt-3 d-flex justify-content-between"},[e("skeleton",{attrs:{width:"40%",height:"20px"}}),t._v(" "),e("skeleton",{attrs:{width:"40%",height:"20px"}})],1),t._v(" "),e("div",{staticClass:"row mt-4"},t._l(4,(function(t){return e("div",{key:t,staticClass:"col-md-12 mt-2"},[e("skeleton",{attrs:{width:"100%",height:"30px"}})],1)})),0)])]):t._e(),t._v(" "),t.is_loading?t._e():e("div",{staticClass:"card"},[e("div",{staticClass:"card-header d-flex justify-content-between"},[e("span",{staticClass:"text-muted"},[t._v("Booking ID #"+t._s(t.boarding.booking_data.id))]),t._v(" "),e("span",[t._v("Booking Date :\n            "),e("strong",[t._v(t._s(t.moment(t.boarding.booking_data.created_at).format("DD MMM YYYY, hh:mm a")))])])]),t._v(" "),e("div",{staticClass:"card-body"},[e("div",{staticClass:"justify-content-between d-flex"},[e("p",{staticClass:"text-muted"},[t._v("\n              Customer Name :\n              "),e("strong",[t._v(t._s(t.boarding.booking_data.customer.first_name+" "+t.boarding.booking_data.customer.last_name))])]),t._v(" "),e("p",["onprogress"==t.boarding.booking_data.status?e("span",{staticClass:"badge badge-pill badge-warning"},[t._v("On Progress")]):t._e(),t._v(" "),"canceled"==t.boarding.booking_data.status?e("span",{staticClass:"badge badge-pill badge-danger"},[t._v("Canceled")]):t._e(),t._v(" "),"completed"==t.boarding.booking_data.status?e("span",{staticClass:"badge badge-pill badge-success"},[t._v("Completed")]):t._e()])]),t._v(" "),e("div",{staticClass:"d-flex justify-content-between"},[e("p",{staticClass:"text-muted"},[t._v("\n              Contact : "),e("strong",[t._v(t._s(t.boarding.booking_data.customer.cell_phone))])]),t._v(" "),e("p",{staticClass:"text-muted"},[t._v("\n              Total Price: "),e("strong",{staticClass:"text-success"},[t._v("$ "+t._s(t.boarding.booking_data.price||0))])])]),t._v(" "),e("div",{staticClass:"d-flex justify-content-between"},[e("p",{staticClass:"text-muted"},[t._v("\n              Booking Range :\n              "),e("strong",[t._v(t._s(t.moment(t.boarding.booking_data.start_date).format("DD MMM YYYY"))+" to\n                "+t._s(t.moment(t.boarding.booking_data.ending_date).format("DD MMM YYYY")))])]),t._v(" "),e("p",{staticClass:"text-muted"},[t._v("\n              Total Days: "),e("strong",[t._v(t._s(t.boarding.booking_data.stay_day)+" Days")])])]),t._v(" "),e("div",{staticClass:"d-flex justify-content-between"},[e("p",{staticClass:"text-muted"},[t._v("\n              Drop Off Time : "),e("strong",{staticClass:"text-warning"},[t._v(t._s(t.boarding.booking_data.checkIn?t.moment(t.boarding.booking_data.checkIn).format("DD MMM YYYY - hh:mm A"):"N/A"))])]),t._v(" "),e("p",{staticClass:"text-muted"},[t._v("\n              Pick Up Time: "),e("strong",{staticClass:"text-warning"},[t._v(t._s(t.boarding.booking_data.checkOut?t.moment(t.boarding.booking_data.checkOut).format("DD MMM YYYY - hh:mm A"):"N/A"))]),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),0==t.checkOut.checkOutForm&&"pending"!=t.boarding.booking_data.status?e("button",{staticClass:"btn btn-outline-primary",on:{click:function(a){t.checkOut.checkOutForm=!0}}},[t._v("Set Pick Up Time")]):t._e()])]),t._v(" "),1==t.checkOut.checkOutForm?e("div",{staticClass:"row justify-content-end"},[e("div",{staticClass:"col-md-4"},[e("form",{on:{submit:function(a){return a.preventDefault(),t.checkOutData.apply(null,arguments)}}},[e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.checkOut.date,expression:"checkOut.date"}],staticClass:"form-control",attrs:{type:"datetime-local"},domProps:{value:t.checkOut.date},on:{input:function(a){a.target.composing||t.$set(t.checkOut,"date",a.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("Button",{staticClass:"btn btn-sm btn-success",attrs:{form:t.checkOut}},[t._v("Set")]),t._v(" "),e("button",{staticClass:"btn btn-sm btn-danger",on:{click:function(a){t.checkOut.checkOutForm=!1,t.checkOut.reset()}}},[t._v("Cancel")])],1)])])]):t._e(),t._v(" "),[null==t.boarding.booking_data.checkIn&&"onprogress"==t.boarding.booking_data.status?e("p",{staticClass:"text-warning"},[t._m(0)]):null!=t.boarding.booking_data.checkIn&&"onprogress"==t.boarding.booking_data.status?e("p",{staticClass:"text-success"},[t._m(1)]):null!=t.boarding.booking_data.checkIn&&"completed"==t.boarding.booking_data.status?e("p",{staticClass:"text-success"},[t._m(2)]):"canceled"==t.boarding.booking_data.status?e("p",{staticClass:"text-danger"},[t._m(3)]):"pending"==t.boarding.booking_data.status?e("p",{staticClass:"text-warning"},[t._m(4)]):t._e()],t._v(" "),e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table"},[t._m(5),t._v(" "),e("tbody",t._l(t.boarding.pet_data,(function(a,n){return e("tr",{key:n},[e("td",[t._v(t._s(n+1))]),t._v(" "),e("td",[t._v(t._s(a.pet.name))]),t._v(" "),e("td",{attrs:{width:"20%"}},[null==a.kennel_id?e("select",{directives:[{name:"model",rawName:"v-model",value:t.kennelData.assignedKennels[n].kennel_id,expression:"kennelData.assignedKennels[p].kennel_id"}],staticClass:"form-control",on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.kennelData.assignedKennels[n],"kennel_id",a.target.multiple?e:e[0])}}},[e("option",{attrs:{value:"",hidden:""}},[t._v("Assign a kennel")]),t._v(" "),t._l(t.kennels,(function(a,n){return e("option",{key:n,domProps:{value:a.unique_id}},[t._v(t._s(a.title))])}))],2):e("strong",[t._v(t._s(a.kennel_id))])]),t._v(" "),e("td",[e("button",{staticClass:"btn btn-sm btn-outline-success",attrs:{title:"Print Pet Info"},on:{click:function(e){return t.printData(t.boarding.booking_data.id,a.pet_id)}}},[e("i",{staticClass:"fas fa-print"})])])])})),0)])]),t._v(" "),"pending"==t.boarding.booking_data.status?e("div",{staticClass:"row mt-4"},[e("div",{staticClass:"col-md-6"},[e("label",{attrs:{for:""}},[t._v("Set Price")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.kennelData.price,expression:"kennelData.price"}],staticClass:"form-control",attrs:{type:"number",placeholder:"$"},domProps:{value:t.kennelData.price},on:{input:function(a){a.target.composing||t.$set(t.kennelData,"price",a.target.value)}}})])]):t._e(),t._v(" "),"pending"!=t.boarding.booking_data.status?e("div",{staticClass:"row mt-4"},[e("div",{staticClass:"col-md-12 text-center"},[e("a",{staticClass:"btn btn-outline-secondary",attrs:{href:"/admin/api/print-boarding-contract?boardingId="+t.boarding.booking_data.id,target:"_blank"}},[e("i",{staticClass:"fas fa-print"}),t._v(" Print Contract")])])]):t._e()],2),t._v(" "),e("div",{staticClass:"card-footer"},[null==t.boarding.booking_data.checkIn&&"pending"!=t.boarding.booking_data.status?e("button",{staticClass:"btn btn-sm btn-success",on:{click:t.checkIn}},[t._v("Check In")]):t._e(),t._v(" "),"pending"==t.boarding.booking_data.status||"pending"==t.boarding.booking_data.status?e("button",{staticClass:"btn btn-sm btn-success",attrs:{disabled:t.kennelData.busy},on:{click:t.approveBoarding}},[t.kennelData.busy?e("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}):t._e(),t._v(" \n            Approve\n          ")]):t._e(),t._v(" "),"onprogress"==t.boarding.booking_data.status||"pending"==t.boarding.booking_data.status?e("button",{staticClass:"btn btn-sm btn-danger",on:{click:function(a){return t.changeStatus(t.boarding.booking_data.id,"canceled")}}},[t._v("\n            Cancel\n          ")]):t._e(),t._v(" "),"onprogress"==t.boarding.booking_data.status?e("button",{staticClass:"btn btn-sm btn-primary",on:{click:function(a){return t.changeStatus(t.boarding.booking_data.id,"completed")}}},[t._v("\n            Finish\n          ")]):t._e(),t._v(" "),t.kennelError?e("div",{staticClass:"row mt-5"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"alert alert-danger alert-dismissible fade show",attrs:{role:"alert"}},[e("strong",[t._v("Warning!")]),t._v("   Please assign kennels for all pets.\n                "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"},on:{click:function(a){t.kennelError=!1}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])])]):t._e(),t._v(" "),t.priceError?e("div",{staticClass:"row mt-3"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"alert alert-danger alert-dismissible fade show",attrs:{role:"alert"}},[e("strong",[t._v("Warning!")]),t._v("   Please set a price for this booking.\n                "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"},on:{click:function(a){t.priceError=!1}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])])]):t._e(),t._v(" "),t.emailError?e("div",{staticClass:"row mt-3 mb-4"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"alert alert-danger alert-dismissible fade show",attrs:{role:"alert"}},[e("h4",{staticClass:"alert-heading"},[t._v("Warning!")]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"},on:{click:function(a){t.emailError=!1,t.emailErrorText=""}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]),t._v(" "),e("p",[t._v("This booking was approved successfully but there were some problem with the server")]),t._v(" "),t._m(6),t._v(" "),e("ul",[e("li",[t._v("Try to set a default email account from "),e("router-link",{attrs:{to:{name:"admin-email"}}},[t._v("Email Setup")])],1),t._v(" "),e("li",[t._v("Try to add a new email")]),t._v(" "),e("li",[t._v("Check your email server configuration")]),t._v(" "),e("li",[t._v("Check your email credntials")]),t._v(" "),e("li",[t._v("Contact with developer for more support")])]),t._v(" "),e("hr"),t._v(" "),t._m(7),t._v(" "),e("p",[t._v(t._s(t.emailErrorText))])])])]):t._e()])])])])])}),[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("strong",[e("i",{staticClass:"fas fa-circle"}),t._v(" Waiting For Customer Check in")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("strong",[e("i",{staticClass:"fas fa-circle"}),t._v(" Reservation Started")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("strong",[e("i",{staticClass:"fas fa-circle"}),t._v(" Booking was completed")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("strong",[e("i",{staticClass:"fas fa-circle"}),t._v(" Booking was canceled")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("strong",[e("i",{staticClass:"fas fa-circle"}),t._v(" Waiting for approval")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",{staticStyle:{"background-color":"antiquewhite"}},[e("tr",[e("td",[t._v("#")]),t._v(" "),e("td",[t._v("Pet Name")]),t._v(" "),e("td",[t._v("Assigned Kennel")]),t._v(" "),e("td")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",{staticClass:"ml-3"},[e("strong",[t._v("Possible Soulutions :")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",{staticClass:"mb-0"},[e("strong",[t._v("ERROR_DETAILS")])])}],!1,null,null,null).exports}}]);