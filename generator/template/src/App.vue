<template lang="pug">
  v-app
    NavigationDrawer
    AppBar
    v-main.pt-lg-0
      router-view
</template>

<script>
import NavigationDrawer from '@/components/core/NavigationDrawer';
import AppBar from '@/components/core/AppBar';

export default {
  name: 'App',
  components: {
    NavigationDrawer,
    AppBar,
  },
};
</script>
