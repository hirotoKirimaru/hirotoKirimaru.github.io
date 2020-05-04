<template>
  <v-footer
    height="88"
    class="justify-center"
  >
    <social-media :large="true" />
  </v-footer>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    SocialMedia: () => import('@/components/SocialMedia'),
  },
})
  export default class CoreFooter extends Vue {
  }
</script>
