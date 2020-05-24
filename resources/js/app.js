/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
window.Vue = require('vue');
import Editor from 'v-markdown-editor'
// global register
Vue.use(Editor);
import Vuex from 'vuex'
Vue.use(Vuex)
import storeData from "./store/index"
const store = new Vuex.Store(
    storeData
)
// vue router
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import {filter} from './filter'
import {routes} from './routes';
Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('admin-main', require('./components/admin/AdminMaster.vue').default);
Vue.component('home-main', require('./components/public/PublicMaster.vue').default);
//v-form
import { Form,HasError,AlertError,} from 'vform'

Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
window.Form=Form;
//app.js
import swal from 'sweetalert2'
  window.swal =  swal;
const toast =  swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});
window.toast =  toast;
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const router = new VueRouter({
    mode:'hash',
    routes

})

const app = new Vue({
    el: '#app',
    router,
    store
});
