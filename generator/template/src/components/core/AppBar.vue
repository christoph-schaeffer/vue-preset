<template lang="pug">
  v-app-bar(app fixed dark color="primary").d-lg-none
    v-app-bar-nav-icon(@click="toggleShowDrawer()")
    v-toolbar-title {{$t('common.appName')}}
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'NavigationDrawer',
  methods: {
    ...mapActions('layout', [
      'toggleShowDrawer',
    ]),
  },
};
</script>
