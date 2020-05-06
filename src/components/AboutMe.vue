<template>
  <section
    id="about"
    class="overflow-hidden"
  >
    <v-row
      class="white"
      no-gutters
    >
      <v-col
        class="pa-5"
        cols="12"
        md="6"
      >
        <base-bubble-1 style="transform: translate(5%, -5%)" />

        <base-heading class="info--text">
          About Me
        </base-heading>

        <base-text class="mb-5">
          水上 皓登 Mizukami Hiroto<br>
          nainaistar@gmail.com
        </base-text>

        <base-text class="mb-5">
          千葉にてJavaを基本にしたエンジニアをやっています。<br>
          基本はバックエンドエンジニアとして働いていました。<br>
          趣味としてはVue.js, typescriptを好んで使用しています。
        </base-text>

        <base-subheading class="info--text">
          Skills
        </base-subheading>

        <v-alert
          outlined
          color="info"
        >
          <v-row
            v-for="(skill, i) in skills"
            :key="i"
            style="color: #69A1BB;"
          >
            <v-col
              class="text-uppercase"
              cols="6"
              v-text="skill.name"
            />

            <v-col
              class="text-right"
              cols="6"
              v-text="`${skill.value}`"
            />

            <v-progress-linear
              :value="skill.percent"
              color="info"
              height="8"
            />
          </v-row>
        </v-alert>
      </v-col>

      <v-col
        class="hidden-sm-and-down"
        md="6"
      >
        <v-img
          :src="require('@/assets/profile.jpg')"
          height="100%"
        />
      </v-col>
    </v-row>
  </section>
</template>

<script>
  export default {
    data: () => ({
      skills: [
        {
          name: 'Java',
          value: '5.5年',
          percent: 100,
        },
        {
          name: 'VB.net',
          value: '1.5年',
          percent: 30,
        },
        {
          name: 'Docker',
          value: '1.5年',
          percent: 30,
        },
        {
          name: 'Vue.js',
          value: '3カ月',
          percent: 5,
        },
        {
          name: 'TypeScript',
          value: '3カ月',
          percent: 5,
        },
      ],
    }),
  }
</script>
