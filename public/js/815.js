(self.webpackChunk=self.webpackChunk||[]).push([[815],{9151:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>r});var o=i(3645),a=i.n(o)()((function(t){return t[1]}));a.push([t.id,'fieldset[disabled] .multiselect{pointer-events:none}.multiselect__spinner{position:absolute;right:1px;top:1px;width:48px;height:35px;background:#fff;display:block}.multiselect__spinner:after,.multiselect__spinner:before{position:absolute;content:"";top:50%;left:50%;margin:-8px 0 0 -8px;width:16px;height:16px;border-radius:100%;border:2px solid transparent;border-top-color:#41b883;box-shadow:0 0 0 1px transparent}.multiselect__spinner:before{-webkit-animation:spinning 2.4s cubic-bezier(.41,.26,.2,.62);animation:spinning 2.4s cubic-bezier(.41,.26,.2,.62);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.multiselect__spinner:after{-webkit-animation:spinning 2.4s cubic-bezier(.51,.09,.21,.8);animation:spinning 2.4s cubic-bezier(.51,.09,.21,.8);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.multiselect__loading-enter-active,.multiselect__loading-leave-active{transition:opacity .4s ease-in-out;opacity:1}.multiselect__loading-enter,.multiselect__loading-leave-active{opacity:0}.multiselect,.multiselect__input,.multiselect__single{font-family:inherit;font-size:16px;touch-action:manipulation}.multiselect{box-sizing:content-box;display:block;position:relative;width:100%;min-height:40px;text-align:left;color:#35495e}.multiselect *{box-sizing:border-box}.multiselect:focus{outline:none}.multiselect--disabled{background:#ededed;pointer-events:none;opacity:.6}.multiselect--active{z-index:50}.multiselect--active:not(.multiselect--above) .multiselect__current,.multiselect--active:not(.multiselect--above) .multiselect__input,.multiselect--active:not(.multiselect--above) .multiselect__tags{border-bottom-left-radius:0;border-bottom-right-radius:0}.multiselect--active .multiselect__select{transform:rotate(180deg)}.multiselect--above.multiselect--active .multiselect__current,.multiselect--above.multiselect--active .multiselect__input,.multiselect--above.multiselect--active .multiselect__tags{border-top-left-radius:0;border-top-right-radius:0}.multiselect__input,.multiselect__single{position:relative;display:inline-block;min-height:20px;line-height:20px;border:none;border-radius:5px;background:#fff;padding:0 0 0 5px;width:100%;transition:border .1s ease;box-sizing:border-box;margin-bottom:8px;vertical-align:top}.multiselect__input:-ms-input-placeholder{color:#35495e}.multiselect__input::-moz-placeholder{color:#35495e}.multiselect__input::placeholder{color:#35495e}.multiselect__tag~.multiselect__input,.multiselect__tag~.multiselect__single{width:auto}.multiselect__input:hover,.multiselect__single:hover{border-color:#cfcfcf}.multiselect__input:focus,.multiselect__single:focus{border-color:#a8a8a8;outline:none}.multiselect__single{padding-left:5px;margin-bottom:8px}.multiselect__tags-wrap{display:inline}.multiselect__tags{min-height:40px;display:block;padding:8px 40px 0 8px;border-radius:5px;border:1px solid #e8e8e8;background:#fff;font-size:14px}.multiselect__tag{position:relative;display:inline-block;padding:4px 26px 4px 10px;border-radius:5px;margin-right:10px;color:#fff;line-height:1;background:#41b883;margin-bottom:5px;white-space:nowrap;overflow:hidden;max-width:100%;text-overflow:ellipsis}.multiselect__tag-icon{cursor:pointer;margin-left:7px;position:absolute;right:0;top:0;bottom:0;font-weight:700;font-style:normal;width:22px;text-align:center;line-height:22px;transition:all .2s ease;border-radius:5px}.multiselect__tag-icon:after{content:"\\D7";color:#266d4d;font-size:14px}.multiselect__tag-icon:focus,.multiselect__tag-icon:hover{background:#369a6e}.multiselect__tag-icon:focus:after,.multiselect__tag-icon:hover:after{color:#fff}.multiselect__current{min-height:40px;overflow:hidden;padding:8px 30px 0 12px;white-space:nowrap;border-radius:5px;border:1px solid #e8e8e8}.multiselect__current,.multiselect__select{line-height:16px;box-sizing:border-box;display:block;margin:0;text-decoration:none;cursor:pointer}.multiselect__select{position:absolute;width:40px;height:38px;right:1px;top:1px;padding:4px 8px;text-align:center;transition:transform .2s ease}.multiselect__select:before{position:relative;right:0;top:65%;color:#999;margin-top:4px;border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 0;content:""}.multiselect__placeholder{color:#adadad;display:inline-block;margin-bottom:10px;padding-top:2px}.multiselect--active .multiselect__placeholder{display:none}.multiselect__content-wrapper{position:absolute;display:block;background:#fff;width:100%;max-height:240px;overflow:auto;border:1px solid #e8e8e8;border-top:none;border-bottom-left-radius:5px;border-bottom-right-radius:5px;z-index:50;-webkit-overflow-scrolling:touch}.multiselect__content{list-style:none;display:inline-block;padding:0;margin:0;min-width:100%;vertical-align:top}.multiselect--above .multiselect__content-wrapper{bottom:100%;border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:5px;border-top-right-radius:5px;border-bottom:none;border-top:1px solid #e8e8e8}.multiselect__content::webkit-scrollbar{display:none}.multiselect__element{display:block}.multiselect__option{display:block;padding:12px;min-height:40px;line-height:16px;text-decoration:none;text-transform:none;vertical-align:middle;position:relative;cursor:pointer;white-space:nowrap}.multiselect__option:after{top:0;right:0;position:absolute;line-height:40px;padding-right:12px;padding-left:20px;font-size:13px}.multiselect__option--highlight{background:#41b883;outline:none;color:#fff}.multiselect__option--highlight:after{content:attr(data-select);background:#41b883;color:#fff}.multiselect__option--selected{background:#f3f3f3;color:#35495e;font-weight:700}.multiselect__option--selected:after{content:attr(data-selected);color:silver}.multiselect__option--selected.multiselect__option--highlight{background:#ff6a6a;color:#fff}.multiselect__option--selected.multiselect__option--highlight:after{background:#ff6a6a;content:attr(data-deselect);color:#fff}.multiselect--disabled .multiselect__current,.multiselect--disabled .multiselect__select{background:#ededed;color:#a6a6a6}.multiselect__option--disabled{background:#ededed!important;color:#a6a6a6!important;cursor:text;pointer-events:none}.multiselect__option--group{background:#ededed;color:#35495e}.multiselect__option--group.multiselect__option--highlight{background:#35495e;color:#fff}.multiselect__option--group.multiselect__option--highlight:after{background:#35495e}.multiselect__option--disabled.multiselect__option--highlight{background:#dedede}.multiselect__option--group-selected.multiselect__option--highlight{background:#ff6a6a;color:#fff}.multiselect__option--group-selected.multiselect__option--highlight:after{background:#ff6a6a;content:attr(data-deselect);color:#fff}.multiselect-enter-active,.multiselect-leave-active{transition:all .15s ease}.multiselect-enter,.multiselect-leave-active{opacity:0}.multiselect__strong{margin-bottom:8px;line-height:20px;display:inline-block;vertical-align:top}[dir=rtl] .multiselect{text-align:right}[dir=rtl] .multiselect__select{right:auto;left:1px}[dir=rtl] .multiselect__tags{padding:8px 8px 0 40px}[dir=rtl] .multiselect__content{text-align:right}[dir=rtl] .multiselect__option:after{right:auto;left:0}[dir=rtl] .multiselect__clear{right:auto;left:12px}[dir=rtl] .multiselect__spinner{right:auto;left:1px}@-webkit-keyframes spinning{0%{transform:rotate(0)}to{transform:rotate(2turn)}}@keyframes spinning{0%{transform:rotate(0)}to{transform:rotate(2turn)}}',""]);const r=a},1815:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>a});const o={data:function(){return{moment,is_loading:!0,customer_data:{},grooming_data:{},petOptions:[],petValues:null,form:new Form({groomingId:this.$route.params.id,pets:null,date:"",end:"",price:"",customer_id:this.$route.params.id,note:""}),emailError:!1,emailErrorText:""}},created:function(){this.getGroomingData()},methods:{getGroomingData:function(){var t=this;axios.get("/admin/api/get-grooming-data",{params:{groomingId:this.$route.params.id}}).then((function(t){return t.data})).then((function(e){if("ok"==e.status){t.grooming_data=e.grooming_data,t.customer_data=e.customer_data,t.petOptions=e.customer_data.pet,t.petValues=e.grooming_data.pets,t.form.date=moment(e.grooming_data.appointment_date).format("YYYY-MM-DDTHH:mm");var i=t.moment(e.grooming_data.appointment_date),o=t.moment(e.grooming_data.end_time);t.form.end=o.diff(i,"minutes"),t.form.price=e.grooming_data.price,t.form.note=e.grooming_data.note,t.is_loading=!1}else t.$router.push({name:"grooming.list-view"})})).catch((function(e){console.error(e.response.data),t.$router.push({name:"grooming.list-view"})}))},addTag:function(t){var e={name:t,code:t.substring(0,2)+Math.floor(1e7*Math.random())};this.petOptions.push(e),this.petValues.push(e)},updateAppointement:function(){null!=this.petValues&&(this.form.pets=JSON.stringify(this.petValues)),this.form.post("/admin/api/update-appointment-grooming").then((function(t){return t.data})).then((function(t){console.log(t),"ok"==t.status&&swal.fire({title:"Success",text:t.msg,icon:"success"})})).catch((function(t){console.error(t.response.data)}))},appointmentStatus:function(t,e,i){var o=this;$(i.target).find("span").show(),$(i.target).attr("disabled",!0),axios.post("/admin/api/change-grooming-status",{id:e,status:t}).then((function(t){return t.data})).then((function(e){"ok"==e.status&&(swal.fire("Success",e.msg,"success"),o.grooming_data.status=t,$(i.target).find("span").hide(),$(i.target).attr("disabled",!1))})).catch((function(t){console.error(t.response.data),swal.fire("Success","This booking was approved","success"),$(i.target).find("span").hide(),$(i.target).attr("disabled",!1),o.emailError=!0,o.emailErrorText=t.response.data.message}))},newEndTime:function(t){this.form.end=t.target.value}},computed:{timeDiff:function(){var t="";switch(this.form.end){case"30":t="30 minutes";break;case"60":t="1 hour";break;case"90":t="1 hour and a half";break;case"120":t="2 hour";break;case"150":t="2 hour and a half";break;case"180":t="3 hour";break;case"210":t="3 hour and a half";break;case"240":t="4 hour";break;default:t="-"}return t}}};i(2737);const a=(0,i(1900).Z)(o,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"section"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-12"},[i("div",{staticClass:"card"},[i("div",{staticClass:"card-header d-flex justify-content-between"},[i("h4",[t._v("Grooming appoinment")]),t._v(" "),i("router-link",{staticClass:"raise-button",attrs:{tag:"button",to:{name:"grooming.list-view"}}},[i("i",{staticClass:"fas fa-arrow-left"}),t._v(" Go back")])],1),t._v(" "),i("div",{staticClass:"card-body"},[t.is_loading?i("div",{staticClass:"section"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-3 form-group"},[i("skeleton",{attrs:{widht:"100%",height:"30px"}})],1),t._v(" "),i("div",{staticClass:"col-md-12 form-group"},[i("skeleton",{attrs:{widht:"100%",height:"30px"}})],1),t._v(" "),i("div",{staticClass:"col-md-12 form-group"},[i("skeleton",{attrs:{widht:"100%",height:"30px"}})],1),t._v(" "),i("div",{staticClass:"col-md-12 form-group"},[i("skeleton",{attrs:{widht:"100%",height:"30px"}})],1),t._v(" "),i("div",{staticClass:"col-md-12 form-group"},[i("skeleton",{attrs:{widht:"100%",height:"150px"}})],1),t._v(" "),i("div",{staticClass:"col-md-6 form-group"},[i("skeleton",{attrs:{widht:"100%",height:"30px"}})],1)])]):t._e(),t._v(" "),t.is_loading?t._e():i("form",{on:{submit:function(e){return e.preventDefault(),t.updateAppointement.apply(null,arguments)}}},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-12 form-group"},[i("AlertError",{attrs:{form:t.form}},[t._v("There were some problems with your input.")])],1)]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-12"},[i("h6",{staticClass:"text-muted"},[t._v("Customer Name: "),i("strong",{staticClass:"text-success"},[t._v(t._s(t.customer_data.first_name+" "+t.customer_data.last_name))])]),t._v(" "),t._m(0),t._v(" "),i("hr")])]),t._v(" "),i("fieldset",[i("legend",[i("strong",[t._v(t._s(t.customer_data.first_name+" "+t.customer_data.last_name)+"'s")]),t._v(" appoinment for grooming")]),t._v(" "),i("hr"),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-9 form-group"},[i("multiselect",{class:{invalid:t.form.errors.has("pets")},attrs:{options:t.petOptions,taggable:!0,multiple:!0,"close-on-select":!1,"track-by":"id",label:"name",placeholder:"Select Pets"},on:{tag:t.addTag},model:{value:t.petValues,callback:function(e){t.petValues=e},expression:"petValues"}}),t._v(" "),i("HasError",{attrs:{form:t.form,field:"pets"}})],1),t._v(" "),i("div",{staticClass:"col-md-3 form-group"},[i("router-link",{staticClass:"btn btn-primary w-100",attrs:{to:{name:"customer.profile",params:{customerId:t.customer_data.id}}}},[t._v("Manage Pets")])],1),t._v(" "),i("div",{staticClass:"col-md-4 form-group"},[i("label",{attrs:{for:""}},[t._v("Change Appointment Date & Time ("),i("strong",{staticClass:"text-muted"},[t._v(t._s(t.moment(t.form.date).format("DD MMM YYYY hh:mm A")))]),t._v(")")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.date,expression:"form.date"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("date")},attrs:{type:"datetime-local"},domProps:{value:t.form.date},on:{input:function(e){e.target.composing||t.$set(t.form,"date",e.target.value)}}}),t._v(" "),i("HasError",{attrs:{form:t.form,field:"date"}})],1),t._v(" "),i("div",{staticClass:"col-md-4 form-group"},[i("label",{attrs:{for:""}},[t._v("Appointment Duration ("),i("strong",{staticClass:"text-muted"},[t._v(" "+t._s(t.timeDiff)+" ")]),t._v(")")]),t._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.form.end,expression:"form.end"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("end")},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"end",e.target.multiple?i:i[0])}}},[i("option",{attrs:{value:"",hidden:""}},[t._v("Select Duration")]),t._v(" "),i("option",{attrs:{value:"30"}},[t._v("30 min")]),t._v(" "),i("option",{attrs:{value:"60"}},[t._v("1 hour")]),t._v(" "),i("option",{attrs:{value:"90"}},[t._v("1 hour and a half")]),t._v(" "),i("option",{attrs:{value:"120"}},[t._v("2 hour")]),t._v(" "),i("option",{attrs:{value:"150"}},[t._v("2 hour and a half")]),t._v(" "),i("option",{attrs:{value:"180"}},[t._v("3 hour")]),t._v(" "),i("option",{attrs:{value:"210"}},[t._v("3 hour and a half")]),t._v(" "),i("option",{attrs:{value:"240"}},[t._v("4 hour")])]),t._v(" "),i("HasError",{attrs:{form:t.form,field:"end"}})],1),t._v(" "),i("div",{staticClass:"col-md-4 form-group"},[i("label",{attrs:{for:""}},[t._v("Price ($)")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.price,expression:"form.price"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("price")},attrs:{type:"number",step:"any",placeholder:"Price"},domProps:{value:t.form.price},on:{input:function(e){e.target.composing||t.$set(t.form,"price",e.target.value)}}}),t._v(" "),i("HasError",{attrs:{form:t.form,field:"price"}})],1),t._v(" "),i("div",{staticClass:"col-md-12 form-group"},[i("label",{attrs:{for:""}},[t._v("Note")]),t._v(" "),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.note,expression:"form.note"}],staticClass:"form-control",attrs:{rows:"3",placeholder:"Write..."},domProps:{value:t.form.note},on:{input:function(e){e.target.composing||t.$set(t.form,"note",e.target.value)}}})])])]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-6 form-group"},[i("Button",{staticClass:"btn btn-primary",attrs:{form:t.form}},[t._v("Update Schedule")])],1),t._v(" "),i("div",{staticClass:"col-md-12 form-group"},["ongoing"==t.grooming_data.status?i("button",{staticClass:"btn btn-sm btn-success",on:{click:function(e){return t.appointmentStatus("finish",t.grooming_data.id,e)}}},[i("span",{staticClass:"spinner-border spinner-border-sm",staticStyle:{display:"none"},attrs:{role:"status","aria-hidden":"true"}}),t._v("\n                                  Finish")]):t._e(),t._v(" "),"pending"==t.grooming_data.status?i("button",{staticClass:"btn btn-sm btn-success",on:{click:function(e){return t.appointmentStatus("ongoing",t.grooming_data.id,e)}}},[i("span",{staticClass:"spinner-border spinner-border-sm",staticStyle:{display:"none"},attrs:{role:"status","aria-hidden":"true"}}),t._v("\n                                  Approve")]):t._e(),t._v(" "),"ongoing"==t.grooming_data.status||"pending"==t.grooming_data.status?i("button",{staticClass:"btn btn-danger btn-sm",on:{click:function(e){return t.appointmentStatus("cancel",t.grooming_data.id,e)}}},[i("span",{staticClass:"spinner-border spinner-border-sm",staticStyle:{display:"none"},attrs:{role:"status","aria-hidden":"true"}}),t._v("\n                              Cancel")]):t._e()])])])])])]),t._v(" "),t.emailError?i("div",{staticClass:"col-12"},[i("div",{staticClass:"alert alert-danger alert-dismissible fade show",attrs:{role:"alert"}},[i("h4",{staticClass:"alert-heading"},[t._v("Warning!")]),i("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"},on:{click:function(e){t.emailError=!1,t.emailErrorText=""}}},[i("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]),t._v(" "),i("p",[t._v("This booking was approved successfully but there were some problem with the server")]),t._v(" "),t._m(1),t._v(" "),i("ul",[i("li",[t._v("Try to set a default email account from "),i("router-link",{attrs:{to:{name:"admin-email"}}},[t._v("Email Setup")])],1),t._v(" "),i("li",[t._v("Try to add a new email")]),t._v(" "),i("li",[t._v("Check your email server configuration")]),t._v(" "),i("li",[t._v("Check your email credentials")]),t._v(" "),i("li",[t._v("Contact with developer for more support")])]),t._v(" "),i("hr"),t._v(" "),t._m(2),t._v(" "),i("p",[t._v(t._s(t.emailErrorText))])])]):t._e()])])}),[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",{staticClass:"text-muted"},[t._v("Booking Type : "),i("strong",{staticClass:"text-warning"},[t._v("Grooming")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",{staticClass:"ml-3"},[i("strong",[t._v("Possible Soulutions :")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",{staticClass:"mb-0"},[i("strong",[t._v("ERROR_DETAILS")])])}],!1,null,null,null).exports},2737:(t,e,i)=>{"use strict";i(8894)},8894:(t,e,i)=>{var o=i(9151);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,i(5346).Z)("91a86c6a",o,!0,{})}}]);