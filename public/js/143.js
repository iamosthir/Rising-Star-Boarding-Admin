(self.webpackChunk=self.webpackChunk||[]).push([[143],{3143:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>s});const a={data:function(){return{form:new Form({content:""})}},mounted:function(){var t=this;$("#content").summernote({dialogsInBody:!0,height:500,blockquoteBreakingLevel:0,lineHeights:["0.2","0.3","0.4","0.5","0.6","0.8","1.0","1.2","1.4","1.5","2.0","3.0"],toolbar:[["style",["style"]],["font",["bold","underline","italic","clear","fontname","fontsize"]],["color",["color"]],["para",["ul","ol","paragraph","height"]],["insert",["link"]],["view",["codeview","help"]]],callbacks:{onChange:function(e,n){t.form.content=e}}})},methods:{getTermsData:function(){var t=this;axios.get("/admin/api/get-terms-data").then((function(t){return t.data})).then((function(e){"ok"==e.status?(t.form.content=e.data.content,t.setSummernote(e.data.content)):t.$router.go(-1)})).catch((function(e){console.error(e.response.data),t.$router.go(-1)}))},setSummernote:function(t){$("#content").summernote("code",t)},submitForm:function(){this.form.post("/admin/api/update-terms").then((function(t){return t.data})).then((function(t){"ok"==t.status&&swal.fire("Data updated",t.msg,"success")})).catch((function(t){console.error(t.response.data)}))}},created:function(){this.getTermsData()}};const s=(0,n(1900).Z)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-header d-flex justify-content-between"},[n("h4",{staticClass:"text-muted"},[t._v("\n                          Terms & Conditions\n                      ")]),t._v(" "),n("router-link",{staticClass:"raise-button",attrs:{to:{name:"admin-sitedata.index"}}},[n("i",{staticClass:"fas fa-arrow-left"}),t._v(" Go back")])],1),t._v(" "),n("div",{staticClass:"card-body"},[n("form",{on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[n("div",{staticClass:"row"},[t._m(0),t._v(" "),n("div",{staticClass:"col-md-12 form-group"},[n("Button",{staticClass:"btn btn-success",attrs:{form:t.form}},[t._v("Update")])],1)])])])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-md-12 form-group"},[n("label",{attrs:{for:""}},[t._v("Write your description here")]),t._v(" "),n("textarea",{attrs:{id:"content"}})])}],!1,null,null,null).exports}}]);