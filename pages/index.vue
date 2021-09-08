<template>
	<PageHero :heroTitle="heroTitle" :heroSubtitle="heroSubtitle">
		<div class="font-sans mt-6">
			<p>Sono un giovane sviluppatore full-stack residente in provincia di Vicenza.</p>
			<p>Ti do il benvenuto nel mio piccolo spazio personale!</p>
		</div>
	</PageHero>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	data() {
			return {
				pageTitle: 'Mirko Pani - Portfolio',
				heroTitle: "Ciao &#129299;!",
				heroSubtitle : 'Mi chiamo <span class="text-green-300 font-bold">Mirko Pani</span>'
			}
		},
		head() {
			return {
				title: this.pageTitle
			}
		}
})
</script>
