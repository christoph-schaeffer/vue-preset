import Vue from 'vue';
import Vuex from 'vuex';

import layout from '@/store/modules/layout';
import placeholder from '@/store/modules/placeholder';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    layout,
    placeholder,
  },
});
