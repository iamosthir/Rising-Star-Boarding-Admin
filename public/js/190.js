(self.webpackChunk=self.webpackChunk||[]).push([[190],{5190:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>o});const a={data:function(){return{is_loading:!0,customer_data:{},pets:[],dogFields:1,kennels:[],form:new Form({dogs:[{dog_id:"",kennel:""}],customer_id:this.$route.params.id,start_date:"",end_date:"",totalDays:"",price:"",note:"",requestedKennel:"1 Kennel with 1 dog"})}},created:function(){this.getCustomerDetails(),this.getAvailableKennels()},methods:{getCustomerDetails:function(){var t=this;axios.get("/admin/api/get-customer-data",{params:{customer_id:this.$route.params.id}}).then((function(t){return t.data})).then((function(e){"ok"==e.status?(t.customer_data=e.data,t.pets=e.data.pet):t.$router.push({name:"booking.new"})}))},getAvailableKennels:function(){var t=this;axios.get("/admin/api/list-all-kennels").then((function(t){return t.data})).then((function(e){t.kennels=e})).catch((function(t){console.error(t.response.data)}))},addField:function(){this.form.dogs.push({dog_id:"",kennel:""}),this.dogFields+=1},removeField:function(){this.form.dogs.pop(),this.dogFields-=1},submit:function(){this.form.post("/admin/api/submit-boarding-order").then((function(t){return t.data})).then((function(t){console.log(t),"ok"==t.status?swal.fire("Success","New booking was successfull","success").then((function(){})):swal.fire("Failed","Something went wrong","error")})).catch((function(t){console.error(t.response.data)}))},calculatePrice:function(){var t=this;this.workingOnPrice=!0,this.form.post("/admin/api/calculate-price").then((function(t){return t.data})).then((function(e){console.log(e),t.workingOnPrice=!1,"ok"==e.status&&(t.price=e.price,t.discount=e.discountPrice,t.priceCalculated=!0)})).catch((function(e){console.error(e.response.data),t.workingOnPrice=!1}))}}};const o=(0,s(1900).Z)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"section"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-header d-flex justify-content-between"},[s("h4",[t._v("Bookings For Boarding")]),t._v(" "),s("router-link",{staticClass:"raise-button",attrs:{tag:"button",to:{name:"booking.new"}}},[s("i",{staticClass:"fas fa-arrow-left"}),t._v(" Go back\n          ")])],1),t._v(" "),s("div",{staticClass:"card-body"},[s("h6",{staticClass:"text-muted"},[t._v("Customer Name: "),s("strong",{staticClass:"text-success"},[t._v(t._s(t.customer_data.first_name+" "+t.customer_data.last_name))])]),t._v(" "),t._m(0),t._v(" "),s("hr"),t._v(" "),s("form",{on:{submit:function(e){return e.preventDefault(),t.submit()}}},[s("fieldset",[s("legend",[t._v("Choose Stay Days "),t.form.totalDays?s("span",{staticClass:"text-warning"},[s("strong",[t._v("(Total : "+t._s(t.form.totalDays)+" days)")])]):t._e()]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"form-group col-md-6"},[t._m(1),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.start_date,expression:"form.start_date"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("start_date")},attrs:{type:"date",required:""},domProps:{value:t.form.start_date},on:{change:t.getAvailableKennels,input:function(e){e.target.composing||t.$set(t.form,"start_date",e.target.value)}}}),t._v(" "),s("HasError",{attrs:{form:t.form,field:"start_date"}})],1),t._v(" "),s("div",{staticClass:"form-group col-md-6"},[t._m(2),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.end_date,expression:"form.end_date"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("end_date")},attrs:{type:"date",required:""},domProps:{value:t.form.end_date},on:{change:t.getAvailableKennels,input:function(e){e.target.composing||t.$set(t.form,"end_date",e.target.value)}}}),t._v(" "),s("HasError",{attrs:{form:t.form,field:"end_date"}})],1),t._v(" "),s("div",{staticClass:"col-md-4 mb-3 my-form"},[s("label",{attrs:{for:""}},[t._v("Select the number of kennels")]),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.form.requestedKennel,expression:"form.requestedKennel"}],staticClass:"form-control",on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"requestedKennel",e.target.multiple?s:s[0])}}},[s("option",{attrs:{value:"1 Kennel with 1 dog"}},[t._v("1 Kennel with 1 dog")]),t._v(" "),s("option",{attrs:{value:"1 Kennel with 2 dog"}},[t._v("1 Kennel with 2 dog")]),t._v(" "),s("option",{attrs:{value:"1 Kennel with 3 dog"}},[t._v("1 Kennel with 3 dog")]),t._v(" "),s("option",{attrs:{value:"2 Kennel with 1 dog each"}},[t._v("2 Kennel with 1 dog each")])])])]),t._v(" "),s("hr")]),t._v(" "),t._l(t.dogFields,(function(e,a){return s("fieldset",{key:a},[s("legend",[t._v("Dog "+t._s(a+1))]),t._v(" "),s("hr"),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-4 form-group"},[t._m(3,!0),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.form.dogs[a].dog_id,expression:"form.dogs[i].dog_id"}],staticClass:"form-control",attrs:{required:""},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form.dogs[a],"dog_id",e.target.multiple?s:s[0])}}},[s("option",{attrs:{value:"",hidden:""}},[t._v("Select Pet")]),t._v(" "),t._l(t.pets,(function(e,a){return s("option",{key:a,attrs:{disabled:t.form.dogs[0==a?0:a-1].dog_id==e.id},domProps:{value:e.id}},[t._v(t._s(e.name)+" - "+t._s(e.color))])}))],2)]),t._v(" "),s("div",{staticClass:"col-md-4 form-group"},[t._m(4,!0),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.form.dogs[a].kennel,expression:"form.dogs[i].kennel"}],staticClass:"form-control",attrs:{required:""},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form.dogs[a],"kennel",e.target.multiple?s:s[0])}}},[s("option",{attrs:{value:"",hidden:""}},[t._v("Choose Kennel")]),t._v(" "),t._l(t.kennels,(function(e,a){return s("option",{key:a,domProps:{value:e.unique_id}},[t._v(t._s(e.title)+" - "+t._s(e.unique_id)+" - "+t._s(e.size))])}))],2)])])])})),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-4 form-group"},[t.pets.length>1&&t.pets.length!=t.form.dogs.length?s("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button",title:"Add another dog"},on:{click:function(e){return e.preventDefault(),t.addField.apply(null,arguments)}}},[s("i",{staticClass:"fas fa-plus"})]):t._e(),t._v(" "),t.dogFields>1?s("button",{staticClass:"btn btn-outline-danger",attrs:{type:"button",title:"Remove Last Row"},on:{click:function(e){return e.preventDefault(),t.removeField.apply(null,arguments)}}},[s("i",{staticClass:"fas fa-trash"})]):t._e()]),t._v(" "),s("div",{staticClass:"col-md-12 form-group"},[s("label",{attrs:{for:""}},[t._v("Note")]),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.note,expression:"form.note"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("note")},attrs:{placeholder:"Write..."},domProps:{value:t.form.note},on:{input:function(e){e.target.composing||t.$set(t.form,"note",e.target.value)}}}),t._v(" "),s("HasError",{attrs:{form:t.form,field:"note"}})],1),t._v(" "),s("div",{staticClass:"col-md-6 form-group"},[t._m(5),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.price,expression:"form.price"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("price")},attrs:{type:"number"},domProps:{value:t.form.price},on:{input:function(e){e.target.composing||t.$set(t.form,"price",e.target.value)}}}),t._v(" "),s("HasError",{attrs:{form:t.form,field:"price"}})],1),t._v(" "),s("div",{staticClass:"col-md-12 form-group"},[s("Button",{staticClass:"btn btn-success",attrs:{form:t.form}},[t._v("Book Now")])],1)])],2)])])])])])}),[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"text-muted"},[t._v("Booking Type : "),s("strong",{staticClass:"text-warning"},[t._v("Boarding")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{attrs:{for:""}},[t._v("Start Date "),s("span",{staticClass:"text-danger"},[s("strong",[t._v("*")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{attrs:{for:""}},[t._v("End date "),s("span",{staticClass:"text-danger"},[s("strong",[t._v("*")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{attrs:{for:""}},[t._v("Select Pet "),s("span",{staticClass:"text-danger"},[s("strong",[t._v("*")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{attrs:{for:""}},[t._v("Assign Kennel "),s("span",{staticClass:"text-danger"},[s("strong",[t._v("*")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{attrs:{for:""}},[t._v("Price ($) "),s("span",{staticClass:"text-danger"},[s("strong",[t._v("*")])])])}],!1,null,null,null).exports}}]);