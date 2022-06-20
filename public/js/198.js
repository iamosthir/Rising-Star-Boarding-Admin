(self.webpackChunk=self.webpackChunk||[]).push([[198],{9198:(t,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>o});function e(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,a){if(!t)return;if("string"==typeof t)return n(t,a);var s=Object.prototype.toString.call(t).slice(8,-1);"Object"===s&&t.constructor&&(s=t.constructor.name);if("Map"===s||"Set"===s)return Array.from(t);if("Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return n(t,a)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,a){(null==a||a>t.length)&&(a=t.length);for(var s=0,e=new Array(a);s<a;s++)e[s]=t[s];return e}const i={data:function(){return{is_loading:!0,boardings:[],moment,paginateData:{}}},created:function(){this.getBoardingData()},methods:{getBoardingData:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.is_loading=!0;var s=$('input[name="radio1"]:checked').val();axios.get("/admin/api/get-all-boarding-booking?page="+a,{params:{type:s}}).then((function(t){return t.data})).then((function(a){t.boardings=a.main_data,t.paginateData=a.paginate,t.is_loading=!1})).catch((function(t){console.error(t.response.data)}))},changeStatus:function(t,a,s){var e=this;axios.post("/admin/api/change-boarding-status",{bookingId:t,status:a}).then((function(t){return t.data})).then((function(t){"ok"==t.status&&(e.boardings.splice(s,1),swal.fire("success",t.msg,"success"))})).catch((function(t){console.error(t.response.data)}))},printData:function(t,a){axios.get("/admin/api/print-pet-info",{params:{bookingId:t,petId:a}}).then((function(t){return t.data})).then((function(t){for(var a=t.html,s="",n=0,i=e(document.querySelectorAll('link[rel="stylesheet"], style'));n<i.length;n++){s+=i[n].outerHTML}var o=window.open("","","left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0");o.document.write("<!DOCTYPE html>\n                <html>\n                <head>\n                    ".concat(s,"\n                </head>\n                <body>\n                    ").concat(a,"\n                </body>\n                </html>")),o.document.close(),o.focus(),o.print()})).catch((function(t){console.error(t.response.data)}))}}};const o=(0,s(1900).Z)(i,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"card"},[t._m(0),t._v(" "),s("div",{staticClass:"card-body"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-8 col-md-6 col-12"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"form-label"},[t._v("Filter By")]),t._v(" "),s("div",{staticClass:"selectgroup w-100"},[s("label",{staticClass:"selectgroup-item"},[s("input",{staticClass:"selectgroup-input-radio",attrs:{type:"radio",name:"radio1",value:"onprogress",checked:""},on:{change:t.getBoardingData}}),t._v(" "),s("span",{staticClass:"selectgroup-button"},[t._v("On Going")])]),t._v(" "),s("label",{staticClass:"selectgroup-item"},[s("input",{staticClass:"selectgroup-input-radio",attrs:{type:"radio",name:"radio1",value:"canceled"},on:{change:t.getBoardingData}}),t._v(" "),s("span",{staticClass:"selectgroup-button"},[t._v("Canceled")])]),t._v(" "),s("label",{staticClass:"selectgroup-item"},[s("input",{staticClass:"selectgroup-input-radio",attrs:{type:"radio",name:"radio1",value:"completed"},on:{change:t.getBoardingData}}),t._v(" "),s("span",{staticClass:"selectgroup-button"},[t._v("Completed")])])])])]),t._v(" "),s("div",{staticClass:"col-md-12"},[t.is_loading?s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("skeleton",{attrs:{width:"100%",height:"200px"}})],1),t._v(" "),s("div",{staticClass:"col-md-6"},[s("skeleton",{attrs:{width:"100%",height:"200px"}})],1),t._v(" "),s("div",{staticClass:"col-md-6"},[s("skeleton",{attrs:{width:"100%",height:"200px"}})],1),t._v(" "),s("div",{staticClass:"col-md-6"},[s("skeleton",{attrs:{width:"100%",height:"200px"}})],1),t._v(" "),s("div",{staticClass:"col-md-6"},[s("skeleton",{attrs:{width:"100%",height:"200px"}})],1),t._v(" "),s("div",{staticClass:"col-md-6"},[s("skeleton",{attrs:{width:"100%",height:"200px"}})],1)]):t._e(),t._v(" "),t.is_loading?t._e():s("div",[t.boardings.length>0?s("div",{staticClass:"row"},[t._l(t.boardings,(function(a,e){return s("div",{key:e,staticClass:"col-md-6"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-header d-flex justify-content-between"},[s("span",{staticClass:"text-muted"},[t._v("Booking ID #"+t._s(a.booking_data.id))]),t._v(" "),s("span",[t._v("Booking Date : "),s("strong",[t._v(t._s(t.moment(a.booking_data.created_at).format("DD MMM YYYY, hh:mm a")))])])]),t._v(" "),s("div",{staticClass:"card-body"},[s("div",{staticClass:"justify-content-between d-flex"},[s("p",{staticClass:"text-muted"},[t._v("Customer Name : "),s("strong",[t._v(t._s(a.booking_data.customer.first_name+" "+a.booking_data.customer.last_name))])]),t._v(" "),s("p",["onprogress"==a.booking_data.status?s("span",{staticClass:"badge badge-pill badge-warning"},[t._v("On Progress")]):t._e(),t._v(" "),"canceled"==a.booking_data.status?s("span",{staticClass:"badge badge-pill badge-danger"},[t._v("Canceled")]):t._e(),t._v(" "),"completed"==a.booking_data.status?s("span",{staticClass:"badge badge-pill badge-success"},[t._v("Completed")]):t._e()])]),t._v(" "),s("div",{staticClass:"d-flex justify-content-between"},[s("p",{staticClass:"text-muted"},[t._v("Contact : "),s("strong",[t._v(t._s(a.booking_data.customer.cell_phone))])]),t._v(" "),s("p",{staticClass:"text-muted"},[t._v("Total Price: "),s("strong",{staticClass:"text-success"},[t._v("$ "+t._s(a.price))])])]),t._v(" "),s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table"},[t._m(1,!0),t._v(" "),s("tbody",t._l(a.pet_data,(function(e,n){return s("tr",{key:n},[s("td",[t._v(t._s(n+1))]),t._v(" "),s("td",[t._v(t._s(e.pet.name))]),t._v(" "),s("td",[t._v(t._s(e.kennel.unique_id))]),t._v(" "),s("td",[t._v(t._s(e.rate_per_day)+" USD")]),t._v(" "),s("td",[s("span",{staticClass:"text-muted"},[t._v(t._s(t.moment(e.start_date).format("DD MMM YYYY")))]),t._v(" to \n                                                          "),s("span",{staticClass:"text-muted"},[t._v(t._s(t.moment(e.ending_date).format("DD MMM YYYY")))])]),t._v(" "),s("td",[t._v(t._s(e.stay_day))]),t._v(" "),s("td",[s("button",{staticClass:"btn btn-sm btn-outline-success",attrs:{title:"Print Pet Info"},on:{click:function(s){return t.printData(a.booking_data.id,e.id)}}},[s("i",{staticClass:"fas fa-print"})])])])})),0)])])]),t._v(" "),s("div",{staticClass:"card-footer"},["onprogress"==a.booking_data.status?s("button",{staticClass:"btn btn-sm btn-danger",on:{click:function(s){return t.changeStatus(a.booking_data.id,"canceled",e)}}},[t._v("Cancel")]):t._e(),t._v(" "),"onprogress"==a.booking_data.status?s("button",{staticClass:"btn btn-sm btn-primary",on:{click:function(s){return t.changeStatus(a.booking_data.id,"completed",e)}}},[t._v("Finish")]):t._e()])])])})),t._v(" "),s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"row justify-content-center"},[s("pagination",{attrs:{data:t.paginateData},on:{"pagination-change-page":t.getBoardingData}})],1)])],2):s("div",{staticClass:"text-center"},[s("h4",{staticClass:"text-danger"},[t._v("No Booking Records found")])])])])])])])])])}),[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"card-header"},[s("h4",[t._v("Boarding List")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("thead",{staticStyle:{"background-color":"antiquewhite"}},[s("tr",[s("td",[t._v("#")]),t._v(" "),s("td",[t._v("Pet Name")]),t._v(" "),s("td",[t._v("Kennel ID")]),t._v(" "),s("td",[t._v("Rent per day")]),t._v(" "),s("td",[t._v("Date Range")]),t._v(" "),s("td",[t._v("Total Days")]),t._v(" "),s("td")])])}],!1,null,null,null).exports}}]);