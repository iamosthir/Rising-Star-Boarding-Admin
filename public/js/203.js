(self.webpackChunk=self.webpackChunk||[]).push([[203],{4203:(t,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>a});const n={data:function(){return{form:new Form({content:""})}},mounted:function(){},methods:{submitForm:function(){this.form.post("/admin/api/update-about-us").then((function(t){return t.data})).then((function(t){"ok"==t.status&&swal.fire("Success",t.msg,"success")})).catch((function(t){console.error(t.response.data)}))},getAboutData:function(){var t=this;axios.get("/admin/api/get-about-us").then((function(t){return t.data})).then((function(s){t.form.content=s.content})).catch((function(t){console.error(t.response.data)}))}},created:function(){this.getAboutData()}};const a=(0,e(1900).Z)(n,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"section"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-header d-flex justify-content-between"},[e("h4",{staticClass:"text-muted"},[t._v("\n                          About Us\n                      ")]),t._v(" "),e("router-link",{staticClass:"raise-button",attrs:{to:{name:"admin-sitedata.index"}}},[e("i",{staticClass:"fas fa-arrow-left"}),t._v(" Go back")])],1),t._v(" "),e("div",{staticClass:"card-body"},[e("form",{on:{submit:function(s){return s.preventDefault(),t.submitForm.apply(null,arguments)}}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4 form-group"},[e("label",{attrs:{for:""}},[t._v("Write your description here")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.content,expression:"form.content"}],staticClass:"form-control",staticStyle:{height:"450px !important","font-size":"22px"},domProps:{value:t.form.content},on:{input:function(s){s.target.composing||t.$set(t.form,"content",s.target.value)}}})]),t._v(" "),e("div",{staticClass:"col-md-12 form-group"},[e("Button",{staticClass:"btn btn-success",attrs:{form:t.form}},[t._v("Update")])],1)])])])])])])])}),[],!1,null,null,null).exports}}]);