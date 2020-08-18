export default {
  toggleShowDrawer: ({ commit }) => commit('mutateToggleShowDrawer'),
  setShowDrawer: ({ commit }, payload) => commit('mutateSetShowDrawer', payload),
  setShowDialog: ({ commit }, payload) => commit('mutateSetShowDialog', payload),
};
