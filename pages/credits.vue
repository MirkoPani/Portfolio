<template>
  <div>
    <PageHero :heroTitle="heroTitle"/>
    <section class="text-gray-200 container mx-auto md:px-4 ">
      <p class="">
        <i18n path="sentence" tag="span">
          <template v-slot:love>
            <span class="text-red-600 text-lg">&#9829;</span>
          </template>
        </i18n>
        <a target="_blank" class="underline" href="https://nuxtjs.org/">Nuxt.js</a>, <a target="_blank" class="underline" href="https://tailwindcss.com/">Tailwind CSS</a>, <a target="_blank" class="underline" href="https://vuejs.org/">Vue.js</a>.</p>
      <p class="">{{$t('add-res')}} <a target="_blank" href="https://simpleicons.org/" class="underline">Simple Icons</a>, <a target="_blank" class="underline" href="https://www.fontspace.com/pixel-emulator-font-f21507">Pixel emulator font</a></p>
      <p>{{$t('blog')}} </p>
    </section>
  </div>

</template>

<i18n>
{
	"en": {
		"sentence": "Crafted with {love} by Mirko Pani. Made with:",
		"add-res": "Additional resources:",
    "blog": "Blog implemented using Nuxt content.",
    "title": "Credits"
	},
	"it": {
		"sentence": "Sito realizzato con {love} da Mirko Pani. Creato con:",
		"add-res": "Risorse aggiuntive:",
    "blog": "Blog implementato con Nuxt Content.",
    "title": "Crediti"
	}
}
</i18n>


<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    data() {
      return {
        pageTitle: 'Mirko Pani - Credits',
        heroTitle: this.$t("title")
      }
    },
    head(): any {
      return {
        title: this.pageTitle
      }
    }
  })
</script>
