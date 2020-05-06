<template>
  <div>
    <!--    <welcome />-->
    <!--    <recent-projects />-->
    <!--    <services />-->

    <about-me />
    <career />

    <get-in-touch />
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component({
    components: {
      AboutMe: () => import('@/components/AboutMe.vue'),
      GetInTouch: () => import('@/components/GetInTouch.vue'),
      RecentProjects: () => import('@/components/RecentProjects.vue'),
      Services: () => import('@/components/Services.vue'),
      Welcome: () => import('@/components/Welcome.vue'),
      Career: () => import('@/components/Career.vue'),
    },
  })
  export default class CoreView extends Vue {}
</script>
