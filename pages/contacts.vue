<template>
	<PageHero :heroTitle="heroTitle" :heroSubtitle="heroSubtitle"/>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
      return {
        pageTitle: 'Mirko Pani - Contatti',
		heroTitle: "Contatti",
		heroSubtitle : 'Mettiamoci in contatto!'
      }
    },
    head() {
      return {
        title: this.pageTitle
      }
    }
})
</script>
