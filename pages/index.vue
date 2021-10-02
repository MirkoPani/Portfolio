<template>
	<PageHero :heroTitle="heroTitle" :heroSubtitle="heroSubtitle">
		<div class="font-sans mt-6 text-left text-lg">
			<p>{{$t('intro-1')}}</p>
			<p>{{$t('intro-2')}}</p>
			<p>{{$t('intro-3')}}</p>
		</div>
	</PageHero>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	data() {
			return {
				pageTitle: 'Mirko Pani - Portfolio',
				heroTitle: `<span class="align-middle">${this.$t('hello')}</span> <img class="h-20 inline" src="${require("~/assets/icons/hand.svg")}" />!`,
				heroSubtitle : `${this.$t('name')} <span class="text-green-300 font-bold">Mirko Pani</span>.`
			}
		},
		head(): any {
			return {
				title: this.pageTitle
			}
		}
})
</script>

<i18n>
{
  "en": {
	"hello" : "Hello",
	"name": "My name is",
    "intro-1": "I'm a software developer currently living in Vicenza, Italy.",
	"intro-2": "Welcome to my own personal portfolio!",
	"intro-3": "Browse it to find more about me, my projects and my professional experience."
  },
  "it": {
	"hello" : "Ciao",
	"name": "Mi chiamo",
    "intro-1": "Sono un giovane sviluppatore software residente in provincia di Vicenza.",
	"intro-2": "Ti do il benvenuto nel mio portfolio personale!",
	"intro-3": "Puoi trovare maggiori informazioni sulla mia carriera e sui progetti che ho realizzato nel mio tempo libero sfogliando le pagine del sito."
  }
}
</i18n>