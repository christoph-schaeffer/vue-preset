import PlaceholderService from '@/service/placeholder.service';

export default {
  fetchFoo: ({ commit }) => PlaceholderService.get()
    .then(({ data }) => {
      commit('setFoo', data.foo);
    }),
};
