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
    CoreAppBar: () => import('@/components/core/AppBar'),
    CoreFooter: () => import('@/components/core/Footer'),
    CoreView: () => import('@/components/core/View'),
  },
})
  export default class App extends Vue {}
</script>
