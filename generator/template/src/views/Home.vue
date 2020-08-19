<template lang="pug">
  .home
    v-card.ma-3.ma-md-6.pa-3.pa-md-6
      img(alt='Vue logo' src='../assets/logo.png')
      HelloWorld(msg='Welcome to Your Vue.js App')
</template>

<script>
import HelloWorld from '@/components/HelloWorld';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
};
</script>
