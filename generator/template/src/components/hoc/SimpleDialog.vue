<template lang="pug">
  v-row(justify='center')
    v-dialog(v-model='showDialog' v-bind="$attrs")
      template(v-slot:activator='activatorParams')
        slot(name="activator" v-bind="activatorParams")
      v-card
        v-card-title
          span.headline(v-if="title") {{title}}
          slot(name="title")
        v-card-text
          v-container
            slot(name="content")
        v-card-actions
          v-spacer
          slot(name="beforeActions")
          v-btn(v-if="!hideCloseButton" text @click="showDialog = false" :color='closeButtonColor')
            | {{$t('common.close')}}
          slot(name="actions")
</template>

<script>
export default {
  name: 'SimpleDialog',
  props: {
    title: {
      type: String,
    },
    hideCloseButton: {
      type: Boolean,
      default: false,
    },
    closeButtonColor: {
      type: String,
      default: 'blue darken-1',
    },
  },
  computed: {
    showDialog: {
      get() {
        return this.$store.getters['layout/showDialog'];
      },
      set(value) {
        this.$store.dispatch('layout/setShowDialog', value);
      },
    },
  },
};
</script>
