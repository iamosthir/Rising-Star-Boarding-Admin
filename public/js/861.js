(self.webpackChunk=self.webpackChunk||[]).push([[861],{5861:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>o});const s={data:function(){return{is_loading:!0,customer_data:{},pets:[],dogFields:1,availableKennels:[],form:new Form({dogs:[{dog_id:"",start_date:"",end_date:"",rate_per_day:"",kennel:"",totalDays:""}],customer_id:this.$route.params.id})}},created:function(){this.getCustomerDetails()},methods:{getCustomerDetails:function(){var t=this;axios.get("/admin/api/get-customer-data",{params:{customer_id:this.$route.params.id}}).then((function(t){return t.data})).then((function(e){"ok"==e.status?(t.customer_data=e.data,t.pets=e.data.pet):t.$router.push({name:"booking.new"})}))},getAvailableKennels:function(t){var e=this;if(""!=this.form.dogs[t].start_date&&""!=this.form.dogs[t].end_date){var a=moment(this.form.dogs[t].start_date),s=moment(this.form.dogs[t].end_date);this.form.dogs[t].totalDays=s.diff(a,"days")+1,this.availableKennels.splice(t,1),axios.get("/admin/api/get-available-kennels",{params:{start_date:this.form.dogs[t].start_date,end_date:this.form.dogs[t].end_date}}).then((function(t){return t.data})).then((function(t){e.availableKennels.push(t),console.log(t)})).catch((function(t){console.error(t.response.data)}))}},addField:function(){this.form.dogs.push({dog_id:"",start_date:"",stay_day:"",rate_per_day:"",kennel:""}),this.dogFields+=1},removeField:function(){this.form.dogs.pop(),this.dogFields-=1,this.availableKennels.splice(this.dogFields-1,1)},submit:function(){var t=this;this.form.post("/admin/api/submit-boarding-order").then((function(t){return t.data})).then((function(e){"ok"==e.status?swal.fire("Success","New booking was successfull","success").then((function(){t.$router.push({name:"boarding"})})):swal.fire("Failed","Something went wrong","error")})).catch((function(t){console.error(t.response.data)}))}}};const o=(0,a(1900).Z)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header d-flex justify-content-between"},[a("h4",[t._v("Bookings For Boarding")]),t._v(" "),a("router-link",{staticClass:"raise-button",attrs:{tag:"button",to:{name:"booking.new"}}},[a("i",{staticClass:"fas fa-arrow-left"}),t._v(" Go back\n          ")])],1),t._v(" "),a("div",{staticClass:"card-body"},[a("h6",{staticClass:"text-muted"},[t._v("Customer Name: "),a("strong",{staticClass:"text-success"},[t._v(t._s(t.customer_data.first_name+" "+t.customer_data.last_name))])]),t._v(" "),t._m(0),t._v(" "),a("hr"),t._v(" "),a("form",{on:{submit:function(e){return e.preventDefault(),t.submit()}}},[t._l(t.dogFields,(function(e,s){return a("fieldset",{key:s},[a("legend",[t._v("Dog "+t._s(s+1))]),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4 form-group"},[a("label",{attrs:{for:""}},[t._v("Select Pet")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.dogs[s].dog_id,expression:"form.dogs[i].dog_id"}],staticClass:"form-control",attrs:{required:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form.dogs[s],"dog_id",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"",hidden:""}},[t._v("Select Pet")]),t._v(" "),t._l(t.pets,(function(e,s){return a("option",{key:s,domProps:{value:e.id}},[t._v(t._s(e.name)+" - "+t._s(e.color))])}))],2)]),t._v(" "),a("div",{staticClass:"col-md-4 form-group"},[a("label",{attrs:{for:""}},[t._v("Select Start Date")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.dogs[s].start_date,expression:"form.dogs[i].start_date"}],staticClass:"form-control",attrs:{type:"date",required:""},domProps:{value:t.form.dogs[s].start_date},on:{change:function(e){return t.getAvailableKennels(s)},input:function(e){e.target.composing||t.$set(t.form.dogs[s],"start_date",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"col-md-4 form-group"},[a("label",{attrs:{for:""}},[t._v("Select End Date "),t.form.dogs[s].totalDays?a("span",[t._v("(Total "+t._s(t.form.dogs[s].totalDays)+" Days)")]):t._e()]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.dogs[s].end_date,expression:"form.dogs[i].end_date"}],staticClass:"form-control",attrs:{type:"date",required:""},domProps:{value:t.form.dogs[s].end_date},on:{change:function(e){return t.getAvailableKennels(s)},input:function(e){e.target.composing||t.$set(t.form.dogs[s],"end_date",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"col-md-4 form-group"},[a("label",{attrs:{for:""}},[t._v("Rate Per Day")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.dogs[s].rate_per_day,expression:"form.dogs[i].rate_per_day"}],staticClass:"form-control",attrs:{type:"number",step:"all",required:""},domProps:{value:t.form.dogs[s].rate_per_day},on:{input:function(e){e.target.composing||t.$set(t.form.dogs[s],"rate_per_day",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"col-md-4 form-group"},[a("label",{attrs:{for:""}},[t._v("Available Kennels "),t.availableKennels[s]?a("span",{class:t.availableKennels[s].length>0?"text-success":"text-danger"},[t._v("("+t._s(t.availableKennels[s].length)+" Free Kennel Space Found)")]):t._e()]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.dogs[s].kennel,expression:"form.dogs[i].kennel"}],staticClass:"form-control",attrs:{required:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form.dogs[s],"kennel",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"",hidden:""}},[t._v("Choose Kennel")]),t._v(" "),t._l(t.availableKennels[s],(function(e,s){return a("option",{key:s,domProps:{value:e.id}},[t._v(t._s(e.title)+" - "+t._s(e.unique_id)+" - "+t._s(e.size))])}))],2)])])])})),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4 form-group"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button",title:"Add another dog"},on:{click:function(e){return e.preventDefault(),t.addField.apply(null,arguments)}}},[a("i",{staticClass:"fas fa-plus"})]),t._v(" "),t.dogFields>1?a("button",{staticClass:"btn btn-outline-danger",attrs:{type:"button",title:"Remove Last Row"},on:{click:function(e){return e.preventDefault(),t.removeField.apply(null,arguments)}}},[a("i",{staticClass:"fas fa-trash"})]):t._e()]),t._v(" "),a("div",{staticClass:"col-md-12 form-group"},[a("Button",{staticClass:"btn btn-success",attrs:{form:t.form}},[t._v("Book Now")])],1)])],2)])])])])])}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"text-muted"},[t._v("Booking Type : "),a("strong",{staticClass:"text-warning"},[t._v("Boarding")])])}],!1,null,null,null).exports}}]);