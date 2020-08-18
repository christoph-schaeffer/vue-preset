import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

const API_URL = 'https://api.example.com';

export default {
  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = API_URL;
  },

  get(resource, slug = '', params = {}) {
    let url = resource;
    if (slug) {
      url = `${resource}/${slug}`;
    }

    return Vue.axios.get(url, { params })
      .catch((error) => {
        throw new Error(`api service ${error}`);
      });
  },
};
