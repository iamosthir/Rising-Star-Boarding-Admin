(self.webpackChunk=self.webpackChunk||[]).push([[679],{7757:(t,e,r)=>{t.exports=r(3076)},3076:t=>{var e=function(t){"use strict";var e,r=Object.prototype,o=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},n=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function l(t,e,r,o){var a=e&&e.prototype instanceof h?e:h,n=Object.create(a.prototype),i=new D(o||[]);return n._invoke=function(t,e,r){var o=d;return function(a,n){if(o===m)throw new Error("Generator is already running");if(o===v){if("throw"===a)throw n;return $()}for(r.method=a,r.arg=n;;){var i=r.delegate;if(i){var s=k(i,r);if(s){if(s===p)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===d)throw o=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=m;var c=u(t,e,r);if("normal"===c.type){if(o=r.done?v:f,c.arg===p)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(o=v,r.method="throw",r.arg=c.arg)}}}(t,r,i),n}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var d="suspendedStart",f="suspendedYield",m="executing",v="completed",p={};function h(){}function g(){}function _(){}var y={};y[n]=function(){return this};var w=Object.getPrototypeOf,C=w&&w(w(N([])));C&&C!==r&&o.call(C,n)&&(y=C);var b=_.prototype=h.prototype=Object.create(y);function x(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(a,n,i,s){var c=u(t[a],t,n);if("throw"!==c.type){var l=c.arg,d=l.value;return d&&"object"==typeof d&&o.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,i,s)}),(function(t){r("throw",t,i,s)})):e.resolve(d).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,s)}))}s(c.arg)}var a;this._invoke=function(t,o){function n(){return new e((function(e,a){r(t,o,e,a)}))}return a=a?a.then(n,n):n()}}function k(t,r){var o=t.iterator[r.method];if(o===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method))return p;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var a=u(o,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,p;var n=a.arg;return n?n.done?(r[t.resultName]=n.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,p):n:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function D(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function N(t){if(t){var r=t[n];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function r(){for(;++a<t.length;)if(o.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:$}}function $(){return{value:e,done:!0}}return g.prototype=b.constructor=_,_.constructor=g,g.displayName=c(_,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,c(t,s,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},x(E.prototype),E.prototype[i]=function(){return this},t.AsyncIterator=E,t.async=function(e,r,o,a,n){void 0===n&&(n=Promise);var i=new E(l(e,r,o,a),n);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(b),c(b,s,"Generator"),b[n]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var o=e.pop();if(o in t)return r.value=o,r.done=!1,r}return r.done=!0,r}},t.values=N,D.prototype={constructor:D,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(o,a){return s.type="throw",s.arg=t,r.next=o,a&&(r.method="next",r.arg=e),!!a}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],s=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),l=o.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&o.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var n=a;break}}n&&("break"===t||"continue"===t)&&n.tryLoc<=e&&e<=n.finallyLoc&&(n=null);var i=n?n.completion:{};return i.type=t,i.arg=e,n?(this.method="next",this.next=n.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var o=r.completion;if("throw"===o.type){var a=o.arg;P(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,o){return this.delegate={iterator:N(t),resultName:r,nextLoc:o},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}},1679:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>s});var o=r(7757),a=r.n(o);function n(t,e,r,o,a,n,i){try{var s=t[n](i),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(o,a)}const i={data:function(){return{petData:{},form:new Form({petId:this.$route.params.petId,name:"",breed:"",color:"",age:"",feeding:"",medic:"",rabies:"",photo:"",vac:""}),is_loading:!0,edit_mode:!1}},created:function(){this.getPetData()},methods:{getPetData:function(){var t=this;axios.get("/admin/api/get-single-pet-data",{params:{petId:this.$route.params.petId}}).then((function(t){return t.data})).then((function(e){"ok"==e.status?(t.petData=e.data,t.form.name=e.data.name,t.form.breed=e.data.breed,t.form.color=e.data.color,t.form.age=e.data.age,t.form.feeding=e.data.feeding,t.form.medic=e.data.medic,t.is_loading=!1):t.$router.push({name:"pets.list"})})).catch((function(e){console.log(e.response.data),t.$router.push({name:"pets.list"})}))},updatePet:function(){var t,e=this;return(t=a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.form.post("/admin/api/update-pet",{}).then((function(t){return t.data})).then((function(t){"ok"==t.status&&(swal.fire("Success",t.msg,"success"),e.edit_mode=!1,e.is_loading=!0,e.getPetData())})).catch((function(t){console.error(t.response.data)}));case 2:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function s(t){n(i,o,a,s,c,"next",t)}function c(t){n(i,o,a,s,c,"throw",t)}s(void 0)}))})()},fileChange:function(t){var e=t.target.files[0],r=$(t.target).data("type");"photo"==r?this.form.photo=e||"":"vac"==r&&(this.form.vac=e||"")}}};const s=(0,r(1900).Z)(i,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"section"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[r("h4",[t._v(t._s(t.petData.name))])]),t._v(" "),r("div",{staticClass:"card-body"},[t.is_loading?r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-2"},[r("skeleton",{attrs:{width:"100%",height:"250px"}})],1),t._v(" "),r("div",{staticClass:"col-md-10"},[r("div",{staticClass:"row"},t._l(6,(function(t,e){return r("div",{key:e,staticClass:"col-md-4 form-group"},[r("skeleton",{attrs:{width:"100%",height:"100px"}})],1)})),0)]),t._v(" "),r("div",{staticClass:"col-md-12 form-group"},[r("skeleton",{attrs:{width:"30%",height:"20px"}}),t._v(" "),r("br"),t._v(" "),r("br"),t._v(" "),r("skeleton",{attrs:{width:"60%",height:"20px"}}),t._v(" "),r("br"),t._v(" "),r("skeleton",{attrs:{width:"60%",height:"20px"}})],1),t._v(" "),r("div",{staticClass:"col-md-12 form-group"},[r("skeleton",{attrs:{width:"30%",height:"20px"}}),t._v(" "),r("br"),t._v(" "),r("br"),t._v(" "),r("skeleton",{attrs:{width:"60%",height:"20px"}}),t._v(" "),r("br"),t._v(" "),r("skeleton",{attrs:{width:"60%",height:"20px"}})],1)]):t._e(),t._v(" "),t.is_loading||t.edit_mode?t._e():r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12 form-group"},[r("h4",{staticClass:"text-muted"},[t._v("Owner : "),r("strong",{staticClass:"text-warning"},[t._v(t._s(t.petData.customer.first_name+" "+t.petData.customer.last_name))])])]),t._v(" "),r("div",{staticClass:"col-md-2 form-group"},[t.petData.photo?r("img",{staticClass:"dog-img",attrs:{src:"/uploads/customer/"+t.petData.customer_id+"/"+t.petData.photo,alt:""}}):r("img",{staticClass:"dog-img",attrs:{src:"/images/dog-placeholder-tall.svg",alt:""}})]),t._v(" "),r("div",{staticClass:"col-md-10 form-group"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-4 form-group"},[r("strong",[t._v("Pet Name")]),t._v(" "),r("br"),t._v(" "),r("p",{staticClass:"text-muted"},[t._v(t._s(t.petData.name))])]),t._v(" "),r("div",{staticClass:"col-md-4 form-group"},[r("strong",[t._v("Pet Color")]),t._v(" "),r("br"),t._v(" "),r("p",{staticClass:"text-muted"},[t._v(t._s(t.petData.color))])]),t._v(" "),r("div",{staticClass:"col-md-4 form-group"},[r("strong",[t._v("Pet Breed")]),t._v(" "),r("br"),t._v(" "),r("p",{staticClass:"text-muted"},[t._v(t._s(t.petData.breed))])]),t._v(" "),r("div",{staticClass:"col-md-4 form-group"},[r("strong",[t._v("Age")]),t._v(" "),r("br"),t._v(" "),r("p",{staticClass:"text-muted"},[t._v(t._s(t.petData.age))])]),t._v(" "),r("div",{staticClass:"col-md-4 form-group"},[r("strong",[t._v("Rabies Exp. Date")]),t._v(" "),r("br"),t._v(" "),r("p",{staticClass:"text-muted"},[t._v(t._s(t.petData.rabies||"N/A"))])]),t._v(" "),r("div",{staticClass:"col-md-4 form-group"},[r("strong",[t._v("Vaccination Record")]),t._v(" "),r("br"),t._v(" "),t.petData.vac_record?r("span",{staticClass:"text-muted"},[t._v("Yes "),r("i",{staticClass:"fas fa-check text-success"}),t._v(" "),r("a",{staticClass:"ml-3",attrs:{href:"/uploads/customer/"+t.petData.customer_id+"/"+t.petData.vac_record,target:"_blank",title:"Download"}},[r("i",{staticClass:"fas fa-download"})])]):r("span",{staticClass:"text-muted"},[t._v("No "),r("i",{staticClass:"fas fa-times text-danger"})])])])]),t._v(" "),r("div",{staticClass:"col-md-12 form-group"},[r("strong",[t._v("Feeding Instruction")]),t._v(" "),r("br"),t._v(" "),r("p",{staticClass:"text-muted",staticStyle:{"white-space":"pre-wrap"}},[t._v(t._s(t.petData.feeding))])]),t._v(" "),r("div",{staticClass:"col-md-12 form-group"},[r("strong",[t._v("Medication")]),t._v(" "),r("br"),t._v(" "),r("p",{staticClass:"text-muted",staticStyle:{"white-space":"pre-wrap"}},[t._v(t._s(t.petData.medic))])]),t._v(" "),r("div",{staticClass:"col-md-12 form-group"},[r("button",{staticClass:"btn btn-primary",on:{click:function(e){t.edit_mode=!0}}},[t._v("Edit")])])]),t._v(" "),!t.is_loading&&t.edit_mode?r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12"},[r("form",{on:{submit:function(e){return e.preventDefault(),t.updatePet.apply(null,arguments)}}},[t._m(0),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-3 form-group"},[r("label",{attrs:{for:""}},[t._v("Pet Name")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("name")},attrs:{type:"text"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),t._v(" "),r("HasError",{attrs:{form:t.form,field:"name"}})],1),t._v(" "),r("div",{staticClass:"col-md-3 form-group"},[r("label",{attrs:{for:""}},[t._v("Pet Color")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.color,expression:"form.color"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("color")},attrs:{type:"text"},domProps:{value:t.form.color},on:{input:function(e){e.target.composing||t.$set(t.form,"color",e.target.value)}}}),t._v(" "),r("HasError",{attrs:{form:t.form,field:"color"}})],1),t._v(" "),r("div",{staticClass:"col-md-3 form-group"},[r("label",{class:{"is-invalid":t.form.errors.has("breed")},attrs:{for:""}},[t._v("Pet Breed")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.breed,expression:"form.breed"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.form.breed},on:{input:function(e){e.target.composing||t.$set(t.form,"breed",e.target.value)}}}),t._v(" "),r("HasError",{attrs:{form:t.form,field:"breed"}})],1),t._v(" "),r("div",{staticClass:"col-md-3 form-group"},[r("label",{attrs:{for:""}},[t._v("Age")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.age,expression:"form.age"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("age")},attrs:{type:"text"},domProps:{value:t.form.age},on:{input:function(e){e.target.composing||t.$set(t.form,"age",e.target.value)}}}),t._v(" "),r("HasError",{attrs:{form:t.form,field:"age"}})],1),t._v(" "),r("div",{staticClass:"col-md-4 form-group"},[r("label",{attrs:{for:""}},[t._v("Rabies Exp. Date")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.rabies,expression:"form.rabies"}],staticClass:"form-control",attrs:{type:"date"},domProps:{value:t.form.rabies},on:{input:function(e){e.target.composing||t.$set(t.form,"rabies",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"col-md-4 form-group"},[r("label",{attrs:{for:""}},[t._v("Upload New Photo")]),t._v(" "),r("input",{staticClass:"form-control-file",attrs:{type:"file","data-type":"photo"},on:{change:t.fileChange}})]),t._v(" "),r("div",{staticClass:"col-md-4 form-group"},[r("label",{attrs:{for:""}},[t._v("Vaccination Record (Scanned Photo)")]),t._v(" "),r("input",{staticClass:"form-control-file",attrs:{type:"file","data-type":"vac"},on:{change:t.fileChange}})]),t._v(" "),r("div",{staticClass:"col-md-12 form-group"},[r("label",{attrs:{for:""}},[t._v("Feeding Instruction")]),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.feeding,expression:"form.feeding"}],staticClass:"form-control",staticStyle:{height:"150px !important"},attrs:{rows:"10"},domProps:{value:t.form.feeding},on:{input:function(e){e.target.composing||t.$set(t.form,"feeding",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"col-md-12 form-group"},[r("label",{attrs:{for:""}},[t._v("Medication")]),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.medic,expression:"form.medic"}],staticClass:"form-control",staticStyle:{height:"150px !important"},attrs:{rows:"10"},domProps:{value:t.form.medic},on:{input:function(e){e.target.composing||t.$set(t.form,"medic",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"col-md-12 form-group"},[r("Button",{staticClass:"btn btn-success",attrs:{form:t.form}},[t._v("Update")]),t._v(" "),r("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){t.edit_mode=!1}}},[t._v("Cancel Edit")])],1)])])])]):t._e()])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("fieldset",[r("legend",{staticClass:"text-muted"},[t._v("Edit Details")])])}],!1,null,null,null).exports}}]);