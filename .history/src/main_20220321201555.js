import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import Vuelidate from 'vuelidate';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Pagination from 'vue-pagination-2';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/scss/index.scss';

Vue.config.productionTip = false;

// bootstrap vue
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

// vuelidate
Vue.use(Vuelidate);

// axios
Vue.use(VueAxios, axios);

Vue.component('pagination', Pagination);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
