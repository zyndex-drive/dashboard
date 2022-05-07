import Vue from 'vue';
import meta from 'vue-meta';
import moment from 'vue-moment';
import lodash from 'lodash';
import Notifications from 'vue-notification';

import loader from '@components/progress-loader';
import { store, vuetify } from '@plugins';
import router from '@router';

import App from './App.vue';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';
import '@styles/register.scss';

Vue.config.productionTip = false;

Vue.use(moment);
Vue.use(Notifications);
Vue.use(meta, {
  refreshOnceOnNavigation: true,
});

Vue.prototype.$loader = loader;
Vue.prototype.$lodash = lodash;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
