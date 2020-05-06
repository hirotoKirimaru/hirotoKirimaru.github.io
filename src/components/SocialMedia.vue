<template>
  <div>
    <v-btn
      v-for="(item, i) in items.slice(0, large ? items.length : 3)"
      :key="i"
      fab
      class="ma-2"
      color="info"
      :small="!large"
    >
      <v-icon
        dark
        v-text="item.icon"
      />
    </v-btn>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'

  @Component
  export default class SocialMedia extends Vue {
    @Prop({ default: false })
    large!: boolean;

    items = [
      {
        name: 'Twitter',
        icon: 'mdi-twitter',
        link: 'https://twitter.com/nainaistar',
      },
      {
        name: 'Facebook',
        icon: 'mdi-facebook',
        link: 'https://www.facebook.com/nainaistar',
      },
      // {
      //   name: 'Email',
      //   icon: 'mdi-email',
      // },
      // {
      //   name: 'Phone',
      //   icon: 'mdi-phone',
      // },
    ];
  }
</script>
