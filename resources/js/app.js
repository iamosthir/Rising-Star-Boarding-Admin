import Vue from "vue";

import Router from "./routes/dashboard";

import VueProgressBar from "vue-progressbar";

import Swal from "sweetalert2";

import moment from "moment";

import Form from 'vform';
import {
    Button,
    HasError,
    AlertError,
    AlertErrors,
    AlertSuccess
} from 'vform/src/components/bootstrap5';

import Multiselect from 'vue-multiselect'

// Toast
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
const toastOption = {
    position: "top-right",
    timeout: 5000,
    closeOnClick: false,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: "button",
    icon: "fas fa-rocket",
    rtl: false
}
Vue.use(Toast,toastOption);
// End





// Axios
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// 
window.swal = Swal;
window.Form = Form;
// 
window.moment = moment;
// 

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('skeleton', require('./components/partials/CustomSkeleton.vue').default);
Vue.component('pagination', require('laravel-vue-pagination'));

// Form
Vue.component(Button.name, Button)
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
Vue.component(AlertErrors.name, AlertErrors)
Vue.component(AlertSuccess.name, AlertSuccess)
Vue.component('multiselect', Multiselect)
// 


// Admin Notification component
Vue.component("app-notification",require("./components/partials/Notification.vue").default);
// End


Vue.use(VueProgressBar, {
    color: 'rgb(55, 161, 237)',
    failedColor: 'red',
    thickness: '5px'
});


Router.beforeEach((to,from,next)=>{
    document.title = to.meta.title || "Rising Star Chows";
    Vue.prototype.$Progress.start();
    next();
});

Router.afterEach(()=>{
    Vue.prototype.$Progress.finish();
});

const app = new Vue({
    el: '#admin',
    router: Router
});
