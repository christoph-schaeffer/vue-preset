import apiService from './index';

const RESOURCE = 'placeholder';

export default {
  get: () => apiService.get(RESOURCE),
};
