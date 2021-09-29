<template>
	<PageHero :heroTitle="heroTitle" :heroSubtitle="heroSubtitle">
		<div class="font-sans mt-6 text-left text-lg">
			<p>Sono un giovane sviluppatore software residente in provincia di Vicenza. Ti do il benvenuto nel mio portfolio personale!</p>
			<p>Puoi trovare maggiori informazioni sulla mia carriera e sui progetti che ho realizzato nel mio tempo libero sfogliando le pagine del sito.</p>
		</div>
	</PageHero>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	data() {
			return {
				pageTitle: 'Mirko Pani - Portfolio',
				heroTitle: '<span class="align-middle">Ciao</span> <img class="h-20 inline" src="'+require("~/assets/icons/hand.svg")+'" />!', //<img class="h-20 inline" src="'+require("~/assets/icons/hand.svg")+'" />!
				heroSubtitle : 'Mi chiamo <span class="text-green-300 font-bold">Mirko Pani</span>.'
			}
		},
		head(): any {
			return {
				title: this.pageTitle
			}
		}
})
</script>
