(self.webpackChunk=self.webpackChunk||[]).push([[574],{7574:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>o});const r={data:function(){return{form:new Form({id:this.$route.params.id,host:"",port:"",driver:"smtp",encryption:"ssl",user:"",pass:"",sender_name:"",sender_email:"",defaultMail:!0})}},methods:{getMail:function(){var t=this;axios.get("/admin/api/get-email-data?id="+this.$route.params.id).then((function(t){return t.data})).then((function(e){console.log(e),"ok"==e.status?(t.form.host=e.data.host,t.form.port=e.data.port,t.form.driver=e.data.driver,t.form.encryption=e.data.encryption,t.form.user=e.data.user_name,t.form.sender_name=e.data.sender_name,t.form.sender_email=e.data.sender_email,t.form.defaultMail=e.data.default_email):t.$router.push({name:"admin-email"})})).catch((function(e){console.error(e.response.data),t.$router.push({name:"admin-email"})}))},submitForm:function(){this.form.post("/admin/api/update-email").then((function(t){return t.data})).then((function(t){"ok"==t.status&&swal.fire("Email Account updated",t.msg,"success")})).catch((function(t){console.error(t.response.data)}))}},created:function(){this.getMail()}};const o=(0,a(1900).Z)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header d-flex justify-content-end"},[a("router-link",{staticClass:"raise-button",attrs:{to:{name:"admin-email"}}},[a("i",{staticClass:"fas fa-arrow-left"}),t._v(" Go back")])],1),t._v(" "),a("div",{staticClass:"card-body"},[a("h3",{staticClass:"text-muted text-center"},[t._v("Edit Email Configuration")]),t._v(" "),a("form",{on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[a("div",{staticClass:"row justify-content-center mt-5"},[a("div",{staticClass:"col-md-7 mt-4"},[t._m(0),t._v(" "),a("label",{attrs:{for:""}},[t._v("HOST NAME")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.host,expression:"form.host"}],staticClass:"form-control",attrs:{type:"text",placeholder:"example.com"},domProps:{value:t.form.host},on:{input:function(e){e.target.composing||t.$set(t.form,"host",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"col-md-7 mt-4"},[a("label",{attrs:{for:""}},[t._v("PORT NUMBER")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.port,expression:"form.port"}],staticClass:"form-control",attrs:{type:"number",placeholder:"e.g: 465"},domProps:{value:t.form.port},on:{input:function(e){e.target.composing||t.$set(t.form,"port",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"col-md-7 mt-4"},[a("label",{attrs:{for:""}},[t._v("MAIL DRIVER (SMTP Recommended)")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.driver,expression:"form.driver"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"driver",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"smtp"}},[t._v("SMTP")]),t._v(" "),a("option",{attrs:{value:"mailgun"}},[t._v("MAIL GUN")]),t._v(" "),a("option",{attrs:{value:"sendmail"}},[t._v("SEND MAIL")]),t._v(" "),a("option",{attrs:{value:"postmark"}},[t._v("POST MARK")])])]),t._v(" "),a("div",{staticClass:"col-md-7 mt-4"},[a("label",{attrs:{for:""}},[t._v("ENCRYPTION TYPE (SSL Recommended | Use 'TLS' for GMAIL)")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.encryption,expression:"form.encryption"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"encryption",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"ssl"}},[t._v("SSL")]),t._v(" "),a("option",{attrs:{value:"tls"}},[t._v("TLS")])])]),t._v(" "),a("div",{staticClass:"col-md-7 mt-4"},[t._m(1),t._v(" "),a("label",{attrs:{for:""}},[t._v("USER EMAIL")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user,expression:"form.user"}],staticClass:"form-control",attrs:{type:"email",placeholder:"youruser@name.com"},domProps:{value:t.form.user},on:{input:function(e){e.target.composing||t.$set(t.form,"user",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"col-md-7 mt-4"},[a("label",{attrs:{for:""}},[t._v("CHANGE USER PASSWORD")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.pass,expression:"form.pass"}],staticClass:"form-control",attrs:{type:"password",autocomplete:"off",placeholder:"Type your password"},domProps:{value:t.form.pass},on:{input:function(e){e.target.composing||t.$set(t.form,"pass",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"col-md-7 mt-4"},[a("label",{attrs:{for:""}},[t._v("SENDER EMAIL (Optional)")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.sender_email,expression:"form.sender_email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"youruser@name.com"},domProps:{value:t.form.sender_email},on:{input:function(e){e.target.composing||t.$set(t.form,"sender_email",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"col-md-7 mt-4"},[a("label",{attrs:{for:""}},[t._v("SENDER NAME (Optional)")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.sender_name,expression:"form.sender_name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"youruser@name.com"},domProps:{value:t.form.sender_name},on:{input:function(e){e.target.composing||t.$set(t.form,"sender_name",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"col-md-7 mt-4 mb-4 text-center"},[a("Button",{staticClass:"btn btn-primary w-100",attrs:{form:t.form}},[t._v(" UPDATE")])],1),t._v(" "),a("div",{staticClass:"col-md-7 mt-4 mb-4"},[a("AlertErrors",{attrs:{form:t.form,message:"Something went wrong"}})],1)])])])])])])}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"mb-4 text-muted"},[a("strong",[t._v("HOST INFO")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"mb-4 text-muted"},[a("strong",[t._v("USER CREDENTIALS")])])}],!1,null,null,null).exports}}]);