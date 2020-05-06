<template>
  <v-app>
    <core-app-bar />
    <core-view />
    <core-footer />
  </v-app>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    CoreAppBar: () => import('@/components/core/AppBar.vue'),
    CoreFooter: () => import('@/components/core/Footer.vue'),
    CoreView: () => import('@/components/core/View.vue'),
  },
})
  export default class App extends Vue {}
</script>
