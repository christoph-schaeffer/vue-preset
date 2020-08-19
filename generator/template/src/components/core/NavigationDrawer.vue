<template lang="pug">
  v-navigation-drawer(app fixed
  v-model="showDrawer" src="@/assets/drawerBackground.jpg" width="260px"
  )
    v-list
      v-list-item
        v-img.mr-2(src="@/assets/logo.svg" max-width="50")
        v-list-item-content
          v-list-item-title {{ $t('common.appName') }}

    v-divider.mb-2.mx-4

    v-list
      v-list-item-group(color="primary")
        v-list-item(v-for="(item, i) in items" :key="'nav-'+i"
          :to="{ name: item.name, params: item.navigationConfig.params }"
        )
          v-list-item-icon
            v-icon {{item.navigationConfig.icon}}
          v-list-item-content
            v-list-item-title {{$t('navigation.'+item.name)}}
</template>

<script>
import routes from '@/router/routes';

export default {
  name: 'NavigationDrawer',
  computed: {
    showDrawer: {
      get() {
        return this.$store.getters['layout/showDrawer'];
      },
      set(value) {
        this.$store.dispatch('layout/setShowDrawer', value);
      },
    },
  },
  data() {
    return {
      items: routes.filter((route) => !!route.navigationConfig),
    };
  },
  mounted() {
    this.showDrawer = ['lg', 'xl'].includes(this.$vuetify.breakpoint.name);
  },
};
</script>
