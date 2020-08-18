import Vue from 'vue';
import App from '@/App.vue';

import router from '@/router';
import store from '@/store';
import vuetify from '@/plugins/vuetify';
import i18n from '@/plugins/i18n';
import apiService from '@/service';
import filters from '@/filters';

import '@/registerServiceWorker';

import '@/styles/custom.sass';

Vue.config.productionTip = false;
apiService.init();
filters.init();

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
