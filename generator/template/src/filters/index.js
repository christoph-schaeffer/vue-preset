import Vue from 'vue';
import localizedNumber from './localizedNumber';
import localizedDate from './localizedDate';

export default {
  init() {
    Vue.filter('localizedNumber', localizedNumber);
    Vue.filter('localizedDate', localizedDate);
  },
};
